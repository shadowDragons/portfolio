import type { Metadata } from 'next'

export const appLocales = ['zh', 'en'] as const
export type AppLocale = (typeof appLocales)[number]

export const defaultAppLocale: AppLocale = 'zh'

type LocaleSeoConfig = {
  languageTag: string
  openGraphLocale: string
  siteName: string
  defaultTitle: string
  defaultDescription: string
  homeTitle: string
  homeDescription: string
  homeKeywords: string[]
  serviceName: string
  serviceDescription: string
}

type PageMetadataInput = {
  locale: AppLocale
  pathname?: string
  title: string
  description: string
  keywords?: string[]
}

export const siteConfig = {
  brandName: '致诚工作室',
  brandNameEn: 'Zhicheng Studio',
  url: 'https://sphrag.com',
  logoPath: '/logo.png',
  logoMarkPath: '/logo-mark.svg',
  ogImagePath: '/og-image.png',
  email: 'contact@sphrag.com',
  displayPhone: '',
  xUrl: 'https://x.com/Junexus_indie',
  xHandle: '@Junexus_indie',
  wechat: 'jandan1990',
  founder: 'Junbin Zhong',
  socialLinks: ['https://x.com/Junexus_indie', 'https://github.com/shadowDragons'],
} as const

const localeSeoConfig: Record<AppLocale, LocaleSeoConfig> = {
  zh: {
    languageTag: 'zh-CN',
    openGraphLocale: 'zh_CN',
    siteName: '致诚工作室',
    defaultTitle: '致诚工作室｜企业系统与 AI 智能体定制开发',
    defaultDescription: '致诚工作室专注企业管理系统(ERP/OA/EMS)、企业官网开发、网站外包，以及前沿的 AI 应用与企业智能体定制开发服务，助力企业数字化与智能化转型。',
    homeTitle: '企业软件与官网开发｜AI 应用与智能体定制｜致诚工作室',
    homeDescription:
      '提供专业的企业管理系统（ERP、OA等）、企业官网外包定制，以及 AI 应用和企业智能体开发服务。直属工作室亲自交付，高品质无分包，打造现代化企业数字生态。',
    homeKeywords: [
      '外贸建站',
      '跨境电商独立站制作',
      '制造企业ERP定制',
      '工厂OA系统开发',
      '传统工厂数字化转型',
      '老系统重构升级',
      'Next.js高端建站',
      'AI企业智能体定制开发',
      '企业级管理系统开发'
    ],
    serviceName: '企业数字化与智能化定制服务',
    serviceDescription: '覆盖企业核心业务系统(ERP/OA)、多语言企业官网建设，以及新兴的 AI 应用和专属企业智能体(AI Agents)开发落地方案。',
  },
  en: {
    languageTag: 'en-US',
    openGraphLocale: 'en_US',
    siteName: 'Zhicheng Studio',
    defaultTitle: 'Zhicheng Studio | Enterprise Systems & AI Agent Development',
    defaultDescription:
      'Zhicheng Studio specializes in enterprise management systems, corporate websites, outsourced web development, and custom AI applications/agents for business automation.',
    homeTitle: 'Web Development & Enterprise AI Agents | Zhicheng Studio',
    homeDescription:
      'Expert custom development for enterprise management systems (ERP/OA), corporate websites, and cutting-edge AI applications and enterprise AI agents. Direct delivery, no subcontracting.',
    homeKeywords: [
      'cross-border ecommerce web development',
      'manufacturing ERP custom development',
      'factory OA system',
      'legacy system modernization',
      'Next.js web development agency',
      'enterprise AI agents developer',
      'B2B independent site building',
      'corporate website redesign'
    ],
    serviceName: 'Enterprise Digital & AI Solution Development',
    serviceDescription: 'End-to-end development for corporate websites, enterprise management systems, and custom AI agents to empower business intelligence.',
  },
}

export const indexablePages = [
  {
    pathname: '',
    changeFrequency: 'weekly' as const,
    priorities: {
      zh: 1,
      en: 0.7,
    },
  },
] as const

export function isAppLocale(locale: string): locale is AppLocale {
  return appLocales.includes(locale as AppLocale)
}

export function getAppLocale(locale?: string): AppLocale {
  return locale && isAppLocale(locale) ? locale : defaultAppLocale
}

function normalizePathname(pathname = ''): string {
  if (!pathname || pathname === '/') {
    return ''
  }

  const trimmed = pathname.replace(/^\/+|\/+$/g, '')
  return trimmed ? `/${trimmed}` : ''
}

export function getLocalizedPath(locale: AppLocale, pathname = ''): string {
  return `/${locale}${normalizePathname(pathname)}`
}

export function getLocalizedUrl(locale: AppLocale, pathname = ''): string {
  return `${siteConfig.url}${getLocalizedPath(locale, pathname)}`
}

export function getAbsoluteAssetUrl(pathname: string): string {
  return `${siteConfig.url}${pathname.startsWith('/') ? pathname : `/${pathname}`}`
}

export function getLanguageAlternates(pathname = '') {
  return {
    'zh-CN': getLocalizedUrl('zh', pathname),
    'en-US': getLocalizedUrl('en', pathname),
    'x-default': getLocalizedUrl(defaultAppLocale, pathname),
  } as const
}

export function getLocaleSeoConfig(locale: AppLocale): LocaleSeoConfig {
  return localeSeoConfig[locale]
}

export function getSiteMetadata(): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    applicationName: siteConfig.brandName,
    title: {
      default: localeSeoConfig.zh.defaultTitle,
      template: '%s',
    },
    description: localeSeoConfig.zh.defaultDescription,
    authors: [
      {
        name: siteConfig.brandName,
        url: 'https://github.com/shadowDragons',
      },
    ],
    creator: siteConfig.brandName,
    publisher: siteConfig.brandName,
    referrer: 'origin-when-cross-origin',
    icons: {
      icon: siteConfig.logoMarkPath,
      shortcut: siteConfig.logoMarkPath,
      apple: siteConfig.logoMarkPath,
    },
  }
}

export function buildPageMetadata({ locale, pathname = '', title, description, keywords = [] }: PageMetadataInput): Metadata {
  const seoConfig = getLocaleSeoConfig(locale)
  const canonicalUrl = getLocalizedUrl(locale, pathname)
  const ogImageUrl = getAbsoluteAssetUrl(siteConfig.ogImagePath)

  return {
    title: {
      absolute: title,
    },
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: getLanguageAlternates(pathname),
    },
    openGraph: {
      type: 'website',
      locale: seoConfig.openGraphLocale,
      alternateLocale: locale === 'zh' ? ['en_US'] : ['zh_CN'],
      url: canonicalUrl,
      title,
      description,
      siteName: seoConfig.siteName,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@Junexus_indie',
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  }
}

export function getHomePageSeoCopy(locale: AppLocale) {
  const seoConfig = getLocaleSeoConfig(locale)

  return {
    title: seoConfig.homeTitle,
    description: seoConfig.homeDescription,
    keywords: seoConfig.homeKeywords,
  }
}

export function getHomeStructuredData(locale: AppLocale) {
  const seoConfig = getLocaleSeoConfig(locale)
  const homeUrl = getLocalizedUrl(locale)
  const imageUrl = getAbsoluteAssetUrl(siteConfig.ogImagePath)
  const logoUrl = getAbsoluteAssetUrl(siteConfig.logoPath)
  const organizationId = `${siteConfig.url}#organization`
  const websiteId = `${siteConfig.url}#website`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: siteConfig.brandName,
        alternateName: siteConfig.brandNameEn,
        url: siteConfig.url,
        logo: logoUrl,
        email: siteConfig.email,
        founder: siteConfig.founder,
        sameAs: siteConfig.socialLinks,
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: locale === 'zh' ? '商务咨询' : 'Business inquiry',
            email: siteConfig.email,
            availableLanguage: ['Chinese', 'English'],
            areaServed: 'Worldwide',
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: siteConfig.url,
        name: seoConfig.siteName,
        inLanguage: seoConfig.languageTag,
        publisher: {
          '@id': organizationId,
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${homeUrl}#webpage`,
        url: homeUrl,
        name: seoConfig.homeTitle,
        description: seoConfig.homeDescription,
        isPartOf: {
          '@id': websiteId,
        },
        about: {
          '@id': organizationId,
        },
        inLanguage: seoConfig.languageTag,
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: imageUrl,
        },
      },
      {
        '@type': 'Service',
        '@id': `${homeUrl}#service`,
        url: homeUrl,
        name: seoConfig.serviceName,
        description: seoConfig.serviceDescription,
        serviceType: locale === 'zh' ? '网站开发、企业官网开发与 Web 应用定制开发' : 'Website development, company sites, and custom web application development',
        provider: {
          '@id': organizationId,
        },
        areaServed: 'Worldwide',
        availableLanguage: ['Chinese', 'English'],
      },
    ],
  }
}
