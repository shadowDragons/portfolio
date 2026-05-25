import { getAbsoluteAssetUrl, getLocaleSeoConfig, getLocalizedUrl, siteConfig, type AppLocale } from '@/lib/site-config'

export const servicePageSlugs = [
  'website-development',
  'website-development-company',
  'company-website-redesign',
  'website-maintenance-service',
  'company-website-development',
  'foreign-trade-website-building',
  'foreign-trade-website-development',
  'mini-program-development',
  'mini-program-development-company',
  'ai-agent-development',
  'enterprise-system-development-company',
  'web-app-development',
] as const

export type ServicePageSlug = (typeof servicePageSlugs)[number]

type ServiceFaq = {
  question: string
  answer: string
}

type ServiceStep = {
  title: string
  description: string
}

type ServicePageLocaleContent = {
  navLabel: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  eyebrow: string
  heroTitle: string
  heroDescription: string
  introTitle: string
  introParagraphs: string[]
  fitTitle: string
  fitItems: string[]
  deliverablesTitle: string
  deliverables: string[]
  outcomesTitle: string
  outcomes: string[]
  processTitle: string
  processSteps: ServiceStep[]
  faqTitle: string
  faqs: ServiceFaq[]
  ctaTitle: string
  ctaDescription: string
}

type ServicePageDefinition = {
  slug: ServicePageSlug
  priority: {
    zh: number
    en: number
  }
  serviceType: {
    zh: string
    en: string
  }
  statItems: Record<
    AppLocale,
    Array<{
      value: string
      label: string
      description: string
    }>
  >
  relatedSlugs: ServicePageSlug[]
  content: Record<AppLocale, ServicePageLocaleContent>
}

export type LocalizedServicePage = {
  slug: ServicePageSlug
  path: string
  priority: number
  serviceType: string
  relatedSlugs: ServicePageSlug[]
} & ServicePageLocaleContent & {
    statItems: Array<{
      value: string
      label: string
      description: string
    }>
  }

const servicePageDefinitions: Record<ServicePageSlug, ServicePageDefinition> = {
  'website-development': {
    slug: 'website-development',
    priority: {
      zh: 0.92,
      en: 0.68,
    },
    serviceType: {
      zh: '网站开发、企业官网与业务型网站定制开发',
      en: 'Custom website development for company sites, marketing sites, and web products',
    },
    statItems: {
      zh: [
        {
          value: 'Direct',
          label: '本人直接沟通与开发',
          description: '减少转述和分包链路，需求理解更完整。',
        },
        {
          value: 'Weekly',
          label: '按阶段同步进度',
          description: '每周可视化同步当前完成度、风险和下一步。',
        },
        {
          value: '1 Year',
          label: '上线后免费维护',
          description: '标准交付含 1 年维护，便于稳定运行和迭代。',
        },
      ],
      en: [
        {
          value: 'Direct',
          label: 'Direct communication and delivery',
          description: 'Requirements stay closer to the actual implementation.',
        },
        {
          value: 'Weekly',
          label: 'Weekly progress visibility',
          description: 'Progress, risks, and next steps stay visible throughout delivery.',
        },
        {
          value: '1 Year',
          label: 'Included maintenance window',
          description: 'Standard launches include one year of post-launch support.',
        },
      ],
    },
    relatedSlugs: ['website-development-company', 'company-website-development', 'website-maintenance-service', 'foreign-trade-website-development'],
    content: {
      zh: {
        navLabel: '网站开发',
        metaTitle: '网站开发服务｜企业官网 / 外贸网站 / Web 应用定制开发｜致诚工作室',
        metaDescription:
          '致诚工作室提供网站开发服务，覆盖企业官网、外贸网站、业务型网站与 Web 应用定制开发。适合重视内容结构、SEO 基础、转化效率和长期维护的客户。',
        keywords: ['网站开发', '网站开发服务', '定制网站开发', '企业网站开发', 'Web应用开发'],
        eyebrow: 'Website Development',
        heroTitle: '网站开发服务：把品牌展示、获客转化与后续扩展一起考虑',
        heroDescription:
          '这类项目不是只做几个页面，而是要把内容结构、表单转化、SEO 基础、技术可维护性和上线后的扩展空间一起做对。更适合重视长期效果，而不是只追求快速上线的客户。',
        introTitle: '这类网站开发通常怎么做',
        introParagraphs: [
          '如果网站只是一个静态门面，短期看可能能上线，但后面常常会遇到内容难更新、表单线索混乱、页面结构不适合 SEO、技术难扩展等问题。',
          '我更倾向把网站当成业务资产来做。从信息架构、页面层级、表单流程、内容承载方式到后端扩展接口，都会在前期一起规划清楚。',
        ],
        fitTitle: '适合哪些项目',
        fitItems: [
          '企业需要全新官网、品牌站或营销型网站，从 0 到 1 搭建线上表达。',
          '已有旧网站内容混乱、视觉过时、移动端体验差，准备重构升级。',
          '网站既要展示品牌，也要承接询盘、表单、预约或业务咨询。',
          '后续可能继续接 CRM、CMS、后台管理或 AI 能力，需要预留扩展空间。',
        ],
        deliverablesTitle: '通常会交付什么',
        deliverables: [
          '网站信息架构、栏目规划与关键页面内容结构建议',
          '响应式前端页面开发与必要的动效、交互、表单流程',
          'SEO 基础配置、页面元信息、站点抓取配置和上线部署',
          '如果项目需要，也可继续接后台管理、接口、内容管理能力',
        ],
        outcomesTitle: '你会得到的结果',
        outcomes: [
          '更清晰的页面结构，访客更容易理解你做什么、适合谁、如何联系。',
          '更稳的技术底座，后续继续加页面、加语言、接后台都不会太别扭。',
          '更适合搜索引擎抓取和内容沉淀的结构，而不是只看首屏效果。',
          '更明确的交付边界和维护方式，减少项目上线后的扯皮成本。',
        ],
        processTitle: '推进方式',
        processSteps: [
          {
            title: '先梳理目标和范围',
            description: '先确认网站是偏品牌展示、获客转化还是业务承接，再决定页面结构和优先级。',
          },
          {
            title: '确定信息架构和页面层级',
            description: '把首页、服务页、案例页、联系页等核心结构先定下来，避免开发中频繁返工。',
          },
          {
            title: '分阶段开发与同步',
            description: '先做关键页面，再逐步补齐次级页面与后台能力，期间按周同步进度和风险。',
          },
          {
            title: '部署上线与维护交接',
            description: '完成上线部署、域名与站点配置、基础 SEO 配置，并进入维护阶段。',
          },
        ],
        faqTitle: '常见问题',
        faqs: [
          {
            question: '网站开发项目一定要先把所有页面细节定死吗？',
            answer: '不需要，但至少要把业务目标、核心页面、优先级和内容边界说清楚。这样开发节奏会更稳，也更利于控制预算和工期。',
          },
          {
            question: '网站开发时会顺便做基础 SEO 吗？',
            answer: '会。包括页面结构、metadata、canonical、hreflang、robots、sitemap、基础结构化数据等，这些都应该在开发阶段一起考虑，而不是上线后再补。',
          },
          {
            question: '后面想继续加后台或业务功能，还能接着做吗？',
            answer: '可以。前提是前期结构留得合理。很多项目会先做对外网站，再逐步接内容管理、表单线索、业务系统或 AI 能力。',
          },
          {
            question: '是否支持代码交付和后续维护？',
            answer: '支持。标准项目可做部署、代码交接和必要说明，上线后也包含 1 年免费维护。',
          },
        ],
        ctaTitle: '如果你现在要做网站开发，可以直接进入评估',
        ctaDescription: '带上预算、目标、参考站点和核心需求，沟通会比只问“多少钱能做”高效很多。',
      },
      en: {
        navLabel: 'Website Development',
        metaTitle: 'Website Development Services for Company Sites, Marketing Pages, and Web Apps | Zhicheng Studio',
        metaDescription:
          'Zhicheng Studio provides website development services for company sites, multilingual marketing pages, and web products with stronger structure, SEO foundations, and long-term maintainability.',
        keywords: ['website development', 'custom website development', 'company website development', 'marketing website development'],
        eyebrow: 'Website Development',
        heroTitle: 'Website development that balances brand presentation, conversion, and future growth',
        heroDescription:
          'A serious website project is more than a few finished pages. The structure, forms, SEO foundations, maintainability, and future system integrations all need to be considered from the start.',
        introTitle: 'How this type of project is usually approached',
        introParagraphs: [
          'A site can go live quickly and still create problems later if the content structure is weak, the lead flow is unclear, or the codebase is hard to extend.',
          'I prefer treating the website as a business asset. Information architecture, page hierarchy, lead capture, content delivery, and extension points are planned together before implementation runs too far ahead.',
        ],
        fitTitle: 'Good fit for',
        fitItems: [
          'Teams building a new company site, brand site, or marketing website from scratch.',
          'Businesses replacing an outdated site with poor mobile experience or weak content structure.',
          'Projects that need both public-facing presentation and practical lead capture or inquiry handling.',
          'Teams that may later connect CMS, admin workflows, business systems, or AI capabilities.',
        ],
        deliverablesTitle: 'Typical delivery scope',
        deliverables: [
          'Site architecture, page hierarchy, and recommendations for key content sections',
          'Responsive frontend implementation with the required interactions, forms, and polish',
          'SEO foundations, metadata, crawl configuration, and production deployment support',
          'Optional backend, admin, or integration work when the project needs more than a static site',
        ],
        outcomesTitle: 'What you get out of it',
        outcomes: [
          'Clearer page structure so visitors can understand what you do and how to contact you faster.',
          'A stronger technical base for adding more pages, more locales, and more business logic later.',
          'A site that is more suitable for search engines and long-term content growth.',
          'Cleaner delivery boundaries and a more predictable maintenance path after launch.',
        ],
        processTitle: 'Delivery rhythm',
        processSteps: [
          {
            title: 'Clarify the business goal first',
            description: 'We first decide whether the website is mainly for branding, conversion, or operational support.',
          },
          {
            title: 'Lock architecture before deep implementation',
            description: 'Homepage, service pages, proof pages, and contact flow should be framed early to reduce rework.',
          },
          {
            title: 'Build in stages with visible syncs',
            description: 'Core pages go first, then supporting pages and systems are added with weekly progress visibility.',
          },
          {
            title: 'Launch, handoff, and support',
            description: 'Deployment, domain setup, SEO basics, and post-launch maintenance are handled as part of delivery.',
          },
        ],
        faqTitle: 'FAQ',
        faqs: [
          {
            question: 'Do all page details need to be fixed before development starts?',
            answer: 'Not everything, but the goals, core pages, priorities, and content boundaries should be clear enough to keep the project stable and scoped.',
          },
          {
            question: 'Are SEO basics included during development?',
            answer: 'Yes. Metadata, canonical tags, hreflang, robots, sitemap, structured data, and page structure should be handled during development, not only after launch.',
          },
          {
            question: 'Can the site later grow into admin tools or business workflows?',
            answer: 'Yes, as long as the initial architecture is planned with extensions in mind. Many projects start with a site and later add CMS, lead handling, or web app layers.',
          },
          {
            question: 'Do you support code handoff and maintenance?',
            answer: 'Yes. Standard delivery can include deployment, code handoff, practical documentation, and one year of maintenance support.',
          },
        ],
        ctaTitle: 'If you are planning a website project, we can move straight into evaluation',
        ctaDescription: 'Budget, goals, references, and must-have requirements make the first discussion much more productive.',
      },
    },
  },
  'website-development-company': {
    slug: 'website-development-company',
    priority: {
      zh: 0.91,
      en: 0.67,
    },
    serviceType: {
      zh: '网站开发公司与网站建设服务',
      en: 'Website development company and website building services',
    },
    statItems: {
      zh: [
        {
          value: 'Direct',
          label: '本人直接沟通与交付',
          description: '不是传统外包公司转述链路，而是直接面对需求和交付。',
        },
        {
          value: 'SEO',
          label: '兼顾结构与搜索基础',
          description: '不只做页面视觉，还会一起考虑内容结构、站点抓取和长期扩展。',
        },
        {
          value: 'Long-term',
          label: '适合持续迭代的网站',
          description: '更适合重视维护、升级和后续内容增长的客户。',
        },
      ],
      en: [
        {
          value: 'Direct',
          label: 'Direct owner-level delivery',
          description: 'The work is handled directly instead of being passed across a layered outsourcing chain.',
        },
        {
          value: 'SEO',
          label: 'Structure plus search basics',
          description: 'The delivery considers hierarchy, crawlability, and long-term content growth instead of visuals alone.',
        },
        {
          value: 'Long-term',
          label: 'Built for later iteration',
          description: 'A better fit for teams expecting maintenance, upgrades, and continued website growth.',
        },
      ],
    },
    relatedSlugs: ['website-development', 'company-website-redesign', 'website-maintenance-service', 'company-website-development'],
    content: {
      zh: {
        navLabel: '网站开发公司',
        metaTitle: '网站开发公司｜网站建设、官网开发与长期维护服务｜致诚工作室',
        metaDescription:
          '致诚工作室提供网站开发公司级别的网站建设服务，覆盖企业官网、外贸网站、业务型网站和长期维护。适合重视直接沟通、结构质量和长期迭代的客户。',
        keywords: ['网站开发公司', '网站建设', '做网站公司', '网站建设服务', '官网开发公司'],
        eyebrow: 'Website Company',
        heroTitle: '如果你在找网站开发公司，重点不该只是“能不能做”，而是能不能长期做对',
        heroDescription:
          '很多客户找网站开发公司时，最先比的是价格和页面数量，但真正影响结果的，往往是需求理解、内容结构、SEO 基础、后续维护和交付边界。网站建设不是页面拼装，而是长期业务资产的搭建。',
        introTitle: '为什么这类页面值得单独拆出来',
        introParagraphs: [
          '“网站开发公司”“网站建设服务”这类搜索词，用户意图已经非常接近成交。他们通常不是在找纯技术科普，而是在判断找谁做更合适。',
          '所以这类页面不该只重复“网站开发”的泛描述，而是要回答合作方式、交付范围、适合什么客户、为什么比普通模板站或低价外包更稳。',
        ],
        fitTitle: '适合哪些客户来找这类网站开发服务',
        fitItems: [
          '希望直接和开发者沟通，不想在销售、产品、外包之间层层转述。',
          '准备做企业官网、外贸网站或业务型网站，同时重视长期维护和后续扩展。',
          '对低价模板站或纯页面外包不放心，更看重结构、内容和交付质量。',
          '已有旧网站，准备做升级、改版或重新规划，希望这次把基础一次打稳。',
        ],
        deliverablesTitle: '网站开发公司级别的交付通常包括什么',
        deliverables: [
          '目标梳理、信息架构、栏目结构和关键页面内容方向建议',
          '企业官网、外贸网站或业务型网站的前端开发与必要交互实现',
          'metadata、canonical、hreflang、robots、sitemap、结构化数据等基础 SEO 配置',
          '部署上线、后续维护支持，以及为后续内容增长和后台扩展预留结构',
        ],
        outcomesTitle: '你真正买到的不是“几页网站”，而是这些结果',
        outcomes: [
          '更清晰的网站结构，访客更容易理解业务内容、差异化和下一步动作。',
          '更稳的站点基础，上线后继续加文章、案例、多语言或后台不会越来越乱。',
          '更适合搜索引擎和长期内容沉淀，而不是只做一个首屏好看的展示壳子。',
          '更明确的合作边界和维护方式，避免交付后没人接、没人改、没人持续负责。',
        ],
        processTitle: '这类合作通常怎么推进',
        processSteps: [
          {
            title: '先判断项目目标和站点类型',
            description: '先确定是偏企业官网、外贸网站、营销型网站还是更偏业务承接的网站，再决定结构和优先级。',
          },
          {
            title: '把页面结构和内容边界先定下来',
            description: '先把首页、服务页、案例页、联系页和后续可能扩展的部分规划清楚，避免开发过程不断返工。',
          },
          {
            title: '按阶段开发并同步风险',
            description: '关键页面优先上线，期间同步完成度、内容问题和后续建议，而不是到最后一次性交付。',
          },
          {
            title: '上线后进入维护与继续优化',
            description: '网站建设不该止于上线，还要看后续维护、SEO 增长和内容迭代是否接得住。',
          },
        ],
        faqTitle: '常见问题',
        faqs: [
          {
            question: '网站开发公司和普通模板建站最大的区别是什么？',
            answer: '最大的区别不是“会不会写代码”，而是会不会把内容结构、转化路径、SEO 基础和后续维护一起考虑。模板建站更适合快速占位，长期效果通常有限。',
          },
          {
            question: '找网站开发公司时，最应该先确认什么？',
            answer: '先确认合作方式、是否直接交付、是否包含基础 SEO、后续维护怎么处理，以及页面和功能边界是不是讲得清楚。',
          },
          {
            question: '如果现在只是想做网站建设，不确定范围怎么办？',
            answer: '可以先从目标、页面类型、预算区间和参考站点开始聊。把需求边界说清楚，比一开始就问一个固定价格更有效。',
          },
          {
            question: '这种合作后面还能继续做文章、案例页和多语言吗？',
            answer: '可以，而且应该预留这种空间。很多网站建设项目真正的增长发生在上线以后，而不是上线前。',
          },
        ],
        ctaTitle: '如果你正在筛选网站开发公司，可以直接拿现有需求来评估',
        ctaDescription: '把当前网站、目标页面、预算区间和最担心的问题发过来，我可以更快判断适合怎么做。',
      },
      en: {
        navLabel: 'Website Development Company',
        metaTitle: 'Website Development Company for Website Building, Company Sites, and Long-term Support | Zhicheng Studio',
        metaDescription:
          'Zhicheng Studio provides website building and website development services for company sites, foreign trade sites, and long-term site growth, with direct communication and stronger structural quality.',
        keywords: ['website development company', 'website building services', 'company website developer', 'website design and development company'],
        eyebrow: 'Website Company',
        heroTitle: 'If you are choosing a website development company, the real question is not only whether it can be built, but whether it will be built right',
        heroDescription:
          'Clients often compare price and page count first, but the long-term result usually depends more on scope clarity, structure, SEO basics, maintenance, and how directly the work is delivered. Website building is not page assembly alone.',
        introTitle: 'Why this page deserves to stand on its own',
        introParagraphs: [
          'Searches like “website development company” and “website building services” are already close to buying intent. The visitor is usually not looking for general education anymore, but for a better delivery fit.',
          'That means the page should explain collaboration style, scope, maintenance, and why this is steadier than thin template work or low-price outsourcing.',
        ],
        fitTitle: 'Best fit for',
        fitItems: [
          'Teams that want to speak directly with the actual developer instead of being passed through several layers.',
          'Businesses planning a company site, foreign trade site, or business-focused website with later growth in mind.',
          'Clients who do not want the project reduced to a cheap template or a visual-only handoff.',
          'Businesses upgrading or rebuilding an old website and wanting the foundation to hold up this time.',
        ],
        deliverablesTitle: 'What this level of service usually includes',
        deliverables: [
          'Goal clarification, information architecture, page hierarchy, and direction for the key content blocks',
          'Frontend implementation for company, foreign trade, or business-focused websites',
          'Metadata, canonical tags, hreflang, robots, sitemap, and structured data as part of SEO foundations',
          'Launch, maintenance support, and room for later content growth, multilingual expansion, or admin extensions',
        ],
        outcomesTitle: 'What you are really paying for',
        outcomes: [
          'A clearer website structure so visitors understand the business, differentiation, and next step faster.',
          'A steadier base for adding articles, proof pages, more locales, or backend support later.',
          'A site more suitable for search growth and long-term content accumulation instead of a thin visual shell.',
          'Clearer collaboration boundaries and a more reliable maintenance path after launch.',
        ],
        processTitle: 'How this type of collaboration usually moves',
        processSteps: [
          {
            title: 'Clarify the site type and business goal first',
            description: 'We first decide whether the project is closer to a company site, foreign trade site, marketing site, or a more operational website.',
          },
          {
            title: 'Define page structure and content boundaries early',
            description: 'Homepage, service pages, proof pages, contact flow, and likely future expansions are framed before the build runs too far ahead.',
          },
          {
            title: 'Build in stages and keep risks visible',
            description: 'Core pages go first, while content issues, progress, and later recommendations stay visible during delivery.',
          },
          {
            title: 'Launch and continue supporting growth',
            description: 'Website building should not stop at launch if the business expects maintenance, SEO growth, or content iteration later.',
          },
        ],
        faqTitle: 'FAQ',
        faqs: [
          {
            question: 'How is this different from a template website service?',
            answer: 'The difference is not only code. The bigger difference is whether structure, conversion path, SEO basics, and later maintenance are all treated as part of the job. Templates can work for placeholders, but they often run out of room fast.',
          },
          {
            question: 'What should I confirm before choosing a website development company?',
            answer: 'Clarify whether delivery is direct, whether SEO basics are included, how maintenance is handled, and whether the scope and page boundaries are explained clearly.',
          },
          {
            question: 'What if I only know that I need a website but not the exact scope yet?',
            answer: 'That is normal. Start with goals, page types, budget range, and a few reference sites. That usually creates a much better first evaluation than asking for a fixed quote too early.',
          },
          {
            question: 'Can the site later grow with articles, proof pages, or more locales?',
            answer: 'Yes, and it should be planned that way. Many website projects create their real long-term value after launch, not before it.',
          },
        ],
        ctaTitle: 'If you are comparing website development companies, we can evaluate your current requirement directly',
        ctaDescription: 'Share the current site, target pages, budget range, and the main risks you are worried about to make the first discussion more concrete.',
      },
    },
  },
  'company-website-redesign': {
    slug: 'company-website-redesign',
    priority: {
      zh: 0.9,
      en: 0.66,
    },
    serviceType: {
      zh: '企业官网建设、官网改版与品牌官网升级服务',
      en: 'Company website redesign, rebuild, and corporate website upgrade services',
    },
    statItems: {
      zh: [
        {
          value: 'Rebuild',
          label: '重构旧官网结构',
          description: '不是只换视觉，而是把栏目、内容和转化路径一起梳理清楚。',
        },
        {
          value: 'Brand',
          label: '品牌表达更清晰',
          description: '让访客更快理解你做什么、适合谁、为什么值得联系。',
        },
        {
          value: 'SEO',
          label: '兼顾改版与搜索基础',
          description: '改版时一起处理 metadata、内容迁移、结构和后续增长基础。',
        },
      ],
      en: [
        {
          value: 'Rebuild',
          label: 'Rework old site structure',
          description: 'The work is not only visual refresh, but also page hierarchy, content order, and conversion flow.',
        },
        {
          value: 'Brand',
          label: 'Clearer brand positioning',
          description: 'Visitors should understand the offer, audience, and next step faster.',
        },
        {
          value: 'SEO',
          label: 'Redesign with search in mind',
          description: 'Metadata, migration, structure, and future content growth are considered during the redesign.',
        },
      ],
    },
    relatedSlugs: ['company-website-development', 'website-maintenance-service', 'website-development-company', 'website-development'],
    content: {
      zh: {
        navLabel: '企业官网建设',
        metaTitle: '企业官网建设与官网改版｜品牌官网重做、结构升级与长期维护｜致诚工作室',
        metaDescription:
          '致诚工作室提供企业官网建设和官网改版服务，适合旧官网重做、品牌官网升级、内容结构重构和移动端体验优化。兼顾品牌表达、SEO 基础和后续维护。',
        keywords: ['企业官网建设', '官网改版', '品牌官网建设', '企业官网重做', '官网升级'],
        eyebrow: 'Website Redesign',
        heroTitle: '企业官网建设和官网改版，不该只是“把旧页面重新画一遍”',
        heroDescription:
          '很多官网改版项目看起来是在换视觉，真正的问题却出在栏目结构混乱、内容表达失焦、首页没有重点、移动端体验差，以及上线后没人继续维护。企业官网建设真正该做的是把这些基础一起重构。',
        introTitle: '为什么官网建设和官网改版值得单独做一页',
        introParagraphs: [
          '搜索“企业官网建设”“官网改版”的客户，通常已经有很明确的商业意图。他们不是单纯在看网站长什么样，而是在判断旧站要不要重做、怎么重做、找谁做更稳。',
          '这类页面最应该回答的，不是“我们会做网页”，而是旧官网常见问题、改版过程中最容易出错的地方，以及怎么把结构、品牌表达和搜索基础一起处理。',
        ],
        fitTitle: '适合哪些企业官网建设或改版项目',
        fitItems: [
          '旧官网内容堆砌、栏目混乱、首页像海报，已经无法有效承接客户理解和询盘。',
          '企业品牌、业务方向或产品结构已经变化，原官网表达方式明显落后。',
          '官网移动端体验差、维护困难、后台混乱，后续继续修补的成本越来越高。',
          '希望这次不仅把官网做得更清楚，也顺手把 SEO 基础、文章结构和后续内容增长底子搭好。',
        ],
        deliverablesTitle: '企业官网建设 / 改版通常会包含什么',
        deliverables: [
          '旧站问题梳理、栏目结构重组、首页和关键页面信息层级重建',
          '品牌表达、服务介绍、信任信息、联系入口和转化路径优化',
          '响应式前端实现、移动端体验优化、基础 SEO 配置和必要内容迁移建议',
          '上线部署、维护支持，以及为后续案例页、文章页和语言扩展预留结构',
        ],
        outcomesTitle: '企业官网建设做对后更值钱的结果',
        outcomes: [
          '官网不再只是旧内容重新套皮，而是能更清楚地讲业务、讲差异化、讲合作方式。',
          '首页、服务页和联系页能更顺地把访客带到咨询动作，而不是看完就离开。',
          '改版同时把 SEO 基础和内容结构做稳，后面继续做文章、案例和行业页更轻松。',
          '后续维护边界更清楚，不会陷入“每次改一点都很痛苦”的状态。',
        ],
        processTitle: '这类项目通常怎么推进',
        processSteps: [
          {
            title: '先盘点旧官网到底问题在哪',
            description: '先分清楚问题是视觉老旧、结构混乱、内容失焦还是技术底座太差，再决定该重构到什么程度。',
          },
          {
            title: '重建信息架构和页面优先级',
            description: '把首页、服务页、案例页、关于页、联系页等核心结构重新梳理，而不是直接把旧页面搬过去。',
          },
          {
            title: '开发时同步处理内容和 SEO 基础',
            description: '官网建设不该把 SEO 放到上线后再补，页面层级、metadata、FAQ、内容承载都应该在开发阶段一起处理。',
          },
          {
            title: '上线后继续维护和迭代',
            description: '官网改版真正的价值往往发生在上线以后，所以维护、补内容和继续优化应该是连续动作。',
          },
        ],
        faqTitle: '常见问题',
        faqs: [
          {
            question: '企业官网改版时，最常见的错误是什么？',
            answer: '最常见的错误是只换设计不改结构。旧内容和旧逻辑原样保留，最后页面更新了，但业务表达、转化路径和 SEO 结构还是老问题。',
          },
          {
            question: '官网建设和官网改版有什么不同？',
            answer: '官网建设通常更偏从零搭结构，官网改版更偏在已有内容和历史问题基础上重构。两者都要处理品牌表达、内容结构和后续维护，但改版更强调迁移和旧问题清理。',
          },
          {
            question: '官网改版会影响原来的 SEO 吗？',
            answer: '如果不规划，会影响。所以改版时需要一起看 URL、metadata、内容迁移、内部链接和 sitemap，而不是只顾视觉上线。',
          },
          {
            question: '什么时候应该彻底重做，而不是继续修旧站？',
            answer: '当旧官网的结构、后台、移动端体验和内容体系都已经拖累后续迭代时，继续修补往往只会越修越乱，这时重做通常更划算。',
          },
        ],
        ctaTitle: '如果你正在考虑企业官网建设或官网改版，可以直接拿旧站来评估',
        ctaDescription: '把当前官网、最想解决的问题、参考站点和预期目标发过来，我可以更快判断是该局部升级还是彻底重做。',
      },
      en: {
        navLabel: 'Company Website Redesign',
        metaTitle: 'Company Website Redesign and Corporate Website Rebuild Services | Zhicheng Studio',
        metaDescription:
          'Zhicheng Studio provides company website redesign and rebuild services for outdated corporate sites, covering structure, messaging clarity, responsive upgrades, SEO basics, and long-term maintainability.',
        keywords: ['company website redesign', 'corporate website rebuild', 'company website refresh', 'website redesign service'],
        eyebrow: 'Website Redesign',
        heroTitle: 'Company website redesign should not mean repainting old pages without fixing old problems',
        heroDescription:
          'Many redesign projects look like visual upgrades, but the deeper issues are usually weak structure, unclear messaging, poster-like homepages, poor mobile experience, and no practical maintenance path after launch. A serious rebuild should fix those foundations together.',
        introTitle: 'Why company website rebuilds deserve their own page',
        introParagraphs: [
          'People searching for “company website redesign” or “corporate website rebuild” usually have clear buying intent. They are not only browsing aesthetics. They are deciding whether the old site should be rebuilt, how much should change, and who can do it steadily.',
          'That means the page should explain typical old-site problems, redesign risks, and how brand, structure, migration, and SEO are handled together.',
        ],
        fitTitle: 'Best fit for',
        fitItems: [
          'Old company sites with cluttered content, weak hierarchy, or a homepage that behaves like a poster instead of an explanation tool.',
          'Businesses whose brand, offer, or service structure has changed enough that the old site no longer represents them well.',
          'Teams struggling with poor mobile experience, difficult maintenance, or an outdated backend content flow.',
          'Companies wanting the redesign to improve not only visuals but also SEO foundations and future content growth.',
        ],
        deliverablesTitle: 'What this kind of redesign usually includes',
        deliverables: [
          'Old-site problem review, page hierarchy rebuild, and reworked information architecture for key pages',
          'Better brand messaging, service explanation, trust signals, contact paths, and conversion entry points',
          'Responsive implementation, mobile refinement, SEO basics, and practical guidance for necessary content migration',
          'Launch support, maintenance, and structure ready for later articles, proof pages, and locale expansion',
        ],
        outcomesTitle: 'What becomes more valuable when it is done right',
        outcomes: [
          'The website stops being an old shell with new styling and starts explaining the business more clearly.',
          'Homepage, service pages, and contact flow guide visitors into inquiry more effectively.',
          'SEO basics and content structure are stabilized during the redesign instead of being postponed.',
          'Later maintenance becomes more predictable instead of getting harder every time a small change is needed.',
        ],
        processTitle: 'How this type of project usually moves',
        processSteps: [
          {
            title: 'Audit what is actually wrong with the current site',
            description: 'We separate visual age from structural issues, content problems, and technical constraints before deciding how deep the rebuild should go.',
          },
          {
            title: 'Rebuild page hierarchy and information order',
            description: 'Homepage, services, proof, about, and contact are restructured instead of copied from the old version.',
          },
          {
            title: 'Handle content and SEO during the build',
            description: 'Hierarchy, metadata, FAQ content, and migration concerns are addressed during implementation, not only after launch.',
          },
          {
            title: 'Launch and keep improving',
            description: 'The value of a redesign is often realized after launch, so maintenance, content expansion, and continued optimization still matter.',
          },
        ],
        faqTitle: 'FAQ',
        faqs: [
          {
            question: 'What is the most common mistake in a company website redesign?',
            answer: 'Refreshing the visuals while keeping the weak structure intact. The site looks newer, but the old content problems, conversion issues, and SEO weaknesses remain.',
          },
          {
            question: 'How is a redesign different from building a new company site from scratch?',
            answer: 'A redesign has to work with existing content, history, and old problems, so migration and cleanup become part of the job. A new build usually starts with cleaner structural freedom.',
          },
          {
            question: 'Can a redesign hurt existing SEO?',
            answer: 'Yes, if it is handled carelessly. That is why URLs, metadata, internal links, migration, and sitemap behavior need to be considered during the redesign.',
          },
          {
            question: 'When is a full rebuild better than continuing to patch the current site?',
            answer: 'When the old structure, backend, mobile experience, and content system are all slowing future work down, patching usually becomes more expensive than rebuilding properly.',
          },
        ],
        ctaTitle: 'If you are considering a company website redesign, we can evaluate the current site directly',
        ctaDescription: 'Share the current website, main problems, references, and business goals to judge whether it needs a focused upgrade or a full rebuild.',
      },
    },
  },
  'website-maintenance-service': {
    slug: 'website-maintenance-service',
    priority: {
      zh: 0.88,
      en: 0.64,
    },
    serviceType: {
      zh: '网站维护服务、内容更新支持与官网改版后持续优化',
      en: 'Website maintenance services, content update support, and post-launch website improvement',
    },
    statItems: {
      zh: [
        {
          value: 'Support',
          label: '维护边界先说清',
          description: '把 Bug 修复、内容更新、结构调整和新增需求区分开，后面合作更顺。',
        },
        {
          value: 'Stable',
          label: '适合持续运营的网站',
          description: '更适合官网、外贸站和长期更新型站点，而不是上线就放着不管。',
        },
        {
          value: 'Iterate',
          label: '维护里顺手优化增长基础',
          description: '内容结构、内链、元信息和页面体验可以在维护阶段持续补强。',
        },
      ],
      en: [
        {
          value: 'Support',
          label: 'Support boundaries stay explicit',
          description: 'Bug fixes, content work, structural changes, and new requests are handled as separate categories.',
        },
        {
          value: 'Stable',
          label: 'Built for active websites',
          description: 'A better fit for company sites, foreign trade sites, and websites expected to keep evolving.',
        },
        {
          value: 'Iterate',
          label: 'Maintenance can improve growth foundations',
          description: 'Structure, internal links, metadata, and UX polish can keep improving after launch.',
        },
      ],
    },
    relatedSlugs: ['company-website-redesign', 'website-development-company', 'website-development', 'company-website-development'],
    content: {
      zh: {
        navLabel: '网站维护服务',
        metaTitle: '网站维护服务｜内容更新、Bug 修复、官网改版支持与长期优化｜致诚工作室',
        metaDescription:
          '致诚工作室提供网站维护服务，覆盖官网上线后的 Bug 修复、内容更新、结构调整、改版支持和持续优化。适合企业官网、外贸网站和长期运营型站点。',
        keywords: ['网站维护服务', '网站开发维护', '官网维护', '网站内容更新', '网站改版支持'],
        eyebrow: 'Website Maintenance',
        heroTitle: '网站维护服务：不是临时修补，而是把上线后的站点持续维护清楚',
        heroDescription:
          '很多网站真正开始出问题，不是在开发阶段，而是在上线以后。内容没人管、页面改一点就牵一片、Bug 和新增需求混在一起，最后维护成本越来越高。网站维护服务真正要解决的是边界、节奏和长期可维护性。',
        introTitle: '为什么网站维护值得单独做一页',
        introParagraphs: [
          '搜索“网站维护服务”“官网维护”的客户，通常已经不是在问“能不能做网站”，而是在找一个更稳定的后续支持方式。他们更关心的是上线后怎么改、谁来改、哪些算维护、多久响应。',
          '所以这类页面应该直接回答维护范围、更新方式、改版支持边界，以及怎么让网站在上线后继续变强，而不是只把维护理解成出了问题再修。',
        ],
        fitTitle: '适合哪些网站维护项目',
        fitItems: [
          '企业官网或外贸网站已经上线，但内容需要持续更新、补页面、调结构或处理兼容问题。',
          '旧站虽然暂时不重做，但已经明显感觉到每次改内容、改页面都越来越费劲。',
          '官网刚做完改版，想继续把 FAQ、服务页、文章页和转化细节慢慢补完整。',
          '希望网站维护不只是修 Bug，还能顺手把 SEO 基础、内容承载和用户体验持续优化。',
        ],
        deliverablesTitle: '网站维护服务通常会包含什么',
        deliverables: [
          '网站现状梳理、维护边界确认、问题优先级划分和持续支持方式约定',
          'Bug 修复、兼容性问题处理、内容更新、轻量页面调整和必要的结构优化',
          '改版后的 URL、metadata、内链、FAQ、表单和关键页面体验的持续补强',
          '如果进入新增需求阶段，也可按模块继续扩展页面、后台或功能能力',
        ],
        outcomesTitle: '网站维护做对后更有价值的结果',
        outcomes: [
          '网站不会因为上线后无人持续处理，而很快重新变成一个旧站。',
          '维护和新增需求边界更清楚，减少后期反复扯皮和临时救火。',
          '服务页、FAQ、文章页和联系路径可以在维护期持续补强，转化效率更稳。',
          '后续要做局部改版、SEO 调整或内容扩展时，不需要每次都从头推翻。',
        ],
        processTitle: '这类维护项目通常怎么推进',
        processSteps: [
          {
            title: '先看现有网站处于什么状态',
            description: '先判断现在的主要问题是 Bug、内容停更、结构混乱、SEO 基础薄弱，还是旧站已经到了需要局部重构的程度。',
          },
          {
            title: '明确维护边界和响应节奏',
            description: '先把什么算维护、什么算新增、内容更新怎么提、问题怎么排优先级说清楚，合作会轻松很多。',
          },
          {
            title: '按优先级持续处理和优化',
            description: '先解决影响业务和体验的问题，再逐步补内容结构、内链、FAQ、表单和关键页面细节。',
          },
          {
            title: '根据实际情况决定是否进入改版或扩展阶段',
            description: '如果维护过程中发现旧结构已经拖累效率，可以再进一步拆成官网改版、功能扩展或长期迭代项目。',
          },
        ],
        faqTitle: '常见问题',
        faqs: [
          {
            question: '网站维护服务一般包括哪些内容？',
            answer: '通常包括 Bug 修复、兼容性处理、内容更新、轻量页面调整和必要的结构优化。是否包含新增页面、功能扩展或后台开发，需要单独确认边界。',
          },
          {
            question: '网站维护和新增需求怎么区分？',
            answer: '原本就该正常工作的内容出现异常，通常属于维护；新增页面、增加流程、扩后台或新业务模块，通常更接近新增需求。边界越早讲清楚，后面越顺。',
          },
          {
            question: '旧网站不是你开发的，也能接维护吗？',
            answer: '可以，但会先看代码和站点现状。如果原站结构太乱或技术债太重，可能更适合先做局部整理，甚至直接进入改版评估。',
          },
          {
            question: '维护阶段会顺便处理 SEO 和内容优化吗？',
            answer: '会，尤其是 metadata、内链、FAQ、内容结构和关键页面体验，这些都很适合在维护阶段持续补强。',
          },
        ],
        ctaTitle: '如果你的网站已经上线，但后续维护越来越乱，可以先做一次现状评估',
        ctaDescription: '把当前站点、最常改的内容、现在最头痛的问题和希望的维护方式发过来，我可以更快判断适合继续维护、局部整理还是直接改版。',
      },
      en: {
        navLabel: 'Website Maintenance',
        metaTitle: 'Website Maintenance Services for Content Updates, Bug Fixes, and Post-launch Improvements | Zhicheng Studio',
        metaDescription:
          'Zhicheng Studio provides website maintenance services covering bug fixes, content updates, structural improvements, redesign support, and ongoing optimization for company and foreign trade websites.',
        keywords: ['website maintenance service', 'post-launch website support', 'website content updates', 'website redesign support'],
        eyebrow: 'Website Maintenance',
        heroTitle: 'Website maintenance should not mean reactive patching without a long-term support path',
        heroDescription:
          'Many websites start losing value after launch, not because the first version failed, but because content updates, bug fixes, structural changes, and new requests all get mixed together. Serious maintenance work creates clearer boundaries, steadier rhythm, and a healthier site over time.',
        introTitle: 'Why website maintenance deserves its own landing page',
        introParagraphs: [
          'People searching for “website maintenance services” usually already have a live site and a practical support problem. They are not asking whether a site can be built. They are asking how it can be kept useful, who can keep it stable, and what support actually includes.',
          'That means the page should explain scope, update rhythm, redesign support boundaries, and how maintenance can keep improving the site instead of only fixing obvious breakage.',
        ],
        fitTitle: 'Best fit for',
        fitItems: [
          'Company or foreign trade websites that are live but need regular content updates, adjustments, compatibility fixes, or structural cleanup.',
          'Older sites where even small changes have started to feel risky, slow, or expensive.',
          'Recently redesigned sites that still need continued refinement on FAQ, service pages, lead flow, and supporting content.',
          'Teams that want support to cover not only fixes, but also gradual SEO and UX improvements.',
        ],
        deliverablesTitle: 'What this type of maintenance usually includes',
        deliverables: [
          'Site review, maintenance boundary definition, priority planning, and an agreed support rhythm',
          'Bug fixes, compatibility handling, content updates, light page adjustments, and necessary structural improvements',
          'Continued strengthening of URLs, metadata, internal links, FAQ, forms, and key-page experience after redesign or launch',
          'A path into additional modules, new pages, backend work, or feature expansion when the site grows beyond maintenance scope',
        ],
        outcomesTitle: 'What becomes more valuable when maintenance is done well',
        outcomes: [
          'The website does not quickly decay into another outdated version after launch.',
          'Support scope and new-request boundaries stay clearer, reducing friction and constant firefighting.',
          'Service pages, FAQ content, blog structure, and contact flow can keep improving over time.',
          'Later redesign work, SEO adjustments, or content expansion become easier because the site is kept in healthier shape.',
        ],
        processTitle: 'How this kind of work usually moves',
        processSteps: [
          {
            title: 'Assess the current site honestly',
            description: 'The first step is separating bugs, stale content, structural issues, weak SEO basics, and signs that the old site may already need partial rebuilding.',
          },
          {
            title: 'Define support boundaries and response rhythm',
            description: 'What counts as maintenance, what counts as new scope, how updates are requested, and how priorities are set should be clarified early.',
          },
          {
            title: 'Work through priorities steadily',
            description: 'Business-critical issues go first, then structure, internal links, FAQ content, forms, and page-level refinements can be improved over time.',
          },
          {
            title: 'Escalate into redesign or expansion when needed',
            description: 'If maintenance reveals that the old structure is the real bottleneck, the work can move into redesign or a larger iteration plan.',
          },
        ],
        faqTitle: 'FAQ',
        faqs: [
          {
            question: 'What usually counts as website maintenance?',
            answer: 'Bug fixes, compatibility work, content updates, light page changes, and practical structural improvements often fit maintenance. New pages, major features, or backend expansion usually need separate scope discussion.',
          },
          {
            question: 'How do you separate maintenance from new requests?',
            answer: 'If something was already meant to work and no longer works correctly, it usually fits support. If the request adds new pages, workflows, modules, or business logic, it is usually new scope.',
          },
          {
            question: 'Can you maintain a website you did not build originally?',
            answer: 'Yes, but the current codebase and site condition need a quick review first. Some inherited sites are healthy enough for support, while others are better handled through cleanup or redesign.',
          },
          {
            question: 'Can maintenance also improve SEO and content performance?',
            answer: 'Yes. Metadata, internal links, FAQ structure, content hierarchy, and key-page UX are all strong candidates for continued improvement during maintenance.',
          },
        ],
        ctaTitle: 'If your website is live but the support work is getting messy, start with a quick maintenance review',
        ctaDescription: 'Share the current site, the changes you make most often, the main pain points, and the support style you want so the right next step becomes clearer.',
      },
    },
  },
  'company-website-development': {
    slug: 'company-website-development',
    priority: {
      zh: 0.9,
      en: 0.66,
    },
    serviceType: {
      zh: '企业官网开发与品牌展示型官网定制',
      en: 'Company website development for brand presentation and lead capture',
    },
    statItems: {
      zh: [
        {
          value: 'Brand',
          label: '品牌表达和可信度',
          description: '先把品牌气质、服务能力和信任信息讲清楚。',
        },
        {
          value: 'SEO',
          label: '内容结构和搜索基础',
          description: '不是只看视觉，还要兼顾页面层级和文本承载。',
        },
        {
          value: 'CTA',
          label: '询盘与转化路径',
          description: '让客户知道下一步该怎么联系、怎么提交需求。',
        },
      ],
      en: [
        {
          value: 'Brand',
          label: 'Clearer brand presentation',
          description: 'The site should explain capability and credibility quickly.',
        },
        {
          value: 'SEO',
          label: 'Better content structure',
          description: 'Page hierarchy and text depth matter as much as visuals.',
        },
        {
          value: 'CTA',
          label: 'Lead capture path',
          description: 'Visitors should know exactly how to continue the conversation.',
        },
      ],
    },
    relatedSlugs: ['company-website-redesign', 'website-development-company', 'website-development'],
    content: {
      zh: {
        navLabel: '企业官网开发',
        metaTitle: '企业官网开发服务｜品牌展示、SEO 结构与询盘转化｜致诚工作室',
        metaDescription:
          '致诚工作室提供企业官网开发服务，兼顾品牌展示、内容结构、SEO 基础和询盘转化。适合品牌公司、服务型企业、制造业和 B2B 业务官网升级或重建。',
        keywords: ['企业官网开发', '企业网站开发', '品牌官网开发', '官网开发服务'],
        eyebrow: 'Company Website',
        heroTitle: '企业官网开发：不只是做页面，而是把你在线上的表达做清楚',
        heroDescription:
          '很多企业官网的问题，不是技术做不出来，而是内容层级混乱、品牌表达无重点、访客不知道下一步怎么联系。官网开发真正要解决的是表达效率和转化效率。',
        introTitle: '企业官网为什么值得单独拆成一个服务页',
        introParagraphs: [
          '企业官网承担的是对外第一印象、能力说明、客户信任和询盘承接，和一般的展示页并不是一回事。',
          '所以我会更看重页面信息组织、品牌语气、服务结构、案例表达和联系路径，而不是只停留在“页面做得好不好看”。',
        ],
        fitTitle: '适合哪些企业官网项目',
        fitItems: [
          '品牌公司、服务型企业、咨询类业务，需要提升线上可信度和整体形象。',
          '制造业、B2B 企业、外贸团队，需要把产品能力、服务流程和合作方式讲清楚。',
          '旧官网内容陈旧、栏目堆砌、移动端体验差，准备重做或升级。',
          '希望官网不仅展示企业，还能带来更稳定的咨询、线索和询盘。',
        ],
        deliverablesTitle: '官网开发阶段通常会做什么',
        deliverables: [
          '首页、关于、服务、案例、联系等核心页面规划与开发',
          '品牌表达、文案结构、关键信任信息和转化入口整理',
          '基础 SEO 结构、移动端适配、图片和内容承载优化',
          '如果需要，也可继续扩展后台管理、新闻发布或内容维护能力',
        ],
        outcomesTitle: '更适合企业官网的结果',
        outcomes: [
          '首页不再只是一张大海报，而是能快速讲清楚业务和差异化。',
          '服务和案例页结构更完整，更利于后续沉淀 SEO 内容和行业词。',
          '联系路径更顺，用户不会看完页面还不知道怎么继续沟通。',
          '官网可以更稳定地作为品牌资产长期使用，而不是短期展示品。',
        ],
        processTitle: '推进节奏',
        processSteps: [
          {
            title: '梳理业务和品牌表达',
            description: '先搞清楚企业最该强调什么，不同访客最想看到什么信息。',
          },
          {
            title: '拆页面结构和内容优先级',
            description: '把首页、服务页、案例页、联系页和转化入口先规划到位。',
          },
          {
            title: '开发与内容同步推进',
            description: '页面实现、内容落位、移动端调整和基础 SEO 一起做，而不是拆成互相脱节的几段。',
          },
          {
            title: '上线后继续维护',
            description: '完成部署、账号配置和必要说明，并进入维护支持阶段。',
          },
        ],
        faqTitle: '常见问题',
        faqs: [
          {
            question: '企业官网开发前，客户最少需要准备什么？',
            answer: '最少需要有业务简介、核心服务、目标客户、联系方式和参考站点。资料越完整，官网结构越容易一次定准。',
          },
          {
            question: '官网开发会帮忙考虑 SEO 吗？',
            answer: '会。企业官网尤其适合提前把栏目结构、标题、描述、FAQ 和内容层级规划好，这样后续做搜索流量会顺很多。',
          },
          {
            question: '官网上线后还能继续新增栏目或语言吗？',
            answer: '可以。如果前期结构合理，后面增加案例页、文章页、多语言版本或后台管理都比较顺。',
          },
          {
            question: '企业官网适合用模板站还是定制开发？',
            answer: '取决于目标。如果只是短期占位，模板站可以快一点；如果更看重品牌表达、转化、SEO 和后续扩展，定制开发更合适。',
          },
        ],
        ctaTitle: '如果你现在准备重做或升级企业官网，可以直接开始评估',
        ctaDescription: '把你的行业、目标客户、当前网站问题和参考站点发过来，我可以更快判断适合怎么做。',
      },
      en: {
        navLabel: 'Company Website',
        metaTitle: 'Company Website Development for Brand Clarity, SEO Structure, and Lead Capture | Zhicheng Studio',
        metaDescription:
          'Zhicheng Studio builds company websites that balance brand presentation, content structure, SEO foundations, and inquiry conversion for service businesses, B2B teams, and established brands.',
        keywords: ['company website development', 'corporate website development', 'brand website development'],
        eyebrow: 'Company Website',
        heroTitle: 'Company website development that clarifies who you are and why clients should trust you',
        heroDescription:
          'Many company sites fail not because the frontend is impossible, but because the message is messy, the trust signals are weak, and the visitor has no obvious next step. The real job is clarity and conversion.',
        introTitle: 'Why company sites deserve their own delivery approach',
        introParagraphs: [
          'A company website carries first impression, capability explanation, trust building, and lead capture. That is different from a generic showcase page.',
          'That is why I pay close attention to information order, brand tone, service structure, proof, and contact flow instead of only judging the final look.',
        ],
        fitTitle: 'Best fit for',
        fitItems: [
          'Brands, consultancies, and service businesses that need stronger online credibility.',
          'Manufacturing, B2B, and solution-oriented companies that need their offer explained clearly.',
          'Teams replacing an old site with weak structure, dated visuals, or poor mobile experience.',
          'Businesses that want the website to support real inquiries, not only act as a brochure.',
        ],
        deliverablesTitle: 'What the delivery usually covers',
        deliverables: [
          'Core planning and implementation for homepage, about, services, proof, and contact pages',
          'Support on trust signals, messaging order, and practical conversion entry points',
          'Responsive layouts, SEO-ready structure, and better content presentation',
          'Optional extension into admin features, publishing tools, or content maintenance flows',
        ],
        outcomesTitle: 'What improves when it is done right',
        outcomes: [
          'The homepage explains the business faster instead of acting like a generic poster.',
          'Service and proof pages become easier to expand into SEO content later.',
          'Visitors can move into contact or inquiry without friction.',
          'The site becomes a durable brand asset instead of a short-lived redesign project.',
        ],
        processTitle: 'How the delivery moves',
        processSteps: [
          {
            title: 'Clarify business and brand emphasis',
            description: 'We first decide which messages matter most and what different visitors need to see first.',
          },
          {
            title: 'Define page structure and content order',
            description: 'Homepage, service pages, proof pages, and contact flow are mapped before design and implementation run deep.',
          },
          {
            title: 'Build with content and SEO in view',
            description: 'Implementation, content placement, mobile refinement, and SEO basics are handled together.',
          },
          {
            title: 'Launch and maintain',
            description: 'Deployment, account setup, and practical handoff are completed before the support window begins.',
          },
        ],
        faqTitle: 'FAQ',
        faqs: [
          {
            question: 'What should a client prepare before a company site project starts?',
            answer: 'At minimum: business introduction, services, target customers, contact information, and a few reference sites. Better source material means faster structure decisions.',
          },
          {
            question: 'Do you think about SEO during company website development?',
            answer: 'Yes. Company sites benefit a lot from planned page hierarchy, titles, descriptions, FAQ content, and supporting service pages from day one.',
          },
          {
            question: 'Can the site grow later with more pages or more locales?',
            answer: 'Yes. With the right structure, adding proof pages, blog content, multilingual pages, or admin tools later is much easier.',
          },
          {
            question: 'Is a template site ever enough?',
            answer: 'Sometimes, if the goal is only a quick placeholder. If you care about brand, conversion, SEO, and future expansion, a custom build is usually the better fit.',
          },
        ],
        ctaTitle: 'If you are rebuilding or upgrading a company site, we can evaluate it directly',
        ctaDescription: 'Share your industry, target audience, current site problems, and a few references to speed up the first pass.',
      },
    },
  },
  'foreign-trade-website-building': {
    slug: 'foreign-trade-website-building',
    priority: {
      zh: 0.89,
      en: 0.67,
    },
    serviceType: {
      zh: '外贸网站建设、多语言网站开发与海外询盘承接服务',
      en: 'Foreign trade website building, multilingual website development, and overseas inquiry capture services',
    },
    statItems: {
      zh: [
        {
          value: 'Market',
          label: '按目标市场规划结构',
          description: '不是简单翻译，而是按国家、语言、产品和客户习惯重做内容结构。',
        },
        {
          value: 'Inquiry',
          label: '更适合海外询盘',
          description: '把产品页、信任信息、联系入口和表单逻辑一起设计好。',
        },
        {
          value: 'SEO',
          label: '多语言 SEO 基础更稳',
          description: 'hreflang、路径结构、内容映射和后续扩展一起规划。',
        },
      ],
      en: [
        {
          value: 'Market',
          label: 'Structured by target market',
          description: 'The site is not only translated, but reshaped around market, locale, product, and visitor expectations.',
        },
        {
          value: 'Inquiry',
          label: 'Built for overseas inquiries',
          description: 'Product pages, trust blocks, contact paths, and form logic are designed together.',
        },
        {
          value: 'SEO',
          label: 'Stronger multilingual SEO base',
          description: 'Hreflang, locale structure, content mapping, and future expansion are planned early.',
        },
      ],
    },
    relatedSlugs: ['foreign-trade-website-development', 'website-development-company', 'website-development'],
    content: {
      zh: {
        navLabel: '外贸网站建设',
        metaTitle: '外贸网站建设与多语言网站开发｜海外询盘、产品展示与 Google SEO 基础｜致诚工作室',
        metaDescription:
          '致诚工作室提供外贸网站建设和多语言网站开发服务，适合外贸官网、独立站、产品展示站和海外询盘承接场景。兼顾内容结构、Google SEO 基础、询盘转化和后续维护。',
        keywords: ['外贸网站建设', '多语言网站开发', '外贸独立站开发', '外贸官网建设', 'Google外贸网站'],
        eyebrow: 'Foreign Trade Build',
        heroTitle: '外贸网站建设，不是把中文官网翻成英文，而是把海外获客路径重新搭一遍',
        heroDescription:
          '很多外贸网站建设项目最后没效果，不是因为没有英文页，而是因为产品信息、信任信息、联系路径、语言结构和 Google SEO 基础都没有真正按海外访客的习惯来做。多语言网站开发应该先从目标市场和询盘路径出发。',
        introTitle: '为什么外贸网站建设和多语言网站开发值得单独做一页',
        introParagraphs: [
          '搜索“外贸网站建设”“多语言网站开发”的客户，往往已经明确知道自己不是在做普通企业官网，而是在做一个承接海外流量和询盘的站点。',
          '所以这类页面应该直接回答：该怎么规划语言版本、产品页和行业页怎么搭、Google SEO 基础怎么做、以及为什么只是翻译页面通常不够。',
        ],
        fitTitle: '适合哪些外贸网站建设项目',
        fitItems: [
          '需要英文或多语言官网，面向海外客户展示公司、产品、解决方案和合作方式。',
          '希望通过 Google 搜索、内容页、产品页和行业页持续获得海外询盘。',
          '当前外贸站结构陈旧、翻译生硬、询盘入口弱，准备整体升级或重做。',
          '后续需要继续扩语言版本、产品页、行业页、内容营销或 CRM 线索管理能力。',
        ],
        deliverablesTitle: '外贸网站建设通常会包含什么',
        deliverables: [
          '目标市场、目标语言、栏目结构、页面模板和内容承载方式规划',
          '公司介绍、产品页、服务页、行业页、案例页、关于页和联系页的开发与优化',
          'Google SEO 基础、多语言路径结构、hreflang、sitemap 和内容映射支持',
          '表单、联系入口、信任信息和后续扩展空间，为海外询盘和长期增长预留结构',
        ],
        outcomesTitle: '外贸网站建设做对后更容易得到的结果',
        outcomes: [
          '海外访客更容易快速理解产品、能力、交付方式和下一步联系路径。',
          '多语言页面不再只是翻译堆砌，而是更适合长期做 Google 搜索和内容增长。',
          '产品页、行业页和联系页更适合承接询盘，而不是只有流量没有对话。',
          '后面继续扩国家站、产品站或行业内容时，结构不会越来越乱。',
        ],
        processTitle: '这类项目通常怎么推进',
        processSteps: [
          {
            title: '先确认目标国家、语言和产品重点',
            description: '先决定主要市场、主要语言和最需要被看见的产品或解决方案，再设计内容结构。',
          },
          {
            title: '重建多语言页面结构',
            description: '语言切换、路径规划、页面模板和 Google SEO 基础要一起处理，而不是上线后回头补。',
          },
          {
            title: '按询盘路径去做页面和表单',
            description: '重点不是页面数量，而是产品表达、信任信息、联系路径和表单承接是否顺。',
          },
          {
            title: '上线后继续扩产品页和内容页',
            description: '外贸网站的长期价值通常来自后续持续扩充产品页、行业页和内容，而不是只上线首页。',
          },
        ],
        faqTitle: '常见问题',
        faqs: [
          {
            question: '外贸网站建设和普通官网最大的区别是什么？',
            answer: '最大的区别在于目标访客和获客路径。外贸网站不仅要展示企业，还要更适合海外阅读习惯、Google 搜索结构、产品表达和询盘承接。',
          },
          {
            question: '多语言网站开发是不是先做英文就够了？',
            answer: '不一定。先做哪种语言要看目标市场和投入产出，但至少结构上要为后续语言扩展留好空间。',
          },
          {
            question: '外贸网站建设时会一起考虑 Google SEO 吗？',
            answer: '会，而且应该从开发阶段一起考虑。URL、metadata、hreflang、内容结构、产品页承载方式和 sitemap 都属于基础项。',
          },
          {
            question: '如果产品很多，站点后面会不会很难维护？',
            answer: '关键取决于前期有没有把产品页模板、分类方式和后台维护逻辑设计好。结构合理的话，后面扩张反而更顺。',
          },
        ],
        ctaTitle: '如果你要做外贸网站建设，可以直接从目标市场和现有站点问题开始聊',
        ctaDescription: '把主要国家、目标语言、产品范围、现有站点和当前最卡的问题发过来，我可以更快判断应该怎么搭结构。',
      },
      en: {
        navLabel: 'Foreign Trade Website Building',
        metaTitle: 'Foreign Trade Website Building and Multilingual Website Development | Zhicheng Studio',
        metaDescription:
          'Zhicheng Studio builds foreign trade websites and multilingual websites for overseas inquiries, product presentation, and Google-friendly growth, with stronger structure, language mapping, and long-term maintainability.',
        keywords: ['foreign trade website building', 'multilingual website development', 'export website building', 'B2B multilingual website'],
        eyebrow: 'Foreign Trade Build',
        heroTitle: 'Foreign trade website building is not translating a local site into English, but rebuilding the acquisition path for overseas visitors',
        heroDescription:
          'Many foreign trade websites underperform not because they lack an English page, but because product information, trust signals, contact flow, locale structure, and Google-ready foundations were never built around overseas visitor expectations. Multilingual website development should begin with target market and inquiry flow.',
        introTitle: 'Why this deserves its own service page',
        introParagraphs: [
          'People searching for “foreign trade website building” or “multilingual website development” usually already know they are not looking for a normal local company site. They need a site that can support overseas search and inquiry.',
          'So this page should answer language planning, page structure, Google SEO basics, product presentation, and why direct translation is usually not enough.',
        ],
        fitTitle: 'Best fit for',
        fitItems: [
          'Businesses needing an English or multilingual website for international company, product, and solution presentation.',
          'Teams wanting to generate overseas inquiries through Google search, product pages, industry pages, and content growth.',
          'Companies upgrading an outdated export site with weak translations, weak structure, or weak inquiry capture.',
          'Projects expecting later expansion into more locales, more product pages, more industry content, or CRM lead handling.',
        ],
        deliverablesTitle: 'What this usually includes',
        deliverables: [
          'Planning for target market, target locales, page hierarchy, templates, and how content should be structured',
          'Implementation and optimization for company, product, service, industry, proof, about, and contact pages',
          'Google SEO basics, multilingual path structure, hreflang support, sitemap behavior, and content mapping',
          'Forms, trust signals, contact flows, and a structure ready for long-term international growth',
        ],
        outcomesTitle: 'What improves when it is done well',
        outcomes: [
          'Overseas visitors understand the product offer, capability, and cooperation path more quickly.',
          'Multilingual pages become suitable for long-term Google growth instead of acting like thin translations.',
          'Product pages, industry pages, and contact flow support real inquiry capture better.',
          'Adding more locales, product lines, or industry content later stays manageable instead of chaotic.',
        ],
        processTitle: 'How the work usually moves',
        processSteps: [
          {
            title: 'Clarify target regions, locales, and offer focus first',
            description: 'We first decide which markets, locales, and products matter most before shaping the hierarchy.',
          },
          {
            title: 'Build the multilingual structure early',
            description: 'Locale switching, paths, page templates, and Google-friendly foundations are handled before launch, not after.',
          },
          {
            title: 'Design pages around inquiry flow',
            description: 'The priority is not page count alone, but product clarity, trust, and conversion path for overseas visitors.',
          },
          {
            title: 'Launch and keep expanding content',
            description: 'Long-term value usually comes from continued product, industry, and content expansion rather than from the homepage alone.',
          },
        ],
        faqTitle: 'FAQ',
        faqs: [
          {
            question: 'How is this different from a normal company website?',
            answer: 'The biggest difference is audience and acquisition path. A foreign trade site must support international reading habits, Google-friendly structure, stronger product explanation, and inquiry capture.',
          },
          {
            question: 'Is English enough for multilingual website development?',
            answer: 'Not always. The first locale depends on the target market, but the structure should leave space for later locale expansion from the start.',
          },
          {
            question: 'Do you handle Google SEO during foreign trade website building?',
            answer: 'Yes, and it should be part of development. URL strategy, metadata, hreflang, content depth, product page structure, and sitemap behavior all belong in the initial build.',
          },
          {
            question: 'What if the product catalog is large?',
            answer: 'That depends on whether product templates, categorization, and admin logic are planned properly. Good structure makes later expansion much easier.',
          },
        ],
        ctaTitle: 'If you are building a foreign trade website, start with target market and current site problems',
        ctaDescription: 'Share target regions, locales, product range, current website, and the main bottlenecks so the structure can be evaluated more concretely.',
      },
    },
  },
  'foreign-trade-website-development': {
    slug: 'foreign-trade-website-development',
    priority: {
      zh: 0.88,
      en: 0.66,
    },
    serviceType: {
      zh: '外贸网站开发与多语言官网定制',
      en: 'Foreign trade website development and multilingual company sites',
    },
    statItems: {
      zh: [
        {
          value: 'Multi-lang',
          label: '多语言结构',
          description: '站点结构和内容路径从一开始就考虑语言扩展。',
        },
        {
          value: 'Inquiry',
          label: '询盘承接',
          description: '表单、联系入口和产品页逻辑更贴近海外询盘场景。',
        },
        {
          value: 'SEO',
          label: '更适合搜索增长',
          description: '栏目结构、文本承载和 hreflang 会提前考虑。',
        },
      ],
      en: [
        {
          value: 'Multi-lang',
          label: 'Multilingual structure',
          description: 'Locale growth is considered from the beginning.',
        },
        {
          value: 'Inquiry',
          label: 'Better inquiry handling',
          description: 'Forms and product pages support overseas lead capture better.',
        },
        {
          value: 'SEO',
          label: 'Search-ready foundation',
          description: 'Structure, copy depth, and hreflang are planned early.',
        },
      ],
    },
    relatedSlugs: ['foreign-trade-website-building', 'website-development-company', 'website-development'],
    content: {
      zh: {
        navLabel: '外贸网站开发',
        metaTitle: '外贸网站开发服务｜多语言官网、产品展示与海外询盘承接｜致诚工作室',
        metaDescription:
          '致诚工作室提供外贸网站开发服务，适合多语言官网、产品展示站和海外获客场景。兼顾内容结构、询盘转化、SEO 基础和后续维护。',
        keywords: ['外贸网站开发', '多语言网站开发', '外贸官网开发', '外贸独立站开发'],
        eyebrow: 'Foreign Trade Website',
        heroTitle: '外贸网站开发：让多语言展示、产品表达和海外询盘更顺地接起来',
        heroDescription:
          '外贸网站和普通官网最大的区别，不只是多了英文，而是产品信息组织、信任信息、联系入口、加载体验和搜索结构都要更适合海外访客和询盘场景。',
        introTitle: '外贸网站开发更容易踩到什么坑',
        introParagraphs: [
          '常见问题是直接把中文官网翻译成英文，结果栏目不适合海外阅读、产品信息层级不清、表单转化差，最后网站上线了但询盘效果很一般。',
          '如果目标是长期承接海外客户，结构、语言、页面节奏和基础 SEO 都应该提前一起规划，不能只把它当成一个翻译版官网。',
        ],
        fitTitle: '适合哪些外贸网站项目',
        fitItems: [
          '需要英文或多语言官网，用于展示公司、产品、案例和合作方式。',
          '希望通过 Google 搜索、内容页或产品页持续获得海外询盘。',
          '当前站点内容堆砌、体验过时、移动端差，准备整体升级。',
          '后续可能增加产品管理、询盘线索管理或 CRM 对接能力。',
        ],
        deliverablesTitle: '这类项目通常会包含',
        deliverables: [
          '多语言栏目结构、页面模板和主要内容层级规划',
          '产品页、服务页、行业页、关于页和联系页的开发与优化',
          '基础 SEO 配置、语言版本路径规划、hreflang 与 sitemap 支持',
          '适合询盘承接的表单、联系入口和信任信息呈现方式',
        ],
        outcomesTitle: '做对后更容易出现的结果',
        outcomes: [
          '海外访客更容易快速理解产品、优势和合作方式。',
          '多语言页面不会只是翻译堆砌，而是更适合后续做内容增长。',
          '询盘表单和联系路径更顺，减少“有人看但没人联系”的情况。',
          '后续继续扩到更多语言、产品页或行业页时，结构不会越来越乱。',
        ],
        processTitle: '推进方式',
        processSteps: [
          {
            title: '先明确市场和语言范围',
            description: '先确认主要国家、目标客户和重点产品，再决定内容路径和页面层级。',
          },
          {
            title: '搭好多语言结构',
            description: '路径、语言切换、页面对应关系和 SEO 基础一起规划，避免后补。',
          },
          {
            title: '把产品展示和询盘逻辑做顺',
            description: '重点不是页面数量，而是产品信息、信任信息和联系入口是否有效。',
          },
          {
            title: '上线后继续迭代内容',
            description: '外贸网站通常需要不断补产品页、行业页和案例页，结构要能支撑长期增长。',
          },
        ],
        faqTitle: '常见问题',
        faqs: [
          {
            question: '外贸网站一定要做多语言吗？',
            answer: '不一定，但至少要做最核心的目标语言版本，而且结构上最好为后续增加语言留好空间。',
          },
          {
            question: '外贸网站开发时会考虑 Google SEO 吗？',
            answer: '会。尤其是页面结构、URL、元信息、hreflang、内容层级和站点抓取配置，这些都应该在开发阶段一起处理。',
          },
          {
            question: '如果产品很多，站点会不会很难维护？',
            answer: '要看前期是否把产品页模板、分类结构和后台维护方式规划好。结构对了，后面扩充反而更轻松。',
          },
          {
            question: '外贸网站和普通企业官网最大的差别是什么？',
            answer: '最大的差别在于内容组织和询盘场景。它不仅要展示企业，还要更适应海外客户的阅读习惯、搜索路径和沟通方式。',
          },
        ],
        ctaTitle: '如果你准备做外贸网站，可以先从目标市场和询盘路径开始聊',
        ctaDescription: '告诉我主要产品、目标国家、现有站点问题和期望语言版本，可以更快判断站点结构该怎么搭。',
      },
      en: {
        navLabel: 'Foreign Trade Website',
        metaTitle: 'Foreign Trade Website Development for Multilingual Sites and Overseas Inquiry Capture | Zhicheng Studio',
        metaDescription:
          'Zhicheng Studio builds foreign trade websites and multilingual company sites designed for product presentation, overseas inquiry capture, better structure, and long-term SEO growth.',
        keywords: ['foreign trade website development', 'multilingual website development', 'export website development'],
        eyebrow: 'Foreign Trade Website',
        heroTitle: 'Foreign trade website development built for multilingual presentation and overseas inquiries',
        heroDescription:
          'A foreign trade website is not just a translated company site. Product structure, trust signals, inquiry flow, performance, and search-friendly architecture all need to support overseas visitors from the beginning.',
        introTitle: 'Where these projects often go wrong',
        introParagraphs: [
          'One common mistake is translating a Chinese site directly into English while keeping the same weak structure. The result is a site that technically exists but performs poorly for inquiry and clarity.',
          'If the goal is long-term international lead capture, structure, language strategy, page rhythm, and SEO basics need to be planned together instead of treated as an afterthought.',
        ],
        fitTitle: 'Best fit for',
        fitItems: [
          'Teams needing an English or multilingual site for company, product, and service presentation.',
          'Businesses hoping to capture overseas demand through Google search and content pages.',
          'Companies replacing a dated or cluttered site with weak mobile experience.',
          'Projects that may later connect product management, lead handling, or CRM workflows.',
        ],
        deliverablesTitle: 'Typical project scope',
        deliverables: [
          'Multilingual structure, page templates, and clear hierarchy for the main content types',
          'Implementation for product, service, industry, about, and contact pages',
          'SEO basics, locale path planning, hreflang support, and sitemap setup',
          'Forms, trust elements, and contact flows better suited for overseas inquiry capture',
        ],
        outcomesTitle: 'What improves when it is done well',
        outcomes: [
          'International visitors understand the product offer and cooperation path faster.',
          'Multilingual pages support long-term content growth instead of acting like thin translations.',
          'Inquiry forms and contact flow convert more smoothly.',
          'Adding more locales, product pages, or industry pages later stays manageable.',
        ],
        processTitle: 'How the work moves',
        processSteps: [
          {
            title: 'Clarify market and locale scope',
            description: 'Target countries, customer profiles, and priority products shape the structure first.',
          },
          {
            title: 'Build the multilingual foundation early',
            description: 'Locale paths, switch logic, and SEO basics are planned before implementation expands.',
          },
          {
            title: 'Make product and inquiry flow practical',
            description: 'The goal is not page count alone, but better product clarity and better inquiry handling.',
          },
          {
            title: 'Launch and keep expanding content',
            description: 'Foreign trade sites usually grow over time, so the structure must support later additions well.',
          },
        ],
        faqTitle: 'FAQ',
        faqs: [
          {
            question: 'Does a foreign trade site always need multiple locales?',
            answer: 'Not always, but it should at least support the core target locale well and leave room for additional locales later if growth requires it.',
          },
          {
            question: 'Do you consider Google SEO when building foreign trade sites?',
            answer: 'Yes. URL structure, metadata, hreflang, content depth, and crawl configuration should all be handled during development.',
          },
          {
            question: 'What if there are many products to manage later?',
            answer: 'That depends on whether templates, category structure, and admin needs are planned properly up front. Good structure makes later growth much easier.',
          },
          {
            question: 'How is this different from a normal company site?',
            answer: 'The biggest difference is inquiry context. The site must support international reading habits, search paths, and trust expectations more directly.',
          },
        ],
        ctaTitle: 'If you are planning a foreign trade site, start with target market and inquiry flow',
        ctaDescription: 'Product scope, target regions, current site problems, and desired locales make the first evaluation much sharper.',
      },
    },
  },
  'mini-program-development': {
    slug: 'mini-program-development',
    priority: {
      zh: 0.86,
      en: 0.62,
    },
    serviceType: {
      zh: '小程序开发与业务闭环型微信产品定制',
      en: 'Mini-program development for transactions, booking, and user workflows',
    },
    statItems: {
      zh: [
        {
          value: 'Flow',
          label: '业务闭环设计',
          description: '不仅是前台界面，还要把订单、预约、支付、通知等流程串起来。',
        },
        {
          value: 'Admin',
          label: '后台管理配套',
          description: '小程序通常离不开后台、内容管理和状态追踪。',
        },
        {
          value: 'Scale',
          label: '后续扩展空间',
          description: '活动、会员、分销或营销玩法都要提前预留结构。',
        },
      ],
      en: [
        {
          value: 'Flow',
          label: 'Business loop first',
          description: 'Orders, booking, payment, and notification flows are treated as one product.',
        },
        {
          value: 'Admin',
          label: 'Admin support included',
          description: 'Mini-programs usually need backend workflows as much as frontend screens.',
        },
        {
          value: 'Scale',
          label: 'Room to grow later',
          description: 'Membership, campaigns, and extra business logic should not feel bolted on later.',
        },
      ],
    },
    relatedSlugs: ['website-development', 'website-development-company', 'mini-program-development-company', 'ai-agent-development'],
    content: {
      zh: {
        navLabel: '小程序开发',
        metaTitle: '小程序开发服务｜商城、预约、课程与业务闭环定制｜致诚工作室',
        metaDescription:
          '致诚工作室提供小程序开发服务，适合商城、预约、课程、招聘和业务闭环项目。兼顾用户流程、后台管理、支付通知和后续扩展。',
        keywords: ['小程序开发', '微信小程序开发', '商城小程序开发', '预约小程序开发'],
        eyebrow: 'Mini-program Development',
        heroTitle: '小程序开发：把用户流程、后台管理和业务闭环一起做完整',
        heroDescription:
          '很多小程序项目的问题不是页面少，而是业务链路没打通。用户在前台点得动，不代表订单、预约、支付、通知、后台管理这些环节真正可用。',
        introTitle: '小程序项目最容易忽略什么',
        introParagraphs: [
          '如果只关注前台页面，很容易在上线后发现后台难维护、数据流转混乱、状态控制复杂、后续活动玩法接不进去。',
          '所以小程序开发通常要把前台流程、接口设计、后台管理和后续运营动作一起考虑，才更像一个能跑起来的产品。',
        ],
        fitTitle: '适合哪些小程序项目',
        fitItems: [
          '需要交易闭环的商城、下单、预约、课程、会员类项目。',
          '线下门店、服务业务、培训课程等，需要把获客和履约放到一个入口里。',
          '已有业务流程，但缺少一套好用的用户端和后台协作系统。',
          '后续会持续做活动、内容运营、会员体系和数据分析的项目。',
        ],
        deliverablesTitle: '小程序开发通常会覆盖',
        deliverables: [
          '用户端页面流程、关键交互和业务状态流转设计',
          '后台管理、内容配置、订单或预约处理能力',
          '接口联调、支付通知、消息提醒和必要的权限控制',
          '上线发布、账号配置、后续迭代与维护支持',
        ],
        outcomesTitle: '做对后更有价值的地方',
        outcomes: [
          '用户路径更顺，从浏览到提交、支付或预约的阻力更小。',
          '后台人员能更高效地管理订单、内容、状态和客户线索。',
          '小程序不只是一个前端壳子，而是能真正承接业务流程。',
          '后续继续加会员、活动、营销玩法时，不会被最初结构拖累。',
        ],
        processTitle: '推进方式',
        processSteps: [
          {
            title: '先明确闭环流程',
            description: '先把用户从进入、操作、提交到后台处理的完整链路走通。',
          },
          {
            title: '拆前台与后台职责',
            description: '哪些给用户看，哪些给运营和管理后台处理，前期先界定清楚。',
          },
          {
            title: '按核心流程优先开发',
            description: '优先做最关键的业务闭环，再补充营销、内容和辅助能力。',
          },
          {
            title: '发布上线并继续维护',
            description: '完成账号、发布、接口配置和后续维护支持，让项目能稳定运行。',
          },
        ],
        faqTitle: '常见问题',
        faqs: [
          {
            question: '小程序开发一定要配后台吗？',
            answer: '大多数情况下都需要。即使前台流程不复杂，内容、订单、预约、状态、用户数据这些都需要后台来支撑。',
          },
          {
            question: '小程序和官网应该分开做还是一起规划？',
            answer: '如果业务相关联，最好一起规划。官网更适合承接品牌和搜索，小程序更适合承接交易和高频操作，两边打通会更顺。',
          },
          {
            question: '后续要加活动、会员、营销功能难吗？',
            answer: '关键取决于前期结构。如果前期只图快，没有把状态和数据流设计好，后面扩展会越来越痛苦。',
          },
          {
            question: '支持小程序上线和后续维护吗？',
            answer: '支持。可以协助账号配置、发布上线、问题排查和交付后的维护支持。',
          },
        ],
        ctaTitle: '如果你要做小程序，建议先把业务闭环说清楚',
        ctaDescription: '告诉我用户流程、后台处理方式、支付或预约环节和现有系统情况，评估会更准确。',
      },
      en: {
        navLabel: 'Mini-program Development',
        metaTitle: 'Mini-program Development for Commerce, Booking, and Business Workflows | Zhicheng Studio',
        metaDescription:
          'Zhicheng Studio develops mini-programs for commerce, booking, course, and workflow-based products, with attention to frontend flow, admin tooling, payments, and later growth.',
        keywords: ['mini-program development', 'wechat mini-program development', 'booking mini-program'],
        eyebrow: 'Mini-program Development',
        heroTitle: 'Mini-program development that connects user flow, admin work, and the business loop',
        heroDescription:
          'A mini-program is not complete just because the user-facing screens look finished. Orders, booking, payment, notifications, and admin operations must work together as one product.',
        introTitle: 'What gets missed most often',
        introParagraphs: [
          'Projects that focus only on screens often run into backend maintenance issues, messy data flow, or awkward expansion when new operations need to be added.',
          'That is why mini-program delivery should consider the frontend, APIs, admin workflows, and operational needs together instead of treating them as isolated layers.',
        ],
        fitTitle: 'Best fit for',
        fitItems: [
          'Commerce, booking, course, membership, and transaction-based mini-program products.',
          'Offline services and store-driven businesses that want acquisition and fulfillment in one entry point.',
          'Teams with an existing business flow but weak user-facing or admin experience.',
          'Products that expect continued campaigns, membership logic, or analytics later on.',
        ],
        deliverablesTitle: 'Typical delivery scope',
        deliverables: [
          'User flow design, screens, and state handling for the core business journey',
          'Admin workflows for content, orders, booking, or operational management',
          'API integration, payments, notifications, and required permissions or status logic',
          'Launch support, account setup, and maintenance for later iterations',
        ],
        outcomesTitle: 'Why it becomes more valuable',
        outcomes: [
          'The path from browsing to booking, payment, or submission feels smoother.',
          'Operations can manage orders, content, and leads more efficiently from the admin side.',
          'The mini-program becomes a real business tool instead of a thin frontend shell.',
          'Later additions like membership or campaigns are easier when the initial structure is solid.',
        ],
        processTitle: 'Delivery rhythm',
        processSteps: [
          {
            title: 'Clarify the full business loop first',
            description: 'User entry, actions, submission, and backend handling should be understood as one chain.',
          },
          {
            title: 'Separate frontend and admin responsibilities',
            description: 'We first decide what belongs to the user experience and what belongs to operations.',
          },
          {
            title: 'Build the critical loop before extras',
            description: 'Core transaction or booking flow goes first, then campaigns and supporting features are layered on.',
          },
          {
            title: 'Launch and maintain',
            description: 'Account setup, publishing, integration checks, and post-launch support are included in the delivery path.',
          },
        ],
        faqTitle: 'FAQ',
        faqs: [
          {
            question: 'Does a mini-program usually need an admin backend?',
            answer: 'In most cases, yes. Orders, booking, content, status, and user data usually need an admin side even if the frontend looks simple.',
          },
          {
            question: 'Should the website and mini-program be planned together?',
            answer: 'If they serve the same business, usually yes. The website handles brand and search better, while the mini-program handles repeated operations and transactions better.',
          },
          {
            question: 'Is it hard to add campaigns or membership logic later?',
            answer: 'That depends on the initial structure. If data flow and states are rushed early, every later extension becomes much more painful.',
          },
          {
            question: 'Do you support publishing and maintenance after development?',
            answer: 'Yes. I can support account setup, release, troubleshooting, and post-launch maintenance.',
          },
        ],
        ctaTitle: 'If you are building a mini-program, start by explaining the business loop clearly',
        ctaDescription: 'User flow, admin handling, payment or booking logic, and current system constraints make the evaluation more accurate.',
      },
    },
  },
  'mini-program-development-company': {
    slug: 'mini-program-development-company',
    priority: {
      zh: 0.83,
      en: 0.6,
    },
    serviceType: {
      zh: '小程序开发公司、微信小程序定制与业务闭环建设服务',
      en: 'Mini-program development company, custom WeChat mini-program delivery, and business-loop product implementation',
    },
    statItems: {
      zh: [
        {
          value: 'Loop',
          label: '重视业务闭环',
          description: '不是只做几个前台页面，而是把用户动作、后台处理、通知和状态一起打通。',
        },
        {
          value: 'Admin',
          label: '后台配套先规划',
          description: '内容、订单、状态、权限和运营动作会和前台一起考虑，不会等上线后再补。',
        },
        {
          value: 'Scale',
          label: '适合后续持续扩展',
          description: '活动、会员、营销、数据分析和多端协同会预留结构，不把一期做成死局。',
        },
      ],
      en: [
        {
          value: 'Loop',
          label: 'Business loop first',
          description: 'The focus is not only on screens, but on connecting user action, admin handling, notifications, and state flow.',
        },
        {
          value: 'Admin',
          label: 'Admin support is planned early',
          description: 'Content, orders, state, permissions, and operations are designed with the frontend instead of being patched after launch.',
        },
        {
          value: 'Scale',
          label: 'Built for later expansion',
          description: 'Campaigns, membership, analytics, and multi-surface coordination are considered before the first release becomes too rigid.',
        },
      ],
    },
    relatedSlugs: ['mini-program-development', 'web-app-development', 'enterprise-system-development-company', 'website-development-company'],
    content: {
      zh: {
        navLabel: '小程序开发公司',
        metaTitle: '小程序开发公司｜微信小程序定制、商城 / 预约 / 课程与后台配套开发｜致诚工作室',
        metaDescription:
          '致诚工作室提供小程序开发公司级别的定制服务，覆盖商城、预约、课程、会员、业务闭环和后台管理配套。适合重视用户流程、后台运营和长期扩展的团队。',
        keywords: ['小程序开发公司', '微信小程序开发公司', '小程序定制开发', '商城小程序开发公司', '预约小程序开发'],
        eyebrow: 'Mini-program Company',
        heroTitle: '如果你在找小程序开发公司，重点不该只是“能不能做页面”，而是能不能把前台、后台和业务闭环一起做对',
        heroDescription:
          '很多小程序项目看起来像几个手机页面，真正上线后才发现问题都在后面：订单怎么处理、状态谁更新、通知怎么发、内容谁维护、活动后面怎么接。如果这些没在开发前一起考虑，小程序很容易只是一个前台壳子。',
        introTitle: '为什么“小程序开发公司”值得单独做成一个承接页',
        introParagraphs: [
          '搜索“小程序开发公司”“微信小程序开发公司”的客户，通常已经非常接近成交。他们不是在看概念介绍，而是在比较谁能把项目做成、做稳、后续还能接着扩。',
          '这类页面最该回答的，不是“我们会做小程序”，而是适合哪些业务、后台怎么配、小程序和官网/后台怎么拆边界，以及为什么很多项目不是死在前台页面，而是死在闭环没打通。',
        ],
        fitTitle: '适合哪些小程序项目',
        fitItems: [
          '商城、预约、课程、报名、会员、下单等需要业务闭环的小程序项目。',
          '线下门店、培训、服务型业务，希望把获客、提交、支付和履约放到同一入口里。',
          '已经有官网、后台或业务流程，但缺一个更顺手的移动端入口。',
          '后续还会做活动、会员体系、内容运营、报表或多端协同的项目。',
        ],
        deliverablesTitle: '小程序开发公司级别的交付通常包括什么',
        deliverables: [
          '用户端流程梳理、页面交互设计和关键业务状态流转实现',
          '后台管理、内容配置、订单/预约处理、消息通知和必要权限控制',
          '和官网、后台、支付、CRM 或其他业务系统的边界与接口协同',
          '上线发布、账号配置、后续维护以及为营销、会员和数据扩展预留结构',
        ],
        outcomesTitle: '你真正买到的不是“几个前台页面”，而是这些结果',
        outcomes: [
          '小程序能真正承接业务动作，而不是只展示一下就断在后台处理上。',
          '前台、后台、通知和状态更顺，运营侧不会在上线后马上陷入手工补流程。',
          '官网、后台和小程序之间的边界更清楚，后续加功能时不容易互相借位。',
          '活动、会员、报表和继续迭代时，结构不会因为一期图快而变得很痛苦。',
        ],
        processTitle: '这类合作通常怎么推进',
        processSteps: [
          {
            title: '先看核心用户路径是否闭环',
            description: '先搞清楚用户从进入、浏览、提交、支付到后续通知和后台处理的完整链路，而不是先从页面数量开始谈。',
          },
          {
            title: '同步拆前台和后台职责',
            description: '哪些动作给用户做，哪些动作给运营和管理后台承接，前期先说清楚，后面才不容易返工。',
          },
          {
            title: '围绕核心动作优先开发',
            description: '先把提交、支付、预约、状态回传这类关键闭环做成，再逐步补活动、会员、统计和次级模块。',
          },
          {
            title: '上线后继续运营和扩展',
            description: '小程序上线不等于项目结束，后续活动、内容、会员和多端协同通常都还会继续发展。',
          },
        ],
        faqTitle: '常见问题',
        faqs: [
          {
            question: '小程序开发一定要配后台吗？',
            answer: '大多数业务型小程序都需要。即使前台流程不复杂，内容管理、订单处理、状态更新、消息通知和权限控制也通常离不开后台。',
          },
          {
            question: '小程序和官网应该一起做吗？',
            answer: '如果它们服务同一套业务，通常值得一起规划。官网更适合承接品牌和搜索，小程序更适合承接交易和高频动作，两边边界拆清会顺很多。',
          },
          {
            question: '小程序开发为什么报价差异会很大？',
            answer: '因为真正影响成本的，不只是前台页面数量，还包括后台范围、状态流转、支付通知、权限、运营动作和后续扩展边界。',
          },
          {
            question: '后续要加活动、会员、营销玩法会不会很难？',
            answer: '关键取决于一期结构。如果前期只是图快，没有把状态、数据和后台职责设计好，后面每加一个玩法都会变得越来越重。',
          },
        ],
        ctaTitle: '如果你正在找小程序开发公司，可以直接拿业务闭环来评估',
        ctaDescription: '把用户路径、后台怎么接、支付或预约怎么走、现在最担心的问题和参考产品发过来，我可以更快判断适合怎么拆一期。',
      },
      en: {
        navLabel: 'Mini-program Development Company',
        metaTitle: 'Mini-program Development Company for Custom WeChat Products, Booking, Commerce, and Admin Workflows | Zhicheng Studio',
        metaDescription:
          'Zhicheng Studio provides mini-program development services for commerce, booking, courses, memberships, and business-loop products with stronger admin planning and long-term scalability.',
        keywords: ['mini-program development company', 'wechat mini-program development company', 'custom mini-program development', 'booking mini-program development'],
        eyebrow: 'Mini-program Company',
        heroTitle: 'If you are comparing mini-program development companies, the real question is whether the team can connect frontend flow, admin handling, and business operations together',
        heroDescription:
          'Many mini-program projects look like a handful of mobile screens until launch exposes the real problems: how orders are processed, who updates status, how notifications work, who maintains content, and how later campaigns or member flows are added. If those layers are ignored early, the product quickly becomes a thin frontend shell.',
        introTitle: 'Why this deserves its own commercial landing page',
        introParagraphs: [
          'People searching for a “mini-program development company” are usually close to buying. They are not looking for generic theory. They are comparing who can turn the product into a usable operational system and who can support later growth.',
          'That means the page should explain business fit, admin planning, how mini-programs relate to websites and admin systems, and why many projects fail not because of missing screens, but because the business loop was never connected properly.',
        ],
        fitTitle: 'Best fit for',
        fitItems: [
          'Commerce, booking, courses, registration, membership, and order-oriented mini-program products.',
          'Offline stores, service businesses, and training businesses that need acquisition, submission, payment, and fulfillment in one flow.',
          'Teams that already have a website, backend, or process but still need a better mobile-facing entry point.',
          'Projects that expect campaigns, membership logic, content operations, reporting, or multi-surface coordination later on.',
        ],
        deliverablesTitle: 'What this kind of delivery usually includes',
        deliverables: [
          'User-flow planning, mobile interaction design, and implementation of the key business states',
          'Admin workflows for content, booking or order handling, notifications, and required permission boundaries',
          'Boundary planning and integration with websites, admin systems, payments, CRM, or surrounding business tools',
          'Launch support, account setup, maintenance, and structure prepared for campaigns, membership, and analytics growth',
        ],
        outcomesTitle: 'What you are really buying is not only a mobile UI',
        outcomes: [
          'The mini-program supports real business action instead of stopping at the frontend layer.',
          'Frontend, admin flow, notifications, and state handling feel much more aligned after launch.',
          'Boundaries between the website, admin side, and mini-program stay clearer as the product grows.',
          'Campaigns, membership logic, reporting, and later iteration become much easier to support.',
        ],
        processTitle: 'How this type of work usually moves',
        processSteps: [
          {
            title: 'Start from the core user loop',
            description: 'The first step is clarifying the full chain from entry, browsing, submission, and payment to notification and admin handling.',
          },
          {
            title: 'Separate frontend and admin responsibilities early',
            description: 'User actions and operator actions should be split clearly before the product starts expanding.',
          },
          {
            title: 'Build around the critical business actions first',
            description: 'Submission, booking, payment, and status feedback usually deserve priority before campaigns, membership, and secondary modules.',
          },
          {
            title: 'Launch, operate, and extend',
            description: 'Mini-program products often keep evolving after launch, so operations and later extensions should be treated as part of the delivery path.',
          },
        ],
        faqTitle: 'FAQ',
        faqs: [
          {
            question: 'Does a mini-program usually need an admin backend?',
            answer: 'In most business cases, yes. Content, orders, state changes, notifications, and permissions usually need backend support even if the mobile flow looks simple.',
          },
          {
            question: 'Should a mini-program and website be built together?',
            answer: 'If they support the same business, planning them together is often worthwhile. The website handles brand and search better, while the mini-program handles repeated actions and transaction flow better.',
          },
          {
            question: 'Why do mini-program quotes vary so much?',
            answer: 'Because cost is driven by much more than screen count. Admin scope, state flow, payment handling, notifications, permissions, and long-term expansion all change the workload significantly.',
          },
          {
            question: 'Is it hard to add campaigns or membership features later?',
            answer: 'That depends on phase-one structure. If state, data, and admin ownership are rushed early, every later growth layer becomes more painful to add.',
          },
        ],
        ctaTitle: 'If you are comparing mini-program development companies, start by evaluating the business loop directly',
        ctaDescription: 'Share the user path, admin handling, payment or booking flow, main concerns, and a few references so the right phase-one structure becomes clearer.',
      },
    },
  },
  'ai-agent-development': {
    slug: 'ai-agent-development',
    priority: {
      zh: 0.86,
      en: 0.62,
    },
    serviceType: {
      zh: 'AI 智能体开发、企业 AI 应用落地与内部系统集成',
      en: 'AI agent development, enterprise AI implementation, and internal system integration',
    },
    statItems: {
      zh: [
        {
          value: 'Workflow',
          label: '先做可闭环场景',
          description: '更重视 AI 放进哪条流程、如何确认结果、谁来兜底，而不是先堆一个通用聊天框。',
        },
        {
          value: 'Boundary',
          label: '写回边界和责任清楚',
          description: '建议、草稿、自动执行分层处理，避免把风险藏进“自动化”三个字里。',
        },
        {
          value: 'System',
          label: '能接业务系统而不是只做演示',
          description: '知识库、CRM、工单、审批、订单等场景会一起考虑上下文和集成方式。',
        },
      ],
      en: [
        {
          value: 'Workflow',
          label: 'Start with a closed-loop use case',
          description: 'The work focuses on where AI fits in the workflow, how outputs are confirmed, and who owns fallback.',
        },
        {
          value: 'Boundary',
          label: 'Write-back boundaries stay explicit',
          description: 'Suggestions, drafts, and automated actions are separated instead of hidden behind one “AI” layer.',
        },
        {
          value: 'System',
          label: 'Built to connect with real systems',
          description: 'Knowledge bases, CRM, ticketing, approvals, and internal tools are treated as implementation context, not demo props.',
        },
      ],
    },
    relatedSlugs: ['web-app-development', 'enterprise-system-development-company', 'mini-program-development', 'website-development-company'],
    content: {
      zh: {
        navLabel: 'AI 智能体开发',
        metaTitle: 'AI 智能体开发服务｜企业 AI 应用、知识问答、流程自动化与系统集成｜致诚工作室',
        metaDescription:
          '致诚工作室提供 AI 智能体开发服务，覆盖企业 AI 应用、知识问答、流程自动化、业务助手和内部系统集成。适合希望把 AI 真正接进业务流程，而不是只做演示页面的团队。',
        keywords: ['AI智能体开发', '企业AI应用开发', 'AI工作流开发', 'AI系统集成', 'AI助手开发'],
        eyebrow: 'AI Agent Development',
        heroTitle: 'AI 智能体开发：重点不是先做一个聊天框，而是把 AI 放进真正有价值的业务环节',
        heroDescription:
          '很多团队提 AI，第一反应是先做个助手界面。但真正能不能落地，往往取决于上下文从哪里来、结果写回哪里去、谁确认、谁兜底、失败怎么回滚。AI 智能体开发真正难的不是接模型，而是把流程、权限、日志和系统边界一起设计清楚。',
        introTitle: '为什么 AI 智能体开发值得单独做一页',
        introParagraphs: [
          '搜索“AI 智能体开发”“企业 AI 应用开发”的客户，通常已经不满足于看一些概念性介绍。他们更关心的是：知识问答适不适合先做、流程自动化能不能先跑一个闭环、AI 写回系统时怎么控风险、现有 CRM/OA/ERP 能不能接。',
          '所以这类页面最该回答的，不是“我们也会做 AI”，而是该从哪个场景切入、哪些能力适合先做建议层、哪些动作不该一开始就自动执行，以及怎么把 AI 变成可维护的业务能力。',
        ],
        fitTitle: '适合哪些 AI 智能体项目',
        fitItems: [
          '企业已经有知识库、CRM、工单、审批流或业务系统，想把 AI 接进去提升效率。',
          '希望做知识问答、资料检索、客服辅助、销售跟进摘要、工单分类或内容预填等高频辅助场景。',
          '团队内部已经被重复录入、资料整理、流程转述和信息分散拖慢，想先收束一条 AI 闭环。',
          '想做业务助手或 AI Copilot，但又担心权限、责任、写回和维护成本失控。',
        ],
        deliverablesTitle: 'AI 智能体开发通常会包含什么',
        deliverables: [
          'AI 场景梳理、入口优先级判断、上下文来源设计和流程边界拆分',
          '知识问答、工作流自动化、建议生成、草稿预填或业务助手的交互与后端实现',
          '和知识库、后台系统、CRM、工单、审批、消息通知等现有系统的集成方案',
          '日志、人工确认、失败兜底、权限控制和后续扩展方式设计',
        ],
        outcomesTitle: 'AI 智能体做对后更有价值的结果',
        outcomes: [
          'AI 不再只是首页上的一个概念入口，而是真能接到具体业务流程里。',
          '团队更清楚哪些动作适合自动化，哪些动作必须保留人工确认和回滚能力。',
          '知识问答、流程自动化和业务助手不会各做一套，而是能围绕同一套上下文和系统边界长期扩展。',
          '项目后续维护更可控，不容易因为演示期过度承诺而把系统做成黑箱。',
        ],
        processTitle: '这类项目通常怎么推进',
        processSteps: [
          {
            title: '先选 AI 第一站，而不是先选模型界面',
            description: '先判断最适合从知识问答、流程自动化还是限定范围的业务助手切入，再决定交互形态和集成方式。',
          },
          {
            title: '拆清上下文、输入输出和责任边界',
            description: '先明确 AI 用哪些资料、触发点在哪、结果给谁看、是否写回系统、谁来确认和兜底。',
          },
          {
            title: '先跑一个高频、可复核的小闭环',
            description: '优先做一个能被回放、能量化、能追责的场景，再决定是否扩到更多流程和入口。',
          },
          {
            title: '把日志、回滚和集成稳定性一起补齐',
            description: '不是只看回答效果，还要把权限过滤、失败处理、审计留痕和后续维护方式一起做稳。',
          },
        ],
        faqTitle: '常见问题',
        faqs: [
          {
            question: 'AI 智能体开发一定要先做聊天界面吗？',
            answer: '不一定。很多项目更适合先做一条内部工作流或知识问答闭环，再决定是否需要对外聊天入口。先做聊天不一定最值钱。',
          },
          {
            question: '企业 AI 应用最适合先做哪一类？',
            answer: '通常先看资料治理和流程稳定度。资料散、问答多，适合先做知识问答；流程规则稳定、重复劳动重，适合先做自动化试点；业务助手通常更适合放在后一步。',
          },
          {
            question: 'AI 能直接改系统数据或推进流程吗？',
            answer: '可以，但不建议一开始就全自动。更稳的做法通常是先把建议、草稿、人工确认和正式写回分层设计，再按风险逐步放开。',
          },
          {
            question: '如果企业已经有 OA、CRM 或 ERP，能在现有系统上接 AI 吗？',
            answer: '可以。关键不是能不能接，而是现有系统有没有足够清楚的上下文、接口、权限和日志边界，适不适合从某个具体场景先试点。',
          },
        ],
        ctaTitle: '如果你准备做 AI 智能体，建议先从“哪条流程最值得被收束”开始聊',
        ctaDescription: '把当前系统、最重复的人工工作、最想接 AI 的入口和最担心的风险发过来，我可以更快判断适合先做问答、自动化还是业务助手。',
      },
      en: {
        navLabel: 'AI Agent Development',
        metaTitle: 'AI Agent Development for Enterprise AI, Knowledge Q&A, Workflow Automation, and System Integration | Zhicheng Studio',
        metaDescription:
          'Zhicheng Studio provides AI agent development for enterprise AI use cases, knowledge Q&A, workflow automation, business assistants, and internal system integration with stronger operational boundaries.',
        keywords: ['AI agent development', 'enterprise AI development', 'AI workflow automation', 'AI system integration', 'business assistant development'],
        eyebrow: 'AI Agent Development',
        heroTitle: 'AI agent development is less about launching a chat box and more about placing AI inside a real business loop',
        heroDescription:
          'Many teams start AI discussions from the interface. The harder delivery problem is usually different: where the context comes from, where the output goes, who confirms it, who owns fallback, and how rollback works when something fails. Serious AI agent development treats workflow, permissions, logs, and system boundaries as part of the product from day one.',
        introTitle: 'Why AI agent development deserves its own service page',
        introParagraphs: [
          'People searching for “AI agent development” or “enterprise AI development” usually want more than broad capability language. They want to know whether knowledge Q&A should come first, whether workflow automation can close one useful loop, how write-back risk is controlled, and whether existing CRM, OA, ERP, or support systems can be integrated.',
          'That means the page should explain where to start, which capabilities should stay at the suggestion layer first, which actions should not be automated immediately, and how AI becomes a maintainable business capability instead of a demo.',
        ],
        fitTitle: 'Best fit for',
        fitItems: [
          'Companies that already have knowledge bases, CRM, ticketing, approval flows, or internal systems and want AI to improve how those systems are used.',
          'Teams exploring knowledge Q&A, retrieval, support assistance, sales follow-up summaries, ticket classification, or draft-generation workflows.',
          'Operations slowed down by repeated manual entry, document cleanup, process relay work, or scattered information.',
          'Businesses interested in copilots or business assistants but concerned about permissions, ownership, write-back risk, and long-term maintenance.',
        ],
        deliverablesTitle: 'Typical delivery scope',
        deliverables: [
          'AI use-case mapping, entry-point prioritization, context-source design, and workflow boundary definition',
          'Implementation for knowledge Q&A, workflow automation, suggestion generation, draft prefill, or assistant-style interactions',
          'Integration paths for knowledge bases, admin systems, CRM, ticketing, approvals, and notification channels',
          'Logging, human confirmation, fallback handling, permission control, and the structure for later iteration',
        ],
        outcomesTitle: 'What becomes more valuable when it is done well',
        outcomes: [
          'AI stops being only a visible concept layer and starts supporting a real operational workflow.',
          'The team becomes clearer on what can be automated safely and what still needs human confirmation or rollback.',
          'Knowledge Q&A, workflow automation, and assistant features can grow on top of one coherent system boundary instead of splitting into unrelated experiments.',
          'Long-term maintenance becomes much more manageable because the project is not over-promised during the demo phase.',
        ],
        processTitle: 'How this type of project usually moves',
        processSteps: [
          {
            title: 'Choose the first AI insertion point before choosing the interface',
            description: 'We first judge whether the best starting point is knowledge Q&A, workflow automation, or a tightly scoped assistant use case.',
          },
          {
            title: 'Define context, input/output, and ownership boundaries',
            description: 'The project needs clarity on what information AI can use, what triggers it, where outputs go, whether anything writes back, and who confirms the result.',
          },
          {
            title: 'Prove one frequent, reviewable loop first',
            description: 'A smaller loop that can be replayed, measured, and audited is a better first release than a broad AI surface with vague value.',
          },
          {
            title: 'Harden logs, rollback, and integration stability',
            description: 'Model output quality matters, but permission filtering, error handling, audit traces, and maintenance paths matter just as much.',
          },
        ],
        faqTitle: 'FAQ',
        faqs: [
          {
            question: 'Does AI agent development always need to start with a chat interface?',
            answer: 'No. Many projects are better served by starting with one internal workflow or a focused knowledge Q&A capability before adding a broader conversational layer.',
          },
          {
            question: 'What kind of enterprise AI use case usually makes sense first?',
            answer: 'That depends on document quality and process stability. Scattered information often points to knowledge Q&A first. Stable repetitive work often points to workflow automation first. Broad assistant projects usually make more sense later.',
          },
          {
            question: 'Can AI write back into business systems directly?',
            answer: 'It can, but full automation is usually not the safest first step. A more reliable approach separates suggestions, drafts, human confirmation, and official write-back by risk level.',
          },
          {
            question: 'Can AI be added to an existing OA, CRM, or ERP environment?',
            answer: 'Yes. The key question is not whether integration is technically possible, but whether the current system has clear enough context, interfaces, permissions, and logs to support a good pilot scenario.',
          },
        ],
        ctaTitle: 'If you are planning an AI agent, start by identifying the workflow that most deserves to be tightened first',
        ctaDescription: 'Share the current systems, the most repetitive manual work, the AI entry point you have in mind, and the risks you care about so the right starting path becomes clearer.',
      },
    },
  },
  'enterprise-system-development-company': {
    slug: 'enterprise-system-development-company',
    priority: {
      zh: 0.84,
      en: 0.61,
    },
    serviceType: {
      zh: '企业系统开发公司、管理后台定制与流程型系统建设服务',
      en: 'Enterprise system development company, admin platform delivery, and workflow-based system implementation',
    },
    statItems: {
      zh: [
        {
          value: 'Process',
          label: '先定流程和责任',
          description: '不是先堆模块，而是先把角色、状态、权限和关键链路讲清楚。',
        },
        {
          value: 'Phase',
          label: '适合分阶段落地',
          description: '企业系统更适合先跑通主链路，再逐步扩报表、配置和外围模块。',
        },
        {
          value: 'Maintain',
          label: '更重视后续可维护性',
          description: '数据边界、异常处理、日志和扩展空间会在早期一起规划。',
        },
      ],
      en: [
        {
          value: 'Process',
          label: 'Process and ownership first',
          description: 'The work starts from roles, states, permissions, and the critical workflow rather than from a feature pile.',
        },
        {
          value: 'Phase',
          label: 'Built for phased rollout',
          description: 'Enterprise systems are usually stronger when the main loop ships first and other modules follow in stages.',
        },
        {
          value: 'Maintain',
          label: 'Long-term maintainability matters',
          description: 'Data boundaries, exception handling, logs, and extension paths are designed early instead of patched later.',
        },
      ],
    },
    relatedSlugs: ['web-app-development', 'ai-agent-development', 'mini-program-development', 'website-development-company'],
    content: {
      zh: {
        navLabel: '企业系统开发公司',
        metaTitle: '企业系统开发公司｜OA / CRM / ERP / 管理后台定制开发服务｜致诚工作室',
        metaDescription:
          '致诚工作室提供企业系统开发公司级别的定制服务，覆盖 OA、CRM、ERP、订单、审批、库存、财务和管理后台系统。适合重视流程梳理、权限边界和长期迭代的团队。',
        keywords: ['企业系统开发公司', '管理系统开发公司', 'OA开发公司', 'CRM开发公司', 'ERP定制开发'],
        eyebrow: 'System Delivery',
        heroTitle: '如果你在找企业系统开发公司，重点不该只是“能做后台”，而是能不能把流程和边界一起做稳',
        heroDescription:
          '很多企业系统项目表面上像是在做几个页面和一个后台，真正难的却是流程状态、角色权限、数据口径、异常处理和后续迭代。如果这些基础没先讲清楚，系统上线后往往不是帮业务减负，而是把原来的混乱搬进新系统。',
        introTitle: '为什么“企业系统开发公司”值得单独拆成一个成交页',
        introParagraphs: [
          '搜索“企业系统开发公司”“管理系统开发公司”的客户，通常已经不是在做泛泛的技术咨询，而是在找一个能接住复杂流程和长期演进的交付方。',
          '这类页面最应该回答的，不是技术栈有多新，而是怎么判断一期先做什么、权限和状态怎么拆、旧系统要不要重构、为什么很多系统不是死在代码，而是死在边界模糊和范围失控。',
        ],
        fitTitle: '适合哪些企业系统项目',
        fitItems: [
          'OA、CRM、ERP、订单、采购、库存、审批、售后、财务等流程型内部系统。',
          '旧系统能用但越来越难维护，准备评估是重构、局部升级还是重做。',
          '需要管理后台、流程协同、角色权限、报表和数据追踪能力的企业项目。',
          '想从 0 到 1 搭一个更贴近真实业务流程、又能分阶段上线的内部工具。',
        ],
        deliverablesTitle: '企业系统开发公司级别的交付通常包括什么',
        deliverables: [
          '业务流程梳理、角色权限拆分、状态设计和一期范围判断',
          '管理后台、核心工作流、接口联调、关键模块和必要数据结构开发',
          '日志、异常处理、导入导出、基础部署和后续扩展边界规划',
          '如果项目需要，也可继续承接旧系统重构、AI 接入、小程序协同或外围系统联动',
        ],
        outcomesTitle: '你真正买到的不是“几个管理页面”，而是这些结果',
        outcomes: [
          '系统更贴近真实业务链路，而不是靠员工继续用群聊和 Excel 补流程。',
          '一期范围更清楚，能先上线最有价值的主链路，而不是大而全失控。',
          '权限、状态、数据和异常边界更明确，后续维护成本更可控。',
          '后面要继续加模块、做重构、接 AI 或接移动端时，不至于每次都推翻重来。',
        ],
        processTitle: '这类合作通常怎么推进',
        processSteps: [
          {
            title: '先判断真正卡住业务的是哪条链路',
            description: '先找出当前最影响效率、最容易出错、最值得先系统化的那条流程，而不是一开始列满所有部门需求。',
          },
          {
            title: '把角色、权限、状态和数据边界先定下来',
            description: '系统项目最怕边做边猜，所以流程责任、可见范围、关键动作和主数据归属最好先明确。',
          },
          {
            title: '围绕一期主链路分阶段开发',
            description: '先把最关键的业务闭环做成，再逐步扩报表、配置、导入导出和次级模块。',
          },
          {
            title: '上线后继续验证和扩展',
            description: '企业系统真正的价值常常发生在真实使用以后，所以后续迭代、例外处理和新模块规划都要留空间。',
          },
        ],
        faqTitle: '常见问题',
        faqs: [
          {
            question: '企业系统开发前，客户最少需要准备什么？',
            answer: '最少要说明当前流程怎么走、哪些角色在用、最卡的环节在哪、现有数据在哪些系统或表格里。比起长功能清单，这些信息更关键。',
          },
          {
            question: '企业系统项目适合一次做全吗？',
            answer: '大多数情况下不适合。先把最关键的一条主流程做成、跑稳，再逐步扩模块，通常比一次性铺满更稳也更省返工。',
          },
          {
            question: '旧系统能不能在原来基础上升级？',
            answer: '可以，但要看问题是局部还是结构性。如果只是少数模块和体验问题，可以渐进升级；如果流程、数据和权限边界都已经混乱，重构或重做通常更划算。',
          },
          {
            question: '企业系统项目为什么报价差异会很大？',
            answer: '因为真正影响成本的，不只是页面数量，而是权限模型、历史数据、异常流程、接口边界、日志和后续维护方式。这些不清楚，报价就很容易失真。',
          },
        ],
        ctaTitle: '如果你正在找企业系统开发公司，可以直接拿当前流程和旧系统来评估',
        ctaDescription: '把现有系统、最卡的业务链路、关键角色和最想先解决的问题发过来，我可以更快判断适合先做一期闭环、局部重构还是整体升级。',
      },
      en: {
        navLabel: 'Enterprise System Development Company',
        metaTitle: 'Enterprise System Development Company for OA, CRM, ERP, and Admin Platform Delivery | Zhicheng Studio',
        metaDescription:
          'Zhicheng Studio provides enterprise system development services for OA, CRM, ERP, order, approval, inventory, finance, and admin workflows with stronger process design, permission boundaries, and long-term maintainability.',
        keywords: ['enterprise system development company', 'admin system development company', 'OA development company', 'CRM development company', 'ERP custom development'],
        eyebrow: 'System Delivery',
        heroTitle: 'If you are looking for an enterprise system development company, the real question is whether the team can stabilize process and ownership, not only build an admin panel',
        heroDescription:
          'Many internal-system projects look like a few dashboards and forms at first. The harder delivery work usually lives elsewhere: workflow states, permission boundaries, data ownership, exception handling, and later iteration. If those foundations stay vague, the new system often becomes a digital version of the old confusion.',
        introTitle: 'Why this deserves a dedicated commercial landing page',
        introParagraphs: [
          'People searching for an “enterprise system development company” are usually not browsing general engineering capability. They are trying to find a delivery partner who can handle process-heavy work and support the system beyond the first release.',
          'That means the page should explain how phase-one scope is judged, how roles and states are separated, when legacy systems should be upgraded versus rebuilt, and why many projects fail more from boundary confusion than from missing code.',
        ],
        fitTitle: 'Best fit for',
        fitItems: [
          'OA, CRM, ERP, order, procurement, inventory, approval, after-sales, and finance-oriented internal systems.',
          'Legacy systems that still run but are becoming too fragile, too confusing, or too expensive to maintain.',
          'Enterprise projects that need admin workflows, role-based permissions, reporting, and traceable operational data.',
          'Teams building a practical internal toolset from scratch and expecting phased rollout instead of one oversized launch.',
        ],
        deliverablesTitle: 'What this kind of delivery usually includes',
        deliverables: [
          'Workflow review, role and permission design, state modeling, and phase-one scope definition',
          'Admin platform delivery, core workflow implementation, integration work, and the necessary data structures',
          'Logging, exception handling, import/export support, deployment, and extension planning',
          'Optional continuation into legacy-system refactoring, AI integration, mini-program coordination, or surrounding workflow tools',
        ],
        outcomesTitle: 'What you are really buying is not just “some admin screens”',
        outcomes: [
          'The system supports the real operating chain instead of pushing employees back into spreadsheets and chat threads.',
          'Phase one becomes clearer and more launchable because the main workflow is prioritized over an oversized module list.',
          'Permissions, states, data ownership, and exception paths become easier to maintain later.',
          'Later expansion into more modules, refactoring, AI, or mobile surfaces becomes much more manageable.',
        ],
        processTitle: 'How this type of work usually moves',
        processSteps: [
          {
            title: 'Identify the workflow that is actually constraining the business',
            description: 'The first step is finding the chain where errors, delays, and coordination cost are hurting most, instead of collecting every department request at once.',
          },
          {
            title: 'Define roles, permissions, states, and data boundaries early',
            description: 'System projects become expensive when these structures are invented too late, so ownership and visibility boundaries should be clarified before implementation goes too deep.',
          },
          {
            title: 'Build around the main phase-one loop',
            description: 'The critical operational loop goes first, while reports, settings, exports, and secondary modules are added with more confidence later.',
          },
          {
            title: 'Launch, validate, and expand',
            description: 'The real value of an internal system appears in use, so later refinement, exception handling, and expansion planning should remain part of the delivery path.',
          },
        ],
        faqTitle: 'FAQ',
        faqs: [
          {
            question: 'What should a client prepare before an enterprise system project starts?',
            answer: 'At minimum: how the current workflow moves, which roles are involved, where the main bottleneck sits, and where the current data lives. That is usually more valuable than a long feature wish list.',
          },
          {
            question: 'Should enterprise systems be built all at once?',
            answer: 'Usually no. Most projects are safer when one high-value workflow is proven first and the surrounding modules expand in stages afterward.',
          },
          {
            question: 'Can a legacy system be upgraded instead of replaced?',
            answer: 'Sometimes. If the pain is localized, gradual improvement can work well. If workflow, data, and permission boundaries are all weak at once, refactoring or rebuilding is often the better investment.',
          },
          {
            question: 'Why do quotes vary so much for internal-system projects?',
            answer: 'Because cost is driven by much more than screen count. Permissions, historical data, exception paths, integration boundaries, logging, and maintenance responsibility all change the workload significantly.',
          },
        ],
        ctaTitle: 'If you are comparing enterprise system development companies, start by evaluating the current workflow and legacy setup directly',
        ctaDescription: 'Share the existing systems, the most blocked workflow, the key roles, and the first business problem you want solved so the right phase-one path becomes clearer.',
      },
    },
  },
  'web-app-development': {
    slug: 'web-app-development',
    priority: {
      zh: 0.9,
      en: 0.66,
    },
    serviceType: {
      zh: '企业系统开发与 Web 应用定制开发',
      en: 'Custom web application and internal business system development',
    },
    statItems: {
      zh: [
        {
          value: 'Workflow',
          label: '流程和权限设计',
          description: '系统项目的关键不只是页面，而是流程、状态和权限边界。',
        },
        {
          value: 'Data',
          label: '数据结构与可维护性',
          description: '一开始把数据关系和扩展方式设计对，后面会轻松很多。',
        },
        {
          value: 'Ops',
          label: '长期迭代能力',
          description: '适合会持续增长、持续增加模块的企业内部系统。',
        },
      ],
      en: [
        {
          value: 'Workflow',
          label: 'Workflow and permissions',
          description: 'The hard part is often process logic, state, and ownership boundaries.',
        },
        {
          value: 'Data',
          label: 'Data structure matters',
          description: 'Good schema and extensibility decisions pay off for a long time.',
        },
        {
          value: 'Ops',
          label: 'Built for iteration',
          description: 'A better fit for systems expected to grow with the business.',
        },
      ],
    },
    relatedSlugs: ['website-development-company', 'website-development', 'mini-program-development'],
    content: {
      zh: {
        navLabel: '企业系统开发',
        metaTitle: '企业系统开发服务｜OA / CRM / ERP / 管理后台定制｜致诚工作室',
        metaDescription:
          '致诚工作室提供企业系统开发和 Web 应用定制开发服务，适合 OA、CRM、ERP、订单、财务、审批流等流程型系统。兼顾权限、流程、数据和长期迭代。',
        keywords: ['企业系统开发', 'Web应用开发', '管理后台开发', 'OA开发', 'CRM开发'],
        eyebrow: 'Web App Development',
        heroTitle: '企业系统开发：把流程、权限、数据和协作方式一起搭稳',
        heroDescription:
          '企业系统项目通常最难的不是把页面做出来，而是流程状态、角色权限、数据关系和后续迭代节奏。如果这些没想清楚，系统越做越重、越改越乱几乎是必然。',
        introTitle: '这类系统项目真正要解决什么',
        introParagraphs: [
          '很多内部系统的问题不是“少几个功能”，而是系统的流程边界、权限逻辑、数据流转和实际使用场景没对齐。',
          '所以做企业系统开发时，我会优先看业务流程、角色划分、关键状态节点和未来扩展方式，再决定页面、接口和技术方案。',
        ],
        fitTitle: '适合哪些系统类项目',
        fitItems: [
          'OA、CRM、ERP、采购、库存、订单、售后、财务等流程型系统。',
          '已有旧系统难维护、体验差、权限混乱，准备重构或升级。',
          '需要后台管理、审批流、报表和数据协同能力的企业项目。',
          '希望从 0 到 1 搭一套更贴近真实业务流程的内部工具。',
        ],
        deliverablesTitle: '企业系统开发通常会覆盖',
        deliverables: [
          '流程梳理、角色权限设计、关键页面和状态流转规划',
          '前端管理后台、接口设计、核心模块开发和联调',
          '必要的数据结构、日志、操作追踪和基础部署支持',
          '适合后续继续扩展模块、报表或自动化能力的代码结构',
        ],
        outcomesTitle: '系统项目更看重的结果',
        outcomes: [
          '系统更贴近真实业务流程，而不是用户需要自己绕着系统走。',
          '角色权限和状态边界更清楚，减少误操作和沟通成本。',
          '后续加模块、改流程、接外部系统时，不至于每次都推翻重来。',
          '项目可以逐步迭代上线，而不是一口气做很大最后失控。',
        ],
        processTitle: '推进方式',
        processSteps: [
          {
            title: '先把流程图和角色边界说清楚',
            description: '系统类项目最忌讳边做边想，所以流程和权限最好先明确下来。',
          },
          {
            title: '优先做核心模块',
            description: '先落最关键的业务链路，再逐步补报表、配置和辅助能力。',
          },
          {
            title: '按阶段联调和验收',
            description: '每个阶段都做状态验证和业务走查，避免最后集中暴雷。',
          },
          {
            title: '保留长期迭代空间',
            description: '从代码组织到模块边界，都会为后续升级和维护预留余地。',
          },
        ],
        faqTitle: '常见问题',
        faqs: [
          {
            question: '企业系统开发前，最重要的准备是什么？',
            answer: '不是功能列表越长越好，而是要先把核心流程、角色、状态和优先级说清楚。这样系统才能先做出最有价值的部分。',
          },
          {
            question: '系统项目适合一次做全还是分阶段？',
            answer: '多数情况下更适合分阶段。先做核心链路，边用边验证，再逐步加模块，风险和沟通成本都会低很多。',
          },
          {
            question: '旧系统能不能在原有基础上升级？',
            answer: '要看原系统结构。如果还能承接，就做渐进式升级；如果已经严重影响迭代，重构反而更省成本。',
          },
          {
            question: '企业系统项目后续维护压力大吗？',
            answer: '会比普通官网更大，所以我更重视一开始的结构和边界。系统做得越稳，后面维护成本越可控。',
          },
        ],
        ctaTitle: '如果你在做企业系统项目，建议先把流程和权限边界说清楚',
        ctaDescription: '把现有流程、角色、卡点和最想先解决的问题发过来，会比直接从界面开始聊更有效。',
      },
      en: {
        navLabel: 'Web App Development',
        metaTitle: 'Custom Web App Development for OA, CRM, ERP, and Admin Systems | Zhicheng Studio',
        metaDescription:
          'Zhicheng Studio builds custom web applications and internal business systems for OA, CRM, ERP, order, finance, approval, and data-heavy workflows with stronger structure and long-term maintainability.',
        keywords: ['web app development', 'internal system development', 'admin system development', 'custom business system'],
        eyebrow: 'Web App Development',
        heroTitle: 'Custom web app development that stabilizes workflow, permissions, data, and long-term iteration',
        heroDescription:
          'The hardest part of an internal system is usually not the pages themselves, but the workflow states, permission boundaries, data relationships, and pace of later change. If those are unclear, complexity grows fast.',
        introTitle: 'What this kind of system really needs to solve',
        introParagraphs: [
          'Many internal systems do not fail because a few features are missing, but because the process logic, role boundaries, and real operating context were never aligned properly.',
          'That is why I focus first on workflows, roles, states, and extension paths before locking the interface and API shape too deeply.',
        ],
        fitTitle: 'Best fit for',
        fitItems: [
          'OA, CRM, ERP, procurement, inventory, order, after-sales, and finance workflows.',
          'Legacy systems that are difficult to maintain, confusing to use, or too fragile to extend.',
          'Enterprise projects needing admin tools, approvals, reports, and coordinated data flow.',
          'Teams building a practical internal toolset from scratch around a real business process.',
        ],
        deliverablesTitle: 'Typical delivery scope',
        deliverables: [
          'Workflow mapping, role and permission design, and state planning for critical modules',
          'Admin frontend, API design, core module implementation, and integration work',
          'Required data structures, logging, operation traces, and deployment support',
          'A codebase structured for later module growth, reporting, and automation work',
        ],
        outcomesTitle: 'What matters most in these systems',
        outcomes: [
          'The system supports the real business process instead of forcing the team to work around it.',
          'Roles, permissions, and states become clearer, reducing operating mistakes and coordination cost.',
          'Later module additions, process changes, and integrations are less likely to require a rewrite.',
          'The project can ship in stages instead of trying to force one oversized release.',
        ],
        processTitle: 'Delivery rhythm',
        processSteps: [
          {
            title: 'Clarify process and role boundaries first',
            description: 'System projects suffer badly when process logic is invented halfway through implementation.',
          },
          {
            title: 'Build the core modules first',
            description: 'The most valuable workflow goes first, followed by reporting, configuration, and support features.',
          },
          {
            title: 'Validate in stages',
            description: 'Each stage is checked against business flow before the next layer is added.',
          },
          {
            title: 'Leave space for later change',
            description: 'Module boundaries and code organization are shaped with future upgrades in mind.',
          },
        ],
        faqTitle: 'FAQ',
        faqs: [
          {
            question: 'What is the most important preparation before a business system project?',
            answer: 'Not the longest feature list. The most important thing is clarifying core workflow, roles, states, and priorities so the highest-value part ships first.',
          },
          {
            question: 'Should system projects be built all at once or in stages?',
            answer: 'Most are safer in stages. Build the critical path first, validate it in real use, then extend the system gradually.',
          },
          {
            question: 'Can a legacy system be upgraded instead of rebuilt?',
            answer: 'Sometimes. If the existing structure can still carry growth, gradual upgrades work. If it is blocking every change, refactoring may be cheaper long term.',
          },
          {
            question: 'Are these projects expensive to maintain later?',
            answer: 'They can be, which is why the early structure matters so much. The steadier the architecture, the more manageable the long-term support cost becomes.',
          },
        ],
        ctaTitle: 'If you are planning an internal system, start by clarifying workflow and permission boundaries',
        ctaDescription: 'Share the current flow, roles, bottlenecks, and the first business problem you want solved so the evaluation can focus on what matters.',
      },
    },
  },
}

export function getServicePagePath(slug: ServicePageSlug): string {
  return `/services/${slug}`
}

export function isServicePageSlug(slug: string): slug is ServicePageSlug {
  return servicePageSlugs.includes(slug as ServicePageSlug)
}

export function getServicePage(locale: AppLocale, slug: string): LocalizedServicePage | null {
  if (!isServicePageSlug(slug)) {
    return null
  }

  const definition = servicePageDefinitions[slug]
  const content = definition.content[locale]

  return {
    slug,
    path: getServicePagePath(slug),
    priority: definition.priority[locale],
    serviceType: definition.serviceType[locale],
    relatedSlugs: definition.relatedSlugs,
    statItems: definition.statItems[locale],
    ...content,
  }
}

export function getServicePageSummaries(locale: AppLocale) {
  return servicePageSlugs
    .map(slug => getServicePage(locale, slug))
    .filter((page): page is LocalizedServicePage => Boolean(page))
    .map(page => ({
      slug: page.slug,
      path: page.path,
      navLabel: page.navLabel,
      heroDescription: page.heroDescription,
    }))
}

export function getServicePageStructuredData(locale: AppLocale, slug: ServicePageSlug) {
  const page = getServicePage(locale, slug)

  if (!page) {
    return null
  }

  const pageUrl = getLocalizedUrl(locale, page.path)
  const organizationId = `${siteConfig.url}#organization`
  const websiteId = `${siteConfig.url}#website`
  const faqId = `${pageUrl}#faq`
  const imageUrl = getAbsoluteAssetUrl(siteConfig.ogImagePath)
  const logoUrl = getAbsoluteAssetUrl(siteConfig.logoPath)
  const languageTag = getLocaleSeoConfig(locale).languageTag

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: siteConfig.brandName,
        alternateName: siteConfig.brandNameEn,
        url: siteConfig.url,
        logo: {
          '@type': 'ImageObject',
          url: logoUrl,
        },
        sameAs: siteConfig.socialLinks,
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: siteConfig.url,
        name: getLocaleSeoConfig(locale).siteName,
        publisher: {
          '@id': organizationId,
        },
      },
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
            name: locale === 'zh' ? '服务页' : 'Services',
            item: getLocalizedUrl(locale, '/services'),
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: page.navLabel,
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: page.metaTitle,
        description: page.metaDescription,
        isPartOf: {
          '@id': websiteId,
        },
        about: {
          '@id': organizationId,
        },
        inLanguage: languageTag,
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: imageUrl,
        },
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: page.heroTitle,
        description: page.metaDescription,
        serviceType: page.serviceType,
        url: pageUrl,
        image: imageUrl,
        provider: {
          '@id': organizationId,
        },
        areaServed: 'Worldwide',
        availableLanguage: ['Chinese', 'English'],
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${pageUrl}#webpage`,
        },
      },
      {
        '@type': 'FAQPage',
        '@id': faqId,
        mainEntity: page.faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  }
}
