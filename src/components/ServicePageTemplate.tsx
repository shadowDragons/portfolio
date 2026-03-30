import { Link } from '@/i18n/routing'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { getLocalizedPath, siteConfig, type AppLocale } from '@/lib/site-config'
import type { LocalizedArticleSummary } from '@/lib/articles'
import type { LocalizedServicePage } from '@/lib/service-pages'
import { ArrowRight, CheckCircle2, ChevronRight, MessageSquare, ShieldCheck } from 'lucide-react'

type ServicePageTemplateProps = {
  locale: AppLocale
  page: LocalizedServicePage
  relatedPages: Array<Pick<LocalizedServicePage, 'slug' | 'path' | 'navLabel' | 'heroDescription'>>
  relatedArticles: LocalizedArticleSummary[]
}

function SectionTitle({ title }: { title: string }) {
  return <h2 className='font-rubik text-[28px] leading-snug text-[#111] sm:text-4xl'>{title}</h2>
}

export default function ServicePageTemplate({ locale, page, relatedPages, relatedArticles }: ServicePageTemplateProps) {
  const homePath = getLocalizedPath(locale)
  const labels =
    locale === 'zh'
      ? {
          home: '首页',
          services: '服务页',
          contact: '联系我聊项目',
          viewWork: '查看作品方向',
          keywords: '关键词方向',
          related: '相关服务页',
          articles: '相关文章',
          ctaHint: '也可以直接带上预算、目标和当前问题来聊。',
          wechat: '微信',
          phone: '电话',
          proofTitle: '合作方式',
          proofDescription: '本人直接沟通与交付，不分包，适合重视节奏、质量和长期维护的项目。',
        }
      : {
          home: 'Home',
          services: 'Services',
          contact: 'Discuss Your Project',
          viewWork: 'View Sample Work',
          keywords: 'Keyword Focus',
          related: 'Related Service Pages',
          articles: 'Related Articles',
          ctaHint: 'Budget, goals, and the main problem you want solved are enough to start the conversation.',
          wechat: 'WeChat',
          phone: 'Phone',
          proofTitle: 'How the collaboration works',
          proofDescription: 'Communication and delivery stay direct without subcontracting, which is a better fit for teams that care about quality and long-term support.',
        }

  return (
    <div className='relative mx-auto flex w-full max-w-[1200px] flex-col gap-24 pb-16 lg:gap-28'>
      <div className='pointer-events-none absolute inset-x-0 top-[-8rem] -z-10 h-[34rem] bg-[radial-gradient(ellipse_58%_50%_at_50%_0%,rgba(196,107,44,0.12),transparent_62%)]' />

      <nav className='flex flex-wrap items-center gap-2 pt-8 text-sm text-[#8e7a65] lg:pt-12'>
        <Link href='/' className='transition hover:text-[#b86128]'>
          {labels.home}
        </Link>
        <ChevronRight className='h-4 w-4 text-[#c2aa8f]' />
        <Link href='/services' className='transition hover:text-[#b86128]'>
          {labels.services}
        </Link>
        <ChevronRight className='h-4 w-4 text-[#c2aa8f]' />
        <span className='text-[#5e4d3b]'>{page.navLabel}</span>
      </nav>

      <section className='grid gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-start'>
        <div className='space-y-7'>
          <div className='space-y-5'>
            <p className='text-xs font-semibold uppercase tracking-[0.22em] text-[#b86128]'>{page.eyebrow}</p>
            <h1 className='max-w-4xl break-keep font-rubik text-[42px] leading-[1.12] text-[#111] sm:text-6xl lg:text-7xl'>{page.heroTitle}</h1>
            <p className='max-w-3xl text-[16px] leading-8 text-[#645c53] sm:text-[17px]'>{page.heroDescription}</p>
          </div>

          <div className='flex flex-col gap-3 sm:flex-row'>
            <a
              href={`${homePath}#contact`}
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

          <div className='rounded-[28px] border border-[#eadfd2] bg-white/70 p-6 shadow-[0_16px_48px_-32px_rgba(0,0,0,0.16)]'>
            <p className='text-xs font-semibold uppercase tracking-[0.22em] text-[#aa6d33]'>{labels.keywords}</p>
            <div className='mt-4 flex flex-wrap gap-2'>
              {page.keywords.map(keyword => (
                <span key={keyword} className='rounded-full border border-[#e6dbcf] bg-[#faf6f1] px-3 py-1.5 text-sm font-medium text-[#5e4d3b]'>
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className='grid gap-4 sm:grid-cols-3 lg:grid-cols-1'>
          {page.statItems.map(item => (
            <div
              key={`${item.label}-${item.value}`}
              className='rounded-[26px] border border-[#eadfd2] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(250,245,238,0.94))] p-6 shadow-[0_14px_40px_-28px_rgba(0,0,0,0.18)]'
            >
              <p className='font-rubik text-[24px] text-[#111]'>{item.value}</p>
              <p className='mt-2 text-sm font-semibold text-[#5e4d3b]'>{item.label}</p>
              <p className='mt-2 text-sm leading-6 text-[#6f675d]'>{item.description}</p>
            </div>
          ))}

          <div className='rounded-[26px] border border-[#111] bg-[#111] p-6 text-white shadow-[0_18px_56px_-34px_rgba(0,0,0,0.36)] sm:col-span-3 lg:col-span-1'>
            <p className='text-xs font-semibold uppercase tracking-[0.22em] text-[#d4944e]'>{labels.proofTitle}</p>
            <p className='mt-3 text-sm leading-7 text-white/78'>{labels.proofDescription}</p>
            <div className='mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1'>
              <div className='rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-3'>
                <p className='text-xs text-white/54'>{labels.wechat}</p>
                <p className='mt-1 font-rubik text-lg text-white'>{siteConfig.wechat}</p>
              </div>
              <div className='rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-3'>
                <p className='text-xs text-white/54'>{labels.phone}</p>
                <p className='mt-1 font-rubik text-lg text-white'>{siteConfig.displayPhone}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='grid gap-6 lg:grid-cols-[1fr_1fr]'>
        <article className='rounded-[30px] border border-[#eadfd2] bg-white/80 p-7 shadow-[0_16px_48px_-34px_rgba(0,0,0,0.16)] sm:p-8'>
          <SectionTitle title={page.introTitle} />
          <div className='mt-5 space-y-4 text-[15px] leading-8 text-[#645c53]'>
            {page.introParagraphs.map(paragraph => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>

        <article className='rounded-[30px] border border-[#eadfd2] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(250,245,238,0.95))] p-7 shadow-[0_16px_48px_-34px_rgba(0,0,0,0.16)] sm:p-8'>
          <SectionTitle title={page.fitTitle} />
          <div className='mt-5 grid gap-3'>
            {page.fitItems.map(item => (
              <div key={item} className='flex items-start gap-3 rounded-2xl border border-[#ede1d4] bg-white/80 px-4 py-4'>
                <CheckCircle2 className='mt-0.5 h-4 w-4 shrink-0 text-[#c46b2c]' />
                <p className='text-sm leading-7 text-[#5f564d]'>{item}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className='grid gap-6 lg:grid-cols-[1fr_1fr]'>
        <article className='rounded-[30px] border border-[#eadfd2] bg-[#faf7f3] p-7 shadow-[0_16px_48px_-34px_rgba(0,0,0,0.16)] sm:p-8'>
          <SectionTitle title={page.deliverablesTitle} />
          <div className='mt-5 space-y-3'>
            {page.deliverables.map(item => (
              <div key={item} className='rounded-2xl border border-[#eadfd2] bg-white px-4 py-4'>
                <p className='text-sm leading-7 text-[#5f564d]'>{item}</p>
              </div>
            ))}
          </div>
        </article>

        <article className='rounded-[30px] border border-[#eadfd2] bg-white/80 p-7 shadow-[0_16px_48px_-34px_rgba(0,0,0,0.16)] sm:p-8'>
          <SectionTitle title={page.outcomesTitle} />
          <div className='mt-5 grid gap-3'>
            {page.outcomes.map(item => (
              <div key={item} className='rounded-2xl border border-[#ede1d4] bg-[#fcfaf7] px-4 py-4'>
                <p className='text-sm leading-7 text-[#5f564d]'>{item}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className='rounded-[32px] border border-[#eadfd2] bg-white/80 p-7 shadow-[0_16px_48px_-34px_rgba(0,0,0,0.16)] sm:p-8'>
        <div className='max-w-3xl'>
          <SectionTitle title={page.processTitle} />
        </div>
        <div className='mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
          {page.processSteps.map((step, index) => (
            <article key={step.title} className='rounded-[24px] border border-[#eadfd2] bg-[#fcfaf7] p-5'>
              <span className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#111] font-rubik text-sm font-semibold text-white'>
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className='mt-4 font-rubik text-xl text-[#111]'>{step.title}</h3>
              <p className='mt-3 text-sm leading-7 text-[#645c53]'>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className='rounded-[32px] border border-[#eadfd2] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(250,245,238,0.96))] p-7 shadow-[0_16px_48px_-34px_rgba(0,0,0,0.16)] sm:p-8'>
        <div className='max-w-3xl'>
          <SectionTitle title={page.faqTitle} />
        </div>
        <div className='mt-8 grid gap-4 lg:grid-cols-2'>
          {page.faqs.map(faq => (
            <article key={faq.question} className='rounded-[24px] border border-[#eadfd2] bg-white p-5'>
              <h3 className='font-rubik text-xl leading-snug text-[#111]'>{faq.question}</h3>
              <p className='mt-3 text-sm leading-7 text-[#645c53]'>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      {relatedArticles.length > 0 ? (
        <section className='rounded-[32px] border border-[#eadfd2] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(250,245,238,0.96))] p-7 shadow-[0_16px_48px_-34px_rgba(0,0,0,0.16)] sm:p-8'>
          <div className='max-w-3xl'>
            <SectionTitle title={labels.articles} />
          </div>
          <div className='mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
            {relatedArticles.map(article => (
              <Link
                key={article.slug}
                href={article.path}
                className='group rounded-[24px] border border-[#eadfd2] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#d5bea6] hover:shadow-[0_14px_40px_-26px_rgba(0,0,0,0.18)]'
              >
                <p className='text-xs font-semibold uppercase tracking-[0.18em] text-[#b86128]'>{article.categoryLabel}</p>
                <h3 className='mt-3 font-rubik text-2xl text-[#111]'>{article.navLabel}</h3>
                <p className='mt-3 text-sm leading-7 text-[#645c53]'>{article.heroDescription}</p>
                <div className='mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#b86128]'>
                  <span>{labels.articles}</span>
                  <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className='rounded-[32px] border border-[#eadfd2] bg-white/80 p-7 shadow-[0_16px_48px_-34px_rgba(0,0,0,0.16)] sm:p-8'>
        <div className='flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'>
          <div className='max-w-3xl'>
            <SectionTitle title={labels.related} />
          </div>
        </div>
        <div className='mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
          {relatedPages.map(relatedPage => (
            <Link
              key={relatedPage.slug}
              href={relatedPage.path}
              className='group rounded-[24px] border border-[#eadfd2] bg-[#fcfaf7] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#d5bea6] hover:bg-white hover:shadow-[0_14px_40px_-26px_rgba(0,0,0,0.18)]'
            >
              <p className='text-xs font-semibold uppercase tracking-[0.18em] text-[#b86128]'>{labels.services}</p>
              <h3 className='mt-3 font-rubik text-2xl text-[#111]'>{relatedPage.navLabel}</h3>
              <p className='mt-3 text-sm leading-7 text-[#645c53]'>{relatedPage.heroDescription}</p>
              <div className='mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#b86128]'>
                <span>{relatedPage.navLabel}</span>
                <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className='rounded-[32px] border border-[#111] bg-[#111] p-7 text-white shadow-[0_22px_64px_-38px_rgba(0,0,0,0.4)] sm:p-9'>
        <div className='grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center'>
          <div className='max-w-3xl'>
            <h2 className='font-rubik text-[30px] leading-[1.15] sm:text-[42px]'>{page.ctaTitle}</h2>
            <p className='mt-4 text-[15px] leading-8 text-white/72'>{page.ctaDescription}</p>
            <p className='mt-3 text-sm leading-7 text-white/58'>{labels.ctaHint}</p>
          </div>
          <div className='grid gap-3 sm:min-w-[220px]'>
            <a
              href={`${homePath}#contact`}
              className='inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#111] transition hover:bg-[#f3ece2]'
            >
              <MessageSquare className='mr-2 h-4 w-4' />
              {labels.contact}
            </a>
            <Link
              href='/services'
              className='inline-flex items-center justify-center rounded-full border border-white/16 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]'
            >
              <ShieldCheck className='mr-2 h-4 w-4' />
              {labels.services}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
