import { Link } from '@/i18n/routing'
import { getArticleSummaries } from '@/lib/articles'
import { getLocalizedPath, siteConfig, type AppLocale } from '@/lib/site-config'
import { getServicePageSummaries } from '@/lib/service-pages'
import BrandLogo from '@/components/BrandLogo'

type FooterProps = {
  locale: AppLocale
}

export default function Footer({ locale }: FooterProps) {
  const serviceLinks = getServicePageSummaries(locale).slice(0, 5)
  const articleLinks = getArticleSummaries(locale).slice(0, 6)
  const labels =
    locale === 'zh'
      ? {
          summary: '如果你已经明确项目方向，可以直接从服务页或文章目录继续看。',
          quick: '快速入口',
          services: '服务页',
          articles: '文章',
          contact: '联系',
          email: '邮箱',
          x: 'X / Twitter',
          home: '首页',
          blog: '文章目录',
          servicesHub: '全部服务页',
          contactLink: '联系我',
          copyright: '网站开发 / 企业官网 / 外贸网站 / 小程序 / 企业系统',
        }
      : {
          summary: 'If you already know the direction, the service pages and article hub are the fastest places to continue.',
          quick: 'Quick Links',
          services: 'Services',
          articles: 'Articles',
          contact: 'Contact',
          email: 'Email',
          x: 'X / Twitter',
          home: 'Home',
          blog: 'Article Hub',
          servicesHub: 'All Services',
          contactLink: 'Contact on X',
          copyright: 'Website development / company sites / foreign trade / mini-programs / internal systems',
        }

  const homePath = getLocalizedPath(locale)
  const contactQuickHref = locale === 'en' ? siteConfig.xUrl : `${homePath}#contact`
  const contactItems =
    locale === 'en'
      ? [{ label: labels.x, value: siteConfig.xHandle, href: siteConfig.xUrl, external: true }]
      : [
          { label: labels.email, value: siteConfig.email, href: `mailto:${siteConfig.email}`, external: false },
          { label: labels.x, value: siteConfig.xHandle, href: siteConfig.xUrl, external: true },
        ]

  return (
    <footer className='border-t border-black/[0.06] bg-[#faf7f3]'>
      <div className='mx-auto grid w-full max-w-[1280px] gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr_0.9fr_0.8fr] lg:px-12'>
        <div className='space-y-4'>
          <Link href='/' aria-label={siteConfig.brandName} className='inline-flex items-center'>
            <BrandLogo label={siteConfig.brandName} className='h-[56px] w-auto sm:h-[64px]' />
          </Link>
          <p className='max-w-md text-sm leading-7 text-[#655d54]'>{labels.summary}</p>
          <div className='space-y-2'>
            <p className='text-accent-accessible text-xs font-semibold uppercase tracking-[0.18em]'>{labels.contact}</p>
            <div className='grid gap-2 text-sm text-[#4f463d]'>
              {contactItems.map(item => (
                <a
                  key={`${item.label}-${item.value}`}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}
                  className='break-all transition hover:text-accent-accessible'
                >
                  {item.label}: {item.value}
                </a>
              ))}
            </div>
          </div>
          <p className='text-muted-accessible text-sm'>{labels.copyright}</p>
        </div>

        <div className='space-y-4'>
          <p className='text-accent-accessible text-xs font-semibold uppercase tracking-[0.18em]'>{labels.quick}</p>
          <div className='grid gap-2 text-sm text-[#4f463d]'>
            <Link href='/' className='transition hover:text-accent-accessible'>
              {labels.home}
            </Link>
            <Link href='/services' className='transition hover:text-accent-accessible'>
              {labels.servicesHub}
            </Link>
            <Link href='/blog' className='transition hover:text-accent-accessible'>
              {labels.blog}
            </Link>
            <a href={contactQuickHref} target={locale === 'en' ? '_blank' : undefined} rel={locale === 'en' ? 'noreferrer' : undefined} className='transition hover:text-accent-accessible'>
              {labels.contactLink}
            </a>
          </div>
        </div>

        <div className='space-y-4'>
          <p className='text-accent-accessible text-xs font-semibold uppercase tracking-[0.18em]'>{labels.services}</p>
          <div className='grid gap-2 text-sm text-[#4f463d]'>
            {serviceLinks.map(service => (
              <Link key={service.slug} href={service.path} className='transition hover:text-accent-accessible'>
                {service.navLabel}
              </Link>
            ))}
          </div>
        </div>

        <div className='space-y-4'>
          <p className='text-accent-accessible text-xs font-semibold uppercase tracking-[0.18em]'>{labels.articles}</p>
          <div className='grid gap-2 text-sm text-[#4f463d]'>
            {articleLinks.map(article => (
              <Link key={article.slug} href={article.path} className='transition hover:text-accent-accessible'>
                {article.navLabel}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
