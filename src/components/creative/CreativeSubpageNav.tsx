'use client'

import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from '@/i18n/routing'

type CreativeSubpageNavProps = {
  active: 'blog' | 'projects'
}

export default function CreativeSubpageNav({ active }: CreativeSubpageNavProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobileMenu = () => setOpen(false)

  return (
    <>
      <div id='mobile-overlay' className={open ? 'open' : ''} onClick={closeMobileMenu} />
      <div className={`glass ${open ? 'open' : ''}`} id='mobile-menu'>
        <Link className='text-2xl font-bold mb-10 text-purple-400' href='/'>
          JUNBIN.DEV
        </Link>
        <Link className='text-lg font-medium py-3 border-b border-white/10 hover:text-purple-400 transition-colors' href='/#hero' onClick={closeMobileMenu}>
          首页
        </Link>
        <Link className='text-lg font-medium py-3 border-b border-white/10 hover:text-purple-400 transition-colors' href='/#about' onClick={closeMobileMenu}>
          关于
        </Link>
        <Link className='text-lg font-medium py-3 border-b border-white/10 hover:text-purple-400 transition-colors' href='/#skills' onClick={closeMobileMenu}>
          技能
        </Link>
        <Link className='text-lg font-medium py-3 border-b border-white/10 hover:text-purple-400 transition-colors' href='/#projects' onClick={closeMobileMenu}>
          作品
        </Link>
        <Link className='text-lg font-medium py-3 border-b border-white/10 hover:text-purple-400 transition-colors' href='/blog' onClick={closeMobileMenu}>
          博客
        </Link>
        <Link className='text-lg font-medium py-3 border-b border-white/10 hover:text-purple-400 transition-colors' href='/#contact' onClick={closeMobileMenu}>
          联系
        </Link>
      </div>

      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-10 ${scrolled ? 'glass py-4' : 'py-6'}`} id='navbar'>
        <div className='max-w-7xl mx-auto flex justify-between items-center'>
          <div className='text-2xl font-black tracking-tighter'>
            <Link href='/'>
              <span className='text-gradient'>JUNBIN.DEV</span>
            </Link>
          </div>
          <div className='hidden md:flex space-x-10 items-center'>
            <Link className='nav-link font-medium' href='/#hero'>
              首页
            </Link>
            <Link className='nav-link font-medium' href='/#about'>
              关于
            </Link>
            <Link className='nav-link font-medium' href='/#skills'>
              技能
            </Link>
            <Link className={`nav-link font-medium ${active === 'projects' ? 'text-purple-400' : ''}`} href='/projects'>
              作品
            </Link>
            <Link className={`nav-link font-medium ${active === 'blog' ? 'text-purple-400' : ''}`} href='/blog'>
              博客
            </Link>
            <Link className='nav-link font-medium' href='/#contact'>
              联系
            </Link>
          </div>
          <button className='md:hidden glass p-2 rounded-lg' id='mobile-menu-btn' type='button' onClick={() => setOpen(value => !value)} aria-label='打开菜单'>
            <Menu className='h-6 w-6' />
          </button>
        </div>
      </nav>
    </>
  )
}
