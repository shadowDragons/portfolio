'use client'

import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'
import { useState, useEffect } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import { Link, usePathname } from '@/i18n/routing'
import type { AppLocale } from '@/lib/site-config'
import { Menu, X } from 'lucide-react'

type NavbarProps = {
  locale: AppLocale
  labels: {
    logo: string
    services: string
    articles: string
    process: string
    projects: string
    contact: string
    language: {
      en: string
      zh: string
    }
  }
}

const Navbar = ({ locale, labels }: NavbarProps) => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isHomePage = pathname === '/'

  const links = [
    { name: labels.services, href: '/services', kind: 'route' as const },
    { name: labels.articles, href: '/blog', kind: 'route' as const },
    { name: labels.process, href: '#process', kind: 'section' as const },
    { name: labels.projects, href: '#projects', kind: 'section' as const },
    { name: labels.contact, href: '#contact', kind: 'section' as const },
  ]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetElement = document.querySelector(href)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
    setIsOpen(false)
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const getSectionHref = (hash: string) => (isHomePage ? hash : `/${locale}${hash}`)

  return (
    <nav
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'border-b border-black/[0.06] bg-white/70 shadow-[0_1px_3px_rgba(0,0,0,0.04)] backdrop-blur-xl'
          : 'bg-transparent'
      )}
      >
      <div className='mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-12'>
        <Link href='/' className='font-rubik text-lg tracking-[0.02em] text-[#111] sm:text-xl'>
          {labels.logo}
        </Link>

        <div className='hidden items-center gap-0.5 lg:flex'>
          {links.map((item, index) =>
            item.kind === 'section' ? (
              <a
                key={index}
                href={getSectionHref(item.href)}
                onClick={isHomePage ? e => handleScroll(e, item.href) : undefined}
                className={cn(
                  buttonVariants({ variant: 'ghost', size: 'sm' }),
                  'rounded-full px-4 text-[13px] font-medium text-[#555] transition-colors hover:bg-black/[0.04] hover:text-[#111]'
                )}
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  buttonVariants({ variant: 'ghost', size: 'sm' }),
                  'rounded-full px-4 text-[13px] font-medium text-[#555] transition-colors hover:bg-black/[0.04] hover:text-[#111]'
                )}
              >
                {item.name}
              </Link>
            ),
          )}
        </div>

        <div className='flex items-center gap-2'>
          <div className='hidden sm:block'>
            <LanguageSwitcher locale={locale} labels={labels.language} />
          </div>
          <button
            type='button'
            onClick={toggleDropdown}
            className='inline-flex h-9 w-9 items-center justify-center rounded-full text-[#333] transition hover:bg-black/[0.05] lg:hidden'
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className='border-t border-black/[0.06] bg-white/90 px-5 py-4 backdrop-blur-xl lg:hidden'>
          <div className='mx-auto flex max-w-[1280px] flex-col gap-1'>
            {links.map((item, index) =>
              item.kind === 'section' ? (
                <a
                  key={index}
                  href={getSectionHref(item.href)}
                  onClick={isHomePage ? e => handleScroll(e, item.href) : () => setIsOpen(false)}
                  className='rounded-xl px-4 py-3 text-sm font-medium text-[#444] transition hover:bg-black/[0.04] hover:text-[#111]'
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className='rounded-xl px-4 py-3 text-sm font-medium text-[#444] transition hover:bg-black/[0.04] hover:text-[#111]'
                >
                  {item.name}
                </Link>
              ),
            )}
            <div className='pt-2 sm:hidden'>
              <LanguageSwitcher locale={locale} labels={labels.language} />
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  )
}

export default Navbar
