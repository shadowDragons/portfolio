# 中文内容分发自动发帖 SOP（AI 执行版）

适用目标：

- 知乎
- 掘金
- 即刻
- 小红书
- 电鸭社区 (Eleduck)
- 抖音 (Douyin/口播脚本)
- 英文内容矩阵：Medium / Dev.to / Hashnode (长文), IndieHackers (复盘), X / Twitter (短动态)

适用阶段：

- 当前站点已经有服务页和文章页
- 现在要把站内内容拆成适合中文平台传播的版本，必要时再扩展成适合 Medium 的英文版本
- 希望让 AI 承担“选题、改写、生成标题、生成正文、生成结尾导流”的大部分工作

这份文档的重点不是“平台理论”，而是给 AI 一套可以直接执行的分发工作流：默认中文平台，按需扩展到 Medium 英文发帖。

如果你是负责发帖的 AI：

- 默认按这份文档执行
- 默认使用“随机选题”模式
- 如果用户没有指定文章，就不要反问，直接从文章池里任选 1 篇
- 如果用户明确要求 `Medium`、`英文发帖`、`英文分发`，就走 Medium 英文流程
- 如果用户没有指定平台和语言，默认仍在知乎、掘金、即刻、小红书里任选 1 个平台，不自动切到 Medium

---

## 一、总目标

不要让 AI 去平台上机械铺内容。

要做的是：

- 用站内已有文章做二次分发
- 让每个平台的内容更像原生内容
- 自然把读者导回首页、服务页或文章页
- 带来品牌认知、点击和后续询盘

当前核心内容方向：

- 网站开发
- 企业官网开发
- 外贸网站开发
- 企业内部系统 / 管理后台 / 订单系统
- AI 应用与企业智能体落地
- 技术栈选型与架构取舍
- 性能优化与稳定性
- 质量把控、测试与验收
- 开发计划、排期与分阶段交付
- 网站改版、上线交付与验收检查
- 网站开发多少钱
- 网站开发流程
- 外贸网站结构与询盘路径

### 默认人设与能力边界

- 默认把作者写成“技术负责人 / 技术合伙人 / 研发负责人”
- 默认输出技术选型、架构拆分、性能优化、稳定性、质量保障、开发计划、上线与维护相关内容
- 可以给合适的技术方案建议，但不要把作者写成“教老板做系统”的需求顾问或产品咨询
- 如果话题不可避免会碰到业务背景，也只从技术实现、交付风险、维护成本、排期影响这些角度展开
- 默认不要主动写“老板该怎么分析需求”“产品应该怎么规划”“组织流程应该怎么设计”这一类内容，除非用户明确要求

---

## 二、AI 自动发帖的底线

AI 可以自动生成草稿，但不要让它做下面这些事：

- 伪造客户案例
- 伪造项目结果
- 夸张承诺，比如“包上首页”“最低价”“全网最强”
- 把品牌定位写成“便宜外包”或“低价方案”
- 把作者写成擅长给老板做需求梳理、产品规划或组织流程咨询的人
- 一篇内容里硬塞多个链接
- 在不同平台直接复制同一段文案
- 把技术博客硬搬到即刻或知乎问答里
- 把中文稿直接机翻成生硬英文后发到 Medium

更稳的做法是：

- AI 自动生成
- Medium 优先参考站内对应英文原文，不要从中文稿逐句直译
- 你快速过一眼
- 确认没有把你写成“需求顾问 / 产品顾问 / 管理咨询”
- 再发

如果后面真要全自动发布，也要先用这一版 SOP 跑几轮，确认风格自然、不过度营销。

---

## 三、平台分工

### 知乎

更适合：

- 问题回答
- 技术判断类内容
- “为什么”“怎么判断”“怎么准备”这类内容

推荐方向：

- 网站开发报价怎么判断，真正拉开差距的是哪些技术与质量项
- 企业官网技术栈怎么选，后面才不容易越做越重
- 网站开发前要先准备哪些资料和判断
- 老系统该继续修，还是该重构重做
- 多语言网站上线前要检查什么
- 官网、后台、小程序一起做时技术边界怎么拆

内容风格：

- 先回答问题
- 再展开技术判断逻辑
- 适合写技术选型、架构取舍、性能稳定性、上线与维护
- 如果涉及业务背景，只从交付影响和技术风险角度点到为止
- 最后自然给补充阅读链接

### 掘金

更适合：

- 方法论
- 结构判断
- 交付和项目经验总结

推荐方向：

- 网站结构和技术栈怎么定
- 网站开发排期怎么估
- 网站上线后内容更新机制怎么定
- 系统重构还是重做怎么判断
- 官网、后台、小程序一起做时技术边界怎么拆
- 网站上线后维护范围怎么界定

内容风格：

- 标题更偏技术判断和交付经验
- 正文结构更清晰
- 重点写技术选型、架构、性能、质量、维护、开发计划
- 少写“需求梳理 / 产品规划 / 老板决策建议”式内容
- 可以保留小标题和列表

### 即刻

更适合：

- 短内容
- 个人观察
- 项目中的真实观察

推荐方向：

- 做网站前，最容易拖慢开发的资料准备问题是什么
- 网站项目最容易漏掉的，不是开发，而是前期准备
- 老系统要不要重做，很多时候先看维护成本和模块边界
- 多语言网站上线，最容易补锅的是哪些技术项
- 官网、后台、小程序一起做，边界没拆清会怎么失控
- 网站维护如果一开始不讲清，后面最容易扯皮

内容风格：

- 更像人在说话
- 适合讲一个技术判断、一个交付观察或一个踩坑结论
- 不要写成长文
- 不要一上来贴链接
- 不要写成“我来教老板怎么梳理需求”

### 小红书/58/抖音图文

更适合：

- 图文卡片式的技术交付观察
- 网站改版、上线检查、维护边界、多端边界这类“做了和没做差别很大”的话题
- 用反常识切入，再给 3 到 5 个可收藏的技术判断点

推荐方向：

- 网站项目最容易漏掉的，不是开发，是前期准备
- 多语言网站上线前，这几个检查项不做后面很容易返工
- 官网、后台、小程序一起做，边界没拆清项目一定会乱
- 网站上线后“维护”到底包括什么，不包括什么
- 老系统不是都该重做，先看这几个技术信号
- 企业官网首页不是堆内容就行，结构和性能一起决定体验

内容风格：

- 封面标题和前 3 行先给情绪钩子、反差感或反常识判断
- 正文像“技术交付观察 / 项目踩坑总结”，不要写成品牌、产品或需求咨询
- 多用短段落、短句、分隔符，必要时可轻量使用 emoji
- 一篇只讲 1 个核心判断，最好能拆成 5 到 7 页图文卡片
- 结尾优先引导收藏、评论、看主页，不要硬贴外链

### 抖音 (Douyin / 口播脚本)

更适合：

- 短视频口播文案，用于快节奏讲清技术交付里的坑
- 强问题意识、快速说明风险、再给更稳的做法
- 针对做过网站或系统、踩过交付坑的老板或项目负责人

推荐方向：

- 为什么有些网站看着上线了，后面还是不断返工？
- 网站项目最容易拖慢的，不是开发，是前期资料和边界没收住
- 找外包做系统，这 3 个交付边界不先讲清，后面一定扯皮
- 老系统到底该重构还是重做，先看这 3 个技术信号
- 官网、后台、小程序一起做时，边界怎么拆才不容易失控

内容风格：

- **内容核心公式：反常识标题 + 趋势压迫感开场 + 3到5个收益点 + 数据/经验背书 + 软CTA**
- 极其口语化，句子要短痛快，适合真人口播念出来。
- 绝不用技术黑话（如 React / Nginx 等），要转换成老板能听懂的“交付风险、维护成本、上线后果”。
- 结尾绝不可贴网址（会被平台限流封号），要使用软 CTA 引流（如：“做过类似项目的，可以点进我主页看完整案例和文章”）。

### Medium / Dev.to / Hashnode（英文长文）

更适合：

- 英文长文
- 技术交付、架构判断、性能 / 稳定性、上线与维护分享
- **强烈推荐** Dev.to / Hashnode：它们更适合发布完整英文长文，读者环境和编辑体验都更友好

推荐方向：

- What actually drives custom enterprise software cost
- When should you refactor an internal system instead of rebuilding it
- How to estimate a website project timeline more realistically
- How to split boundaries between a website, admin panel, and mini program
- What website maintenance actually includes after launch

内容风格：

- 纯粹提供技术干货和交付经验，不要写成广告短文
- 重点写技术选型、架构判断、上线检查、维护范围、性能与可维护性
- 标题 + 副标题要先把问题说清楚
- 正文中可融入一点技术实现细节、清单或代码思路
- 结尾克制导流：“I run Zhicheng Studio, specializing in enterprise systems and AI agents...”
- 发布时重点检查标题、副标题、topics、Story preview 和正文可读性

### X / Twitter（英文短动态）

更适合：

- #BuildInPublic 标签下的简短接单进度分享、代码片段分享
- 抛出一个反直觉的行业洞察 (Hot takes)

内容风格：

- 最多 280 字内
- 第一句话必须抓人眼球 (Hook)
- 配合网站截图使用，自然引导大家去你的主页 (Link in bio 或文中)

## 四、链接策略

不要每条都只放首页，也不要每条都放服务页。

按语言和内容类型分：

### 中文品牌介绍型

- 首选：`https://sphrag.com/zh`
- 备选：`https://sphrag.com/zh/services`

### 中文服务判断型

- `https://sphrag.com/zh/services/website-development`
- `https://sphrag.com/zh/services/company-website-development`
- `https://sphrag.com/zh/services/foreign-trade-website-development`

### 中文决策问题型

- `https://sphrag.com/zh/blog/website-development-cost`
- `https://sphrag.com/zh/blog/website-development-process`
- `https://sphrag.com/zh/blog/company-website-pages-checklist`
- `https://sphrag.com/zh/blog/foreign-trade-website-inquiry-conversion`

### 英文品牌介绍型（Medium）

- 首选：`https://sphrag.com/en`
- 备选：`https://sphrag.com/en/services`

### 英文服务判断型（Medium）

- `https://sphrag.com/en/services/website-development`
- `https://sphrag.com/en/services/company-website-development`
- `https://sphrag.com/en/services/foreign-trade-website-development`

### 英文决策问题型（Medium）

- `https://sphrag.com/en/blog/website-development-cost`
- `https://sphrag.com/en/blog/website-development-process`
- `https://sphrag.com/en/blog/company-website-pages-checklist`
- `https://sphrag.com/en/blog/foreign-trade-website-inquiry-conversion`

链接规则：

- 一条内容默认只放 1 个可见链接
- 知乎和掘金可以放 1 个正文尾链
- 即刻优先不放，或者只放 1 个最相关链接
- 小红书正文默认不放外链，优先用“收藏 / 评论 / 看主页”式软 CTA
- Medium 正文默认只放 1 个 CTA 链接，而且链接一律用英文页
- Medium 不要只发“摘要 + 点击原文”，正文本身要完整可读
- 如果是直接转载站内已发布英文原文，优先用 `Import a story`

---

## 五、首批推荐内容池

第一批优先让 AI 从这些文章改写：

不要长期只围绕官网和外贸站。

更稳的做法是让内容线之间轮换：

- 官网 / 外贸站
- 企业系统 / 管理后台 / 多端协作
- AI 应用 / 技术落地 / 自动化

也要让写作视角轮换：

- 技术选型 / 架构拆分
- 开发计划 / 分阶段交付
- 性能 / 稳定性 / 上线检查
- 质量 / 维护 / 重构

### 第一组：最接近询盘

- `website-development-cost`
- `website-development-process`
- `website-development-quote-checklist`
- `website-development-timeline-estimation`
- `website-maintenance-scope`

### 第二组：企业官网

- `company-website-pages-checklist`
- `company-website-homepage-structure`
- `company-website-redesign-mistakes`
- `company-website-preparation-checklist`
- `website-content-update-process`

### 第三组：外贸网站

- `foreign-trade-website-content-structure`
- `foreign-trade-website-inquiry-conversion`
- `foreign-trade-website-product-pages`
- `foreign-trade-website-navigation-planning`
- `multilingual-website-launch-checklist`

### 第四组：企业系统 / 管理后台 / 多端交付

- `internal-system-refactor-or-rebuild`
- `website-admin-mini-program-boundaries`
- `mini-program-admin-panel-planning`
- `business-system-phase-one-scope`
- `factory-oa-shell-development`

### 第五组：AI 应用 / 技术落地 / 系统边界

- `ai-chat-entry-vs-internal-workflow`
- `website-admin-mini-program-boundaries`
- `mini-program-admin-panel-planning`
- `business-system-phase-one-scope`
- `website-maintenance-scope`

### 第六组：性能 / 质量 / 上线 / 维护

- `company-website-preparation-checklist`
- `multilingual-website-launch-checklist`
- `website-maintenance-scope`
- `website-content-update-process`
- `website-development-timeline-estimation`

### 第七组：适合小红书 / 短内容

- `company-website-redesign-mistakes`
- `company-website-preparation-checklist`
- `website-admin-mini-program-boundaries`
- `multilingual-website-launch-checklist`
- `internal-system-refactor-or-rebuild`
- `website-maintenance-scope`

### 第八组：适合 Medium 英文长文

- `website-development-cost`
- `internal-system-refactor-or-rebuild`
- `website-development-timeline-estimation`
- `website-admin-mini-program-boundaries`
- `multilingual-website-launch-checklist`
- `website-maintenance-scope`

---

## 六、AI 工作流

让 AI 每次按下面的顺序执行：

0. 如果用户没有指定文章，就先执行“随机选题”：
   - 知乎从知乎更适合的内容池里任选 1 篇
   - 掘金从掘金更适合的内容池里任选 1 篇
   - 即刻从适合短内容的内容池里任选 1 篇
   - 小红书从适合小红书 / 短内容的内容池里任选 1 篇
   - Medium 从适合 Medium 英文长文的内容池里任选 1 篇
   - 如果平台也是自动，但用户没有明确说英文，就先在中文平台里任选 1 个平台，再任选 1 篇文章
1. 从对应文章池里选 1 篇最适合的平台原文
2. 判断这条内容更适合导向首页、服务页还是文章页
3. 提炼核心问题
4. 生成符合平台气质的标题
5. 改写为平台原生内容
6. 生成 1 个自然结尾
7. 只选 1 个最匹配链接
8. 输出成可直接发布的最终稿

不要跳步。

补充规则：

- 如果有历史发布记录，优先避开最近 7 天已经发过的 slug
- 如果没有历史记录，直接任选即可，不需要追求真正随机
- 如果用户没有指定内容方向，优先在“官网 / 外贸站 / 企业系统 / 多端协作 / 上线维护”之间轮换，不要连续多次只选官网类题目
- 如果用户没有指定写作视角，优先在“技术选型 / 架构拆分 / 开发计划 / 性能稳定性 / 质量维护”之间轮换
- 一次任务默认输出 1 条
- 只有用户明确要求批量时，才一次输出多条
- 如果用户明确要求 `Medium` / `英文` / `English`，默认使用站内对应英文文章作为素材
- Medium 不要把中文稿逐句翻译后直接发布，必须重写成自然英文

---

## 七、给 AI 的输入格式

为了减少人工输入，尽量使用下面这版最简输入。

默认规则：

- 不再要求手动指定 slug
- 不再要求手动指定文章标题
- AI 自己从内容池里任选

每次给 AI 的输入尽量固定成这样：

```md
平台：自动 / 知乎 / 掘金 / 即刻 / 小红书 / 电鸭 / 抖音 / Medium / Dev.to / IndieHackers / X
语言：自动 / 中文 / 英文
模式：随机选题
内容线：自动 / 官网 / 外贸站 / 企业系统 / 管理后台 / 多端协作 / 上线维护 / AI应用 / 混合
视角：自动 / 技术选型 / 架构交付 / 性能稳定性 / 质量维护 / 开发计划 / 混合
数量：1
目标：品牌曝光 / 点击文章 / 导向服务页 / 自动
语气：专业判断 / 个人口吻 / 技术建议 / 自动
长度：短 / 中 / 长
是否带链接：自动 / 是 / 否
发布方式：自动 / 改写发布 / 导入原文
```

示例：

```md
平台：自动
语言：自动
模式：随机选题
内容线：自动
视角：自动
数量：1
目标：自动
语气：自动
长度：中
是否带链接：自动
发布方式：自动
```

如果你想指定平台，但仍让 AI 自己选文章，可以这样输入：

```md
平台：知乎
语言：中文
模式：随机选题
内容线：企业系统
视角：架构交付
数量：1
目标：点击文章
语气：技术建议
长度：中
是否带链接：是
发布方式：自动
```

如果你想明确让 AI 产出一条 Medium 英文稿，可以这样输入：

```md
平台：Medium
语言：英文
模式：随机选题
内容线：企业系统
视角：架构交付
数量：1
目标：点击文章
语气：专业判断
长度：中
是否带链接：是
发布方式：改写发布
```

补充规则：

- `平台 = Medium` 时，`语言` 默认英文
- `平台 = 自动` 且 `语言 = 自动` 时，默认只在中文平台里选
- `内容线 = 自动` 时，默认允许 AI 在官网、外贸站、企业系统、管理后台、多端协作、上线维护、AI 应用之间轮换
- `视角 = 自动` 时，默认允许 AI 在“技术选型 / 架构交付 / 性能稳定性 / 质量维护 / 开发计划”之间轮换
- `发布方式` 主要给 Medium 用：`改写发布` 更适合平台原生内容，`导入原文` 更适合直接转载站内英文原文

---

## 八、给 AI 的输出格式

让 AI 每次严格输出下面这些字段：

```md
平台：
选中文章 slug：
选中文章方向：
内容目标：
建议标题：
正文：
是否带链接：
链接：
标签建议：
为什么选这篇：
为什么适合这个平台：
```

默认优先输出“可直接发布的完整成稿”，不要为了凑结构而把正文机械拆成“开头 / 中间 / 结尾”。

补充说明：

- 知乎、掘金、Medium 这类更适合长结构内容的平台，可以在内部起草时额外整理“建议开头 / 结尾思路”，但对外成稿仍应优先保持自然连续。
- 小红书默认直接输出一整版可发布笔记，不要把正文拆成“开头 / 正文 / 结尾”标签，避免成稿看起来像审稿模板。
- 如果确实需要给自动化脚本单独拆字段，应该在成稿之后附加说明，而不是替代正文本身。

这样后面无论是你手动发，还是接自动化流程，都比较容易处理。

如果平台是 Medium，再额外补 4 个字段：

```md
语言：英文
建议副标题：
发布方式建议：
```

如果平台是小红书，再额外补 2 个字段：

```md
封面标题：
配图页建议：
```

如果数量大于 1，就按下面格式重复输出：

```md
## 内容 1

...

## 内容 2

...
```

---

## 九、平台级写作规则

### 知乎写作规则

- 标题像问题或判断题
- 第一段直接回答，不绕弯
- 中间写 3 到 5 个判断点
- 最后一段再给链接
- 不要像广告软文
- 即使讨论报价，也要把重点放在质量、服务和长期性价比上
- 重点写技术选型、架构取舍、上线风险、性能稳定性、维护边界，关键是把结论说清楚

可用标题模板：

- 网站开发怎么判断报价，真正拉开差距的是哪些技术和质量项？
- 网站开发前最容易漏掉什么，为什么很多项目一开始就变慢？
- 多语言网站上线前要检查什么，才不容易上线后返工？
- 旧系统该重构还是重做，先看哪几个技术信号？
- 官网、后台、小程序一起做时，技术边界怎么拆更稳？

### 掘金写作规则

- 标题更像经验总结
- 正文更适合小标题结构
- 可以更强调“方法”“判断”“经验”
- 更适合技术选型、架构交付、上线检查、维护边界、排期估算
- 结尾带 1 个相关阅读或服务页链接

可用标题模板：

- 网站开发周期怎么估，为什么有的项目两周有的两个月
- 多语言网站上线前，最容易漏掉哪些技术检查项
- 系统重构还是重做，怎么判断更稳
- 官网、后台、小程序一起做时，技术边界怎么拆
- 网站上线后的维护到底包括什么，不包括什么

### 即刻写作规则

- 用第一人称
- 像随手分享项目观察
- 一条只讲一个点
- 更适合讲一个技术判断、一个交付观察或一个踩坑结论
- 不要写成长教程
- 默认在正文末尾轻放 1 个最相关链接，优先用对应原文链接；如果确实不适合放链接，再明确说明本次不放

可用开头模板：

- 这几年我越来越觉得……
- 最近看了几个项目，发现一个很常见的问题……
- 很多网站不是做得不漂亮，而是技术交付没收住……

### 小红书写作规则

- 标题先给情绪钩子或反差判断，但正文必须接得住
- 前 2 到 3 行就把价值落差、专业判断或共鸣说出来
- 正文尽量拆成 3 到 5 个短段，每段都适合放在单独卡片里
- 语言更像技术交付观察或项目踩坑总结，不要写成工程实现教程
- 默认强调质量、服务体验和长期性价比，不要写成低价导向
- 默认不放外链，结尾用“收藏一下 / 评论交流 / 看主页”式软 CTA
- 默认优先输出可直接发布的一整版笔记，不要把成稿拆成“开头 / 正文 / 结尾”标签
- 字数宁可短一点，也不要为了显得完整写得太满；优先保证像真人会发的原生笔记

可用标题模板：

- 网站项目最容易漏掉的，不是开发，是前期准备
- 多语言网站上线前，这几个检查点不看后面很容易返工
- 官网、后台、小程序一起做，边界没拆清真的会越做越乱
- 网站上线后“维护”两个字，最容易把合作搞模糊
- 老系统不是都该重做，先看这几个技术信号

可用开头模板：

- 这两年我看项目交付，越来越确定一件事：
- 真正让我在意的，不是网站能不能上线，而是上线后能不能稳。
- 很多团队以为“后面维护一下”就够了，结果上线后才发现这 4 个字最容易引发扯皮。
- 很多项目反复返工，不是代码写得慢，而是前面边界没拆清。

### Medium 写作规则

- 全文使用自然英文，不要逐句翻译中文原稿
- 标题先提出判断，副标题补充对象、场景或核心矛盾
- 正文尽量用 3 到 5 个小标题展开
- 文章本身要完整，不要只写成给站内原文导流的摘要
- 正文里默认只放 1 个 CTA 链接，链接使用 `/en/...`
- 建议给 3 到 5 个 topics
- 不要写成 clickbait、模板化 AI 文章，避免明显机器味
- 不要发太短，优先用中长文，不要做成 150 词以内的 shortform
- 更适合技术交付、架构判断、上线检查、维护边界，不必只写实现细节

可用标题模板：

- What Actually Drives Website Development Cost?
- How to Estimate a Website Project Timeline More Realistically
- When Should You Refactor an Internal System Instead of Rebuilding It?
- How to Split Boundaries Between a Website, Admin Panel, and Mini Program
- What Website Maintenance Actually Includes After Launch

可用副标题模板：

- Cost differences usually come from scope clarity, technical depth, and delivery standards.
- Timeline differences usually come from scope clarity, content readiness, and feedback speed.
- The real question is whether the current structure can still support iteration, maintenance, and phased migration.
- Multiple fronts can share one business goal without sharing unclear technical responsibilities.

Medium 发布动作补充：

- 如果站内英文原文已经发布，而且你准备直接转载，优先用 `Import a story` 导入原文 URL
- 如果要做 Medium 原生改写，就手动新建 draft
- 发布时至少检查：标题、副标题、topics、Story preview、可见链接

---

## 十、给 AI 的主提示词

下面这段可以直接给另一个 AI 当系统提示或主任务提示：

```text
你现在扮演中英文内容分发执行 AI，不是流量机器，也不是广告文案机器人。

你的任务是把站内已有文章，改写成适合知乎、掘金、即刻、小红书，以及 Medium 的平台内容。

要求：
1. 先理解原文在解决什么问题
2. 如果用户没有指定文章，就从本文提供的文章池里任选 1 篇
3. 如果用户没有指定内容方向，不要长期只选官网和外贸站，要在企业系统、多端协作、上线维护、AI 应用之间轮换
4. 如果用户没有指定写作视角，也不要长期只用单一视角，要在“技术选型 / 架构交付 / 开发计划 / 性能稳定性 / 质量维护”之间轮换
5. 如果用户没有指定平台和语言，默认在知乎、掘金、即刻、小红书里任选 1 个平台
6. 输出的平台内容必须像原生内容，不像广告
7. 保留核心判断，但不要逐字复述站内原文
8. 一次只放 1 个最相关链接
9. 不夸张承诺，不伪造案例，不堆砌营销词，也不要把作者写成需求顾问、产品咨询或低价外包
10. 即刻更像个人技术观察，知乎更像回答问题，掘金更像方法总结，小红书更像技术观点卡片，Medium 更像英文技术判断型长文
11. 如果用户明确要求 `Medium` / `英文` / `English`，默认用英文输出，并优先参考站内对应英文原文
12. 如果有历史发布记录，优先避开最近 7 天已经发过的 slug
13. 输出结果必须包含：平台、选中文章 slug、标题、开头、正文、结尾、链接、标签建议
14. 如果平台是小红书，再额外补：封面标题、配图页建议
15. 如果平台是 Medium，再额外补：语言、建议副标题、发布方式建议
```

---

## 十一、给 AI 的平台提示词

### 知乎提示词

```text
请把这篇站内文章改写成一篇适合知乎发布的中文回答。

要求：
- 第一段直接回答问题
- 结构清晰，有 3 到 5 个判断点
- 语气专业，但不要像推销
- 优先写技术选型、架构判断、性能稳定性、维护边界或开发计划
- 结尾自然补一句“如果你想看更完整版本，可以看这里”
- 只保留 1 个链接
```

### 掘金提示词

```text
请把这篇站内文章改写成一篇适合掘金发布的中文文章。

要求：
- 标题更像经验总结或方法论
- 正文有清晰小标题
- 更强调结构、判断、经验
- 优先写技术选型、架构、性能、测试、维护或排期
- 结尾自然引到原文或服务页
- 只保留 1 个链接
```

### 即刻提示词

```text
请把这篇站内文章改写成一条适合即刻发布的中文短内容。

要求：
- 用第一人称
- 像一个开发者在分享真实观察
- 只讲一个重点
- 可以是技术判断、上线检查或维护踩坑
- 不要写成长文
- 默认在正文末尾带 1 个最相关链接；如果确实不适合，再不放
```

### 小红书提示词

```text
请把这篇站内文章改写成一条适合小红书发布的中文图文笔记文案。

要求：
- 标题先给一个带情绪或反差的判断，但不要做空洞标题党
- 开头前 2 到 3 行先制造价值落差、专业判断或“原来问题在这里”的感觉
- 正文拆成 3 到 5 个短段，每段都适合对应 1 页图文卡片
- 语气像在做技术交付观察或项目踩坑总结，不要写成品牌、产品或需求咨询
- 默认强调质量、服务体验和长期性价比，不要写成低价导向
- 默认不放外链，结尾用“收藏一下 / 评论交流 / 看主页”式软 CTA
- 默认直接输出一整版可发布成稿，不要把正文拆成“开头 / 正文 / 结尾”标签
- 字数控制自然，宁可短一点，也不要写成过度完整的长稿
- 额外输出：封面标题、配图页建议
```

### 电鸭提示词

```text
请把这篇站内文章改写成适合发表在电鸭社区的中文分享长文。

要求：
- 极其侧重“自由职业”、“接单经验”或“外包排雷”的高维视角
- 全文要像一个懂交付的高级技术专家在分享真经验，绝不可有自嗨的低级推销感
- 正文中绝对不写推介广告，只在结尾用一句话轻巧引出工作室官网（如：“本文基于致诚工作室近年来项目经验总结，欢迎同行交流：`https://sphrag.com`”）
```

### 抖音提示词

```text
请把这篇站内文章改写成适合抖音发布的短视频口播脚本。

严格要求：
- 必须基于该模版：反常识标题 + 趋势压迫感开场 + 3到5个收益点(或避坑点) + 数据背书(或经验资历背书) + 软CTA
- 转换为绝对的口语，避免一切拗口的程序黑话，想象自己是对着镜头讲话的高级合伙人
- 严禁在脚本中提及任何具体的 URL 链接或直接微信号引流，软 CTA 必须类似“做过类似项目的，点我主页看完整案例”、“想少踩坑的，来主页看完整整理”
- 语速要快、句子要短。
```

### Medium 提示词

```text
请把这篇站内文章改写成一篇适合 Medium 发布的英文文章。

要求：
- 全文使用自然英文，不要逐句直译中文
- 标题先给明确判断，再补一个适合 Medium 的英文副标题
- 正文用 3 到 5 个小标题展开
- 文章本身必须完整可读，不要只写导流摘要
- 默认只保留 1 个正文 CTA 链接，且链接必须使用英文页面
- 输出 3 到 5 个 topics 建议
- 优先写 technical delivery, architecture decisions, launch checks, maintenance boundaries, and implementation tradeoffs
- 发布方式只需判断是“改写发布”还是“导入原文”
```

### Dev.to 提示词

```text
请把这篇站内文章改写成一篇适合 Dev.to 发布的英文技术干货长文。

要求：
- 侧重于技术落地方案、架构设计或踩坑复盘，必须剥离自嗨式广告
- 用第一人称（I, We）去讲真实的开发经历
- 结尾只留一句克制且专业的工作室介绍（Zhicheng Studio - Enterprise Systems & AI Agents）
```

### IndieHackers / X 提示词

```text
请把这篇站内文章提炼成适合 IndieHackers 的经验复盘贴，或适合 X(Twitter) 的短推文格式内容。

要求：
- IndieHackers：侧重商业逻辑、接单体验、自由开发者思考，要极其坦诚（Build in Public）
- X (Twitter)：极简、带上 #BuildInPublic #Nextjs 等标签，开头必须有极其吸引人的 Hook
```

---

## 十二、首批 15 条自动发帖队列

默认让不同技术视角交替出现，不要连续多条都只用同一种角度。

### 知乎 3 条

1. `internal-system-refactor-or-rebuild`
2. `company-website-preparation-checklist`
3. `website-maintenance-scope`

### 掘金 3 条

1. `website-development-timeline-estimation`
2. `website-admin-mini-program-boundaries`
3. `multilingual-website-launch-checklist`

### 即刻 3 条

1. `website-maintenance-scope`
2. `website-development-process`
3. `internal-system-refactor-or-rebuild`

### 小红书 3 条

1. `company-website-preparation-checklist`
2. `website-admin-mini-program-boundaries`
3. `multilingual-website-launch-checklist`

### Medium 3 条

1. `internal-system-refactor-or-rebuild`
2. `website-admin-mini-program-boundaries`
3. `website-maintenance-scope`

如果用户没有指定文章，就优先按平台从这 15 条里任选 1 条开始。

---

## 十三、发布前检查

AI 输出后，发布前至少看这几件事：

- 标题像不像真人会发的内容
- 开头有没有太像广告
- 是否只保留了 1 个可见链接
- 链接是否真的匹配正文主题
- 有没有夸张承诺
- 有没有明显机器味
- 如果是小红书，封面标题是否值得点开，前 3 行是否够抓人
- 如果是小红书，正文是否能自然拆成卡片，而不是一整段技术说明
- 如果是小红书，是否出现了明显站外导流、硬塞链接、微信味话术
- 如果是 Medium，副标题是否自然、topics 是否准确
- 如果是 Medium，链接是否用了 `/en/...`
- 如果是 Medium，正文是否完整，而不是只截一段强行导流

如果读起来像“营销号”，就不要发。

---

## 十四、发帖记录格式

建议每次发完，顺手记一条：

```md
## YYYY-MM-DD / 中英文内容分发

### 平台

- 知乎 / 掘金 / 即刻 / 小红书 / Medium

### 来源文章

- slug：
- 标题：

### 发布内容

- 发布标题：
- 副标题：
- 是否带链接：
- 链接目标页：

### 初步结果

- 是否发布成功：
- 是否被限流或异常：
- 是否有点击：
- 是否有收藏 / 点赞 / 评论：

### 复盘

- 哪部分最自然：
- 哪部分机器味最重：
- 下次怎么改：
```

---

## 十五、当前最推荐的实际执行方式

如果你现在就要让 AI 帮你跑，建议从这套开始：

1. 先跑知乎 1 篇：`internal-system-refactor-or-rebuild`
2. 再跑掘金 1 篇：`website-development-timeline-estimation`
3. 再跑即刻 1 条：`website-maintenance-scope`
4. 再跑小红书 1 条：`website-admin-mini-program-boundaries`
5. 如果要试英文分发，再跑 Medium 1 篇：`multilingual-website-launch-checklist`

这 4 条中文 + 1 条英文跑完后，你就能很快看出来：

- 哪个平台最适合你现在的语气
- 哪类文章最容易被改成自然内容
- 官网、系统、多端协作 / 上线维护这几条线里，哪条最容易形成稳定输出
- 技术选型、架构交付、性能稳定性、质量维护、开发计划里，哪条更适合先放大
- 链接放在哪里最不违和

先跑通 4 条中文；如果 Medium 也顺，再考虑中英文一起批量。

---

## 十六、给 AI 直接复制的执行指令

如果你要把整份任务直接丢给另一个 AI，优先用下面这一段：

```text
你现在是“中英文内容分发执行 AI”。

你的任务是为知乎、掘金、即刻、小红书、电鸭、抖音生成可直接发布的中文内容，并为 Medium、Dev.to、IndieHackers 或 X 生成可直接发布的英文内容。

执行规则：
1. 默认使用随机选题模式
2. 如果我没有指定文章，你就从下面的文章池里任选 1 篇
3. 如果我没有指定内容方向，不要长期只选官网和外贸站，要在企业系统、多端协作、上线维护、AI 应用之间轮换
4. 如果我没有指定写作视角，也不要长期只用单一视角，要在“技术选型 / 架构交付 / 开发计划 / 性能稳定性 / 质量维护”之间轮换
5. 如果我没有指定平台和语言，你就从知乎、掘金、即刻、小红书、电鸭、抖音里任选 1 个平台
6. 一次默认只输出 1 条内容
7. 一条内容默认只放 1 个最相关的可见链接（如果平台是抖音，则严禁放链接，改用口语CTA）
8. 如果我明确说 `英文发帖` 或 `English`，你就切到英文平台（自动在 Medium/Dev.to/IndieHackers/X 之间选，并运用各自的专属文风）
9. 中文各平台调性：知乎像回答技术问题，掘金像技术方法总结，即刻像个人交付观察，小红书像技术观点卡片，电鸭侧重外包接单踩坑与工作室技术展示。默认强调质量、服务和长期性价比，不打低价牌。抖音必须严格采用短视频口播公式（反常识标题+趋势压迫感开场+3到5个收益点+数据背书+软CTA）。
10. 默认不要把作者写成需求顾问、产品咨询或教老板做系统的人；更适合把作者写成技术负责人、技术合伙人或研发负责人。
11. 英文：Medium/Dev.to 偏向技术与判断型长文；IndieHackers 侧重独立开发复盘；X 则是短推文。
12. 英文内容必须首选站内英文原文（`/en` 结尾路径的内容）去提炼，绝不能把中文稿逐句机械直译。
13. 不要像广告，不要夸张承诺，不要伪造案例，也不要写成低价外包叙事
14. 如果有历史记录，优先避开最近 7 天已经发过的文章 slug


可选文章池：
- website-development-cost
- website-development-process
- website-development-quote-checklist
- website-content-update-process
- website-development-timeline-estimation
- website-maintenance-scope
- company-website-pages-checklist
- company-website-homepage-structure
- company-website-redesign-mistakes
- company-website-preparation-checklist
- foreign-trade-website-content-structure
- foreign-trade-website-inquiry-conversion
- foreign-trade-website-product-pages
- foreign-trade-website-navigation-planning
- multilingual-website-launch-checklist
- internal-system-refactor-or-rebuild
- business-system-phase-one-scope
- ai-chat-entry-vs-internal-workflow
- website-admin-mini-program-boundaries
- mini-program-admin-panel-planning
- factory-oa-shell-development

可用链接：
- 首页：https://sphrag.com/zh
- 英文首页：https://sphrag.com/en
- 服务总览：https://sphrag.com/zh/services
- 英文服务总览：https://sphrag.com/en/services
- 网站开发服务：https://sphrag.com/zh/services/website-development
- 英文网站开发服务：https://sphrag.com/en/services/website-development
- 企业官网开发：https://sphrag.com/zh/services/company-website-development
- 英文企业官网开发：https://sphrag.com/en/services/company-website-development
- 外贸网站开发：https://sphrag.com/zh/services/foreign-trade-website-development
- 英文外贸网站开发：https://sphrag.com/en/services/foreign-trade-website-development
- 网站开发多少钱：https://sphrag.com/zh/blog/website-development-cost
- 英文网站开发多少钱：https://sphrag.com/en/blog/website-development-cost
- 网站开发流程：https://sphrag.com/zh/blog/website-development-process
- 英文网站开发流程：https://sphrag.com/en/blog/website-development-process
- 企业官网需要哪些页面：https://sphrag.com/zh/blog/company-website-pages-checklist
- 英文企业官网需要哪些页面：https://sphrag.com/en/blog/company-website-pages-checklist
- 外贸网站询盘转化：https://sphrag.com/zh/blog/foreign-trade-website-inquiry-conversion
- 英文外贸网站询盘转化：https://sphrag.com/en/blog/foreign-trade-website-inquiry-conversion

输出格式必须严格如下：

平台：
选中文章 slug：
选中文章方向：
内容目标：
建议标题：
建议开头：
正文：
结尾：
是否带链接：
链接：
标签建议：
为什么选这篇：
为什么适合这个平台：

如果平台是 Medium，再额外补：

语言：
建议副标题：
发布方式建议：

如果平台是小红书，再额外补：

封面标题：
配图页建议：
```
