import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Link } from '@/i18n/routing'
import StructuredData from '@/components/StructuredData'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { buildPageMetadata, getAppLocale, getLocalizedPath, getLocalizedUrl, isAppLocale, siteConfig, type AppLocale } from '@/lib/site-config'
import { getArticleSummaries } from '@/lib/articles'
import { ArrowRight, CalendarDays, Clock3, MessageSquare } from 'lucide-react'

type BlogPageProps = {
  params: {
    locale: string
  }
}

const blogHubCopy: Record<
  AppLocale,
  {
    title: string
    description: string
    metaTitle: string
    metaDescription: string
    keywords: string[]
    eyebrow: string
    cardCta: string
    contactCta: string
    viewWorkCta: string
    servicesCta: string
  }
> = {
  zh: {
    title: '网站开发相关文章：先看报价、流程和决策问题',
    description:
      '如果你还在比较方案、评估预算或梳理需求，可以先从这些文章开始，很多常见问题都已经单独展开写过。',
    metaTitle: '网站开发文章与 SEO 内容目录｜价格、流程、对比、场景｜致诚工作室',
    metaDescription:
      '致诚工作室的文章内容目录，围绕网站开发、企业官网开发、外贸网站开发和企业系统开发，持续补价格、流程、对比和场景类长尾内容。',
    keywords: ['网站开发文章', '企业官网开发文章', '外贸网站SEO', '网站开发流程'],
    eyebrow: 'Articles',
    cardCta: '阅读文章',
    contactCta: '联系我聊项目',
    viewWorkCta: '查看作品方向',
    servicesCta: '查看服务页',
  },
  en: {
    title: 'Website Development Articles on Pricing, Process, and Planning Decisions',
    description:
      'If you are still comparing options, shaping scope, or thinking through budget and process, these articles are a practical place to start.',
    metaTitle: 'Website Development Blog and SEO Content Hub | Zhicheng Studio',
    metaDescription:
      'A content hub from Zhicheng Studio covering pricing, process, comparison, and scenario articles around website development, company sites, multilingual sites, and web applications.',
    keywords: ['website development blog', 'website SEO content', 'multilingual website SEO', 'internal system planning'],
    eyebrow: 'Articles',
    cardCta: 'Read Article',
    contactCta: 'Contact on X',
    viewWorkCta: 'View Sample Work',
    servicesCta: 'View Services',
  },
}

export function generateMetadata({ params }: BlogPageProps): Metadata {
  const locale = getAppLocale(params.locale)
  const copy = blogHubCopy[locale]

  return buildPageMetadata({
    locale,
    pathname: '/blog',
    title: copy.metaTitle,
    description: copy.metaDescription,
    keywords: copy.keywords,
  })
}

function getBlogHubStructuredData(locale: AppLocale) {
  const copy = blogHubCopy[locale]
  const pageUrl = getLocalizedUrl(locale, '/blog')

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
            name: locale === 'zh' ? '文章' : 'Blog',
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'CollectionPage',
        '@id': `${pageUrl}#collection`,
        url: pageUrl,
        name: copy.metaTitle,
        description: copy.metaDescription,
      },
    ],
  }
}

function formatArticleDate(locale: AppLocale, value: string) {
  return new Intl.DateTimeFormat(locale === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(value))
}

export default function BlogPage({ params }: BlogPageProps) {
  if (!isAppLocale(params.locale)) {
    notFound()
  }

  const locale = getAppLocale(params.locale)
  const copy = blogHubCopy[locale]
  const articles = getArticleSummaries(locale)
  const homePath = getLocalizedPath(locale)
  const timeLabel = locale === 'zh' ? '分钟' : 'min'
  const contactHref = locale === 'en' ? siteConfig.xUrl : `${homePath}#contact`

  return (
    <>
      <StructuredData data={getBlogHubStructuredData(locale)} />
      <div className='relative mx-auto flex w-full max-w-[1200px] flex-col gap-20 pb-16 lg:gap-24'>
        <div className='pointer-events-none absolute inset-x-0 top-[-8rem] -z-10 h-[34rem] bg-[radial-gradient(ellipse_58%_50%_at_50%_0%,rgba(196,107,44,0.12),transparent_62%)]' />

        <section className='pt-8 text-center lg:pt-14'>
          <p className='text-xs font-semibold uppercase tracking-[0.22em] text-[#b86128]'>{copy.eyebrow}</p>
          <h1 className='mx-auto mt-6 max-w-5xl break-keep font-rubik text-[42px] leading-[1.12] text-[#111] sm:text-6xl lg:text-7xl'>{copy.title}</h1>
          <p className='mx-auto mt-6 max-w-3xl text-[16px] leading-8 text-[#645c53] sm:text-[17px]'>{copy.description}</p>

          <div className='mt-10 flex flex-col justify-center gap-3 sm:flex-row'>
            <a
              href={contactHref}
              target={locale === 'en' ? '_blank' : undefined}
              rel={locale === 'en' ? 'noreferrer' : undefined}
              className={cn(
                buttonVariants({ size: 'lg' }),
                'h-12 rounded-full border-0 bg-[#111] px-7 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(0,0,0,0.3)] transition-all hover:bg-[#222] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.35)]',
              )}
            >
              <MessageSquare className='mr-2 h-4 w-4' />
              {copy.contactCta}
            </a>
            <a
              href={`${homePath}#projects`}
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'h-12 rounded-full border-[#ddd] bg-white px-7 text-sm font-semibold text-[#333] hover:border-[#ccc] hover:bg-[#fafafa]',
              )}
            >
              {copy.viewWorkCta}
              <ArrowRight className='ml-2 h-4 w-4' />
            </a>
          </div>
        </section>

        <section className='grid gap-4 lg:grid-cols-2 xl:grid-cols-3'>
          {articles.map(article => (
            <Link
              key={article.slug}
              href={article.path}
              className='group flex h-full flex-col rounded-[28px] border border-[#eadfd2] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(250,245,238,0.96))] p-6 shadow-[0_16px_48px_-34px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d8c2aa] hover:bg-white hover:shadow-[0_18px_56px_-30px_rgba(0,0,0,0.18)]'
            >
              <p className='text-xs font-semibold uppercase tracking-[0.18em] text-[#b86128]'>{article.categoryLabel}</p>
              <h2 className='mt-4 font-rubik text-2xl leading-snug text-[#111]'>{article.navLabel}</h2>
              <p className='mt-4 flex-1 text-sm leading-7 text-[#645c53]'>{article.heroDescription}</p>
              <div className='mt-5 flex flex-wrap gap-4 text-xs uppercase tracking-[0.14em] text-[#8a7d70]'>
                <span className='inline-flex items-center gap-2'>
                  <CalendarDays className='h-3.5 w-3.5' />
                  {formatArticleDate(locale, article.publishedAt)}
                </span>
                <span className='inline-flex items-center gap-2'>
                  <Clock3 className='h-3.5 w-3.5' />
                  {article.readingMinutes} {timeLabel}
                </span>
              </div>
              <div className='mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#b86128]'>
                <span>{copy.cardCta}</span>
                <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
              </div>
            </Link>
          ))}
        </section>

        <section className='rounded-[32px] border border-[#111] bg-[#111] p-7 text-white shadow-[0_22px_64px_-38px_rgba(0,0,0,0.4)] sm:p-9'>
          <div className='grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center'>
            <div className='max-w-3xl'>
              <h2 className='font-rubik text-[30px] leading-[1.15] sm:text-[42px]'>{copy.title}</h2>
              <p className='mt-4 text-[15px] leading-8 text-white/72'>{copy.description}</p>
            </div>
            <Link
              href='/services'
              className='inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#111] transition hover:bg-[#f3ece2]'
            >
              <ArrowRight className='mr-2 h-4 w-4' />
              {copy.servicesCta}
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
