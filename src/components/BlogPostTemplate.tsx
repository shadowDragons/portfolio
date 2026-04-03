import { Link } from '@/i18n/routing'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { getLocalizedPath, siteConfig, type AppLocale } from '@/lib/site-config'
import type { LocalizedArticle, LocalizedArticleSummary } from '@/lib/articles'
import type { LocalizedServicePage } from '@/lib/service-pages'
import { ArrowRight, CalendarDays, ChevronRight, Clock3, MessageSquare, ShieldCheck } from 'lucide-react'

type BlogPostTemplateProps = {
  locale: AppLocale
  article: LocalizedArticle
  relatedServices: Array<Pick<LocalizedServicePage, 'slug' | 'path' | 'navLabel' | 'heroDescription'>>
  relatedArticles: LocalizedArticleSummary[]
}

function SectionTitle({ title }: { title: string }) {
  return <h2 className='font-rubik text-[28px] leading-snug text-[#111] sm:text-4xl'>{title}</h2>
}

function formatArticleDate(locale: AppLocale, value: string) {
  return new Intl.DateTimeFormat(locale === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(value))
}

export default function BlogPostTemplate({ locale, article, relatedServices, relatedArticles }: BlogPostTemplateProps) {
  const homePath = getLocalizedPath(locale)
  const labels =
    locale === 'zh'
      ? {
          home: '首页',
          blog: '文章',
          services: '相关服务页',
          relatedArticles: '相关文章',
          keyPoints: '重点结论',
          contact: '联系我聊项目',
          viewWork: '查看作品方向',
          published: '发布时间',
          readTime: '阅读时间',
          minuteUnit: '分钟',
        }
      : {
          home: 'Home',
          blog: 'Blog',
          services: 'Related Services',
          relatedArticles: 'Related Articles',
          keyPoints: 'Key Takeaways',
          contact: 'Contact on X',
          viewWork: 'View Sample Work',
          published: 'Published',
          readTime: 'Reading Time',
          minuteUnit: 'min',
        }
  const contactHref = locale === 'en' ? siteConfig.xUrl : `${homePath}#contact`

  return (
    <div className='relative mx-auto flex w-full max-w-[1200px] flex-col gap-24 pb-16 lg:gap-28'>
      <div className='pointer-events-none absolute inset-x-0 top-[-8rem] -z-10 h-[34rem] bg-[radial-gradient(ellipse_58%_50%_at_50%_0%,rgba(196,107,44,0.12),transparent_62%)]' />

      <nav className='flex flex-wrap items-center gap-2 pt-8 text-sm text-[#8e7a65] lg:pt-12'>
        <Link href='/' className='transition hover:text-[#b86128]'>
          {labels.home}
        </Link>
        <ChevronRight className='h-4 w-4 text-[#c2aa8f]' />
        <Link href='/blog' className='transition hover:text-[#b86128]'>
          {labels.blog}
        </Link>
        <ChevronRight className='h-4 w-4 text-[#c2aa8f]' />
        <span className='text-[#5e4d3b]'>{article.navLabel}</span>
      </nav>

      <section className='grid gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-start'>
        <div className='space-y-7'>
          <div className='space-y-5'>
            <p className='text-xs font-semibold uppercase tracking-[0.22em] text-[#b86128]'>{article.eyebrow}</p>
            <h1 className='max-w-4xl break-keep font-rubik text-[42px] leading-[1.12] text-[#111] sm:text-6xl lg:text-7xl'>{article.heroTitle}</h1>
            <p className='max-w-3xl text-[16px] leading-8 text-[#645c53] sm:text-[17px]'>{article.heroDescription}</p>
          </div>

          <div className='flex flex-col gap-3 sm:flex-row'>
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
              {labels.contact}
            </a>
            <a
              href={`${homePath}#projects`}
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'h-12 rounded-full border-[#ddd] bg-white px-7 text-sm font-semibold text-[#333] hover:border-[#ccc] hover:bg-[#fafafa]',
              )}
            >
              {labels.viewWork}
              <ArrowRight className='ml-2 h-4 w-4' />
            </a>
          </div>
        </div>

        <div className='grid gap-4 sm:grid-cols-3 lg:grid-cols-1'>
          <div className='rounded-[26px] border border-[#eadfd2] bg-white/80 p-6 shadow-[0_14px_40px_-28px_rgba(0,0,0,0.18)]'>
            <div className='flex items-center gap-2 text-[#b86128]'>
              <CalendarDays className='h-4 w-4' />
              <p className='text-xs font-semibold uppercase tracking-[0.18em]'>{labels.published}</p>
            </div>
            <p className='mt-3 font-rubik text-xl text-[#111]'>{formatArticleDate(locale, article.publishedAt)}</p>
          </div>
          <div className='rounded-[26px] border border-[#eadfd2] bg-white/80 p-6 shadow-[0_14px_40px_-28px_rgba(0,0,0,0.18)]'>
            <div className='flex items-center gap-2 text-[#b86128]'>
              <Clock3 className='h-4 w-4' />
              <p className='text-xs font-semibold uppercase tracking-[0.18em]'>{labels.readTime}</p>
            </div>
            <p className='mt-3 font-rubik text-xl text-[#111]'>
              {article.readingMinutes} {labels.minuteUnit}
            </p>
          </div>
          <div className='rounded-[26px] border border-[#eadfd2] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(250,245,238,0.95))] p-6 shadow-[0_14px_40px_-28px_rgba(0,0,0,0.18)] sm:col-span-3 lg:col-span-1'>
            <p className='text-xs font-semibold uppercase tracking-[0.18em] text-[#aa6d33]'>{article.categoryLabel}</p>
            <div className='mt-4 flex flex-wrap gap-2'>
              {article.keywords.map(keyword => (
                <span key={keyword} className='rounded-full border border-[#e6dbcf] bg-white px-3 py-1.5 text-sm font-medium text-[#544c43]'>
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='rounded-[30px] border border-[#eadfd2] bg-white/80 p-7 shadow-[0_16px_48px_-34px_rgba(0,0,0,0.16)] sm:p-8'>
        <SectionTitle title={article.introTitle} />
        <div className='mt-5 space-y-4 text-[15px] leading-8 text-[#645c53]'>
          {article.introParagraphs.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className='grid gap-6'>
        {article.sections.map(section => (
          <article key={section.title} className='rounded-[30px] border border-[#eadfd2] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(250,245,238,0.95))] p-7 shadow-[0_16px_48px_-34px_rgba(0,0,0,0.16)] sm:p-8'>
            <SectionTitle title={section.title} />
            <div className='mt-5 space-y-4 text-[15px] leading-8 text-[#645c53]'>
              {section.paragraphs.map(paragraph => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {section.bullets?.length ? (
              <div className='mt-5 grid gap-3'>
                {section.bullets.map(item => (
                  <div key={item} className='flex items-start gap-3 rounded-2xl border border-[#ede1d4] bg-white/80 px-4 py-4'>
                    <ShieldCheck className='mt-0.5 h-4 w-4 shrink-0 text-[#c46b2c]' />
                    <p className='text-sm leading-7 text-[#5f564d]'>{item}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </section>

      <section className='rounded-[32px] border border-[#eadfd2] bg-white/80 p-7 shadow-[0_16px_48px_-34px_rgba(0,0,0,0.16)] sm:p-8'>
        <SectionTitle title={article.takeawayTitle || labels.keyPoints} />
        <div className='mt-8 grid gap-3'>
          {article.takeaways.map(item => (
            <div key={item} className='flex items-start gap-3 rounded-2xl border border-[#ede1d4] bg-[#fcfaf7] px-4 py-4'>
              <ShieldCheck className='mt-0.5 h-4 w-4 shrink-0 text-[#c46b2c]' />
              <p className='text-sm leading-7 text-[#5f564d]'>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='rounded-[32px] border border-[#eadfd2] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(250,245,238,0.96))] p-7 shadow-[0_16px_48px_-34px_rgba(0,0,0,0.16)] sm:p-8'>
        <div className='max-w-3xl'>
          <SectionTitle title={labels.services} />
        </div>
        <div className='mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
          {relatedServices.map(service => (
            <Link
              key={service.slug}
              href={service.path}
              className='group rounded-[24px] border border-[#eadfd2] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#d5bea6] hover:shadow-[0_14px_40px_-26px_rgba(0,0,0,0.18)]'
            >
              <p className='text-xs font-semibold uppercase tracking-[0.18em] text-[#b86128]'>{labels.services}</p>
              <h3 className='mt-3 font-rubik text-2xl text-[#111]'>{service.navLabel}</h3>
              <p className='mt-3 text-sm leading-7 text-[#645c53]'>{service.heroDescription}</p>
              <div className='mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#b86128]'>
                <span>{service.navLabel}</span>
                <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {relatedArticles.length > 0 ? (
        <section className='rounded-[32px] border border-[#eadfd2] bg-white/80 p-7 shadow-[0_16px_48px_-34px_rgba(0,0,0,0.16)] sm:p-8'>
          <div className='max-w-3xl'>
            <SectionTitle title={labels.relatedArticles} />
          </div>
          <div className='mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
            {relatedArticles.map(relatedArticle => (
              <Link
                key={relatedArticle.slug}
                href={relatedArticle.path}
                className='group rounded-[24px] border border-[#eadfd2] bg-[#fcfaf7] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#d5bea6] hover:bg-white hover:shadow-[0_14px_40px_-26px_rgba(0,0,0,0.18)]'
              >
                <p className='text-xs font-semibold uppercase tracking-[0.18em] text-[#b86128]'>{relatedArticle.categoryLabel}</p>
                <h3 className='mt-3 font-rubik text-2xl text-[#111]'>{relatedArticle.navLabel}</h3>
                <p className='mt-3 text-sm leading-7 text-[#645c53]'>{relatedArticle.heroDescription}</p>
                <div className='mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#b86128]'>
                  <span>{labels.relatedArticles}</span>
                  <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className='rounded-[32px] border border-[#111] bg-[#111] p-7 text-white shadow-[0_22px_64px_-38px_rgba(0,0,0,0.4)] sm:p-9'>
        <div className='grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center'>
          <div className='max-w-3xl'>
            <h2 className='font-rubik text-[30px] leading-[1.15] sm:text-[42px]'>{article.ctaTitle}</h2>
            <p className='mt-4 text-[15px] leading-8 text-white/72'>{article.ctaDescription}</p>
          </div>
          <div className='grid gap-3 sm:min-w-[220px]'>
            <a
              href={contactHref}
              target={locale === 'en' ? '_blank' : undefined}
              rel={locale === 'en' ? 'noreferrer' : undefined}
              className='inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#111] transition hover:bg-[#f3ece2]'
            >
              <MessageSquare className='mr-2 h-4 w-4' />
              {labels.contact}
            </a>
            <Link
              href='/blog'
              className='inline-flex items-center justify-center rounded-full border border-white/16 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]'
            >
              <ShieldCheck className='mr-2 h-4 w-4' />
              {labels.blog}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
