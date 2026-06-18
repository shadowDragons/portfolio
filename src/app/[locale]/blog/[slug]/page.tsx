import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Link } from '@/i18n/routing'
import CreativeSubpageNav from '@/components/creative/CreativeSubpageNav'
import StructuredData from '@/components/StructuredData'
import { getAllBlogPosts, getBlogPostBySlug, getBlogSlugs } from '@/lib/blog'
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

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const locale = getAppLocale(params.locale)
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    return buildPageMetadata({
      locale,
      pathname: '/blog',
      title: '技术博客｜仁戈',
      description: '仁戈的技术博客。',
    })
  }

  return buildPageMetadata({
    locale,
    pathname: `/blog/${post.slug}`,
    title: `${post.title}｜仁戈`,
    description: post.excerpt,
    keywords: post.keywords.length > 0 ? post.keywords : [post.tag, '技术博客', '全栈开发', 'AI Agent', '企业系统'],
    openGraphType: 'article',
    publishedTime: post.date,
    modifiedTime: post.date,
    ogImagePath: post.cover,
  })
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  if (!isAppLocale(params.locale)) {
    notFound()
  }

  const post = await getBlogPostBySlug(params.slug)
  if (!post) {
    notFound()
  }

  const pageUrl = getLocalizedUrl('zh', `/blog/${post.slug}`)
  const blogPosts = getAllBlogPosts()
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
          datePublished: post.date,
          dateModified: post.date,
          author: {
            '@type': 'Person',
            name: '仁戈',
          },
          url: pageUrl,
          inLanguage: 'zh-CN',
          image: post.cover ? [post.cover] : undefined,
        }}
      />

      <CreativeSubpageNav active='blog' />

      <section className='relative pt-28 pb-16 md:pt-36 md:pb-20 px-6 md:px-10 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-purple-900/60 via-purple-800/30 to-transparent' />
        <div className='absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600 rounded-full blur-[150px] opacity-20 animate-pulse' />
        <div className='relative z-10 max-w-4xl mx-auto text-center'>
          <div className='inline-flex gap-3 mb-6'>
            <span className='px-4 py-1.5 text-xs font-bold rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30'>{post.tag}</span>
            <span className='text-sm opacity-40'>{post.displayDate}</span>
            <span className='text-sm opacity-40'>{post.readingTime}</span>
          </div>
          <h1 className='text-4xl md:text-6xl font-black tracking-tighter mb-4'>{post.title}</h1>
          <p className='text-base md:text-lg opacity-60 max-w-2xl mx-auto'>{post.excerpt}</p>
        </div>
      </section>

      <section className='py-10 md:py-16 px-6 md:px-10'>
        <div className='max-w-5xl mx-auto'>
          <div className='glass rounded-3xl p-8 md:p-12'>
            {post.cover ? (
              <div className='mb-10 overflow-hidden rounded-2xl'>
                <Image src={post.cover} alt={post.title} width={1600} height={900} className='h-full w-full object-cover' />
              </div>
            ) : null}
            <article className='creative-prose mx-auto max-w-4xl md:text-lg'>{post.content}</article>
          </div>
        </div>
      </section>

      <section className='py-12 md:py-16 px-6 md:px-10'>
        <div className='max-w-5xl mx-auto flex flex-col sm:flex-row justify-center gap-4'>
          {prevPost ? (
            <Link className='inline-flex items-center gap-2 text-purple-400 font-bold hover:gap-4 transition-all' href={`/blog/${prevPost.slug}`}>
              上一篇：{prevPost.title}
            </Link>
          ) : null}
          {nextPost ? (
            <Link className='inline-flex items-center gap-2 text-purple-400 font-bold hover:gap-4 transition-all' href={`/blog/${nextPost.slug}`}>
              下一篇：{nextPost.title}
            </Link>
          ) : null}
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
