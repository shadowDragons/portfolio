import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import StructuredData from '@/components/StructuredData'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { appLocales, buildPageMetadata, getAppLocale, isAppLocale } from '@/lib/site-config'
import { getArticleSummariesByService } from '@/lib/articles'
import { getServicePage, getServicePageStructuredData, getServicePageSummaries, isServicePageSlug, servicePageSlugs } from '@/lib/service-pages'

type ServiceDetailPageProps = {
  params: {
    locale: string
    slug: string
  }
}

export const dynamicParams = false

export function generateStaticParams() {
  return appLocales.flatMap(locale => servicePageSlugs.map(slug => ({ locale, slug })))
}

export function generateMetadata({ params }: ServiceDetailPageProps): Metadata {
  const locale = getAppLocale(params.locale)
  const page = getServicePage(locale, params.slug)

  if (!page) {
    return {}
  }

  return buildPageMetadata({
    locale,
    pathname: page.path,
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
  })
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  if (!isAppLocale(params.locale) || !isServicePageSlug(params.slug)) {
    notFound()
  }

  const locale = getAppLocale(params.locale)
  const page = getServicePage(locale, params.slug)

  if (!page) {
    notFound()
  }

  const relatedPages = getServicePageSummaries(locale)
    .filter(service => page.relatedSlugs.includes(service.slug))
    .map(service => {
      const relatedPage = getServicePage(locale, service.slug)
      return relatedPage
    })
    .filter((service): service is NonNullable<typeof page> => Boolean(service))

  const relatedArticles = getArticleSummariesByService(locale, page.slug).slice(0, 3)

  return (
    <>
      <StructuredData data={getServicePageStructuredData(locale, page.slug)} />
      <ServicePageTemplate locale={locale} page={page} relatedPages={relatedPages} relatedArticles={relatedArticles} />
    </>
  )
}
