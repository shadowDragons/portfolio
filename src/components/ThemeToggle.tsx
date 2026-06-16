'use client'

import { Moon, SunMedium } from 'lucide-react'
import { useEffect, useState } from 'react'

type ThemeMode = 'light' | 'dark'

function applyTheme(nextTheme: ThemeMode) {
  const root = document.documentElement
  root.classList.toggle('dark', nextTheme === 'dark')
  root.style.colorScheme = nextTheme
  window.localStorage.setItem('theme', nextTheme)
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme')
    const nextTheme: ThemeMode = savedTheme === 'dark' ? 'dark' : 'light'
    setTheme(nextTheme)
    applyTheme(nextTheme)
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    applyTheme(nextTheme)
  }

  return (
    <button
      type='button'
      onClick={toggleTheme}
      className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-[#171717] shadow-[0_10px_24px_-16px_rgba(0,0,0,0.35)] transition hover:border-[#d49b6b] hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-[#f0a15a] dark:hover:bg-white/10'
      aria-label={mounted && theme === 'dark' ? '切换到浅色模式' : '切换到深色模式'}
    >
      {mounted && theme === 'dark' ? <SunMedium className='h-4.5 w-4.5' /> : <Moon className='h-4.5 w-4.5' />}
    </button>
  )
}
