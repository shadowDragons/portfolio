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
  }
}

function ProjectsShowcaseStatic({ works, labels }: ProjectsShowcaseProps) {
  return (
    <div className='grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
      {works.map((work, index) => {
        const coverImage = work.images[0]
        const primaryHref = coverImage || work.link
        const isPrimaryExternal = Boolean(primaryHref)

        return (
          <article
            key={work.key}
            className='group flex h-full flex-col overflow-hidden rounded-[28px] border border-[#eadfd1] bg-white shadow-[0_16px_48px_-28px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-[#dbc9b6]'
          >
            <a
              href={primaryHref || '#projects'}
              target={isPrimaryExternal ? '_blank' : undefined}
              rel={isPrimaryExternal ? 'noreferrer' : undefined}
              className='relative h-[220px] w-full overflow-hidden bg-[linear-gradient(135deg,#f0e5d9_0%,#e7d7c4_52%,#d9bea2_100%)] text-left'
            >
              {coverImage ? (
                <>
                  {/* Static fallback stays below the fold; a plain lazy img avoids pulling next/image into the initial bundle. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={coverImage}
                    alt={work.title}
                    loading='lazy'
                    decoding='async'
                    className='absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]'
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
                  {work.imageCountLabel}
                </span>
                {work.link ? (
                  <span className='inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/16 text-white backdrop-blur-md'>
                    <ExternalLink className='h-4 w-4' />
                  </span>
                ) : null}
              </div>

              <div className='absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3'>
                <div className='space-y-1'>
                  <p className='text-xs font-semibold uppercase tracking-[0.18em] text-white/72'>{String(index + 1).padStart(2, '0')}</p>
                  <p className='font-rubik text-[21px] leading-tight text-white'>{work.title}</p>
                </div>
                <span className='inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/16 text-white backdrop-blur-md'>
                  <Expand className='h-4.5 w-4.5' />
                </span>
              </div>
            </a>

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
                {coverImage ? (
                  <a
                    href={coverImage}
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex items-center gap-2 rounded-full border border-[#dfd3c7] bg-[#faf6f1] px-4 py-2 text-sm font-medium text-[#5e4d3b] transition hover:border-[#cfae8a] hover:text-accent-accessible'
                  >
                    <Expand className='h-3.5 w-3.5' />
                    {labels.viewImages}
                  </a>
                ) : null}

                {work.link ? (
                  <a
                    href={work.link}
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex items-center gap-2 rounded-full border border-[#dfd3c7] bg-white px-4 py-2 text-sm font-medium text-[#5e4d3b] transition hover:border-[#cfae8a] hover:text-accent-accessible'
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

export default function ProjectsShowcase({ works, labels }: ProjectsShowcaseProps) {
  return <DeferredProjectsShowcase works={works} labels={labels} fallback={<ProjectsShowcaseStatic works={works} labels={labels} />} />
}
