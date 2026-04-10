'use client'

import dynamic from 'next/dynamic'
import { startTransition, useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import type { HomeContactCard } from '@/components/business-home/types'

const ContactCardsClient = dynamic(() => import('@/components/business-home/ContactCardsClient'))

type DeferredContactCardsProps = {
  cards: HomeContactCard[]
  fallback: ReactNode
}

export default function DeferredContactCards({ cards, fallback }: DeferredContactCardsProps) {
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
      { rootMargin: '200px 0px' },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [shouldEnhance])

  return <div ref={containerRef}>{shouldEnhance ? <ContactCardsClient cards={cards} /> : fallback}</div>
}
