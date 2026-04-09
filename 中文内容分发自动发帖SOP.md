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
- 网站开发多少钱
- 网站开发流程
- 外贸网站询盘转化

---

## 二、AI 自动发帖的底线

AI 可以自动生成草稿，但不要让它做下面这些事：

- 伪造客户案例
- 伪造项目结果
- 夸张承诺，比如“包上首页”“最低价”“全网最强”
- 把品牌定位写成“便宜外包”或“低价方案”
- 一篇内容里硬塞多个链接
- 在不同平台直接复制同一段文案
- 把技术博客硬搬到即刻或知乎问答里
- 把中文稿直接机翻成生硬英文后发到 Medium

更稳的做法是：

- AI 自动生成
- Medium 优先参考站内对应英文原文，不要从中文稿逐句直译
- 你快速过一眼
- 再发

如果后面真要全自动发布，也要先用这一版 SOP 跑几轮，确认风格自然、不过度营销。

---

## 三、平台分工

### 知乎

更适合：

- 问题回答
- 决策前内容
- “为什么”“怎么判断”“怎么准备”这类内容

推荐方向：

- 网站开发多少钱
- 企业官网需要哪些页面
- 外贸网站为什么没询盘
- 网站改版最容易踩哪些坑

内容风格：

- 先回答问题
- 再展开判断逻辑
- 最后自然给补充阅读链接

### 掘金

更适合：

- 方法论
- 结构判断
- 产品和项目经验总结

推荐方向：

- 网站结构怎么规划
- 企业官网首页怎么做
- 多语言网站上线前，最容易漏掉的内容和体验细节
- 系统重构还是重做怎么判断

内容风格：

- 标题更偏专业判断
- 正文结构更清晰
- 可以保留小标题和列表

### 即刻

更适合：

- 短内容
- 个人判断
- 项目中的真实观察

推荐方向：

- 做网站前最该先准备什么
- 小程序和官网怎么分工
- 外贸网站为什么询盘少
- 什么情况应该重做，不该继续修补

内容风格：

- 更像人在说话
- 不要写成长文
- 不要一上来贴链接

### 小红书

更适合：

- 图文卡片式的观点内容
- 品牌官网、营销表达、页面重塑这类“看得见差异”的话题
- 用情绪钩子切入，再给 3 到 5 个可收藏的判断点

推荐方向：

- 为什么很多品牌官网看起来高级，却几乎不转化
- 每个品牌官网都值得重塑一遍吗
- 企业官网首页最容易拉低品牌质感和服务感的 3 个地方
- 外贸网站为什么不是把产品堆上去就行

内容风格：

- 封面标题和前 3 行先给情绪钩子、反差感或反常识判断
- 正文像“品牌 / 设计 / 线上营销观察”，不要写成技术教程
- 多用短段落、短句、分隔符，必要时可轻量使用 emoji
- 一篇只讲 1 个核心判断，最好能拆成 5 到 7 页图文卡片
- 结尾优先引导收藏、评论、看主页，不要硬贴外链

### 电鸭社区 (Eleduck)

更适合：

- 纯接包求职贴（“高端定制合伙人”定位）
- 围绕远程工作、外包踩坑的深度经验分享
- 把官网包装为“独立产品”发布

推荐方向：

- 辞职做独立工作室，我用 Next.js 极简重写了自己的工作站
- 帮 5 家企业重做 OA 系统后，我总结了外包的四大深坑
- [接单] 原大厂研发出山，专抓企业核心系统(ERP/OA)与智能体落地

内容风格：

- 发“求职交友贴”时极客感要拉满，突出反向筛选、重结果和协作质量的高级定位。
- 发“经验分享贴”时全程绝不写推销硬广，只在文末轻描淡写留一行官网链接供观摩交流。

### 抖音 (Douyin / 口播脚本)

更适合：

- 短视频口播文案，用于快节奏抓人眼球
- 强情绪价值、制造问题意识、提供专家解法
- 针对寻找外包踩过坑、或是遇到业务瓶颈的老板群体

推荐方向：

- 为什么有些外贸站页面不多，却更容易拿到高质量询盘？
- 找外包做内部 OA 系统，这 3 种交付方式服务说得再好也别碰！
- 企业定制开发真正值钱的，不是功能堆得多，而是交付质量和后续服务

内容风格：

- **内容核心公式：反常识标题 + 趋势压迫感开场 + 3到5个收益点 + 数据/经验背书 + 软CTA**
- 极其口语化，句子要短痛快，适合真人口播念出来。
- 绝不用技术黑话（如 React / Nginx 等），要转换成老板能听懂的“商业成本”。
- 结尾绝不可贴网址（会被平台限流封号），要使用软CTA引流（如：“遇到类似坑的老板，点进我主页看我的过往案例”）。

### Medium / Dev.to / Hashnode（英文长文）

更适合：

- 英文长文
- 痛点拆解、技术方案、底层架构分享
- **强烈推荐** Dev.to / Hashnode：它们更适合发布完整英文长文，读者环境和编辑体验都更友好

推荐方向：

- What actually drives custom enterprise software cost
- How I built an Enterprise OA system with Next.js (Dev.to 适用)
- Why many company websites fail after the homepage

内容风格：

- 纯粹提供技术干货和业务踩坑经验，不要写成广告短文
- 标题 + 副标题要先把问题说清楚
- 正文中可融入一点技术实现细节或代码思路
- 结尾克制导流：“I run Zhicheng Studio, specializing in enterprise systems and AI agents...”
- 发布时重点检查标题、副标题、topics、Story preview 和正文可读性

### IndieHackers（英文项目复盘）

更适合：

- 分享独立工作室接单流水、踩坑与反思、如何管理客户期望
- 吸引海外正在寻找离岸或高水平技术合伙人的老板、其他同行推荐

内容风格：

- 用第一人称，非常真实、坦诚、透明（Build in Public 风格）
- 少写干巴巴的技术名词，多讲决策逻辑和商业考量
- 结尾自然导流到你的主营业务

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

### 第一组：最接近询盘

- `website-development-cost`
- `website-development-process`
- `website-development-quote-checklist`

### 第二组：企业官网

- `company-website-pages-checklist`
- `company-website-homepage-structure`
- `company-website-redesign-mistakes`

### 第三组：外贸网站

- `foreign-trade-website-content-structure`
- `foreign-trade-website-inquiry-conversion`
- `foreign-trade-website-product-pages`

### 第四组：适合小红书 / 短内容

- `company-website-homepage-structure`
- `company-website-redesign-mistakes`
- `mini-program-and-website-relationship`
- `landing-page-vs-company-website`
- `website-maintenance-scope`

### 第五组：适合 Medium 英文长文

- `website-development-cost`
- `website-development-process`
- `company-website-pages-checklist`
- `company-website-homepage-structure`
- `foreign-trade-website-content-structure`
- `foreign-trade-website-inquiry-conversion`

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
数量：1
目标：品牌曝光 / 点击文章 / 导向服务页 / 自动
语气：专业判断 / 个人口吻 / 决策建议 / 自动
长度：短 / 中 / 长
是否带链接：自动 / 是 / 否
发布方式：自动 / 改写发布 / 导入原文
```

示例：

```md
平台：自动
语言：自动
模式：随机选题
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
数量：1
目标：点击文章
语气：决策建议
长度：中
是否带链接：是
发布方式：自动
```

如果你想明确让 AI 产出一条 Medium 英文稿，可以这样输入：

```md
平台：Medium
语言：英文
模式：随机选题
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
建议开头：
正文：
结尾：
是否带链接：
链接：
标签建议：
为什么选这篇：
为什么适合这个平台：
```

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

可用标题模板：

- 网站开发怎么判断报价，真正拉开差距的是哪些质量和服务项？
- 企业官网一般需要哪些页面，为什么很多站一开始就做乱了？
- 外贸网站没询盘，问题通常不只是“流量不够”

### 掘金写作规则

- 标题更像经验总结
- 正文更适合小标题结构
- 可以更强调“方法”“判断”“经验”
- 结尾带 1 个相关阅读或服务页链接

可用标题模板：

- 企业官网结构怎么规划，后面才不会越改越乱
- 多语言网站上线前，最容易漏掉的内容和体验检查项
- 系统重构还是重做，怎么判断更稳

### 即刻写作规则

- 用第一人称
- 像随手分享项目观察
- 一条只讲一个点
- 不要写成长教程
- 不要硬塞链接

可用开头模板：

- 这几年我越来越觉得……
- 最近看了几个企业官网，发现一个很常见的问题……
- 很多网站不是做得不漂亮，而是……

### 小红书写作规则

- 标题先给情绪钩子或反差判断，但正文必须接得住
- 前 2 到 3 行就把价值落差、专业判断或共鸣说出来
- 正文尽量拆成 3 到 5 个短段，每段都适合放在单独卡片里
- 语言更像品牌观察或案例拆解，不要写成工程实现教程
- 默认强调质量、服务体验和长期性价比，不要写成低价导向
- 默认不放外链，结尾用“收藏一下 / 评论交流 / 看主页”式软 CTA

可用标题模板：

- 很多品牌官网，其实都值得按更高标准重塑一遍
- 很多企业官网的问题，不是丑，而是没有把专业度和服务感做出来
- 官网不是做完就行，真正拉开差距的是质感、服务和转化链路

可用开头模板：

- 这两年我看企业官网，越来越强烈的一个感受是：
- 真正让我在意的，不是很多品牌还没做官网，而是很多官网已经上线了，却没有把品牌质感和服务能力表达清楚。
- 很多老板以为官网交付完成就结束了，但从线上营销角度看，那可能只是素材上传完了。

### Medium 写作规则

- 全文使用自然英文，不要逐句翻译中文原稿
- 标题先提出判断，副标题补充对象、场景或核心矛盾
- 正文尽量用 3 到 5 个小标题展开
- 文章本身要完整，不要只写成给站内原文导流的摘要
- 正文里默认只放 1 个 CTA 链接，链接使用 `/en/...`
- 建议给 3 到 5 个 topics
- 不要写成 clickbait、模板化 AI 文章，避免明显机器味
- 不要发太短，优先用中长文，不要做成 150 词以内的 shortform

可用标题模板：

- What Actually Drives Website Development Cost?
- Why Many Company Websites Fail After the Homepage
- Foreign Trade Websites Usually Lose Inquiries Before the Contact Form

可用副标题模板：

- Most budget confusion comes from unclear scope, not from a single number.
- The issue is usually missing structure beneath the homepage, not weak visuals.
- More contact buttons do not fix a broken inquiry path.

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
3. 如果用户没有指定平台和语言，默认在知乎、掘金、即刻、小红书里任选 1 个平台
4. 输出的平台内容必须像原生内容，不像广告
5. 保留核心判断，但不要逐字复述站内原文
6. 一次只放 1 个最相关链接
7. 不夸张承诺，不伪造案例，不堆砌营销词，也不要把品牌写成低价外包
8. 即刻更像个人观察，知乎更像回答问题，掘金更像方法总结，小红书更像图文观点卡片，Medium 更像英文判断型长文
9. 如果用户明确要求 `Medium` / `英文` / `English`，默认用英文输出，并优先参考站内对应英文原文
10. 如果有历史发布记录，优先避开最近 7 天已经发过的 slug
11. 输出结果必须包含：平台、选中文章 slug、标题、开头、正文、结尾、链接、标签建议
12. 如果平台是小红书，再额外补：封面标题、配图页建议
13. 如果平台是 Medium，再额外补：语言、建议副标题、发布方式建议
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
- 不要写成长文
- 默认不放链接，除非确实需要
```

### 小红书提示词

```text
请把这篇站内文章改写成一条适合小红书发布的中文图文笔记文案。

要求：
- 标题先给一个带情绪或反差的判断，但不要做空洞标题党
- 开头前 2 到 3 行先制造价值落差、专业判断或“原来问题在这里”的感觉
- 正文拆成 3 到 5 个短段，每段都适合对应 1 页图文卡片
- 语气像在做品牌官网 / 营销表达观察，不要写成技术教程
- 默认强调质量、服务体验和长期性价比，不要写成低价导向
- 默认不放外链，结尾用“收藏一下 / 评论交流 / 看主页”式软 CTA
- 额外输出：封面标题、配图页建议
```

### 电鸭提示词

```text
请把这篇站内文章改写成适合发表在电鸭社区的中文分享长文。

要求：
- 极其侧重“自由职业”、“接单经验”或“外包排雷”的高维视角
- 全文要像一个懂商业的高级技术专家在传授真知灼见，绝不可有自嗨的低级推销感
- 正文中绝对不写推介广告，只在结尾用一句话轻巧引出工作室官网（如：“本文基于致诚工作室近年来项目经验总结，欢迎同行交流：`https://sphrag.com`”）
```

### 抖音提示词

```text
请把这篇站内文章改写成适合抖音发布的短视频口播脚本。

严格要求：
- 必须基于该模版：反常识标题 + 趋势压迫感开场 + 3到5个收益点(或避坑点) + 数据背书(或经验资历背书) + 软CTA
- 转换为绝对的口语，避免一切拗口的程序黑话，想象自己是对着镜头讲话的高级合伙人
- 严禁在脚本中提及任何具体的 URL 链接或直接微信号引流，软CTA 必须类似“同行避坑交流，点我主页”、“想看正确搞法的老板，来主页找我”
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

### 知乎 3 条

1. `website-development-cost`
2. `company-website-pages-checklist`
3. `foreign-trade-website-inquiry-conversion`

### 掘金 3 条

1. `website-development-process`
2. `company-website-homepage-structure`
3. `internal-system-refactor-or-rebuild`

### 即刻 3 条

1. `mini-program-and-website-relationship`
2. `landing-page-vs-company-website`
3. `website-maintenance-scope`

### 小红书 3 条

1. `company-website-redesign-mistakes`
2. `company-website-homepage-structure`
3. `landing-page-vs-company-website`

### Medium 3 条

1. `website-development-cost`
2. `company-website-pages-checklist`
3. `foreign-trade-website-inquiry-conversion`

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

1. 先跑知乎 1 篇：`website-development-cost`
2. 再跑掘金 1 篇：`website-development-process`
3. 再跑即刻 1 条：`mini-program-and-website-relationship`
4. 再跑小红书 1 条：`company-website-redesign-mistakes`
5. 如果要试英文分发，再跑 Medium 1 篇：`company-website-pages-checklist`

这 4 条中文 + 1 条英文跑完后，你就能很快看出来：

- 哪个平台最适合你现在的语气
- 哪类文章最容易被改成自然内容
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
3. 如果我没有指定平台和语言，你就从知乎、掘金、即刻、小红书、电鸭、抖音里任选 1 个平台
4. 一次默认只输出 1 条内容
5. 一条内容默认只放 1 个最相关的可见链接（如果平台是抖音，则严禁放链接，改用口语CTA）
6. 如果我明确说 `英文发帖` 或 `English`，你就切到英文平台（自动在 Medium/Dev.to/IndieHackers/X 之间选，并运用各自的专属文风）
7. 中文各平台调性：知乎像回答问题，掘金像方法总结，即刻像个人观察，小红书像观点型图文卡片，电鸭侧重外包接单踩坑与工作室高端展示。默认强调质量、服务和长期性价比，不打低价牌。抖音必须严格采用短视频口播神级公式（反常识标题+趋势压迫感开场+3到5个收益点+数据背书+软CTA）。
8. 英文：Medium/Dev.to 偏向技术与判断型长文；IndieHackers 侧重独立开发复盘；X 则是短推文。
9. 英文内容必须首选站内英文原文（`/en` 结尾路径的内容）去提炼，绝不能把中文稿逐句机械直译。
10. 不要像广告，不要夸张承诺，不要伪造案例，也不要写成低价外包叙事
11. 如果有历史记录，优先避开最近 7 天已经发过的文章 slug


可选文章池：
- website-development-cost
- website-development-process
- website-development-quote-checklist
- company-website-pages-checklist
- company-website-homepage-structure
- company-website-redesign-mistakes
- foreign-trade-website-content-structure
- foreign-trade-website-inquiry-conversion
- foreign-trade-website-product-pages
- mini-program-and-website-relationship
- landing-page-vs-company-website
- website-maintenance-scope

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
