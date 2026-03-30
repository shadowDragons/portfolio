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
