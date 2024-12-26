'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'

const Navbar = () => {
  const t = useTranslations('Navbar')
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: t('greeting'), link: '#' },
    { name: t('projects'), link: '#projects' },
  ]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetElement = href === '#' ? document.documentElement : document.querySelector(href)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: href === '#' ? 'start' : 'start',
      })
    }
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='fixed top-0 z-50 w-full h-14 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='flex h-14 items-center justify-between px-4 sm:px-8 md:px-12 lg:px-40'>
        <Link href='/' className='font-rubik text-xl'>
          {t('logo')}
        </Link>
        <div className='flex items-center gap-2'>
          {links.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              onClick={e => handleScroll(e, item.link)}
              className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }), 'hidden sm:inline-flex')}
            >
              {item.name}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
