import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import { GoogleAnalytics } from '@next/third-parties/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { getSiteMetadata } from '@/lib/site-config'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-40820HPGL6'

export const metadata: Metadata = getSiteMetadata()

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
      {process.env.NODE_ENV === 'development' ? <></> : <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
    </html>
  )
}
