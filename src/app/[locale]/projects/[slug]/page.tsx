import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowLeft, CheckCircle2, Layers3, Radio } from 'lucide-react'
import { notFound } from 'next/navigation'
import { Link } from '@/i18n/routing'
import CreativeSubpageNav from '@/components/creative/CreativeSubpageNav'
import StructuredData from '@/components/StructuredData'
import { getAllProjects, getProjectBySlug, getProjectSlugs } from '@/lib/portfolio-content'
import { appLocales, buildPageMetadata, getAppLocale, getLocalizedUrl, isAppLocale } from '@/lib/site-config'

type ProjectDetailPageProps = {
  params: {
    locale: string
    slug: string
  }
}

export function generateStaticParams() {
  return appLocales.flatMap(locale => getProjectSlugs().map(slug => ({ locale, slug })))
}

export function generateMetadata({ params }: ProjectDetailPageProps): Metadata {
  const locale = getAppLocale(params.locale)
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return buildPageMetadata({
      locale,
      pathname: '/projects',
      title: '项目归档｜钟俊滨',
      description: '钟俊滨的项目归档。',
    })
  }

  return buildPageMetadata({
    locale,
    pathname: `/projects/${project.slug ?? project.key}`,
    title: `${project.title}｜钟俊滨项目详情`,
    description: project.description,
    keywords: [project.category, ...project.stack.slice(0, 6), '项目详情', '全栈开发'],
  })
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  if (!isAppLocale(params.locale)) {
    notFound()
  }

  const project = getProjectBySlug(params.slug)
  if (!project) {
    notFound()
  }

  const pageUrl = getLocalizedUrl('zh', `/projects/${project.slug ?? project.key}`)
  const projects = getAllProjects()
  const currentIndex = projects.findIndex(item => item.key === project.key)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : undefined
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : undefined

  return (
    <>
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.title,
          description: project.description,
          url: pageUrl,
          author: {
            '@type': 'Person',
            name: '钟俊滨',
          },
          inLanguage: 'zh-CN',
        }}
      />

      <CreativeSubpageNav active='projects' />

      <section className='relative pt-28 pb-20 md:pt-36 md:pb-28 px-6 md:px-10 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-purple-900/60 via-purple-800/30 to-transparent' />
        <div className='absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600 rounded-full blur-[150px] opacity-20 animate-pulse' />
        <div className='relative z-10 max-w-7xl mx-auto text-center'>
          <div className='inline-flex gap-3 mb-6 flex-wrap justify-center'>
            {project.stack.slice(0, 2).map(item => (
              <span key={item} className='px-4 py-1.5 text-xs font-bold rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30'>
                {item}
              </span>
            ))}
          </div>
          <h1 className='text-5xl md:text-7xl font-black tracking-tighter mb-6'>{project.title}</h1>
          <p className='text-lg md:text-xl opacity-60 max-w-2xl mx-auto'>{project.description}</p>
        </div>
      </section>

      <section className='py-16 md:py-20 px-6 md:px-10'>
        <div className='max-w-7xl mx-auto'>
          <div className='glass rounded-3xl p-8 md:p-12'>
            <h2 className='text-3xl md:text-4xl font-bold mb-8'>项目概述</h2>
            <div className='w-20 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mb-8' />
            <p className='text-base md:text-lg opacity-70 leading-relaxed'>{project.details}</p>
          </div>
        </div>
      </section>

      <section className='py-10 md:py-14 px-6 md:px-10'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-2xl md:text-3xl font-bold mb-8'>技术栈</h2>
          <div className='w-20 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mb-8' />
          <div className='flex flex-wrap gap-4'>
            {project.stack.map(item => (
              <div key={item} className='glass px-6 py-3 rounded-xl border border-purple-500/30 text-purple-400 font-bold'>
                <Layers3 className='inline mr-2 h-4 w-4' />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-16 md:py-20 px-6 md:px-10'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-2xl md:text-3xl font-bold mb-8'>核心功能</h2>
          <div className='w-20 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mb-12' />
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8'>
            {project.highlights.map((highlight, index) => (
              <div key={highlight} className='glass rounded-2xl p-8 text-center hover:border-purple-500/30 transition-all group'>
                {index === 0 ? <Radio className='mx-auto h-14 w-14 text-purple-400 mb-6 group-hover:scale-110 transition-transform' /> : <CheckCircle2 className='mx-auto h-14 w-14 text-purple-400 mb-6 group-hover:scale-110 transition-transform' />}
                <h3 className='text-xl font-bold mb-4'>{highlight}</h3>
                <p className='text-sm opacity-60 leading-relaxed'>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-16 md:py-20 px-6 md:px-10'>
        <div className='max-w-7xl mx-auto'>
          <div className='glass rounded-3xl p-8 md:p-12 border-dashed border-2 border-purple-500/20'>
            <h2 className='text-2xl md:text-3xl font-bold mb-8 text-center text-purple-400'>项目预览图</h2>
            <div className='grid gap-5 md:grid-cols-2'>
              {project.images.map((image, index) => (
                <div key={image} className='overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-purple-400'>
                  <Image src={image} alt={`${project.imageAlt} ${index + 1}`} width={1200} height={760} className='h-full w-full object-cover' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='py-12 md:py-16 px-6 md:px-10'>
        <div className='max-w-7xl mx-auto flex flex-col items-center gap-4 text-center'>
          <Link className='inline-flex items-center gap-2 text-purple-400 font-bold hover:gap-4 transition-all text-lg' href='/projects'>
            <ArrowLeft className='h-5 w-5' /> 返回全部项目
          </Link>
          <div className='flex flex-wrap justify-center gap-4 text-sm'>
            {prevProject ? (
              <Link className='text-purple-400 font-bold hover:underline' href={`/projects/${prevProject.slug ?? prevProject.key}`}>
                上一个：{prevProject.title}
              </Link>
            ) : null}
            {nextProject ? (
              <Link className='text-purple-400 font-bold hover:underline' href={`/projects/${nextProject.slug ?? nextProject.key}`}>
                下一个：{nextProject.title}
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      <footer className='py-10 md:py-12 px-6 md:px-10 border-t border-white/10 text-center opacity-50 text-sm'>
        <p>© 2026 JUNBIN.DEV - 用代码驱动系统</p>
        <p className='mt-2 italic'>Handcrafted with Next.js and TypeScript</p>
      </footer>
    </>
  )
}
