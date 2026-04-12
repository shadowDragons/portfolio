# Baidu URL Submission Log

Tracks Baidu URL submissions for `https://sphrag.com` Chinese pages.

## 2026-04-10 11:14 / Initial manual run

- source file: `urls.txt`
- scope: Chinese `/zh` URLs only
- attempted: 57
- success: 10
- failed: 47
- remaining quota after the 10th success: `0`
- stop reason: Baidu returned `{"error":400,"message":"over quota"}` from the 11th URL onward
- next daily batch size: 10
- remaining URLs after this run: 47

### Success

- https://sphrag.com/zh
- https://sphrag.com/zh/blog
- https://sphrag.com/zh/services
- https://sphrag.com/zh/services/website-development
- https://sphrag.com/zh/services/company-website-development
- https://sphrag.com/zh/services/foreign-trade-website-development
- https://sphrag.com/zh/services/mini-program-development
- https://sphrag.com/zh/services/web-app-development
- https://sphrag.com/zh/blog/website-development-cost
- https://sphrag.com/zh/blog/website-development-process

### Notes

- The first failed URL was `https://sphrag.com/zh/blog/custom-vs-template-website`.
- Future runs should submit only the next 10 URLs from `baidu-pending-urls.txt`.

## 2026-04-10 13:35 / Baidu URL push

- batch target: 10
- attempted: 1
- success: 0
- failed: 1
- total submitted: 10
- remaining: 47
- stop reason: over quota

### Success
- none

### Failed
- https://sphrag.com/zh/blog/custom-vs-template-website	400	{"error":400,"message":"over quota"}

## 2026-04-11 19:19 / Baidu URL push

- batch target: 10
- attempted: 10
- success: 10
- failed: 0
- total submitted: 20
- remaining: 37
- stop reason: completed batch

### Success
- https://sphrag.com/zh/blog/custom-vs-template-website	200	{"remain":9,"success":1}
- https://sphrag.com/zh/blog/multilingual-website-seo	200	{"remain":8,"success":1}
- https://sphrag.com/zh/blog/enterprise-system-requirements	200	{"remain":7,"success":1}
- https://sphrag.com/zh/blog/company-website-pages-checklist	200	{"remain":6,"success":1}
- https://sphrag.com/zh/blog/company-website-redesign-mistakes	200	{"remain":5,"success":1}
- https://sphrag.com/zh/blog/foreign-trade-website-content-structure	200	{"remain":4,"success":1}
- https://sphrag.com/zh/blog/foreign-trade-website-inquiry-conversion	200	{"remain":3,"success":1}
- https://sphrag.com/zh/blog/mini-program-project-planning	200	{"remain":2,"success":1}
- https://sphrag.com/zh/blog/website-development-quote-checklist	200	{"remain":1,"success":1}
- https://sphrag.com/zh/blog/company-website-preparation-checklist	200	{"remain":0,"success":1}

### Failed
- none
