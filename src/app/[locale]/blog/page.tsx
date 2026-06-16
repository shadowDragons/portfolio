import type { Metadata } from 'next'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { notFound } from 'next/navigation'
import { Link } from '@/i18n/routing'
import CreativeSubpageNav from '@/components/creative/CreativeSubpageNav'
import StructuredData from '@/components/StructuredData'
import { blogPosts } from '@/lib/portfolio-content'
import { appLocales, buildPageMetadata, getAppLocale, getLocalizedUrl, isAppLocale, type AppLocale } from '@/lib/site-config'

type BlogPageProps = {
  params: {
    locale: string
  }
}

const blogCopy = {
  title: '最新博客',
  description: '技术思考与工程实践分享',
  metaTitle: '技术博客｜钟俊滨｜系统架构、AI Agent 与全栈交付',
  metaDescription: '钟俊滨的技术博客，用来沉淀企业系统重构、AI Agent、RAG、全栈交付和复杂项目实践。',
  keywords: ['技术博客', '系统设计', 'AI Agent', 'RAG', '全栈开发', '架构实践'],
}

export function generateMetadata({ params }: BlogPageProps): Metadata {
  const locale = getAppLocale(params.locale)

  return buildPageMetadata({
    locale,
    pathname: '/blog',
    title: blogCopy.metaTitle,
    description: blogCopy.metaDescription,
    keywords: blogCopy.keywords,
  })
}

export function generateStaticParams() {
  return appLocales.map(locale => ({ locale }))
}

function getBlogStructuredData(locale: AppLocale) {
  const pageUrl = getLocalizedUrl(locale, '/blog')

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${pageUrl}#collection`,
        url: pageUrl,
        name: blogCopy.metaTitle,
        description: blogCopy.metaDescription,
      },
      {
        '@type': 'ItemList',
        '@id': `${pageUrl}#posts`,
        itemListElement: blogPosts.map((post, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: post.title,
          url: `${pageUrl}/${post.slug}`,
        })),
      },
    ],
  }
}

export default function BlogPage({ params }: BlogPageProps) {
  if (!isAppLocale(params.locale)) {
    notFound()
  }

  return (
    <>
      <StructuredData data={getBlogStructuredData('zh')} />
      <CreativeSubpageNav active='blog' />

      <section className='relative pt-28 pb-16 md:pt-36 md:pb-20 px-6 md:px-10 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-purple-900/60 via-purple-800/30 to-transparent' />
        <div className='absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600 rounded-full blur-[150px] opacity-20 animate-pulse' />
        <div className='relative z-10 max-w-7xl mx-auto text-center'>
          <h1 className='text-5xl md:text-7xl font-black tracking-tighter mb-6'>{blogCopy.title}</h1>
          <p className='text-lg md:text-xl opacity-60 max-w-2xl mx-auto'>{blogCopy.description}</p>
        </div>
      </section>

      <section className='py-10 md:py-14 px-6 md:px-10'>
        <div className='max-w-4xl mx-auto space-y-8 md:space-y-10'>
          {blogPosts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className='blog-card glass rounded-3xl p-8 md:p-10 hover:shadow-[0_0_40px_rgba(124,58,237,0.15)] group block'>
              <div className='flex items-center gap-3 mb-5 flex-wrap'>
                <span className='px-4 py-1 text-xs font-bold rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30'>{post.tag}</span>
                <span className='text-sm opacity-40'>{post.date}</span>
              </div>
              <h2 className='text-2xl md:text-3xl font-bold mb-5 group-hover:text-purple-400 transition-colors'>{post.title}</h2>
              <p className='text-base opacity-60 leading-relaxed mb-6'>{post.excerpt}</p>
              <span className='inline-flex items-center gap-2 text-purple-400 font-bold group-hover:gap-4 transition-all'>
                阅读更多 <ArrowRight className='h-4 w-4' />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className='py-12 md:py-16 px-6 md:px-10'>
        <div className='max-w-7xl mx-auto text-center'>
          <Link className='inline-flex items-center gap-2 text-purple-400 font-bold hover:gap-4 transition-all text-lg' href='/'>
            <ArrowLeft className='h-5 w-5' /> 返回首页
          </Link>
        </div>
      </section>

      <footer className='py-10 md:py-12 px-6 md:px-10 border-t border-white/10 text-center opacity-50 text-sm'>
        <p>© 2026 JUNBIN.DEV - 用代码驱动系统</p>
        <p className='mt-2 italic'>Handcrafted with Next.js and TypeScript</p>
      </footer>
    </>
  )
}
