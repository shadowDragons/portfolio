'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, usePathname } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import BrandLogo from '@/components/BrandLogo'
import ThemeToggle from '@/components/ThemeToggle'

const sectionLinks = [
  { label: '首页', href: '/' },
  { label: '项目', href: '/projects' },
  { label: '博客', href: '/blog' },
]

const anchorLinks = [
  { label: '精选项目', href: '#projects' },
  { label: '联系', href: '#contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isHomePage = pathname === '/'

  const handleAnchorClick = (href: string) => {
    setIsOpen(false)

    if (!isHomePage) {
      window.location.href = `/${href}`
      return
    }

    const target = document.querySelector(href)
    if (!target) {
      return
    }

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <nav
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-black/8 bg-[rgba(250,246,241,0.82)] backdrop-blur-xl dark:border-white/8 dark:bg-[rgba(10,10,10,0.72)]'
          : 'bg-transparent',
      )}
    >
      <div className='mx-auto flex h-20 w-full max-w-[1260px] items-center justify-between px-4 sm:px-6 lg:px-10'>
        <Link href='/' aria-label='钟俊滨个人主页' className='shrink-0'>
          <BrandLogo label='钟俊滨个人主页' />
        </Link>

        <div className='hidden items-center gap-2 lg:flex'>
          {sectionLinks.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className='rounded-full px-4 py-2 text-sm font-medium text-[#3f352c] transition hover:bg-black/5 hover:text-[#111] dark:text-white/80 dark:hover:bg-white/8 dark:hover:text-white'
            >
              {item.label}
            </Link>
          ))}
          {anchorLinks.map(item => (
            <button
              key={item.href}
              type='button'
              onClick={() => handleAnchorClick(item.href)}
              className='rounded-full px-4 py-2 text-sm font-medium text-[#3f352c] transition hover:bg-black/5 hover:text-[#111] dark:text-white/80 dark:hover:bg-white/8 dark:hover:text-white'
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className='flex items-center gap-2'>
          <ThemeToggle />
          <button
            type='button'
            onClick={() => setIsOpen(current => !current)}
            className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-[#171717] transition hover:border-[#d49b6b] hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-[#f0a15a] dark:hover:bg-white/10 lg:hidden'
            aria-label={isOpen ? '关闭菜单' : '打开菜单'}
          >
            {isOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className='border-t border-black/6 bg-[rgba(250,246,241,0.96)] px-4 py-4 backdrop-blur-xl dark:border-white/8 dark:bg-[rgba(10,10,10,0.94)] lg:hidden'>
          <div className='mx-auto flex max-w-[1260px] flex-col gap-1'>
            {sectionLinks.map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className='rounded-2xl px-4 py-3 text-sm font-medium text-[#3f352c] transition hover:bg-black/5 hover:text-[#111] dark:text-white/82 dark:hover:bg-white/8 dark:hover:text-white'
              >
                {item.label}
              </Link>
            ))}
            {anchorLinks.map(item => (
              <button
                key={item.href}
                type='button'
                onClick={() => handleAnchorClick(item.href)}
                className='rounded-2xl px-4 py-3 text-left text-sm font-medium text-[#3f352c] transition hover:bg-black/5 hover:text-[#111] dark:text-white/82 dark:hover:bg-white/8 dark:hover:text-white'
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  )
}
