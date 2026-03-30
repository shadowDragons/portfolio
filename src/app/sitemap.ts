import type { MetadataRoute } from 'next'
import { appLocales, getLocalizedUrl, indexablePages } from '@/lib/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return indexablePages.flatMap(page =>
    appLocales.map(locale => ({
      url: getLocalizedUrl(locale, page.pathname),
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priorities[locale],
    })),
  )
}
