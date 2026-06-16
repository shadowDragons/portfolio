type WorkKey = 'asset' | 'hr' | 'finance' | 'erpQueryAgent' | 'rag' | 'search' | 'attendance' | 'oa' | 'orders' | 'workstation' | 'digitalHuman' | 'recruiting'

type ShowcaseWork = {
  key: WorkKey
  slug?: string
  category: string
  title: string
  description: string
  details: string
  highlights: string[]
  images: string[]
  stack: string[]
  link?: string
  imageCountLabel: string
  imageAlt: string
}

const projectImages = (folder: string, count: number, extension = 'jpg') =>
  Array.from({ length: count }, (_, index) => `/projects/${folder}/${index + 1}.${extension}`)

const workMap: Record<WorkKey, ShowcaseWork> = {
  orders: {
    key: 'orders',
    slug: 'enterprise-erp',
    category: 'ERP / 运营管理',
    title: '企业一体化 ERP 运营管理系统',
    description: '围绕客户、订单、出库、物流、对账、开票搭建的一体化业务系统，替代 Excel 与人工流转。',
    details: '我负责后端架构、业务建模、权限体系、前端交互与部署交付，覆盖订单、采购、物流、财务、营销等核心域。',
    highlights: ['客户到开票全链路', 'RBAC 权限与单点登录', 'Vue 3 + Spring Boot 全栈交付'],
    images: projectImages('orders', 4),
    stack: ['Java 17', 'Spring Boot 3', 'MySQL', 'Redis', 'Vue 3', 'TypeScript'],
    imageCountLabel: '4 张项目截图',
    imageAlt: '企业一体化 ERP 运营管理系统截图',
  },
  erpQueryAgent: {
    key: 'erpQueryAgent',
    slug: 'erp-query-agent',
    category: 'AI Agent / Text2SQL',
    title: 'ERP 智能问数 Agent 系统',
    description: '面向 ERP 数据分析场景的问数系统，支持自然语言提问、SQL 生成校验与 SSE 流式返回。',
    details: '通过 MySQL 元数据、Qdrant 向量检索和 Elasticsearch 字段取值索引，降低大模型直接生成 SQL 的幻觉风险。',
    highlights: ['LangGraph 工作流拆解', '字段/指标召回增强', 'SQL 校验修正与流式反馈'],
    images: projectImages('erpQueryAgent', 2, 'png'),
    stack: ['Python', 'FastAPI', 'LangGraph', 'LangChain', 'Qdrant', 'Elasticsearch'],
    imageCountLabel: '2 张项目截图',
    imageAlt: 'ERP 智能问数 Agent 系统截图',
  },
  rag: {
    key: 'rag',
    slug: 'enterprise-rag',
    category: 'RAG / Knowledge Base',
    title: '企业知识库 RAG 系统',
    description: '企业内部知识库问答系统，支持文档入库、多知识库检索、引用式回答与人工审核恢复。',
    details: '围绕文档解析、向量检索、审核挂起、会话问答和审计日志建立完整闭环，服务 ERP 场景下的制度与业务资料查询。',
    highlights: ['多知识库范围过滤', '审核挂起与恢复执行', '引用片段回传与审计日志'],
    images: projectImages('rag', 4, 'png'),
    stack: ['Python', 'FastAPI', 'LlamaIndex', 'LangGraph', 'Qdrant', 'Vue 3'],
    imageCountLabel: '4 张项目截图',
    imageAlt: '企业知识库 RAG 系统截图',
  },
  search: {
    key: 'search',
    slug: 'deep-research-agent',
    category: 'Multi-Agent / Research',
    title: '深度研搜多智能体研究系统',
    description: '对话式多智能体研究系统，统一编排网络搜索、数据库查询、私有知识库和附件读取能力。',
    details: '服务 ERP 经营分析与资料检索场景，支持执行轨迹回传、Markdown/PDF 报告生成与文件下载交付。',
    highlights: ['一主三从多智能体架构', 'WebSocket 实时事件推送', '研究结果导出 PDF'],
    images: ['/projects/search/示例图片.png'],
    stack: ['Python', 'FastAPI', 'DeepAgents', 'LangGraph', 'React', 'TypeScript'],
    imageCountLabel: '1 张项目截图',
    imageAlt: '深度研搜多智能体研究系统截图',
  },
  oa: {
    key: 'oa',
    slug: 'oa-workflow',
    category: 'Workflow / OA',
    title: '企业级 OA 自定义工作流系统',
    description: '支持流程配置、表单设计、条件分支、并行审批与金蝶 K3 回写的企业工作流平台。',
    details: '我长期负责这类内部数字化系统的建设与演进，重点在复杂审批流建模、权限控制和 ERP 深度集成。',
    highlights: ['可视化流程配置', '表单设计器', '审批完成自动回写 K3'],
    images: projectImages('oa', 4),
    stack: ['PHP', 'Yii', 'MySQL', 'Redis', 'Elasticsearch', 'K3 API'],
    imageCountLabel: '4 张项目截图',
    imageAlt: '企业级 OA 自定义工作流系统截图',
  },
  recruiting: {
    key: 'recruiting',
    slug: 'recruiting-system',
    category: 'HR / Recruiting',
    title: '企业招聘管理系统',
    description: '覆盖职位发布、简历投递、笔试、面试、Offer 的招聘全流程系统，支撑校招和社招。',
    details: '重点解决万人整点考试的高并发问题，通过 Redis 预热、Kafka 削峰和异步处理保障稳定性。',
    highlights: ['招聘全链路闭环', '万人在线笔试高并发', '人才库搜索与流程管理'],
    images: projectImages('recruiting', 4),
    stack: ['PHP', 'Yii', 'Kafka', 'Redis', 'MySQL', 'Elasticsearch'],
    imageCountLabel: '4 张项目截图',
    imageAlt: '企业招聘管理系统截图',
  },
  attendance: {
    key: 'attendance',
    slug: 'attendance-system',
    category: 'Attendance / Data',
    title: '企业考勤管理系统',
    description: '支持排班、门禁打卡、补卡、请假、加班与月度汇总的企业考勤系统。',
    details: '围绕多源数据接入、高峰并发削峰和亿级历史数据查询做了长期优化，覆盖复杂班次与异常识别规则。',
    highlights: ['门禁与审批多源接入', 'Kafka + Canal 异步结算', '亿级数据分表查询优化'],
    images: projectImages('attendance', 4),
    stack: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'ShardingSphere', 'XXL-Job'],
    imageCountLabel: '4 张项目截图',
    imageAlt: '企业考勤管理系统截图',
  },
  asset: {
    key: 'asset',
    slug: 'asset-management',
    category: 'ERP 子模块 / 资产',
    title: '企业资产管理系统',
    description: '围绕资产台账、领用归还、调拨盘点和权限控制搭建的企业后台子系统。',
    details: '这是我在企业数字化系统建设中负责的核心业务模块之一，强调流程闭环与台账一致性。',
    highlights: ['资产全生命周期管理', '审批联动', '台账与状态追踪'],
    images: projectImages('asset', 5),
    stack: ['PHP', 'Yii', 'Vue', 'TypeScript'],
    imageCountLabel: '5 张项目截图',
    imageAlt: '企业资产管理系统截图',
  },
  hr: {
    key: 'hr',
    slug: 'hr-management',
    category: 'ERP 子模块 / 人事',
    title: '企业人事管理系统',
    description: '覆盖组织架构、人事档案、流程审批和内部协同的人事管理模块。',
    details: '用于统一承接员工信息、组织关系和内部流程，是企业内部系统群的重要组成部分。',
    highlights: ['组织架构与档案管理', '流程审批联动', '内部协同支持'],
    images: projectImages('hr', 4),
    stack: ['PHP', 'Yii', 'Vue', 'TypeScript'],
    imageCountLabel: '4 张项目截图',
    imageAlt: '企业人事管理系统截图',
  },
  finance: {
    key: 'finance',
    slug: 'finance-management',
    category: 'ERP 子模块 / 财务',
    title: '企业财务管理系统',
    description: '面向财务流程、对账、报表和业务数据流转的财务管理模块。',
    details: '强调对账闭环、业务数据映射和与 ERP、审批流之间的数据一致性。',
    highlights: ['财务流程线上化', '对账与报表', '业务数据流转统一'],
    images: projectImages('finance', 3),
    stack: ['PHP', 'Yii', 'Vue', 'TypeScript'],
    imageCountLabel: '3 张项目截图',
    imageAlt: '企业财务管理系统截图',
  },
  workstation: {
    key: 'workstation',
    slug: 'workstation-management',
    category: '运营后台 / 工位',
    title: '工位与资源管理系统',
    description: '面向工位分配、资源占用和后台配置管理的业务支撑系统。',
    details: '这类系统更偏运营协同与资源调度，重点在状态一致性、配置灵活性和后台可维护性。',
    highlights: ['工位分配与占用管理', '后台配置能力', '运营协同支撑'],
    images: projectImages('workstation', 3),
    stack: ['Java', 'Spring Boot', 'Vue', 'Element Plus', 'TypeScript'],
    imageCountLabel: '3 张项目截图',
    imageAlt: '工位与资源管理系统截图',
  },
  digitalHuman: {
    key: 'digitalHuman',
    slug: 'ai-video-rendering',
    category: 'AI Video / Automation',
    title: '智能视频字幕与模板化渲染系统',
    description: '面向短视频内容生产的 AI 视频自动化平台，打通转写、校正、翻译、渲染与上传回调。',
    details: '我负责设计 CLI + HTTP API + Worker 架构，并结合 Remotion、FFmpeg、BullMQ 构建完整的视频自动化流水线。',
    highlights: ['字幕校正与智能分句', '模板化渲染引擎', '视频导出与回调闭环'],
    images: projectImages('digitalHuman', 2),
    stack: ['Node.js', 'TypeScript', 'Remotion', 'React', 'FFmpeg', 'BullMQ'],
    imageCountLabel: '2 张项目截图',
    imageAlt: '智能视频字幕与模板化渲染系统截图',
  },
}

const selectedProjectKeys: WorkKey[] = ['orders', 'erpQueryAgent', 'rag', 'search', 'oa', 'recruiting']

const allProjectKeys: WorkKey[] = [
  'orders',
  'erpQueryAgent',
  'rag',
  'search',
  'oa',
  'recruiting',
  'attendance',
  'asset',
  'hr',
  'finance',
  'workstation',
  'digitalHuman',
]

export const portfolioProfile = {
  name: '仁戈',
  title: '全栈开发工程师',
  location: '现居广州，支持远程协作',
  heroTitle: '企业系统、AI 应用与全栈交付',
  heroDescription:
    '13 年企业数字化系统研发经验，长期负责 OA、招聘、考勤、ERP、财务对账、知识库 RAG、智能问数等系统从 0 到 1 建设与持续迭代。现在以个人开发者身份，承接更少但更重交付质量的项目。',
  portraitPrimary: '/profile/portrait-clean.png',
  portraitSecondary: '/profile/portrait-city.png',
  stats: [
    { value: '13 年', label: '企业系统研发经验' },
    { value: '0-1', label: '复杂业务系统独立落地' },
    { value: 'Java / PHP / Python', label: '后端主力技术栈' },
    { value: 'React / Vue / Next.js', label: '前端与交互交付' },
  ],
  focusAreas: [
    {
      title: '企业系统开发',
      description: '擅长 ERP、OA、考勤、招聘、财务等复杂业务系统建模与工程落地。',
    },
    {
      title: 'AI Agent 工程化',
      description: '把 RAG、Text2SQL、多智能体与企业数据和流程真正接起来，而不是只做演示型聊天框。',
    },
    {
      title: '个人全栈交付',
      description: '需求拆解、架构设计、数据库建模、接口开发、前端实现、部署排障都能直接负责。',
    },
  ],
  capabilities: [
    {
      title: '系统架构与业务建模',
      body: '擅长梳理状态流转、权限边界、异步解耦与复杂数据结构，适合流程重、规则多、历史包袱深的系统。',
    },
    {
      title: 'AI 工作流与知识系统',
      body: '围绕上下文召回、校验、人工兜底、实时事件回传等关键环节，把 AI 做成可维护的业务能力。',
    },
    {
      title: '前后端一体交付',
      body: '能独立完成接口、后台、管理端、部署与线上问题排查，减少跨角色传递损耗。',
    },
  ],
  contact: {
    phone: '13430279389',
    wechat: 'jandan1990',
    email: 'shadow_dragon@126.com',
    github: 'https://github.com/shadowDragons',
    x: 'https://x.com/Junexus_indie',
  },
  blogTopics: ['企业系统重构与业务建模', 'AI Agent / RAG / Text2SQL 工程实践', '个人全栈交付、架构拆解与性能优化'],
} as const

export const skillCards = [
  {
    title: 'Java / Spring Boot',
    icon: 'J',
    score: 92,
    summary: '多模块后端、权限体系、状态流转、任务调度与企业集成。',
  },
  {
    title: 'PHP / Yii / Laravel',
    icon: 'P',
    score: 90,
    summary: '长期建设 OA、招聘、资产、财务等企业后台系统。',
  },
  {
    title: 'Python / FastAPI',
    icon: 'Py',
    score: 86,
    summary: 'RAG、Text2SQL、LangGraph、多智能体工作流工程化。',
  },
  {
    title: 'Vue / React / Next.js',
    icon: 'UI',
    score: 88,
    summary: '管理后台、数据交互、SSE/WebSocket 实时体验与作品站。',
  },
  {
    title: 'MySQL / Redis / Kafka',
    icon: 'DB',
    score: 89,
    summary: '复杂业务建模、高并发削峰、缓存预热和历史数据查询优化。',
  },
  {
    title: 'Qdrant / Elasticsearch',
    icon: 'AI',
    score: 84,
    summary: '向量检索、字段召回、全文索引与 AI 上下文增强。',
  },
] as const

export function getSelectedProjects() {
  return selectedProjectKeys.map(key => workMap[key])
}

export function getAllProjects() {
  return allProjectKeys.map(key => workMap[key])
}

export function getProjectBySlug(slug: string) {
  return getAllProjects().find(project => project.slug === slug || project.key === slug)
}

export function getProjectSlugs() {
  return getAllProjects().map(project => project.slug ?? project.key)
}
