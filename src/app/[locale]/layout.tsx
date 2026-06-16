import type { Metadata } from 'next'
import './globals.css'
import BaiduAnalytics from '@/components/BaiduAnalytics'
import CreativeShell from '@/components/creative/CreativeShell'
import { GoogleAnalytics } from '@next/third-parties/google'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { appLocales, getLocaleSeoConfig, getSiteMetadata } from '@/lib/site-config'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-40820HPGL6'
const BAIDU_ANALYTICS_ID = process.env.NEXT_PUBLIC_BAIDU_ANALYTICS_ID || '51729155eab9e49fb67a35eb932da3a5'
const BAIDU_ANALYTICS_MODE = (process.env.NEXT_PUBLIC_BAIDU_ANALYTICS_MODE || 'interaction') as 'off' | 'interaction' | 'immediate'

const themeInitScript = `
  (function() {
    try {
      var savedTheme = localStorage.getItem('theme');
      var theme = savedTheme === 'light' ? 'light' : 'dark';
      document.documentElement.classList.toggle('dark', theme === 'dark');
      document.documentElement.style.colorScheme = theme;
    } catch (error) {}
  })();
`

export const metadata: Metadata = getSiteMetadata()

export function generateStaticParams() {
  return appLocales.map(locale => ({ locale }))
}

export default function RootLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  const localeSeoConfig = getLocaleSeoConfig('zh')

  return (
    <html lang={localeSeoConfig.languageTag} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className='font-poppins noise-bg' suppressHydrationWarning>
        <CreativeShell>{children}</CreativeShell>
      </body>
      {process.env.NODE_ENV === 'development' ? null : (
        <>
          <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
          <BaiduAnalytics siteId={BAIDU_ANALYTICS_ID} mode={BAIDU_ANALYTICS_MODE} />
        </>
      )}
    </html>
  )
}
