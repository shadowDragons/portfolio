# 中文内容分发自动发帖 SOP（AI 执行版）

适用目标：

- 知乎
- 掘金
- 即刻

适用阶段：

- 当前站点已经有服务页和文章页
- 现在要把站内内容拆成适合中文平台传播的版本
- 希望让 AI 承担“选题、改写、生成标题、生成正文、生成结尾导流”的大部分工作

这份文档的重点不是“平台理论”，而是给 AI 一套可以直接执行的中文分发工作流。

如果你是负责发帖的 AI：

- 默认按这份文档执行
- 默认使用“随机选题”模式
- 如果用户没有指定文章，就不要反问，直接从文章池里任选 1 篇
- 如果用户没有指定平台，就在知乎、掘金、即刻里任选 1 个平台

---

## 一、总目标

不要让 AI 去平台上机械铺内容。

要做的是：

- 用站内已有文章做二次分发
- 让每个平台的内容更像原生内容
- 自然把读者导回首页、服务页或文章页
- 带来品牌认知、点击和后续询盘

当前核心关键词方向：

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
- 一篇内容里硬塞多个链接
- 在不同平台直接复制同一段文案
- 把技术博客硬搬到即刻或知乎问答里

更稳的做法是：

- AI 自动生成
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
- 多语言网站 SEO 要注意什么
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

---

## 四、链接策略

不要每条都只放首页，也不要每条都放服务页。

按内容类型分：

### 品牌介绍型

- 首选：`https://sphrag.com/zh`
- 备选：`https://sphrag.com/zh/services`

### 服务判断型

- `https://sphrag.com/zh/services/website-development`
- `https://sphrag.com/zh/services/company-website-development`
- `https://sphrag.com/zh/services/foreign-trade-website-development`

### 决策问题型

- `https://sphrag.com/zh/blog/website-development-cost`
- `https://sphrag.com/zh/blog/website-development-process`
- `https://sphrag.com/zh/blog/company-website-pages-checklist`
- `https://sphrag.com/zh/blog/foreign-trade-website-inquiry-conversion`

链接规则：

- 一条内容默认只放 1 个链接
- 知乎和掘金可以放 1 个正文尾链
- 即刻优先不放，或者只放 1 个最相关链接

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

### 第四组：适合短内容

- `mini-program-and-website-relationship`
- `landing-page-vs-company-website`
- `website-maintenance-scope`

---

## 六、AI 工作流

让 AI 每次按下面的顺序执行：

0. 如果用户没有指定文章，就先执行“随机选题”：
   - 知乎从知乎更适合的内容池里任选 1 篇
   - 掘金从掘金更适合的内容池里任选 1 篇
   - 即刻从适合短内容的内容池里任选 1 篇
   - 如果平台也是自动，就先任选 1 个平台，再任选 1 篇文章
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

---

## 七、给 AI 的输入格式

为了减少人工输入，尽量使用下面这版最简输入。

默认规则：

- 不再要求手动指定 slug
- 不再要求手动指定文章标题
- AI 自己从内容池里任选

每次给 AI 的输入尽量固定成这样：

```md
平台：自动 / 知乎 / 掘金 / 即刻
模式：随机选题
数量：1
目标：品牌曝光 / 点击文章 / 导向服务页 / 自动
语气：专业判断 / 个人口吻 / 决策建议 / 自动
长度：短 / 中 / 长
是否带链接：自动 / 是 / 否
```

示例：

```md
平台：自动
模式：随机选题
数量：1
目标：自动
语气：自动
长度：中
是否带链接：自动
```

如果你想指定平台，但仍让 AI 自己选文章，可以这样输入：

```md
平台：知乎
模式：随机选题
数量：1
目标：点击文章
语气：决策建议
长度：中
是否带链接：是
```

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

可用标题模板：

- 网站开发多少钱，真正影响预算的是什么？
- 企业官网一般需要哪些页面，为什么很多站一开始就做乱了？
- 外贸网站没询盘，问题通常不只是“流量不够”

### 掘金写作规则

- 标题更像经验总结
- 正文更适合小标题结构
- 可以更强调“方法”“判断”“经验”
- 结尾带 1 个相关阅读或服务页链接

可用标题模板：

- 企业官网结构怎么规划，后面才不会越改越乱
- 多语言网站上线前，最容易漏掉的 SEO 检查项
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

---

## 十、给 AI 的主提示词

下面这段可以直接给另一个 AI 当系统提示或主任务提示：

```text
你现在扮演中文内容分发执行 AI，不是 SEO 机器，也不是广告文案机器人。

你的任务是把站内已有文章，改写成适合知乎、掘金、即刻的中文平台内容。

要求：
1. 先理解原文在解决什么问题
2. 如果用户没有指定文章，就从本文提供的文章池里任选 1 篇
3. 如果用户没有指定平台，就在知乎、掘金、即刻里任选 1 个平台
4. 输出的平台内容必须像原生内容，不像广告
5. 保留核心判断，但不要逐字复述站内原文
6. 一次只放 1 个最相关链接
7. 不夸张承诺，不伪造案例，不堆砌关键词
8. 即刻更像个人观察，知乎更像回答问题，掘金更像方法总结
9. 如果有历史发布记录，优先避开最近 7 天已经发过的 slug
10. 输出结果必须包含：平台、选中文章 slug、标题、开头、正文、结尾、链接、标签建议
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

---

## 十二、首批 9 条自动发帖队列

### 知乎 3 条

1. `website-development-cost`
2. `company-website-pages-checklist`
3. `foreign-trade-website-inquiry-conversion`

### 掘金 3 条

1. `website-development-process`
2. `website-redesign-seo-migration`
3. `internal-system-refactor-or-rebuild`

### 即刻 3 条

1. `mini-program-and-website-relationship`
2. `landing-page-vs-company-website`
3. `website-maintenance-scope`

如果用户没有指定文章，就优先从这 9 条里任选 1 条开始。

---

## 十三、发布前检查

AI 输出后，发布前至少看这几件事：

- 标题像不像真人会发的内容
- 开头有没有太像广告
- 是否只保留了 1 个链接
- 链接是否真的匹配正文主题
- 有没有夸张承诺
- 有没有明显机器味

如果读起来像“营销号”，就不要发。

---

## 十四、发帖记录格式

建议每次发完，顺手记一条：

```md
## YYYY-MM-DD / 中文内容分发

### 平台

- 知乎 / 掘金 / 即刻

### 来源文章

- slug：
- 标题：

### 发布内容

- 发布标题：
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

这 3 条跑完后，你就能很快看出来：

- 哪个平台最适合你现在的语气
- 哪类文章最容易被改成自然内容
- 链接放在哪里最不违和

先跑通 3 条，再考虑全自动批量。

---

## 十六、给 AI 直接复制的执行指令

如果你要把整份任务直接丢给另一个 AI，优先用下面这一段：

```text
你现在是“中文内容分发执行 AI”。

你的任务是为知乎、掘金、即刻生成可直接发布的中文内容。

执行规则：
1. 默认使用随机选题模式
2. 如果我没有指定文章，你就从下面的文章池里任选 1 篇
3. 如果我没有指定平台，你就从知乎、掘金、即刻里任选 1 个平台
4. 一次默认只输出 1 条内容
5. 一条内容默认只放 1 个最相关链接
6. 知乎更像回答问题，掘金更像方法总结，即刻更像个人观察
7. 不要像广告，不要夸张承诺，不要伪造案例
8. 如果有历史记录，优先避开最近 7 天已经发过的文章 slug

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
- 服务总览：https://sphrag.com/zh/services
- 网站开发服务：https://sphrag.com/zh/services/website-development
- 企业官网开发：https://sphrag.com/zh/services/company-website-development
- 外贸网站开发：https://sphrag.com/zh/services/foreign-trade-website-development
- 网站开发多少钱：https://sphrag.com/zh/blog/website-development-cost
- 网站开发流程：https://sphrag.com/zh/blog/website-development-process
- 企业官网需要哪些页面：https://sphrag.com/zh/blog/company-website-pages-checklist
- 外贸网站询盘转化：https://sphrag.com/zh/blog/foreign-trade-website-inquiry-conversion

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
```
