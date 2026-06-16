import { Expand, ExternalLink, ImageIcon } from 'lucide-react'
import type { ShowcaseWork } from '@/components/business-home/types'
import DeferredProjectsShowcase from '@/components/business-home/DeferredProjectsShowcase'

type ProjectsShowcaseProps = {
  works: ShowcaseWork[]
  labels: {
    viewImages: string
    openLink: string
    stackLabel: string
    lightboxHint: string
    loadingImage: string
    highlightsLabel: string
  }
  layout?: 'grid' | 'marquee'
}

function ProjectsShowcaseStatic({ works, labels }: ProjectsShowcaseProps) {
  return (
    <div className='grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
      {works.map((work, index) => {
        const coverImage = work.images[0]

        return (
          <article
            key={work.key}
            className='group flex h-full flex-col overflow-hidden rounded-[30px] border border-black/8 bg-white/88 shadow-[0_24px_60px_-38px_rgba(0,0,0,0.28)] transition hover:-translate-y-1 dark:border-white/8 dark:bg-white/[0.04] dark:shadow-[0_26px_60px_-40px_rgba(0,0,0,0.58)]'
          >
            <div className='relative h-[228px] overflow-hidden bg-[linear-gradient(135deg,#e6d4c2_0%,#cda176_100%)]'>
              {coverImage ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={coverImage} alt={work.imageAlt} loading='lazy' decoding='async' className='absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]' />
                  <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.05)_0%,rgba(10,10,10,0.16)_36%,rgba(10,10,10,0.72)_100%)]' />
                </>
              ) : null}

              <div className='absolute left-4 right-4 top-4 flex items-center justify-between gap-3'>
                <span className='inline-flex items-center gap-2 rounded-full bg-black/24 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md'>
                  <ImageIcon className='h-3.5 w-3.5' />
                  {work.imageCountLabel}
                </span>
                <span className='rounded-full border border-white/18 bg-white/14 px-3 py-1 text-[11px] font-medium tracking-[0.14em] text-white backdrop-blur-md'>
                  {work.category}
                </span>
              </div>

              <div className='absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3'>
                <div className='space-y-1'>
                  <p className='text-xs font-semibold uppercase tracking-[0.18em] text-white/72'>{String(index + 1).padStart(2, '0')}</p>
                  <p className='font-rubik text-[22px] leading-tight text-white'>{work.title}</p>
                </div>
                <span className='inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/16 text-white backdrop-blur-md'>
                  <Expand className='h-4.5 w-4.5' />
                </span>
              </div>
            </div>

            <div className='flex flex-1 flex-col gap-4 p-5'>
              <p className='text-sm leading-6 text-[#5a5047] dark:text-white/64'>{work.description}</p>
              <div className='flex flex-wrap gap-2'>
                {work.stack.map(item => (
                  <span key={`${work.key}-${item}`} className='rounded-full border border-black/8 bg-[#f7efe7] px-3 py-1 text-xs font-medium text-[#5b4534] dark:border-white/8 dark:bg-white/6 dark:text-white/76'>
                    {item}
                  </span>
                ))}
              </div>
              <div className='mt-auto flex flex-wrap gap-2 pt-2 text-sm font-medium'>
                <span className='inline-flex items-center gap-2 rounded-full border border-black/8 px-4 py-2 text-[#4b3b2e] dark:border-white/8 dark:text-white/78'>
                  <Expand className='h-3.5 w-3.5' />
                  {labels.viewImages}
                </span>
                {work.link ? (
                  <a
                    href={work.link}
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex items-center gap-2 rounded-full border border-black/8 px-4 py-2 text-[#4b3b2e] dark:border-white/8 dark:text-white/78'
                  >
                    <ExternalLink className='h-3.5 w-3.5' />
                    {labels.openLink}
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default function ProjectsShowcase({ works, labels, layout = 'marquee' }: ProjectsShowcaseProps) {
  return (
    <DeferredProjectsShowcase
      works={works}
      labels={labels}
      layout={layout}
      fallback={<ProjectsShowcaseStatic works={works} labels={labels} layout={layout} />}
    />
  )
}
