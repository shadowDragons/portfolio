# 站内博客自动补文 SOP（AI 执行版）

适用目标：

- 定期给网站补充新的博客文章
- 让 AI 按现有项目结构直接生成可落地的文章数据
- 让文章自动出现在：
  - `/zh/blog`
  - `/en/blog`
  - 相关文章区块
  - `sitemap.xml`

这份 SOP 不是“写作建议”，而是给另一个 AI 直接执行的操作手册。

---

## 一、先理解当前项目怎么接文章

当前博客不是 Markdown 文件驱动，也不是 CMS 驱动。

当前博客的数据源是：

- `src/lib/articles.ts`

这个文件同时负责：

- 文章 slug 列表
- 每篇文章的数据定义
- 中英文内容
- related services 关系
- 页面 metadata
- 结构化数据所需字段
- 列表页和详情页的数据来源

这意味着：

- AI 补文章时，核心只需要改 `src/lib/articles.ts`
- 不需要新建单独页面文件
- 不需要手动改 `sitemap.xml`
- 不需要手动改博客路由

因为下面这些地方都会自动吃到新文章：

- `src/app/[locale]/blog/page.tsx`
- `src/app/[locale]/blog/[slug]/page.tsx`
- `src/app/sitemap.ts`

---

## 二、AI 每次任务的目标

每次定时执行时，AI 默认做 1 篇新文章。

目标是：

- 从既定选题池里选 1 个未覆盖题目
- 生成 1 个新的 article entry
- 同时补齐 `zh` 和 `en`
- 挂到正确的 `relatedServices`
- 让它符合当前 `src/lib/articles.ts` 的结构
- 让文章既能覆盖技术方案、交付、稳定性与维护，也能覆盖业务判断、产品规划和项目边界

默认不要一次生成很多篇。

更稳的节奏：

- 每次 1 篇
- 每周 2 次
- 连续执行

---

## 三、AI 绝对不要做的事

- 不要修改现有文章内容，除非任务明确要求重写
- 不要删除已有 slug
- 不要改文章数据结构
- 不要改博客页面模板
- 不要伪造客户案例
- 不要写明显机器味的空话
- 不要为了补英文而直译得很生硬
- 不要生成和现有 slug 高度重复的题目
- 不要把作者固定写成单一身份：既不要只像产品经理，也不要只像纯技术实现人员

当前任务的重点是：

- 稳定补新文章
- 维持结构一致
- 扩技术判断、交付经验、系统方案、维护，以及业务判断和规划相关的覆盖

---

## 四、AI 每次只改哪些文件

默认只改：

- `src/lib/articles.ts`

可选补充：

- `seo-log.md`

默认不要改：

- `src/app/[locale]/blog/page.tsx`
- `src/app/[locale]/blog/[slug]/page.tsx`
- `src/components/BlogPostTemplate.tsx`
- `src/app/sitemap.ts`

原因：

- 当前这套代码已经是数据驱动
- 只要把新文章接进 `articleSlugs` 和 `articleDefinitions`
- 其他页面会自动识别

---

## 五、当前文章数据结构

AI 生成新文章时，必须遵守下面这套结构。

每篇文章至少包含这些字段：

```ts
'your-slug': {
  slug: 'your-slug',
  priority: {
    zh: 0.64,
    en: 0.5,
  },
  publishedAt: '2026-03-31',
  readingMinutes: 6,
  relatedServices: ['website-development', 'company-website-development'],
  content: {
    zh: {
      navLabel: '',
      categoryLabel: '',
      metaTitle: '',
      metaDescription: '',
      keywords: [],
      eyebrow: 'Article',
      heroTitle: '',
      heroDescription: '',
      introTitle: '',
      introParagraphs: ['', ''],
      sections: [
        {
          title: '',
          paragraphs: ['', ''],
          bullets: [],
        },
      ],
      takeawayTitle: '',
      takeaways: ['', '', ''],
      ctaTitle: '',
      ctaDescription: '',
    },
    en: {
      navLabel: '',
      categoryLabel: '',
      metaTitle: '',
      metaDescription: '',
      keywords: [],
      eyebrow: 'Article',
      heroTitle: '',
      heroDescription: '',
      introTitle: '',
      introParagraphs: ['', ''],
      sections: [
        {
          title: '',
          paragraphs: ['', ''],
          bullets: [],
        },
      ],
      takeawayTitle: '',
      takeaways: ['', '', ''],
      ctaTitle: '',
      ctaDescription: '',
    },
  },
}
```

实际写的时候可以参考 `src/lib/articles.ts` 里已有文章的风格。

---

## 六、可用的 relatedServices

AI 只能从下面这些 service slug 里选：

- `website-development`
- `company-website-development`
- `foreign-trade-website-development`
- `mini-program-development`
- `web-app-development`

选择规则：

### 偏总括型、价格、流程、预算

- 优先：
  - `website-development`
  - `company-website-development`

### 偏企业官网结构、页面、改版、FAQ

- 优先：
  - `company-website-development`
  - `website-development`

### 偏外贸网站、询盘、多语言、产品页

- 优先：
  - `foreign-trade-website-development`
  - `website-development`

### 偏小程序、后台、业务承接、技术方案

- 优先：
  - `mini-program-development`
  - `website-development`

### 偏企业系统、重构、一期范围、稳定交付、维护

- 优先：
  - `web-app-development`

通常控制在：

- 1 到 3 个 `relatedServices`

---

## 七、选题池与随机规则

如果没有人工指定题目，AI 默认从下面的池子里随机选 1 个“当前还没有对应 slug”的题目。

默认写作视角：

- 保留两条线：技术负责人 / 交付负责人视角，与业务判断 / 产品规划视角
- 技术线可以强调技术方案判断、分阶段实施、质量、稳定性、维护和服务
- 业务线可以强调项目边界、优先级、范围控制和决策逻辑
- 两条线都可以强调“不花冤枉钱”的边界判断，而不是一味堆功能

默认避免：

- 只会讲空泛产品方法，不落到真实交付与系统约束
- 只会讲底层技术实现，不解释业务判断和项目边界
- 过度写成功能清单堆砌或纯增长话术

### 跨境电商与外贸商城

- 外贸独立站为什么明明做了表单和 WhatsApp，询盘链路还是经常断？
- Shopify 模板商城和定制 B2B 商城，什么时候技术上必须分家？
- 面向海外大买家的 B2B 订货系统，资料、报价、权限和下单链路怎么拆更稳？
- 多语言外贸站接表单、CRM 和邮件通知，哪些环节最容易出稳定性问题？

### 传统制造企业数字化转型

- 帮几家传统工厂重做 ERP 后，我发现最该省的不是功能，而是错误的系统边界
- 工厂 OA 系统为什么推行不下去？很多时候不是员工问题，而是流程和权限没拆对
- 老 ERP 想重构，数据库、接口、权限三件事先动哪个更稳？
- 制造业数字化一期范围怎么定，技术上才不容易失控？

### 系统重构与商城 / 小程序高级定制

- 企业订单系统一期先做 Web App 还是小程序，怎么选更稳、后续更好维护？
- 企业内部审批 OA 对接微信小程序，技术上怎么打通数据又不把维护成本做高？
- 老系统继续修补、局部重构、还是整体重做，怎么判断不花冤枉钱？
- 大中型企业为什么越来越适合用现代前端重构内部系统，而不是继续堆补丁？

### AI 应用与流程自动化

- 企业想做 AI 应用，先做知识问答、流程自动化，还是业务助手更容易落地？
- AI 接到内部系统时，哪些写回边界先定清，后面才不会越来越难维护？
- 很多 AI 项目效果不稳定，问题通常不在模型，而在上下文、流程和责任边界
- 企业内部已经有系统，AI 最适合先嵌在哪个环节，才能少花冤枉钱又能快速验证

### 价格决策与技术投入判断

- 做企业系统时，哪些技术债和维护问题最容易在报价阶段被低估？
- 制造业老板看板、订单系统、ERP 一起做，为什么往往不如先跑通一个关键环节？

随机规则：

- 先检查当前 `articleSlugs` 里是否已经有相同或高度相近题目
- 如果已有高度相近题目，就跳过，继续选下一个
- 如果没有，就用这个题目生成新文章
- 如果没有指定方向，优先在“技术方案 / 系统重构 / 稳定性与维护 / AI 应用”和“业务判断 / 产品规划 / 项目边界”两条线之间轮换

高度相近的判断标准：

- 同一核心问题
- 同一搜索意图
- 只是换一种说法

---

## 八、slug 生成规则

AI 生成 slug 时，必须符合现有风格：

- 全小写
- 用英文短语
- 用 `-` 连接
- 不要太长
- 要能看出文章主题

示例：

- `company-website-service-page-writing`
- `foreign-trade-website-homepage-mistakes`
- `website-requirements-document-preparation`

生成后必须再检查：

- 是否已经存在于 `articleSlugs`
- 是否和现有 slug 过于接近

如果重复，就换一个 slug。

---

## 九、priority 与 readingMinutes 规则

默认规则：

- `priority.zh`：
  - 强相关核心内容：`0.64` 到 `0.76`
  - 一般扩展内容：`0.62` 到 `0.68`
- `priority.en`：
  - 通常比中文低一档
  - 常用：`0.5` 到 `0.56`

推荐默认值：

```ts
priority: {
  zh: 0.64,
  en: 0.5,
}
```

`readingMinutes` 默认：

- 6 或 7

如果文章明显更长，再写 8。

---

## 十、分类与内容风格规则

`categoryLabel` 应从当前常见范围里选，不要乱造太多新分类。

优先使用：

- `报价`
- `流程`
- `对比`
- `企业系统`
- `制造与工业`
- `行业场景`
- `维护`
- `工期`

英文分类对应保持自然：

- `Pricing`
- `Process`
- `Comparison`
- `Internal System`
- `Manufacturing`
- `Industry`
- `Maintenance`
- `Timeline`

内容风格：

- 一篇只解决一个核心问题
- 默认允许站在“技术负责人 / 交付负责人”或“业务判断 / 产品规划”视角
- intro 通常 2 段
- sections 通常 3 段
- 每个 section 通常 2 段
- 可以有 bullets，但不是必须
- takeaway 通常 3 条
- CTA 要自然，不要像硬广
- 多写技术方案取舍、系统边界、稳定性、维护成本、交付风险和阶段划分
- 也可以写项目优先级、需求边界、阶段目标和业务取舍
- 少写纯功能脑暴、纯 PRD 式拆解或脱离交付现实的增长话术

---

## 十一、标题与 meta 规则

### zh 规则

- `navLabel`：列表页展示标题，稍短
- `heroTitle`：详情页 H1，可更完整
- `metaTitle`：关键词 + 价值点 + 品牌
- `metaDescription`：一句话讲清问题和文章价值

### en 规则

- 不要逐字翻译中文
- 保留同一搜索意图
- 让英文读起来像自然表达

meta 基本要求：

- `metaTitle` 不要过短
- `metaDescription` 不要写成关键词堆砌
- `keywords` 保留 3 到 4 个即可

---

## 十二、AI 每次执行的完整步骤

1. 读取 `src/lib/articles.ts`
2. 识别现有 `articleSlugs`
3. 从选题池里选 1 个未覆盖题目
4. 生成新的 slug
5. 判断分类
6. 判断 `relatedServices`
7. 生成 `zh` 内容
8. 生成 `en` 内容
9. 把 slug 追加到 `articleSlugs`
10. 把新 article definition 追加到 `articleDefinitions`
11. 检查 TS 结构是否和现有格式一致
12. 可选：在 `seo-log.md` 追加一条记录

---

## 十三、AI 输出要求

如果 AI 只是先生成草稿，不直接改代码，就必须输出下面两部分：

### 1. 选题摘要

```md
选题：
slug：
分类：
relatedServices：
为什么选这个题：
```

### 2. 可直接粘贴进 `src/lib/articles.ts` 的对象片段

也就是输出完整的：

- `articleSlugs` 追加项
- `articleDefinitions` 新对象

不要只给正文，不给代码结构。

---

## 十四、AI 直接改代码时的规则

如果 AI 有权限直接改仓库代码：

- 必须修改 `src/lib/articles.ts`
- 必须把新 slug 加进 `articleSlugs`
- 必须把完整 definition 加进 `articleDefinitions`
- 不要改已有 helper function
- 不要打乱现有格式

可选补充：

- 在 `seo-log.md` 记录：
  - 日期
  - 新增文章 slug
  - 文章方向
  - 对应服务方向

---

## 十五、给 AI 的最简输入格式

默认定时任务直接用这版：

```md
模式：随机补文
数量：1
语言：双语
目标：补充网站博客文章
```

如果你想指定方向，可以这样写：

```md
模式：随机补文
数量：1
方向：企业官网
语言：双语
目标：补充网站博客文章
```

可选方向：

- `价格`
- `流程`
- `技术方案`
- `业务判断`
- `产品规划`
- `企业官网`
- `外贸网站`
- `小程序`
- `企业系统`
- `系统重构`
- `稳定性与维护`
- `AI 应用`
- `行业场景`

---

## 十六、给 AI 的主提示词

下面这段可以直接给另一个 AI：

```text
你现在是“站内博客补文执行 AI”。

你的任务是给当前网站新增一篇博客文章，直接适配现有代码结构。

项目规则：
1. 当前博客数据源是 src/lib/articles.ts
2. 新文章必须同时补齐 articleSlugs 和 articleDefinitions
3. 新文章必须同时有 zh 和 en 内容
4. 如果我没有指定题目，你就从选题池里任选一个当前未覆盖的题目
5. 如果我没有指定方向，你就根据当前内容缺口，在“技术方案 / 交付能力”与“业务判断 / 产品规划”两条线里任选更值得补的一条
6. relatedServices 只能从以下值里选：
   - website-development
   - company-website-development
   - foreign-trade-website-development
   - mini-program-development
   - web-app-development
7. 生成的 slug 必须唯一、英文、短横线连接、风格与现有 slug 一致
8. 文章必须是数据对象，不是纯正文
9. 不要修改已有文章，不要改博客模板，不要改 helper function
10. 默认一次只新增 1 篇
11. 作者身份可以更像技术负责人，也可以更像懂交付的业务判断者，但不要写成空泛顾问口吻

输出要求：
1. 先给出：选题、slug、分类、relatedServices、为什么选它
2. 再给出可直接写入 src/lib/articles.ts 的完整代码片段
3. 如果需要，补一条 seo-log.md 的记录建议
```

---

## 十七、给 AI 的定时执行指令

如果你要让自动化 AI 定时跑，优先用这段：

```text
你现在执行“站内博客随机补文任务”。

目标：
- 给网站新增 1 篇博客文章
- 直接适配当前 src/lib/articles.ts 的数据结构
- 同时生成 zh 和 en 两套内容

执行规则：
1. 先读取现有 articleSlugs，避免重复
2. 从选题池里任选 1 个当前未覆盖的题目
3. 自动生成 slug、分类、relatedServices、priority、readingMinutes
4. 自动生成完整 article definition
5. 输出可直接追加到 src/lib/articles.ts 的代码片段
6. 不要只输出正文
7. 默认不要改其他文件
8. 如果没有指定方向，在“技术方案 / 系统重构 / 稳定性维护 / AI 应用”和“业务判断 / 产品规划 / 项目边界”两条线之间轮换，不要长期只写单一视角

选题方向池：
- 跨境电商与外贸系统
- 传统制造企业数字化转型
- 系统重构与稳定交付
- AI 应用与流程自动化
- 业务判断与产品规划
- 价格决策与技术投入判断
```

---

## 十八、推荐的定时节奏

建议：

- 每周 2 次
- 每次 1 篇
- 连续执行

建议顺序：

1. 先补 `企业系统 / 系统重构`
2. 再补 `业务判断 / 产品规划`
3. 再补 `AI 应用 / 流程自动化`
4. 再补 `外贸网站 / 小程序`
5. 再补 `报价 / 流程 / 维护`

这样能同时保留两种内容能力：既有技术方案与交付判断，也有业务边界与产品规划判断。

---

## 十九、可选记录模板

如果每次补文后也想记日志，可以用：

```md
## YYYY-MM-DD / 站内博客补文

### 新增文章

- slug：
- 方向：
- 分类：
- relatedServices：

### 生成原因

- 为什么选这个题：

### 备注

- 是否已写入 `src/lib/articles.ts`：
- 是否需要后续人工润色：
```

---

## 二十、当前最适合先补的题目

如果现在立刻开始，优先让 AI 从这里选：

1. 企业内部订单系统一期先做 Web App 还是小程序，怎么选更稳、后续更好维护？
2. 帮几家传统工厂重做 ERP 后，我发现最该省的不是功能，而是错误的系统边界
3. 老系统继续修补、局部重构、还是整体重做，怎么判断不花冤枉钱？
4. AI 接到内部系统时，哪些写回边界先定清，后面才不会越来越难维护？
5. 工厂 OA 系统为什么推行不下去？很多时候不是员工问题，而是流程和权限没拆对

这几个题目更能体现你的真实价值：既能判断合适的技术方案，也能控制项目边界、阶段目标和投入优先级。

这几个题目都和现有服务页、现有文章结构以及“两种方向并存”的定位更贴近。
