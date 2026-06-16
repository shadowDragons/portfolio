import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Link } from '@/i18n/routing'
import CreativeSubpageNav from '@/components/creative/CreativeSubpageNav'
import StructuredData from '@/components/StructuredData'
import { blogPosts, getBlogPostBySlug, getBlogSlugs } from '@/lib/portfolio-content'
import { appLocales, buildPageMetadata, getAppLocale, getLocalizedUrl, isAppLocale } from '@/lib/site-config'

type BlogPostPageProps = {
  params: {
    locale: string
    slug: string
  }
}

export function generateStaticParams() {
  return appLocales.flatMap(locale => getBlogSlugs().map(slug => ({ locale, slug })))
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const locale = getAppLocale(params.locale)
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return buildPageMetadata({
      locale,
      pathname: '/blog',
      title: '技术博客｜钟俊滨',
      description: '钟俊滨的技术博客。',
    })
  }

  return buildPageMetadata({
    locale,
    pathname: `/blog/${post.slug}`,
    title: `${post.title}｜钟俊滨`,
    description: post.excerpt,
    keywords: [post.tag, '技术博客', '全栈开发', 'AI Agent', '企业系统'],
    openGraphType: 'article',
    publishedTime: post.date.replaceAll('.', '-'),
  })
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  if (!isAppLocale(params.locale)) {
    notFound()
  }

  const post = getBlogPostBySlug(params.slug)
  if (!post) {
    notFound()
  }

  const pageUrl = getLocalizedUrl('zh', `/blog/${post.slug}`)
  const postIndex = blogPosts.findIndex(item => item.slug === post.slug)
  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : undefined
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : undefined

  return (
    <>
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date.replaceAll('.', '-'),
          dateModified: post.date.replaceAll('.', '-'),
          author: {
            '@type': 'Person',
            name: '钟俊滨',
          },
          url: pageUrl,
          inLanguage: 'zh-CN',
        }}
      />

      <CreativeSubpageNav active='blog' />

      <section className='relative pt-28 pb-16 md:pt-36 md:pb-20 px-6 md:px-10 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-purple-900/60 via-purple-800/30 to-transparent' />
        <div className='absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600 rounded-full blur-[150px] opacity-20 animate-pulse' />
        <div className='relative z-10 max-w-4xl mx-auto text-center'>
          <div className='inline-flex gap-3 mb-6'>
            <span className='px-4 py-1.5 text-xs font-bold rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30'>{post.tag}</span>
            <span className='text-sm opacity-40'>{post.date}</span>
          </div>
          <h1 className='text-4xl md:text-6xl font-black tracking-tighter mb-4'>{post.title}</h1>
        </div>
      </section>

      <section className='py-10 md:py-16 px-6 md:px-10'>
        <div className='max-w-3xl mx-auto'>
          <div className='glass rounded-3xl p-8 md:p-12 space-y-8'>
            {post.content.map(section => (
              <div key={section.heading}>
                <h2 className='text-2xl font-bold mb-4 text-purple-400'>{section.heading}</h2>
                {section.paragraphs.map(paragraph => (
                  <p key={paragraph} className='text-base md:text-lg opacity-70 leading-relaxed mb-4'>
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-12 md:py-16 px-6 md:px-10'>
        <div className='max-w-3xl mx-auto flex flex-col sm:flex-row justify-center gap-4'>
          <Link className='inline-flex items-center gap-2 text-purple-400 font-bold hover:gap-4 transition-all' href='/blog'>
            返回博客列表
          </Link>
          <Link className='inline-flex items-center gap-2 text-purple-400 font-bold hover:gap-4 transition-all' href='/'>
            返回首页
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
