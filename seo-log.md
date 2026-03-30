# SEO 执行日志

## 目标

记录 SEO 执行过程、关键决策、已完成项、验证结果和下一步，避免后续因为上下文丢失而重头再来。

## 当前阶段

- 阶段：第四阶段
- 时间：2026-03-30
- 目标：在保留 SEO 基础和服务页体系的前提下，搭建文章内容体系，用长尾问题去承接“网站开发”相关搜索意图。

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

## 第二阶段范围

第二阶段的目标是把关键词承接页真正搭起来：

- 新增服务总览页
- 新增 5 个核心服务页
- 每个服务页补 metadata、canonical、hreflang
- 每个服务页补 `Service` / `BreadcrumbList` / `FAQPage` 结构化数据
- 首页新增服务页入口
- sitemap 纳入服务总览页和服务详情页

## 第二阶段决策记录

### 决策 4：服务页用“数据层 + 动态路由”实现

文件：

- `src/lib/service-pages.ts`
- `src/app/[locale]/services/page.tsx`
- `src/app/[locale]/services/[slug]/page.tsx`

原因：

- 5 个服务页如果手写 5 套页面，后面维护成本会快速上升
- 用数据层管理 slug、关键词、FAQ、结构化数据和站点路径，后面加第 6 个服务页时可以复用同一套模板

### 决策 5：首页不硬塞 5 张新卡片，而是新增“服务页入口”

文件：

- `src/components/BusinessHome.tsx`

原因：

- 首页原本的服务区已经成型，直接改成 5 张新卡片会破坏当前版式
- 先用一个清晰的服务页入口把权重导向 `/services`，既保留现有视觉，也能把新页接进站内结构

## 第二阶段已完成项

- [x] 新增服务总览页 `/[locale]/services`
- [x] 新增 5 个服务详情页
- [x] 服务页使用统一数据层驱动
- [x] 服务页 metadata 改为页面级生成
- [x] 服务页补 canonical / hreflang
- [x] 服务页补 `Service` / `BreadcrumbList` / `FAQPage` JSON-LD
- [x] 首页服务区新增服务页入口
- [x] `sitemap.xml` 纳入服务总览页和 5 个服务页

## 第二阶段本次新增的核心路径

- `/zh/services`
- `/zh/services/website-development`
- `/zh/services/company-website-development`
- `/zh/services/foreign-trade-website-development`
- `/zh/services/mini-program-development`
- `/zh/services/web-app-development`

英文版本也已同步生成：

- `/en/services`
- `/en/services/...`

## 第二阶段文件变更

- `src/lib/service-pages.ts`
- `src/components/ServicePageTemplate.tsx`
- `src/app/[locale]/services/page.tsx`
- `src/app/[locale]/services/[slug]/page.tsx`
- `src/app/sitemap.ts`
- `src/components/BusinessHome.tsx`
- `messages/zh.json`
- `messages/en.json`

## 第二阶段验证结果

### 2026-03-30 / 第二阶段代码验证

已完成验证：

1. `npm run lint` 通过
2. `npm run build` 通过
3. 构建结果显示以下路由已生成：
   - `/[locale]/services`
   - `/[locale]/services/[slug]`
4. `sitemap.xml` 已包含：
   - `/zh/services`
   - `/en/services`
   - 5 个中文服务页
   - 5 个英文服务页
5. 编译产物中已确认：
   - 服务总览页 metadata 已生效
   - 服务详情页 metadata 已生效
   - 服务页 JSON-LD 已进入服务端产物

## 第二阶段的直接结果

站点现在已经从“只有一个首页的名片站”升级为“首页 + 服务总览页 + 5 个服务详情页”的结构。

这意味着：

- `网站开发` 相关词已经有专门的承接页面
- `企业官网开发`、`外贸网站开发`、`小程序开发`、`企业系统开发` 都有独立落地页
- 后续第三阶段做案例页和第四阶段做文章页时，已经有明确的服务页作为内链目标

## 第三阶段范围

第三阶段的目标是把案例页体系搭出来：

- 新增案例总览页
- 新增首批案例详情页
- 服务页新增相关案例区块
- 案例页反向链接到相关服务页
- 首页作品区新增案例页入口和部分作品直达案例页
- sitemap 纳入案例总览页和案例详情页

## 第三阶段决策记录

### 决策 6：案例页也采用“数据层 + 动态路由”实现

文件：

- `src/lib/case-studies.ts`
- `src/app/[locale]/cases/page.tsx`
- `src/app/[locale]/cases/[slug]/page.tsx`

原因：

- 案例页数量后面还会继续增加，必须从一开始就用可扩展结构
- 这样后续新增案例时，只需要补数据，不需要重复写 SEO、结构化数据和页面骨架

### 决策 7：首页不直接把作品区改成案例列表，而是新增案例入口和局部直达

文件：

- `src/components/BusinessHome.tsx`

原因：

- 当前作品区已经是一个成熟视觉模块，直接大改风险高
- 先增加 `/cases` 入口和“有案例页的项目直达按钮”，可以更平滑地把首页权重导向案例页

### 决策 8：客户端首页只引入轻量案例链接映射，不直接引用完整案例数据

文件：

- `src/lib/project-case-links.ts`

原因：

- `BusinessHome` 是客户端组件
- 如果直接导入完整案例数据，会把整套案例文案打进前端 bundle，得不偿失

## 第三阶段已完成项

- [x] 新增案例总览页 `/[locale]/cases`
- [x] 新增 6 个案例详情页
- [x] 案例页 metadata 改为页面级生成
- [x] 案例页补 `Article` / `BreadcrumbList` JSON-LD
- [x] 服务页新增相关案例区块
- [x] 案例页反向链接相关服务页
- [x] 首页作品区新增案例页入口
- [x] 首页有对应案例页的作品卡片新增直达按钮
- [x] 修正 `fromart` 项目图片目录引用
- [x] `sitemap.xml` 纳入案例总览页和案例详情页

## 第三阶段本次新增的核心路径

- `/zh/cases`
- `/zh/cases/danduoduo-foreign-trade-website`
- `/zh/cases/fromart-foreign-trade-website`
- `/zh/cases/asset-management-system`
- `/zh/cases/order-management-system`
- `/zh/cases/online-course-platform`
- `/zh/cases/recruiting-platform`

英文版本也已同步生成：

- `/en/cases`
- `/en/cases/...`

## 第三阶段文件变更

- `src/lib/case-studies.ts`
- `src/lib/project-case-links.ts`
- `src/components/CaseStudyTemplate.tsx`
- `src/app/[locale]/cases/page.tsx`
- `src/app/[locale]/cases/[slug]/page.tsx`
- `src/components/ServicePageTemplate.tsx`
- `src/app/[locale]/services/[slug]/page.tsx`
- `src/components/BusinessHome.tsx`
- `src/app/sitemap.ts`
- `messages/zh.json`
- `messages/en.json`

## 第三阶段验证结果

### 2026-03-30 / 第三阶段代码验证

已完成验证：

1. `npm run lint` 通过
2. `npm run build` 通过
3. 构建结果显示以下路由已生成：
   - `/[locale]/cases`
   - `/[locale]/cases/[slug]`
   - `/[locale]/services/[slug]` 继续保留且已接入案例区块
4. `sitemap.xml` 已包含：
   - `/zh/cases`
   - `/en/cases`
   - 6 个中文案例页
   - 6 个英文案例页
5. 编译产物中已确认：
   - 案例总览页 metadata 已生效
   - 案例详情页 metadata 已生效
   - 案例页 JSON-LD 已进入服务端产物

## 第三阶段的直接结果

站点现在已经从“首页 + 服务页”的结构，升级为“首页 + 服务页 + 案例页”的结构。

这意味着：

- 服务页不再只有说明文案，而是有了真实案例支撑
- 首页作品区已经能把流量导向案例页
- 后续第四阶段做文章内容集群时，文章可以稳定指向服务页和案例页，而不是只能回首页

## 第三阶段回滚记录

### 2026-03-30 / 按用户要求移除案例页

回滚原因：

- 当前案例页内容与真实项目情况不完全一致
- 继续保留会让站内出现不够准确的业务信息

已执行回滚：

- 删除案例总览页 `/[locale]/cases`
- 删除案例详情页 `/[locale]/cases/[slug]`
- 删除案例数据层和首页轻量案例映射
- 服务页移除相关案例区块
- 首页作品区移除案例页入口和案例直达按钮
- `sitemap.xml` 移除案例页 URL

回滚后保留：

- 第一阶段的 SEO 基础
- 第二阶段的服务页体系
- 首页原有作品展示区

说明：

- 第三阶段的记录保留在日志中，作为历史决策和实现过程存档
- 但当前代码基线已经不再保留案例页相关实现

回滚验证：

1. `npm run lint` 通过
2. `npm run build` 通过
3. 构建结果确认当前只保留：
   - `/[locale]`
   - `/[locale]/services`
   - `/[locale]/services/[slug]`
4. `sitemap.xml` 不再包含 `/cases` 相关 URL

## 下一步

当前更合适的下一步：

1. 新增文章内容体系
2. 先做“价格 / 流程 / 对比 / 场景”四类长尾内容
3. 每篇文章先回链到对应服务页
4. 等你后面愿意提供更准确的案例材料时，再考虑重做案例页

## 第四阶段范围

第四阶段的目标是把文章内容体系搭起来：

- 新增文章总览页
- 新增首批文章详情页
- 服务页新增相关文章区块
- 首页新增文章入口
- sitemap 纳入文章总览页和文章详情页
- 文章页回链到对应服务页

## 第四阶段决策记录

### 决策 9：文章页继续采用“数据层 + 动态路由”实现

文件：

- `src/lib/articles.ts`
- `src/app/[locale]/blog/page.tsx`
- `src/app/[locale]/blog/[slug]/page.tsx`

原因：

- 后面文章会持续增加
- 文章的 metadata、结构化数据、服务页关联关系和站点路径都更适合统一管理

### 决策 10：文章先从四类高意图内容开始

本次先做：

- 价格
- 流程
- 对比
- SEO / 场景

原因：

- 这些内容更贴近真实搜索意图
- 也最适合作为服务页周围的第一圈长尾词内容

### 决策 11：首页只新增文章入口，不改现有导航结构

文件：

- `src/components/BusinessHome.tsx`

原因：

- 当前首页已经形成稳定结构
- 先增加文章入口和服务页相关文章，就足够形成内容内链，不必急着动导航

## 第四阶段已完成项

- [x] 新增文章总览页 `/[locale]/blog`
- [x] 新增 5 篇文章详情页
- [x] 文章页 metadata 改为页面级生成
- [x] 文章页补 `Article` / `BreadcrumbList` JSON-LD
- [x] 服务页新增相关文章区块
- [x] 首页新增文章入口
- [x] `sitemap.xml` 纳入文章总览页和文章详情页

## 第四阶段本次新增的核心路径

- `/zh/blog`
- `/zh/blog/website-development-cost`
- `/zh/blog/website-development-process`
- `/zh/blog/custom-vs-template-website`
- `/zh/blog/multilingual-website-seo`
- `/zh/blog/enterprise-system-requirements`

英文版本也已同步生成：

- `/en/blog`
- `/en/blog/...`

## 第四阶段文件变更

- `src/lib/articles.ts`
- `src/components/BlogPostTemplate.tsx`
- `src/app/[locale]/blog/page.tsx`
- `src/app/[locale]/blog/[slug]/page.tsx`
- `src/components/ServicePageTemplate.tsx`
- `src/app/[locale]/services/[slug]/page.tsx`
- `src/components/BusinessHome.tsx`
- `src/app/sitemap.ts`
- `messages/zh.json`
- `messages/en.json`

## 第四阶段验证结果

### 2026-03-30 / 第四阶段代码验证

已完成验证：

1. `npm run lint` 通过
2. `npm run build` 通过
3. 构建结果显示以下路由已生成：
   - `/[locale]/blog`
   - `/[locale]/blog/[slug]`
   - `/[locale]/services/[slug]` 继续保留且已接入相关文章区块
4. `sitemap.xml` 已包含：
   - `/zh/blog`
   - `/en/blog`
   - 5 个中文文章页
   - 5 个英文文章页
5. 编译产物中已确认：
   - 文章总览页 metadata 已生效
   - 文章详情页 metadata 已生效
   - 文章页 JSON-LD 已进入服务端产物

## 第四阶段的直接结果

站点现在已经从“首页 + 服务页”的结构，升级为“首页 + 服务页 + 文章页”的结构。

这意味着：

- 服务页已经有了第一批长尾文章作为内链支撑
- 首页已经能把流量导向文章目录
- 后续继续扩文章时，只需要补数据，不需要重搭路由和模板

## 第四阶段第二批扩展记录

### 2026-03-30 / 第二批文章补充

本次新增的第二批文章更贴近核心服务词：

1. `company-website-pages-checklist`
2. `company-website-redesign-mistakes`
3. `foreign-trade-website-content-structure`
4. `foreign-trade-website-inquiry-conversion`
5. `mini-program-project-planning`

这批内容的目的：

- 更贴近 `企业官网开发`
- 更贴近 `外贸网站开发`
- 继续补强 `小程序开发`
- 让服务页周围的长尾问题更具体，不只停留在第一批泛主题文章

## 第四阶段第三批扩展记录

### 2026-03-30 / 第三批文章补充

本次新增的第三批文章更偏决策前准备和迁移判断：

1. `website-development-quote-checklist`
2. `company-website-preparation-checklist`
3. `foreign-trade-website-navigation-planning`
4. `website-redesign-seo-migration`
5. `internal-system-refactor-or-rebuild`

这批内容的目的：

- 补强 `网站开发报价` 相关问题
- 补强 `企业官网开发前要准备什么`
- 补强 `外贸网站栏目怎么规划`
- 补强 `网站改版 SEO 迁移`
- 补强 `企业系统重构还是重做` 这类高价值决策型内容

## 第四阶段第四批扩展记录

### 2026-03-30 / 第四批文章补充

本次新增的第四批文章更偏首页、FAQ、产品页和信任信息：

1. `company-website-homepage-structure`
2. `company-website-faq-planning`
3. `foreign-trade-website-product-pages`
4. `foreign-trade-website-trust-signals`

这批内容的目的：

- 补强 `企业官网首页怎么规划`
- 补强 `企业官网 FAQ`
- 补强 `外贸网站产品页怎么写`
- 补强 `外贸网站信任信息` 和询盘前犹豫问题

## 第四阶段第五批扩展记录

### 2026-03-30 / 第五批文章补充

本次新增的第五批文章更偏行业和客户类型：

1. `manufacturing-company-website-planning`
2. `service-business-website-lead-generation`
3. `saas-website-page-structure`
4. `foreign-trade-about-page-writing`
5. `mini-program-and-website-relationship`

这批内容的目的：

- 补强制造业官网场景
- 补强服务型公司官网获客场景
- 补强 SaaS 官网结构问题
- 补强外贸 About 页面写法
- 补强官网和小程序如何协同这类组合型问题

## 第四阶段第六批扩展记录

### 2026-03-30 / 第六批文章补充

本次新增的第六批文章更偏教育、咨询、AI 产品与 B2B 内容层：

1. `education-training-website-planning`
2. `consulting-company-website-copy`
3. `ai-product-website-messaging`
4. `b2b-industry-pages-planning`
5. `website-content-update-process`

这批内容的目的：

- 补强教育培训类官网场景
- 补强咨询类官网表达问题
- 补强 AI 产品官网文案和结构问题
- 补强 B2B 行业页的价值判断
- 补强网站上线后的内容更新机制

## 第四阶段第七批扩展记录

### 2026-03-30 / 第七批文章补充

本次新增的第七批文章更偏工期、维护和多语言落地执行：

1. `website-development-timeline-estimation`
2. `website-maintenance-scope`
3. `company-website-contact-page-planning`
4. `multilingual-website-launch-checklist`
5. `foreign-trade-website-language-priority`

这批内容的目的：

- 补强网站工期判断
- 补强上线后的维护边界
- 补强企业官网联系页转化问题
- 补强多语言网站上线前检查
- 补强外贸网站语言版本优先级判断

## 第四阶段第八批扩展记录

### 2026-03-30 / 第八批文章补充

本次新增的第八批文章更偏成交前细节判断：

1. `website-development-timeline-estimation`
2. `website-maintenance-scope`
3. `company-website-contact-page-planning`
4. `multilingual-website-launch-checklist`
5. `foreign-trade-website-language-priority`
6. `foreign-trade-website-faq-writing`
7. `landing-page-vs-company-website`
8. `mini-program-admin-panel-planning`
9. `business-system-phase-one-scope`

这批内容的目的：

- 补强工期判断
- 补强维护边界
- 补强联系页和 FAQ 转化问题
- 补强多语言上线执行
- 补强官网 / 落地页选择
- 补强小程序后台与企业系统一期范围判断

## 第四阶段站内结构补强

### 2026-03-30 / 全站导航与 footer 内链增强

本次补充：

1. 把顶部导航改成更稳定的全站导航
2. 新增 footer
3. footer 中加入服务页与文章页入口

这样做的原因：

- 原先导航主要依赖首页锚点
- 当用户进入服务页或文章页时，导航对跨页浏览和抓取帮助有限
- 现在改成全站稳定路径后，服务页和文章页的内链会更强

本次涉及文件：

- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `src/app/[locale]/layout.tsx`
- `messages/zh.json`
- `messages/en.json`

验证结果：

- `npm run lint` 通过
- `npm run build` 通过

## 上线与 GSC 进展

### 2026-03-30 / 线上版本与 sitemap 验收

已确认：

1. `https://sphrag.com/zh` 已上线当前业务站，而不是旧作品集
2. `https://sphrag.com/zh/services` 可访问
3. `https://sphrag.com/zh/blog` 可访问
4. `https://sphrag.com/robots.txt` 可访问，且包含：
   - `Sitemap: https://sphrag.com/sitemap.xml`
5. `https://sphrag.com/sitemap.xml` 可访问，且包含首页、服务页和文章页

来自用户提供的 Google Search Console 结果：

1. sitemap 提交状态为“成功”
2. 最近读取时间为 2026 年 3 月 30 日
3. 当前“已发现的网页”为 64

尚待继续确认：

- `/en` 页面访问状态
- URL Inspection 的单页索引结果
- Search Console 中 impressions / clicks / coverage 的后续变化

### 2026-03-30 / URL Inspection 抽样结果

抽样页面：

- `https://sphrag.com/zh/services/website-development`

当前状态：

- 状态：`网址尚未收录到 Google`
- 编制索引：`已发现 - 尚未编入索引`
- 发现来源：`sitemap.xml`
- 当前没有实际抓取记录

判断：

- 这通常说明 Google 已经知道这个 URL 的存在
- 但还没有正式抓取或还没有进入编入索引阶段
- 这不是页面被屏蔽，也不是 canonical 错误导致的直接排除信号
- 更像是新页面刚提交后常见的等待状态

下一步建议：

1. 直接对该 URL 点击“请求编入索引”
2. 再对以下几个核心 URL 逐个做一次相同操作：
   - `/zh`
   - `/zh/services/company-website-development`
   - `/zh/services/foreign-trade-website-development`
   - `/zh/blog/website-development-cost`
3. 提交后等待 3 到 14 天，再回看 URL Inspection 结果
4. 如果 1 到 2 周后仍长期停留在“已发现 - 尚未编入索引”，再进一步排查：
   - 内链强度是否不足
   - 页面质量是否被 Google 认为还不够强
   - 是否需要继续补内容和外部信号

## 下一步

第四阶段完成后，建议继续做：

1. 再补 5 到 10 篇更具体的行业 / 场景文章
2. 优先围绕 `企业官网开发`、`外贸网站开发`、`网站开发多少钱` 继续扩词
3. 上线后在 Search Console 观察收录和 impressions
4. 根据数据再决定先扩服务页、文章，还是重做更准确的案例页

## 备注

本文件之后会持续更新。每做完一个阶段，都会补：

- 做了什么
- 为什么这么做
- 验证结果
- 遗留问题
- 下一步
