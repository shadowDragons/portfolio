'use client'

import { usePathname, useRouter } from '@/i18n/routing'
import { useId, useTransition } from 'react'
import type { AppLocale } from '@/lib/site-config'

type LanguageSwitcherProps = {
  locale: AppLocale
  labels: {
    en: string
    zh: string
  }
}

const LanguageSwitcher = ({ locale, labels }: LanguageSwitcherProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()
  const selectId = useId()
  const switcherLabel = locale === 'zh' ? '切换语言' : 'Switch language'

  const switchLanguage = (newLocale: AppLocale) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale })
    })
  }

  return (
    <div className='relative inline-block text-left'>
      <label htmlFor={selectId} className='sr-only'>
        {switcherLabel}
      </label>
      <select
        id={selectId}
        className='block w-full rounded-full border border-[#dccfbd] bg-white/70 px-4 py-2 text-sm text-[#334155] shadow-sm outline-none transition focus:border-[#d67f43] focus:ring-2 focus:ring-[#f3d4b8]'
        value={locale}
        onChange={e => switchLanguage(e.target.value as AppLocale)}
        disabled={isPending}
        aria-label={switcherLabel}
      >
        <option value='en'>{labels.en}</option>
        <option value='zh'>{labels.zh}</option>
      </select>
    </div>
  )
}

export default LanguageSwitcher
