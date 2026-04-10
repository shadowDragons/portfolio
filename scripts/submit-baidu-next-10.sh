#!/bin/sh
set -eu

ROOT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
URL_FILE="${URL_FILE:-$ROOT_DIR/urls.txt}"
SUCCESS_FILE="${SUCCESS_FILE:-$ROOT_DIR/baidu-submitted-urls.txt}"
PENDING_FILE="${PENDING_FILE:-$ROOT_DIR/baidu-pending-urls.txt}"
LOG_FILE="${LOG_FILE:-$ROOT_DIR/baidu-submission-log.md}"
API_URL="${BAIDU_API_URL:-http://data.zz.baidu.com/urls?site=https://sphrag.com&token=GdvLJKiH0Ik8dxY2}"
BATCH_SIZE="${BATCH_SIZE:-10}"
DRY_RUN="${DRY_RUN:-0}"

if [ ! -f "$URL_FILE" ]; then
  printf 'URL file not found: %s\n' "$URL_FILE" >&2
  exit 1
fi

touch "$SUCCESS_FILE"
touch "$LOG_FILE"

refresh_pending_file() {
  awk 'NR==FNR { seen[$0]=1; next } !seen[$0]' "$SUCCESS_FILE" "$URL_FILE" > "$PENDING_FILE"
}

refresh_pending_file

if [ ! -s "$PENDING_FILE" ]; then
  printf 'No remaining URLs to submit.\n'
  exit 0
fi

BATCH_FILE=$(mktemp)
RUN_SUCCESS_FILE=$(mktemp)
RUN_FAIL_FILE=$(mktemp)
trap 'rm -f "$BATCH_FILE" "$RUN_SUCCESS_FILE" "$RUN_FAIL_FILE"' EXIT HUP INT TERM

sed -n "1,${BATCH_SIZE}p" "$PENDING_FILE" > "$BATCH_FILE"

if [ "$DRY_RUN" = "1" ]; then
  printf 'Next batch (%s URLs):\n' "$(grep -c . "$BATCH_FILE" || true)"
  cat "$BATCH_FILE"
  exit 0
fi

STOP_REASON="completed batch"

while IFS= read -r url; do
  [ -n "$url" ] || continue

  if response=$(curl -sS -w '\n%{http_code}' -H 'Content-Type:text/plain' --data-binary "$url" "$API_URL" 2>&1); then
    http_code=$(printf '%s\n' "$response" | tail -n 1)
    body=$(printf '%s\n' "$response" | sed '$d')

    if [ "$http_code" = "200" ] && printf '%s' "$body" | grep -q '"success":1'; then
      if ! grep -Fxq "$url" "$SUCCESS_FILE"; then
        printf '%s\n' "$url" >> "$SUCCESS_FILE"
      fi
      printf '%s\t%s\t%s\n' "$url" "$http_code" "$body" >> "$RUN_SUCCESS_FILE"
      continue
    fi

    printf '%s\t%s\t%s\n' "$url" "$http_code" "$body" >> "$RUN_FAIL_FILE"

    if printf '%s' "$body" | grep -q '"message":"over quota"'; then
      STOP_REASON="over quota"
      break
    fi

    continue
  fi

  curl_exit=$?
  printf '%s\tcurl_exit=%s\t%s\n' "$url" "$curl_exit" "$response" >> "$RUN_FAIL_FILE"
done < "$BATCH_FILE"

refresh_pending_file

timestamp=$(TZ=Asia/Shanghai date '+%Y-%m-%d %H:%M')
batch_target=$(grep -c . "$BATCH_FILE" || true)
run_success=$(grep -c . "$RUN_SUCCESS_FILE" || true)
run_failed=$(grep -c . "$RUN_FAIL_FILE" || true)
run_attempted=$((run_success + run_failed))
total_submitted=$(grep -c . "$SUCCESS_FILE" || true)
remaining_total=$(grep -c . "$PENDING_FILE" || true)

{
  printf '\n## %s / Baidu URL push\n\n' "$timestamp"
  printf -- '- batch target: %s\n' "$batch_target"
  printf -- '- attempted: %s\n' "$run_attempted"
  printf -- '- success: %s\n' "$run_success"
  printf -- '- failed: %s\n' "$run_failed"
  printf -- '- total submitted: %s\n' "$total_submitted"
  printf -- '- remaining: %s\n' "$remaining_total"
  printf -- '- stop reason: %s\n\n' "$STOP_REASON"
  printf '### Success\n'
  if [ -s "$RUN_SUCCESS_FILE" ]; then
    while IFS= read -r line; do
      printf -- '- %s\n' "$line"
    done < "$RUN_SUCCESS_FILE"
  else
    printf -- '- none\n'
  fi
  printf '\n### Failed\n'
  if [ -s "$RUN_FAIL_FILE" ]; then
    while IFS= read -r line; do
      printf -- '- %s\n' "$line"
    done < "$RUN_FAIL_FILE"
  else
    printf -- '- none\n'
  fi
} >> "$LOG_FILE"

printf 'batch_target=%s attempted=%s success=%s failed=%s total_submitted=%s remaining=%s stop_reason=%s\n' \
  "$batch_target" \
  "$run_attempted" \
  "$run_success" \
  "$run_failed" \
  "$total_submitted" \
  "$remaining_total" \
  "$STOP_REASON"
