import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import { GoogleAnalytics } from '@next/third-parties/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'

const siteConfig = {
  name: '致诚工作室',
  description: '专注高端网站与小程序定制开发的远程研发工作室。提供企业官网、Web 应用及 AI 工具等数字产品的高标准交付服务。',
  ogImage: 'https://sphrag.com/og-image.png',
  url: 'https://sphrag.com',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - 远程研发工作室`,
  },
  description: siteConfig.description,

  keywords: ['致诚工作室', 'Zhicheng Studio', '远程工作室', '网站开发', '小程序开发', '定制开发', 'Web应用', 'AI工具'],
  authors: [
    {
      name: '致诚工作室',
      url: 'https://github.com/shadowDragons',
    },
  ],
  creator: '致诚工作室',

  openGraph: {
    type: 'website',
    locale: 'zh-CN',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: '@Junexus_indie',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default async function RootLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className='font-poppins'>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main
            className={cn(
              'relative flex min-h-screen flex-col break-words overflow-hidden',
              'px-4 pb-16 pt-20 sm:px-6 md:px-8 lg:px-20 xl:px-24'
            )}
          >
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
      {process.env.NODE_ENV === 'development' ? <></> : process.env.NEXT_PUBLIC_GA_ID ? <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} /> : null}
    </html>
  )
}
