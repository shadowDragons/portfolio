import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Link } from '@/i18n/routing'
import StructuredData from '@/components/StructuredData'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { buildPageMetadata, getAppLocale, getLocalizedPath, getLocalizedUrl, isAppLocale, siteConfig, type AppLocale } from '@/lib/site-config'
import { getServicePageSummaries } from '@/lib/service-pages'
import { ArrowRight, Building2, Globe, Languages, Layers3, MessageSquare, MonitorSmartphone } from 'lucide-react'

type ServicesPageProps = {
  params: {
    locale: string
  }
}

const servicesHubCopy: Record<
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
    closingTitle: string
    closingDescription: string
  }
> = {
  zh: {
    title: '网站开发服务：企业官网、外贸网站、小程序与企业系统',
    description:
      '不同项目类型的重点和推进方式并不一样。你可以先按方向看对应服务页，再判断哪一种更适合当前需求。',
    metaTitle: '网站开发服务页｜企业官网 / 外贸网站 / 小程序 / 企业系统开发｜致诚工作室',
    metaDescription:
      '致诚工作室的网站开发服务页总览，覆盖网站开发、企业官网开发、外贸网站开发、小程序开发和企业系统开发，适合按具体需求快速进入对应服务页。',
    keywords: ['网站开发服务', '企业官网开发', '外贸网站开发', '小程序开发', '企业系统开发'],
    eyebrow: 'Services',
    cardCta: '查看服务页',
    contactCta: '联系我聊项目',
    viewWorkCta: '查看作品方向',
    closingTitle: '如果你还拿不准该看哪一页，可以先从“网站开发服务”开始',
    closingDescription: '它更适合做总入口，再根据你的需求继续细分到官网、外贸站、小程序或企业系统方向。',
  },
  en: {
    title: 'Website Development Services for Company Sites, Foreign Trade Sites, Mini-programs, and Internal Systems',
    description:
      'Different project types come with different priorities and delivery rhythm. You can start with the closest service page and judge fit from there.',
    metaTitle: 'Service Pages for Website Development, Company Sites, Foreign Trade Sites, Mini-programs, and Web Apps | Zhicheng Studio',
    metaDescription:
      'A service-page hub from Zhicheng Studio covering website development, company websites, foreign trade websites, mini-programs, and custom web application delivery.',
    keywords: ['website development services', 'company website development', 'foreign trade website development', 'mini-program development', 'web app development'],
    eyebrow: 'Services',
    cardCta: 'Open Service Page',
    contactCta: 'Contact on X',
    viewWorkCta: 'View Sample Work',
    closingTitle: 'If you are not sure where to start, begin with the general website development page',
    closingDescription: 'It works well as the parent entry before narrowing into company sites, foreign trade sites, mini-programs, or internal systems.',
  },
}

const iconMap = {
  'website-development': Globe,
  'company-website-development': Building2,
  'foreign-trade-website-development': Languages,
  'mini-program-development': MonitorSmartphone,
  'web-app-development': Layers3,
} as const

export function generateMetadata({ params }: ServicesPageProps): Metadata {
  const locale = getAppLocale(params.locale)
  const copy = servicesHubCopy[locale]

  return buildPageMetadata({
    locale,
    pathname: '/services',
    title: copy.metaTitle,
    description: copy.metaDescription,
    keywords: copy.keywords,
  })
}

function getServicesHubStructuredData(locale: AppLocale) {
  const copy = servicesHubCopy[locale]
  const pageUrl = getLocalizedUrl(locale, '/services')

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
            name: locale === 'zh' ? '服务页' : 'Services',
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
      {
        '@type': 'ItemList',
        '@id': `${pageUrl}#itemlist`,
        itemListElement: getServicePageSummaries(locale).map((service, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: service.navLabel,
          url: getLocalizedUrl(locale, service.path),
        })),
      },
    ],
  }
}

export default function ServicesPage({ params }: ServicesPageProps) {
  if (!isAppLocale(params.locale)) {
    notFound()
  }

  const locale = getAppLocale(params.locale)
  const copy = servicesHubCopy[locale]
  const services = getServicePageSummaries(locale)
  const homePath = getLocalizedPath(locale)
  const defaultService = services.find(service => service.slug === 'website-development')
  const contactHref = locale === 'en' ? siteConfig.xUrl : `${homePath}#contact`

  return (
    <>
      <StructuredData data={getServicesHubStructuredData(locale)} />
      <div className='relative mx-auto flex w-full max-w-[1200px] flex-col gap-20 pb-16 lg:gap-24'>
        <div className='pointer-events-none absolute inset-x-0 top-[-8rem] -z-10 h-[34rem] bg-[radial-gradient(ellipse_58%_50%_at_50%_0%,rgba(196,107,44,0.12),transparent_62%)]' />

        <section className='pt-8 text-center lg:pt-14'>
          <p className='text-accent-accessible text-xs font-semibold uppercase tracking-[0.22em]'>{copy.eyebrow}</p>
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
          {services.map(service => {
            const Icon = iconMap[service.slug]

            return (
              <Link
                key={service.slug}
                href={service.path}
                className='group flex h-full flex-col rounded-[28px] border border-[#eadfd2] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(250,245,238,0.96))] p-6 shadow-[0_16px_48px_-34px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d8c2aa] hover:bg-white hover:shadow-[0_18px_56px_-30px_rgba(0,0,0,0.18)]'
              >
                <div className='text-accent-accessible flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5ede3]'>
                  <Icon className='h-5 w-5' />
                </div>
                <h2 className='mt-5 font-rubik text-2xl leading-snug text-[#111]'>{service.navLabel}</h2>
                <p className='mt-4 flex-1 text-sm leading-7 text-[#645c53]'>{service.heroDescription}</p>
                <div className='text-accent-accessible mt-6 inline-flex items-center gap-2 text-sm font-semibold'>
                  <span>{copy.cardCta}</span>
                  <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                </div>
              </Link>
            )
          })}
        </section>

        <section className='rounded-[32px] border border-[#111] bg-[#111] p-7 text-white shadow-[0_22px_64px_-38px_rgba(0,0,0,0.4)] sm:p-9'>
          <div className='grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center'>
            <div className='max-w-3xl'>
              <h2 className='font-rubik text-[30px] leading-[1.15] sm:text-[42px]'>{copy.closingTitle}</h2>
              <p className='mt-4 text-[15px] leading-8 text-white/72'>{copy.closingDescription}</p>
            </div>
            <Link
              href='/services/website-development'
              className='inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#111] transition hover:bg-[#f3ece2]'
            >
              <Globe className='mr-2 h-4 w-4' />
              {defaultService?.navLabel ?? 'Website Development'}
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
