import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { GoogleAnalytics } from '@next/third-parties/google'
import { getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { getAppLocale, getSiteMetadata } from '@/lib/site-config'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-40820HPGL6'

export const metadata: Metadata = getSiteMetadata()

export default async function RootLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  const appLocale = getAppLocale(locale)
  const t = await getTranslations({ locale: appLocale, namespace: 'Navbar' })

  const navbarLabels = {
    logo: t('logo'),
    services: t('services'),
    articles: t('articles'),
    process: t('process'),
    projects: t('projects'),
    contact: t('contact'),
    language: {
      en: t('language.en'),
      zh: t('language.zh'),
    },
  }

  return (
    <html lang={appLocale}>
      <body className='font-poppins'>
        <Navbar locale={appLocale} labels={navbarLabels} />
        <main
          className={cn(
            'relative flex min-h-screen flex-col break-words overflow-hidden',
            'px-4 pb-16 pt-20 sm:px-6 md:px-8 lg:px-20 xl:px-24'
          )}
        >
          {children}
        </main>
        <Footer locale={appLocale} />
      </body>
      {process.env.NODE_ENV === 'development' ? <></> : <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
    </html>
  )
}
