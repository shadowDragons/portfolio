import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { notFound } from 'next/navigation'
import { Link } from '@/i18n/routing'
import CreativeSubpageNav from '@/components/creative/CreativeSubpageNav'
import StructuredData from '@/components/StructuredData'
import { getAllProjects } from '@/lib/portfolio-content'
import { appLocales, buildPageMetadata, getAppLocale, getLocalizedUrl, getProjectsPageSeoCopy, isAppLocale, type AppLocale } from '@/lib/site-config'

type ProjectsPageProps = {
  params: {
    locale: string
  }
}

const pageCopy = {
  title: '项目归档',
  description: '企业系统、AI Agent、RAG、OA、招聘、考勤与视频自动化项目合集',
}

export function generateMetadata({ params }: ProjectsPageProps): Metadata {
  const locale = getAppLocale(params.locale)
  const seoCopy = getProjectsPageSeoCopy(locale)

  return buildPageMetadata({
    locale,
    pathname: '/projects',
    title: seoCopy.title,
    description: seoCopy.description,
    keywords: seoCopy.keywords,
  })
}

export function generateStaticParams() {
  return appLocales.map(locale => ({ locale }))
}

function getProjectsStructuredData(locale: AppLocale) {
  const pageUrl = getLocalizedUrl(locale, '/projects')
  const works = getAllProjects()
  const seoCopy = getProjectsPageSeoCopy(locale)

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${pageUrl}#collection`,
        url: pageUrl,
        name: seoCopy.title,
        description: seoCopy.description,
      },
      {
        '@type': 'ItemList',
        '@id': `${pageUrl}#items`,
        itemListElement: works.map((work, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: work.title,
          description: work.description,
          url: `${pageUrl}/${work.slug ?? work.key}`,
        })),
      },
    ],
  }
}

export default function ProjectsPage({ params }: ProjectsPageProps) {
  if (!isAppLocale(params.locale)) {
    notFound()
  }

  const works = getAllProjects()

  return (
    <>
      <StructuredData data={getProjectsStructuredData('zh')} />
      <CreativeSubpageNav active='projects' />

      <section className='relative pt-28 pb-16 md:pt-36 md:pb-20 px-6 md:px-10 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-purple-900/60 via-purple-800/30 to-transparent' />
        <div className='absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600 rounded-full blur-[150px] opacity-20 animate-pulse' />
        <div className='relative z-10 max-w-7xl mx-auto text-center'>
          <h1 className='text-5xl md:text-7xl font-black tracking-tighter mb-6'>{pageCopy.title}</h1>
          <p className='text-lg md:text-xl opacity-60 max-w-2xl mx-auto'>{pageCopy.description}</p>
        </div>
      </section>

      <section className='py-16 md:py-20 px-6 md:px-10'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-24 md:gap-y-32'>
            {works.map((project, index) => (
              <div key={project.key} className={`project-card reveal-on-scroll group ${index % 2 === 1 ? 'md:translate-y-24 delay-200' : ''}`}>
                <div className='relative rounded-3xl overflow-hidden glass p-4 transition-all duration-500 group-hover:shadow-[0_30px_60px_rgba(124,58,237,0.18)]'>
                  <div className='aspect-video rounded-2xl overflow-hidden'>
                    <Image src={project.images[0]} alt={project.imageAlt} width={900} height={520} className='w-full h-full object-cover transition duration-500 group-hover:scale-105' />
                  </div>
                  <div className='mt-6 md:mt-8 px-4'>
                    <div className='flex flex-wrap gap-2 mb-4'>
                      {project.stack.slice(0, 2).map(item => (
                        <span key={item} className='px-4 py-1 text-xs font-bold rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30'>
                          {item}
                        </span>
                      ))}
                    </div>
                    <h2 className='text-xl md:text-2xl font-bold mb-2'>{project.title}</h2>
                    <p className='text-sm md:text-base opacity-60 mb-6'>{project.description}</p>
                    <Link href={`/projects/${project.slug ?? project.key}`} className='inline-flex items-center gap-2 text-purple-400 font-bold group-hover:gap-4 transition-all'>
                      探索详情 <ArrowRight className='h-4 w-4' />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='mt-28 text-center'>
            <Link className='inline-flex items-center gap-2 text-purple-400 font-bold hover:gap-4 transition-all text-lg' href='/'>
              <ArrowLeft className='h-5 w-5' /> 返回首页精选
            </Link>
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
