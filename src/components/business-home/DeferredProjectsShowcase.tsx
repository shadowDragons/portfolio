'use client'

import dynamic from 'next/dynamic'
import { startTransition, useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import type { ShowcaseWork } from '@/components/business-home/types'

const ProjectsShowcaseClient = dynamic(() => import('@/components/business-home/ProjectsShowcaseClient'))

type ProjectsShowcaseLabels = {
  viewImages: string
  openLink: string
  stackLabel: string
  lightboxHint: string
  loadingImage: string
}

type DeferredProjectsShowcaseProps = {
  works: ShowcaseWork[]
  labels: ProjectsShowcaseLabels
  fallback: ReactNode
}

export default function DeferredProjectsShowcase({ works, labels, fallback }: DeferredProjectsShowcaseProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [shouldEnhance, setShouldEnhance] = useState(false)

  useEffect(() => {
    if (shouldEnhance) {
      return
    }

    const node = containerRef.current

    if (!node || typeof window === 'undefined') {
      return
    }

    if (!('IntersectionObserver' in window)) {
      startTransition(() => setShouldEnhance(true))
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        if (!entries.some(entry => entry.isIntersecting)) {
          return
        }

        startTransition(() => setShouldEnhance(true))
        observer.disconnect()
      },
      { rootMargin: '320px 0px' },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [shouldEnhance])

  return <div ref={containerRef}>{shouldEnhance ? <ProjectsShowcaseClient works={works} labels={labels} /> : fallback}</div>
}
