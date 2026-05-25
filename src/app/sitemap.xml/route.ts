import { articleSlugs, getArticle } from '@/lib/articles'
import {
  appLocales,
  contentTimestamps,
  defaultAppLocale,
  getLocaleSeoConfig,
  getLocalizedUrl,
  type AppLocale,
} from '@/lib/site-config'
import { getServicePage, servicePageSlugs } from '@/lib/service-pages'

type SitemapEntry = {
  pathname: string
  changeFrequency: 'weekly' | 'monthly'
  priorities: Record<AppLocale, number>
  lastModified: string
}

const sitemapEntries: SitemapEntry[] = [
  {
    pathname: '',
    changeFrequency: 'weekly',
    priorities: {
      zh: 1,
      en: 0.7,
    },
    lastModified: contentTimestamps.home,
  },
  {
    pathname: '/services',
    changeFrequency: 'weekly',
    priorities: {
      zh: 0.86,
      en: 0.62,
    },
    lastModified: contentTimestamps.servicesHub,
  },
  {
    pathname: '/blog',
    changeFrequency: 'weekly',
    priorities: {
      zh: 0.8,
      en: 0.58,
    },
    lastModified: contentTimestamps.blogHub,
  },
  ...servicePageSlugs.map(slug => ({
    pathname: `/services/${slug}`,
    changeFrequency: 'monthly' as const,
    priorities: {
      zh: getServicePage('zh', slug)?.priority ?? 0.84,
      en: getServicePage('en', slug)?.priority ?? 0.6,
    },
    lastModified: contentTimestamps.servicePages,
  })),
  ...articleSlugs.map(slug => {
    const zhArticle = getArticle('zh', slug)
    const enArticle = getArticle('en', slug)

    return {
      pathname: `/blog/${slug}`,
      changeFrequency: 'monthly' as const,
      priorities: {
        zh: zhArticle?.priority ?? 0.76,
        en: enArticle?.priority ?? 0.56,
      },
      lastModified: zhArticle?.updatedAt ?? zhArticle?.publishedAt ?? enArticle?.updatedAt ?? enArticle?.publishedAt ?? contentTimestamps.blogHub,
    }
  }),
]

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function formatLastModified(value: string) {
  return new Date(value).toISOString()
}

function renderAlternateLinks(pathname: string) {
  const localeLinks = appLocales
    .map(locale => {
      const languageTag = getLocaleSeoConfig(locale).languageTag
      const href = getLocalizedUrl(locale, pathname)
      return `<xhtml:link rel="alternate" hreflang="${escapeXml(languageTag)}" href="${escapeXml(href)}" />`
    })
    .join('')

  const defaultHref = getLocalizedUrl(defaultAppLocale, pathname)
  return `${localeLinks}<xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(defaultHref)}" />`
}

function renderUrl(pathname: string, locale: AppLocale, entry: SitemapEntry) {
  const loc = getLocalizedUrl(locale, pathname)
  const lastModified = formatLastModified(entry.lastModified)

  return [
    '<url>',
    `<loc>${escapeXml(loc)}</loc>`,
    renderAlternateLinks(pathname),
    `<lastmod>${lastModified}</lastmod>`,
    `<changefreq>${entry.changeFrequency}</changefreq>`,
    `<priority>${entry.priorities[locale]}</priority>`,
    '</url>',
  ].join('')
}

function buildSitemapXml() {
  const body = sitemapEntries.flatMap(entry => appLocales.map(locale => renderUrl(entry.pathname, locale, entry))).join('')

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    body,
    '</urlset>',
  ].join('')
}

export const dynamic = 'force-static'
export const revalidate = 86400

export function GET() {
  return new Response(buildSitemapXml(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
      'X-Robots-Tag': 'noindex',
    },
  })
}
