# SEO 执行日志

## 目标

记录 SEO 执行过程、关键决策、已完成项、验证结果和下一步，避免后续因为上下文丢失而重头再来。

## 当前阶段

- 阶段：第一阶段
- 时间：2026-03-30
- 目标：先把站点的 SEO 技术地基打稳，让 Google 可以正确抓取、理解和索引。

## 基线问题

启动第一阶段前，已确认的基础问题如下：

1. 线上主域名内容与当前要做 SEO 的“致诚工作室 / 网站开发服务站”定位可能不完全一致。
2. 站点当前几乎只有首页，缺少服务页、案例页和文章页，SEO 承接能力不足。
3. 全局 metadata 只有一份，缺少页面级 title、description、canonical 和 hreflang。
4. `public/sitemap.xml` 结构错误：
   - 使用了 `sitemapindex`
   - 但里面写的是页面 URL，不是子 sitemap
   - URL 还是 `http://`
5. `public/robots.txt` 和 `sitemap.xml` 属于静态文件，不利于后续随着页面增长自动维护。
6. 首页虽然已经有较强的设计表达，但现有结构里有一部分描述文案没有真正渲染到页面上，SEO 可抓取文本偏少。

## 第一阶段范围

第一阶段只做技术基建，不展开内容矩阵：

- 统一 SEO 配置来源
- 页面级 metadata
- canonical / hreflang
- 动态 robots
- 动态 sitemap
- 基础结构化数据
- 首页现有文案的可抓取性增强
- 过程记录机制

## 决策记录

### 决策 1：新建统一站点配置文件

文件：

- `src/lib/site-config.ts`

原因：

- 之前站点信息散落在 layout 里，后面新增服务页和案例页时容易重复维护
- 把域名、品牌、默认语言、SEO 文案、URL helper、metadata helper 放在一起，后续扩展会更稳

### 决策 2：用 App Router 动态生成 `robots.txt` 和 `sitemap.xml`

文件：

- `src/app/robots.ts`
- `src/app/sitemap.ts`

原因：

- 当前静态 sitemap 结构有误
- 后续页面增加后，动态生成更不容易漏

### 决策 3：首页先补“技术 SEO + 可抓取文本”，不急着进入大规模改版

原因：

- 第一阶段的核心是修基础设施
- 先让搜索引擎正确理解首页和双语关系，再进入服务页和案例页建设

## 已完成项

- [x] 新建统一 SEO 配置文件
- [x] 首页页面级 metadata 改为按 locale 生成
- [x] 首页补 canonical 和 hreflang
- [x] 新增基础 JSON-LD 结构化数据
- [x] 用 App Router 生成 `robots.txt`
- [x] 用 App Router 生成 `sitemap.xml`
- [x] 删除旧的静态 `robots.txt` 和 `sitemap.xml`
- [x] 首页补充可抓取的区块描述文案
- [x] 建立本日志文件

## 本阶段文件变更

- `src/lib/site-config.ts`
- `src/components/StructuredData.tsx`
- `src/app/[locale]/layout.tsx`
- `src/app/[locale]/page.tsx`
- `src/app/robots.ts`
- `src/app/sitemap.ts`
- `src/components/BusinessHome.tsx`
- `messages/zh.json`
- `messages/en.json`
- `seo.md`
- `seo-log.md`

## 验证计划

代码改完后，需要完成以下验证：

1. 本地 `build` 通过
2. 访问 `/robots.txt` 输出正确
3. 访问 `/sitemap.xml` 输出正确
4. 中文首页和英文首页的 `<title>`、`description`、canonical、hreflang 正确
5. 页面源码中可见 JSON-LD

## 验证结果

### 2026-03-30 / 第一阶段代码验证

已完成验证：

1. `npm run lint` 通过
2. `npm run build` 通过
3. 本地 `robots.txt` 实际输出正确：
   - `Allow: /`
   - `Host: https://sphrag.com`
   - `Sitemap: https://sphrag.com/sitemap.xml`
4. 本地 `sitemap.xml` 实际输出正确：
   - 结构为合法 `urlset`
   - URL 已统一为 `https://`
   - 当前收录入口为 `/zh` 与 `/en`
5. 通过编译产物确认首页 metadata helper 和 JSON-LD 已进入服务端产物：
   - `canonical`
   - `hreflang`
   - locale 级标题和描述
   - `Organization` / `WebSite` / `WebPage` / `Service` 结构化数据

当前限制：

- 在当前沙箱环境里，请求本地 `/zh` 页面时出现 `socket hang up` 代理问题，因此没有完成一次稳定的整页 HTML 抓取。
- 这更像本地运行环境限制，不像代码错误，因为：
  - `build` 已通过
  - `robots.txt` 和 `sitemap.xml` 输出已验证
  - 服务端编译产物里已经能看到 metadata 和 JSON-LD 生成逻辑

待上线后补做：

1. 在线检查真实页面源码里的 `<title>`、canonical、hreflang 和 JSON-LD
2. 在 Google Search Console 重新提交 `sitemap.xml`
3. 用 URL Inspection 检查 `/zh` 是否已正确索引
4. 确认主域名线上版本已经切换到当前业务站，而不是旧作品集

## 遗留提醒

当前验证过程中还看到两个非阻塞告警：

1. `next build` 提示 `next.config.js` 中存在 `env._next_intl_trailing_slash` 相关配置告警
2. `Browserslist` 数据较旧，后续可以单独更新

这两个都不是本次 SEO 改动引入的问题，但建议后面顺手清掉。

## 下一步

第一阶段做完后，进入第二阶段：

1. 新增“网站开发服务页”
2. 新增“企业官网开发页”
3. 新增“外贸网站开发页”
4. 新增“小程序开发页”
5. 新增“企业系统开发页”

## 备注

本文件之后会持续更新。每做完一个阶段，都会补：

- 做了什么
- 为什么这么做
- 验证结果
- 遗留问题
- 下一步
