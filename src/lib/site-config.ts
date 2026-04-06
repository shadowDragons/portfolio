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
  xUrl: 'https://x.com/Junexus_indie',
  xHandle: '@Junexus_indie',
  phone: '+8613430279389',
  displayPhone: '13430279389',
  wechat: 'jandan1990',
  founder: 'Junbin Zhong',
  socialLinks: ['https://x.com/Junexus_indie', 'https://github.com/shadowDragons'],
} as const

const localeSeoConfig: Record<AppLocale, LocaleSeoConfig> = {
  zh: {
    languageTag: 'zh-CN',
    openGraphLocale: 'zh_CN',
    siteName: '致诚工作室',
    defaultTitle: '致诚工作室｜网站开发与企业官网定制',
    defaultDescription: '致诚工作室专注网站开发、企业官网、外贸网站、Web 应用与 AI 工具定制开发，适合重视交付质量、响应效率和长期维护的客户。',
    homeTitle: '网站开发服务｜企业官网 / 外贸网站 / Web 应用定制开发｜致诚工作室',
    homeDescription:
      '致诚工作室提供网站开发、企业官网开发、外贸网站开发、Web 应用与 AI 工具定制开发服务。本人直接沟通与交付，不分包，适合重视质量、效率和长期维护的客户。',
    homeKeywords: ['网站开发', '企业官网开发', '外贸网站开发', 'Web应用开发', '定制开发', '小程序开发'],
    serviceName: '网站开发与企业数字化定制开发服务',
    serviceDescription: '覆盖企业官网、外贸网站、业务系统、Web 应用和 AI 工具的定制开发服务，支持从需求分析到上线交付。',
  },
  en: {
    languageTag: 'en-US',
    openGraphLocale: 'en_US',
    siteName: 'Zhicheng Studio',
    defaultTitle: 'Zhicheng Studio | Custom Website and Web Application Development',
    defaultDescription:
      'Zhicheng Studio builds company websites, multilingual sites, web applications, and AI-powered tools for teams that care about delivery quality and long-term maintainability.',
    homeTitle: 'Custom Website Development for Company Sites, B2B Portals, and Web Apps | Zhicheng Studio',
    homeDescription:
      'Zhicheng Studio provides direct website development, company site builds, multilingual marketing sites, web applications, and AI tool development without subcontracting.',
    homeKeywords: ['website development', 'company website development', 'multilingual website development', 'web app development', 'custom development'],
    serviceName: 'Custom website and web application development services',
    serviceDescription: 'Direct development services for company websites, multilingual sites, business systems, web applications, and AI tools.',
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
        telephone: siteConfig.phone,
        founder: siteConfig.founder,
        sameAs: siteConfig.socialLinks,
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: locale === 'zh' ? '商务咨询' : 'Business inquiry',
            email: siteConfig.email,
            telephone: siteConfig.phone,
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
