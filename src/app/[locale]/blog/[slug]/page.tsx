import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import StructuredData from '@/components/StructuredData'
import BlogPostTemplate from '@/components/BlogPostTemplate'
import { appLocales, buildPageMetadata, getAppLocale, isAppLocale } from '@/lib/site-config'
import { articleSlugs, getArticle, getArticleStructuredData, getArticleSummaries, isArticleSlug } from '@/lib/articles'
import { getServicePage } from '@/lib/service-pages'

type BlogPostPageProps = {
  params: {
    locale: string
    slug: string
  }
}

export const dynamicParams = false

export function generateStaticParams() {
  return appLocales.flatMap(locale => articleSlugs.map(slug => ({ locale, slug })))
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const locale = getAppLocale(params.locale)
  const article = getArticle(locale, params.slug)

  if (!article) {
    return {}
  }

  return buildPageMetadata({
    locale,
    pathname: article.path,
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
  })
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  if (!isAppLocale(params.locale) || !isArticleSlug(params.slug)) {
    notFound()
  }

  const locale = getAppLocale(params.locale)
  const article = getArticle(locale, params.slug)

  if (!article) {
    notFound()
  }

  const relatedServices = article.relatedServices
    .map(serviceSlug => getServicePage(locale, serviceSlug))
    .filter((service): service is NonNullable<ReturnType<typeof getServicePage>> => Boolean(service))

  const relatedArticles = getArticleSummaries(locale)
    .filter(item => item.slug !== article.slug)
    .filter(item => item.relatedServices.some(serviceSlug => article.relatedServices.includes(serviceSlug)))
    .slice(0, 3)

  return (
    <>
      <StructuredData data={getArticleStructuredData(locale, article.slug)} />
      <BlogPostTemplate locale={locale} article={article} relatedServices={relatedServices} relatedArticles={relatedArticles} />
    </>
  )
}
