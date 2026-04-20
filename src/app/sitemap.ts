import type { MetadataRoute } from 'next'
import { articleSlugs } from '@/lib/articles'
import { appLocales, getLocalizedUrl, indexablePages, getLocaleSeoConfig, defaultAppLocale } from '@/lib/site-config'
import { servicePageSlugs } from '@/lib/service-pages'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const serviceRoutes = [
    {
      pathname: '/services',
      changeFrequency: 'weekly' as const,
      priorities: {
        zh: 0.86,
        en: 0.62,
      },
    },
    {
      pathname: '/blog',
      changeFrequency: 'weekly' as const,
      priorities: {
        zh: 0.8,
        en: 0.58,
      },
    },
    ...servicePageSlugs.map(slug => ({
      pathname: `/services/${slug}`,
      changeFrequency: 'monthly' as const,
      priorities: {
        zh: 0.84,
        en: 0.6,
      },
    })),
    ...articleSlugs.map(slug => ({
      pathname: `/blog/${slug}`,
      changeFrequency: 'monthly' as const,
      priorities: {
        zh: 0.76,
        en: 0.56,
      },
    })),
  ]

  return [...indexablePages, ...serviceRoutes].flatMap(page =>
    appLocales.map(locale => {
      const languages = Object.fromEntries(
        appLocales.map(l => [getLocaleSeoConfig(l).languageTag, getLocalizedUrl(l, page.pathname)])
      )
      languages['x-default'] = getLocalizedUrl(defaultAppLocale, page.pathname)

      return {
        url: getLocalizedUrl(locale, page.pathname),
        lastModified,
        changeFrequency: page.changeFrequency,
        priority: page.priorities[locale],
        alternates: {
          languages,
        },
      }
    })
  )
}
