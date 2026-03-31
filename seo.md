# Google SEO 计划：围绕“网站开发”冲击首页

执行日志：`seo-log.md`
站外执行清单：`offpage-seo-checklist.md`

## 当前进度更新（截至 2026-03-31）

先回答一个最直接的问题：

SEO 还没有“弄完”。

原因不是代码没做，而是 SEO 本来就不是一次性工作。它分成两类：

1. 站内可落地的基础建设
2. 上线后的收录、监控、内容持续更新和站外信号

当前已经完成的部分：

- SEO 基础配置已经补齐：
  - 动态 `robots.txt`
  - 动态 `sitemap.xml`
  - canonical / `hreflang`
  - 页面级 metadata
  - 基础结构化数据
- 服务页体系已经搭好：
  - `/zh/services`
  - 5 个服务详情页
- 文章内容体系已经搭好：
  - `/zh/blog`
  - 39 篇文章详情页
- 首页、导航和 footer 已经有指向服务页和文章页的入口
- 线上首轮验收已经完成：
  - `https://sphrag.com/zh`
  - `https://sphrag.com/zh/services`
  - `https://sphrag.com/zh/blog`
  - `https://sphrag.com/robots.txt`
  - `https://sphrag.com/sitemap.xml`
- Google Search Console 已经提交 `sitemap.xml`
  - 当前已发现网页：64

当前暂缓的部分：

- 案例页当前不继续上线
- 原因不是技术问题，而是内容准确性还不够，继续挂出去反而会降低可信度

当前还没完成、但对 SEO 结果依然关键的部分：

- 把首轮 URL Inspection 的结果整理进 `seo-log.md`
- 7 到 14 天后复查 5 个核心 URL 的索引状态
- 看真实收录、展示、点击和关键词变化
- 建立第一版 GSC 数据基线并开始每周复盘
- 持续补更贴近成交前问题的长尾内容
- 做站外品牌提及和自然外链

所以更准确的判断是：

- 站内基础建设已经做了不少
- 但 SEO 结果还远没到“可以收工”的阶段

---

## 一、目标先讲清楚

目标关键词：`网站开发`

目标结果：进入 Google 搜索第一页。

但要先说实话：

- `网站开发` 是一个竞争强、搜索意图很泛的商业词。
- 以当前站点体量和内容结构，短期内直接把首页做到第一页，难度很高。
- 更现实的路径是：
  - 先用技术修复 + 服务页 + 长尾内容，把站点做成 Google 能理解的“网站开发服务型站点”
  - 案例页等有更准确材料后再补，不为了 SEO 先硬上
  - 先拿下长尾词和相关词
  - 再反向带动主词 `网站开发`

建议把目标拆成两层：

1. 60 天内，让站点具备稳定收录、可持续产出内容、能承接服务型关键词的基础。
2. 3 到 6 个月内，先把一批长尾词做到前 10，再评估主词 `网站开发` 的真实排名爬升情况。

---

## 二、当前站点现状诊断（基于 2026-03-30 的代码和线上观察）

说明：

这一节主要是启动项目时的初始诊断。

当前代码状态已经不是这里描述的“只有首页”的阶段了，以下问题中有一部分已经完成修复，主要保留为项目背景记录。

### 1. 当前站点更像单页名片站，不像 SEO 站

从代码看，目前几乎只有一个首页：

- [src/app/[locale]/page.tsx](/Users/junbinzhong/Workspace/portfolio/src/app/[locale]/page.tsx)
- [src/components/BusinessHome.tsx](/Users/junbinzhong/Workspace/portfolio/src/components/BusinessHome.tsx)

问题：

- 没有服务详情页
- 没有案例详情页
- 没有博客/文章页
- 没有 FAQ 页面
- 没有专题聚合页

这意味着：

- 可被 Google 收录的页面太少
- 主题权重无法持续扩张
- 很难覆盖“网站开发”相关的不同搜索意图

### 2. 当前 metadata 过于泛，主词聚焦不够

见：

- [src/app/[locale]/layout.tsx](/Users/junbinzhong/Workspace/portfolio/src/app/[locale]/layout.tsx)

目前问题：

- 默认标题还是品牌词导向，不是关键词导向
- 只有全局 metadata，没有针对不同页面单独优化
- `keywords` 已经不是 Google 排名重点，不能指望靠这个提升排名
- 没有看到 `alternates` / canonical / hreflang 配置

### 3. 多语言站点的 SEO 信号还不完整

见：

- [src/i18n/routing.ts](/Users/junbinzhong/Workspace/portfolio/src/i18n/routing.ts)
- [src/middleware.ts](/Users/junbinzhong/Workspace/portfolio/src/middleware.ts)

当前站点有 `zh` 和 `en` 两个语言版本，但没有看到完整的多语言 SEO 信号：

- 没有每个页面对应的 canonical
- 没有明确的 `hreflang`
- 没有 locale 级别的独立 metadata 策略

如果主打中文词 `网站开发`，那中文页面必须成为主战场，而不是让英文内容抢走首页权重。

### 4. sitemap 需要优先修正

见：

- [public/sitemap.xml](/Users/junbinzhong/Workspace/portfolio/public/sitemap.xml)
- [public/robots.txt](/Users/junbinzhong/Workspace/portfolio/public/robots.txt)

当前风险点：

- `sitemap.xml` 使用了 `sitemapindex` 结构，但里面放的是页面 URL，不是子 sitemap URL
- `loc` 里还是 `http://`，而 `robots.txt` 写的是 `https://`

这类问题会直接影响抓取和提交效果，属于第一优先级修复项。

### 5. 线上部署内容和目标业务定位可能还没完全一致

基于 2026-03-30 的线上观察，`https://sphrag.com/` 当前呈现内容与本地“致诚工作室 / 网站开发服务站”的定位并不完全一致。

这件事非常关键：

- 如果线上实际内容不是你要冲排名的业务站
- 那么后续所有 SEO 动作都会打在错误页面上

结论：

第一步不是“发几篇文章”，而是先确保线上主域名承载的就是你要做 SEO 的业务版本。

---

## 三、核心策略

主词：`网站开发`

但执行上不能只做这一个词，而要围绕它做关键词集群。

建议分成 4 层：

### A. 核心商业词

- 网站开发
- 网站建设
- 官网开发
- 企业官网开发
- 定制网站开发

### B. 高意图长尾词

- 网站开发公司
- 网站开发服务
- 网站开发多少钱
- 企业网站开发多少钱
- 外贸网站开发
- 多语言网站开发

### C. 场景词

- 品牌官网开发
- 外贸独立站开发
- SaaS 官网开发
- B2B 企业官网开发
- AI 产品官网开发

### D. 信任和转化词

- 网站开发案例
- 网站开发流程
- 网站开发周期
- 网站开发报价
- 网站开发方案

执行原则：

- 首页不负责吃掉所有词
- 首页负责品牌 + 一级核心词
- 服务页负责商业词
- 案例页负责转化和信任
- 文章页负责长尾覆盖和持续增量

---

## 四、分阶段执行计划

## 阶段 1：先把 SEO 地基打稳（第 1-2 周）

### 目标

让 Google 能正确抓、正确看、正确理解这个站。

### 任务清单

1. 统一线上版本和目标定位

- 确认主域名 `sphrag.com` 线上部署的是现在这套业务站
- 中文业务页要成为中文关键词的主承载页
- 避免旧作品集、英文页、测试页分散主域权重

2. 修复 sitemap 和 robots

- 生成合法 sitemap
- 全站 URL 统一为 `https://`
- 如果是页面列表，使用 `urlset`
- 如果是 sitemap 索引，里面只能放子 sitemap 地址
- 在 Google Search Console 重新提交 sitemap

3. 补齐 canonical / hreflang / alternates

- 每个中文页面都要有自己的 canonical
- 中文和英文版本互相声明替代关系
- 不要让 `/en` 成为中文核心词的默认落地页

4. 重构页面级 metadata

- 不再只用全局 metadata
- 给首页、服务页、案例页、文章页分别生成独立 title 和 description
- 标题写法从“品牌词优先”改成“关键词 + 价值点 + 品牌”

示例方向：

- 网站开发服务｜企业官网 / 外贸网站 / 定制系统开发｜致诚工作室
- 企业官网开发服务｜适合品牌展示与获客转化｜致诚工作室

5. 增加结构化数据

优先做：

- `Organization`
- `WebSite`
- `Service`
- `BreadcrumbList`
- `FAQPage`

说明：

- 结构化数据不等于直接涨排名
- 但它能帮助 Google 更清楚理解站点实体、服务内容和页面结构

6. 建立基础监控

- 接入 Google Search Console
- 绑定 GA4
- 记录关键词、展示、点击、索引、收录页数
- 每周固定看一次数据，不靠感觉做 SEO

### 阶段 1 交付结果

- 线上版本统一
- sitemap/robots/canonical/hreflang 正常
- 首页 metadata 可用
- Google Search Console 能正常提交和监控

---

## 阶段 2：搭建关键词承接页（第 2-4 周）

### 目标

不要再用首页硬扛全部关键词，而是给核心搜索意图单独建页面。

### 必做页面

1. 网站开发服务页

目标词：

- 网站开发
- 网站开发服务
- 定制网站开发

2. 企业官网开发页

目标词：

- 企业官网开发
- 企业网站开发
- 品牌官网开发

3. 外贸网站开发页

目标词：

- 外贸网站开发
- 多语言网站开发
- 外贸独立站开发

4. 小程序开发页

目标词：

- 小程序开发
- 微信小程序开发

5. 企业系统开发页

目标词：

- 企业系统开发
- Web 应用开发
- CRM / OA / ERP 定制开发

### 每个服务页的固定结构

- 明确 H1，包含目标词
- 这一类项目适合谁
- 你能解决什么业务问题
- 交付流程
- 周期和预算区间
- 代表案例
- 常见问题 FAQ
- 联系转化 CTA

### 这一阶段的核心原则

- 一个页面只主攻 1 个主词 + 2 到 4 个相关词
- 不要多个页面抢同一个词
- 页面之间要有内链

---

## 阶段 3：用案例页建立信任和相关性（第 3-6 周）

### 目标

让站点不只是“说自己会做”，而是“有具体项目证明自己会做”。

### 当前状态

这一阶段在代码上已经试做过一轮，但目前已暂停上线。

暂停原因：

- 现阶段可公开的案例材料还不够准确
- 如果为了 SEO 先硬上案例页，反而可能让站点内容失真

当前建议：

- 先不把案例页作为必做项
- 等有更真实、可公开、可匿名化的案例材料后，再重新推进

### 建议最少上线 6-10 个案例页

优先做你最贴近商业词的案例：

- 企业官网案例
- 外贸网站案例
- 企业系统案例
- OA / 审批 / 订单 / 财务系统案例
- AI 工具 / AI 应用案例

### 每个案例页建议结构

- 项目背景
- 客户诉求
- 解决方案
- 技术选型
- 页面或系统模块截图
- 交付结果
- 可复用经验
- 指向对应服务页

### 重点提醒

如果有 NDA，不能公开客户名也没关系，但至少要做到：

- 行业类型
- 业务场景
- 问题复杂度
- 解决过程
- 可量化结果

案例页会直接提升：

- 页面可信度
- 商业转化率
- 与“网站开发服务”相关的主题相关性

---

## 阶段 4：做内容集群，抢长尾流量（第 4-12 周）

### 目标

先通过长尾词拿收录、拿点击、拿主题权重，再慢慢带动主词。

### 内容方向 1：价格与预算

- 网站开发多少钱
- 企业官网开发多少钱
- 外贸网站开发报价怎么计算
- 定制网站开发和模板站有什么区别

### 内容方向 2：流程与决策

- 网站开发流程怎么做
- 企业找人做官网前要准备什么
- 网站开发周期一般多久
- 网站开发需求文档怎么写

### 内容方向 3：方案与对比

- 网站建设和网站开发有什么区别
- 找个人工作室做网站和找外包公司有什么区别
- 多语言网站怎么做 SEO
- 外贸官网为什么必须重视内容结构

### 内容方向 4：行业场景

- 制造业企业官网怎么做
- 外贸公司网站怎么规划栏目
- AI 产品官网如何兼顾品牌和转化
- SaaS 官网应该包含哪些页面

### 内容生产节奏

- 每周至少 2 篇
- 连续 8 周
- 先做 16 篇起步

更适合交给 AI 定时执行的独立版本见：

- `站内博客自动补文SOP.md`

### 内容要求

- 一篇只围绕一个核心问题
- 不写空话，不写拼接文
- 有真实经验、有案例、有判断
- 每篇都链接回服务页和案例页

---

## 五、外链与站外信号（第 4 周后持续做）

### 目标

提高域名信任度，而不是靠垃圾外链。

### 建议做法

- 完善 GitHub、X、LinkedIn、即刻、知乎、掘金等个人/品牌资料页，并指向主站
- 在你已经有影响力的平台发布高质量文章，再导流回主站专题页
- 争取行业合作站、客户站、朋友站的自然友情链接或案例提及
- 把可公开项目做成可引用的案例内容

更细的执行版本见：

- `offpage-seo-checklist.md`

### 不建议做

- 批量垃圾外链
- 低质量目录站群
- 采集伪原创
- 关键词堆砌

---

## 六、首页应该怎么调整

首页可以继续保留品牌展示感，但要更明确承担 SEO 入口角色。

### 首页要补强的点

1. H1 明确包含主词

当前首页标题偏品牌表达，可以更明确加入：

- 网站开发
- 企业官网开发
- 定制开发

2. 首页首屏文案更贴近搜索意图

不是只讲“我是工作室”，还要讲：

- 我提供什么类型的网站开发服务
- 适合哪些客户
- 有什么差异化

3. 首页增加可抓取文本密度

目前视觉表达很多，但 SEO 需要更多稳定、结构化文本：

- 服务说明
- 行业场景
- 流程
- FAQ
- 案例摘要

4. 首页加强内链出口

首页应该把权重传给：

- 服务页
- 案例页
- 文章页

---

## 七、建议的关键词地图

### 首页

主词：

- 网站开发

辅助词：

- 定制开发
- 企业官网开发
- 网站开发服务

### 服务页 1

页面：

- `/zh/services/website-development`

主词：

- 网站开发

### 服务页 2

页面：

- `/zh/services/company-website-development`

主词：

- 企业官网开发

### 服务页 3

页面：

- `/zh/services/foreign-trade-website-development`

主词：

- 外贸网站开发

### 服务页 4

页面：

- `/zh/services/mini-program-development`

主词：

- 小程序开发

### 服务页 5

页面：

- `/zh/services/web-app-development`

主词：

- 企业系统开发

### 文章页示例

- `/zh/blog/website-development-cost`
- `/zh/blog/website-development-process`
- `/zh/blog/multilingual-website-seo`
- `/zh/blog/company-website-pages-checklist`
- `/zh/blog/company-website-redesign-mistakes`
- `/zh/blog/foreign-trade-website-content-structure`
- `/zh/blog/foreign-trade-website-inquiry-conversion`
- `/zh/blog/mini-program-project-planning`
- `/zh/blog/website-development-quote-checklist`
- `/zh/blog/company-website-preparation-checklist`
- `/zh/blog/foreign-trade-website-navigation-planning`
- `/zh/blog/website-redesign-seo-migration`
- `/zh/blog/internal-system-refactor-or-rebuild`

---

## 八、KPI 设定

不要只盯着“首页没上第一页”，要看分阶段指标。

### 第 1 个月

- Search Console 成功收录核心页面
- 核心页面能被抓取
- 长尾词开始有 impressions

### 第 2-3 个月

- 至少 10-20 个页面被稳定收录
- 10 个以上长尾词进入前 30
- 首页和服务页开始承接品牌词、场景词点击

### 第 3-6 个月

- 一批长尾词进入前 10
- 服务页开始稳定获得询盘型流量
- 主词 `网站开发` 开始进入更靠前区间

### 最终判断标准

不是只看某一个词，而是看：

- 有没有稳定自然流量
- 有没有持续增长的关键词池
- 有没有真实询盘

---

## 九、优先级排序

如果只能按顺序做，建议这样排：

1. 先统一线上站点版本
2. 修复 sitemap / canonical / hreflang / metadata
3. 新增 4-5 个服务页
4. 连续 8 周输出文章
5. 做站外品牌提及和自然外链
6. 有合适材料后，再重做案例页

---

## 十、对这个项目的现实判断

如果你现在问的是：

“这个站能不能靠改几个 meta 标签，把 `网站开发` 直接做到 Google 第一页？”

答案是：不能。

更现实的答案是：

- 这个站有机会做起来
- 但前提是把它从“单页展示站”升级成“服务型 SEO 站”
- 重点不在某一个标签，而在站点结构、内容深度、案例沉淀、内链体系、线上版本一致性和持续更新

---

## 十一、下一步建议

下一步不要继续停留在抽象计划，直接进入执行和上线监控。

建议按下面顺序推进：

1. 先补完 `/en` 页面、`hreflang` 和核心 URL 的索引验证
2. 在 Google Search Console 里对核心页面逐个做 URL Inspection
3. 用 8 周持续观察 impressions，并补更贴近成交前问题的文章
4. 再根据数据决定优先扩服务页、文章，还是重做更准确的案例页

---

## 十二、当前完成度

### 已完成

- 技术 SEO 基础
- 5 个核心服务页
- 服务总览页
- 39 篇文章
- 首页到服务页 / 文章页的入口
- 全站导航和 footer 内链增强
- `sitemap.xml` 已提交 Google Search Console

### 暂缓

- 案例页

### 未完成

- 首轮 URL Inspection 结果整理与二次复查
- GA4 / GSC 数据基线记录与每周复盘
- 外链和品牌提及
- 后续文章持续扩写

---

## 十三、接下来 8 周执行排期

这是当前更适合的推进方式：

### 第 1 周

- 确认主域名线上版本就是现在这套业务站
- 检查 `/zh`、`/en`、`/services`、`/blog` 是否都能正常访问
- 确认 Google Search Console 已成功读取 `sitemap.xml`
- 记录当前核心页面是否已收录

### 第 1 周执行清单

这是现在就可以直接拿来用的一版周执行清单：

#### A. 已在代码内完成

这一栏不是待办，而是已经做完的代码项：

- [x] 首页 SEO 基础
- [x] 服务总览页
- [x] 5 个服务详情页
- [x] 博客总览页
- [x] 39 篇文章
- [x] 动态 `robots.txt`
- [x] 动态 `sitemap.xml`
- [x] canonical / `hreflang`
- [x] 基础结构化数据

#### B. 需要上线后执行

这一栏是第一轮上线验证和 Google Search Console 核对项，目前已完成：

- [x] 确认 `https://sphrag.com/zh` 已上线为当前业务站
- [x] 确认 `https://sphrag.com/en` 能正常访问
- [x] 确认 `https://sphrag.com/zh/services` 能正常访问
- [x] 确认 `https://sphrag.com/zh/blog` 能正常访问
- [x] 在 Google Search Console 提交 `https://sphrag.com/sitemap.xml`
- [x] 用 URL Inspection 检查以下页面
- [x] `/zh`
- [x] `/zh/services/website-development`
- [x] `/zh/services/company-website-development`
- [x] `/zh/services/foreign-trade-website-development`
- [x] `/zh/blog/website-development-cost`

#### D. 上线与 GSC 逐步操作清单

如果你现在就准备继续推进，建议严格按这个顺序做：

##### 第一步：先确认线上版本

- [x] 打开首页，确认线上展示的就是当前这套业务站，不是旧作品集
- [x] 检查以下页面是否都返回 `200`
- [x] `https://sphrag.com/zh`
- [x] `https://sphrag.com/en`
- [x] `https://sphrag.com/zh/services`
- [x] `https://sphrag.com/zh/blog`
- [x] `https://sphrag.com/robots.txt`
- [x] `https://sphrag.com/sitemap.xml`

##### 第二步：检查最关键的 SEO 基础输出

- [x] `robots.txt` 里能看到 sitemap 地址
- [x] `sitemap.xml` 里能看到：
- [x] `/zh`
- [x] `/zh/services/website-development`
- [x] `/zh/services/company-website-development`
- [x] `/zh/services/foreign-trade-website-development`
- [x] `/zh/blog/website-development-cost`

##### 第三步：Google Search Console 操作

- [ ] 在 GSC 添加并验证 `sphrag.com`
- [x] 提交 `https://sphrag.com/sitemap.xml`
- [x] 等待 GSC 显示 sitemap 已读取

##### 第四步：先检查这 5 个核心页面

建议先用 URL Inspection 检查：

- [x] `https://sphrag.com/zh`
- [x] `https://sphrag.com/zh/services/website-development`
- [x] `https://sphrag.com/zh/services/company-website-development`
- [x] `https://sphrag.com/zh/services/foreign-trade-website-development`
- [x] `https://sphrag.com/zh/blog/website-development-cost`

检查时重点看：

- [x] URL 是否可被抓取
- [x] canonical 是否正确
- [x] 是否被索引
- [x] 如果未索引，是否有明确原因

##### 第五步：记录第一版基线数据

把下面这些数字记到 `seo-log.md` 或你自己的表格里：

- [ ] 已收录页面数
- [ ] 总 impressions
- [ ] 总点击数
- [ ] 哪些服务页已经开始出现 impressions
- [ ] 哪些文章页已经开始出现 impressions

##### 第六步：提交后 7-14 天再回看

重点看：

- [ ] sitemap 是否持续正常读取
- [ ] 覆盖率是否开始增长
- [ ] 首页、服务页、文章页是否开始进入 impressions
- [ ] 有没有页面被排除在索引之外

#### C. 本周建议继续补的内容

- [x] 再补 2 篇更贴近 `企业官网开发` 的文章
- [x] 再补 2 篇更贴近 `外贸网站开发` 的文章
- [x] 再补一轮更贴近行业 / 客户类型的文章
- [ ] 把 Search Console 初始 impressions / coverage 记录进 `seo-log.md`

如果后面要把“补文章”改成 AI 定时执行，不再手动想题和逐篇组织，可以直接用：

- `站内博客自动补文SOP.md`

### 第 2 周

- 把这 5 个核心 URL 的 URL Inspection 结果整理进 `seo-log.md`
- 记录第一版 Search Console 基线数据：
  - 已收录页面数
  - impressions
  - clicks
  - 首次出现 impressions 的页面
  - 首次出现的查询词
- 继续观察 Search Console 的抓取和覆盖率
- 优先复查：
  - `/zh`
  - `/zh/services/website-development`
  - `/zh/services/company-website-development`
  - `/zh/services/foreign-trade-website-development`
  - `/zh/blog/website-development-cost`
- 如果当前仍有页面未收录：
  - 先确认是否已经请求编入索引
  - 7 到 14 天后再做第二次 URL Inspection
  - 再判断是否需要继续补内链、补内容厚度或补外部信号
- 启动第一轮站外资料页完善：
  - GitHub
  - X / Twitter
  - LinkedIn

### 第 3 周

- 再补 2-3 篇更贴近 `企业官网开发` 的文章
- 重点方向：
  - 页面结构
  - 改版
  - 资料准备

### 第 4 周

- 再补 2-3 篇更贴近 `外贸网站开发` 的文章
- 重点方向：
  - 栏目规划
  - 产品页表达
  - 询盘转化

### 第 5 周

- 再补 2-3 篇更贴近 `网站开发报价 / 流程 / 周期` 的文章
- 优先把已有服务页内链继续做密一点

### 第 6 周

- 再补 2-3 篇更贴近 `企业系统开发` 和 `小程序开发` 的文章
- 重点方向：
  - 立项前准备
  - 分阶段开发
  - 重构还是重做

### 第 7 周

- 开始做站外品牌提及
- 优先：
  - GitHub 个人主页
  - X
  - LinkedIn
  - 知乎 / 掘金 / 即刻等内容平台
- 这些平台的资料和文章都尽量指向主站相关服务页或文章页

### 第 8 周

- 汇总 8 周数据
- 重点看：
  - 收录页数
  - impressions
  - 哪些词开始出现
  - 哪些服务页或文章页有点击
- 根据数据决定下一阶段是：
  - 继续扩文章
  - 重做更真实的案例页
  - 还是继续补更细的服务页

---

## 十四、现在的结论

如果你现在问：

“这个站的 SEO 都已经弄完了吗？”

更准确的回答是：

- 站内基础和内容骨架已经做了很多
- 但 SEO 结果层面还远远没有结束
- 真正接下来最重要的不是继续堆代码，而是：
  - 上线验证
  - Search Console
  - 连续内容
  - 数据反馈
  - 站外信号

也就是说：

- 代码层的“第一段工程”已经完成得差不多了
- 但 SEO 的“结果阶段”现在才真正开始

---

## 十五、如何看待当前的 GSC 状态

现在最值得正确理解的，不是“为什么还没排名”，而是“Google 当前到底走到了哪一步”。

目前已经知道的状态是：

- `sitemap.xml` 提交成功
- GSC 已发现网页：64
- 5 个核心 URL 已完成首轮 URL Inspection
- 抽样服务页出现过 `已发现 - 尚未编入索引`

这说明：

- Google 已经知道这个站和这些 URL 的存在
- 但还没有把核心页面稳定抓取并编入索引
- 这更像新站或新内容提交后的等待阶段，不像被手动惩罚

现阶段不要误判成：

- “代码有大问题”
- “canonical 写错了所以全站没戏”
- “一定要继续狂补几十篇文章才会收录”

更合理的判断方式是：

- 如果 3 到 7 天内开始出现抓取和少量 impressions，说明流程在正常推进
- 如果 1 到 2 周后核心页面仍长期停留在 `已发现 - 尚未编入索引`，再重点排查：
  - 站内内链是否还不够强
  - 核心页面内容是否还不够厚
  - 中文页和英文页的替代关系是否让 Google 犹豫
  - 首页和服务页是否还缺更明确的权重传递

---

## 十六、接下来 30 天最该做的 4 件事

### 1. 进入“记录结果 + 二次复查”阶段

这 5 个核心 URL 已经完成首轮 URL Inspection：

- `/zh`
- `/zh/services/website-development`
- `/zh/services/company-website-development`
- `/zh/services/foreign-trade-website-development`
- `/zh/blog/website-development-cost`

现在更重要的不是再去做一遍同样的检查，而是：

- 把第一轮结果记进 `seo-log.md`
- 对未收录页确认是否已经请求编入索引
- 7 到 14 天后复查同一批 URL

这一步的目标不是立刻拿排名，而是先让最关键页面进入稳定的“检查 -> 等待 -> 复查”节奏。

### 2. 内容继续补，但从“多”改成“更准”

下一轮文章不要再泛泛铺量，而要更贴近成交前判断：

- 预算怎么估
- 周期怎么判断
- 什么情况该重做，什么情况该小改
- 外贸网站哪些页面最影响询盘
- 企业官网哪些页面最容易拖慢转化

内容标准要继续保持：

- 一篇只解决一个明确问题
- 能回链到服务页
- 有真实判断，不写空泛总结

### 3. 站外动作先做资料页，不急着追外链数量

第一轮只做最稳的 3 个入口：

- GitHub 个人主页
- X / Twitter
- LinkedIn

先把品牌名、业务说明、官网链接和重点服务页挂完整，再考虑内容分发和外链扩展。

### 4. 每周固定看一次 GSC，不每天盯排名

每周只关心这些指标：

- 新增已收录页面数
- impressions 是否开始增长
- 哪些页面第一次拿到展示
- 哪些查询词第一次出现

如果开始有 impressions，即使点击还少，也说明主题正在被 Google 逐步识别。

---

## 十七、这个阶段暂时不要做的事

- 不要为了“显得内容多”再批量发一堆低质量文章
- 不要因为 1 个 URL 暂时没收录，就频繁改标题、description 或整页结构
- 不要把案例页为了 SEO 硬编出来
- 不要把所有外链都打到首页
- 不要每天盯着 `网站开发` 这个主词的名次波动

当前更重要的是：

- 先让核心页稳定进入索引
- 先让长尾词开始出现 impressions
- 先让服务页和文章页形成真实的站内主题关系

---

## 十八、每周复盘模板

下面这版可以直接作为 `seo-log.md` 后续更新格式：

```md
## YYYY-MM-DD / SEO 周复盘

### 本周新增

- 新增文章：
- 新增服务页：
- 新增站外资料页或分发：

### GSC 数据

- sitemap 状态：
- 已发现网页数：
- 已收录页面数：
- impressions：
- clicks：
- 首次出现 impressions 的页面：
- 首次出现的查询词：

### URL Inspection 抽样

- `/zh`：
- `/zh/services/website-development`：
- `/zh/services/company-website-development`：
- `/zh/services/foreign-trade-website-development`：
- `/zh/blog/website-development-cost`：

### 本周判断

- 哪些动作有效：
- 哪些页面仍未收录：
- 当前最大阻塞：

### 下周动作

- 1.
- 2.
- 3.
```

如果后面数据开始起来，这份文档就不需要再大改方向了，重点会从“继续规划”切到“持续观察数据并做小步优化”。
