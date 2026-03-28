'use client'

import { usePathname, useRouter } from '@/i18n/routing'
import { useLocale, useTranslations } from 'next-intl'
import { useTransition } from 'react'

const LanguageSwitcher = () => {
  const t = useTranslations('Navbar') // Use translations from Navbar namespace
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const switchLanguage = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale })
    })
  }

  return (
    <div className='relative inline-block text-left'>
      <select
        className='block w-full rounded-full border border-[#dccfbd] bg-white/70 px-4 py-2 text-sm text-[#334155] shadow-sm outline-none transition focus:border-[#d67f43] focus:ring-2 focus:ring-[#f3d4b8]'
        value={locale}
        onChange={e => switchLanguage(e.target.value)}
        disabled={isPending}
      >
        <option value='en'>{t('language.en')}</option>
        <option value='zh'>{t('language.zh')}</option>
      </select>
    </div>
  )
}

export default LanguageSwitcher
