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

当前任务的重点是：

- 稳定补新文章
- 维持结构一致
- 扩关键词覆盖

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

### 偏小程序分工、后台、项目规划

- 优先：
  - `mini-program-development`
  - `website-development`

### 偏企业系统、重构、一期范围、后台

- 优先：
  - `web-app-development`

通常控制在：

- 1 到 3 个 `relatedServices`

---

## 七、选题池与随机规则

如果没有人工指定题目，AI 默认从下面的池子里随机选 1 个“当前还没有对应 slug”的题目。

### 价格与预算

- 企业官网开发多少钱，预算通常怎么拆
- 外贸网站开发报价通常受哪些因素影响
- 定制网站开发和模板站，预算差异到底来自哪里
- 官网改版预算为什么经常比预期高

### 流程与准备

- 网站开发需求文档怎么准备，沟通效率会高很多
- 企业官网项目从立项到上线，一般要经历哪些阶段
- 外贸网站上线前要准备哪些内容素材
- 找人做官网前，哪些资料越早准备越省时间

### 结构与页面

- 企业官网服务页怎么写，才不会只剩空泛介绍
- 企业官网案例页没有真实案例时，应该怎么处理
- 官网首页该先讲品牌还是先讲服务
- 联系页怎么写，才更容易让客户愿意提交表单

### 外贸网站

- 外贸网站首页最容易影响询盘的几个问题
- 外贸网站 FAQ 应该回答哪些问题
- 外贸网站产品页除了参数，还应该补什么
- 多语言网站应该先做哪些语言版本

### 小程序与系统

- 小程序项目为什么经常卡在后台和权限设计
- 企业系统一期范围怎么定，才不容易失控
- 官网、后台、小程序一起做时，技术边界怎么拆
- 什么时候该先做官网，什么时候该先做系统

随机规则：

- 先检查当前 `articleSlugs` 里是否已经有相同或高度相近题目
- 如果已有高度相近题目，就跳过，继续选下一个
- 如果没有，就用这个题目生成新文章

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

- `价格`
- `流程`
- `对比`
- `企业官网`
- `外贸网站`
- `小程序`
- `企业系统`
- `行业场景`

英文分类对应保持自然：

- `Pricing`
- `Process`
- `Comparison`
- `Company Website`
- `Foreign Trade Website`
- `Mini-program`
- `Internal System`
- `Industry`

内容风格：

- 一篇只解决一个核心问题
- intro 通常 2 段
- sections 通常 3 段
- 每个 section 通常 2 段
- 可以有 bullets，但不是必须
- takeaway 通常 3 条
- CTA 要自然，不要像硬广

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
- `企业官网`
- `外贸网站`
- `小程序`
- `企业系统`
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
5. 如果我没有指定方向，你就随机选择一个最值得补的方向
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

选题方向池：
- 价格与预算
- 流程与准备
- 结构与页面
- 外贸网站
- 小程序与系统
```

---

## 十八、推荐的定时节奏

建议：

- 每周 2 次
- 每次 1 篇
- 连续执行

建议顺序：

1. 先补 `企业官网`
2. 再补 `外贸网站`
3. 再补 `价格 / 流程`
4. 再补 `小程序 / 企业系统`

这样更贴近当前站的承接能力和商业相关性。

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

1. 企业官网服务页怎么写，才不会只剩空泛介绍
2. 外贸网站 FAQ 应该回答哪些问题
3. 网站开发需求文档怎么准备，沟通效率会高很多
4. 联系页怎么写，才更容易让客户愿意提交表单
5. 企业系统一期范围怎么定，才不容易失控

这几个题目都和现有服务页、现有长尾内容和商业转化更贴近。
