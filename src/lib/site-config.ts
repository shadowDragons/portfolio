import type { Metadata } from 'next'

export const appLocales = ['zh'] as const
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
}

type PageMetadataInput = {
  locale: AppLocale
  pathname?: string
  title: string
  description: string
  keywords?: string[]
  openGraphType?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
}

export const siteConfig = {
  brandName: '钟俊滨',
  brandNameEn: 'Junbin Zhong',
  role: '全栈开发工程师',
  url: 'https://sphrag.com',
  ogImagePath: '/og-image.png',
  email: 'shadow_dragon@126.com',
  displayPhone: '13430279389',
  xUrl: 'https://x.com/Junexus_indie',
  xHandle: '@Junexus_indie',
  githubUrl: 'https://github.com/shadowDragons',
  wechat: 'jandan1990',
  founder: 'Junbin Zhong',
  socialLinks: ['https://x.com/Junexus_indie', 'https://github.com/shadowDragons'],
} as const

export const contentTimestamps = {
  home: '2026-06-15',
  blogHub: '2026-06-15',
  projectsHub: '2026-06-15',
} as const

const localeSeoConfig: Record<AppLocale, LocaleSeoConfig> = {
  zh: {
    languageTag: 'zh-CN',
    openGraphLocale: 'zh_CN',
    siteName: '钟俊滨｜全栈开发工程师',
    defaultTitle: '钟俊滨｜全栈开发工程师',
    defaultDescription:
      '钟俊滨的个人作品集，聚焦企业系统开发、AI Agent 工程化、RAG、ERP、OA 与全栈交付。',
    homeTitle: '钟俊滨｜企业系统与 AI 应用全栈开发者',
    homeDescription:
      '13 年企业数字化系统研发经验，长期负责 ERP、OA、招聘、考勤、RAG、智能问数等复杂系统，从架构到交付独立推进。',
    homeKeywords: ['全栈开发工程师', '个人开发者作品集', '企业系统开发', 'AI Agent 开发', 'RAG 系统', 'ERP 开发'],
  },
}

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

export function getLocalizedPath(_locale: AppLocale, pathname = ''): string {
  const normalized = normalizePathname(pathname)
  return normalized || '/'
}

export function getLocalizedUrl(locale: AppLocale, pathname = ''): string {
  const path = getLocalizedPath(locale, pathname)
  return `${siteConfig.url}${path === '/' ? '' : path}`
}

export function getAbsoluteAssetUrl(pathname: string): string {
  return `${siteConfig.url}${pathname.startsWith('/') ? pathname : `/${pathname}`}`
}

export function getLanguageAlternates(pathname = '') {
  return {
    'zh-CN': getLocalizedUrl('zh', pathname),
    'x-default': getLocalizedUrl(defaultAppLocale, pathname),
  } as const
}

export function getLocaleSeoConfig(locale: AppLocale): LocaleSeoConfig {
  return localeSeoConfig[locale]
}

export function getSiteMetadata(): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    applicationName: `${siteConfig.brandName}｜${siteConfig.role}`,
    title: {
      default: localeSeoConfig.zh.defaultTitle,
      template: '%s',
    },
    description: localeSeoConfig.zh.defaultDescription,
    authors: [
      {
        name: siteConfig.brandName,
        url: siteConfig.githubUrl,
      },
    ],
    creator: siteConfig.brandName,
    publisher: siteConfig.brandName,
    referrer: 'origin-when-cross-origin',
    openGraph: {
      siteName: localeSeoConfig.zh.siteName,
      locale: localeSeoConfig.zh.openGraphLocale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      creator: siteConfig.xHandle,
    },
  }
}

export function buildPageMetadata({
  locale,
  pathname = '',
  title,
  description,
  keywords = [],
  openGraphType = 'website',
  publishedTime,
  modifiedTime,
}: PageMetadataInput): Metadata {
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
      type: openGraphType,
      locale: seoConfig.openGraphLocale,
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
      ...(openGraphType === 'article'
        ? {
            publishedTime,
            modifiedTime: modifiedTime ?? publishedTime,
            authors: [siteConfig.brandName],
          }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: siteConfig.xHandle,
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
  const personId = `${siteConfig.url}#person`
  const websiteId = `${siteConfig.url}#website`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: siteConfig.brandName,
        alternateName: siteConfig.brandNameEn,
        jobTitle: siteConfig.role,
        url: siteConfig.url,
        email: siteConfig.email,
        telephone: siteConfig.displayPhone,
        sameAs: siteConfig.socialLinks,
        knowsAbout: ['ERP', 'OA', 'RAG', 'AI Agent', 'Text2SQL', '全栈开发'],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: siteConfig.url,
        name: seoConfig.siteName,
        inLanguage: seoConfig.languageTag,
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
          '@id': personId,
        },
        inLanguage: seoConfig.languageTag,
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: imageUrl,
        },
      },
      {
        '@type': 'CollectionPage',
        '@id': `${homeUrl}#portfolio`,
        url: homeUrl,
        name: '项目精选',
        description: '钟俊滨的个人开发项目精选，覆盖企业系统、AI Agent、RAG 与内容自动化。',
      },
    ],
  }
}
