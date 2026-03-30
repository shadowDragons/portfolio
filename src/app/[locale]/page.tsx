import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BusinessHome from '@/components/BusinessHome'
import StructuredData from '@/components/StructuredData'
import { buildPageMetadata, getAppLocale, getHomePageSeoCopy, getHomeStructuredData, isAppLocale } from '@/lib/site-config'

type HomePageProps = {
  params: {
    locale: string
  }
}

export function generateMetadata({ params }: HomePageProps): Metadata {
  const locale = getAppLocale(params.locale)
  const seoCopy = getHomePageSeoCopy(locale)

  return buildPageMetadata({
    locale,
    title: seoCopy.title,
    description: seoCopy.description,
    keywords: seoCopy.keywords,
  })
}

export default function Home({ params }: HomePageProps) {
  if (!isAppLocale(params.locale)) {
    notFound()
  }

  const locale = getAppLocale(params.locale)

  return (
    <>
      <StructuredData data={getHomeStructuredData(locale)} />
      <BusinessHome />
    </>
  )
}
