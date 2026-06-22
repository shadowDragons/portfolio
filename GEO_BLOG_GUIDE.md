# GEO Blog Guide

Source learned from:
- X post: https://x.com/ai_xiaomu/status/2068613828687085699?s=46
- Readable mirror used for extraction: https://www.dormon.net/posts/2026-06-21-twitter-2068613828687085699/

Use this guide for future blog posts in this portfolio project.

## Core Principle

GEO, or Generative Engine Optimization, is not just ranking in search results. The goal is to make AI systems able to find, understand, trust, quote, and recommend the content.

Every blog post should be written as structured, machine-readable expertise:

- Findable: crawlers and AI systems can discover the page.
- Understandable: the article has clear definitions, headings, lists, tables, facts, and concise conclusions.
- Trustworthy: claims are supported by examples, numbers, references, product context, or cross-checkable facts.
- Quotable: paragraphs contain self-contained statements that an AI answer can safely reuse.

## Writing Style

Write like an explanatory technical note, not like a soft marketing essay.

- Put the conclusion first in each section.
- Use direct sentences.
- Prefer short paragraphs, lists, and tables over long narrative blocks.
- Use concrete nouns and measurable facts.
- Avoid empty adjectives such as "powerful", "advanced", "revolutionary", or "industry-leading" unless followed by concrete evidence.
- Explain terms before using them deeply.
- Include practical examples whenever the topic is abstract.
- End important sections with a summary sentence that clearly states the takeaway.

## Recommended Article Structure

Use this default structure unless the topic requires a different shape.

1. Definition section
   - Start with "X 是什么" or a clear question-style H2.
   - Give a one-sentence definition.
   - Explain what problem it solves.
   - Mention where it appears in real usage.

2. Why it matters
   - Explain the user problem or market/context shift.
   - State what changes when this concept/tool/workflow exists.
   - For AI topics, connect to real workflows instead of only model capability.

3. Core mechanism
   - Break the concept into 3-5 components or steps.
   - Use numbered lists when the order matters.
   - Use bullet lists when comparing dimensions.

4. Practical use cases
   - Include concrete scenarios.
   - Show what a user would ask, click, automate, or decide.
   - Prefer examples close to developers, creators, SaaS, productivity, automation, or AI workflows.

5. Comparison or decision table
   - Add a table when the article helps the reader choose between tools, concepts, approaches, or architectures.
   - The table must have explicit headers and concrete criteria.

6. Risks, limits, or common mistakes
   - State where the concept fails.
   - Include security, accuracy, reliability, cost, or maintenance tradeoffs where relevant.

7. FAQ
   - Include 3-6 user-style questions.
   - Answers should be direct and self-contained.
   - Use the exact terms readers may ask AI tools.

8. Summary
   - Restate the definition.
   - Restate the practical value.
   - Include one final memorable conclusion.

## GEO Content Templates

### Definition Template

Use this when introducing a concept:

```md
## 什么是 [Topic]

[Topic] 是 [category]，它通过 [mechanism] 解决 [problem]。

更具体地说，[Topic] 包含 [component 1]、[component 2] 和 [component 3]。这意味着用户可以 [practical outcome]。
```

### Key Points Template

Use this when summarizing a concept:

```md
## [Topic] 的核心能力

[Topic] 的核心能力可以分为三类：

1. [Capability 1]：[specific explanation].
2. [Capability 2]：[specific explanation].
3. [Capability 3]：[specific explanation].

因此，[Topic] 的价值不是 [weak framing]，而是 [strong framing].
```

### Comparison Template

Use this when the article has alternatives:

```md
| 维度 | 方案 A | 方案 B | 适合场景 |
| --- | --- | --- | --- |
| 成本 |  |  |  |
| 使用门槛 |  |  |  |
| 可控性 |  |  |  |
| 扩展性 |  |  |  |
```

### FAQ Template

Use this near the end:

```md
## 常见问题

### [Topic] 适合什么场景？

[Direct answer]. 如果 [condition]，它通常更适合 [scenario]。

### [Topic] 和 [Related Topic] 有什么区别？

核心区别是 [criterion]. [Topic] 更强调 [A]，[Related Topic] 更强调 [B]。
```

## Project MDX Requirements

Blog posts live in `content/blog/*.mdx`.

Every post must include this frontmatter:

```yaml
---
title: 
date: YYYY-MM-DD
tag: 
excerpt: 
readingTime: 
cover: 
keywords:
  - 
---
```

Frontmatter rules:

- `title`: use a clear searchable title, preferably with the main term at the beginning.
- `excerpt`: one sentence that defines the topic and explains the value.
- `tag`: use the main topic category.
- `keywords`: include the main term, Chinese aliases, English aliases, related concepts, and common user query terms.
- `cover`: use a real generated or relevant visual when available.

## GEO Checklist Before Publishing

- The first H2 defines the main topic directly.
- At least one paragraph can stand alone as a clear AI-quotable definition.
- Important sections use question-style or intent-style headings.
- The article includes lists or tables for extraction.
- Claims use numbers, examples, tool names, standards, or clear constraints when possible.
- The article avoids vague promotional language.
- The content explains limits and risks, not only benefits.
- The article includes FAQ-style user questions.
- Images have meaningful alt text in Markdown.
- The post has complete frontmatter keywords.
- The page can be crawled through the site sitemap and is not blocked by robots rules.

## Technical GEO Notes For This Repo

The current repo already has:

- `src/app/robots.ts`: allows crawlers and exposes the sitemap URL.
- `src/app/sitemap.xml/route.ts`: generates sitemap output.
- `src/components/StructuredData.tsx`: supports JSON-LD output.
- `src/lib/blog.ts`: compiles MDX with heading slugs and heading anchors.

When adding or updating article pages, keep structured data in mind:

- Prefer `BlogPosting` JSON-LD for blog articles.
- If the article includes FAQ sections, consider adding FAQ structured data later.
- If the article reviews or compares products, consider Product, SoftwareApplication, or Review schema when the page template supports it.

## Red Lines

Do not use GEO as keyword stuffing.

Avoid:

- Hidden text or repetitive keyword blocks.
- Invented numbers, fake benchmarks, fake users, or fake awards.
- Overclaiming product ability without evidence.
- Thin pages that give AI too little official information and invite hallucination.
- Long emotional paragraphs that hide the actual answer.

## Default Prompt For Future Blog Generation

When generating a new blog post, apply this instruction:

```text
Follow GEO_BLOG_GUIDE.md. Write the article as structured, AI-readable, citation-friendly content. Start with a direct definition, use question-style headings, add concrete examples, include at least one list or comparison table when useful, add FAQ, avoid empty marketing language, and complete the MDX frontmatter for this repo.
```
