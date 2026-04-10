'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

declare global {
  interface Window {
    _hmt?: Array<unknown[]>
    __baiduAnalyticsLoaded?: boolean
    __baiduAnalyticsLoading?: boolean
  }
}

type BaiduAnalyticsProps = {
  siteId: string
  mode?: 'off' | 'interaction' | 'immediate'
}

function getCurrentPagePath(pathname: string) {
  if (typeof window === 'undefined') {
    return pathname
  }

  return `${pathname}${window.location.search}`
}

export default function BaiduAnalytics({ siteId, mode = 'interaction' }: BaiduAnalyticsProps) {
  const pathname = usePathname()
  const [isReady, setIsReady] = useState(false)
  const lastTrackedPathRef = useRef<string | null>(null)
  const pendingPathRef = useRef(pathname)

  useEffect(() => {
    pendingPathRef.current = getCurrentPagePath(pathname)
  }, [pathname])

  useEffect(() => {
    if (!siteId || mode === 'off' || typeof window === 'undefined') {
      return
    }

    if (window.__baiduAnalyticsLoaded) {
      lastTrackedPathRef.current = pendingPathRef.current
      setIsReady(true)
      return
    }

    const loadScript = () => {
      if (window.__baiduAnalyticsLoaded) {
        lastTrackedPathRef.current = pendingPathRef.current
        setIsReady(true)
        return
      }

      if (window.__baiduAnalyticsLoading) {
        return
      }

      window._hmt = window._hmt || []
      window.__baiduAnalyticsLoading = true

      const script = document.createElement('script')
      script.src = `https://hm.baidu.com/hm.js?${siteId}`
      script.async = true
      script.onload = () => {
        window.__baiduAnalyticsLoaded = true
        window.__baiduAnalyticsLoading = false
        lastTrackedPathRef.current = pendingPathRef.current
        setIsReady(true)
      }
      script.onerror = () => {
        window.__baiduAnalyticsLoading = false
      }

      document.head.appendChild(script)
    }

    if (mode === 'immediate') {
      loadScript()
      return
    }

    const triggerLoad = () => {
      loadScript()
      cleanup()
    }

    const eventOptions: AddEventListenerOptions = { once: true, passive: true }

    const cleanup = () => {
      window.removeEventListener('pointerdown', triggerLoad)
      window.removeEventListener('keydown', triggerLoad)
      window.removeEventListener('scroll', triggerLoad)
      window.removeEventListener('touchstart', triggerLoad)
    }

    window.addEventListener('pointerdown', triggerLoad, eventOptions)
    window.addEventListener('keydown', triggerLoad, eventOptions)
    window.addEventListener('scroll', triggerLoad, eventOptions)
    window.addEventListener('touchstart', triggerLoad, eventOptions)

    return cleanup
  }, [mode, siteId])

  useEffect(() => {
    if (!isReady || typeof window === 'undefined' || !window._hmt) {
      return
    }

    const nextPath = getCurrentPagePath(pathname)

    if (lastTrackedPathRef.current === null) {
      lastTrackedPathRef.current = nextPath
      return
    }

    if (lastTrackedPathRef.current === nextPath) {
      return
    }

    window._hmt.push(['_trackPageview', nextPath])
    lastTrackedPathRef.current = nextPath
  }, [isReady, pathname])

  return null
}
