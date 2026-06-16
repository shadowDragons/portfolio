'use client'

import { useEffect, useRef, useState } from 'react'

type CreativeShellProps = {
  children: React.ReactNode
}

function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null)
  const followerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      return
    }

    const onMouseMove = (event: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${event.clientX - 4}px, ${event.clientY - 4}px, 0)`
      }
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${event.clientX - 16}px, ${event.clientY - 16}px, 0)`
      }
    }

    const onPointerOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const interactive = target?.closest('a, button, input, textarea, [role="button"]')
      followerRef.current?.classList.toggle('scale-150', Boolean(interactive))
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseover', onPointerOver)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', onPointerOver)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className='pointer-events-none fixed left-0 top-0 z-[9999] hidden h-2 w-2 rounded-full bg-pink-500 md:block' />
      <div ref={followerRef} className='pointer-events-none fixed left-0 top-0 z-[9998] hidden h-8 w-8 rounded-full border-2 border-orange-500 transition-transform duration-200 md:block' />
    </>
  )
}

function LoadingCurtain() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 680)
    return () => window.clearTimeout(timeout)
  }, [])

  if (!visible) {
    return null
  }

  return (
    <div className='fixed inset-0 z-[10000] flex items-center justify-center bg-[#0a0a0a] transition-transform'>
      <div className='animate-pulse text-3xl font-black tracking-[0.3em] text-white sm:text-4xl'>LOADING...</div>
    </div>
  )
}

export default function CreativeShell({ children }: CreativeShellProps) {
  return (
    <>
      <LoadingCurtain />
      <CustomCursor />
      <main className='creative-shell'>{children}</main>
    </>
  )
}
