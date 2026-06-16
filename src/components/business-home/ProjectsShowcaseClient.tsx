'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Expand, ExternalLink, ImageIcon, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ShowcaseWork } from '@/components/business-home/types'

type LightboxState = {
  workIndex: number
  imageIndex: number
} | null

type ProjectsShowcaseProps = {
  works: ShowcaseWork[]
  layout: 'grid' | 'marquee'
  labels: {
    viewImages: string
    openLink: string
    stackLabel: string
    lightboxHint: string
    loadingImage: string
    highlightsLabel: string
  }
}

function WorkCard({
  work,
  orderLabel,
  onOpenImage,
}: {
  work: ShowcaseWork
  orderLabel: string
  onOpenImage: () => void
}) {
  const coverImage = work.images[0]

  return (
    <article className='group flex h-full w-full flex-col overflow-hidden rounded-[30px] border border-black/8 bg-white/88 shadow-[0_24px_60px_-38px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 dark:border-white/8 dark:bg-white/[0.04] dark:shadow-[0_26px_60px_-40px_rgba(0,0,0,0.58)]'>
      <button type='button' onClick={onOpenImage} className='relative h-[230px] w-full overflow-hidden bg-[linear-gradient(135deg,#e6d4c2_0%,#cda176_100%)] text-left'>
        {coverImage ? (
          <>
            <Image src={coverImage} alt={work.imageAlt} fill className='object-cover transition duration-700 group-hover:scale-[1.04]' quality={70} sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw' />
            <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.05)_0%,rgba(10,10,10,0.18)_34%,rgba(10,10,10,0.72)_100%)]' />
          </>
        ) : null}

        <div className='absolute left-4 right-4 top-4 flex items-center justify-between gap-3'>
          <span className='inline-flex items-center gap-1.5 rounded-full bg-black/24 px-3 py-1 text-xs font-medium text-white backdrop-blur-md'>
            <ImageIcon className='h-3.5 w-3.5' />
            {work.imageCountLabel}
          </span>
          <span className='rounded-full border border-white/20 bg-white/14 px-3 py-1 text-[11px] font-medium tracking-[0.16em] text-white backdrop-blur-md'>{work.category}</span>
        </div>

        <div className='absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3'>
          <div className='space-y-1'>
            <p className='text-xs font-semibold uppercase tracking-[0.18em] text-white/72'>{orderLabel}</p>
            <p className='font-rubik text-[22px] leading-tight text-white'>{work.title}</p>
          </div>
          <span className='inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/16 text-white backdrop-blur-md transition-transform duration-300 group-hover:scale-105'>
            <Expand className='h-4.5 w-4.5' />
          </span>
        </div>
      </button>

      <div className='flex flex-1 flex-col gap-4 p-5'>
        <p className='text-sm leading-6 text-[#5a5047] dark:text-white/64'>{work.description}</p>
        <div className='flex flex-wrap gap-2'>
          {work.stack.map(item => (
            <span key={`${work.key}-${item}`} className='rounded-full border border-black/8 bg-[#f7efe7] px-3 py-1 text-xs font-medium text-[#5b4534] dark:border-white/8 dark:bg-white/6 dark:text-white/76'>
              {item}
            </span>
          ))}
        </div>
        <div className='mt-auto flex gap-2 pt-2'>
          <button
            type='button'
            onClick={onOpenImage}
            className='inline-flex items-center gap-2 rounded-full border border-black/8 px-4 py-2 text-sm font-medium text-[#4b3b2e] transition hover:border-[#d49b6b] dark:border-white/8 dark:text-white/78 dark:hover:border-[#f0a15a]'
          >
            <Expand className='h-3.5 w-3.5' />
            查看详情
          </button>
          {work.link ? (
            <a
              href={work.link}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-2 rounded-full border border-black/8 px-4 py-2 text-sm font-medium text-[#4b3b2e] transition hover:border-[#d49b6b] dark:border-white/8 dark:text-white/78 dark:hover:border-[#f0a15a]'
            >
              <ExternalLink className='h-3.5 w-3.5' />
              打开链接
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}

function WorkLightbox({
  work,
  imageIndex,
  labels,
  onClose,
  onPrev,
  onNext,
  onSelectImage,
}: {
  work: ShowcaseWork
  imageIndex: number
  labels: ProjectsShowcaseProps['labels']
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
    <div className='fixed inset-0 z-[100] bg-black/92 p-4 backdrop-blur-sm sm:p-8' onClick={onClose}>
      <div role='dialog' aria-modal='true' aria-label={work.title} className='relative flex h-full w-full flex-col items-center justify-center gap-4' onClick={event => event.stopPropagation()}>
        <div className='flex w-full max-w-6xl items-start justify-between gap-4'>
          <div className='min-w-0'>
            <div className='mb-2 inline-flex rounded-full border border-white/14 bg-white/8 px-3 py-1 text-[11px] font-medium tracking-[0.16em] text-white/74'>{work.category}</div>
            <p className='truncate font-rubik text-2xl text-white'>{work.title}</p>
            <p className='mt-3 max-w-3xl text-sm leading-7 text-white/68'>{work.details}</p>
            <div className='mt-4'>
              <p className='text-xs font-semibold uppercase tracking-[0.18em] text-white/48'>{labels.highlightsLabel}</p>
              <div className='mt-2 flex flex-wrap gap-2'>
                {work.highlights.map(item => (
                  <span key={`${work.key}-${item}`} className='rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs font-medium text-white/82'>
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className='mt-4'>
              <p className='text-xs font-semibold uppercase tracking-[0.18em] text-white/48'>{labels.stackLabel}</p>
              <div className='mt-2 flex flex-wrap gap-2'>
                {work.stack.map(item => (
                  <span key={`${work.key}-lightbox-${item}`} className='rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs font-medium text-white/82'>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            {work.link ? (
              <a href={work.link} target='_blank' rel='noreferrer' className='inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/18'>
                <ExternalLink className='h-4 w-4' />
                {labels.openLink}
              </a>
            ) : null}
            <button type='button' onClick={onClose} className='inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/18' aria-label='关闭图片预览'>
              <X className='h-5 w-5' />
            </button>
          </div>
        </div>

        <div className='relative flex min-h-0 w-full max-w-6xl flex-1 items-center justify-center'>
          {work.images.length > 1 ? (
            <>
              <button type='button' onClick={onPrev} className='absolute left-0 top-1/2 z-20 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/18 sm:left-4 sm:h-14 sm:w-14' aria-label='上一张'>
                <ChevronLeft className='h-6 w-6' />
              </button>
              <button type='button' onClick={onNext} className='absolute right-0 top-1/2 z-20 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/18 sm:right-4 sm:h-14 sm:w-14' aria-label='下一张'>
                <ChevronRight className='h-6 w-6' />
              </button>
            </>
          ) : null}

          <div className='relative h-full max-h-[72vh] w-full overflow-hidden rounded-[28px] border border-white/10 bg-black/25'>
            {isImageLoading ? (
              <div className='absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-[radial-gradient(circle_at_top,rgba(212,148,78,0.16),rgba(0,0,0,0.72)_42%,rgba(0,0,0,0.88))]'>
                <div className='h-12 w-12 animate-spin rounded-full border-2 border-white/15 border-t-[#d4944e]' />
                <p className='text-sm font-medium tracking-[0.06em] text-white/72'>{labels.loadingImage}</p>
              </div>
            ) : null}

            <Image src={work.images[imageIndex]} alt={`${work.imageAlt} ${imageIndex + 1}`} fill className='object-contain' quality={76} sizes='100vw' onLoad={() => setIsImageLoading(false)} onError={() => setIsImageLoading(false)} />
          </div>
        </div>

        <div className='text-center text-sm text-white/62'>{labels.lightboxHint}</div>

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
                aria-label={`打开第 ${index + 1} 张图片`}
              >
                <Image src={image} alt={`${work.imageAlt} 缩略图 ${index + 1}`} fill className='object-cover' quality={40} sizes='96px' />
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default function ProjectsShowcase({ works, labels, layout }: ProjectsShowcaseProps) {
  const [lightbox, setLightbox] = useState<LightboxState>(null)

  const showcaseRowMidpoint = Math.ceil(works.length / 2)
  const showcaseRows = [
    works.slice(0, showcaseRowMidpoint).map((work, index) => ({ work, workIndex: index })),
    works.slice(showcaseRowMidpoint).map((work, index) => ({ work, workIndex: showcaseRowMidpoint + index })),
  ].filter(row => row.length > 0)

  const activeWork = lightbox ? works[lightbox.workIndex] : null
  const activeImageCount = activeWork?.images.length ?? 0

  const openLightbox = (workIndex: number, imageIndex = 0) => setLightbox({ workIndex, imageIndex })
  const closeLightbox = () => setLightbox(null)
  const goPrevImage = () =>
    setLightbox(current => (current ? { ...current, imageIndex: (current.imageIndex - 1 + activeImageCount) % activeImageCount } : current))
  const goNextImage = () =>
    setLightbox(current => (current ? { ...current, imageIndex: (current.imageIndex + 1) % activeImageCount } : current))
  const selectImage = (imageIndex: number) => setLightbox(current => (current ? { ...current, imageIndex } : current))

  useEffect(() => {
    if (!lightbox) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightbox(null)
      }

      if (activeImageCount < 2) {
        return
      }

      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        setLightbox(current => (current ? { ...current, imageIndex: (current.imageIndex - 1 + activeImageCount) % activeImageCount } : current))
      }

      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        setLightbox(current => (current ? { ...current, imageIndex: (current.imageIndex + 1) % activeImageCount } : current))
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
      {layout === 'grid' ? (
        <div className='grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
          {works.map((work, index) => (
            <WorkCard key={work.key} work={work} orderLabel={String(index + 1).padStart(2, '0')} onOpenImage={() => openLightbox(index, 0)} />
          ))}
        </div>
      ) : (
        <div className='marquee-group relative overflow-hidden rounded-[32px] border border-black/8 bg-white/50 py-6 shadow-[0_18px_56px_-38px_rgba(0,0,0,0.22)] dark:border-white/8 dark:bg-white/[0.03]'>
          <div className='pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-[#f7f3ee] via-[#f7f3ee]/86 to-transparent dark:from-[#111010] dark:via-[#111010]/86 sm:w-28' />
          <div className='pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-[#f7f3ee] via-[#f7f3ee]/86 to-transparent dark:from-[#111010] dark:via-[#111010]/86 sm:w-28' />
          <div className='flex flex-col gap-5 sm:gap-6'>
            {showcaseRows.map((row, rowIndex) => (
              <div key={`showcase-row-${rowIndex}`} className='overflow-hidden'>
                <div className={cn('showcase-marquee-track flex w-max', rowIndex % 2 === 1 && 'showcase-marquee-track-reverse')} style={{ animationDuration: `${Math.max(28, row.length * (rowIndex % 2 === 0 ? 5.2 : 5.8))}s` }}>
                  {[0, 1].map(copyIndex => (
                    <div key={copyIndex} className='flex shrink-0 gap-5 pl-5 pr-5 sm:gap-6 sm:pl-6 sm:pr-6'>
                      {row.map(({ work, workIndex }) => (
                        <div key={`${copyIndex}-${work.key}`} className='w-[312px] shrink-0 sm:w-[348px]'>
                          <WorkCard work={work} orderLabel={String(workIndex + 1).padStart(2, '0')} onOpenImage={() => openLightbox(workIndex, 0)} />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeWork && lightbox ? <WorkLightbox work={activeWork} imageIndex={lightbox.imageIndex} labels={labels} onClose={closeLightbox} onPrev={goPrevImage} onNext={goNextImage} onSelectImage={selectImage} /> : null}
    </>
  )
}
