import { getLocalizedUrl, siteConfig, type AppLocale } from '@/lib/site-config'

export const servicePageSlugs = [
  'website-development',
  'company-website-development',
  'foreign-trade-website-development',
  'mini-program-development',
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
    relatedSlugs: ['company-website-development', 'foreign-trade-website-development', 'web-app-development'],
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
    relatedSlugs: ['website-development', 'foreign-trade-website-development', 'mini-program-development'],
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
    relatedSlugs: ['website-development', 'company-website-development', 'mini-program-development'],
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
    relatedSlugs: ['website-development', 'company-website-development', 'web-app-development'],
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
    relatedSlugs: ['website-development', 'mini-program-development', 'company-website-development'],
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
  const faqId = `${pageUrl}#faq`

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
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: page.heroTitle,
        description: page.metaDescription,
        serviceType: page.serviceType,
        url: pageUrl,
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
