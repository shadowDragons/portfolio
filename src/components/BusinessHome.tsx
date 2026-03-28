'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import FramerWrapper from '@/components/animation/FramerWrapper'
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Copy,
  CreditCard,
  Expand,
  ExternalLink,
  Globe,
  ImageIcon,
  Layers3,
  MessageSquare,
  MonitorSmartphone,
  Phone,
  Rocket,
  Scale,
  ShieldCheck,
  Sparkles,
  Wrench,
  X,
  type LucideIcon,
} from 'lucide-react'

type WorkKey =
  | 'asset'
  | 'hr'
  | 'finance'
  | 'attendance'
  | 'oa'
  | 'orders'
  | 'workstation'
  | 'digitalHuman'
  | 'course'
  | 'recruiting'
  | 'idea'
  | 'danduoduo'
  | 'formart'

type ShowcaseWork = {
  key: WorkKey
  title: string
  description: string
  images: string[]
  stack: string[]
  link?: string
}

type LightboxState = {
  workIndex: number
  imageIndex: number
} | null

function SectionHeader({ eyebrow, title, description, center = false }: { eyebrow: string; title: string; description: string; center?: boolean }) {
  return (
    <FramerWrapper y={20} className={cn('max-w-3xl', center && 'mx-auto text-center')}>
      <div className='space-y-4'>
        <p className='text-xs font-semibold uppercase tracking-[0.22em] text-[#b86128]'>{eyebrow}</p>
        <h2 className='font-rubik text-[28px] leading-snug text-[#111] sm:text-4xl'>{title}</h2>
      </div>
    </FramerWrapper>
  )
}

function InfoCard({ icon: Icon, title, description, delay }: { icon: LucideIcon; title: string; description: string; delay: number }) {
  return (
    <FramerWrapper y={24} delay={delay} className='h-full'>
      <div className='flex h-full flex-col gap-4 rounded-2xl border border-[#ece3d8] bg-white/70 p-5 text-left shadow-[0_12px_32px_-18px_rgba(0,0,0,0.16)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#dfd1c0] hover:bg-white'>
        <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-[#f5ede3] text-[#b86128]'>
          <Icon className='h-5 w-5' />
        </div>
        <div className='space-y-2'>
          <h3 className='font-rubik text-lg text-[#111]'>{title}</h3>
          <p className='text-sm leading-6 text-[#6d6a65]'>{description}</p>
        </div>
      </div>
    </FramerWrapper>
  )
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  bullets,
  delay,
}: {
  icon: LucideIcon
  title: string
  description: string
  bullets: string[]
  delay: number
}) {
  return (
    <FramerWrapper y={28} delay={delay} className='h-full'>
      <div className='group flex h-full flex-col gap-5 rounded-2xl border border-transparent bg-white/60 p-6 transition-all duration-300 hover:border-[#e8ddd0] hover:bg-white hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)]'>
        <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-[#f5ede3] text-[#b86128] transition-colors group-hover:bg-[#f0e4d6]'>
          <Icon className='h-5 w-5' />
        </div>
        <div className='space-y-2'>
          <h3 className='font-rubik text-xl text-[#111]'>{title}</h3>
          <p className='text-sm leading-6 text-[#777]'>{description}</p>
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
    </FramerWrapper>
  )
}

function ProcessCard({ step, title, description, delay }: { step: string; title: string; description: string; delay: number }) {
  return (
    <FramerWrapper y={24} delay={delay} className='h-full'>
      <div className='flex h-full flex-col gap-4 rounded-2xl border border-[#eee] bg-white p-6 transition-all duration-300 hover:border-[#ddd] hover:shadow-[0_8px_28px_-14px_rgba(0,0,0,0.12)]'>
        <span className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#111] font-rubik text-sm font-semibold text-white'>{step}</span>
        <div className='space-y-2'>
          <h3 className='font-rubik text-lg text-[#111]'>{title}</h3>
          <p className='text-sm leading-6 text-[#777]'>{description}</p>
        </div>
      </div>
    </FramerWrapper>
  )
}

function StackPanel({ label, items }: { label: string; items: string[] }) {
  return (
    <div className='rounded-2xl border border-[#ece4da] bg-[#fcfaf7] p-5'>
      <p className='text-xs font-semibold uppercase tracking-[0.18em] text-[#aa6d33]'>{label}</p>
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

function WorkCard({
  work,
  orderLabel,
  imageCountLabel,
  stackLabel,
  viewImagesLabel,
  openLinkLabel,
  noLinkLabel,
  onOpenImage,
}: {
  work: ShowcaseWork
  orderLabel: string
  imageCountLabel: string
  stackLabel: string
  viewImagesLabel: string
  openLinkLabel: string
  noLinkLabel: string
  onOpenImage: () => void
}) {
  const coverImage = work.images[0]

  return (
    <article className='group flex h-full w-[286px] shrink-0 flex-col overflow-hidden rounded-[28px] border border-[#eadfd1] bg-white shadow-[0_16px_48px_-28px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-[#dbc9b6] sm:w-[320px] lg:w-[348px]'>
      <button
        type='button'
        onClick={onOpenImage}
        className='relative h-[220px] w-full overflow-hidden bg-[linear-gradient(135deg,#f0e5d9_0%,#e7d7c4_52%,#d9bea2_100%)] text-left'
      >
        {coverImage ? (
          <>
            <Image
              src={coverImage}
              alt={work.title}
              fill
              className='object-cover transition duration-700 group-hover:scale-[1.04]'
              quality={60}
              sizes='(max-width: 640px) 286px, (max-width: 1024px) 320px, 348px'
            />
            <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.12)_0%,rgba(10,10,10,0.12)_28%,rgba(10,10,10,0.68)_100%)]' />
          </>
        ) : (
          <>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.6),transparent_45%),linear-gradient(135deg,rgba(255,255,255,0.28),rgba(0,0,0,0.06))]' />
            <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.06),rgba(15,23,42,0.42))]' />
          </>
        )}

        <div className='absolute left-4 right-4 top-4 flex items-center justify-between gap-3'>
          <span className='inline-flex items-center gap-1.5 rounded-full bg-white/16 px-3 py-1 text-xs font-medium text-white backdrop-blur-md'>
            <ImageIcon className='h-3.5 w-3.5' />
            {imageCountLabel}
          </span>
          {work.link ? (
            <span className='inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/16 text-white backdrop-blur-md'>
              <ExternalLink className='h-4 w-4' />
            </span>
          ) : null}
        </div>

        <div className='absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3'>
          <div className='space-y-1'>
            <p className='text-xs font-semibold uppercase tracking-[0.18em] text-white/72'>{orderLabel}</p>
            <p className='font-rubik text-[21px] leading-tight text-white'>{work.title}</p>
          </div>
          <span className='inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/16 text-white backdrop-blur-md transition-transform duration-300 group-hover:scale-105'>
            <Expand className='h-4.5 w-4.5' />
          </span>
        </div>
      </button>

      <div className='flex flex-1 flex-col gap-4 p-5'>
        <p className='text-sm leading-6 text-[#6d6a65]'>{work.description}</p>

        <div className='space-y-2'>
          <div className='flex flex-wrap gap-2'>
            {work.stack.map(item => (
              <span key={`${work.key}-${item}`} className='rounded-full border border-[#e5d8ca] bg-[#faf6f1] px-3 py-1 text-xs font-medium text-[#6c5946]'>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className='mt-auto flex flex-wrap gap-2 pt-1'>
          <button
            type='button'
            onClick={onOpenImage}
            className='inline-flex items-center gap-2 rounded-full border border-[#dfd3c7] bg-[#faf6f1] px-4 py-2 text-sm font-medium text-[#5e4d3b] transition hover:border-[#cfae8a] hover:text-[#b86128]'
          >
            <Expand className='h-3.5 w-3.5' />
            {viewImagesLabel}
          </button>

          {/* {work.link ? (
            <a
              href={work.link}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-2 rounded-full border border-[#111] bg-[#111] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#222]'
            >
              <ExternalLink className='h-3.5 w-3.5' />
              {openLinkLabel}
            </a>
          ) : (
            <span className='inline-flex items-center rounded-full border border-dashed border-[#dfd3c7] px-4 py-2 text-sm text-[#98897a]'>{noLinkLabel}</span>
          )} */}
        </div>
      </div>
    </article>
  )
}

function WorkLightbox({
  work,
  imageIndex,
  hintLabel,
  stackLabel,
  loadingLabel,
  openLinkLabel,
  onClose,
  onPrev,
  onNext,
  onSelectImage,
}: {
  work: ShowcaseWork
  imageIndex: number
  hintLabel: string
  stackLabel: string
  loadingLabel: string
  openLinkLabel: string
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  onSelectImage: (nextIndex: number) => void
}) {
  const [isImageLoading, setIsImageLoading] = useState(true)

  useEffect(() => {
    setIsImageLoading(true)
  }, [imageIndex, work.key])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed inset-0 z-[100] bg-black/92 p-4 backdrop-blur-sm sm:p-8'
      onClick={onClose}
    >
      <div className='relative flex h-full w-full flex-col items-center justify-center gap-4' onClick={event => event.stopPropagation()}>
        <div className='flex w-full max-w-6xl items-center justify-between gap-3'>
          <div className='min-w-0'>
            <p className='truncate font-rubik text-2xl text-white'>{work.title}</p>
            <p className='mt-1 text-sm text-white/56'>
              {imageIndex + 1} / {work.images.length}
            </p>
            <div className='mt-3'>
              <p className='text-xs font-semibold uppercase tracking-[0.18em] text-white/52'>{stackLabel}</p>
              <div className='mt-2 flex flex-wrap gap-2'>
                {work.stack.map(item => (
                  <span
                    key={`${work.key}-lightbox-${item}`}
                    className='rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs font-medium text-white/82'
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            {work.link ? (
              <a
                href={work.link}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/18'
              >
                <ExternalLink className='h-4 w-4' />
                {openLinkLabel}
              </a>
            ) : null}
            <button
              type='button'
              onClick={onClose}
              className='inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/18'
            >
              <X className='h-5 w-5' />
            </button>
          </div>
        </div>

        <div className='relative flex min-h-0 w-full max-w-6xl flex-1 items-center justify-center'>
          {work.images.length > 1 ? (
            <>
              <button
                type='button'
                onClick={onPrev}
                className='absolute left-0 top-1/2 z-20 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/18 sm:left-4 sm:h-14 sm:w-14'
              >
                <ChevronLeft className='h-6 w-6' />
              </button>
              <button
                type='button'
                onClick={onNext}
                className='absolute right-0 top-1/2 z-20 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/18 sm:right-4 sm:h-14 sm:w-14'
              >
                <ChevronRight className='h-6 w-6' />
              </button>
            </>
          ) : null}

          <AnimatePresence mode='wait'>
            <motion.div
              key={work.images[imageIndex]}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.24 }}
              className='relative h-full max-h-[72vh] w-full overflow-hidden rounded-[28px] border border-white/10 bg-black/25'
            >
              <AnimatePresence>
                {isImageLoading ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-[radial-gradient(circle_at_top,rgba(212,148,78,0.16),rgba(0,0,0,0.72)_42%,rgba(0,0,0,0.88))]'
                  >
                    <div className='h-12 w-12 rounded-full border-2 border-white/15 border-t-[#d4944e] animate-spin' />
                    <p className='text-sm font-medium tracking-[0.06em] text-white/72'>{loadingLabel}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <Image
                src={work.images[imageIndex]}
                alt={`${work.title} ${imageIndex + 1}`}
                fill
                className='object-contain'
                quality={76}
                sizes='100vw'
                priority
                onLoad={() => setIsImageLoading(false)}
                onError={() => setIsImageLoading(false)}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className='text-center text-sm text-white/62'>{hintLabel}</div>

        {work.images.length > 1 ? (
          <div className='flex max-w-6xl flex-wrap justify-center gap-2'>
            {work.images.map((image, index) => (
              <button
                key={`${work.key}-${image}-${index}`}
                type='button'
                onClick={() => onSelectImage(index)}
                className={cn(
                  'relative h-16 w-24 overflow-hidden rounded-2xl border transition',
                  imageIndex === index ? 'border-[#d4944e] ring-2 ring-[#d4944e]/40' : 'border-white/10 opacity-70 hover:opacity-100',
                )}
              >
                <Image src={image} alt={`${work.title} thumbnail ${index + 1}`} fill className='object-cover' quality={40} sizes='96px' />
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </motion.div>
  )
}

function CopyableContact({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(value).catch(() => {})
    } else {
      const textArea = document.createElement('textarea')
      textArea.value = value
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      try {
        document.execCommand('copy')
      } catch {
        // no-op
      }
      document.body.removeChild(textArea)
    }

    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type='button'
      onClick={handleCopy}
      className='group flex w-full items-center justify-between gap-4 rounded-2xl border border-[#eee] bg-white p-4 text-left transition-all duration-300 hover:border-[#e8ddd0] hover:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.06)] sm:p-5'
    >
      <div className='flex items-center gap-4'>
        <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f5ede3] text-[#b86128] transition-colors group-hover:bg-[#f0e4d6]'>
          <Icon className='h-5 w-5' />
        </div>
        <div>
          <p className='text-xs text-[#999]'>{label}</p>
          <p className='font-rubik text-[17px] text-[#111] transition-colors group-hover:text-[#b86128]'>{value}</p>
        </div>
      </div>
      <div className='text-[#ccc] transition-colors group-hover:text-[#b86128]'>
        {copied ? <CheckCircle2 className='h-5 w-5 text-green-600' /> : <Copy className='h-5 w-5' />}
      </div>
    </button>
  )
}

export default function BusinessHome() {
  const t = useTranslations('Landing')
  const [lightbox, setLightbox] = useState<LightboxState>(null)

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
    danduoduo: {
      images: projectImages('danduoduo', 2),
      stack: ['Next.js', 'React', 'TypeScript'],
      link: 'https://51danduoduo.cn',
    },
    formart: {
      images: projectImages('formart', 1),
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
    'danduoduo',
    'formart',
  ]

  const showcaseWorks: ShowcaseWork[] = workKeys.map(key => ({
    key,
    title: t(`projects.items.${key}.title`),
    description: t(`projects.items.${key}.description`),
    images: workAssets[key].images,
    stack: workAssets[key].stack,
    link: workAssets[key].link,
  }))

  const showcaseRowMidpoint = Math.ceil(showcaseWorks.length / 2)
  const showcaseRows = [
    showcaseWorks.slice(0, showcaseRowMidpoint).map((work, index) => ({ work, workIndex: index })),
    showcaseWorks.slice(showcaseRowMidpoint).map((work, index) => ({ work, workIndex: showcaseRowMidpoint + index })),
  ].filter(row => row.length > 0)

  const activeWork = lightbox ? showcaseWorks[lightbox.workIndex] : null
  const activeImageCount = activeWork?.images.length ?? 0

  const openLightbox = (workIndex: number, imageIndex = 0) => {
    setLightbox({ workIndex, imageIndex })
  }

  const closeLightbox = () => setLightbox(null)

  const goPrevImage = () => {
    if (!activeImageCount) return
    setLightbox(current =>
      current
        ? {
            ...current,
            imageIndex: (current.imageIndex - 1 + activeImageCount) % activeImageCount,
          }
        : current,
    )
  }

  const goNextImage = () => {
    if (!activeImageCount) return
    setLightbox(current =>
      current
        ? {
            ...current,
            imageIndex: (current.imageIndex + 1) % activeImageCount,
          }
        : current,
    )
  }

  const selectImage = (imageIndex: number) => {
    setLightbox(current => (current ? { ...current, imageIndex } : current))
  }

  useEffect(() => {
    if (!lightbox) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightbox(null)
      }

      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        setLightbox(current =>
          current
            ? {
                ...current,
                imageIndex: (current.imageIndex - 1 + activeImageCount) % activeImageCount,
              }
            : current,
        )
      }

      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        setLightbox(current =>
          current
            ? {
                ...current,
                imageIndex: (current.imageIndex + 1) % activeImageCount,
              }
            : current,
        )
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeImageCount, lightbox])

  return (
    <>
      <div className='relative mx-auto flex w-full max-w-[1200px] flex-col gap-24 pb-16 lg:gap-32'>
        <div className='pointer-events-none absolute inset-x-0 top-[-8rem] -z-10 h-[40rem] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(196,107,44,0.10),transparent_60%)]' />

        <section className='flex flex-col items-center pt-8 text-center lg:pt-16'>
          <FramerWrapper y={-20}>
            <span className='inline-flex rounded-full border border-[#e4d6c5] bg-[#faf5ee] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#a0652a]'>
              {t('hero.badge')}
            </span>
          </FramerWrapper>

          <FramerWrapper y={24} delay={0.08}>
            <h1 className='mx-auto mt-8 max-w-5xl break-keep font-rubik text-[42px] leading-[1.15] text-[#111] sm:text-6xl lg:text-7xl'>
              {t('hero.titlePrefix')}{' '}
              <span className='bg-gradient-to-r from-[#c46b2c] to-[#d4944e] bg-clip-text text-transparent'>{t('hero.titleHighlight')}</span>
              {heroTitleSuffix ? ` ${heroTitleSuffix}` : null}
            </h1>
          </FramerWrapper>

          <FramerWrapper y={20} delay={0.16}>
            <p className='mx-auto mt-6 max-w-3xl text-[15px] leading-8 text-[#666] sm:text-base'>{t('hero.description')}</p>
          </FramerWrapper>

          <FramerWrapper y={16} delay={0.24}>
            <div className='mt-10 flex flex-col gap-3 sm:flex-row'>
              <a
                href='#contact'
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
          </FramerWrapper>

          <div className='mt-14 grid w-full gap-4 md:grid-cols-2 xl:grid-cols-4'>
            {highlights.map((item, index) => (
              <InfoCard
                key={item.key}
                icon={item.icon}
                title={t(`hero.highlights.${item.key}.title`)}
                description={t(`hero.highlights.${item.key}.description`)}
                delay={0.3 + index * 0.05}
              />
            ))}
          </div>
        </section>

        <section id='services'>
          <SectionHeader eyebrow={t('services.eyebrow')} title={t('services.title')} description={t('services.description')} />
          <div className='mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
            {services.map((item, index) => (
              <FeatureCard
                key={item.key}
                icon={item.icon}
                title={t(`services.items.${item.key}.title`)}
                description={t(`services.items.${item.key}.description`)}
                bullets={[t(`services.items.${item.key}.bullet1`), t(`services.items.${item.key}.bullet2`)]}
                delay={0.08 + index * 0.06}
              />
            ))}
          </div>

          <FramerWrapper y={24} delay={0.18} className='mt-8'>
            <div className='grid gap-5 rounded-[28px] border border-[#ebdfd2] bg-white/70 p-6 shadow-[0_16px_48px_-32px_rgba(0,0,0,0.16)] sm:p-8 lg:grid-cols-[0.92fr_1.08fr]'>
              <div className='space-y-4'>
                <p className='text-xs font-semibold uppercase tracking-[0.22em] text-[#b86128]'>{t('services.stackEyebrow')}</p>
                <h3 className='font-rubik text-2xl text-[#111]'>{t('services.stackTitle')}</h3>
                <p className='text-[15px] leading-7 text-[#666]'>{t('services.stackDescription')}</p>
              </div>
              <div className='grid gap-4 sm:grid-cols-2'>
                <StackPanel label={t('services.frontendLabel')} items={frontendStack} />
                <StackPanel label={t('services.backendLabel')} items={backendStack} />
              </div>
            </div>
          </FramerWrapper>
        </section>

        <section>
          <SectionHeader eyebrow={t('advantages.eyebrow')} title={t('advantages.title')} description={t('advantages.description')} />
          <div className='mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
            {principles.map((item, index) => (
              <FeatureCard
                key={item.key}
                icon={item.icon}
                title={t(`advantages.items.${item.key}.title`)}
                description={t(`advantages.items.${item.key}.description`)}
                bullets={[t(`advantages.items.${item.key}.bullet1`), t(`advantages.items.${item.key}.bullet2`)]}
                delay={0.08 + index * 0.06}
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
                delay={0.08 + index * 0.05}
              />
            ))}
          </div>
        </section>

        <section id='projects'>
          <SectionHeader eyebrow={t('projects.eyebrow')} title={t('projects.title')} description={t('projects.description')} />

          <FramerWrapper y={28} delay={0.16} className='mt-8'>
            <div className='marquee-group relative overflow-hidden rounded-[30px] border border-[#e9dfd4] bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(250,245,238,0.9))] py-6 shadow-[0_18px_56px_-38px_rgba(0,0,0,0.22)]'>
              <div className='pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-[#f7f3ee] via-[#f7f3ee]/86 to-transparent sm:w-28' />
              <div className='pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-[#f7f3ee] via-[#f7f3ee]/86 to-transparent sm:w-28' />

              <div className='flex flex-col gap-5 sm:gap-6'>
                {showcaseRows.map((row, rowIndex) => (
                  <div key={`showcase-row-${rowIndex}`} className='overflow-hidden'>
                    <div
                      className={cn('showcase-marquee-track flex w-max', rowIndex % 2 === 1 && 'showcase-marquee-track-reverse')}
                      style={{ animationDuration: `${Math.max(28, row.length * (rowIndex % 2 === 0 ? 5.2 : 5.8))}s` }}
                    >
                      {[0, 1].map(copyIndex => (
                        <div key={copyIndex} className='flex shrink-0 gap-5 pr-5 pl-5 sm:gap-6 sm:pr-6 sm:pl-6'>
                          {row.map(({ work, workIndex }) => (
                            <WorkCard
                              key={`${copyIndex}-${work.key}`}
                              work={work}
                              orderLabel={String(workIndex + 1).padStart(2, '0')}
                              imageCountLabel={t('projects.imageCount', { count: work.images.length })}
                              stackLabel={t('projects.stackLabel')}
                              viewImagesLabel={t('projects.viewImages')}
                              openLinkLabel={t('projects.openLink')}
                              noLinkLabel={t('projects.noLink')}
                              onOpenImage={() => openLightbox(workIndex, 0)}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FramerWrapper>
        </section>

        <section id='notice' className='overflow-hidden rounded-[30px] bg-[#111] p-7 text-white sm:p-10'>
          <div className='grid gap-6'>
            <FramerWrapper y={18} className='max-w-3xl'>
              <p className='text-xs font-semibold uppercase tracking-[0.22em] text-[#d4944e]'>{t('notice.eyebrow')}</p>
              <h2 className='mt-4 max-w-2xl font-rubik text-[30px] leading-[1.15] sm:text-[42px]'>{t('notice.title')}</h2>
              {t('notice.description') ? <p className='mt-3 max-w-3xl text-[15px] leading-8 text-white/55'>{t('notice.description')}</p> : null}
            </FramerWrapper>

            <div className='grid gap-4 xl:grid-cols-[0.88fr_1.12fr] xl:items-start'>
              <div className='grid gap-4'>
                <FramerWrapper y={24} delay={0.08}>
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
                </FramerWrapper>

                <FramerWrapper y={24} delay={0.14}>
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
                </FramerWrapper>
              </div>

              <FramerWrapper y={24} delay={0.1}>
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
              </FramerWrapper>
            </div>
          </div>
        </section>

        <section id='contact' className='mx-auto w-full max-w-4xl'>
          <FramerWrapper y={20}>
            <div className='flex flex-col items-center rounded-[30px] border border-[#eee] bg-[#faf7f3] p-8 text-center sm:p-12'>
              <div>
                <p className='text-xs font-semibold uppercase tracking-[0.22em] text-[#b86128]'>{t('contact.eyebrow')}</p>
                <h2 className='mx-auto mt-4 max-w-2xl font-rubik text-[28px] leading-snug text-[#111] sm:text-4xl'>{t('contact.title')}</h2>
                {t('contact.description') ? (
                  <p className='mx-auto mt-4 max-w-2xl text-[15px] leading-8 text-[#666]'>{t('contact.description')}</p>
                ) : null}
              </div>

              <div className='mx-auto mt-10 grid w-full max-w-xl gap-4 sm:grid-cols-2'>
                <CopyableContact icon={MessageSquare} label={t('contact.wechatLabel')} value='jandan1990' />
                <CopyableContact icon={Phone} label={t('contact.phoneLabel')} value='13430279389' />
              </div>

              <div className='mx-auto mt-8 grid w-full max-w-2xl gap-3 text-left sm:grid-cols-2'>
                <div className='rounded-2xl border border-[#eadfd2] bg-white/80 p-5'>
                  <div className='flex items-center gap-2 text-[#b86128]'>
                    <Clock3 className='h-4 w-4' />
                    <p className='text-sm font-semibold text-[#6a4a2d]'>{t('contact.availabilityTitle')}</p>
                  </div>
                  <p className='mt-2 text-sm leading-6 text-[#666]'>{t('contact.availabilityDescription')}</p>
                </div>
                <div className='rounded-2xl border border-[#eadfd2] bg-white/80 p-5'>
                  <div className='flex items-center gap-2 text-[#b86128]'>
                    <CreditCard className='h-4 w-4' />
                    <p className='text-sm font-semibold text-[#6a4a2d]'>{t('contact.briefTitle')}</p>
                  </div>
                  <p className='mt-2 text-sm leading-6 text-[#666]'>{t('contact.briefDescription')}</p>
                </div>
              </div>
            </div>
          </FramerWrapper>
        </section>
      </div>

      <AnimatePresence>
        {activeWork && lightbox ? (
          <WorkLightbox
            work={activeWork}
            imageIndex={lightbox.imageIndex}
            hintLabel={t('projects.lightboxHint')}
            stackLabel={t('projects.stackLabel')}
            loadingLabel={t('projects.loadingImage')}
            openLinkLabel={t('projects.openLink')}
            onClose={closeLightbox}
            onPrev={goPrevImage}
            onNext={goNextImage}
            onSelectImage={selectImage}
          />
        ) : null}
      </AnimatePresence>
    </>
  )
}
