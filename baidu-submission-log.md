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
