import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/routing'
import { siteConfig, type AppLocale } from '@/lib/site-config'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import ContactCards from '@/components/business-home/ContactCards'
import ProjectsShowcase from '@/components/business-home/ProjectsShowcase'
import type { HomeContactCard, ShowcaseWork, WorkKey } from '@/components/business-home/types'
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Clock3,
  CreditCard,
  Globe,
  Layers3,
  MessageSquare,
  MonitorSmartphone,
  Rocket,
  Scale,
  ShieldCheck,
  Sparkles,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

function SectionHeader({ eyebrow, title, description, center = false }: { eyebrow: string; title: string; description: string; center?: boolean }) {
  return (
    <div className={cn('max-w-3xl', center && 'mx-auto text-center')}>
      <div className='space-y-4'>
        <p className='text-accent-accessible text-xs font-semibold uppercase tracking-[0.22em]'>{eyebrow}</p>
        <h2 className='font-rubik text-[28px] leading-snug text-[#111] sm:text-4xl'>{title}</h2>
        {description ? <p className='max-w-3xl text-[15px] leading-8 text-[#666]'>{description}</p> : null}
      </div>
    </div>
  )
}

function InfoCard({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) {
  return (
    <div className='flex h-full flex-col gap-4 rounded-2xl border border-[#ece3d8] bg-white/70 p-5 text-left shadow-[0_12px_32px_-18px_rgba(0,0,0,0.16)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#dfd1c0] hover:bg-white'>
      <div className='text-accent-accessible flex h-11 w-11 items-center justify-center rounded-xl bg-[#f5ede3]'>
        <Icon className='h-5 w-5' />
      </div>
      <div className='space-y-2'>
        <p className='font-rubik text-lg text-[#111]'>{title}</p>
        <p className='text-sm leading-6 text-[#6d6a65]'>{description}</p>
      </div>
    </div>
  )
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  bullets,
}: {
  icon: LucideIcon
  title: string
  description: string
  bullets: string[]
}) {
  return (
    <div className='group flex h-full flex-col gap-5 rounded-2xl border border-transparent bg-white/60 p-6 transition-all duration-300 hover:border-[#e8ddd0] hover:bg-white hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)]'>
      <div className='text-accent-accessible flex h-11 w-11 items-center justify-center rounded-xl bg-[#f5ede3] transition-colors group-hover:bg-[#f0e4d6]'>
        <Icon className='h-5 w-5' />
      </div>
      <div className='space-y-2'>
        <h3 className='font-rubik text-xl text-[#111]'>{title}</h3>
        <p className='text-muted-accessible text-sm leading-6'>{description}</p>
      </div>
      <div className='mt-auto space-y-2.5 border-t border-dashed border-[#e8e0d6] pt-4 text-sm text-[#555]'>
        {bullets.map(item => (
          <div key={item} className='flex items-start gap-2.5'>
            <CheckCircle2 className='mt-0.5 h-3.5 w-3.5 shrink-0 text-[#c46b2c]' />
            <p className='leading-6'>{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProcessCard({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className='flex h-full flex-col gap-4 rounded-2xl border border-[#eee] bg-white p-6 transition-all duration-300 hover:border-[#ddd] hover:shadow-[0_8px_28px_-14px_rgba(0,0,0,0.12)]'>
      <span className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#111] font-rubik text-sm font-semibold text-white'>{step}</span>
      <div className='space-y-2'>
        <h3 className='font-rubik text-lg text-[#111]'>{title}</h3>
        <p className='text-muted-accessible text-sm leading-6'>{description}</p>
      </div>
    </div>
  )
}

function StackPanel({ label, items }: { label: string; items: string[] }) {
  return (
    <div className='rounded-2xl border border-[#ece4da] bg-[#fcfaf7] p-5'>
      <p className='text-accent-accessible text-xs font-semibold uppercase tracking-[0.18em]'>{label}</p>
      <div className='mt-4 flex flex-wrap gap-2'>
        {items.map(item => (
          <span key={item} className='rounded-full border border-[#e6dbcf] bg-white px-3 py-1.5 text-sm font-medium text-[#544c43]'>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

type BusinessHomeProps = {
  locale: AppLocale
}

export default async function BusinessHome({ locale }: BusinessHomeProps) {
  const t = await getTranslations({ locale, namespace: 'Landing' })
  const isEnglish = locale === 'en'

  const heroTitleSuffix = t('hero.titleSuffix')

  const highlights = [
    { key: 'background', icon: Briefcase },
    { key: 'availability', icon: Clock3 },
    { key: 'direct', icon: MessageSquare },
    { key: 'delivery', icon: ShieldCheck },
  ] as const

  const services = [
    { key: 'brandSites', icon: Globe },
    { key: 'webApps', icon: Layers3 },
    { key: 'mvpDelivery', icon: MonitorSmartphone },
    { key: 'aiAutomation', icon: Sparkles },
  ] as const

  const principles = [
    { key: 'support', icon: Wrench },
    { key: 'direct', icon: MessageSquare },
    { key: 'focus', icon: Rocket },
    { key: 'standard', icon: Scale },
  ] as const

  const processSteps = ['payment', 'analysis', 'timeline', 'sync', 'delivery', 'maintenance'] as const
  const noGoKeys = ['thesis', 'illegal', 'onsite', 'bidding', 'price', 'crowd'] as const
  const expectationKeys = ['budget', 'requirements', 'communication'] as const

  const frontendStack = ['Vue', 'React', 'Next.js', 'TypeScript']
  const backendStack = ['Java', 'PHP', 'Python', 'Node.js']

  const primaryContactHref = isEnglish ? siteConfig.xUrl : '#contact'
  const contactCards: HomeContactCard[] = isEnglish
    ? [
        {
          type: 'link',
          icon: 'globe',
          label: t('contact.xLabel'),
          value: siteConfig.xHandle,
          href: siteConfig.xUrl,
        },
      ]
    : [
        {
          type: 'copy',
          icon: 'messageSquare',
          label: t('contact.wechatLabel'),
          value: siteConfig.wechat,
        },
        ...(siteConfig.displayPhone
          ? [
              {
                type: 'copy' as const,
                icon: 'phone' as const,
                label: t('contact.phoneLabel'),
                value: siteConfig.displayPhone,
              },
            ]
          : []),
        {
          type: 'link',
          icon: 'mail',
          label: t('contact.emailLabel'),
          value: siteConfig.email,
          href: `mailto:${siteConfig.email}`,
        },
        {
          type: 'link',
          icon: 'globe',
          label: t('contact.xLabel'),
          value: siteConfig.xHandle,
          href: siteConfig.xUrl,
        },
      ]

  const projectImages = (folder: string, count: number) => Array.from({ length: count }, (_, index) => `/projects/${folder}/${index + 1}.jpg`)

  const workAssets: Record<WorkKey, { images: string[]; stack: string[]; link?: string }> = {
    asset: {
      images: projectImages('asset', 5),
      stack: ['PHP', 'Yii', 'Vue', 'Typescript'],
    },
    hr: {
      images: projectImages('hr', 4),
      stack: ['PHP', 'Yii', 'Vue', 'Typescript'],
    },
    finance: {
      images: projectImages('finance', 3),
      stack: ['PHP', 'Yii', 'Vue', 'Typescript'],
    },
    attendance: {
      images: projectImages('attendance', 4),
      stack: ['Java', 'Springboot', 'Vue', 'Typescript'],
    },
    oa: {
      images: projectImages('oa', 4),
      stack: ['PHP', 'Yii', 'Vue', 'Typescript'],
    },
    orders: {
      images: projectImages('orders', 4),
      stack: ['Java', 'Springboot', 'Vue', 'Element', 'Typescript'],
    },
    workstation: {
      images: projectImages('workstation', 3),
      stack: ['Java', 'Springboot', 'Vue', 'Element', 'Typescript'],
    },
    digitalHuman: {
      images: projectImages('digitalHuman', 2),
      stack: ['Node.js', 'TypeScript', 'Remotion', 'React'],
    },
    course: {
      images: projectImages('course', 3),
      stack: ['Laravel', 'React', 'PHP', 'TanStack', 'Typescript'],
      link: 'https://course.sphrag.com',
    },
    recruiting: {
      images: projectImages('recruiting', 4),
      stack: ['PHP', 'Yii', 'Vue', 'Typescript'],
    },
    idea: {
      images: projectImages('idea', 3),
      stack: ['Next.js', 'React', 'TypeScript', 'n8n'],
      link: 'https://idea.sphrag.com',
    },
    foreignTradeA: {
      images: projectImages('foreignTradeA', 2),
      stack: ['Next.js', 'React', 'TypeScript'],
    },
    formart: {
      images: projectImages('fromart', 2),
      stack: ['Wordpress', 'PHP'],
      link: 'https://fromart.com/',
    },
  }

  const workKeys: WorkKey[] = [
    'asset',
    'hr',
    'finance',
    'attendance',
    'oa',
    'orders',
    'workstation',
    'digitalHuman',
    'course',
    'recruiting',
    'idea',
    'foreignTradeA',
    'formart',
  ]

  const showcaseWorks: ShowcaseWork[] = workKeys.map(key => ({
    key,
    title: t(`projects.items.${key}.title`),
    description: t(`projects.items.${key}.description`),
    images: workAssets[key].images,
    stack: workAssets[key].stack,
    link: workAssets[key].link,
    imageCountLabel: t('projects.imageCount', { count: workAssets[key].images.length }),
  }))

  return (
    <div className='relative mx-auto flex w-full max-w-[1200px] flex-col gap-24 pb-16 lg:gap-32'>
      <div className='pointer-events-none absolute inset-x-0 top-[-8rem] -z-10 h-[40rem] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(196,107,44,0.10),transparent_60%)]' />

      <section className='flex flex-col items-center pt-8 text-center lg:pt-16'>
        <h1 className='mx-auto max-w-5xl break-keep font-rubik text-[42px] leading-[1.15] text-[#111] sm:text-6xl lg:text-7xl'>
          {t('hero.titlePrefix')}{' '}
          <span className='bg-gradient-to-r from-[#c46b2c] to-[#d4944e] bg-clip-text text-transparent'>{t('hero.titleHighlight')}</span>
          {heroTitleSuffix ? ` ${heroTitleSuffix}` : null}
        </h1>

        <p className='mx-auto mt-6 max-w-3xl text-[15px] leading-8 text-[#666] sm:text-base'>{t('hero.description')}</p>

        <div className='mt-10 flex flex-col gap-3 sm:flex-row'>
          <a
            href={primaryContactHref}
            target={isEnglish ? '_blank' : undefined}
            rel={isEnglish ? 'noreferrer' : undefined}
            className={cn(
              buttonVariants({ size: 'lg' }),
              'h-12 rounded-full border-0 bg-[#111] px-7 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(0,0,0,0.3)] transition-all hover:bg-[#222] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.35)]',
            )}
          >
            <MessageSquare className='mr-2 h-4 w-4' />
            {t('hero.primaryCta')}
          </a>
          <a
            href='#projects'
            className={cn(
              buttonVariants({ variant: 'outline', size: 'lg' }),
              'h-12 rounded-full border-[#ddd] bg-white px-7 text-sm font-semibold text-[#333] hover:border-[#ccc] hover:bg-[#fafafa]',
            )}
          >
            {t('hero.secondaryCta')}
            <ArrowRight className='ml-2 h-4 w-4' />
          </a>
        </div>

        <div className='mt-14 grid w-full gap-4 md:grid-cols-2 xl:grid-cols-4'>
          {highlights.map(item => (
            <InfoCard
              key={item.key}
              icon={item.icon}
              title={t(`hero.highlights.${item.key}.title`)}
              description={t(`hero.highlights.${item.key}.description`)}
            />
          ))}
        </div>
      </section>

      <section id='services'>
        <SectionHeader eyebrow={t('services.eyebrow')} title={t('services.title')} description={t('services.description')} />
        <div className='mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
          {services.map(item => (
            <FeatureCard
              key={item.key}
              icon={item.icon}
              title={t(`services.items.${item.key}.title`)}
              description={t(`services.items.${item.key}.description`)}
              bullets={[t(`services.items.${item.key}.bullet1`), t(`services.items.${item.key}.bullet2`)]}
            />
          ))}
        </div>

        <div className='mt-8 grid gap-5 rounded-[28px] border border-[#ebdfd2] bg-white/70 p-6 shadow-[0_16px_48px_-32px_rgba(0,0,0,0.16)] sm:p-8 lg:grid-cols-[0.92fr_1.08fr]'>
          <div className='space-y-4'>
            <p className='text-accent-accessible text-xs font-semibold uppercase tracking-[0.22em]'>{t('services.stackEyebrow')}</p>
            <h3 className='font-rubik text-2xl text-[#111]'>{t('services.stackTitle')}</h3>
            <p className='text-[15px] leading-7 text-[#666]'>{t('services.stackDescription')}</p>
          </div>
          <div className='grid gap-4 sm:grid-cols-2'>
            <StackPanel label={t('services.frontendLabel')} items={frontendStack} />
            <StackPanel label={t('services.backendLabel')} items={backendStack} />
          </div>
        </div>

        <div className='mt-6 flex flex-col gap-5 rounded-[28px] border border-[#111] bg-[#111] p-6 text-white shadow-[0_18px_56px_-34px_rgba(0,0,0,0.32)] sm:p-8 lg:flex-row lg:items-center lg:justify-between'>
          <div className='max-w-3xl space-y-3'>
            <p className='text-xs font-semibold uppercase tracking-[0.22em] text-[#d4944e]'>{t('services.directoryEyebrow')}</p>
            <h3 className='font-rubik text-2xl leading-snug text-white sm:text-[32px]'>{t('services.directoryTitle')}</h3>
            <p className='text-[15px] leading-7 text-white/70'>{t('services.directoryDescription')}</p>
          </div>
          <Link
            href='/services'
            className='inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#111] transition hover:bg-[#f3ece2]'
          >
            {t('services.directoryCta')}
            <ArrowRight className='ml-2 h-4 w-4' />
          </Link>
        </div>
      </section>

      <section>
        <SectionHeader eyebrow={t('advantages.eyebrow')} title={t('advantages.title')} description={t('advantages.description')} />
        <div className='mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
          {principles.map(item => (
            <FeatureCard
              key={item.key}
              icon={item.icon}
              title={t(`advantages.items.${item.key}.title`)}
              description={t(`advantages.items.${item.key}.description`)}
              bullets={[t(`advantages.items.${item.key}.bullet1`), t(`advantages.items.${item.key}.bullet2`)]}
            />
          ))}
        </div>
      </section>

      <section id='process'>
        <SectionHeader eyebrow={t('process.eyebrow')} title={t('process.title')} description={t('process.description')} />
        <div className='mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
          {processSteps.map((key, index) => (
            <ProcessCard
              key={key}
              step={`0${index + 1}`}
              title={t(`process.items.${key}.title`)}
              description={t(`process.items.${key}.description`)}
            />
          ))}
        </div>
      </section>

      <section id='articles'>
        <div className='grid gap-5 rounded-[30px] border border-[#eadfd2] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(250,245,238,0.95))] p-7 shadow-[0_16px_48px_-34px_rgba(0,0,0,0.16)] sm:p-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center'>
          <div className='space-y-4'>
            <p className='text-accent-accessible text-xs font-semibold uppercase tracking-[0.22em]'>{t('articles.eyebrow')}</p>
            <h2 className='font-rubik text-[30px] leading-[1.15] text-[#111] sm:text-[42px]'>{t('articles.title')}</h2>
            <p className='text-[15px] leading-8 text-[#645c53]'>{t('articles.description')}</p>
            <Link
              href='/blog'
              className='inline-flex items-center justify-center rounded-full bg-[#111] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#222]'
            >
              {t('articles.cta')}
              <ArrowRight className='ml-2 h-4 w-4' />
            </Link>
          </div>

          <div className='grid gap-3 sm:grid-cols-3 lg:grid-cols-1'>
            {['price', 'process', 'seo'].map(key => (
              <div key={key} className='rounded-[22px] border border-[#eadfd2] bg-white/80 px-4 py-4'>
                <p className='text-accent-accessible text-xs font-semibold uppercase tracking-[0.18em]'>{t(`articles.cards.${key}.label`)}</p>
                <p className='mt-3 text-sm leading-7 text-[#5f564d]'>{t(`articles.cards.${key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id='projects'>
        <SectionHeader eyebrow={t('projects.eyebrow')} title={t('projects.title')} description={t('projects.description')} />
        <div className='mt-8'>
          <ProjectsShowcase
            works={showcaseWorks}
            labels={{
              viewImages: t('projects.viewImages'),
              openLink: t('projects.openLink'),
              stackLabel: t('projects.stackLabel'),
              lightboxHint: t('projects.lightboxHint'),
              loadingImage: t('projects.loadingImage'),
            }}
          />
        </div>
      </section>

      <section id='notice' className='overflow-hidden rounded-[30px] bg-[#111] p-7 text-white sm:p-10'>
        <div className='grid gap-6'>
          <div className='max-w-3xl'>
            <p className='text-xs font-semibold uppercase tracking-[0.22em] text-[#d4944e]'>{t('notice.eyebrow')}</p>
            <h2 className='mt-4 max-w-2xl font-rubik text-[30px] leading-[1.15] sm:text-[42px]'>{t('notice.title')}</h2>
            {t('notice.description') ? <p className='mt-3 max-w-3xl text-[15px] leading-8 text-white/55'>{t('notice.description')}</p> : null}
          </div>

          <div className='grid gap-4 xl:grid-cols-[0.88fr_1.12fr] xl:items-start'>
            <div className='grid gap-4'>
              <div className='rounded-[26px] border border-white/[0.08] bg-white/[0.04] p-6'>
                <p className='text-xs font-semibold uppercase tracking-[0.2em] text-[#d4944e]'>{t('notice.reminderTitle')}</p>
                <div className='mt-4 space-y-3'>
                  {['direct', 'quality', 'timeline'].map(key => (
                    <div key={key} className='flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-black/10 px-4 py-3'>
                      <CheckCircle2 className='mt-0.5 h-4 w-4 shrink-0 text-[#d4944e]' />
                      <p className='text-sm leading-6 text-white/78'>{t(`notice.reminders.${key}`)}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className='rounded-[26px] border border-white/[0.08] bg-white/[0.04] p-6'>
                <p className='text-xs font-semibold uppercase tracking-[0.2em] text-[#d4944e]'>{t('notice.expectationsTitle')}</p>
                <div className='mt-4 grid gap-3 md:grid-cols-3 xl:grid-cols-1'>
                  {expectationKeys.map(key => (
                    <div key={key} className='rounded-2xl border border-white/[0.06] bg-black/10 p-4'>
                      <p className='font-rubik text-lg text-white/92'>{t(`notice.expectations.${key}.title`)}</p>
                      <p className='mt-2 text-sm leading-6 text-white/68'>{t(`notice.expectations.${key}.description`)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6'>
              <p className='text-xs font-semibold uppercase tracking-[0.2em] text-[#d4944e]'>{t('notice.noGoTitle')}</p>
              <div className='mt-4 space-y-3'>
                {noGoKeys.map(key => (
                  <div key={key} className='rounded-2xl border border-white/[0.06] bg-black/10 px-4 py-3'>
                    <p className='text-sm leading-6 text-white/80'>{t(`notice.noGo.${key}`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='contact' className='mx-auto w-full max-w-4xl'>
        <div className='flex flex-col items-center rounded-[30px] border border-[#eee] bg-[#faf7f3] p-8 text-center sm:p-12'>
          <div>
            <p className='text-accent-accessible text-xs font-semibold uppercase tracking-[0.22em]'>{t('contact.eyebrow')}</p>
            <h2 className='mx-auto mt-4 max-w-2xl font-rubik text-[28px] leading-snug text-[#111] sm:text-4xl'>{t('contact.title')}</h2>
            {t('contact.description') ? <p className='mx-auto mt-4 max-w-2xl text-[15px] leading-8 text-[#666]'>{t('contact.description')}</p> : null}
          </div>

          <div className={cn('mx-auto mt-10 grid w-full gap-4', isEnglish ? 'max-w-xl' : 'max-w-2xl sm:grid-cols-2')}>
            <ContactCards cards={contactCards} />
          </div>

          <div className='mx-auto mt-8 grid w-full max-w-2xl gap-3 text-left sm:grid-cols-2'>
            <div className='rounded-2xl border border-[#eadfd2] bg-white/80 p-5'>
              <div className='text-accent-accessible flex items-center gap-2'>
                <Clock3 className='h-4 w-4' />
                <p className='text-sm font-semibold text-[#6a4a2d]'>{t('contact.availabilityTitle')}</p>
              </div>
              <p className='mt-2 text-sm leading-6 text-[#666]'>{t('contact.availabilityDescription')}</p>
            </div>
            <div className='rounded-2xl border border-[#eadfd2] bg-white/80 p-5'>
              <div className='text-accent-accessible flex items-center gap-2'>
                <CreditCard className='h-4 w-4' />
                <p className='text-sm font-semibold text-[#6a4a2d]'>{t('contact.briefTitle')}</p>
              </div>
              <p className='mt-2 text-sm leading-6 text-[#666]'>{t('contact.briefDescription')}</p>
            </div>
          </div>

          <div className='mt-8 flex justify-center'>
            <a href='https://fwfw.app/item/zhchengstudio' target='_blank' rel='noopener'>
              <Image src='https://fwfw.app/badge-white.svg' width={250} height={54} alt='Featured on FWFW' />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
