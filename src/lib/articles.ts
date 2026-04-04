import { getLocalizedUrl, siteConfig, type AppLocale } from '@/lib/site-config'
import type { ServicePageSlug } from '@/lib/service-pages'

export const articleSlugs = [
  'website-development-cost',
  'website-development-process',
  'custom-vs-template-website',
  'multilingual-website-seo',
  'enterprise-system-requirements',
  'company-website-pages-checklist',
  'company-website-redesign-mistakes',
  'foreign-trade-website-content-structure',
  'foreign-trade-website-inquiry-conversion',
  'mini-program-project-planning',
  'website-development-quote-checklist',
  'company-website-preparation-checklist',
  'foreign-trade-website-navigation-planning',
  'website-redesign-seo-migration',
  'internal-system-refactor-or-rebuild',
  'company-website-homepage-structure',
  'company-website-faq-planning',
  'foreign-trade-website-product-pages',
  'foreign-trade-website-trust-signals',
  'manufacturing-company-website-planning',
  'service-business-website-lead-generation',
  'saas-website-page-structure',
  'foreign-trade-about-page-writing',
  'mini-program-and-website-relationship',
  'education-training-website-planning',
  'consulting-company-website-copy',
  'ai-product-website-messaging',
  'b2b-industry-pages-planning',
  'website-content-update-process',
  'website-development-timeline-estimation',
  'website-maintenance-scope',
  'company-website-contact-page-planning',
  'multilingual-website-launch-checklist',
  'foreign-trade-website-language-priority',
  'company-website-budget-estimation',
  'foreign-trade-website-faq-writing',
  'landing-page-vs-company-website',
  'mini-program-admin-panel-planning',
  'business-system-phase-one-scope',
  'website-requirements-document-preparation',
  'company-website-service-page-writing',
  'foreign-trade-website-homepage-mistakes',
  'brand-vs-service-on-homepage',
  'website-admin-mini-program-boundaries',
] as const

export type ArticleSlug = (typeof articleSlugs)[number]

type ArticleSection = {
  title: string
  paragraphs: string[]
  bullets?: string[]
}

type ArticleLocaleContent = {
  navLabel: string
  categoryLabel: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  eyebrow: string
  heroTitle: string
  heroDescription: string
  introTitle: string
  introParagraphs: string[]
  sections: ArticleSection[]
  takeawayTitle: string
  takeaways: string[]
  ctaTitle: string
  ctaDescription: string
}

type ArticleDefinition = {
  slug: ArticleSlug
  priority: {
    zh: number
    en: number
  }
  publishedAt: string
  readingMinutes: number
  relatedServices: ServicePageSlug[]
  content: Record<AppLocale, ArticleLocaleContent>
}

export type LocalizedArticle = {
  slug: ArticleSlug
  path: string
  priority: number
  publishedAt: string
  readingMinutes: number
  relatedServices: ServicePageSlug[]
} & ArticleLocaleContent

export type LocalizedArticleSummary = Pick<
  LocalizedArticle,
  'slug' | 'path' | 'navLabel' | 'categoryLabel' | 'heroDescription' | 'publishedAt' | 'readingMinutes' | 'relatedServices'
>

const articleDefinitions: Record<ArticleSlug, ArticleDefinition> = {
  'website-development-cost': {
    slug: 'website-development-cost',
    priority: {
      zh: 0.76,
      en: 0.56,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 7,
    relatedServices: ['website-development', 'company-website-development', 'foreign-trade-website-development'],
    content: {
      zh: {
        navLabel: '网站开发多少钱：预算通常怎么拆',
        categoryLabel: '价格',
        metaTitle: '网站开发多少钱？预算、范围和报价怎么判断｜致诚工作室',
        metaDescription:
          '网站开发多少钱，通常取决于页面数量、内容深度、是否多语言、是否要后台和后续维护。本文从预算、范围和交付方式拆解更靠谱的判断方法。',
        keywords: ['网站开发多少钱', '网站开发报价', '企业官网开发多少钱', '网站开发预算'],
        eyebrow: 'Article',
        heroTitle: '网站开发多少钱：真正影响预算的不是一句“做个官网”',
        heroDescription:
          '很多报价沟通之所以效率低，不是因为开发方故意不报价，而是“网站开发”四个字背后的范围差异太大。页面数量、内容深度、是否需要多语言、表单、后台和后续维护，都会直接拉开成本。',
        introTitle: '为什么这个问题很难一句话回答',
        introParagraphs: [
          '同样叫网站开发，有的项目只是几页品牌展示，有的项目需要服务页、SEO 结构、表单、后台管理、部署上线甚至后续内容维护。范围差一个层级，预算就可能差很多。',
          '所以更有效的问法不是“多少钱能做”，而是先把目标、范围和优先级说清楚，再看更适合一次做完还是分阶段推进。',
        ],
        sections: [
          {
            title: '哪些因素最影响网站开发预算',
            paragraphs: [
              '最直接的因素是页面结构和功能复杂度。展示型官网、营销站、多语言外贸站、带后台的业务型网站，工作量不是一个量级。',
              '第二个因素是内容深度。是只做页面壳子，还是要一起梳理内容结构、服务页、FAQ、SEO 元信息和转化路径，这会明显影响投入。',
            ],
            bullets: [
              '页面数量和是否需要多套模板',
              '是否有多语言、SEO 基础和内容规划需求',
              '是否需要表单、后台、接口、内容管理或权限逻辑',
              '上线部署、后续维护和继续迭代是否包含在交付里',
            ],
          },
          {
            title: '怎么问预算，沟通效率会高很多',
            paragraphs: [
              '如果你能先给出业务目标、想做哪些页面、是否有参考站、是否需要后台以及预算大概区间，开发评估通常会快很多。',
              '最怕的是需求一直泛泛地聊，最后才发现目标和预算完全不在一个层级，这会浪费双方很多时间。',
            ],
            bullets: [
              '先说清楚做站的目标，是品牌展示、获客还是业务承接',
              '把必须做和可后置的需求分开，别把全部需求混成一层',
              '给几个参考站点，说明你更看重结构、视觉还是功能',
              '最好同步预算区间，而不是完全不设上限也不设下限',
            ],
          },
          {
            title: '什么时候更适合分阶段做',
            paragraphs: [
              '如果目标比较大，或者当前还拿不准全部内容和功能，分阶段通常比一次堆满更稳。先把最关键的页面和转化链路做起来，再补更多服务页、语言版本或后台模块。',
              '这样不仅预算更可控，SEO 也更容易逐步搭起来，因为每一阶段都能留下可继续扩的结构。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '网站开发预算差异大，核心在范围，不在一句“官网多少钱”。',
          '先明确目标、页面、功能、后台和维护边界，报价才会更靠谱。',
          '如果范围还不稳定，分阶段比一次把所有内容都堆进去更稳。',
        ],
        ctaTitle: '如果你正在评估预算，先把范围和优先级说清楚',
        ctaDescription: '预算区间、目标、参考站和必须做的页面一旦明确，评估效率会比单问价格高很多。',
      },
      en: {
        navLabel: 'How Much Does Website Development Cost?',
        categoryLabel: 'Pricing',
        metaTitle: 'How Much Does Website Development Cost? Scope, Budget, and Quote Basics | Zhicheng Studio',
        metaDescription:
          'Website development cost depends on page depth, content structure, multilingual support, backend needs, and post-launch support. This article explains how to frame budget discussions more realistically.',
        keywords: ['website development cost', 'website development pricing', 'company website budget', 'website quote'],
        eyebrow: 'Article',
        heroTitle: 'Website development cost is mostly a scope problem, not a one-line answer',
        heroDescription:
          '“Website development” can mean a few brand pages, a multilingual lead-generation site, or a web product with admin tooling. That range is why quick quotes are often misleading unless the scope is clarified first.',
        introTitle: 'Why this question is hard to answer in one sentence',
        introParagraphs: [
          'Projects that use the same label can be very different in depth, content, SEO needs, backend support, and maintenance expectations.',
          'A more useful discussion starts with goals, page structure, and priorities rather than with price alone.',
        ],
        sections: [
          {
            title: 'What changes the budget most',
            paragraphs: [
              'The biggest factor is scope. A small presentation site, a multilingual B2B site, and a website with admin workflows are not in the same workload range.',
              'The second major factor is content depth. If the delivery also includes structure, FAQ, SEO basics, and lead path thinking, the work is more strategic than only coding screens.',
            ],
            bullets: [
              'Page count and template complexity',
              'Multilingual support and SEO foundations',
              'Forms, admin features, integrations, and permissions',
              'Deployment, maintenance, and later iteration support',
            ],
          },
          {
            title: 'How to ask about budget more effectively',
            paragraphs: [
              'If you can explain the goal, core pages, backend needs, references, and an expected range, evaluation usually becomes much faster.',
              'What slows things down most is discussing a vague project for too long before discovering that the budget and scope never matched in the first place.',
            ],
            bullets: [
              'Clarify whether the site is for branding, lead capture, or business operations',
              'Separate must-have requirements from later-phase ideas',
              'Share a few references and what you value in them',
              'Provide a budget range instead of leaving the expectation completely open',
            ],
          },
          {
            title: 'When phased delivery is the better option',
            paragraphs: [
              'If the project is large or the scope is still moving, phased delivery is often safer than trying to finish everything in one pass.',
              'That usually makes budget control easier and leaves a cleaner structure for later SEO, service pages, or admin growth.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'Website cost is mainly shaped by scope and depth.',
          'Goals, pages, backend needs, and support boundaries should be clear before pricing is trusted.',
          'Phased delivery is often the safer option when the full scope is still evolving.',
        ],
        ctaTitle: 'If you are evaluating budget, start by clarifying scope and priority',
        ctaDescription: 'A budget range, clear goal, references, and must-have pages make the first evaluation much more useful.',
      },
    },
  },
  'website-development-process': {
    slug: 'website-development-process',
    priority: {
      zh: 0.74,
      en: 0.55,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['website-development', 'company-website-development', 'foreign-trade-website-development'],
    content: {
      zh: {
        navLabel: '网站开发流程怎么做，才不容易越做越乱',
        categoryLabel: '流程',
        metaTitle: '网站开发流程怎么做？从需求、结构到上线的推进方法｜致诚工作室',
        metaDescription: '网站开发流程应该怎么推进，才能避免边做边改、范围失控和上线后扯皮。本文从需求、结构、开发、上线四步拆解。',
        keywords: ['网站开发流程', '网站开发步骤', '企业官网开发流程', '网站项目怎么推进'],
        eyebrow: 'Article',
        heroTitle: '网站开发流程怎么做，才不容易边做边改、最后越做越乱',
        heroDescription:
          '真正让项目失控的，通常不是技术本身，而是前期没把业务目标、页面结构和优先级说清楚。网站开发流程如果从一开始就拆对了，后面返工和扯皮都会少很多。',
        introTitle: '为什么很多网站项目中途会变形',
        introParagraphs: [
          '最常见的问题不是“没想到某个功能”，而是需求边界、页面优先级和内容准备不清楚，导致开发时只能边猜边补。',
          '所以一个更稳的网站开发流程，重点在先定目标和结构，再推进开发，而不是一开始就急着进视觉和页面制作。',
        ],
        sections: [
          {
            title: '第一步先把目标说清楚',
            paragraphs: [
              '先确定这次做站到底是为了品牌展示、获客转化、内容承载还是业务承接。目标不同，页面结构和投入重点都会不同。',
              '这一步如果没说清楚，后面每个人理解的网站都可能不是同一个东西。',
            ],
          },
          {
            title: '第二步先搭结构，再做细节',
            paragraphs: [
              '首页、服务页、关于页、FAQ、联系页这些页面关系先定下来，栏目结构和内容顺序也先搭出骨架。',
              '这样开发时更容易判断什么先做，什么可以后补，不会一直在页面细节里打转。',
            ],
            bullets: [
              '先定页面层级',
              '再定页面内容模块',
              '最后再去抠视觉和文案细节',
            ],
          },
          {
            title: '第三步按阶段开发和同步',
            paragraphs: [
              '越是中型以上的网站项目，越适合分阶段推进。先把核心页面和关键链路做好，再逐步补更多次级页面和后台能力。',
              '中间按周同步进度和风险，能大幅减少“做了很多但方向不对”的情况。',
            ],
          },
          {
            title: '第四步上线前把交付边界讲明白',
            paragraphs: [
              '上线不仅是把页面发出去，还包括域名、部署、站点配置、SEO 基础和后续维护边界。',
              '这些如果上线前不说清楚，项目结束后最容易出现责任模糊。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '网站开发流程要先定目标，再定结构，再做实现。',
          '页面关系和内容骨架比一开始就抠视觉细节更重要。',
          '分阶段推进和定期同步，能显著降低返工成本。',
        ],
        ctaTitle: '如果你现在准备做网站，先把目标和页面结构说清楚',
        ctaDescription: '目标、核心页面和优先级先定下来，后面的方案、报价和工期判断都会更稳。',
      },
      en: {
        navLabel: 'A Website Development Process That Stays Controlled',
        categoryLabel: 'Process',
        metaTitle: 'Website Development Process: How to Move from Scope to Launch Without Chaos | Zhicheng Studio',
        metaDescription:
          'A clearer website development process reduces scope drift, rework, and launch confusion. This article breaks the work into goal, structure, build, and launch stages.',
        keywords: ['website development process', 'website project workflow', 'company website process'],
        eyebrow: 'Article',
        heroTitle: 'A website development process that avoids endless rework',
        heroDescription:
          'Projects usually drift because goals, page hierarchy, and priorities were never aligned properly at the start. A steadier process reduces that risk before implementation gets expensive.',
        introTitle: 'Why many website projects become messy in the middle',
        introParagraphs: [
          'The problem is often not a missing feature, but unclear boundaries, weak priorities, and content that is not ready when implementation starts.',
          'That is why the process should begin with goals and structure before deep design or coding work starts.',
        ],
        sections: [
          {
            title: 'Step one: clarify the goal first',
            paragraphs: [
              'Decide whether the project is mainly for branding, lead capture, content publishing, or business support. The structure should follow that choice.',
              'If this is fuzzy, each person on the project usually imagines a different website.',
            ],
          },
          {
            title: 'Step two: define structure before detail',
            paragraphs: [
              'Homepage, services, about, FAQ, and contact flow should be framed before the team gets lost in page-level detail.',
              'That makes it easier to separate what must ship first from what can be added later.',
            ],
            bullets: ['Define page hierarchy first', 'Then define page modules', 'Only then go deeper on visual or copy detail'],
          },
          {
            title: 'Step three: build and review in stages',
            paragraphs: [
              'For anything beyond a tiny site, phased delivery is usually safer. Build the critical pages and flows first, then expand.',
              'Regular progress review helps catch wrong direction much earlier than waiting until the end.',
            ],
          },
          {
            title: 'Step four: make launch boundaries explicit',
            paragraphs: [
              'Launch is not only publishing pages. Domain setup, deployment, SEO basics, and support boundaries all matter too.',
              'If those are unclear before launch, post-launch responsibility becomes messy fast.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'Start with goals, then structure, then implementation.',
          'Hierarchy and content skeleton are more important early than polish.',
          'Phased delivery and regular syncs reduce rework significantly.',
        ],
        ctaTitle: 'If you are planning a website, start with the goal and page hierarchy',
        ctaDescription: 'A clear goal, core page list, and priority order make scope, quote, and timeline discussions much more stable.',
      },
    },
  },
  'custom-vs-template-website': {
    slug: 'custom-vs-template-website',
    priority: {
      zh: 0.72,
      en: 0.54,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['website-development', 'company-website-development'],
    content: {
      zh: {
        navLabel: '定制网站开发和模板站，到底该怎么选',
        categoryLabel: '对比',
        metaTitle: '定制网站开发和模板站有什么区别？怎么选更合适｜致诚工作室',
        metaDescription:
          '定制网站开发和模板站的差别，不只在价格，也在品牌表达、内容结构、可扩展性和后续维护方式。本文拆解适用场景和决策标准。',
        keywords: ['定制网站开发', '模板站', '企业官网怎么选', '网站开发方案'],
        eyebrow: 'Article',
        heroTitle: '定制网站开发和模板站，到底该怎么选更合适',
        heroDescription:
          '模板站并不一定不好，定制开发也不一定适合所有项目。关键在于你更看重的是短期上线速度，还是长期内容、品牌表达、SEO 和后续扩展能力。',
        introTitle: '为什么这个选择经常被问错',
        introParagraphs: [
          '很多人把这个问题只理解成价格对比，但实际上更重要的是目标差异。占位型网站和长期业务网站，适合的做法本来就不同。',
          '如果项目后面还要做服务页、文章页、多语言、后台管理或转化优化，模板站和定制站的差别会越来越明显。',
        ],
        sections: [
          {
            title: '模板站更适合什么情况',
            paragraphs: [
              '如果当前只是需要快速上线一个基础官网，占位、做简单展示，模板站通常更快也更省预算。',
              '但它更适合结构简单、品牌要求不高、后续不会重度扩展的项目。',
            ],
          },
          {
            title: '定制开发更适合什么情况',
            paragraphs: [
              '如果你更看重品牌表达、SEO 结构、内容沉淀和后续扩展，定制开发通常更合适。',
              '因为它不是只套页面，而是从内容层级、页面逻辑、技术结构和后续维护一起规划。',
            ],
            bullets: [
              '品牌表达更有空间',
              '服务页、文章页和多语言结构更好扩展',
              '更适合接表单、后台、系统或 AI 能力',
            ],
          },
          {
            title: '怎么判断自己该选哪一种',
            paragraphs: [
              '先问自己三个问题：这个网站是不是长期资产？后面会不会继续加内容和功能？品牌表达和业务转化是不是重点？',
              '如果三个问题的答案都偏“是”，那定制开发的价值通常会更高。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '模板站适合快速占位，定制开发适合长期经营。',
          '决定方式不只看价格，更要看内容、品牌和扩展目标。',
          '如果后续会继续做 SEO、服务页或后台能力，定制开发通常更稳。',
        ],
        ctaTitle: '如果你还拿不准该做模板站还是定制站，可以先把目标说清楚',
        ctaDescription: '品牌表达、SEO 预期和后续扩展计划一旦明确，方案判断会快很多。',
      },
      en: {
        navLabel: 'Custom Website vs Template Site',
        categoryLabel: 'Comparison',
        metaTitle: 'Custom Website vs Template Site: Which One Fits Better? | Zhicheng Studio',
        metaDescription:
          'The difference between a custom website and a template site is not only price. It also affects brand control, SEO structure, maintainability, and future expansion.',
        keywords: ['custom website development', 'template website', 'company website choice'],
        eyebrow: 'Article',
        heroTitle: 'Custom website vs template site: choose based on the real goal, not only the price',
        heroDescription:
          'A template site is not automatically wrong, and custom development is not automatically necessary. The better choice depends on whether the website is a short-term placeholder or a long-term business asset.',
        introTitle: 'Why this decision gets oversimplified',
        introParagraphs: [
          'Many teams treat this as a pricing question only, but the more important difference is strategic: short-term launch speed versus long-term flexibility.',
          'If the site later needs service pages, articles, multilingual structure, admin workflows, or conversion tuning, the gap becomes much clearer.',
        ],
        sections: [
          {
            title: 'When a template site is enough',
            paragraphs: [
              'A template site is often fine if the goal is a quick online presence with very limited complexity.',
              'That usually works best when the page structure is simple and the site is unlikely to grow much later.',
            ],
          },
          {
            title: 'When custom development becomes more valuable',
            paragraphs: [
              'Custom work is usually stronger when brand clarity, SEO structure, content depth, and future expansion matter.',
              'It allows the information hierarchy, interaction logic, and technical structure to be planned around the business instead of around a fixed template.',
            ],
            bullets: ['More room for brand expression', 'Better structure for service and article growth', 'Easier to connect backend or product features later'],
          },
          {
            title: 'A simpler way to decide',
            paragraphs: [
              'Ask whether the site is a long-term asset, whether it will keep growing, and whether brand and conversion matter strongly.',
              'If the answer is yes to most of those, custom development usually becomes the safer long-term option.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'Template sites are often good for fast placeholders.',
          'Custom builds are usually stronger for long-term structure and growth.',
          'The best choice depends on future content, SEO, brand, and system needs.',
        ],
        ctaTitle: 'If you are unsure which direction fits, start by clarifying the goal',
        ctaDescription: 'Brand ambition, SEO expectations, and later expansion plans usually make the choice much clearer.',
      },
    },
  },
  'multilingual-website-seo': {
    slug: 'multilingual-website-seo',
    priority: {
      zh: 0.72,
      en: 0.55,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 7,
    relatedServices: ['foreign-trade-website-development', 'website-development'],
    content: {
      zh: {
        navLabel: '多语言网站怎么做 SEO，才不会只是翻译几页就结束',
        categoryLabel: 'SEO',
        metaTitle: '多语言网站怎么做 SEO？结构、hreflang 和内容规划怎么处理｜致诚工作室',
        metaDescription:
          '多语言网站做 SEO，重点不只是翻译页面，还包括语言结构、canonical、hreflang、页面层级和内容承载。本文讲清核心做法。',
        keywords: ['多语言网站SEO', 'hreflang', '外贸网站SEO', '多语言网站开发'],
        eyebrow: 'Article',
        heroTitle: '多语言网站怎么做 SEO，才不会只是翻译几页就结束',
        heroDescription:
          '很多多语言网站做完后没有流量，不是因为 Google 不收录，而是因为语言结构、页面对应关系和内容深度一开始就没搭对。多语言 SEO 从来都不只是“再做一个英文版”。',
        introTitle: '为什么多语言网站容易做成假多语言',
        introParagraphs: [
          '最常见的问题是把中文页面直接翻成英文，但没有区分不同语言用户的阅读路径、内容重点和搜索词差异。',
          '结果页面看上去有两个语言版本，搜索引擎和用户却都不容易真正理解它们的关系和价值。',
        ],
        sections: [
          {
            title: '第一件事是把语言结构搭对',
            paragraphs: [
              '不同语言版本的路径、页面对应关系和默认语言策略要一开始就确定下来。否则上线后再补，改动成本会很高。',
              '像 canonical、hreflang、sitemap、页面 metadata 这些基础项，应该在开发阶段一起完成。',
            ],
          },
          {
            title: '第二件事是别把“翻译”当成“本地化”',
            paragraphs: [
              '不同语言用户搜索的关键词、关心的信息和阅读习惯都可能不同。如果只是逐句翻译，页面未必适合真实搜索意图。',
              '所以更稳的做法是保留结构对应关系，但允许不同语言版本在标题、描述和重点内容上做适度调整。',
            ],
            bullets: [
              '路径对应要清楚',
              'metadata 和关键词不能完全机械复用',
              '内容重点要贴合目标语言用户的搜索场景',
            ],
          },
          {
            title: '第三件事是持续补内容，而不是停在首页',
            paragraphs: [
              '多语言 SEO 最怕只有首页和几页基础栏目。真正能承接搜索增长的，通常是服务页、FAQ、文章页和行业页。',
              '所以站点结构一开始就应该为这些内容页预留位置，而不是后面再硬塞进去。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '多语言 SEO 先看结构，不是先看翻译。',
          'canonical、hreflang、sitemap 和页面对应关系必须先搭好。',
          '真正的搜索增长要靠后续持续补服务页和内容页，不是只靠首页。',
        ],
        ctaTitle: '如果你准备做多语言站，先把语言结构和内容策略定下来',
        ctaDescription: '目标市场、语言版本和你希望覆盖的搜索词，会直接决定站点结构该怎么搭。',
      },
      en: {
        navLabel: 'Multilingual Website SEO Basics',
        categoryLabel: 'SEO',
        metaTitle: 'Multilingual Website SEO: Structure, hreflang, and Content Planning | Zhicheng Studio',
        metaDescription:
          'Multilingual SEO is more than translating pages. Site structure, hreflang, canonical tags, and content depth all matter if the site is meant to grow through search.',
        keywords: ['multilingual website SEO', 'hreflang', 'international SEO', 'foreign trade website SEO'],
        eyebrow: 'Article',
        heroTitle: 'Multilingual website SEO starts with structure, not with translation alone',
        heroDescription:
          'Many multilingual sites fail to grow because the language structure, page mapping, and content depth were never set up properly. An English version alone is not enough.',
        introTitle: 'Why multilingual sites often become “fake multilingual”',
        introParagraphs: [
          'A common mistake is translating the original language page almost line by line while ignoring different search intent and reading expectations in the target market.',
          'The site looks multilingual on the surface, but neither users nor search engines get enough structural clarity from it.',
        ],
        sections: [
          {
            title: 'Get the language structure right first',
            paragraphs: [
              'Locale paths, page mapping, and default language strategy should be decided early. Retrofitting them later is usually expensive.',
              'Canonical tags, hreflang, sitemap, and page metadata should be part of development from the beginning.',
            ],
          },
          {
            title: 'Translation is not the same as localization',
            paragraphs: [
              'Different language audiences search differently and care about different details. Direct translation often misses that.',
              'A stronger approach keeps the structural relationship between pages while allowing titles, descriptions, and emphasis to adapt to the target audience.',
            ],
            bullets: ['Page mapping should stay clear', 'Metadata should not be copied mechanically', 'Content emphasis should reflect the target search context'],
          },
          {
            title: 'Growth does not happen on the homepage alone',
            paragraphs: [
              'Search growth usually comes from service pages, FAQ content, articles, and industry pages rather than from the homepage only.',
              'That is why the site should reserve space for those content layers early instead of trying to add them later with a messy structure.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'Multilingual SEO starts with site structure, not only translation.',
          'Canonical tags, hreflang, sitemap, and page relationships need to be correct early.',
          'Search growth usually comes from deeper content pages, not the homepage alone.',
        ],
        ctaTitle: 'If you are planning a multilingual site, define the language structure first',
        ctaDescription: 'Target markets, locale scope, and the search terms you want to cover will shape the site architecture directly.',
      },
    },
  },
  'enterprise-system-requirements': {
    slug: 'enterprise-system-requirements',
    priority: {
      zh: 0.7,
      en: 0.53,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 7,
    relatedServices: ['web-app-development', 'mini-program-development'],
    content: {
      zh: {
        navLabel: '企业系统开发前，需求到底该怎么梳理',
        categoryLabel: '规划',
        metaTitle: '企业系统开发前，需求怎么梳理更有效？｜致诚工作室',
        metaDescription:
          '企业系统开发前，最重要的不是先列一大堆功能，而是先梳理流程、角色、状态和优先级。本文讲清系统需求更稳的整理方式。',
        keywords: ['企业系统需求梳理', '系统开发流程', '管理后台需求', 'Web应用开发'],
        eyebrow: 'Article',
        heroTitle: '企业系统开发前，需求到底该怎么梳理，才不会一上来就做乱',
        heroDescription:
          '系统类项目最常见的问题，不是功能不够多，而是还没想清楚流程和角色边界，就先开始堆页面和模块。这样做出来的系统，后面几乎一定会反复返工。',
        introTitle: '为什么系统需求最怕“先列一堆功能”',
        introParagraphs: [
          '功能列表当然重要，但它只是表层。真正决定系统质量的，是流程怎么走、谁在什么节点做什么、状态怎么变化，以及哪些问题要先解决。',
          '如果这些不先理清楚，功能越多，混乱只会越严重。',
        ],
        sections: [
          {
            title: '先画流程，再谈功能',
            paragraphs: [
              '与其一开始列一百个按钮，不如先把核心流程画清楚。比如谁发起、谁审批、谁执行、谁回填，以及中间有哪些关键状态。',
              '流程一旦清楚，很多功能其实会自然浮现出来，优先级也更容易判断。',
            ],
          },
          {
            title: '把角色和权限边界单独拿出来',
            paragraphs: [
              '很多系统项目后面难维护，就是因为“谁能看到什么、谁能操作什么”一开始没有单独设计。',
              '角色、权限和状态是系统类项目的骨架，不适合顺手带过。',
            ],
            bullets: [
              '不同角色看到的数据范围',
              '不同角色能做的关键动作',
              '审批、驳回、修改和追踪的权限边界',
            ],
          },
          {
            title: '先做核心链路，不要一口气做满',
            paragraphs: [
              '企业系统最稳的推进方式通常是先落最关键的一条业务链路，再逐步补报表、配置和次级模块。',
              '这样不仅更利于上线验证，也能更早发现流程设计是不是贴近真实业务。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '系统需求先梳流程和角色，再梳功能。',
          '权限和状态边界要单独设计，不能顺手带过。',
          '先做核心链路，再逐步扩模块，通常比一次铺满更稳。',
        ],
        ctaTitle: '如果你正在做企业系统，先把流程和角色边界整理出来',
        ctaDescription: '只要把最关键的一条业务链路说清楚，系统方案就会比直接堆功能稳很多。',
      },
      en: {
        navLabel: 'How to Clarify Requirements Before Building an Internal System',
        categoryLabel: 'Planning',
        metaTitle: 'How to Clarify Requirements Before Internal System Development | Zhicheng Studio',
        metaDescription:
          'Before internal system development, the first priority is not a huge feature list. Workflow, roles, states, and priority should be clarified first.',
        keywords: ['business system requirements', 'internal system planning', 'admin workflow planning'],
        eyebrow: 'Article',
        heroTitle: 'Requirement planning for internal systems should start with workflow, not with page count',
        heroDescription:
          'Many system projects become messy because workflow and role boundaries were never clarified before screens and modules started piling up. The result is usually rework, confusion, and slow iteration.',
        introTitle: 'Why a giant feature list is a weak starting point',
        introParagraphs: [
          'Features matter, but they are surface-level compared with workflow, ownership, state changes, and actual operating problems.',
          'If those deeper parts are not clarified first, adding more features only adds more confusion.',
        ],
        sections: [
          {
            title: 'Map the workflow before the feature list gets too long',
            paragraphs: [
              'Instead of starting with dozens of buttons and screens, define the core flow: who starts it, who approves it, who executes it, and what the key states are.',
              'Once the flow is visible, the right features and priorities usually become much easier to identify.',
            ],
          },
          {
            title: 'Separate role and permission design from everything else',
            paragraphs: [
              'A lot of internal tools become painful later because role visibility and action boundaries were never designed cleanly.',
              'Roles, permissions, and state handling are the structural backbone of system work.',
            ],
            bullets: ['Who can see which data', 'Who can trigger which actions', 'How approval, rejection, revision, and traceability should work'],
          },
          {
            title: 'Ship the critical path before the whole universe',
            paragraphs: [
              'The steadier approach is usually to deliver the most important workflow first, then expand into reporting, configuration, and secondary modules.',
              'That gives the team a real chance to validate whether the system matches actual operations before complexity gets too large.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'Start with workflow and roles before feature expansion.',
          'Permission and state boundaries should be designed explicitly.',
          'Shipping the critical path first is usually safer than building everything at once.',
        ],
        ctaTitle: 'If you are planning an internal system, clarify workflow and roles first',
        ctaDescription: 'A single clear business flow often provides a stronger starting point than a long undifferentiated feature list.',
      },
    },
  },
  'company-website-pages-checklist': {
    slug: 'company-website-pages-checklist',
    priority: {
      zh: 0.72,
      en: 0.54,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['company-website-development', 'website-development'],
    content: {
      zh: {
        navLabel: '企业官网开发需要哪些页面，才不至于做成空壳官网',
        categoryLabel: '企业官网',
        metaTitle: '企业官网开发需要哪些页面？企业官网页面清单参考｜致诚工作室',
        metaDescription:
          '企业官网开发需要哪些页面，取决于目标是品牌展示、获客还是业务承接。本文拆解首页、服务页、案例页、FAQ、联系页等常见页面的作用。',
        keywords: ['企业官网开发需要哪些页面', '企业官网页面清单', '官网栏目结构', '企业网站开发'],
        eyebrow: 'Article',
        heroTitle: '企业官网开发需要哪些页面，才不至于最后只剩一个好看的首页',
        heroDescription:
          '很多企业官网的问题不是首页做得不够好，而是往下没有结构，导致访客看完第一页就不知道还能看什么、也不知道下一步该怎么联系。页面结构如果一开始没想清楚，官网很容易变成空壳。',
        introTitle: '为什么企业官网最容易缺的是“第二层页面”',
        introParagraphs: [
          '很多项目一开始都会把注意力放在首页，但真正承接业务表达的，通常是服务页、案例页、FAQ 和联系页这些第二层页面。',
          '如果这些内容长期缺位，首页即使看起来不错，也很难真正承担品牌说明和询盘承接的职责。',
        ],
        sections: [
          {
            title: '首页负责总入口，不负责讲完所有内容',
            paragraphs: [
              '首页更像一个概览，它负责快速说明你是谁、做什么、适合谁、为什么值得联系。',
              '但首页不适合塞太多细节，细节应该拆到服务页、案例页和 FAQ 页面里去承接。',
            ],
          },
          {
            title: '企业官网最常见的核心页面有哪些',
            paragraphs: [
              '最常见的基础结构通常包括首页、关于页、服务页、案例页、FAQ、联系页。有些企业还需要产品页、行业页、新闻页或多语言页。',
              '是否全部都要上，取决于业务目标。但至少要把能承接询盘和建立信任的页面先搭出来。',
            ],
            bullets: [
              '首页：快速概览品牌、服务和联系入口',
              '服务页：承接具体能力和搜索关键词',
              '案例页：补充真实项目和信任信息',
              'FAQ / 联系页：降低继续沟通的门槛',
            ],
          },
          {
            title: '怎么判断页面该做到什么深度',
            paragraphs: [
              '如果当前网站只是占位，可以先从首页、服务页和联系页起步；如果更重视长期 SEO 和转化，案例页、FAQ 和文章页通常应该一起规划。',
              '关键不是页面数量越多越好，而是页面之间有没有清晰分工，能不能共同支撑品牌表达和询盘路径。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '企业官网不能只做首页，第二层页面才是长期价值所在。',
          '服务页、案例页、FAQ 和联系页通常是更关键的补位页面。',
          '页面要按分工来规划，不是越多越好，而是越清晰越好。',
        ],
        ctaTitle: '如果你正在规划企业官网，先把页面结构和优先级排出来',
        ctaDescription: '把必须先上线的页面和可以后补的内容分开，方案和预算都会更容易判断。',
      },
      en: {
        navLabel: 'What Pages Should a Company Website Actually Include?',
        categoryLabel: 'Company Website',
        metaTitle: 'What Pages Should a Company Website Include? A Practical Structure Checklist | Zhicheng Studio',
        metaDescription:
          'A company website needs more than a homepage. This article explains the role of homepage, service pages, proof pages, FAQ, contact pages, and when each layer matters.',
        keywords: ['company website pages', 'company website structure', 'corporate website checklist'],
        eyebrow: 'Article',
        heroTitle: 'A company website needs more than a polished homepage',
        heroDescription:
          'Many company sites look acceptable on the homepage but become thin immediately after that. Without a clear second layer of pages, the site struggles to explain services, build trust, or support inquiry well.',
        introTitle: 'Why the missing layer is usually the problem',
        introParagraphs: [
          'Teams often spend too much attention on the homepage and not enough on the deeper pages that actually carry service detail, proof, and next-step clarity.',
          'That is why a company site can feel polished at first glance but still fail to support business communication properly.',
        ],
        sections: [
          {
            title: 'The homepage is a gateway, not the whole story',
            paragraphs: [
              'The homepage should quickly explain who you are, what you do, who you work with, and how to move forward.',
              'It should not try to hold every detail. Service pages, proof pages, and FAQ content are usually better for that.',
            ],
          },
          {
            title: 'Common core pages for a company website',
            paragraphs: [
              'A practical foundation usually includes homepage, about, services, proof, FAQ, and contact. Some sites also need product, industry, news, or multilingual pages.',
              'Not every project needs every page immediately, but the structure should still support trust and inquiry clearly.',
            ],
            bullets: [
              'Homepage for overview and first impression',
              'Service pages for clearer scope and keyword coverage',
              'Proof pages for trust and examples',
              'FAQ and contact pages for lower-friction next steps',
            ],
          },
          {
            title: 'How deep should each page go?',
            paragraphs: [
              'A placeholder site may start smaller, but a long-term business site usually benefits from planning the next content layers early.',
              'The goal is not page count alone. The important part is whether the pages have distinct roles and support the inquiry path together.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'A company site should not stop at the homepage.',
          'Service, proof, FAQ, and contact pages usually carry a lot of the long-term value.',
          'Clarity of page roles matters more than sheer page count.',
        ],
        ctaTitle: 'If you are planning a company site, start by defining the page structure',
        ctaDescription: 'Separating must-launch pages from later content layers usually makes scope and budget much easier to manage.',
      },
    },
  },
  'company-website-redesign-mistakes': {
    slug: 'company-website-redesign-mistakes',
    priority: {
      zh: 0.7,
      en: 0.53,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['company-website-development', 'website-development'],
    content: {
      zh: {
        navLabel: '企业官网改版最容易踩的 5 个坑',
        categoryLabel: '企业官网',
        metaTitle: '企业官网改版最容易踩的坑有哪些？｜致诚工作室',
        metaDescription:
          '企业官网改版最常见的问题不是页面不够漂亮，而是目标不清、内容结构混乱、旧内容迁移失控和上线后无人维护。本文拆解 5 个常见坑。',
        keywords: ['企业官网改版', '官网重做', '企业网站升级', '企业官网踩坑'],
        eyebrow: 'Article',
        heroTitle: '企业官网改版最容易踩的 5 个坑，很多项目其实在开始前就埋下了',
        heroDescription:
          '官网改版看起来像“重新设计一下页面”，但真正让项目出问题的，通常是目标没对齐、旧内容没梳理、页面结构没拆好，以及上线后的维护边界没人负责。',
        introTitle: '为什么官网改版比从零做更容易混乱',
        introParagraphs: [
          '因为改版项目天然带着旧站问题、历史内容和内部意见，复杂度往往比从零开始还高。',
          '如果一开始没有把“为什么改、改哪些、哪些暂时不动”说清楚，很容易在中途不断增加范围。',
        ],
        sections: [
          {
            title: '坑 1：只有“想重做”，没有明确目标',
            paragraphs: [
              '很多项目的起点只是“现在网站太旧了”，但没有明确是为了品牌升级、获客、SEO 还是内容管理。',
              '没有目标，后面每一页都可能变成主战场，结果就是越做越散。',
            ],
          },
          {
            title: '坑 2：旧内容不清点，直接开始重做',
            paragraphs: [
              '如果旧站内容很多，最怕直接全部照搬或全部推翻。更稳的做法是先梳理哪些内容该保留、哪些要重写、哪些可以下线。',
              '否则上线前后都会出现内容断层和信息混乱。',
            ],
          },
          {
            title: '坑 3：页面结构没有先定下来',
            paragraphs: [
              '如果首页、服务页、FAQ、联系页这些层级没有先定，视觉和开发做得越快，返工就越多。',
              '结构应该比页面细节更早确定。',
            ],
          },
          {
            title: '坑 4：只改前台，不考虑后续维护',
            paragraphs: [
              '很多改版项目只关注上线时的效果，忽略了内容怎么更新、谁来维护、后面要不要继续补服务页和文章页。',
              '结果上线即停更，改版价值会很快被消耗掉。',
            ],
          },
          {
            title: '坑 5：上线边界不清楚',
            paragraphs: [
              '域名、部署、SEO 配置、301、表单、统计、内容迁移这些，如果上线前没人明确负责，上线后最容易扯皮。',
              '改版项目越接近上线，越需要把这些清单说清楚。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '企业官网改版最怕目标不清和结构不先定。',
          '旧内容梳理和上线边界，通常比视觉调整更容易影响成败。',
          '如果改版后还要持续经营，维护方式也该提前一起规划。',
        ],
        ctaTitle: '如果你正在准备官网改版，先别急着直接做新首页',
        ctaDescription: '先把目标、旧内容、页面结构和上线边界梳理清楚，后面的改版才会更稳。',
      },
      en: {
        navLabel: 'Five Common Mistakes in Company Website Redesigns',
        categoryLabel: 'Company Website',
        metaTitle: 'Common Mistakes in Company Website Redesigns | Zhicheng Studio',
        metaDescription:
          'Company website redesigns often fail because goals, old content, structure, and launch boundaries are unclear. This article breaks down five common mistakes.',
        keywords: ['company website redesign', 'website redesign mistakes', 'corporate website upgrade'],
        eyebrow: 'Article',
        heroTitle: 'Five mistakes that derail company website redesigns',
        heroDescription:
          'A redesign is not only a visual refresh. The real risks are usually unclear goals, unreviewed old content, weak page hierarchy, and post-launch ownership gaps.',
        introTitle: 'Why redesign projects become messy so easily',
        introParagraphs: [
          'Redesigns inherit old content, old expectations, and internal opinions, which often makes them messier than building from scratch.',
          'If scope and intent are not clarified early, the project tends to keep expanding as it moves.',
        ],
        sections: [
          {
            title: 'Mistake 1: wanting a redesign without a clear reason',
            paragraphs: [
              '“The current site looks old” is not enough. The real question is whether the redesign is for brand improvement, lead capture, SEO, or content management.',
              'Without that clarity, every page becomes a vague priority at the same time.',
            ],
          },
          {
            title: 'Mistake 2: skipping an audit of old content',
            paragraphs: [
              'A redesign should not blindly copy everything or delete everything. Old content should be reviewed first so the team knows what to keep, rewrite, or retire.',
              'Without that step, the new site often launches with content confusion.',
            ],
          },
          {
            title: 'Mistake 3: not locking the page structure first',
            paragraphs: [
              'Homepage, services, FAQ, contact, and other core layers should be defined before the team goes too deep into design and implementation.',
              'If structure stays fuzzy, faster execution usually just creates faster rework.',
            ],
          },
          {
            title: 'Mistake 4: redesigning the frontend only',
            paragraphs: [
              'Many redesigns stop at the launch surface and ignore how content will be updated later or how the site will keep growing.',
              'That often turns the redesign into a short-lived visual change instead of a durable improvement.',
            ],
          },
          {
            title: 'Mistake 5: launch ownership is unclear',
            paragraphs: [
              'Domain setup, deployment, SEO basics, redirects, forms, analytics, and content migration should all have clear responsibility before launch.',
              'That matters even more as the project approaches release.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'Redesigns fail more often because of strategy and structure than because of visuals.',
          'Old content review and launch ownership are critical.',
          'A redesign should be planned as an operating asset, not only a new homepage.',
        ],
        ctaTitle: 'If you are preparing a redesign, start with goals and structure first',
        ctaDescription: 'Clarifying intent, old content, page hierarchy, and launch boundaries usually makes the redesign much steadier.',
      },
    },
  },
  'foreign-trade-website-content-structure': {
    slug: 'foreign-trade-website-content-structure',
    priority: {
      zh: 0.72,
      en: 0.55,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['foreign-trade-website-development', 'website-development'],
    content: {
      zh: {
        navLabel: '外贸网站开发时，内容结构为什么比翻译更重要',
        categoryLabel: '外贸网站',
        metaTitle: '外贸网站开发时，内容结构为什么更重要？｜致诚工作室',
        metaDescription:
          '外贸网站开发不只是翻译页面，更重要的是内容层级、产品表达、信任信息和询盘路径。本文讲清为什么内容结构比纯翻译更关键。',
        keywords: ['外贸网站开发', '外贸网站内容结构', '外贸官网怎么做', '外贸网站SEO'],
        eyebrow: 'Article',
        heroTitle: '外贸网站开发时，内容结构为什么往往比翻译本身更重要',
        heroDescription:
          '很多外贸网站的问题不是没有英文，而是结构还是中文官网思路。页面怎么组织、产品怎么讲、信任信息怎么摆、联系入口怎么放，这些对询盘效果的影响往往比单纯翻译更大。',
        introTitle: '为什么“做个英文版”通常不够',
        introParagraphs: [
          '把中文页面翻成英文，只解决了语言问题，却没有解决访客理解路径和搜索意图问题。',
          '真正的外贸网站，更像是重新为海外访客组织信息，而不是原样复制一个中文版。',
        ],
        sections: [
          {
            title: '产品信息必须更容易快速理解',
            paragraphs: [
              '外贸访客通常不会耐心看很长的背景介绍，他们更关心你卖什么、适合哪些场景、有什么差异和怎么继续联系。',
              '所以产品、服务、行业适配和核心优势，通常应该比公司介绍更早进入页面视线。',
            ],
          },
          {
            title: '信任信息和合作方式要尽早出现',
            paragraphs: [
              '交付能力、服务范围、工厂或团队信息、联系方式、FAQ、合作流程，这些信任信息如果太晚出现，访客容易直接离开。',
              '内容结构做得好，页面会更像业务入口，而不是一份被翻译的公司简介。',
            ],
          },
          {
            title: '结构搭对后，SEO 和后续扩内容都会更顺',
            paragraphs: [
              '如果栏目结构清楚，后面补产品页、行业页、FAQ 和文章页都会更自然，站点也更适合继续做 Google 流量。',
              '反过来，如果一开始结构就不清楚，后面越补内容越乱。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '外贸网站不只是翻译，而是要重新组织信息路径。',
          '产品表达、信任信息和联系入口通常比公司背景更优先。',
          '结构搭对后，SEO 和内容扩展都会更轻松。',
        ],
        ctaTitle: '如果你正在做外贸网站，先别急着只翻译页面',
        ctaDescription: '先把产品表达、信任信息和询盘路径放在结构里，站点会比单纯做英文版更有效。',
      },
      en: {
        navLabel: 'Why Content Structure Matters More Than Translation in Foreign Trade Sites',
        categoryLabel: 'Foreign Trade Website',
        metaTitle: 'Why Content Structure Matters More Than Translation in Foreign Trade Website Development | Zhicheng Studio',
        metaDescription:
          'Foreign trade website development is not only about translation. Content hierarchy, product explanation, trust cues, and inquiry flow often matter more.',
        keywords: ['foreign trade website development', 'multilingual content structure', 'export website SEO'],
        eyebrow: 'Article',
        heroTitle: 'In foreign trade websites, content structure often matters more than translation alone',
        heroDescription:
          'A site can be fully translated and still feel ineffective if the structure still follows a domestic presentation style. Information order, product explanation, trust cues, and inquiry flow usually have more impact.',
        introTitle: 'Why “an English version” is usually not enough',
        introParagraphs: [
          'Translation solves language. It does not automatically solve search intent, visitor understanding, or inquiry behavior.',
          'A stronger foreign trade site is closer to a restructured information path for international visitors than a simple language copy.',
        ],
        sections: [
          {
            title: 'Product information must become easier to understand quickly',
            paragraphs: [
              'Foreign trade visitors often care more about what you offer, what it fits, and how to continue the conversation than about a long company story.',
              'That means product, service scope, use case fit, and clear differentiation often deserve earlier placement on the page.',
            ],
          },
          {
            title: 'Trust cues and cooperation flow should appear earlier',
            paragraphs: [
              'Delivery capability, service range, manufacturing or team credibility, contact paths, FAQ, and workflow all help visitors continue with more confidence.',
              'When that structure is strong, the site feels closer to a business entry point than to a translated brochure.',
            ],
          },
          {
            title: 'Good structure makes SEO and content growth easier later',
            paragraphs: [
              'A clear structure makes it much easier to add product pages, industry pages, FAQ, and articles later on.',
              'If the structure is weak at the start, each added page makes the site messier.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'Foreign trade sites need restructured information, not only translated copy.',
          'Product clarity, trust cues, and inquiry flow usually deserve earlier emphasis.',
          'A clear structure supports both SEO and future content growth better.',
        ],
        ctaTitle: 'If you are building a foreign trade site, do not start from translation alone',
        ctaDescription: 'Begin with product explanation, trust positioning, and inquiry flow so the site becomes more useful for real business.',
      },
    },
  },
  'foreign-trade-website-inquiry-conversion': {
    slug: 'foreign-trade-website-inquiry-conversion',
    priority: {
      zh: 0.72,
      en: 0.55,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['foreign-trade-website-development', 'company-website-development'],
    content: {
      zh: {
        navLabel: '外贸网站怎么提升询盘转化，不只是多放几个联系按钮',
        categoryLabel: '外贸网站',
        metaTitle: '外贸网站怎么提升询盘转化？结构和路径比按钮数量更重要｜致诚工作室',
        metaDescription:
          '外贸网站想提升询盘转化，关键不只是多放联系按钮，而是内容结构、信任信息、表单路径和产品表达是否顺。本文拆解更有效的做法。',
        keywords: ['外贸网站询盘', '外贸网站转化', '外贸网站表单', '外贸官网开发'],
        eyebrow: 'Article',
        heroTitle: '外贸网站怎么提升询盘转化，不只是多放几个联系按钮',
        heroDescription:
          '有些外贸网站按钮很多，但询盘还是少。问题往往不在按钮位置，而在访客还没建立理解和信任，就被要求立即联系。询盘转化更像一条信息和信任逐步建立的路径。',
        introTitle: '为什么“按钮多一点”通常解决不了核心问题',
        introParagraphs: [
          '如果访客还没搞清楚你卖什么、和谁合作、能解决什么问题，再多的按钮也很难推动真实询盘。',
          '按钮只是最后一步。前面的产品表达、信任信息和联系动机，才是真正决定转化的部分。',
        ],
        sections: [
          {
            title: '先把访客最关心的内容放到前面',
            paragraphs: [
              '产品是什么、适合谁、有什么差异、能怎么合作，这些通常比公司长篇介绍更影响询盘意愿。',
              '页面结构如果先解决理解问题，联系动作才更自然。',
            ],
          },
          {
            title: '信任信息和 FAQ 能明显降低犹豫',
            paragraphs: [
              '很多人不是不想联系，而是担心不够靠谱。这个时候案例、合作流程、FAQ、维护方式和联系方式的明确程度会直接影响转化。',
              '尤其是跨国沟通场景，越清楚越能减少心理门槛。',
            ],
          },
          {
            title: '表单和联系路径应该更顺，而不是更复杂',
            paragraphs: [
              '需要的信息过多、路径太绕或入口太隐蔽，都会让询盘直接流失。',
              '更好的做法通常是先给低门槛入口，再在沟通中补更细的信息。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '询盘转化不是按钮问题，而是理解和信任路径问题。',
          '产品表达、FAQ 和合作方式说明会直接影响联系意愿。',
          '更顺的表单和更低门槛的联系入口通常比更复杂的信息采集更有效。',
        ],
        ctaTitle: '如果你想提升外贸网站询盘，先从内容结构和联系路径看起',
        ctaDescription: '页面层级、信任信息和表单入口一旦理顺，很多转化问题都会变得更清楚。',
      },
      en: {
        navLabel: 'How Foreign Trade Websites Improve Inquiry Conversion',
        categoryLabel: 'Foreign Trade Website',
        metaTitle: 'How to Improve Inquiry Conversion on a Foreign Trade Website | Zhicheng Studio',
        metaDescription:
          'Inquiry conversion on foreign trade websites depends more on structure, trust cues, and contact flow than on simply adding more buttons.',
        keywords: ['foreign trade website inquiry conversion', 'export website contact flow', 'B2B website conversion'],
        eyebrow: 'Article',
        heroTitle: 'Inquiry conversion on foreign trade websites is rarely a button-count problem',
        heroDescription:
          'Some sites add more contact buttons and still see weak inquiry volume. The deeper issue is often that visitors were asked to contact too early, before the site earned enough clarity and trust.',
        introTitle: 'Why adding more buttons usually misses the point',
        introParagraphs: [
          'If visitors still do not understand what you offer, who you work with, or why they should trust you, more buttons will not change much.',
          'The button is the last step. The real conversion work starts much earlier in the information path.',
        ],
        sections: [
          {
            title: 'Put the most useful information earlier',
            paragraphs: [
              'Visitors often care most about what the product is, who it fits, how it is different, and how cooperation works.',
              'When that is clear, the contact action feels much more natural.',
            ],
          },
          {
            title: 'Trust cues and FAQ reduce hesitation',
            paragraphs: [
              'Many visitors hesitate not because they never want to contact you, but because they are unsure whether the company feels reliable enough.',
              'Proof, process, FAQ, support terms, and clear contact structure often help more than aggressive calls to action.',
            ],
          },
          {
            title: 'Contact flow should stay simple',
            paragraphs: [
              'If the form asks for too much or the path feels hidden, visitors drop off quickly.',
              'A lower-friction entry point is often more effective than a heavier first-contact requirement.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'Inquiry conversion depends more on trust and clarity than on extra buttons.',
          'Product explanation, FAQ, and process detail strongly influence contact willingness.',
          'Simpler contact flow is often more effective than over-collecting information too early.',
        ],
        ctaTitle: 'If you want better inquiry conversion, start with structure and trust path',
        ctaDescription: 'Once the page hierarchy, trust cues, and contact flow are clearer, conversion problems become much easier to diagnose and improve.',
      },
    },
  },
  'mini-program-project-planning': {
    slug: 'mini-program-project-planning',
    priority: {
      zh: 0.68,
      en: 0.52,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['mini-program-development', 'web-app-development'],
    content: {
      zh: {
        navLabel: '小程序开发前要准备什么，项目才不会一开始就乱',
        categoryLabel: '小程序',
        metaTitle: '小程序开发前要准备什么？立项前先梳理这几件事｜致诚工作室',
        metaDescription:
          '小程序开发前要准备什么，决定了项目后面会不会边做边乱。本文从用户流程、后台处理、支付通知和内容运营四个方面拆解。',
        keywords: ['小程序开发前要准备什么', '小程序立项', '微信小程序需求', '小程序开发流程'],
        eyebrow: 'Article',
        heroTitle: '小程序开发前要准备什么，项目才不会一开始就边做边乱',
        heroDescription:
          '小程序项目最容易出现的问题，不是少了一个页面，而是用户流程、后台处理、支付通知和后续运营动作没有先梳理清楚。立项前想清楚这些，后面会省掉很多返工。',
        introTitle: '为什么小程序项目最容易在前期失控',
        introParagraphs: [
          '因为大家很容易把注意力放在用户端页面，却忽略后台怎么处理、状态怎么流转、后续活动怎么接。',
          '如果这些不先说清楚，小程序即使上线，也可能只是一个前台壳子。',
        ],
        sections: [
          {
            title: '先画清楚用户路径',
            paragraphs: [
              '用户怎么进入、浏览什么、在哪里下单、怎么支付、之后会收到什么提示，这条路径最好在开发前就画清楚。',
              '路径一旦不清楚，页面越做越多，核心链路反而越容易断。',
            ],
          },
          {
            title: '后台处理逻辑不能后置',
            paragraphs: [
              '很多人以为小程序主要是前端，但内容管理、订单处理、状态跟踪、消息通知这些通常都依赖后台。',
              '如果后台逻辑完全后置，前台页面很容易做成假流程。',
            ],
          },
          {
            title: '运营动作和后续扩展也要预留',
            paragraphs: [
              '活动、会员、分享、内容补充和数据统计，这些后面大概率都会提出来。',
              '前期结构稍微留点余地，后面会比完全推翻重做轻松很多。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '小程序开发前，先梳理用户路径，再梳理后台处理。',
          '支付、通知和状态流转要在立项前一起考虑。',
          '后续运营和扩展空间也应该提前留结构，不然越做越痛。',
        ],
        ctaTitle: '如果你正准备做小程序，先把用户路径和后台处理讲清楚',
        ctaDescription: '只要把用户怎么走、后台怎么接、哪些动作必须先支持说清楚，项目就会稳很多。',
      },
      en: {
        navLabel: 'What to Prepare Before Starting a Mini-program Project',
        categoryLabel: 'Mini-program',
        metaTitle: 'What to Prepare Before Mini-program Development | Zhicheng Studio',
        metaDescription:
          'Mini-program projects become much steadier when user flow, backend handling, payment logic, and later operations are clarified before implementation starts.',
        keywords: ['mini-program planning', 'wechat mini-program requirements', 'mini-program project preparation'],
        eyebrow: 'Article',
        heroTitle: 'Mini-program projects stay steadier when user flow and backend handling are clarified early',
        heroDescription:
          'The most common mini-program problem is not a missing screen, but weak preparation around user flow, backend handling, payments, notifications, and later operations.',
        introTitle: 'Why these projects lose control so early',
        introParagraphs: [
          'Teams often focus too much on the user-facing screens and not enough on what operations or backend handling actually need to happen behind them.',
          'That is how a mini-program can launch as a surface-level frontend without a real working business loop underneath.',
        ],
        sections: [
          {
            title: 'Map the user path before building screens',
            paragraphs: [
              'Entry, browsing, submission, payment, and follow-up messaging should be clear before implementation starts.',
              'If that path is fuzzy, more screens usually create more confusion instead of better flow.',
            ],
          },
          {
            title: 'Backend logic should not be treated as a later add-on',
            paragraphs: [
              'Content handling, order processing, state tracking, and notifications usually depend on backend support even when the product looks very frontend-heavy.',
              'If backend logic is postponed too much, the frontend often becomes a fake process layer.',
            ],
          },
          {
            title: 'Leave room for later operations',
            paragraphs: [
              'Campaigns, membership logic, sharing, analytics, and content growth often arrive later whether planned or not.',
              'A little structural preparation early usually saves much more rework later.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'Clarify user flow before screen detail.',
          'Backend handling, payments, and notifications belong in the planning stage.',
          'Leaving room for later operations makes iteration much easier.',
        ],
        ctaTitle: 'If you are planning a mini-program, start with the user path and backend flow',
        ctaDescription: 'Clarifying the core loop, backend actions, and must-support states early usually makes the whole project much steadier.',
      },
    },
  },
  'website-development-quote-checklist': {
    slug: 'website-development-quote-checklist',
    priority: {
      zh: 0.68,
      en: 0.52,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['website-development', 'company-website-development', 'foreign-trade-website-development'],
    content: {
      zh: {
        navLabel: '网站开发报价前，客户最好先准备哪些信息',
        categoryLabel: '报价',
        metaTitle: '网站开发报价前要准备什么？沟通清单参考｜致诚工作室',
        metaDescription:
          '网站开发报价前准备得越清楚，评估越快越准。本文整理了目标、页面、功能、参考站和预算区间等沟通清单。',
        keywords: ['网站开发报价前要准备什么', '网站开发报价清单', '官网报价怎么沟通', '网站开发需求清单'],
        eyebrow: 'Article',
        heroTitle: '网站开发报价前，客户最好先准备哪些信息，才能让评估更准',
        heroDescription:
          '报价沟通低效，很多时候不是开发方不愿意报价，而是前置信息太少。目标是什么、要做哪些页面、有没有后台、预算大概在哪个区间，这些越清楚，报价越不会失真。',
        introTitle: '为什么有些报价一开始就不准',
        introParagraphs: [
          '因为“做个网站”这句话本身信息量太少，同样一句话背后可能是几页品牌展示，也可能是多语言站加后台和内容维护。',
          '如果前期信息不够，开发评估只能按模糊范围猜，这样出来的报价通常不会太稳定。',
        ],
        sections: [
          {
            title: '先说目标，不要一开始只问价格',
            paragraphs: [
              '网站是为了品牌展示、获客转化还是业务承接，不同目标对应的结构和工作量完全不同。',
              '目标不清楚，后面每一个需求看起来都像必须做，报价自然也容易漂。',
            ],
          },
          {
            title: '把页面、功能和后台需求拆开说',
            paragraphs: [
              '首页、服务页、FAQ、文章页、联系页这些页面结构要尽量说清楚，功能和后台需求也最好单独列出来。',
              '这样开发方更容易判断哪些是基础交付，哪些会明显增加复杂度。',
            ],
            bullets: [
              '页面数量和大致栏目结构',
              '是否需要表单、预约、支付、多语言或 SEO 配置',
              '是否需要后台、内容管理、接口或权限能力',
              '交付后是否还要维护或继续迭代',
            ],
          },
          {
            title: '参考站和预算区间很重要',
            paragraphs: [
              '参考站不仅是风格参考，也能帮助快速理解你更看重什么。预算区间则能让双方更早判断是否在同一个范围。',
              '很多沟通耗时很长，最后才发现预算完全不匹配，本质上就是这两项信息给得太晚。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '报价前先讲目标，比只问价格更有效。',
          '页面、功能、后台需求最好拆开描述。',
          '参考站和预算区间能显著提高评估效率。',
        ],
        ctaTitle: '如果你准备询价，先把目标和页面清单整理出来',
        ctaDescription: '只要目标、页面、功能和预算区间够清楚，评估速度和准确度都会高很多。',
      },
      en: {
        navLabel: 'What to Prepare Before Asking for a Website Quote',
        categoryLabel: 'Quoting',
        metaTitle: 'What to Prepare Before Requesting a Website Development Quote | Zhicheng Studio',
        metaDescription:
          'Website quotes become more accurate when goals, pages, features, references, and budget range are prepared clearly. This article gives a practical checklist.',
        keywords: ['website quote checklist', 'website development quote', 'company website requirements'],
        eyebrow: 'Article',
        heroTitle: 'A better website quote starts with better preparation',
        heroDescription:
          'Quote discussions usually go wrong when the project goal and scope are too vague. Once the goal, page structure, backend needs, and expected budget range are clearer, evaluation becomes much more reliable.',
        introTitle: 'Why early quotes often miss the mark',
        introParagraphs: [
          '“Build a website” can mean very different things, from a small presentation site to a multilingual site with admin workflows and ongoing content support.',
          'If the preparation is weak, the quote is often based on guesswork rather than a realistic scope.',
        ],
        sections: [
          {
            title: 'Start with the goal, not only the price',
            paragraphs: [
              'Brand presentation, lead capture, and business support require different structures and priorities.',
              'Without a clear goal, every feature starts to feel equally necessary, which makes scope and price much harder to control.',
            ],
          },
          {
            title: 'Separate pages, features, and backend needs',
            paragraphs: [
              'Page hierarchy, forms, multilingual support, SEO basics, and backend expectations should be described as separate layers.',
              'That makes it easier to identify which parts are foundational and which parts significantly expand the workload.',
            ],
            bullets: [
              'Core pages and rough page hierarchy',
              'Forms, booking, payment, multilingual or SEO expectations',
              'Backend, content management, API, or permission requirements',
              'Whether post-launch support or iteration is expected',
            ],
          },
          {
            title: 'References and budget range matter a lot',
            paragraphs: [
              'Reference sites reveal what kind of direction you value. A budget range helps both sides judge fit much earlier.',
              'Long conversations often break down simply because those two inputs were missing for too long.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'Start with the goal before asking for price only.',
          'Describe pages, features, and backend needs separately.',
          'Reference sites and a budget range make quoting much more efficient.',
        ],
        ctaTitle: 'If you are requesting a quote, prepare the goal and page outline first',
        ctaDescription: 'Clear goals, page needs, feature scope, and budget range usually make the evaluation much faster and more realistic.',
      },
    },
  },
  'company-website-preparation-checklist': {
    slug: 'company-website-preparation-checklist',
    priority: {
      zh: 0.68,
      en: 0.52,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['company-website-development', 'website-development'],
    content: {
      zh: {
        navLabel: '企业官网开发前，要先准备哪些资料和判断',
        categoryLabel: '企业官网',
        metaTitle: '企业官网开发前要准备什么？资料与判断清单｜致诚工作室',
        metaDescription:
          '企业官网开发前，建议先准备品牌简介、服务结构、目标客户、参考站和内容素材。本文整理官网立项前更实用的准备清单。',
        keywords: ['企业官网开发前准备什么', '官网立项清单', '企业官网资料准备', '企业网站开发'],
        eyebrow: 'Article',
        heroTitle: '企业官网开发前，要先准备哪些资料和判断，项目才不会一开始就散',
        heroDescription:
          '企业官网最怕一边聊一边补资料，最后发现品牌介绍不统一、服务表达没想好、内容素材也没准备。这些问题一开始不处理，后面很容易让官网结构和工期一起失控。',
        introTitle: '为什么企业官网项目经常从“没准备好”开始变慢',
        introParagraphs: [
          '官网项目不像写几页页面那么简单，它会同时涉及品牌表达、内容组织、视觉方向和业务目标。',
          '如果资料长期不齐、判断长期不做，开发阶段就只能边做边补，这会严重拖慢推进节奏。',
        ],
        sections: [
          {
            title: '先准备品牌和业务基础信息',
            paragraphs: [
              '公司做什么、核心服务是什么、主要客户是谁、和同行相比差异在哪，这些都是官网内容的底层输入。',
              '如果这些信息内部都还没统一，官网就很难形成一套稳定表达。',
            ],
          },
          {
            title: '准备参考站和内容素材',
            paragraphs: [
              '参考站可以帮助快速统一方向，内容素材则决定页面落地会不会一直卡住。',
              '尤其是图片、案例、联系方式、服务流程和团队介绍这类内容，越早准备，推进越顺。',
            ],
            bullets: [
              '品牌和视觉参考',
              '服务内容与业务流程说明',
              '案例、图片和基础文案素材',
              '联系方式、FAQ 和转化入口信息',
            ],
          },
          {
            title: '提前判断哪些内容必须首批上线',
            paragraphs: [
              '不是所有内容都要第一版做满。把必须先上线的页面和后续可迭代的内容分开，项目会更稳。',
              '这个判断越早做，工期和预算越容易控制。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '企业官网项目最怕资料和目标都不清楚就直接开做。',
          '参考站和内容素材准备越早，推进越顺。',
          '首批上线范围最好先收窄，不要一开始就全做满。',
        ],
        ctaTitle: '如果你正准备做企业官网，先把资料和首批上线范围整理出来',
        ctaDescription: '品牌信息、服务结构、素材和优先级一旦清楚，后面的方案和工期判断都会更稳。',
      },
      en: {
        navLabel: 'What to Prepare Before a Company Website Project Starts',
        categoryLabel: 'Company Website',
        metaTitle: 'What to Prepare Before a Company Website Project Starts | Zhicheng Studio',
        metaDescription:
          'Before building a company website, it helps to prepare business basics, service structure, references, and content assets. This article gives a practical preparation checklist.',
        keywords: ['company website preparation', 'corporate website checklist', 'website project assets'],
        eyebrow: 'Article',
        heroTitle: 'Company website projects move faster when the basics are prepared early',
        heroDescription:
          'Projects slow down quickly when brand information is inconsistent, service messaging is unclear, and content assets are still being collected in the middle of delivery.',
        introTitle: 'Why weak preparation slows company website projects',
        introParagraphs: [
          'A company site touches brand positioning, content hierarchy, visual direction, and business communication at the same time.',
          'If those inputs stay incomplete too long, implementation turns into constant backfilling instead of steady progress.',
        ],
        sections: [
          {
            title: 'Prepare the business and brand basics first',
            paragraphs: [
              'What the company does, what the core services are, who the main customers are, and what the differentiation is should all be clear enough to guide the site.',
              'Without that clarity, the site struggles to sound consistent.',
            ],
          },
          {
            title: 'Prepare references and content assets',
            paragraphs: [
              'Reference sites help align direction quickly, while assets decide whether page delivery stalls later.',
              'Images, proof, service steps, contact details, and FAQ material all help move the project faster.',
            ],
            bullets: [
              'Brand and visual references',
              'Service and business-flow explanations',
              'Proof, images, and core copy assets',
              'Contact information, FAQ, and conversion entry details',
            ],
          },
          {
            title: 'Decide what must launch first',
            paragraphs: [
              'Not every page needs to be in the first release. Separating must-launch scope from later content makes scope and budget easier to control.',
              'That decision is usually more helpful when made early instead of in the middle of development.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'Company website projects stall when brand inputs and assets stay unclear.',
          'References and content assets prepared early make delivery smoother.',
          'The first release scope should usually be narrowed before development starts.',
        ],
        ctaTitle: 'If you are preparing a company website, organize the source material first',
        ctaDescription: 'Clear brand input, content assets, and a realistic launch scope make later planning much steadier.',
      },
    },
  },
  'foreign-trade-website-navigation-planning': {
    slug: 'foreign-trade-website-navigation-planning',
    priority: {
      zh: 0.68,
      en: 0.52,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['foreign-trade-website-development', 'website-development'],
    content: {
      zh: {
        navLabel: '外贸网站栏目怎么规划，才更适合海外访客',
        categoryLabel: '外贸网站',
        metaTitle: '外贸网站栏目怎么规划？导航结构参考｜致诚工作室',
        metaDescription:
          '外贸网站栏目怎么规划，影响访客理解、SEO 和询盘路径。本文从首页、产品页、服务页、FAQ 和联系页讲清更稳的导航结构。',
        keywords: ['外贸网站栏目规划', '外贸网站导航', '外贸官网结构', '外贸网站开发'],
        eyebrow: 'Article',
        heroTitle: '外贸网站栏目怎么规划，才更适合海外访客理解和继续联系',
        heroDescription:
          '很多外贸网站的问题不是页面不够多，而是栏目结构不顺。访客不知道该先看产品、看公司、看FAQ还是直接联系，最后站点虽然上线了，但询盘路径并不清楚。',
        introTitle: '为什么栏目结构会直接影响询盘',
        introParagraphs: [
          '外贸网站比普通展示站更依赖清晰导航，因为访客往往是第一次接触你，理解成本本来就高。',
          '如果栏目结构不顺，访客很容易在最关键的信息还没看到前就离开。',
        ],
        sections: [
          {
            title: '首页和产品页通常应该更靠前',
            paragraphs: [
              '外贸访客通常更关心你卖什么、适合哪些场景和能怎么合作，所以产品和服务结构通常比长篇公司介绍更优先。',
              '首页负责快速概览，产品页和服务页负责承接细节。',
            ],
          },
          {
            title: 'FAQ、About 和 Contact 都有明确角色',
            paragraphs: [
              'FAQ 负责回答犹豫点，About 负责补可信度，Contact 负责降低行动门槛。这三个栏目不是摆设，而是询盘路径的一部分。',
              '如果栏目之间职责混在一起，导航会越来越乱。',
            ],
            bullets: [
              'FAQ 用来降低疑虑',
              'About 用来补信任和合作背景',
              'Contact 用来承接下一步行动',
            ],
          },
          {
            title: '先规划导航，再补更多页面',
            paragraphs: [
              '如果导航结构先定下来，后续继续扩产品页、行业页和文章页都会更自然。',
              '反过来，如果先到处加页面再回头理导航，站点通常会越来越难看懂。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '外贸网站栏目结构会直接影响理解和询盘。',
          '产品页、FAQ、About 和 Contact 都应该有清晰职责。',
          '导航结构先定，再继续扩内容，通常更稳。',
        ],
        ctaTitle: '如果你正做外贸网站，先把栏目结构排顺',
        ctaDescription: '栏目结构一旦清楚，后面的内容组织、SEO 和询盘路径都会更好做。',
      },
      en: {
        navLabel: 'How to Plan Navigation for a Foreign Trade Website',
        categoryLabel: 'Foreign Trade Website',
        metaTitle: 'How to Plan Navigation for a Foreign Trade Website | Zhicheng Studio',
        metaDescription:
          'Navigation structure on a foreign trade website affects visitor understanding, SEO, and inquiry flow. This article explains a clearer column planning approach.',
        keywords: ['foreign trade website navigation', 'export website structure', 'multilingual site planning'],
        eyebrow: 'Article',
        heroTitle: 'Foreign trade website navigation should make understanding and inquiry easier',
        heroDescription:
          'Many foreign trade sites do not suffer from too few pages, but from weak navigation logic. Visitors do not know whether to look at products, company info, FAQ, or contact first, so the inquiry path stays unclear.',
        introTitle: 'Why navigation influences inquiry more than many teams expect',
        introParagraphs: [
          'Foreign trade sites often meet new visitors first, which makes clarity especially important.',
          'If the navigation order is weak, visitors may leave before they reach the information that actually matters most.',
        ],
        sections: [
          {
            title: 'Homepage and product layers usually deserve earlier emphasis',
            paragraphs: [
              'International visitors often want to understand the offer, fit, and cooperation path quickly.',
              'That makes homepage, product pages, and service pages more critical than long background sections at the top of the structure.',
            ],
          },
          {
            title: 'FAQ, About, and Contact each have a distinct job',
            paragraphs: [
              'FAQ reduces hesitation, About adds trust, and Contact lowers action friction. Those pages are part of the inquiry path, not filler.',
              'When their roles blur together, the navigation often becomes harder to follow.',
            ],
            bullets: [
              'FAQ reduces uncertainty',
              'About adds credibility and business context',
              'Contact supports the next step with lower friction',
            ],
          },
          {
            title: 'Plan the navigation before expanding content volume',
            paragraphs: [
              'Once the navigation is steady, adding product, industry, or article pages later is much easier.',
              'If pages keep getting added before the structure is clarified, the site usually becomes harder to understand.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'Navigation strongly shapes understanding and inquiry flow.',
          'Product, FAQ, About, and Contact should each play a clear role.',
          'A stable navigation plan makes later content expansion much easier.',
        ],
        ctaTitle: 'If you are planning a foreign trade site, sort the navigation first',
        ctaDescription: 'A clearer site structure makes content planning, SEO, and inquiry flow much easier to handle later.',
      },
    },
  },
  'website-redesign-seo-migration': {
    slug: 'website-redesign-seo-migration',
    priority: {
      zh: 0.68,
      en: 0.52,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['website-development', 'company-website-development', 'foreign-trade-website-development'],
    content: {
      zh: {
        navLabel: '网站改版时，SEO 迁移最容易漏掉什么',
        categoryLabel: 'SEO',
        metaTitle: '网站改版时 SEO 迁移最容易漏掉什么？｜致诚工作室',
        metaDescription:
          '网站改版时 SEO 最容易漏掉 URL 变化、301、title、description、sitemap 和页面映射关系。本文整理更稳的迁移检查点。',
        keywords: ['网站改版SEO', 'SEO迁移', '网站重构301', '官网改版SEO'],
        eyebrow: 'Article',
        heroTitle: '网站改版时，SEO 迁移最容易漏掉什么，为什么很多站点上线后流量会掉',
        heroDescription:
          '网站改版最容易被低估的，不是视觉重做，而是 SEO 迁移。如果 URL 变了、页面映射没梳理、301 没配、metadata 没对齐，改版后流量和收录都可能短时间受影响。',
        introTitle: '为什么改版项目会把 SEO 一起带崩',
        introParagraphs: [
          '很多改版项目只关注新页面上线，却忽略旧页面的历史 URL、收录状态和已有权重。',
          '如果这些关系不在改版前理清楚，上线后搜索引擎会先看到一堆变化，再慢慢重新理解站点，期间就容易出现波动。',
        ],
        sections: [
          {
            title: '先把旧 URL 和新页面映射关系列出来',
            paragraphs: [
              '页面删了、合并了还是换路径了，都应该先有清单，而不是上线当天边看边补。',
              '这一步做得越细，后面的 301 和 Search Console 校验越容易。',
            ],
          },
          {
            title: 'title、description 和 sitemap 不能只顾着新页面好看',
            paragraphs: [
              '改版时常见的问题是页面更漂亮了，但 metadata、canonical、robots、sitemap 和多语言关系没有一起检查。',
              '视觉更新和 SEO 基础迁移，本来就应该同时推进。',
            ],
            bullets: [
              'URL 映射和 301',
              'title / description / canonical',
              'robots / sitemap / hreflang',
              '上线后的抓取和收录检查',
            ],
          },
          {
            title: '上线后还要持续盯一段时间',
            paragraphs: [
              '改版后的 SEO 迁移不是上线那天就结束，后面还要看 Search Console 的抓取、覆盖率和 impressions 变化。',
              '越早发现异常，越容易把影响范围控制住。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          'SEO 迁移最怕没有旧 URL 到新页面的映射清单。',
          'metadata、301 和 sitemap 应该和改版同步推进。',
          '上线后还要继续观察抓取和收录变化。',
        ],
        ctaTitle: '如果你正准备改版网站，先把 SEO 迁移清单列出来',
        ctaDescription: '把 URL 映射、301、metadata 和上线检查点一起排出来，改版风险会低很多。',
      },
      en: {
        navLabel: 'What Website Redesigns Often Miss in SEO Migration',
        categoryLabel: 'SEO',
        metaTitle: 'What Website Redesigns Often Miss in SEO Migration | Zhicheng Studio',
        metaDescription:
          'Website redesign SEO migration often fails because URL mapping, redirects, metadata, sitemap, and launch checks were not handled together. This article covers the main risks.',
        keywords: ['website redesign SEO migration', 'website 301 migration', 'SEO migration checklist'],
        eyebrow: 'Article',
        heroTitle: 'SEO migration is one of the easiest things to underestimate during a website redesign',
        heroDescription:
          'Redesigns often focus on the new visuals and forget that search engines still care deeply about URL continuity, page mapping, redirects, metadata, and crawl signals.',
        introTitle: 'Why redesigns can disrupt SEO so easily',
        introParagraphs: [
          'A redesign changes more than appearance. It often changes URL structure, page relationships, and metadata too.',
          'If those changes are not mapped clearly before launch, search engines may need time to relearn the site while visibility drops.',
        ],
        sections: [
          {
            title: 'Create the old-to-new URL map first',
            paragraphs: [
              'Before launch, list which pages are removed, merged, renamed, or moved. That map is the foundation for stable redirects and migration checks.',
              'Without it, redirect work often becomes reactive and incomplete.',
            ],
          },
          {
            title: 'Metadata and crawl signals must migrate with the redesign',
            paragraphs: [
              'A prettier page does not help much if title tags, descriptions, canonical tags, robots, sitemap, or language relationships are forgotten.',
              'Visual redesign and SEO migration should be treated as one coordinated release effort.',
            ],
            bullets: [
              'URL mapping and 301 redirects',
              'Title, description, and canonical tags',
              'Robots, sitemap, and hreflang',
              'Post-launch crawl and indexing review',
            ],
          },
          {
            title: 'Keep watching after launch',
            paragraphs: [
              'Migration is not finished on launch day. Search Console coverage, crawl feedback, and impression shifts should still be monitored after release.',
              'The sooner issues are spotted, the easier they are to contain.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'SEO migration needs a clear old-to-new URL map.',
          'Redirects, metadata, and sitemap updates should move with the redesign.',
          'Post-launch monitoring is part of migration, not an optional extra.',
        ],
        ctaTitle: 'If you are planning a redesign, build the SEO migration checklist early',
        ctaDescription: 'A mapped URL plan, redirect rules, metadata review, and launch checks reduce redesign risk significantly.',
      },
    },
  },
  'internal-system-refactor-or-rebuild': {
    slug: 'internal-system-refactor-or-rebuild',
    priority: {
      zh: 0.66,
      en: 0.51,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['web-app-development'],
    content: {
      zh: {
        navLabel: '旧系统该重构还是重做，怎么判断更实际',
        categoryLabel: '企业系统',
        metaTitle: '旧系统该重构还是重做？更实际的判断方法｜致诚工作室',
        metaDescription:
          '旧系统该重构还是重做，取决于结构是否还能承接、问题是在局部还是全局，以及业务是否允许分阶段迁移。本文拆解判断方式。',
        keywords: ['旧系统重构', '系统重做', '企业系统升级', 'Web应用重构'],
        eyebrow: 'Article',
        heroTitle: '旧系统该重构还是重做，怎么判断才更现实，不是只看“能不能用”',
        heroDescription:
          '很多企业系统看起来还能用，但一改需求就痛苦；也有些系统虽然老，但结构还算清楚，完全推翻反而不划算。真正要判断的，不是“老不老”，而是它还承不承得住后面的业务变化。',
        introTitle: '为什么这类判断总是容易两极化',
        introParagraphs: [
          '一种声音是“别动，能用就行”，另一种声音是“直接推翻重做”。但现实里更常见的是中间状态：有些部分还能承接，有些部分已经明显拖后腿。',
          '所以更实际的判断方式，通常不是二选一，而是先分清问题到底卡在哪一层。',
        ],
        sections: [
          {
            title: '先看问题是在局部还是全局',
            paragraphs: [
              '如果问题主要集中在某几个模块、页面体验或局部性能，渐进式重构通常更稳。',
              '如果流程、数据结构、权限和模块边界全都已经混乱，那继续补可能只是把问题拖得更久。',
            ],
          },
          {
            title: '再看业务能不能接受分阶段迁移',
            paragraphs: [
              '很多系统不适合一次全部切换，这时候就要判断能不能分模块替换、分阶段上线。',
              '如果业务节奏允许渐进式替换，重构会更可控；如果旧系统已经严重阻塞业务，重做可能反而更省长期成本。',
            ],
          },
          {
            title: '判断标准不只是技术，还有维护和沟通成本',
            paragraphs: [
              '有些系统技术上还能撑，但每次改需求都要牵动很多人，维护和沟通成本已经高得不合理。',
              '这种时候，是否重构或重做，应该从整体迭代效率来判断，而不是只从“还能跑”来判断。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '判断旧系统是否重做，先看问题是在局部还是全局。',
          '业务能否接受分阶段迁移，会直接影响方案选择。',
          '维护和沟通成本，也应该纳入技术判断。',
        ],
        ctaTitle: '如果你在评估旧系统，先把问题集中在哪一层讲清楚',
        ctaDescription: '局部问题、全局问题、业务节奏和迭代压力一旦分开看，方案判断通常会清楚很多。',
      },
      en: {
        navLabel: 'Refactor or Rebuild? A More Practical Way to Judge Legacy Systems',
        categoryLabel: 'Internal System',
        metaTitle: 'Refactor or Rebuild? How to Judge a Legacy Internal System More Realistically | Zhicheng Studio',
        metaDescription:
          'Whether a legacy system should be refactored or rebuilt depends on structural health, scope of problems, and whether the business can tolerate phased migration.',
        keywords: ['refactor or rebuild system', 'legacy system upgrade', 'business system migration'],
        eyebrow: 'Article',
        heroTitle: 'Refactor or rebuild is usually a question of future fit, not only current usability',
        heroDescription:
          'Some old systems still run but collapse under change. Others feel outdated but still have a usable structure underneath. The better judgment is not how old it is, but whether it can still carry future business change.',
        introTitle: 'Why this decision gets framed too simply',
        introParagraphs: [
          'One side often says “leave it alone if it still works”, while the other says “rewrite everything”. Most real systems live in the middle.',
          'A more practical evaluation starts by separating localized problems from systemic ones.',
        ],
        sections: [
          {
            title: 'First decide whether the pain is local or structural',
            paragraphs: [
              'If the trouble is concentrated in a few modules, screens, or performance bottlenecks, gradual refactoring may be enough.',
              'If workflow, data model, permissions, and module boundaries are all failing at once, patching can become a long-term trap.',
            ],
          },
          {
            title: 'Then decide whether the business can tolerate phased migration',
            paragraphs: [
              'Many systems cannot be replaced all at once. The business may need module-by-module replacement instead.',
              'If phased migration is realistic, refactoring can be safer. If the current system blocks critical business movement, rebuilding may be cheaper long term.',
            ],
          },
          {
            title: 'Maintenance cost matters as much as code quality',
            paragraphs: [
              'Sometimes the code still runs, but every change drags in too many people and too much coordination.',
              'At that point the real question is total iteration cost, not only whether the system still functions today.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'Judge whether the problems are local or structural first.',
          'Business tolerance for phased migration shapes the safer path.',
          'Maintenance and coordination cost should be part of the technical decision.',
        ],
        ctaTitle: 'If you are evaluating a legacy system, clarify where the pain actually lives',
        ctaDescription: 'Separating local issues, structural issues, business timing, and iteration pressure usually makes the refactor-versus-rebuild choice much clearer.',
      },
    },
  },
  'company-website-homepage-structure': {
    slug: 'company-website-homepage-structure',
    priority: {
      zh: 0.66,
      en: 0.51,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['company-website-development', 'website-development'],
    content: {
      zh: {
        navLabel: '企业官网首页怎么规划，才不会只剩一张大海报',
        categoryLabel: '企业官网',
        metaTitle: '企业官网首页怎么规划？首页结构参考｜致诚工作室',
        metaDescription:
          '企业官网首页怎么规划，重点不只是视觉，而是品牌表达、服务说明、信任信息和联系路径的顺序。本文整理更稳的首页结构参考。',
        keywords: ['企业官网首页怎么规划', '企业官网首页结构', '官网首页怎么做', '企业官网开发'],
        eyebrow: 'Article',
        heroTitle: '企业官网首页怎么规划，才不会最后只剩一张大海报',
        heroDescription:
          '很多企业官网首页的问题，不是设计不够漂亮，而是访客看完以后还是不知道你到底做什么、适合谁、为什么值得联系。首页最重要的任务，其实是把理解路径排顺，而不是只做一个好看的首屏。',
        introTitle: '为什么首页最容易看起来高级、用起来却没什么用',
        introParagraphs: [
          '因为首页经常承担了太多“面子工作”，却没有把服务结构、差异化和联系入口真正说清楚。',
          '结果就是页面视觉不错，但业务表达发散，访客要么继续找不到重点，要么直接离开。',
        ],
        sections: [
          {
            title: '首屏应该先回答三个问题',
            paragraphs: [
              '你是谁、你主要做什么、适合哪些客户，这三个问题如果首屏都没说清楚，后面的内容再多也很难救回来。',
              '首页第一屏更像快速定调，而不是把全部内容都塞进去。',
            ],
          },
          {
            title: '服务和信任信息要尽早出现',
            paragraphs: [
              '服务范围、过往背景、合作方式、维护承诺这类信息，通常比“品牌故事”更先影响访客是否继续看下去。',
              '首页如果能尽早给出这些答案，后面的服务页和联系页转化会顺很多。',
            ],
            bullets: [
              '一句话讲清主要服务方向',
              '尽早出现可信度信息和合作方式',
              '在首页里提前埋服务页和联系页入口',
            ],
          },
          {
            title: '首页要像入口，不要像终点',
            paragraphs: [
              '首页最合适的角色是总入口，把访客导到更具体的服务页、文章页和联系动作。',
              '如果首页试图把所有内容讲完，结构通常会越来越臃肿。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '企业官网首页首先要解决理解问题，而不是只做视觉包装。',
          '服务说明、信任信息和联系入口应该尽早出现。',
          '首页更像总入口，细节应该分发到后续页面去承接。',
        ],
        ctaTitle: '如果你正在做企业官网首页，先把信息顺序排清楚',
        ctaDescription: '只要首页先讲清楚是谁、做什么、适合谁，后面的服务页和联系路径就会顺很多。',
      },
      en: {
        navLabel: 'How to Structure a Company Website Homepage',
        categoryLabel: 'Company Website',
        metaTitle: 'How to Structure a Company Website Homepage | Zhicheng Studio',
        metaDescription:
          'A strong company website homepage needs more than a polished hero. This article explains homepage structure around positioning, services, trust cues, and contact flow.',
        keywords: ['company website homepage structure', 'corporate homepage planning', 'company website development'],
        eyebrow: 'Article',
        heroTitle: 'A company website homepage should do more than look polished',
        heroDescription:
          'Many company homepages look good but still leave visitors unsure about what the business actually does, who it is for, and why they should continue. The real job of a homepage is to organize understanding, not only appearance.',
        introTitle: 'Why homepages often feel polished but weak',
        introParagraphs: [
          'A homepage often gets overloaded with visual ambition while staying vague on service direction, differentiation, and next-step clarity.',
          'That is why a page can look impressive and still fail to move the conversation forward.',
        ],
        sections: [
          {
            title: 'The first screen should answer three questions',
            paragraphs: [
              'Who are you, what do you mainly do, and who is it for? If the first screen misses those, later sections struggle to recover clarity.',
              'The hero should set direction fast instead of trying to contain every detail.',
            ],
          },
          {
            title: 'Service and trust cues should appear early',
            paragraphs: [
              'Core services, working style, credibility, and support promises often influence whether visitors keep reading more than a brand story alone.',
              'When that information appears earlier, service pages and contact flow perform better later.',
            ],
            bullets: [
              'Summarize the main service direction quickly',
              'Show working style or credibility cues early',
              'Guide visitors toward deeper service pages and contact actions',
            ],
          },
          {
            title: 'Treat the homepage as an entry point, not the whole destination',
            paragraphs: [
              'The homepage should distribute visitors into service pages, articles, and contact actions instead of trying to explain everything by itself.',
              'When it tries to do too much alone, the page usually becomes bloated.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'The homepage should organize understanding before polish takes over.',
          'Service scope, trust cues, and contact direction should appear early.',
          'A homepage is strongest when it acts as a gateway into the rest of the site.',
        ],
        ctaTitle: 'If you are planning a company homepage, start with the information order',
        ctaDescription: 'Once the page clearly answers who you are, what you do, and who it fits, the rest of the site usually becomes easier to structure.',
      },
    },
  },
  'company-website-faq-planning': {
    slug: 'company-website-faq-planning',
    priority: {
      zh: 0.66,
      en: 0.51,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['company-website-development', 'website-development'],
    content: {
      zh: {
        navLabel: '企业官网要不要单独做 FAQ 页面，什么时候值得做',
        categoryLabel: '企业官网',
        metaTitle: '企业官网要不要做 FAQ 页面？什么时候值得做｜致诚工作室',
        metaDescription:
          '企业官网要不要做 FAQ 页面，取决于业务复杂度、客户疑虑和后续 SEO 规划。本文拆解 FAQ 页面什么时候值得单独做。',
        keywords: ['企业官网 FAQ', '官网 FAQ 页面', '企业官网开发', 'FAQ 页面有什么用'],
        eyebrow: 'Article',
        heroTitle: '企业官网要不要单独做 FAQ 页面，什么时候值得做',
        heroDescription:
          'FAQ 页面看起来像小补充，但它经常承担着两个重要角色：一是降低客户继续联系前的犹豫，二是帮网站承接一些更具体的搜索问题。所以值不值得做，不只是看页面数量，而是看业务复杂度和内容策略。',
        introTitle: '为什么 FAQ 页面经常被低估',
        introParagraphs: [
          '很多企业官网会把常见问题随手塞到首页底部，但真正有价值的问题其实值得单独组织成一页。',
          '特别是项目复杂、合作方式需要解释、客户疑虑多的业务，FAQ 页面会明显减轻前期沟通成本。',
        ],
        sections: [
          {
            title: 'FAQ 页面最适合回答什么问题',
            paragraphs: [
              '价格怎么评估、周期多久、流程怎么走、是否支持代码交付、上线后怎么维护，这些问题都很适合整理成 FAQ。',
              '它解决的是访客“还没准备联系，但已经开始犹豫”的阶段。',
            ],
          },
          {
            title: '什么时候值得单独做一页',
            paragraphs: [
              '如果问题数量多、涉及多个服务方向，或者你本来就想持续补 SEO 内容，那 FAQ 单独成页通常更合适。',
              '如果问题很少，也可以先放在服务页中，但后面一旦内容变多，最好尽快拆出来。',
            ],
            bullets: [
              '业务复杂、疑虑多时更值得做',
              '需要承接搜索问题时更值得做',
              '多个服务方向共用问题时更值得做',
            ],
          },
          {
            title: 'FAQ 页面和服务页的关系',
            paragraphs: [
              'FAQ 不是替代服务页，而是补服务页里不适合展开太长的问题。',
              '更好的结构通常是服务页讲主线，FAQ 讲疑虑点，两者互相回链。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          'FAQ 页面能同时降低犹豫和补充搜索问题。',
          '业务复杂度越高，FAQ 单独成页的价值越大。',
          'FAQ 更适合作为服务页的补充，而不是替代。',
        ],
        ctaTitle: '如果你的网站常被问到重复问题，可以考虑把 FAQ 单独整理出来',
        ctaDescription: '把高频问题单独组织好，不仅能减少重复沟通，也更方便后续做内容沉淀。',
      },
      en: {
        navLabel: 'Should a Company Website Have a Separate FAQ Page?',
        categoryLabel: 'Company Website',
        metaTitle: 'Should a Company Website Have a Separate FAQ Page? | Zhicheng Studio',
        metaDescription:
          'A separate FAQ page can reduce hesitation and support search intent when a company website deals with recurring client questions. This article explains when it is worth building.',
        keywords: ['company website FAQ', 'FAQ page for website', 'corporate website FAQ'],
        eyebrow: 'Article',
        heroTitle: 'A separate FAQ page is often more useful than teams expect',
        heroDescription:
          'FAQ pages often look optional, but they can reduce hesitation before contact and help the site answer more specific search questions. The value depends on complexity, repeated objections, and content strategy.',
        introTitle: 'Why FAQ pages are often underestimated',
        introParagraphs: [
          'Many company sites place a few questions at the bottom of the homepage and leave it there, even when the business has deeper recurring questions worth organizing clearly.',
          'For more complex services, that FAQ layer can reduce friction before the first conversation even begins.',
        ],
        sections: [
          {
            title: 'What kinds of questions belong there',
            paragraphs: [
              'Pricing approach, timeline, workflow, code handoff, and post-launch support are all strong FAQ candidates.',
              'These questions often appear in the stage where visitors are interested but not fully ready to contact yet.',
            ],
          },
          {
            title: 'When it is worth making FAQ a standalone page',
            paragraphs: [
              'If the question set is larger, shared across multiple service lines, or useful for SEO, a dedicated FAQ page often makes more sense.',
              'If the list is still small, keeping it inside service pages can work temporarily, but it usually deserves its own space as the content grows.',
            ],
            bullets: [
              'More valuable when services create repeated hesitation',
              'More valuable when the site is trying to answer search intent',
              'More valuable when multiple service lines share the same questions',
            ],
          },
          {
            title: 'How FAQ should work with service pages',
            paragraphs: [
              'A FAQ page should not replace service pages. It should support them by answering the doubts that do not fit neatly into the main narrative.',
              'The stronger structure is usually service pages for the main story and FAQ for hesitation points, with links between them.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'FAQ pages reduce hesitation and answer more specific search questions.',
          'They become more valuable as service complexity grows.',
          'FAQ works best as a support layer to service pages rather than as a replacement.',
        ],
        ctaTitle: 'If your site keeps answering the same questions, a dedicated FAQ page may be worth it',
        ctaDescription: 'Organizing repeated questions well can reduce pre-sale friction and strengthen long-term content structure.',
      },
    },
  },
  'foreign-trade-website-product-pages': {
    slug: 'foreign-trade-website-product-pages',
    priority: {
      zh: 0.66,
      en: 0.51,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['foreign-trade-website-development', 'website-development'],
    content: {
      zh: {
        navLabel: '外贸网站产品页怎么写，才更容易被看懂和继续询盘',
        categoryLabel: '外贸网站',
        metaTitle: '外贸网站产品页怎么写？更利于理解和询盘的写法｜致诚工作室',
        metaDescription:
          '外贸网站产品页怎么写，重点不只是把参数列全，而是让访客快速理解产品、场景、优势和下一步联系路径。本文拆解更有效的产品页结构。',
        keywords: ['外贸网站产品页', '外贸网站怎么写产品页', '产品页询盘', '外贸网站开发'],
        eyebrow: 'Article',
        heroTitle: '外贸网站产品页怎么写，才更容易被看懂和继续询盘',
        heroDescription:
          '很多外贸网站产品页信息很多，但访客看完还是不确定这个产品适不适合自己。真正有用的产品页，不只是把参数放全，而是要让人更快理解用途、优势、适配场景和下一步怎么联系。',
        introTitle: '为什么产品页经常写得很满，却还是不太好用',
        introParagraphs: [
          '因为很多产品页只站在“我要展示多少信息”的角度写，却没有站在“访客最先想知道什么”的角度组织内容。',
          '一旦信息顺序不对，访客即使愿意看，也很难快速建立判断。',
        ],
        sections: [
          {
            title: '先讲产品是干什么的，再讲参数',
            paragraphs: [
              '访客最先要知道的是产品用途、适配场景和核心优势，而不是一上来就看一长串参数表。',
              '参数当然重要，但通常更适合作为第二层信息，而不是第一屏重点。',
            ],
          },
          {
            title: '把场景和差异化讲得更具体',
            paragraphs: [
              '如果产品适合哪些行业、有什么常见应用方式、和替代方案相比差在哪，这些信息越具体，访客越容易形成判断。',
              '尤其是 B2B 场景，抽象卖点通常不如具体应用场景更有说服力。',
            ],
          },
          {
            title: '产品页要有明确的下一步动作',
            paragraphs: [
              '如果访客已经看到了产品页，说明兴趣已经比首页更深，这时要给出更清楚的联系、询价或继续沟通入口。',
              '产品页不是展示完就结束，而是要帮访客更顺地进入下一步。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '产品页先解决理解问题，再补参数细节。',
          '应用场景和差异化通常比抽象卖点更有说服力。',
          '产品页应该明确给出下一步联系动作。',
        ],
        ctaTitle: '如果你正在做外贸网站产品页，先把信息顺序排清楚',
        ctaDescription: '用途、场景、优势和联系入口一旦顺了，产品页的询盘效率通常会明显更高。',
      },
      en: {
        navLabel: 'How to Write Foreign Trade Product Pages More Clearly',
        categoryLabel: 'Foreign Trade Website',
        metaTitle: 'How to Write Better Product Pages for a Foreign Trade Website | Zhicheng Studio',
        metaDescription:
          'Foreign trade product pages work better when they explain use, fit, advantage, and next-step action before overwhelming visitors with specs alone.',
        keywords: ['foreign trade product pages', 'B2B product page writing', 'export website product page'],
        eyebrow: 'Article',
        heroTitle: 'A strong foreign trade product page should make the product easier to judge quickly',
        heroDescription:
          'Many product pages contain a lot of information and still leave visitors unsure whether the product fits them. A better product page explains use, fit, advantage, and next-step action before detail overwhelms the page.',
        introTitle: 'Why product pages become dense but still weak',
        introParagraphs: [
          'They are often written from the perspective of “how much information should we display” instead of “what does the visitor need first to make a judgment.”',
          'When the order is wrong, even useful information becomes harder to absorb.',
        ],
        sections: [
          {
            title: 'Explain what the product is for before listing specs',
            paragraphs: [
              'Visitors usually need to understand purpose, fit, and advantage before they are ready to care about detailed specification tables.',
              'Specs are important, but they usually work better as second-layer information.',
            ],
          },
          {
            title: 'Make scenarios and differentiation concrete',
            paragraphs: [
              'If the page explains which industries or use cases the product fits, and what makes it different from alternatives, the visitor can judge much faster.',
              'In B2B contexts, practical scenario clarity often persuades better than abstract claims.',
            ],
          },
          {
            title: 'Product pages should lead to a next step',
            paragraphs: [
              'Visitors on a product page are already deeper in intent than visitors on the homepage, so the path to inquiry or pricing should be easier from there.',
              'A product page should not end at description. It should move the visitor toward the next business step.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'Product pages should solve understanding before detail overload.',
          'Concrete use cases and differentiation are often stronger than abstract claims.',
          'A product page should make the next inquiry step easy to find.',
        ],
        ctaTitle: 'If you are planning product pages, start with information order',
        ctaDescription: 'Purpose, fit, advantages, and next-step action usually matter more early than a wall of specifications.',
      },
    },
  },
  'foreign-trade-website-trust-signals': {
    slug: 'foreign-trade-website-trust-signals',
    priority: {
      zh: 0.66,
      en: 0.51,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['foreign-trade-website-development', 'company-website-development'],
    content: {
      zh: {
        navLabel: '外贸网站该放哪些信任信息，才更容易让人继续联系',
        categoryLabel: '外贸网站',
        metaTitle: '外贸网站该放哪些信任信息？｜致诚工作室',
        metaDescription:
          '外贸网站该放哪些信任信息，取决于业务复杂度和询盘门槛。本文拆解公司信息、FAQ、合作流程、交付方式和联系方式的常见做法。',
        keywords: ['外贸网站信任信息', '外贸网站FAQ', '外贸网站询盘', '外贸官网开发'],
        eyebrow: 'Article',
        heroTitle: '外贸网站该放哪些信任信息，才更容易让人继续联系',
        heroDescription:
          '很多外贸网站把重点全放在产品和首页视觉上，却忽略了访客真正担心的是“你靠不靠谱、合作顺不顺、后面怎么对接”。这些信任信息一旦缺位，询盘通常会卡在最后一步。',
        introTitle: '为什么信任信息对外贸网站特别重要',
        introParagraphs: [
          '跨国沟通天然有信息差，访客无法像线下那样快速建立信任，所以网站上能不能把合作方式和基本判断信息讲清楚，会直接影响是否继续联系。',
          '很多时候不是产品不够好，而是站点没有及时给出让人安心的答案。',
        ],
        sections: [
          {
            title: '最基本的公司与合作信息不能省',
            paragraphs: [
              '公司简介、服务范围、合作流程、联系方式、响应方式，这些看起来基础，但正是访客用来判断“是否值得继续沟通”的第一层信息。',
              '如果这些都模糊，后面的产品信息再多也难补回信任。',
            ],
          },
          {
            title: 'FAQ 和交付说明能降低很多疑虑',
            paragraphs: [
              '是否支持定制、交期大概多久、怎么沟通、如何交付、后续维护怎么处理，这些问题如果提前回答，会让访客更容易往下走。',
              'FAQ 并不是内容堆砌，它常常是降低疑虑成本最有效的一页。',
            ],
          },
          {
            title: '联系方式要明确，而且要低门槛',
            paragraphs: [
              '如果联系入口太少、太深或太复杂，访客即使有兴趣也可能先离开。',
              '更好的做法通常是让联系动作足够清楚、低门槛，再在后续沟通中补更细信息。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '信任信息不是陪衬，而是询盘路径的一部分。',
          'FAQ 和合作方式说明通常能明显降低犹豫。',
          '联系方式越清楚、门槛越低，继续联系的概率通常越高。',
        ],
        ctaTitle: '如果你的外贸网站询盘不顺，先看是不是信任信息没讲清楚',
        ctaDescription: '公司信息、FAQ、合作流程和联系入口一旦补顺，很多转化问题都会更容易找到原因。',
      },
      en: {
        navLabel: 'What Trust Signals Belong on a Foreign Trade Website?',
        categoryLabel: 'Foreign Trade Website',
        metaTitle: 'What Trust Signals Should a Foreign Trade Website Include? | Zhicheng Studio',
        metaDescription:
          'Trust signals on foreign trade websites often matter as much as product pages. This article explains what company, FAQ, process, and contact information helps visitors continue.',
        keywords: ['foreign trade website trust signals', 'B2B website FAQ', 'export website inquiry trust'],
        eyebrow: 'Article',
        heroTitle: 'Trust signals often decide whether foreign trade visitors continue the conversation',
        heroDescription:
          'Foreign trade sites often focus heavily on products and visuals while under-explaining whether the business feels reliable, how cooperation works, and what happens after contact. That missing layer often hurts inquiry more than teams expect.',
        introTitle: 'Why trust signals matter so much here',
        introParagraphs: [
          'International visitors usually have more information uncertainty, which makes trust-building through the site more important.',
          'Sometimes the product is already strong enough, but the site never gives enough reassurance to move forward.',
        ],
        sections: [
          {
            title: 'Basic company and cooperation information should be clear',
            paragraphs: [
              'Company scope, service range, cooperation process, response style, and contact methods all help answer “is this business worth engaging with further?”',
              'If those basics stay vague, deeper product information often cannot compensate for the trust gap.',
            ],
          },
          {
            title: 'FAQ and delivery explanation reduce hesitation',
            paragraphs: [
              'Customization, lead time, communication flow, delivery expectations, and maintenance are all strong FAQ topics.',
              'They do not only add content. They lower uncertainty at exactly the stage where visitors hesitate most.',
            ],
          },
          {
            title: 'Contact options should stay clear and low-friction',
            paragraphs: [
              'If contact paths are too hidden or too demanding, interested visitors may still leave.',
              'A clearer and lower-friction contact step usually works better than asking for too much too soon.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'Trust signals are part of the inquiry path, not decoration.',
          'FAQ and process explanations often reduce hesitation significantly.',
          'Clear, low-friction contact options usually improve continuation rate.',
        ],
        ctaTitle: 'If inquiry feels weak, check whether the trust layer is missing',
        ctaDescription: 'Company clarity, FAQ, process explanation, and contact flow often explain more of the conversion problem than teams expect.',
      },
    },
  },
  'manufacturing-company-website-planning': {
    slug: 'manufacturing-company-website-planning',
    priority: {
      zh: 0.64,
      en: 0.5,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['company-website-development', 'website-development'],
    content: {
      zh: {
        navLabel: '制造业企业官网怎么规划，才不会只剩企业介绍和几张设备图',
        categoryLabel: '行业场景',
        metaTitle: '制造业企业官网怎么规划？结构与内容方向参考｜致诚工作室',
        metaDescription:
          '制造业企业官网怎么规划，重点在产品表达、产能能力、应用场景和询盘路径。本文拆解更适合制造业官网的结构思路。',
        keywords: ['制造业企业官网', '制造业官网怎么做', '工厂官网规划', '企业官网开发'],
        eyebrow: 'Article',
        heroTitle: '制造业企业官网怎么规划，才不会最后只剩企业介绍和几张设备图',
        heroDescription:
          '制造业官网最常见的问题，不是页面少，而是信息全都停留在“我们是谁”。如果产品能力、应用场景、产线实力和合作方式都没有讲清楚，官网很难真正承担获客和对外表达的职责。',
        introTitle: '为什么制造业官网常常看上去完整，实际上信息却不够用',
        introParagraphs: [
          '很多制造业官网会把重点放在公司简介、厂房图片和设备展示上，但客户真正关心的是你能做什么、适合什么场景、交付能力怎么样。',
          '如果这些关键信息没有结构化承载，官网就很容易变成一份“企业介绍册”，而不是能支持询盘的业务入口。',
        ],
        sections: [
          {
            title: '产品能力和应用场景要优先于空泛介绍',
            paragraphs: [
              '客户更想快速知道你做哪些产品、能解决什么问题、适合哪些行业，而不是先看很长的企业背景。',
              '所以产品页、行业页和应用场景说明，通常应该比长篇公司介绍更早进入页面结构。',
            ],
          },
          {
            title: '产能、交付和质量能力要讲清楚',
            paragraphs: [
              '制造业客户会天然关心产能、交期、质量控制、合作流程和定制能力，这些信息越清楚，越容易建立信任。',
              '官网如果完全不讲这些，只展示图片和口号，询盘会明显受影响。',
            ],
          },
          {
            title: '联系路径不能只放在最底部',
            paragraphs: [
              '如果客户已经看到了产品和场景，就应该能更快进入询盘或继续沟通，而不是还要到很深的位置才能找到联系入口。',
              '制造业官网更适合在产品页、场景页和首页中段都提前放好下一步动作。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '制造业官网不能只讲企业介绍，还要讲产品、场景和交付能力。',
          '产能、质量和合作方式是重要信任信息，不该被弱化。',
          '联系入口应该跟着业务内容走，而不是只留在页面底部。',
        ],
        ctaTitle: '如果你在做制造业官网，先把产品、场景和交付能力排进结构里',
        ctaDescription: '只要先把客户最关心的三层信息理清楚，官网的表达效率和询盘效率都会提升很多。',
      },
      en: {
        navLabel: 'How to Structure a Manufacturing Company Website',
        categoryLabel: 'Industry',
        metaTitle: 'How to Structure a Manufacturing Company Website | Zhicheng Studio',
        metaDescription:
          'Manufacturing websites need more than company profiles and factory photos. This article explains how to structure products, capability, trust cues, and inquiry flow more effectively.',
        keywords: ['manufacturing company website', 'factory website structure', 'company website planning'],
        eyebrow: 'Article',
        heroTitle: 'A manufacturing company website should explain products, capability, and fit more clearly',
        heroDescription:
          'Many manufacturing sites look complete on the surface but still fail to support inquiry because they focus too heavily on company introduction and not enough on product, application fit, and delivery capability.',
        introTitle: 'Why many manufacturing websites feel complete but still weak',
        introParagraphs: [
          'Factory photos and company profiles matter, but buyers often care more about what you can produce, what industries you serve, and how cooperation works.',
          'If those layers are missing or buried too deeply, the website feels more like a brochure than a useful business entry point.',
        ],
        sections: [
          {
            title: 'Product capability and use case fit should appear early',
            paragraphs: [
              'Visitors usually want to understand what products you offer, what problems they solve, and which industries or applications they fit.',
              'That often makes product and scenario pages more important than long company background sections.',
            ],
          },
          {
            title: 'Production and delivery capability build trust',
            paragraphs: [
              'Capacity, lead time, quality process, customization ability, and cooperation method are all part of manufacturing credibility.',
              'If the site avoids those topics, it leaves too much uncertainty for a buyer.',
            ],
          },
          {
            title: 'Inquiry paths should follow the business content',
            paragraphs: [
              'Once a visitor has understood the product and fit, the next step should be easy to find.',
              'That usually means placing inquiry entry points inside homepage, product, and scenario layers instead of hiding them only at the bottom.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'Manufacturing sites need product, scenario, and delivery clarity, not only a company profile.',
          'Capability and quality information are important trust cues.',
          'Inquiry flow should appear where business interest deepens, not only at the very end.',
        ],
        ctaTitle: 'If you are planning a manufacturing website, start with product, fit, and delivery clarity',
        ctaDescription: 'Once those three layers are structured well, both understanding and inquiry quality usually improve.',
      },
    },
  },
  'service-business-website-lead-generation': {
    slug: 'service-business-website-lead-generation',
    priority: {
      zh: 0.64,
      en: 0.5,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['company-website-development', 'website-development'],
    content: {
      zh: {
        navLabel: '服务型公司官网怎么做获客，不只是把联系方式放出来',
        categoryLabel: '行业场景',
        metaTitle: '服务型公司官网怎么做获客？官网转化结构参考｜致诚工作室',
        metaDescription:
          '服务型公司官网做获客，重点在服务表达、信任信息、FAQ 和联系路径，而不只是把电话微信挂上去。本文拆解更有效的官网结构。',
        keywords: ['服务型公司官网获客', '官网转化', '服务公司网站', '企业官网开发'],
        eyebrow: 'Article',
        heroTitle: '服务型公司官网怎么做获客，不只是把联系方式放出来',
        heroDescription:
          '很多服务型公司的官网最大的问题不是没人看，而是看完以后还不够想联系。真正影响获客的，往往是服务讲得清不清楚、信任信息够不够、常见疑虑有没有提前回答，而不是按钮够不够多。',
        introTitle: '为什么服务型公司官网经常只有展示，没有转化',
        introParagraphs: [
          '因为很多官网只是把“公司介绍、服务列表、联系方式”排了一遍，却没有真正围绕客户决策路径去组织内容。',
          '客户在联系前通常会先判断：你是不是专业、是不是适合我、合作会不会麻烦。官网如果不能回答这些，就很难带来高质量询盘。',
        ],
        sections: [
          {
            title: '服务页要比首页更能承接决策',
            paragraphs: [
              '首页负责快速概览，真正承接客户判断的通常是服务页。服务页应该讲清适合谁、怎么做、能解决什么问题、合作流程是什么。',
              '如果服务页只是重复一句服务名称，很难真正支持获客。',
            ],
          },
          {
            title: '信任信息和 FAQ 会明显影响联系意愿',
            paragraphs: [
              '背景经验、交付方式、维护承诺、常见问题和合作边界，都会直接影响客户是否愿意继续沟通。',
              '很多时候不是客户没有兴趣，而是还没被说服到足够安心。',
            ],
          },
          {
            title: '联系入口要顺，不要打断理解路径',
            paragraphs: [
              '联系入口需要清楚，但更重要的是时机和位置。客户理解到一定程度之后，再进入联系动作，通常比一开始就疯狂催促更有效。',
              '所以按钮不是越多越好，而是要跟着内容节奏出现。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '服务型公司官网获客，关键在服务页、FAQ 和信任信息。',
          '联系入口要顺着理解路径出现，而不是一味堆按钮。',
          '客户是否联系，通常取决于是否被解释清楚和说服到足够安心。',
        ],
        ctaTitle: '如果你在做服务型公司官网，先把决策路径讲顺',
        ctaDescription: '只要把服务说明、疑虑解答和联系动作衔接好，官网的获客效率通常会明显提升。',
      },
      en: {
        navLabel: 'How a Service Business Website Supports Lead Generation',
        categoryLabel: 'Industry',
        metaTitle: 'How a Service Business Website Supports Lead Generation | Zhicheng Studio',
        metaDescription:
          'Service-business websites generate better leads when service explanation, trust cues, FAQ, and contact flow are structured clearly instead of relying on contact buttons alone.',
        keywords: ['service business website leads', 'company website conversion', 'service website structure'],
        eyebrow: 'Article',
        heroTitle: 'A service business website should move visitors toward confidence before contact',
        heroDescription:
          'Many service websites are not failing because nobody visits them, but because the content never builds enough clarity and confidence to make contact feel worthwhile.',
        introTitle: 'Why service websites often display well but convert weakly',
        introParagraphs: [
          'Many service companies arrange company intro, services, and contact information in a familiar way, but never truly align the site to the client decision path.',
          'Before reaching out, clients are usually judging expertise, fit, and whether the cooperation process feels manageable.',
        ],
        sections: [
          {
            title: 'Service pages often carry the real decision-making weight',
            paragraphs: [
              'The homepage should give direction, but service pages usually do the real work of helping visitors judge fit, process, and relevance.',
              'If service pages only repeat a service name without depth, lead quality tends to stay weak.',
            ],
          },
          {
            title: 'Trust cues and FAQ influence contact willingness strongly',
            paragraphs: [
              'Experience, delivery method, maintenance expectations, FAQ content, and cooperation boundaries all affect whether a visitor feels safe continuing.',
              'Sometimes the problem is not lack of interest, but lack of reassurance.',
            ],
          },
          {
            title: 'Contact flow should support the understanding path',
            paragraphs: [
              'Contact options should be clear, but their timing and placement matter just as much as their visibility.',
              'Calls to action usually work better when they follow growing understanding rather than interrupting it too early.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'Lead generation on service websites depends heavily on service depth, trust, and FAQ content.',
          'Contact flow should support the visitor’s understanding path instead of forcing it too early.',
          'Visitors reach out more readily when the site explains fit and reduces uncertainty first.',
        ],
        ctaTitle: 'If you are improving a service website, start by clarifying the decision path',
        ctaDescription: 'Once services, objections, and contact flow work together, lead generation usually becomes much stronger.',
      },
    },
  },
  'saas-website-page-structure': {
    slug: 'saas-website-page-structure',
    priority: {
      zh: 0.64,
      en: 0.5,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['website-development', 'company-website-development'],
    content: {
      zh: {
        navLabel: 'SaaS 官网应该有哪些页面，才更适合产品说明和转化',
        categoryLabel: '行业场景',
        metaTitle: 'SaaS 官网应该有哪些页面？结构参考｜致诚工作室',
        metaDescription:
          'SaaS 官网应该有哪些页面，取决于产品复杂度、试用路径和客户决策逻辑。本文整理首页、功能页、定价页、FAQ 和文档入口的常见结构。',
        keywords: ['SaaS 官网页面', 'SaaS 官网结构', '产品官网怎么做', '网站开发'],
        eyebrow: 'Article',
        heroTitle: 'SaaS 官网应该有哪些页面，才更适合产品说明和转化',
        heroDescription:
          'SaaS 官网和普通企业官网不太一样，它不仅要展示品牌，还要解释产品逻辑、功能价值、适合对象和试用路径。如果页面结构没搭对，产品看起来就会很难理解。',
        introTitle: '为什么 SaaS 官网很容易讲不清产品',
        introParagraphs: [
          '因为 SaaS 产品通常带有一定抽象性，只靠首页和一句口号很难把价值讲清楚。',
          '如果官网结构没有把功能、场景、FAQ、定价和试用入口拆出来，用户理解和转化都会受到影响。',
        ],
        sections: [
          {
            title: '首页负责定调，功能页负责解释产品',
            paragraphs: [
              '首页应该快速说明产品做什么、适合谁、核心价值是什么，但功能细节通常要拆到更具体的功能页或场景页里。',
              '如果所有内容都压在首页，页面会又长又难读。',
            ],
          },
          {
            title: '定价、FAQ 和试用路径不能太晚出现',
            paragraphs: [
              'SaaS 用户往往很快就会关心价格、试用方式、集成能力和上手门槛，这些信息越晚出现，流失越早。',
              '所以官网通常要在结构上尽早给出这些答案。',
            ],
          },
          {
            title: '文档、帮助和信任内容也是一部分',
            paragraphs: [
              '对于稍复杂一点的产品，帮助中心、文档入口、客户类型和安全合规信息，也都是很关键的信任层。',
              '这些页面不一定一开始都做满，但结构上最好先留出来。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          'SaaS 官网通常需要比普通官网更细的页面分工。',
          '功能页、定价页、FAQ 和试用路径都很关键。',
          '复杂产品越需要把帮助和信任层一起规划进去。',
        ],
        ctaTitle: '如果你正在做 SaaS 官网，先把产品解释路径拆出来',
        ctaDescription: '首页、功能页、FAQ、定价和试用入口一旦分工清楚，官网的理解和转化效率都会提升。',
      },
      en: {
        navLabel: 'What Pages Should a SaaS Website Include?',
        categoryLabel: 'Industry',
        metaTitle: 'What Pages Should a SaaS Website Include? | Zhicheng Studio',
        metaDescription:
          'A SaaS website usually needs more page structure than a standard company site. This article covers homepage, feature pages, pricing, FAQ, and support layers.',
        keywords: ['SaaS website pages', 'SaaS website structure', 'product website planning'],
        eyebrow: 'Article',
        heroTitle: 'A SaaS website usually needs a clearer page structure than a standard company site',
        heroDescription:
          'A SaaS website needs to do more than present a brand. It has to explain product logic, feature value, fit, pricing, and the next user step clearly enough that the product does not feel abstract.',
        introTitle: 'Why SaaS websites often struggle to explain the product',
        introParagraphs: [
          'Many SaaS products carry a certain level of abstraction, which means a homepage and a slogan rarely explain enough on their own.',
          'If feature, pricing, FAQ, and trial paths are not broken into clearer layers, understanding and conversion both suffer.',
        ],
        sections: [
          {
            title: 'The homepage sets direction, feature pages do the deeper explanation',
            paragraphs: [
              'The homepage should explain what the product is for, who it fits, and why it matters, but the deeper explanation often belongs on feature or scenario pages.',
              'If everything is forced onto one page, the result often becomes long and difficult to digest.',
            ],
          },
          {
            title: 'Pricing, FAQ, and trial path should appear earlier',
            paragraphs: [
              'SaaS visitors quickly start asking about pricing, onboarding, integrations, and trial flow.',
              'Those answers should not be buried too deeply or the site will lose momentum fast.',
            ],
          },
          {
            title: 'Documentation and trust layers matter too',
            paragraphs: [
              'For more complex products, help content, docs, customer-type proof, and security information are also important trust layers.',
              'They do not all need to be perfect on day one, but the structure should leave room for them.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'SaaS websites usually need clearer page roles than standard company sites.',
          'Feature, pricing, FAQ, and trial pages are often critical.',
          'More complex products benefit from planned support and trust layers early.',
        ],
        ctaTitle: 'If you are planning a SaaS website, start by separating the product explanation path',
        ctaDescription: 'Once homepage, feature pages, FAQ, pricing, and trial flow have clearer roles, both comprehension and conversion improve.',
      },
    },
  },
  'foreign-trade-about-page-writing': {
    slug: 'foreign-trade-about-page-writing',
    priority: {
      zh: 0.64,
      en: 0.5,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['foreign-trade-website-development', 'company-website-development'],
    content: {
      zh: {
        navLabel: '外贸网站 About 页面怎么写，才不会只剩空泛介绍',
        categoryLabel: '外贸网站',
        metaTitle: '外贸网站 About 页面怎么写？更有说服力的写法参考｜致诚工作室',
        metaDescription:
          '外贸网站 About 页面怎么写，重点不只是介绍公司，而是补信任、说明合作方式和让访客更愿意继续联系。本文拆解更稳的写法。',
        keywords: ['外贸网站 About', '外贸官网公司介绍', '外贸网站怎么写', '外贸网站开发'],
        eyebrow: 'Article',
        heroTitle: '外贸网站 About 页面怎么写，才不会最后只剩空泛的公司介绍',
        heroDescription:
          '很多外贸网站 About 页面的问题，不是信息太少，而是讲了很多“我们是谁”，却没有真正回答访客最关心的“你靠不靠谱、合作会不会顺、为什么值得继续联系”。',
        introTitle: '为什么 About 页面经常看起来完整，却没什么说服力',
        introParagraphs: [
          '因为很多 About 页面写法偏内部口径，像一份企业简介，而不是一页面向潜在客户的信任说明。',
          '访客进入 About 页面，通常不是为了看一段历史，而是为了判断这个团队是否值得继续接触。',
        ],
        sections: [
          {
            title: '先讲和客户判断最相关的信息',
            paragraphs: [
              '主营业务、服务范围、主要市场、团队能力和合作方式，通常比很长的企业发展历程更优先。',
              '如果顺序排对了，About 页面会更像一个信任入口，而不是一份流水账。',
            ],
          },
          {
            title: '让公司介绍和合作方式连起来',
            paragraphs: [
              '客户不是只想知道你是谁，还想知道跟你合作会是什么体验。这个时候响应方式、流程、维护、交付边界都很重要。',
              '这些信息放在 About 页面里，往往能明显增加继续联系的意愿。',
            ],
          },
          {
            title: '适度加入证明，而不是只用形容词',
            paragraphs: [
              '比起一堆“专业、优质、领先”，更有说服力的通常是更具体的能力证明和合作背景。',
              'About 页面真正要做的，是把抽象信任变成更容易判断的具体信息。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          'About 页面不是内部简介，而是面对客户的信任页面。',
          '业务、能力和合作方式通常比时间线更重要。',
          '具体信息和证明，比抽象形容词更有说服力。',
        ],
        ctaTitle: '如果你正在写 About 页面，先想清楚客户最想确认什么',
        ctaDescription: '把公司介绍写成信任说明，而不是流水账，页面会更容易真正发挥作用。',
      },
      en: {
        navLabel: 'How to Write an About Page for a Foreign Trade Website',
        categoryLabel: 'Foreign Trade Website',
        metaTitle: 'How to Write a Better About Page for a Foreign Trade Website | Zhicheng Studio',
        metaDescription:
          'A stronger About page for a foreign trade website should build trust, explain cooperation, and support contact willingness instead of acting like a generic company history page.',
        keywords: ['foreign trade about page', 'B2B about page writing', 'export website trust page'],
        eyebrow: 'Article',
        heroTitle: 'A strong About page should help visitors trust the business, not only read a company intro',
        heroDescription:
          'Many About pages say a lot about who the company is, but not enough about why the visitor should trust it, how cooperation works, and whether it feels worth contacting.',
        introTitle: 'Why many About pages feel complete but not persuasive',
        introParagraphs: [
          'They are often written like internal company summaries instead of trust pages for potential clients.',
          'Visitors usually arrive on an About page not because they want a company timeline, but because they want reassurance.',
        ],
        sections: [
          {
            title: 'Lead with the information that supports judgment',
            paragraphs: [
              'Core business, service range, target market, delivery ability, and cooperation style are often more helpful than a long historical introduction.',
              'When the order is right, the About page starts to function like a trust layer instead of a chronology.',
            ],
          },
          {
            title: 'Connect company identity with cooperation experience',
            paragraphs: [
              'Visitors are not only asking who you are. They are also asking what working with you will feel like.',
              'That makes response style, process, support, and delivery boundaries relevant inside the About page too.',
            ],
          },
          {
            title: 'Use proof instead of adjectives whenever possible',
            paragraphs: [
              'Specific capability proof and concrete working context usually persuade better than strings of words like “professional”, “reliable”, or “leading”.',
              'The About page works best when it turns abstract trust into clearer evidence.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'An About page should function as a trust page, not only as a company summary.',
          'Business scope, capability, and working style often matter more than a timeline.',
          'Specific proof persuades better than abstract adjectives.',
        ],
        ctaTitle: 'If you are writing an About page, start from what the visitor needs to trust',
        ctaDescription: 'An About page becomes much more useful when it is written as reassurance instead of internal summary.',
      },
    },
  },
  'mini-program-and-website-relationship': {
    slug: 'mini-program-and-website-relationship',
    priority: {
      zh: 0.64,
      en: 0.5,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['mini-program-development', 'website-development'],
    content: {
      zh: {
        navLabel: '官网和小程序怎么配合，才不会两边各做各的',
        categoryLabel: '小程序',
        metaTitle: '官网和小程序怎么配合？分工与协同参考｜致诚工作室',
        metaDescription:
          '官网和小程序怎么配合，关键在于一个负责品牌与搜索，一个负责交易与高频动作。本文拆解两者更合适的分工方式。',
        keywords: ['官网和小程序怎么配合', '小程序和官网分工', '小程序开发', '网站开发'],
        eyebrow: 'Article',
        heroTitle: '官网和小程序怎么配合，才不会最后两边各做各的',
        heroDescription:
          '官网和小程序同时做时，最容易出现的问题不是重复开发，而是职责混乱。用户该从哪一端进入、哪一端负责品牌表达、哪一端负责交易和高频动作，如果这些不清楚，两边很容易都做得不够好。',
        introTitle: '为什么官网和小程序经常一起做，却没真正配合起来',
        introParagraphs: [
          '因为很多项目只是把两个载体都做出来，却没有先想清楚谁负责搜索和品牌，谁负责交易和高频使用。',
          '如果分工不清，内容会重复、维护会增加、用户也更容易困惑。',
        ],
        sections: [
          {
            title: '官网更适合承接品牌和搜索',
            paragraphs: [
              '官网更适合放品牌表达、服务说明、文章内容、多语言页面和长期 SEO 结构。',
              '它更像一个公开的内容和信任入口，适合第一次认识你的用户。',
            ],
          },
          {
            title: '小程序更适合承接高频动作',
            paragraphs: [
              '下单、预约、支付、查询、会员动作这类高频操作，通常更适合放在小程序里。',
              '因为小程序更接近实际使用场景，用户操作成本也更低。',
            ],
          },
          {
            title: '两边最重要的是路径打通',
            paragraphs: [
              '官网要能自然把用户引导到小程序，小程序也要能承接官网带来的流量和信任。',
              '真正有效的不是“两边都有”，而是两边之间有没有清晰的分工和跳转路径。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '官网更适合品牌、内容和搜索，小程序更适合交易和高频动作。',
          '两边最怕职责重叠、入口混乱。',
          '真正有效的是分工清楚、路径打通，而不是简单“两边都做”。',
        ],
        ctaTitle: '如果你同时要做官网和小程序，先把职责分工定下来',
        ctaDescription: '只要先明确谁负责品牌、谁负责动作、用户怎么来回走，两边的协同会顺很多。',
      },
      en: {
        navLabel: 'How a Website and Mini-program Should Work Together',
        categoryLabel: 'Mini-program',
        metaTitle: 'How a Website and Mini-program Should Work Together | Zhicheng Studio',
        metaDescription:
          'A website and a mini-program should not duplicate each other. This article explains a clearer split between brand/search entry and transaction/high-frequency operations.',
        keywords: ['website and mini-program', 'mini-program strategy', 'website mini-program split'],
        eyebrow: 'Article',
        heroTitle: 'A website and a mini-program work best when their roles are clearly separated',
        heroDescription:
          'When teams build both a website and a mini-program, the main risk is often unclear role overlap rather than technical duplication. If each side does not have a clear job, both end up weaker.',
        introTitle: 'Why these two channels often fail to support each other',
        introParagraphs: [
          'Many projects launch both assets without defining which one owns brand and search, and which one owns repeated actions and transaction flow.',
          'That usually creates duplicated content, higher maintenance cost, and weaker user clarity.',
        ],
        sections: [
          {
            title: 'Websites usually fit brand and search better',
            paragraphs: [
              'The website is usually the stronger place for brand expression, service explanation, multilingual content, articles, and long-term SEO structure.',
              'It works more like a public-facing content and trust layer for first-time visitors.',
            ],
          },
          {
            title: 'Mini-programs usually fit high-frequency actions better',
            paragraphs: [
              'Ordering, booking, payment, account actions, and recurring interactions often fit better inside a mini-program.',
              'The mini-program is usually closer to the actual usage context and lower-friction action flow.',
            ],
          },
          {
            title: 'The most important thing is the path between them',
            paragraphs: [
              'The website should be able to guide the right users into the mini-program naturally, while the mini-program should benefit from the trust the website built first.',
              'The real win is not “having both”, but having a clear split and clean movement between them.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'Websites are usually better for brand, content, and search.',
          'Mini-programs are usually better for transactions and repeated actions.',
          'The strongest setup is clear role split plus a smooth path between the two.',
        ],
        ctaTitle: 'If you are building both, define the role split first',
        ctaDescription: 'Once brand, action, and traffic flow are assigned clearly, the website and mini-program usually reinforce each other much better.',
      },
    },
  },
  'education-training-website-planning': {
    slug: 'education-training-website-planning',
    priority: {
      zh: 0.62,
      en: 0.49,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['company-website-development', 'mini-program-development', 'website-development'],
    content: {
      zh: {
        navLabel: '教育培训类官网怎么规划，才不会只剩课程列表',
        categoryLabel: '行业场景',
        metaTitle: '教育培训类官网怎么规划？课程、信任与转化结构参考｜致诚工作室',
        metaDescription:
          '教育培训类官网怎么规划，重点不只是展示课程，还要讲清课程价值、适合对象、师资、流程和报名路径。本文拆解更稳的网站结构。',
        keywords: ['教育培训官网', '培训网站怎么做', '课程官网结构', '教育网站开发'],
        eyebrow: 'Article',
        heroTitle: '教育培训类官网怎么规划，才不会最后只剩一堆课程列表',
        heroDescription:
          '教育培训类网站最常见的问题，不是没有内容，而是内容都堆成了列表。课程价值、适合对象、师资背景、学习流程和报名动作如果没有被结构化承接，访客很难形成清晰判断。',
        introTitle: '为什么教育培训网站最容易看起来内容很多，却不够转化',
        introParagraphs: [
          '因为课程信息、老师信息、学习结果和报名动作经常被拆散，访客看完并没有被真正带着往下走。',
          '一个更有效的培训类官网，应该先建立理解和信任，再推动咨询和报名，而不是一上来就只列课表。',
        ],
        sections: [
          {
            title: '课程页面要先解释价值和适合谁',
            paragraphs: [
              '课程名称和目录固然重要，但访客更在意的是这门课适合谁、能解决什么问题、学完能得到什么结果。',
              '如果这些问题没有先回答，课程再多也很难形成报名动机。',
            ],
          },
          {
            title: '老师与学习流程要承担信任作用',
            paragraphs: [
              '教育培训项目里，师资背景、教学方式、学习节奏和服务支持会直接影响是否愿意继续咨询。',
              '这些信息应该是结构中的重点，而不是放在很深的位置才出现。',
            ],
          },
          {
            title: '报名入口和沟通路径要更顺',
            paragraphs: [
              '如果课程看完还不知道该怎么报名、怎么试听、怎么继续问问题，转化会直接卡住。',
              '教育培训官网通常要尽早把试听、咨询、报名入口和常见问题组织好。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '培训类官网不能只堆课程列表，更要解释课程价值和适配对象。',
          '师资、学习流程和服务支持是重要信任层。',
          '报名路径越清楚，官网越容易真正支持转化。',
        ],
        ctaTitle: '如果你在做教育培训官网，先把课程价值和报名路径排顺',
        ctaDescription: '课程、师资、FAQ 和报名入口一旦分工清楚，网站的转化效率通常会明显提升。',
      },
      en: {
        navLabel: 'How to Structure an Education or Training Website',
        categoryLabel: 'Industry',
        metaTitle: 'How to Structure an Education or Training Website | Zhicheng Studio',
        metaDescription:
          'Education and training websites need more than course lists. This article explains how to structure course value, audience fit, teaching trust, and conversion flow more clearly.',
        keywords: ['education website structure', 'training website planning', 'course website'],
        eyebrow: 'Article',
        heroTitle: 'An education website should explain value and trust, not only list courses',
        heroDescription:
          'Training websites often carry plenty of content and still convert weakly because the course value, fit, teaching trust, and next-step path are not structured clearly.',
        introTitle: 'Why training websites often feel full but still weak',
        introParagraphs: [
          'Course lists, teacher info, outcomes, and signup steps are often disconnected from each other, so visitors are left to figure out the journey on their own.',
          'A stronger education website builds understanding and trust first, then moves visitors toward inquiry or enrollment.',
        ],
        sections: [
          {
            title: 'Course pages should explain fit and value before detail overload',
            paragraphs: [
              'Visitors usually need to know who the course is for, what problem it solves, and what result it can create before they care about every lesson detail.',
              'That explanation often drives motivation more than the syllabus alone.',
            ],
          },
          {
            title: 'Teaching trust and learning flow matter a lot',
            paragraphs: [
              'Teacher background, delivery method, support, and learning rhythm often influence whether visitors continue much more than many teams expect.',
              'Those are not minor details. They are core trust layers for education products.',
            ],
          },
          {
            title: 'The sign-up and consultation path should stay obvious',
            paragraphs: [
              'If visitors finish reading and still do not know how to enroll, book a trial, or ask a question, conversion will stall immediately.',
              'Training websites usually benefit from placing trial, inquiry, and FAQ paths much earlier and more clearly.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'Training websites need more than course lists.',
          'Teaching trust, fit, and learning flow are major conversion factors.',
          'A clearer enrollment path usually improves website effectiveness significantly.',
        ],
        ctaTitle: 'If you are planning a training website, structure course value and enrollment flow first',
        ctaDescription: 'Once course fit, trust signals, FAQ, and the enrollment path are organized clearly, conversion usually improves a lot.',
      },
    },
  },
  'consulting-company-website-copy': {
    slug: 'consulting-company-website-copy',
    priority: {
      zh: 0.62,
      en: 0.49,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['company-website-development', 'website-development'],
    content: {
      zh: {
        navLabel: '咨询类公司官网怎么写，才不会看起来空又虚',
        categoryLabel: '行业场景',
        metaTitle: '咨询类公司官网怎么写？文案与结构参考｜致诚工作室',
        metaDescription:
          '咨询类公司官网怎么写，重点在于讲清服务对象、方法、案例逻辑和合作方式，而不是只堆很多抽象词。本文拆解更稳的官网写法。',
        keywords: ['咨询公司官网', '咨询类官网怎么写', '服务型公司官网文案', '企业官网开发'],
        eyebrow: 'Article',
        heroTitle: '咨询类公司官网怎么写，才不会最后看起来空又虚',
        heroDescription:
          '咨询类网站最容易出现的问题，是满页都在说“专业、领先、战略、赋能”，但客户看完还是不知道到底服务谁、怎么做、有什么实际区别。文案和结构如果不具体，网站就很难建立信任。',
        introTitle: '为什么咨询类官网特别容易写得抽象',
        introParagraphs: [
          '因为咨询服务本身偏抽象，团队很容易想用更高概念的表达去包装它。',
          '但真正的潜在客户，更关心的是你解决什么问题、用什么方式、适合什么阶段、合作起来会是什么样子。',
        ],
        sections: [
          {
            title: '先讲服务对象和问题，再讲方法',
            paragraphs: [
              '客户通常会先判断“你是不是适合我”，所以服务对象、典型问题和适用阶段，通常应该比方法论更早出现。',
              '如果一开始就全是抽象框架，访客很容易快速失焦。',
            ],
          },
          {
            title: '案例逻辑和合作方式能显著增加可信度',
            paragraphs: [
              '咨询服务很难只靠一句话证明自己，所以更需要把思路、合作流程和典型项目逻辑讲清楚。',
              '只要案例不能公开客户名，也依然可以讲行业、问题类型、推进方式和结果变化。',
            ],
          },
          {
            title: '少用抽象口号，多用可判断的信息',
            paragraphs: [
              '抽象词可以作为辅助，但不能成为主体。更有效的内容通常是：服务边界、合作方式、工作节奏、典型结果和 FAQ。',
              '咨询类官网越具体，越容易让客户继续往下聊。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '咨询类官网最怕抽象词太多、可判断信息太少。',
          '服务对象、问题类型和合作方式通常比口号更重要。',
          '具体的信息和案例逻辑更容易建立信任。',
        ],
        ctaTitle: '如果你在做咨询类官网，先把“服务谁、怎么做”写具体',
        ctaDescription: '只要把对象、问题和合作方式讲清楚，官网会比堆很多口号更有说服力。',
      },
      en: {
        navLabel: 'How a Consulting Company Website Should Explain Itself',
        categoryLabel: 'Industry',
        metaTitle: 'How a Consulting Company Website Should Explain Itself | Zhicheng Studio',
        metaDescription:
          'Consulting websites work better when they explain audience fit, problem type, service logic, and cooperation flow instead of relying too heavily on abstract language.',
        keywords: ['consulting company website', 'consulting website copy', 'service website messaging'],
        eyebrow: 'Article',
        heroTitle: 'A consulting website should sound specific enough to be trusted',
        heroDescription:
          'Consulting websites often become too abstract. They talk about strategy, growth, and transformation, but never explain clearly who they help, how they work, and what makes them a real fit.',
        introTitle: 'Why consulting websites become vague so easily',
        introParagraphs: [
          'Consulting services are naturally abstract, which tempts teams to describe them with even more abstract language.',
          'Potential clients, however, usually care much more about fit, problem type, process, and expected working rhythm.',
        ],
        sections: [
          {
            title: 'Start with audience fit and problem type',
            paragraphs: [
              'Visitors usually ask “is this for a business like mine?” before they care about frameworks or methodology.',
              'That makes audience fit, problem type, and business stage more important early in the structure.',
            ],
          },
          {
            title: 'Case logic and cooperation flow build credibility',
            paragraphs: [
              'Consulting cannot rely on one-line claims alone. The site usually needs to explain how work is structured, how collaboration happens, and what kinds of results or changes occur.',
              'Even when client names cannot be shown, the logic and shape of the work can still be explained clearly.',
            ],
          },
          {
            title: 'Replace slogan-heavy language with judgment-friendly information',
            paragraphs: [
              'Abstract positioning can support the page, but should not dominate it.',
              'Service boundaries, process, FAQ, working rhythm, and realistic outcomes usually build trust much faster.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'Consulting websites often lose trust when they become too abstract.',
          'Audience fit, problem type, and cooperation flow usually matter more than slogans.',
          'Specific information is easier to trust than positioning language alone.',
        ],
        ctaTitle: 'If you are planning a consulting website, make the fit and process specific',
        ctaDescription: 'Clearer audience fit, problem framing, and cooperation flow usually outperform abstract positioning language.',
      },
    },
  },
  'ai-product-website-messaging': {
    slug: 'ai-product-website-messaging',
    priority: {
      zh: 0.62,
      en: 0.49,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['website-development', 'company-website-development'],
    content: {
      zh: {
        navLabel: 'AI 产品官网怎么写，才不会只剩“智能”“高效”这些词',
        categoryLabel: '行业场景',
        metaTitle: 'AI 产品官网怎么写？AI 产品官网文案与结构参考｜致诚工作室',
        metaDescription:
          'AI 产品官网怎么写，重点是把产品用途、适用人群、工作方式和结果讲清楚，而不是反复堆“智能”“高效”。本文拆解更稳的写法。',
        keywords: ['AI 产品官网', 'AI 官网文案', 'AI 产品网站', '产品官网开发'],
        eyebrow: 'Article',
        heroTitle: 'AI 产品官网怎么写，才不会最后只剩“智能”“高效”这些词',
        heroDescription:
          'AI 产品官网最容易掉进一个坑：所有页面都在强调“智能、自动化、效率提升”，却没有把到底怎么工作、适合谁、能替代什么步骤讲清楚。结果页面看上去很前沿，理解门槛却很高。',
        introTitle: '为什么 AI 产品官网特别容易说得很热闹、却不够清楚',
        introParagraphs: [
          '因为 AI 本身容易让人先看概念，再看实际使用场景，团队也容易跟着强调能力名词而忽略用户理解路径。',
          '真正更有效的官网，应该先讲产品如何使用、适合谁、能省掉什么动作，再讲技术亮点。',
        ],
        sections: [
          {
            title: '先讲用户动作，再讲 AI 能力',
            paragraphs: [
              '用户更容易理解“上传什么、输入什么、得到什么结果”，而不是一长串模型和能力描述。',
              '所以官网更适合先从真实使用动作和输出结果切入。',
            ],
          },
          {
            title: '适用对象和边界一定要讲清楚',
            paragraphs: [
              'AI 产品常常不是所有人都适用。如果不讲清适合谁、不适合谁、边界在哪里，试用后的失望感会很强。',
              '官网如果能提前讲明白这些，反而更容易筛到真正匹配的用户。',
            ],
          },
          {
            title: '功能页和 FAQ 可以降低理解门槛',
            paragraphs: [
              '对于稍复杂一点的 AI 产品，功能页、FAQ 和使用示例通常非常重要。',
              '它们可以把抽象能力拆成更具体的问题和结果，帮助用户更快判断。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          'AI 官网不要只强调概念，要先讲使用动作和结果。',
          '适用对象和产品边界需要提前讲清楚。',
          '功能页、FAQ 和示例能显著降低理解门槛。',
        ],
        ctaTitle: '如果你在做 AI 产品官网，先把“怎么用、给谁用、能得到什么”讲顺',
        ctaDescription: '只要用户理解路径先排顺，后面的功能和亮点反而更容易被看懂。',
      },
      en: {
        navLabel: 'How an AI Product Website Should Explain the Product',
        categoryLabel: 'Industry',
        metaTitle: 'How to Write a Clearer AI Product Website | Zhicheng Studio',
        metaDescription:
          'AI product websites work better when they explain user flow, fit, and results clearly instead of leaning too heavily on broad terms like intelligent or efficient.',
        keywords: ['AI product website', 'AI website messaging', 'AI product landing page'],
        eyebrow: 'Article',
        heroTitle: 'An AI product website should explain use and fit before hype',
        heroDescription:
          'AI product sites often overuse words like intelligent, automated, and efficient while under-explaining how the product works, who it is for, and what it really replaces or improves.',
        introTitle: 'Why AI websites often sound exciting but stay unclear',
        introParagraphs: [
          'AI products naturally attract high-level language, which makes it easy to talk about capability before explaining user understanding.',
          'A stronger website usually starts with use, fit, and output before technical promise.',
        ],
        sections: [
          {
            title: 'Explain user action before AI capability',
            paragraphs: [
              'Visitors usually understand “what do I input, what happens, and what result do I get” faster than a long list of capability claims.',
              'That makes real interaction flow a better entry point than abstract capability wording.',
            ],
          },
          {
            title: 'Clarify fit and boundaries early',
            paragraphs: [
              'Many AI products are not equally suitable for everyone. If fit and limits stay unclear, disappointment rises after trial.',
              'A clearer website filters better-fit users earlier and creates stronger expectations.',
            ],
          },
          {
            title: 'Feature pages and FAQ reduce the learning barrier',
            paragraphs: [
              'For more complex AI products, feature pages, FAQ, and example outputs are often essential.',
              'They help turn abstract promise into clearer tasks, situations, and outcomes.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'AI websites should explain use and output before hype.',
          'Fit and boundaries need to be clear early.',
          'Feature pages, FAQ, and examples reduce understanding friction significantly.',
        ],
        ctaTitle: 'If you are planning an AI product website, explain how it is used first',
        ctaDescription: 'Once use, fit, and output are easier to understand, the product’s stronger points become much easier to appreciate.',
      },
    },
  },
  'b2b-industry-pages-planning': {
    slug: 'b2b-industry-pages-planning',
    priority: {
      zh: 0.62,
      en: 0.49,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['foreign-trade-website-development', 'company-website-development', 'website-development'],
    content: {
      zh: {
        navLabel: 'B2B 网站为什么值得做行业页，而不是只做产品页',
        categoryLabel: '行业场景',
        metaTitle: 'B2B 网站为什么要做行业页？行业页结构参考｜致诚工作室',
        metaDescription:
          'B2B 网站为什么值得做行业页，关键在于客户会按行业和场景来判断你是否适合。本文拆解行业页对内容结构、SEO 和转化的价值。',
        keywords: ['B2B 行业页', '行业页怎么做', 'B2B 网站结构', '外贸网站开发'],
        eyebrow: 'Article',
        heroTitle: 'B2B 网站为什么值得做行业页，而不是只做产品页',
        heroDescription:
          '很多 B2B 网站会把重点都放在产品页上，但客户做判断时往往不只是看产品，而是看你对他所在行业的理解够不够深。行业页正是承接这一层判断的内容入口。',
        introTitle: '为什么产品页不一定能回答行业问题',
        introParagraphs: [
          '产品页适合讲功能、参数和适用范围，但它不一定能充分解释某个行业的具体痛点、应用方式和合作逻辑。',
          '如果网站缺少行业页，这部分判断通常就只能留到销售沟通里再慢慢补。',
        ],
        sections: [
          {
            title: '行业页更适合讲场景和理解深度',
            paragraphs: [
              '客户往往更容易被“你理解我的行业问题”打动，而不只是“你有这个产品”。',
              '行业页可以专门讲场景、流程、常见问题和适配方式，这会让网站更像解决方案入口。',
            ],
          },
          {
            title: '行业页也更适合承接搜索词',
            paragraphs: [
              '很多搜索行为本来就是“行业 + 产品 / 方案 / 服务”组合，行业页能更自然地覆盖这些词。',
              '相比所有词都压在首页或产品页，行业页通常更适合承接长尾搜索。',
            ],
          },
          {
            title: '行业页和产品页应该互相配合',
            paragraphs: [
              '产品页讲产品本身，行业页讲行业问题和应用方式，这两种页面配合起来，网站结构会更完整。',
              '两边有内链时，也更利于用户继续深入浏览。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          'B2B 客户判断时通常会关心行业理解，而不只是产品能力。',
          '行业页更适合承接“行业 + 方案 / 服务”类搜索词。',
          '产品页和行业页配合，会让网站结构更完整。',
        ],
        ctaTitle: '如果你的网站主要面对 B2B 客户，可以考虑尽早规划行业页',
        ctaDescription: '行业页一旦搭起来，内容结构、搜索承接和销售沟通都会更顺。',
      },
      en: {
        navLabel: 'Why B2B Websites Benefit from Industry Pages',
        categoryLabel: 'Industry',
        metaTitle: 'Why B2B Websites Benefit from Industry Pages | Zhicheng Studio',
        metaDescription:
          'B2B websites often benefit from industry pages because buyers evaluate fit through industry context, not product detail alone. This article explains how industry pages help.',
        keywords: ['B2B industry pages', 'industry page planning', 'B2B website structure'],
        eyebrow: 'Article',
        heroTitle: 'B2B websites often need industry pages, not only product pages',
        heroDescription:
          'B2B buyers do not evaluate fit through products alone. They often look for evidence that the company understands their industry context, workflow, and specific challenges. Industry pages help support that judgment.',
        introTitle: 'Why product pages alone often leave a gap',
        introParagraphs: [
          'Product pages are useful for capability and scope, but they often do not explain the specific shape of a buyer’s industry problem well enough.',
          'Without industry pages, that context usually has to be rebuilt later in sales conversations.',
        ],
        sections: [
          {
            title: 'Industry pages carry scenario understanding better',
            paragraphs: [
              'Buyers are often persuaded more by “this company understands my workflow” than by “this company has a product.”',
              'Industry pages make space for scenario, process, and fit in a way product pages often cannot.',
            ],
          },
          {
            title: 'They also support search better',
            paragraphs: [
              'Many relevant searches naturally combine industry plus product, solution, or service.',
              'Industry pages usually cover those long-tail combinations more naturally than a homepage or generic product page.',
            ],
          },
          {
            title: 'Industry pages and product pages should reinforce each other',
            paragraphs: [
              'Product pages explain the product. Industry pages explain the context in which it matters.',
              'Together they create a stronger information path and deeper browsing structure.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'B2B buyers often judge fit through industry understanding, not product detail alone.',
          'Industry pages usually support long-tail search more naturally.',
          'Product and industry pages work best as complementary layers.',
        ],
        ctaTitle: 'If your site mainly serves B2B clients, industry pages are often worth planning early',
        ctaDescription: 'They usually strengthen structure, search coverage, and sales clarity at the same time.',
      },
    },
  },
  'website-content-update-process': {
    slug: 'website-content-update-process',
    priority: {
      zh: 0.62,
      en: 0.49,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['website-development', 'company-website-development', 'foreign-trade-website-development'],
    content: {
      zh: {
        navLabel: '网站上线后内容怎么持续更新，才不会很快停掉',
        categoryLabel: '运营',
        metaTitle: '网站上线后内容怎么持续更新？更容易执行的内容节奏参考｜致诚工作室',
        metaDescription:
          '网站上线后内容怎么持续更新，关键在于页面分工、素材来源和更新节奏。本文拆解更容易长期执行的网站内容更新方式。',
        keywords: ['网站内容更新', '官网上线后怎么维护', '企业官网内容运营', '网站开发'],
        eyebrow: 'Article',
        heroTitle: '网站上线后内容怎么持续更新，才不会两周后就停掉',
        heroDescription:
          '很多网站上线时看起来内容完整，但真正难的是后续更新。不是没人想更新，而是内容来源、分工、节奏和页面结构一开始就没准备好，结果网站很快停在上线那一版。',
        introTitle: '为什么网站内容更新最容易断在上线后',
        introParagraphs: [
          '因为很多项目把“上线”当成终点，没有提前规划谁更新、更新什么、从哪里来素材、哪些页面适合持续补内容。',
          '如果没有这个机制，网站就会在很短时间里重新变旧。',
        ],
        sections: [
          {
            title: '先分清哪些页面适合持续更新',
            paragraphs: [
              '首页和基础介绍页不需要频繁改，但服务页、FAQ、文章页、行业页和产品页通常更适合持续补内容。',
              '如果页面分工不清楚，后续更新会很容易陷入“什么都想改，最后什么都没改”。',
            ],
          },
          {
            title: '内容来源和负责方式要提前定',
            paragraphs: [
              '网站内容更新最怕“等有空再说”，所以更稳的做法是先明确素材来源、更新频率和谁负责初稿、谁负责审核。',
              '即使更新频率不高，只要机制稳定，也比完全停更强很多。',
            ],
          },
          {
            title: '先用轻节奏跑起来，再考虑复杂运营',
            paragraphs: [
              '很多网站不是不适合更新，而是一开始给自己定得太复杂，最后完全执行不下去。',
              '更现实的方式通常是先固定一周一篇或两周一篇，慢慢建立内容节奏。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '网站上线后最怕没有更新机制，而不是更新频率不够高。',
          '服务页、FAQ、文章页和行业页通常更适合持续补内容。',
          '轻节奏但稳定执行，通常比复杂规划更有用。',
        ],
        ctaTitle: '如果你担心网站上线后很快停更，先把更新机制定下来',
        ctaDescription: '页面分工、素材来源和更新节奏一旦理顺，网站更容易持续变强，而不是只停在上线那天。',
      },
      en: {
        navLabel: 'How to Keep Website Content Updated After Launch',
        categoryLabel: 'Operations',
        metaTitle: 'How to Keep Website Content Updated After Launch | Zhicheng Studio',
        metaDescription:
          'A website stays useful after launch when content ownership, source material, page roles, and cadence are planned clearly. This article explains a more sustainable approach.',
        keywords: ['website content updates', 'post-launch website maintenance', 'content workflow'],
        eyebrow: 'Article',
        heroTitle: 'Website content usually stops because there was no update system, not because nobody cared',
        heroDescription:
          'Many websites launch with enough content and then freeze quickly. The usual problem is not lack of intention, but lack of source material, role clarity, cadence, and page structure for continued updates.',
        introTitle: 'Why website content often stalls right after launch',
        introParagraphs: [
          'Many teams treat launch as the end and never decide who updates what, where material comes from, or which pages are meant to keep growing.',
          'Without that mechanism, even a strong first version becomes outdated surprisingly fast.',
        ],
        sections: [
          {
            title: 'Decide which pages should keep evolving',
            paragraphs: [
              'The homepage and basic company pages may change less often, while service pages, FAQ, blog posts, industry pages, and product pages are usually the stronger candidates for ongoing updates.',
              'Without that distinction, updates tend to become unfocused and inconsistent.',
            ],
          },
          {
            title: 'Assign source material and ownership early',
            paragraphs: [
              'The update rhythm usually fails when everyone assumes content will be written “later when there is time.”',
              'Even a modest cadence works much better when source material and ownership are clear.',
            ],
          },
          {
            title: 'Start with a lighter rhythm first',
            paragraphs: [
              'Many teams over-plan the content system and then never execute it.',
              'A lighter but steady rhythm, such as one article a week or every two weeks, is often much more realistic and sustainable.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'Content usually stops because the update system was never defined.',
          'Service, FAQ, article, industry, and product pages are often the best growth layers.',
          'A lighter cadence that keeps moving is usually better than a complex plan that stalls.',
        ],
        ctaTitle: 'If you worry that the site will stop evolving after launch, define the update mechanism early',
        ctaDescription: 'Page roles, source material, and cadence matter more to long-term content health than ambitious publishing plans alone.',
      },
    },
  },
  'website-development-timeline-estimation': {
    slug: 'website-development-timeline-estimation',
    priority: {
      zh: 0.6,
      en: 0.48,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['website-development', 'company-website-development', 'foreign-trade-website-development'],
    content: {
      zh: {
        navLabel: '网站开发周期一般多久，为什么有的项目两周有的两个月',
        categoryLabel: '工期',
        metaTitle: '网站开发周期一般多久？工期判断参考｜致诚工作室',
        metaDescription:
          '网站开发周期一般多久，取决于页面数量、内容准备、是否多语言、是否有后台和沟通效率。本文拆解更真实的工期判断方式。',
        keywords: ['网站开发周期', '网站开发一般多久', '企业官网开发周期', '网站开发工期'],
        eyebrow: 'Article',
        heroTitle: '网站开发周期一般多久，为什么有的项目两周有的两个月',
        heroDescription:
          '很多人问工期时，希望得到一个统一答案，但网站项目之间差异很大。页面数量、内容准备程度、是否有后台、多语言和沟通效率，都会明显拉开实际开发周期。',
        introTitle: '为什么工期问题最容易被低估',
        introParagraphs: [
          '网站项目不只是开发页面，还包括结构确定、内容准备、反馈修改、测试、上线和配置。只看编码时间，工期判断通常会失真。',
          '越是中型以上项目，工期里越多的时间并不在写代码，而在前期确认和中间同步。',
        ],
        sections: [
          {
            title: '页面和功能复杂度是第一层影响因素',
            paragraphs: [
              '几页基础官网、多语言官网、带表单和后台的网站，复杂度不是一个量级，所以工期也不会一样。',
              '如果一开始就把不同规模项目当成同一类，会很容易低估排期。',
            ],
          },
          {
            title: '内容准备程度会直接影响速度',
            paragraphs: [
              '资料越完整，页面推进越顺；如果内容长期边做边补，工期通常会明显被拉长。',
              '图片、文案、服务描述、FAQ 和参考站，都会影响推进效率。',
            ],
          },
          {
            title: '反馈节奏和决策效率同样关键',
            paragraphs: [
              '有些项目技术不复杂，但因为反馈链路长、内部决策慢，工期照样会被拖长。',
              '所以工期不是纯开发问题，也是协作问题。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '网站工期不仅受开发量影响，也受内容准备和反馈效率影响。',
          '页面规模、多语言和后台需求会明显拉开周期差异。',
          '越早把范围和决策方式说清楚，工期越容易判断得准。',
        ],
        ctaTitle: '如果你在评估工期，先把页面、功能和内容准备情况说清楚',
        ctaDescription: '只要范围和资料准备程度明确，工期判断通常会比单问“多久能做完”更靠谱。',
      },
      en: {
        navLabel: 'How Long Does Website Development Usually Take?',
        categoryLabel: 'Timeline',
        metaTitle: 'How Long Does Website Development Usually Take? | Zhicheng Studio',
        metaDescription:
          'Website timelines depend on page depth, content readiness, multilingual scope, backend needs, and decision speed. This article explains a more realistic way to estimate timeline.',
        keywords: ['website development timeline', 'how long does a website take', 'company website timeline'],
        eyebrow: 'Article',
        heroTitle: 'Website development timelines vary because project scope and collaboration vary',
        heroDescription:
          'Teams often want one simple answer on timing, but website projects differ too much for that to work. Page depth, content readiness, multilingual scope, backend needs, and decision speed all shape the real timeline.',
        introTitle: 'Why timeline discussions are so often underestimated',
        introParagraphs: [
          'Website projects include more than implementation. Structure decisions, content preparation, review, testing, deployment, and configuration all take time too.',
          'For anything beyond a tiny site, much of the timeline is shaped by alignment and review rather than code alone.',
        ],
        sections: [
          {
            title: 'Page and feature complexity shape the first layer',
            paragraphs: [
              'A small brochure site, a multilingual company site, and a site with admin support do not sit in the same workload band.',
              'If they are treated like the same type of project, the timeline usually gets underestimated immediately.',
            ],
          },
          {
            title: 'Content readiness has a direct impact',
            paragraphs: [
              'The more complete the content and references are, the smoother the delivery usually becomes.',
              'Images, service descriptions, FAQ material, and reference direction all affect momentum.',
            ],
          },
          {
            title: 'Feedback rhythm matters too',
            paragraphs: [
              'Some projects are not technically difficult, yet still move slowly because review and decision flow take too long.',
              'That is why timeline is not only a development question, but also a collaboration question.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'Timeline depends on more than coding workload.',
          'Page depth, multilingual scope, and backend needs change timing significantly.',
          'Clearer scope and faster decisions usually make timeline estimates much more reliable.',
        ],
        ctaTitle: 'If you are evaluating timeline, clarify scope and content readiness first',
        ctaDescription: 'A realistic timeline usually starts from clearer pages, features, and source material rather than from a single rough question.',
      },
    },
  },
  'website-maintenance-scope': {
    slug: 'website-maintenance-scope',
    priority: {
      zh: 0.6,
      en: 0.48,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['website-development', 'company-website-development', 'web-app-development'],
    content: {
      zh: {
        navLabel: '网站上线后的维护到底包括什么，不包括什么',
        categoryLabel: '维护',
        metaTitle: '网站上线后的维护包括什么？边界参考｜致诚工作室',
        metaDescription:
          '网站上线后的维护包括什么、不包括什么，通常影响合作边界和长期成本。本文拆解 Bug 修复、兼容性、内容更新和新增需求的区别。',
        keywords: ['网站维护包括什么', '官网上线后维护', '网站开发维护', '网站交付后支持'],
        eyebrow: 'Article',
        heroTitle: '网站上线后的维护到底包括什么，不包括什么',
        heroDescription:
          '很多合作在上线后容易出现认知偏差，不是因为谁故意扯皮，而是“维护”这个词本身太宽了。Bug 修复、兼容性问题、内容更新、功能新增和运营支持，其实是不同层级的事情。',
        introTitle: '为什么维护边界最容易在项目后期变模糊',
        introParagraphs: [
          '因为在项目刚开始时，大家更关注开发和上线，对上线后的支持常常只会笼统说一句“后面维护一下”。',
          '但真到上线后，如果没有边界，双方对“这算维护还是新增”很容易理解不同。',
        ],
        sections: [
          {
            title: 'Bug 修复和功能新增不是一回事',
            paragraphs: [
              '网站本来就该有的功能出现异常、兼容问题或明显错误，通常属于维护范畴。',
              '而新增页面、调整流程、增加后台能力或新业务模块，通常更接近新增需求。',
            ],
          },
          {
            title: '内容更新也需要单独看',
            paragraphs: [
              '少量帮助性的内容修改和必要说明，有时可以纳入支持，但长期高频更新通常更适合单独约定方式。',
              '尤其是企业官网、产品页和文章更新，长期执行时最好有更明确的节奏和负责人。',
            ],
          },
          {
            title: '越早讲清边界，后面越顺',
            paragraphs: [
              '维护本身不是问题，边界模糊才是问题。',
              '在项目开始时就讲清维护周期、响应范围和新增需求处理方式，后面的合作会轻松很多。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          'Bug 修复、内容更新和功能新增应该分开看。',
          '维护边界越早讲清楚，后面越不容易扯皮。',
          '网站上线后的支持本身也应该有明确范围和节奏。',
        ],
        ctaTitle: '如果你在谈网站项目，维护范围最好一开始就说清楚',
        ctaDescription: '只要先把维护、更新和新增需求分开，后面的合作边界通常会清楚很多。',
      },
      en: {
        navLabel: 'What Website Maintenance Usually Includes After Launch',
        categoryLabel: 'Maintenance',
        metaTitle: 'What Website Maintenance Usually Includes After Launch | Zhicheng Studio',
        metaDescription:
          'Website maintenance often becomes unclear after launch because bug fixes, content updates, compatibility issues, and new feature requests are treated as the same thing. This article separates them.',
        keywords: ['website maintenance scope', 'post-launch website support', 'website maintenance after launch'],
        eyebrow: 'Article',
        heroTitle: 'Website maintenance becomes much easier when its boundaries are defined early',
        heroDescription:
          'Post-launch support often becomes messy not because anyone wants conflict, but because “maintenance” gets used as one broad label for several very different types of work.',
        introTitle: 'Why maintenance becomes vague so easily',
        introParagraphs: [
          'At project start, most attention goes to launch itself, while post-launch support is often discussed too loosely.',
          'Once the site is live, that vagueness turns into confusion around what counts as support versus what counts as new work.',
        ],
        sections: [
          {
            title: 'Bug fixes and new features are not the same category',
            paragraphs: [
              'Problems with intended functionality, compatibility, or clear errors usually fit support or maintenance.',
              'New pages, process changes, backend growth, or new business modules usually belong to new scope.',
            ],
          },
          {
            title: 'Content updates should also be defined clearly',
            paragraphs: [
              'A small amount of helpful content support may fit inside a support window, but long-term recurring content work is often better handled as its own agreement.',
              'That matters especially for service pages, product pages, and blog content.',
            ],
          },
          {
            title: 'The earlier the boundary is clarified, the smoother the collaboration',
            paragraphs: [
              'Maintenance itself is rarely the problem. Unclear scope is the problem.',
              'If response range, duration, and how new work is handled are explained early, post-launch collaboration usually stays much cleaner.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'Bug fixes, content work, and new features should be treated separately.',
          'Clear support boundaries reduce friction later.',
          'Post-launch maintenance is easier when scope and rhythm are defined early.',
        ],
        ctaTitle: 'If you are discussing a website project, define maintenance boundaries early',
        ctaDescription: 'Separating support, updates, and new requests early usually makes later collaboration much easier.',
      },
    },
  },
  'company-website-contact-page-planning': {
    slug: 'company-website-contact-page-planning',
    priority: {
      zh: 0.6,
      en: 0.48,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['company-website-development', 'website-development'],
    content: {
      zh: {
        navLabel: '企业官网联系页怎么做，才不会只是放个电话和微信',
        categoryLabel: '联系页',
        metaTitle: '企业官网联系页怎么做？联系页结构参考｜致诚工作室',
        metaDescription:
          '企业官网联系页不应该只放电话和微信，还应该承接首次沟通建议、联系路径和高频疑虑。本文拆解更有效的联系页结构。',
        keywords: ['企业官网联系页', '联系页怎么做', '官网转化页面', '企业官网开发'],
        eyebrow: 'Article',
        heroTitle: '企业官网联系页怎么做，才不会最后只剩一个电话和微信',
        heroDescription:
          '联系页看起来像网站最后一页，但它其实是最接近转化的一页。如果这里只放联系方式，却没有帮助访客判断怎么联系、该带什么信息、预期会怎样，很多高意图访客还是会犹豫。',
        introTitle: '为什么联系页最容易被做得太薄',
        introParagraphs: [
          '因为它经常被当成一个“补完整站结构”的页面，而不是被当成真正承接沟通动作的入口。',
          '结果就是联系方式有了，但联系意愿没有被真正往前推。',
        ],
        sections: [
          {
            title: '联系页应该回答“怎么联系更有效”',
            paragraphs: [
              '除了放电话、微信和表单，联系页更适合补充首次沟通建议，比如预算、目标、关键需求和参考站。',
              '这些信息会明显降低访客不知道该怎么开口的门槛。',
            ],
          },
          {
            title: '沟通时间和响应方式会影响行动意愿',
            paragraphs: [
              '如果访客不知道什么时候能收到回复、该走哪种联系路径，联系动作会被拖延。',
              '所以响应时间、联系方式选择和基本沟通习惯都应该讲清楚。',
            ],
          },
          {
            title: '联系页也能承担一部分信任说明',
            paragraphs: [
              '合作方式、维护方式、项目边界和常见问题，如果能在联系页里适度补充，会更容易推动继续交流。',
              '联系页不是只放联系方式，而是把最后一步走顺。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '联系页应该帮助访客知道怎么联系更有效。',
          '沟通时间、响应方式和首次沟通建议都很重要。',
          '联系页也是转化页面，不只是一个信息页。',
        ],
        ctaTitle: '如果你在做企业官网联系页，先把“怎么联系更有效”写出来',
        ctaDescription: '只要联系页能降低访客犹豫，网站最后一步的转化效率通常会明显变好。',
      },
      en: {
        navLabel: 'How a Company Website Contact Page Should Work',
        categoryLabel: 'Contact Page',
        metaTitle: 'How to Structure a Company Website Contact Page | Zhicheng Studio',
        metaDescription:
          'A company website contact page should do more than list phone and email. It should also reduce hesitation and explain how to start the conversation more effectively.',
        keywords: ['company website contact page', 'contact page structure', 'website conversion page'],
        eyebrow: 'Article',
        heroTitle: 'A contact page should help visitors move into conversation, not only show contact details',
        heroDescription:
          'The contact page looks like the last page, but it often carries the closest step to conversion. If it only lists channels without reducing hesitation, many strong-intent visitors still pause.',
        introTitle: 'Why contact pages often stay too thin',
        introParagraphs: [
          'They are often treated as a structural placeholder instead of a conversion support page.',
          'That leaves the contact options visible, but does not make the visitor any more ready to use them.',
        ],
        sections: [
          {
            title: 'The contact page should explain how to reach out effectively',
            paragraphs: [
              'Besides listing phone, email, or messaging options, the page can help by suggesting what to include in a first message.',
              'Budget, goal, key requirements, and references often lower the barrier to starting the conversation.',
            ],
          },
          {
            title: 'Response expectations matter',
            paragraphs: [
              'If visitors do not know when to expect a reply or which channel makes the most sense, they often delay the action.',
              'That makes response time and communication style part of the page’s conversion work too.',
            ],
          },
          {
            title: 'Contact pages can still support trust',
            paragraphs: [
              'Cooperation style, support terms, project boundaries, and common concerns can all be reinforced lightly on the contact page.',
              'The goal is not only to show channels, but to make the final step feel easier and safer.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'A contact page should reduce hesitation, not only display channels.',
          'First-message guidance and response expectations help conversion.',
          'Contact pages can support trust as well as action.',
        ],
        ctaTitle: 'If you are shaping a contact page, explain how to reach out effectively',
        ctaDescription: 'A contact page that lowers uncertainty usually improves conversion more than one that only lists channels.',
      },
    },
  },
  'multilingual-website-launch-checklist': {
    slug: 'multilingual-website-launch-checklist',
    priority: {
      zh: 0.6,
      en: 0.48,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['foreign-trade-website-development', 'website-development'],
    content: {
      zh: {
        navLabel: '多语言网站上线前要检查什么，才不容易上线后再返工',
        categoryLabel: '多语言',
        metaTitle: '多语言网站上线前要检查什么？上线清单参考｜致诚工作室',
        metaDescription:
          '多语言网站上线前要检查的重点包括路径、canonical、hreflang、切换逻辑、sitemap 和内容对应关系。本文整理上线前更稳的检查清单。',
        keywords: ['多语言网站上线清单', 'hreflang 检查', '多语言网站开发', '外贸网站上线'],
        eyebrow: 'Article',
        heroTitle: '多语言网站上线前要检查什么，才不容易上线后再返工',
        heroDescription:
          '多语言网站最怕的是上线以后才发现路径不对、语言切换乱、canonical 错、`hreflang` 漏了，最后又回头返工。很多问题其实都适合在上线前一次检查掉。',
        introTitle: '为什么多语言网站上线最容易补锅',
        introParagraphs: [
          '因为多语言站比普通站多了一层“页面对应关系”，一旦路径、语言切换或内容映射没处理好，问题不会只影响一个页面。',
          '所以多语言站上线更需要提前用清单思维去检查。',
        ],
        sections: [
          {
            title: '先检查路径和页面对应关系',
            paragraphs: [
              '每个语言版本的路径是否清楚、是否有一一对应页面、默认语言逻辑是否明确，这些都应该先确认。',
              '如果页面之间对应关系本身混乱，后面的 SEO 配置也很难完全补救。',
            ],
          },
          {
            title: 'canonical、hreflang 和 sitemap 要一起看',
            paragraphs: [
              '多语言网站最常见的上线问题就是这些基础项有的配了、有的漏了。',
              '更稳的做法是把 canonical、`hreflang`、`robots`、`sitemap` 一起作为一组检查项。',
            ],
            bullets: [
              '页面 canonical 是否指向正确语言版本',
              '`hreflang` 是否互相对应',
              'sitemap 是否包含全部语言版本',
              '语言切换是否能正确跳到对应页',
            ],
          },
          {
            title: '最后检查内容和语言体验',
            paragraphs: [
              '不仅要看技术项，也要看页面标题、描述、按钮、导航和 FAQ 是否真的切到正确语言。',
              '技术正确但内容层错位，用户体验照样会很差。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '多语言站上线前，路径和页面映射关系必须先查清。',
          'canonical、`hreflang` 和 `sitemap` 应该作为一组检查。',
          '内容语言体验也要和技术项一起检查。',
        ],
        ctaTitle: '如果你正准备上线多语言站，先把这组检查项过一遍',
        ctaDescription: '上线前把路径、语言映射和 SEO 基础一次查清，通常能省掉很多返工。',
      },
      en: {
        navLabel: 'A Practical Launch Checklist for Multilingual Websites',
        categoryLabel: 'Multilingual',
        metaTitle: 'A Practical Launch Checklist for Multilingual Websites | Zhicheng Studio',
        metaDescription:
          'Before a multilingual site goes live, path mapping, canonical tags, hreflang, language switching, sitemap, and content consistency all need to be checked together.',
        keywords: ['multilingual website launch checklist', 'hreflang checklist', 'international website launch'],
        eyebrow: 'Article',
        heroTitle: 'Multilingual websites benefit from a launch checklist more than most teams expect',
        heroDescription:
          'Multilingual sites often trigger avoidable rework after launch because path mapping, language switching, canonical tags, and hreflang were not all checked together before release.',
        introTitle: 'Why multilingual launches create so much post-launch cleanup',
        introParagraphs: [
          'Multilingual sites do not only add more pages. They also add a second layer of mapping between page equivalents.',
          'If that layer is weak, problems spread across the site much more easily than on a single-language launch.',
        ],
        sections: [
          {
            title: 'Check path and page mapping first',
            paragraphs: [
              'Each locale path should be clear, and each major page should have a well-defined equivalent in the other language versions.',
              'If the mapping itself is unclear, SEO configuration alone will not fully rescue the launch.',
            ],
          },
          {
            title: 'Canonical, hreflang, and sitemap should be checked as one set',
            paragraphs: [
              'A common launch mistake is handling one of these pieces while missing another.',
              'The steadier approach is to check canonical tags, hreflang, robots, sitemap, and switching logic together.',
            ],
            bullets: [
              'Canonical points to the correct locale version',
              'hreflang links the equivalents correctly',
              'Sitemap includes all locale versions',
              'Locale switching lands on the matching page',
            ],
          },
          {
            title: 'Finish with content and language UX review',
            paragraphs: [
              'Technical correctness is not enough if titles, buttons, nav labels, and FAQ content still feel inconsistent across locales.',
              'Language experience should be reviewed alongside technical SEO checks.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'Path mapping should be validated before launch.',
          'Canonical, hreflang, and sitemap should be reviewed together.',
          'Language UX matters as much as technical correctness.',
        ],
        ctaTitle: 'If you are launching a multilingual site, run this checklist first',
        ctaDescription: 'Checking mapping, SEO basics, and language experience before release usually saves a lot of avoidable rework.',
      },
    },
  },
  'foreign-trade-website-language-priority': {
    slug: 'foreign-trade-website-language-priority',
    priority: {
      zh: 0.6,
      en: 0.48,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['foreign-trade-website-development', 'website-development'],
    content: {
      zh: {
        navLabel: '外贸网站先做哪些语言版本，怎么排优先级更合理',
        categoryLabel: '多语言',
        metaTitle: '外贸网站先做哪些语言版本？语言优先级参考｜致诚工作室',
        metaDescription:
          '外贸网站先做哪些语言版本，不只是看“能翻多少语种”，更要看目标市场、业务重心和维护成本。本文拆解更现实的语言优先级判断。',
        keywords: ['外贸网站语言版本', '多语言网站优先级', '外贸网站开发', '语言策略'],
        eyebrow: 'Article',
        heroTitle: '外贸网站先做哪些语言版本，怎么排优先级更合理',
        heroDescription:
          '多语言网站最常见的问题之一，不是语言不够多，而是一开始就铺太多语言，结果每个版本都维护不好。更现实的做法通常不是“越多越好”，而是先把最重要的语言版本做深、做准。',
        introTitle: '为什么多语言站最怕一开始就铺太广',
        introParagraphs: [
          '因为语言越多，不只是翻译工作越多，路径、页面对应、SEO 配置、内容维护和体验校对的成本都会同步上升。',
          '如果前期没有排优先级，多语言站往往会先在维护上失控。',
        ],
        sections: [
          {
            title: '先看目标市场和主要客户来源',
            paragraphs: [
              '如果当前业务主要面向英语市场，优先把英文版本做好通常比一开始铺 5 种语言更有价值。',
              '语言优先级最好跟真实市场和获客路径绑定，而不是只是想“看起来国际化”。',
            ],
          },
          {
            title: '再看维护能力和内容产出能力',
            paragraphs: [
              '每增加一个语言版本，都意味着后续更多的内容同步和校对工作。',
              '如果维护能力跟不上，先做 1 到 2 个关键语言版本通常更稳。',
            ],
          },
          {
            title: '语言越少越要做准',
            paragraphs: [
              '真正有效的多语言站，不一定是语种最多，而是最关键的语言版本足够完整、足够准确、足够好用。',
              '先做深，再逐步扩展，通常比一开始铺很宽更可持续。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '多语言版本优先级应该跟目标市场和客户来源绑定。',
          '维护和内容产出能力会直接决定能不能铺更多语言。',
          '先做深 1 到 2 个关键语言版本，通常比一开始铺太广更稳。',
        ],
        ctaTitle: '如果你在规划外贸网站语言版本，先把目标市场和维护能力想清楚',
        ctaDescription: '语言优先级一旦排对，后面的 SEO、内容和维护成本都会更可控。',
      },
      en: {
        navLabel: 'How to Prioritize Locales on a Foreign Trade Website',
        categoryLabel: 'Multilingual',
        metaTitle: 'How to Prioritize Locales on a Foreign Trade Website | Zhicheng Studio',
        metaDescription:
          'Foreign trade websites should prioritize locales based on market focus, customer source, and maintenance capacity rather than trying to launch too many languages at once.',
        keywords: ['foreign trade website locales', 'multilingual priority', 'language strategy for export websites'],
        eyebrow: 'Article',
        heroTitle: 'Foreign trade websites usually benefit more from doing the key locales well than from launching too many',
        heroDescription:
          'A common mistake in multilingual strategy is assuming that more languages automatically creates more international reach. In practice, too many shallow locales often create a maintenance problem faster than a growth advantage.',
        introTitle: 'Why launching too many locales too early causes problems',
        introParagraphs: [
          'Each new locale adds not only translation work, but also page mapping, SEO configuration, maintenance, and UX review overhead.',
          'Without clear priority, multilingual expansion often becomes harder to sustain than teams expect.',
        ],
        sections: [
          {
            title: 'Start with market focus and customer source',
            paragraphs: [
              'If the current market focus is primarily English-speaking, doing English deeply is usually more valuable than launching five shallow locales.',
              'Locale priority should follow real market and acquisition logic rather than only the desire to look global.',
            ],
          },
          {
            title: 'Then consider maintenance capacity',
            paragraphs: [
              'Every added locale creates ongoing synchronization and review work.',
              'If the team cannot maintain many versions well, one or two strong locales is usually the steadier choice.',
            ],
          },
          {
            title: 'Fewer locales can still be much stronger',
            paragraphs: [
              'A multilingual site does not need the highest locale count to be effective. It usually needs the most important locales to be complete, accurate, and well maintained.',
              'Depth first, width later is often the more sustainable path.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'Locale priority should follow market focus and customer source.',
          'Maintenance capacity should shape how many locales launch first.',
          'One or two strong locales often outperform many shallow ones.',
        ],
        ctaTitle: 'If you are planning locale strategy, start with market focus and maintenance reality',
        ctaDescription: 'A realistic priority order usually makes multilingual SEO and content maintenance much more sustainable.',
      },
    },
  },
  'company-website-budget-estimation': {
    slug: 'company-website-budget-estimation',
    priority: {
      zh: 0.6,
      en: 0.48,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['company-website-development', 'website-development'],
    content: {
      zh: {
        navLabel: '企业官网开发多少钱，预算通常该怎么拆',
        categoryLabel: '报价',
        metaTitle: '企业官网开发多少钱？预算拆分参考｜致诚工作室',
        metaDescription:
          '企业官网开发多少钱，通常取决于页面层级、内容准备、视觉要求、是否多语言以及是否包含后台和后续维护。本文拆解更现实的预算判断方式。',
        keywords: ['企业官网开发多少钱', '企业官网预算', '官网报价', '企业网站开发'],
        eyebrow: 'Article',
        heroTitle: '企业官网开发多少钱，预算通常该怎么拆，才不会一开始就问偏',
        heroDescription:
          '企业官网预算经常聊不拢，不是因为谁不愿意报，而是“企业官网”这四个字背后的范围差别太大。展示型官网、服务型官网、多语言官网、带后台的官网，本来就不是同一个工作量。',
        introTitle: '为什么企业官网预算最容易被问得太笼统',
        introParagraphs: [
          '很多沟通一开始只有一句“想做个官网”，但没有说清楚页面范围、内容深度、视觉预期和后续维护方式。',
          '如果这些前提不明确，预算只能按模糊范围估，结果要么偏低要么偏高。',
        ],
        sections: [
          {
            title: '页面层级和内容深度会明显影响预算',
            paragraphs: [
              '只有首页和联系页的官网、带服务页和 FAQ 的官网、再加文章和多语言的官网，预算不会在一个区间。',
              '很多时候真正拉开差距的，不是技术难度，而是内容结构和信息承载深度。',
            ],
          },
          {
            title: '视觉要求和后台需求也会把范围拉开',
            paragraphs: [
              '如果更重视品牌感、动效和定制视觉，或者需要内容管理、线索表单、文章更新和权限控制，投入都会上一个层级。',
              '所以预算问题不只是“多少页”，还包括“每页做到什么程度”。',
            ],
            bullets: [
              '页面数量和模板复杂度',
              '品牌视觉要求和交互动效',
              '多语言、SEO 和内容结构规划',
              '后台、表单、内容管理和维护支持',
            ],
          },
          {
            title: '更高效的问法是先给范围，再谈预算',
            paragraphs: [
              '如果你能先说清楚目标客户、必须页面、参考站和预算区间，报价通常会快很多。',
              '企业官网项目最怕的是需求一直往里加，但预算预期始终没定清楚。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '企业官网预算首先是范围问题，不是一个统一价格。',
          '页面层级、内容深度、视觉要求和后台需求都会明显影响报价。',
          '先讲清范围和预算区间，会比直接问价格更有效。',
        ],
        ctaTitle: '如果你在评估企业官网预算，先把范围和优先级列出来',
        ctaDescription: '只要页面、内容和维护边界更清楚，预算判断通常会更快也更准。',
      },
      en: {
        navLabel: 'How to Estimate Budget for a Company Website',
        categoryLabel: 'Pricing',
        metaTitle: 'How Much Does a Company Website Cost? A Practical Budget Breakdown | Zhicheng Studio',
        metaDescription:
          'Company website budgets vary based on page depth, brand requirements, multilingual scope, backend support, and maintenance expectations. This article explains a more realistic breakdown.',
        keywords: ['company website cost', 'company website budget', 'corporate website pricing'],
        eyebrow: 'Article',
        heroTitle: 'A company website budget becomes much clearer once the scope stops being vague',
        heroDescription:
          'Budget conversations often stall not because nobody wants to quote, but because “company website” can mean a simple showcase, a service-oriented site, a multilingual site, or a site with backend support and ongoing updates.',
        introTitle: 'Why this budget question gets asked too broadly',
        introParagraphs: [
          'Many projects begin with “we need a website” without clarifying page depth, content expectations, visual ambition, or post-launch needs.',
          'Without those inputs, any quote is likely to sit on a blurry range rather than a dependable scope.',
        ],
        sections: [
          {
            title: 'Page depth and content scope change the range quickly',
            paragraphs: [
              'A homepage-only site, a service-led site with FAQ, and a multilingual site with articles do not belong in the same budget band.',
              'The big difference is often content structure and depth rather than raw coding complexity alone.',
            ],
          },
          {
            title: 'Brand and backend needs also reshape the budget',
            paragraphs: [
              'Higher-end visual treatment, motion, content management, lead handling, article updates, and permissions all increase the scope.',
              'That means the question is not only how many pages, but how much each page is expected to do.',
            ],
            bullets: [
              'Page count and template complexity',
              'Brand and visual ambition',
              'Multilingual scope and SEO planning',
              'Backend, forms, CMS, and support expectations',
            ],
          },
          {
            title: 'Better quoting starts with better scope framing',
            paragraphs: [
              'If the audience, must-have pages, references, and budget range are clearer, quoting becomes much more efficient.',
              'Company website projects usually become painful when the scope keeps expanding while the budget expectation stays vague.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'Company website cost is mostly a scope question.',
          'Content depth, visual ambition, and backend needs shift the budget significantly.',
          'Clearer scope and budget range make quoting much more useful.',
        ],
        ctaTitle: 'If you are estimating a company website budget, list the scope first',
        ctaDescription: 'Once page depth, content scope, and support boundaries are clearer, budget estimates usually become far more realistic.',
      },
    },
  },
  'foreign-trade-website-faq-writing': {
    slug: 'foreign-trade-website-faq-writing',
    priority: {
      zh: 0.6,
      en: 0.48,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['foreign-trade-website-development', 'website-development'],
    content: {
      zh: {
        navLabel: '外贸网站 FAQ 怎么写，才更容易降低询盘前犹豫',
        categoryLabel: '外贸网站',
        metaTitle: '外贸网站 FAQ 怎么写？更适合询盘转化的 FAQ 结构｜致诚工作室',
        metaDescription:
          '外贸网站 FAQ 怎么写，关键是围绕交期、定制、沟通、样品、售后和合作方式来降低犹豫，而不是堆很多无关问题。',
        keywords: ['外贸网站 FAQ', '外贸官网 FAQ', '询盘转化 FAQ', '外贸网站开发'],
        eyebrow: 'Article',
        heroTitle: '外贸网站 FAQ 怎么写，才更容易降低询盘前的犹豫',
        heroDescription:
          '很多外贸网站 FAQ 的问题，不是写得太少，而是写得太泛。真正有价值的 FAQ，应该去回答访客在联系前最常犹豫的那些问题，而不是把一堆和决策无关的信息堆上去。',
        introTitle: '为什么外贸网站 FAQ 特别值得认真做',
        introParagraphs: [
          '外贸访客和你之间天然有距离，沟通成本、信任门槛和信息差都更高。',
          'FAQ 恰好适合在正式联系前，把最常见的犹豫点先回答掉，让询盘动作变得更顺。',
        ],
        sections: [
          {
            title: 'FAQ 最适合回答哪些问题',
            paragraphs: [
              '交期、起订量、是否支持定制、样品流程、付款方式、售后支持、沟通语言和响应方式，这些都是很典型的高频疑虑点。',
              '它们之所以重要，不是因为问题多，而是因为会直接影响访客是否愿意继续沟通。',
            ],
          },
          {
            title: 'FAQ 要围绕决策，不要围绕堆字数',
            paragraphs: [
              '更好的 FAQ 写法不是越多越好，而是越贴近决策前的真实问题越好。',
              '如果 FAQ 大量回答无关痛痒的问题，却没有碰到真正让人犹豫的地方，页面价值会很有限。',
            ],
          },
          {
            title: 'FAQ 应该和产品页、联系页配合',
            paragraphs: [
              '产品页解决理解问题，FAQ 解决犹豫问题，联系页承接下一步动作，这三者一起用时最有效。',
              'FAQ 不是孤立内容，而是外贸网站转化链的一部分。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '外贸 FAQ 最该回答的是联系前最常见的犹豫点。',
          '交期、定制、沟通和售后通常都是关键问题。',
          'FAQ 更适合作为产品页和联系页之间的决策补充层。',
        ],
        ctaTitle: '如果你的外贸网站已经有流量但询盘不顺，先看看 FAQ 是否太泛',
        ctaDescription: '只要 FAQ 更贴近真实决策问题，很多访客的最后一步犹豫都会被明显降低。',
      },
      en: {
        navLabel: 'How to Write FAQ for a Foreign Trade Website',
        categoryLabel: 'Foreign Trade Website',
        metaTitle: 'How to Write Better FAQ for a Foreign Trade Website | Zhicheng Studio',
        metaDescription:
          'A stronger foreign trade FAQ page answers lead time, customization, sample, communication, after-sales, and cooperation concerns that often block inquiry.',
        keywords: ['foreign trade FAQ', 'B2B website FAQ', 'export website FAQ'],
        eyebrow: 'Article',
        heroTitle: 'A foreign trade FAQ page works best when it reduces hesitation before contact',
        heroDescription:
          'The problem with many foreign trade FAQ sections is not that they are too short, but that they answer generic questions while missing the concerns that actually block inquiry.',
        introTitle: 'Why FAQ is especially useful in foreign trade sites',
        introParagraphs: [
          'International buyers usually face a bigger trust and communication gap, which means hesitation points show up earlier and more strongly.',
          'A good FAQ layer can reduce that hesitation before the first conversation even starts.',
        ],
        sections: [
          {
            title: 'The strongest FAQ topics are the ones that block contact',
            paragraphs: [
              'Lead time, MOQ, customization, sample process, payment approach, after-sales support, language, and response expectations are all strong FAQ topics.',
              'They matter because they sit directly inside the visitor’s contact decision path.',
            ],
          },
          {
            title: 'Write for decision support, not for volume',
            paragraphs: [
              'A useful FAQ page is not the longest one. It is the one that addresses the most important hesitation points clearly and directly.',
              'If it avoids the real concerns, more questions do not create more value.',
            ],
          },
          {
            title: 'FAQ should support product and contact pages',
            paragraphs: [
              'Product pages explain fit. FAQ reduces hesitation. Contact pages convert the next step.',
              'Those three layers are strongest when they support each other rather than acting like disconnected content.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'Foreign trade FAQ should answer the concerns that block contact.',
          'Lead time, customization, communication, and after-sales are often key topics.',
          'FAQ is strongest as a decision-support layer between product and contact pages.',
        ],
        ctaTitle: 'If your foreign trade site gets attention but weak inquiry, review the FAQ layer',
        ctaDescription: 'FAQ that addresses real decision friction usually helps inquiry more than generic information blocks.',
      },
    },
  },
  'landing-page-vs-company-website': {
    slug: 'landing-page-vs-company-website',
    priority: {
      zh: 0.6,
      en: 0.48,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['website-development', 'company-website-development'],
    content: {
      zh: {
        navLabel: '营销落地页和企业官网有什么区别，什么时候该做哪一种',
        categoryLabel: '对比',
        metaTitle: '营销落地页和企业官网有什么区别？怎么选更合适｜致诚工作室',
        metaDescription:
          '营销落地页和企业官网的差别，在于目标、内容结构和使用场景。本文拆解什么时候更适合做落地页，什么时候更适合做官网。',
        keywords: ['营销落地页和官网区别', '落地页怎么选', '企业官网开发', '网站开发'],
        eyebrow: 'Article',
        heroTitle: '营销落地页和企业官网有什么区别，什么时候该做哪一种',
        heroDescription:
          '很多项目一开始就把“官网”和“落地页”混在一起，但这两类页面承担的任务并不一样。官网更适合长期承接品牌和内容，落地页更适合围绕单一目标做更短路径的转化。',
        introTitle: '为什么这个选择经常会影响后面整个网站结构',
        introParagraphs: [
          '如果一开始把落地页当官网做，后面会发现内容不够承接；如果把官网当落地页做，又会发现路径太散、转化不够聚焦。',
          '所以它不是视觉风格选择，而是目标和结构选择。',
        ],
        sections: [
          {
            title: '落地页更适合单一目标转化',
            paragraphs: [
              '活动报名、广告投放、单一产品推广、特定服务转化，这些通常更适合落地页。',
              '因为它更强调短路径、更少分散和更强行动引导。',
            ],
          },
          {
            title: '官网更适合长期内容和品牌承接',
            paragraphs: [
              '企业官网通常要承接服务说明、FAQ、文章、多语言、案例和长期 SEO 内容，所以结构会更完整。',
              '官网更像一个长期资产，不只是单次转化页面。',
            ],
          },
          {
            title: '很多项目其实两者都需要',
            paragraphs: [
              '官网负责长期表达和搜索流量，落地页负责某个阶段的集中转化，这两者并不冲突。',
              '更关键的是要先知道当前你最急需解决的是长期承接，还是短期转化。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '落地页更适合单一目标和短路径转化。',
          '官网更适合长期品牌和内容承接。',
          '很多项目最终两者都需要，但优先级应该按当前目标来排。',
        ],
        ctaTitle: '如果你在纠结先做官网还是落地页，先看目标是长期承接还是短期转化',
        ctaDescription: '只要目标先排清楚，页面结构和投入方向会好判断很多。',
      },
      en: {
        navLabel: 'Landing Page vs Company Website',
        categoryLabel: 'Comparison',
        metaTitle: 'Landing Page vs Company Website: Which One Fits Better? | Zhicheng Studio',
        metaDescription:
          'Landing pages and company websites serve different jobs. This article explains when a focused landing page makes more sense and when a full website is the better fit.',
        keywords: ['landing page vs website', 'company website vs landing page', 'website strategy'],
        eyebrow: 'Article',
        heroTitle: 'Landing pages and company websites solve different problems',
        heroDescription:
          'Many teams mix landing pages and websites together too early, but the two structures are built for different goals. One is better for a narrow conversion path, the other is better for long-term content and brand support.',
        introTitle: 'Why this choice affects the whole site structure',
        introParagraphs: [
          'If a landing page is forced to act like a full website, it usually becomes too thin. If a company website is forced into a landing-page role, it often becomes too broad and less focused.',
          'This is not only a design choice. It is a structure and objective choice.',
        ],
        sections: [
          {
            title: 'Landing pages fit focused conversion goals',
            paragraphs: [
              'Campaigns, ad traffic, one-off service conversion, and single-product pushes often fit landing pages well.',
              'They work because the path is shorter, narrower, and more action-driven.',
            ],
          },
          {
            title: 'Company websites fit long-term brand and content support',
            paragraphs: [
              'A company website usually needs to carry services, FAQ, articles, multilingual support, and longer-term search growth.',
              'It behaves more like a durable business asset than a single campaign surface.',
            ],
          },
          {
            title: 'Many businesses eventually need both',
            paragraphs: [
              'The website can support long-term content and search, while landing pages support focused campaigns or offers.',
              'The key is deciding whether the current priority is durable structure or immediate conversion.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'Landing pages are usually stronger for focused conversion.',
          'Company websites are usually stronger for long-term content and brand support.',
          'Many businesses need both, but the priority should follow the current objective.',
        ],
        ctaTitle: 'If you are deciding between a website and a landing page, start with the objective',
        ctaDescription: 'Once the priority is clear, the structure and investment level become much easier to judge.',
      },
    },
  },
  'mini-program-admin-panel-planning': {
    slug: 'mini-program-admin-panel-planning',
    priority: {
      zh: 0.6,
      en: 0.48,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['mini-program-development', 'web-app-development'],
    content: {
      zh: {
        navLabel: '小程序后台应该怎么规划，才不会前台上线后后台一团乱',
        categoryLabel: '小程序',
        metaTitle: '小程序后台怎么规划？后台结构参考｜致诚工作室',
        metaDescription:
          '小程序后台怎么规划，重点在于内容管理、订单处理、状态流转和权限边界，而不是等前台做好后再随手补。本文拆解更稳的后台规划方式。',
        keywords: ['小程序后台怎么规划', '小程序后台管理', '小程序开发', '业务后台'],
        eyebrow: 'Article',
        heroTitle: '小程序后台应该怎么规划，才不会前台上线后后台一团乱',
        heroDescription:
          '很多小程序项目的问题，不在前台页面，而在后台完全是后补的。前台上线了，运营却发现内容不好改、订单不好处理、状态看不清、权限也不明。后台如果不跟着一起规划，项目很快就会卡住。',
        introTitle: '为什么小程序后台最容易被低估',
        introParagraphs: [
          '因为很多人天然把小程序理解成“前端产品”，后台常常被当成上线后再补的东西。',
          '但真正影响运营效率的，往往不是前台页面，而是后台能不能顺手地承接业务动作。',
        ],
        sections: [
          {
            title: '内容、订单和状态通常是第一批核心后台模块',
            paragraphs: [
              '很多小程序项目都会涉及内容管理、订单处理、状态追踪、消息和用户信息，这些通常应该在立项时就进入后台范围。',
              '如果这些能力完全没有提前考虑，前台体验再顺，后面也会被运营问题拖住。',
            ],
          },
          {
            title: '权限和角色最好尽早拆清楚',
            paragraphs: [
              '谁能改内容、谁能看订单、谁能处理状态、谁能看报表，这些问题最好在后台设计时就分清楚。',
              '如果后台角色边界模糊，越往后越容易出现误操作和沟通成本。',
            ],
          },
          {
            title: '后台不是附属，而是业务闭环的一半',
            paragraphs: [
              '小程序要真正跑起来，不只是用户能操作，更重要的是后台能接住这些操作。',
              '所以后台不是附带补一下，而是业务闭环的一半。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '小程序后台最好和前台一起规划，而不是上线后再补。',
          '内容、订单、状态和权限通常是最先要考虑的后台模块。',
          '后台能不能接住业务动作，直接影响项目能不能长期跑顺。',
        ],
        ctaTitle: '如果你在做小程序，别只盯前台，把后台一起拉进方案里',
        ctaDescription: '后台结构越早理顺，后面的运营和迭代成本通常越低。',
      },
      en: {
        navLabel: 'How to Plan the Admin Side of a Mini-program',
        categoryLabel: 'Mini-program',
        metaTitle: 'How to Plan the Admin Side of a Mini-program | Zhicheng Studio',
        metaDescription:
          'Mini-program admin planning should cover content, order flow, state handling, and permissions early instead of being added only after the frontend launches.',
        keywords: ['mini-program admin planning', 'mini-program backend', 'mini-program admin panel'],
        eyebrow: 'Article',
        heroTitle: 'Mini-programs run much better when the admin side is planned early',
        heroDescription:
          'Many mini-program projects struggle not because of the user-facing screens, but because the admin side was treated as an afterthought. Once operations need to manage content, orders, states, and roles, the gap becomes obvious.',
        introTitle: 'Why the admin side gets underestimated',
        introParagraphs: [
          'Mini-programs are often seen as frontend products first, so admin planning gets delayed too long.',
          'But in practice, long-term operational efficiency often depends more on admin flow than on screens alone.',
        ],
        sections: [
          {
            title: 'Content, orders, and state usually form the first core modules',
            paragraphs: [
              'Many mini-program projects need content handling, order flow, status tracking, messaging, and user records from the beginning.',
              'If those admin layers are absent, operations will hit friction very quickly even if the frontend looks smooth.',
            ],
          },
          {
            title: 'Roles and permissions should be clarified early',
            paragraphs: [
              'Who edits content, who sees orders, who manages state, and who reads reports should be separated deliberately.',
              'Without that separation, the admin side becomes harder to use and more error-prone over time.',
            ],
          },
          {
            title: 'The admin side is half of the business loop',
            paragraphs: [
              'A mini-program only works well when the business can receive and handle the user actions the frontend creates.',
              'That makes the admin side a core product layer rather than a support extra.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'The admin side should be planned alongside the frontend, not after it.',
          'Content, order, state, and permission layers are usually core modules.',
          'Admin flow strongly influences whether the business loop stays workable after launch.',
        ],
        ctaTitle: 'If you are planning a mini-program, bring the admin side into scope early',
        ctaDescription: 'The earlier the admin structure is clarified, the easier operations and iteration usually become.',
      },
    },
  },
  'business-system-phase-one-scope': {
    slug: 'business-system-phase-one-scope',
    priority: {
      zh: 0.6,
      en: 0.48,
    },
    publishedAt: '2026-03-30',
    readingMinutes: 6,
    relatedServices: ['web-app-development'],
    content: {
      zh: {
        navLabel: '企业系统一期应该先做哪些模块，才更容易上线和验证',
        categoryLabel: '企业系统',
        metaTitle: '企业系统一期先做哪些模块？一期范围参考｜致诚工作室',
        metaDescription:
          '企业系统一期应该先做哪些模块，关键在于先打通最核心流程，而不是一开始就想把所有模块做满。本文拆解一期范围更稳的判断方式。',
        keywords: ['企业系统一期范围', '系统一期做什么', '管理系统开发', '企业系统开发'],
        eyebrow: 'Article',
        heroTitle: '企业系统一期应该先做哪些模块，才更容易上线和验证',
        heroDescription:
          '企业系统最常见的问题之一，是一开始就想把所有模块都做满。结果周期长、风险高、验收困难。更稳的一期范围，通常不是模块越多越好，而是先把最关键的一条业务链路打通。',
        introTitle: '为什么一期范围最容易失控',
        introParagraphs: [
          '因为系统项目天然复杂，内部各角色也都会提出很多需求，最后很容易把“一期”做成一个几乎没有边界的大项目。',
          '如果一开始不收范围，后面不仅难上线，也很难验证真正的业务价值。',
        ],
        sections: [
          {
            title: '一期最适合优先做核心链路',
            paragraphs: [
              '先看哪一条流程最重要、最影响日常效率、最值得先落地，再围绕它决定首批模块。',
              '系统的一期不是要全，而是要先证明这套结构能真正承接业务。',
            ],
          },
          {
            title: '配置、报表和次级模块可以后置',
            paragraphs: [
              '很多项目一开始就想把报表、统计、配置中心和各种边缘流程一起做进去，这会明显增加复杂度。',
              '如果一期先把主流程做稳，后面的配置和报表会更容易在真实使用中判断优先级。',
            ],
          },
          {
            title: '一期范围越清楚，验收越容易',
            paragraphs: [
              '只要知道一期到底要解决什么问题，验收标准就会更清楚，团队也更容易对齐预期。',
              '很多系统项目之所以验收困难，本质上是因为“一期到底要做到哪”从头到尾都没真正说清楚。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '企业系统一期最适合先打通核心业务链路。',
          '报表、配置和次级模块通常更适合后置。',
          '一期范围越清楚，越容易上线、验收和继续迭代。',
        ],
        ctaTitle: '如果你在规划企业系统一期，先把最关键的一条业务链路圈出来',
        ctaDescription: '只要一期先收在最有价值的主流程上，系统上线和后续扩展都会更稳。',
      },
      en: {
        navLabel: 'What Should an Internal System Build in Phase One?',
        categoryLabel: 'Internal System',
        metaTitle: 'What Should an Internal System Build in Phase One? | Zhicheng Studio',
        metaDescription:
          'Phase one of an internal system should usually focus on the most valuable workflow rather than trying to ship every module at once. This article explains a steadier scope approach.',
        keywords: ['internal system phase one scope', 'business system MVP', 'admin system rollout'],
        eyebrow: 'Article',
        heroTitle: 'Phase one of an internal system is usually stronger when it focuses on the core workflow',
        heroDescription:
          'A common system-project mistake is trying to ship every module in phase one. That often creates longer cycles, higher risk, and harder acceptance. A steadier phase one usually proves the most important workflow first.',
        introTitle: 'Why first-phase scope gets out of control so easily',
        introParagraphs: [
          'System projects naturally attract many requests from different roles, which makes phase one expand too quickly if the team never draws a hard boundary.',
          'Without that boundary, launch and validation both become much harder.',
        ],
        sections: [
          {
            title: 'Phase one should prioritize the core workflow',
            paragraphs: [
              'Identify the workflow that matters most to daily operations or business efficiency and use that as the center of the first release.',
              'Phase one does not need to be complete. It needs to prove the system can support the business in a meaningful way.',
            ],
          },
          {
            title: 'Reporting, settings, and secondary modules often fit later',
            paragraphs: [
              'Many teams try to add dashboards, configuration centers, and edge workflows too early.',
              'If the core path is stable first, later configuration and reporting priorities become much easier to judge from real usage.',
            ],
          },
          {
            title: 'Clearer phase one scope makes acceptance easier',
            paragraphs: [
              'When the first release solves a clearly defined problem, acceptance criteria become much easier to align.',
              'A lot of system projects become hard to sign off simply because nobody ever defined what phase one was meant to finish.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'Phase one should usually focus on the most valuable workflow.',
          'Reporting, settings, and secondary modules often fit better later.',
          'Clearer scope makes launch, acceptance, and later iteration much easier.',
        ],
        ctaTitle: 'If you are defining phase one, circle the most valuable business workflow first',
        ctaDescription: 'A tighter first release usually makes launch and later expansion much more manageable.',
      },
    },
  },

  'website-requirements-document-preparation': {
    slug: 'website-requirements-document-preparation',
    priority: {
      zh: 0.64,
      en: 0.5,
    },
    publishedAt: '2026-03-31',
    readingMinutes: 6,
    relatedServices: ['website-development', 'company-website-development'],
    content: {
      zh: {
        navLabel: '网站开发需求文档怎么准备，沟通效率会高很多',
        categoryLabel: '流程',
        metaTitle: '网站开发需求文档怎么准备？沟通效率更高的整理方法｜致诚工作室',
        metaDescription:
          '网站开发需求文档不一定要写得很正式，但目标、页面、功能边界和素材准备越清楚，沟通和报价就越高效。',
        keywords: ['网站开发需求文档', '官网需求整理', '网站项目沟通', '网站开发准备'],
        eyebrow: 'Article',
        heroTitle: '网站开发需求文档怎么准备，沟通效率会高很多',
        heroDescription:
          '很多网站项目一开始反复沟通，不是因为执行慢，而是需求信息散、页面目标不清、素材准备不到位。需求文档准备得越清楚，后面的方案、报价和工期判断就越稳。',
        introTitle: '为什么很多网站项目一开始就反复来回',
        introParagraphs: [
          '很多人以为“先找开发聊聊再说”就够了，但真正进入项目后，最耗时间的往往不是做页面，而是前期信息没整理清楚，只能反复确认。',
          '所以网站开发需求文档不一定非要很复杂，但至少要把目标、页面、功能边界、素材准备这几件事先讲明白，沟通效率会明显提高。',
        ],
        sections: [
          {
            title: '先把这次做站的目标写清楚',
            paragraphs: [
              '先回答一个最基础的问题：这次做网站到底是为了品牌展示、获客转化、内容承载，还是业务配合。目标不同，页面结构和优先级都会变。',
              '如果目标没写清楚，后面设计、开发、业务方理解的可能根本不是同一个项目，讨论越多越容易跑偏。',
            ],
          },
          {
            title: '把页面范围和功能边界先列出来',
            paragraphs: [
              '首页、服务页、案例页、FAQ、联系页这些页面哪些要做，哪些先不做，最好一开始就列清楚。功能上也一样，表单、后台、权限、内容发布能力要不要做，越早说清越省事。',
              '这一步的重点不是把每个细节写满，而是先把项目边界划出来，避免做到一半又不断加项。',
            ],
            bullets: ['先列页面清单', '再列功能清单', '最后标出本期不做的部分'],
          },
          {
            title: '把现有素材和缺失素材分开整理',
            paragraphs: [
              '很多官网项目拖延，不是因为代码没写完，而是公司介绍、服务说明、案例资料、图片素材一直没准备齐。开发团队等素材，业务方又以为开发还没开始。',
              '所以需求文档里最好顺手标注：哪些内容已经有，哪些还缺，分别由谁提供。这样项目推进时会顺很多。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '需求文档最先要写清的是项目目标，而不是视觉细节。',
          '页面范围和功能边界越早确定，后面越不容易失控。',
          '素材准备情况如果不提前整理，项目沟通成本会被不断放大。',
        ],
        ctaTitle: '如果你准备启动网站项目，先把需求整理成一版可沟通的文档',
        ctaDescription: '目标、页面、功能和素材先理顺，后面的方案、报价和排期判断会高效很多。',
      },
      en: {
        navLabel: 'How to Prepare a Website Requirements Document',
        categoryLabel: 'Process',
        metaTitle: 'How to Prepare a Website Requirements Document for Smoother Project Communication | Zhicheng Studio',
        metaDescription:
          'A website requirements document does not need to be formal, but clearer goals, page scope, feature boundaries, and content readiness make planning much smoother.',
        keywords: ['website requirements document', 'website project brief', 'website planning', 'project communication'],
        eyebrow: 'Article',
        heroTitle: 'How to prepare a website requirements document that makes communication easier',
        heroDescription:
          'Many website projects slow down early not because of delivery speed, but because goals, page scope, and content readiness are still unclear. A better brief makes planning and estimation much easier.',
        introTitle: 'Why website projects often feel messy from the start',
        introParagraphs: [
          'People often think it is enough to start by “talking with a developer first,” but the most time-consuming part is usually not design or coding. It is the repeated clarification caused by incomplete input.',
          'That is why a website requirements document does not need to be complex, but it should at least define the goal, key pages, feature boundaries, and content preparation status.',
        ],
        sections: [
          {
            title: 'Start with the business goal',
            paragraphs: [
              'The first question should be simple: is this website mainly for brand presentation, lead generation, content delivery, or business support. The answer changes structure and priorities immediately.',
              'If the goal stays vague, design, development, and stakeholders will often discuss different versions of the same project without realizing it.',
            ],
          },
          {
            title: 'List page scope and feature boundaries early',
            paragraphs: [
              'Define which pages belong in the first release, such as home, services, case studies, FAQ, and contact. Do the same for features like forms, admin access, permissions, or content publishing tools.',
              'The point is not to over-specify every detail. It is to make the project boundary visible early so the scope does not keep drifting later.',
            ],
            bullets: ['List the planned pages', 'List the planned features', 'Mark what is intentionally out of scope'],
          },
          {
            title: 'Separate ready content from missing content',
            paragraphs: [
              'Many company website projects stall because the code is waiting on missing service descriptions, case material, photos, or company copy. The team keeps waiting while everyone assumes someone else is still working.',
              'A better requirements document marks what content already exists, what is missing, and who is responsible for each part. That alone improves project flow a lot.',
            ],
          },
        ],
        takeawayTitle: 'Key takeaways',
        takeaways: [
          'The first thing a website brief should clarify is the project goal, not visual details.',
          'Clear page scope and feature boundaries reduce rework later.',
          'Content readiness is part of project planning, not something to leave until the end.',
        ],
        ctaTitle: 'If you are about to start a website project, prepare one workable brief first',
        ctaDescription: 'Clearer goals, scope, and content input usually make planning, pricing, and scheduling much easier.',
      },
    },
  },

  'company-website-service-page-writing': {
    slug: 'company-website-service-page-writing',
    priority: {
      zh: 0.64,
      en: 0.5,
    },
    publishedAt: '2026-03-31',
    readingMinutes: 6,
    relatedServices: ['company-website-development', 'website-development'],
    content: {
      zh: {
        navLabel: '企业官网服务页怎么写，才不会只剩空泛介绍',
        categoryLabel: '企业官网',
        metaTitle: '企业官网服务页怎么写？更有说服力的服务页结构参考｜致诚工作室',
        metaDescription:
          '企业官网服务页不该只是罗列业务名称，还要讲清适合谁、解决什么问题、怎么合作以及为什么值得联系。本文拆解更实用的服务页写法。',
        keywords: ['企业官网服务页', '服务页怎么写', '官网文案结构', '企业官网开发'],
        eyebrow: 'Article',
        heroTitle: '企业官网服务页怎么写，才不会最后只剩几句空泛介绍',
        heroDescription:
          '很多企业官网有服务页，但内容往往只停留在“我们提供什么服务”。访客真正想知道的，其实是这项服务适不适合自己、能解决什么问题、合作会怎么推进，以及为什么值得继续联系。',
        introTitle: '为什么很多服务页看起来完整，实际却不太能打动人',
        introParagraphs: [
          '服务页最常见的问题不是字数太少，而是信息顺序不对。页面一上来就在讲公司有多专业，却没有先回答客户最关心的“这项服务跟我有什么关系”。',
          '如果服务页不能帮访客快速判断适配度、价值点和下一步动作，它就很容易变成一个存在感不高的说明页，而不是承接搜索和转化的核心页面。',
        ],
        sections: [
          {
            title: '先写清这项服务适合谁、解决什么问题',
            paragraphs: [
              '服务页开头最该回答的，不是企业自己的履历，而是客户处在什么阶段、常见痛点是什么、为什么会需要这项服务。只要这一步讲清楚，访客才更容易继续往下看。',
              '尤其是企业官网场景，很多访客并不会耐心读完整页，所以前面几屏的信息应该优先帮助他们快速判断“这是不是我要找的东西”。',
            ],
            bullets: ['明确目标客户或适用场景', '点出常见问题或需求', '用客户能听懂的话讲服务价值'],
          },
          {
            title: '再讲服务内容和合作方式，不要只堆抽象能力',
            paragraphs: [
              '很多服务页喜欢写“专业、高效、一站式”，但这些词如果没有具体内容支撑，访客很难建立真实判断。更有效的写法，是把服务包含什么、通常怎么推进、客户需要配合什么讲具体。',
              '这样做不仅能减少空话，也能提前过滤掉不匹配的预期，让真正合适的客户更愿意继续沟通。',
            ],
            bullets: ['服务范围和交付内容', '大致合作流程或阶段', '客户需要准备的资料或配合事项'],
          },
          {
            title: '最后补信任信息和下一步动作',
            paragraphs: [
              '服务页不是把内容讲完就结束，它还要回答“为什么值得联系你”。这时候 FAQ、过往项目经验、维护方式、响应节奏这类信息，都能明显降低联系前的犹豫。',
              '同时，页面要给出明确但不过度催促的下一步动作，比如适合先沟通什么、联系前准备哪些信息。这样服务页才真正能承接转化。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '服务页先回答适合谁、解决什么问题，再谈公司有多专业。',
          '服务内容和合作方式要具体，抽象形容词只能做辅助。',
          '信任信息和下一步动作补得清楚，服务页才更容易承接咨询。',
        ],
        ctaTitle: '如果你正在补企业官网服务页，先把客户判断路径写顺',
        ctaDescription: '只要把适配对象、服务内容、合作方式和联系动作排清楚，服务页的说服力通常会明显提升。',
      },
      en: {
        navLabel: 'How to Write a Company Website Service Page',
        categoryLabel: 'Company Website',
        metaTitle: 'How to Write a More Convincing Company Website Service Page | Zhicheng Studio',
        metaDescription:
          'A company website service page should do more than list a service name. It should explain fit, problems solved, working style, and why the visitor should continue.',
        keywords: ['company website service page', 'service page writing', 'website copy structure', 'company website development'],
        eyebrow: 'Article',
        heroTitle: 'A company website service page should do more than make the service sound impressive',
        heroDescription:
          'Many service pages only say what the company offers. What visitors really want to know is whether the service fits their situation, what problem it solves, how the cooperation works, and whether it feels worth discussing further.',
        introTitle: 'Why many service pages look finished but still feel weak',
        introParagraphs: [
          'The problem is often not a lack of words, but the wrong information order. Many pages start by praising the company instead of helping the visitor decide whether the service is relevant.',
          'If a service page does not help with fit, value, and next-step clarity, it becomes a background page instead of a page that supports search and conversion.',
        ],
        sections: [
          {
            title: 'Start with who the service is for and what problem it solves',
            paragraphs: [
              'The opening of a service page should explain the situation the visitor may be in, the common problem they may be facing, and why this service exists in the first place.',
              'That matters especially on company websites, because many visitors will scan quickly and decide within the first few sections whether the page is worth their time.',
            ],
            bullets: ['Clarify the target client or situation', 'Name the common problem clearly', 'Explain the value in practical language'],
          },
          {
            title: 'Then explain the service scope and working style',
            paragraphs: [
              'Words like professional, efficient, or one-stop rarely mean much on their own. A stronger page explains what is included, how the work is usually structured, and what the client should expect during the process.',
              'That kind of clarity reduces fluff, sets better expectations, and helps the right clients feel more confident about continuing.',
            ],
            bullets: ['What is included in the service', 'The rough delivery or cooperation process', 'What the client may need to prepare'],
          },
          {
            title: 'Add trust signals and a clear next step at the end',
            paragraphs: [
              'A service page should not stop after the description. It should also answer why the visitor should trust the company enough to reach out. FAQ, project experience, maintenance approach, and response rhythm all help here.',
              'The page should also make the next step feel simple: what to ask first, what information to prepare, and how to begin the conversation without unnecessary friction.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'A service page should explain fit and problem first, not company praise first.',
          'Concrete scope and working style are stronger than abstract adjectives.',
          'Trust signals and a clear next step make the page much more useful for conversion.',
        ],
        ctaTitle: 'If you are improving a service page, start with the visitor’s decision path',
        ctaDescription: 'When fit, scope, working style, and next-step clarity are all in place, a service page usually becomes much more persuasive.',
      },
    },
  },
  'foreign-trade-website-homepage-mistakes': {
    slug: 'foreign-trade-website-homepage-mistakes',
    priority: {
      zh: 0.66,
      en: 0.52,
    },
    publishedAt: '2026-04-01',
    readingMinutes: 6,
    relatedServices: ['foreign-trade-website-development', 'website-development'],
    content: {
      zh: {
        navLabel: '外贸网站首页最容易影响询盘的几个问题',
        categoryLabel: '外贸网站',
        metaTitle: '外贸网站首页最容易影响询盘的几个问题｜致诚工作室',
        metaDescription:
          '外贸网站首页如果信息顺序混乱、信任信号不足、CTA 不清晰，往往会直接影响询盘转化。本文拆解最常见的问题和调整思路。',
        keywords: ['外贸网站首页', '外贸网站询盘', '外贸网站转化', '外贸网站优化'],
        eyebrow: 'Article',
        heroTitle: '外贸网站首页最容易影响询盘的几个问题',
        heroDescription:
          '很多外贸网站不是没有流量，而是首页没有在几秒内说明你卖什么、服务谁、为什么值得信任，以及下一步该怎么联系。首页一旦失焦，后面的产品页和案例页就很难真正发挥作用。',
        introTitle: '为什么首页会直接影响询盘',
        introParagraphs: [
          '对第一次访问的海外客户来说，首页通常不是用来慢慢研究品牌故事，而是快速判断这家公司是否靠谱、产品是否相关、是否值得继续点下去。信息判断一旦卡住，用户就会直接离开。',
          '所以首页的核心任务不是“看起来完整”，而是先把价值表达、信任建立和行动路径讲清楚。很多询盘偏少的问题，根源就出在首页没有承担这个职责。',
        ],
        sections: [
          {
            title: '第一类问题：一上来没有讲清楚你是谁、卖什么、服务谁',
            paragraphs: [
              '不少外贸网站首页把大段口号、抽象愿景或过于宽泛的公司介绍放在最前面，但用户真正想先确认的是产品类别、服务对象、交付范围和典型应用场景。',
              '如果首屏不能在几秒内回答这些问题，用户就只能自己猜。猜测成本一高，跳出率通常也会跟着上去。',
            ],
            bullets: [
              '首屏标题是否明确写出产品或服务方向',
              '副标题是否说明目标客户、地区或应用场景',
              '首屏是否能快速进入产品页、案例页或联系页',
            ],
          },
          {
            title: '第二类问题：信任信号太弱，客户看完还是不放心',
            paragraphs: [
              '外贸网站首页不能只摆漂亮 Banner。对海外采购或合作方来说，他们会特别在意公司资质、服务年限、出口经验、合作区域、客户类型、认证和交付能力。',
              '如果这些信息都藏得很深，或者只用一句“专业可靠”带过，首页就很难承担建立初步信任的作用。',
            ],
            bullets: [
              '是否展示核心资质、认证、工厂/团队能力或服务年限',
              '是否有典型客户类型、出口市场或合作流程说明',
              '是否把 FAQ、About、Contact 等信任页入口放得足够明显',
            ],
          },
          {
            title: '第三类问题：CTA 太弱，用户不知道下一步该做什么',
            paragraphs: [
              '有些首页把大量内容都堆出来了，却没有明确引导用户去询价、提交需求、查看重点产品，或者联系销售。这样即使用户感兴趣，也容易停在“先看看”这一步。',
              '更有效的做法是按用户决策路径设计 CTA：首屏给出主要动作，页面中段给补充动作，底部再给一次低阻力联系入口。',
            ],
            bullets: [
              '首屏是否有清晰的询盘或联系按钮',
              '中段是否引导查看重点产品、FAQ 或合作流程',
              '底部是否提供表单、邮箱、WhatsApp 等低门槛联系路径',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '外贸网站首页首先要讲清楚产品、客户对象和应用场景，而不是先堆空泛品牌话术。',
          '信任信号如果太弱，首页再好看也很难支撑询盘转化。',
          'CTA 要按决策路径设计，让用户随时知道下一步能做什么。',
        ],
        ctaTitle: '如果你准备优化外贸网站首页，先检查信息顺序和转化路径',
        ctaDescription: '首页不是展示素材合集，而是询盘路径的起点。先把首屏表达、信任信号和 CTA 排顺，效果通常比继续堆内容更直接。',
      },
      en: {
        navLabel: 'Common Homepage Issues That Hurt B2B Inquiries',
        categoryLabel: 'Foreign Trade Website',
        metaTitle: 'Common Foreign Trade Website Homepage Issues That Reduce Inquiries | Zhicheng Studio',
        metaDescription:
          'If a foreign trade website homepage is vague, low-trust, or weak on calls to action, inquiry conversion usually suffers first. This article explains the most common problems and how to fix the page structure.',
        keywords: ['foreign trade website homepage', 'b2b website inquiries', 'export website conversion', 'homepage optimization'],
        eyebrow: 'Article',
        heroTitle: 'Common homepage issues that quietly reduce foreign trade inquiries',
        heroDescription:
          'Many B2B export websites do get visits, but the homepage fails to explain fast enough what the company offers, who it serves, why it is credible, and what the visitor should do next. When that first page is weak, deeper pages rarely get a fair chance.',
        introTitle: 'Why the homepage matters so much for inquiries',
        introParagraphs: [
          'For first-time overseas visitors, the homepage is usually where they decide whether the company looks relevant and trustworthy enough to keep exploring. If that decision takes too much effort, they leave.',
          'That means the homepage is not mainly a visual summary. Its real job is to express value, build early trust, and guide the next action with as little friction as possible.',
        ],
        sections: [
          {
            title: 'Issue one: the page does not explain fast enough what you sell and who it is for',
            paragraphs: [
              'Many export websites open with broad slogans or generic company language, while buyers are really trying to confirm the product type, target market, delivery scope, and use case.',
              'If the hero section cannot answer those basics in a few seconds, visitors are forced to guess. The more guessing required, the easier it is to lose them.',
            ],
            bullets: [
              'Does the hero headline clearly state the product or service direction?',
              'Does the supporting copy mention target buyers, regions, or application scenarios?',
              'Can users quickly move to product, case, or contact pages from the first screen?',
            ],
          },
          {
            title: 'Issue two: trust signals are too weak to support buyer confidence',
            paragraphs: [
              'A polished banner is not enough. Overseas buyers often look for evidence such as certifications, export experience, production capability, market coverage, and client type before they take the next step.',
              'If that information is hidden too deep or replaced by vague claims like “professional service,” the homepage does very little to reduce uncertainty.',
            ],
            bullets: [
              'Show core certifications, operational experience, or delivery capability',
              'Mention key markets, buyer types, or how cooperation usually works',
              'Make About, FAQ, and Contact paths easy to find',
            ],
          },
          {
            title: 'Issue three: the CTA is too soft, so interested visitors stall out',
            paragraphs: [
              'Some homepages include plenty of information but never make the next action obvious. Visitors may be interested, yet still hesitate because there is no clear path toward inquiry, quote request, product review, or contact.',
              'A better structure is to place calls to action along the decision path: a primary action in the hero section, supporting actions in the middle, and a low-friction contact option near the bottom.',
            ],
            bullets: [
              'Add a clear inquiry or contact CTA in the hero section',
              'Use mid-page CTAs to lead into products, FAQ, or process pages',
              'Offer low-friction contact options such as forms, email, or WhatsApp at the bottom',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'A B2B homepage should quickly explain what the company offers, who it serves, and where it fits.',
          'Trust signals matter early because buyers are screening credibility before they inquire.',
          'CTA placement should match the decision journey so visitors always know the next step.',
        ],
        ctaTitle: 'If you are improving a foreign trade homepage, start with message order and CTA flow',
        ctaDescription: 'A homepage should do more than look complete. When value, trust, and action paths are clearer, inquiry quality usually improves with it.',
      },
    },
  },
  'brand-vs-service-on-homepage': {
    slug: 'brand-vs-service-on-homepage',
    priority: {
      zh: 0.64,
      en: 0.5,
    },
    publishedAt: '2026-04-02',
    readingMinutes: 6,
    relatedServices: ['company-website-development', 'website-development'],
    content: {
      zh: {
        navLabel: '官网首页该先讲品牌还是先讲服务',
        categoryLabel: '企业官网',
        metaTitle: '官网首页该先讲品牌还是先讲服务？首页信息顺序参考｜致诚工作室',
        metaDescription:
          '官网首页该先讲品牌还是先讲服务，关键不在二选一，而在访客第一次进入时最需要先理解什么。本文拆解更适合转化和表达的首页信息顺序。',
        keywords: ['官网首页先讲品牌还是服务', '企业官网首页结构', '官网信息顺序', '企业官网开发'],
        eyebrow: 'Article',
        heroTitle: '官网首页该先讲品牌还是先讲服务，很多网站其实卡在信息顺序上',
        heroDescription:
          '不少企业官网首页的问题，不是没有品牌感，也不是服务写得不够多，而是信息顺序不对。访客第一次进入网站时，通常不是先想感受调性，而是先判断你到底做什么、适不适合自己、值不值得继续看。',
        introTitle: '为什么这个问题很容易被问偏',
        introParagraphs: [
          '很多团队会把首页理解成品牌门面，于是希望先讲理念、故事和视觉气质；也有些团队会反过来，把首页做成纯服务说明，第一页就开始堆业务条目。两边都不算完全错，但如果只押一边，首页往往会失衡。',
          '更现实的判断方式是：访客第一次进来，最需要先完成什么认知。如果品牌还没人认识，通常要先让人快速理解服务方向；如果服务已经能看懂，再用品牌语言去放大信任和差异化。',
        ],
        sections: [
          {
            title: '首页前几屏，通常先解决“你做什么、适合谁”',
            paragraphs: [
              '对大多数企业官网来说，首页最先要解决的是理解问题，而不是情绪问题。访客通常会先看你提供什么服务、适合哪些客户、能解决什么问题，再决定要不要继续往下看。',
              '这不代表品牌不重要，而是品牌表达需要建立在基础理解之上。连服务方向都没看懂时，单靠一句品牌口号很难真正打动人。',
            ],
            bullets: ['先讲核心服务方向', '再讲适合对象或典型场景', '尽快给出继续浏览的入口'],
          },
          {
            title: '品牌不是不要讲，而是更适合承担“放大信任和差异”',
            paragraphs: [
              '当访客已经知道你是做什么的，品牌表达才更容易发挥作用。这个阶段的品牌，不只是 Logo、色调或一句口号，而是你的做事方式、审美判断、沟通风格和对项目的理解深度。',
              '所以首页更稳的做法通常不是“品牌优先”或“服务优先”二选一，而是先用服务建立可理解性，再用品牌把信任感和辨识度拉起来。',
            ],
            bullets: ['品牌表达可以放在服务说明之后强化信任', '用案例、方法或风格体现品牌，而不是只写抽象口号', '品牌段落要服务于转化，而不是自我陶醉'],
          },
          {
            title: '什么时候可以把品牌放得更靠前',
            paragraphs: [
              '如果你的品牌已经有一定认知，或者行业本身更吃设计感、审美判断和信任背书，比如咨询、创意、设计、个人工作室等，首页可以适度把品牌表达往前提。',
              '但即使这样，也最好在首屏附近就让人知道你具体做什么，不然首页还是容易变成“看着不错，但不知道你卖什么”的经典事故现场。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '官网首页通常应先帮访客理解你做什么、适合谁，再放大品牌表达。',
          '品牌和服务不是二选一，更有效的是先建立理解，再建立信任和差异。',
          '只有在品牌认知较强或行业特别吃品牌感时，品牌才更适合明显前置。',
        ],
        ctaTitle: '如果你正在改首页，先别纠结讲品牌还是讲服务，先排信息顺序',
        ctaDescription: '把“做什么、适合谁、为什么值得信任、下一步做什么”这条路径排顺，首页通常会比单纯强化品牌或服务更有效。',
      },
      en: {
        navLabel: 'Should a Homepage Lead with Brand or Services?',
        categoryLabel: 'Company Website',
        metaTitle: 'Should a Website Homepage Lead with Brand or Services? A Better Content Order | Zhicheng Studio',
        metaDescription:
          'A homepage does not always need to choose between brand and services. The better question is what first-time visitors need to understand before they trust or continue.',
        keywords: ['homepage brand or services', 'company website homepage structure', 'homepage messaging order', 'company website development'],
        eyebrow: 'Article',
        heroTitle: 'Should a homepage talk about brand first or services first?',
        heroDescription:
          'Many company websites do not fail because brand is weak or because service content is missing. They fail because the message order is wrong. First-time visitors usually want to understand what you do, who it is for, and whether it is worth exploring further before they care about your positioning language.',
        introTitle: 'Why this question is often framed too simply',
        introParagraphs: [
          'Some teams treat the homepage mainly as a brand statement, so they lead with story, tone, and visual identity. Others swing to the other extreme and turn the homepage into a dense service list. Both approaches can miss the real visitor need.',
          'The more useful question is what a first-time visitor needs to understand first. If the business is not already familiar, service clarity usually needs to come before deeper brand expression. Once the offer is clear, brand can strengthen trust and differentiation.',
        ],
        sections: [
          {
            title: 'The first screens usually need to answer what you do and who it is for',
            paragraphs: [
              'For most company websites, the homepage should solve understanding before atmosphere. Visitors usually want to know the service direction, the kind of client or scenario it fits, and the problem it solves before they decide to keep reading.',
              'That does not make brand unimportant. It means brand works better after the visitor can already place the business in their mind.',
            ],
            bullets: ['Clarify the core service direction early', 'Mention who the offer fits or what scenario it serves', 'Give the visitor an easy path into deeper pages'],
          },
          {
            title: 'Brand works best when it amplifies trust and difference',
            paragraphs: [
              'Once the visitor understands the offer, brand becomes much more useful. At that point brand is not only logo, style, or slogan. It includes how the company thinks, communicates, designs, and delivers work.',
              'That is why many stronger homepages do not choose brand or services as a strict either-or. They use services to create clarity first, then use brand to deepen confidence and memorability.',
            ],
            bullets: ['Use brand after service clarity to strengthen trust', 'Show brand through method, taste, and proof rather than slogans alone', 'Keep brand expression connected to conversion, not self-display'],
          },
          {
            title: 'When brand can move closer to the front',
            paragraphs: [
              'If the brand already has some recognition, or the business depends heavily on taste, authority, or perceived style, such as consulting, creative work, design, or studio services, the homepage can give brand expression a stronger early role.',
              'Even then, the page should still make the service direction understandable quickly. Otherwise the homepage risks looking polished while staying unclear about what the business actually offers.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'Most homepages should create service clarity before leaning too hard on brand expression.',
          'Brand and services are not opposites. A strong homepage usually uses both in the right order.',
          'Brand can move earlier only when recognition or industry context makes it genuinely useful that early.',
        ],
        ctaTitle: 'If you are reshaping a homepage, focus on message order before style debates',
        ctaDescription: 'When the page clearly explains what you do, who it fits, why it is credible, and what the visitor should do next, both brand and conversion usually improve together.',
      },
    },
  },

  'website-admin-mini-program-boundaries': {
    slug: 'website-admin-mini-program-boundaries',
    priority: {
      zh: 0.64,
      en: 0.5,
    },
    publishedAt: '2026-04-04',
    readingMinutes: 7,
    relatedServices: ['web-app-development', 'mini-program-development', 'website-development'],
    content: {
      zh: {
        navLabel: '官网、后台、小程序一起做时，技术边界怎么拆',
        categoryLabel: '企业系统',
        metaTitle: '官网、后台、小程序一起做时，技术边界怎么拆更稳｜致诚工作室',
        metaDescription:
          '官网、后台、小程序一起做时，最容易出问题的不是技术选型，而是职责拆分不清。本文从真实交付视角拆解三端边界、数据归属和迭代顺序。',
        keywords: ['官网 后台 小程序 边界', '企业系统规划', '小程序开发', 'Web应用开发'],
        eyebrow: 'Article',
        heroTitle: '官网、后台、小程序一起做时，真正难的不是技术，而是边界怎么拆',
        heroDescription:
          '一旦项目同时涉及官网、管理后台和小程序，团队很容易在中途开始互相借功能：官网想放更多操作，小程序想承接更多展示，后台又被临时塞进内容发布、订单处理、数据统计和权限控制。最后不是哪端都不能做，而是哪端都做得有点别扭。',
        introTitle: '为什么这类项目特别容易越做越乱',
        introParagraphs: [
          '因为三端看起来都在服务同一套业务，很多人会下意识觉得功能放哪边都行。可一旦入口、角色、数据责任没提前拆开，后面每加一个需求，都会把结构再搅乱一点。',
          '真实交付里，技术栈通常不是最先卡住项目的点。更常见的问题是：首页想兼顾交易，小程序想顺手做内容中心，后台既要给运营用又想让客户偶尔登录。方向一混，开发、测试和后续维护都会一起变重。',
        ],
        sections: [
          {
            title: '先按用户场景拆，不要先按页面形态拆',
            paragraphs: [
              '更稳的拆法通常不是“官网放展示，小程序放功能”这么粗，而是先看谁在什么场景下用。第一次了解公司、看案例、看服务边界，通常发生在公开访问场景；下单、预约、进度查询、会员动作，往往更适合高频轻操作场景；配置、审核、履约、报表，才是后台真正该承接的事。',
              '也就是说，边界首先由使用者和操作频率决定，再落到载体。先把场景拆清楚，后面很多功能归属会自然得多。',
            ],
            bullets: ['官网优先承接公开信息、品牌表达、内容沉淀和线索入口', '小程序优先承接高频、轻量、面向终端用户的动作', '后台优先承接运营、管理、审核、配置和数据处理'],
          },
          {
            title: '数据只有一套，但入口可以有多套',
            paragraphs: [
              '很多项目绕不清，是因为把“多个入口”误解成“多套数据”。官网、后台、小程序可以服务不同角色，但商品、预约、用户、订单、内容状态这些核心数据，最好始终有明确主归属。否则今天小程序能改，明天后台也能改，后天官网表单再写一套，数据很快就会互相打架。',
              '我的经验是：先定义主数据来源，再决定其他端能看什么、改什么、通过什么接口同步。这样即使三端分阶段上线，结构也不容易散。',
            ],
            bullets: ['先定义哪一端负责创建主数据', '再定义哪些端只能读取、哪些端可以编辑', '把状态流转和通知规则单独写清，不要藏在页面备注里'],
          },
          {
            title: '一期别追求三端都完整，先让最关键链路闭环',
            paragraphs: [
              '三端一起做时，最危险的想法就是“既然都要做，不如一次做完整”。结果通常是官网不够清楚，小程序不够顺手，后台也只做了半套，最后每一端都在补洞。',
              '更实际的做法是先选一条最关键的业务链路，比如官网获客到小程序提交，再到后台跟进；或者小程序下单到后台处理，再回到官网做内容承接。先把一条链路跑通，剩下的模块才有真实使用反馈可参考。',
            ],
          },
        ],
        takeawayTitle: '这篇文章的重点',
        takeaways: [
          '官网、后台、小程序的边界，应该先按用户场景和操作频率来拆，不是按“哪个页面像什么”来拆。',
          '三端可以有不同入口，但核心数据最好有单一主归属，否则后面一定会互相打架。',
          '一期先跑通最关键的一条业务链路，比三端同时做满更稳。',
        ],
        ctaTitle: '如果你准备同时做官网、后台和小程序，先把边界图画出来',
        ctaDescription: '把角色、入口、主数据归属和一期闭环链路先讲清楚，后面的开发节奏会比一上来谈页面和功能轻松很多。',
      },
      en: {
        navLabel: 'How to Split Boundaries Across Website, Admin, and Mini-program',
        categoryLabel: 'Internal System',
        metaTitle: 'How to Split Boundaries Across a Website, Admin Panel, and Mini-program | Zhicheng Studio',
        metaDescription:
          'When a project includes a public website, an admin panel, and a mini-program, the main risk is usually not stack choice but unclear responsibility. This article explains a more practical way to draw the lines.',
        keywords: ['website admin mini-program boundaries', 'internal system planning', 'mini-program architecture', 'web app scope'],
        eyebrow: 'Article',
        heroTitle: 'When a website, admin panel, and mini-program are built together, boundary design matters more than stack choice',
        heroDescription:
          'Once a project spans a public website, an operations backend, and a mini-program, teams often start borrowing features across all three surfaces. The website wants more actions, the mini-program starts carrying too much content, and the admin panel becomes a dumping ground for whatever was not planned clearly. The result is not that any one surface is impossible, but that all of them feel awkward.',
        introTitle: 'Why these projects become messy so easily',
        introParagraphs: [
          'All three surfaces support the same business, so it is tempting to assume functionality can be placed anywhere. But once entry points, roles, and data ownership are not separated early, every additional request makes the structure less stable.',
          'In real delivery work, technology is rarely the first thing that breaks the project. A more common problem is that the homepage also wants transaction logic, the mini-program tries to become a content hub, and the admin panel is expected to serve both operators and external users. Once that direction blurs, implementation, testing, and maintenance all become heavier.',
        ],
        sections: [
          {
            title: 'Start with user scenarios, not with page categories',
            paragraphs: [
              'A better split is not simply “website for content, mini-program for features.” Start by asking who uses each surface and in what context. Learning about the company, services, or case studies usually happens in a public browsing context. Booking, ordering, progress checks, and repeat lightweight actions fit a high-frequency user surface better. Configuration, approvals, fulfillment, and reporting belong much more naturally in the admin layer.',
              'In other words, boundaries should first follow users and usage frequency, then follow interface type. Once the scenario split is clear, feature ownership becomes much easier to judge.',
            ],
            bullets: ['Let the website handle public information, brand communication, content depth, and lead entry', 'Let the mini-program handle frequent, lightweight actions for end users', 'Let the admin panel handle operations, approvals, configuration, and data processing'],
          },
          {
            title: 'There may be multiple entry points, but core data should still have one home',
            paragraphs: [
              'Many teams get stuck because they confuse multiple interfaces with multiple systems of record. A website, admin panel, and mini-program can serve different roles, but product data, booking records, users, orders, and content states should still have a clear primary owner. Otherwise one surface edits the data today, another rewrites it tomorrow, and the public site adds a third path the day after that.',
              'A practical approach is to define the primary source first, then decide which surfaces can read, which can edit, and how state changes are synchronized. That keeps the structure steadier even when the three surfaces launch in stages.',
            ],
            bullets: ['Define which surface creates the primary record', 'Define which surfaces are read-only and which can edit', 'Document status flow and notification rules separately instead of burying them in page notes'],
          },
          {
            title: 'Do not try to complete all three surfaces in phase one',
            paragraphs: [
              'The most dangerous idea in a three-surface project is usually “since we need all of them, we may as well finish all of them now.” In practice that often leads to a vague website, an inconvenient mini-program, and an admin panel that is only half usable.',
              'A safer move is to choose the most important business loop first. For example: website lead capture to mini-program submission to admin follow-up, or mini-program order placement to admin processing to website content support. Once one loop works end to end, later modules can be shaped by real usage instead of guesswork.',
            ],
          },
        ],
        takeawayTitle: 'Main takeaways',
        takeaways: [
          'Boundaries between a website, admin panel, and mini-program should be drawn from user scenario and usage frequency first.',
          'The interfaces can differ, but core data should still have a single primary owner.',
          'Phase one is safer when it closes one critical business loop instead of trying to finish all three surfaces completely.',
        ],
        ctaTitle: 'If you are planning all three surfaces together, draw the boundary map before the feature list',
        ctaDescription: 'Once roles, entry points, data ownership, and the phase-one loop are clear, the actual implementation usually becomes much easier to control.',
      },
    },
  },

}

export function getArticlePath(slug: ArticleSlug): string {
  return `/blog/${slug}`
}

export function isArticleSlug(slug: string): slug is ArticleSlug {
  return articleSlugs.includes(slug as ArticleSlug)
}

export function getArticle(locale: AppLocale, slug: string): LocalizedArticle | null {
  if (!isArticleSlug(slug)) {
    return null
  }

  const definition = articleDefinitions[slug]
  const content = definition.content[locale]

  return {
    slug,
    path: getArticlePath(slug),
    priority: definition.priority[locale],
    publishedAt: definition.publishedAt,
    readingMinutes: definition.readingMinutes,
    relatedServices: definition.relatedServices,
    ...content,
  }
}

export function getArticleSummaries(locale: AppLocale): LocalizedArticleSummary[] {
  return articleSlugs
    .map(slug => getArticle(locale, slug))
    .filter((article): article is LocalizedArticle => Boolean(article))
    .map(article => ({
      slug: article.slug,
      path: article.path,
      navLabel: article.navLabel,
      categoryLabel: article.categoryLabel,
      heroDescription: article.heroDescription,
      publishedAt: article.publishedAt,
      readingMinutes: article.readingMinutes,
      relatedServices: article.relatedServices,
    }))
}

export function getArticleSummariesByService(locale: AppLocale, serviceSlug: ServicePageSlug) {
  return getArticleSummaries(locale).filter(article => article.relatedServices.includes(serviceSlug))
}

export function getArticleStructuredData(locale: AppLocale, slug: ArticleSlug) {
  const article = getArticle(locale, slug)

  if (!article) {
    return null
  }

  const pageUrl = getLocalizedUrl(locale, article.path)

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: locale === 'zh' ? '首页' : 'Home',
            item: getLocalizedUrl(locale),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: locale === 'zh' ? '文章' : 'Blog',
            item: getLocalizedUrl(locale, '/blog'),
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: article.navLabel,
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'Article',
        '@id': `${pageUrl}#article`,
        headline: article.heroTitle,
        description: article.metaDescription,
        datePublished: article.publishedAt,
        dateModified: article.publishedAt,
        inLanguage: locale === 'zh' ? 'zh-CN' : 'en-US',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${pageUrl}#webpage`,
        },
        author: {
          '@type': 'Organization',
          name: siteConfig.brandName,
        },
        publisher: {
          '@type': 'Organization',
          name: siteConfig.brandName,
        },
        keywords: article.keywords.join(', '),
      },
    ],
  }
}
