import Heading from './Heading'
import ProjectCards from './ProjectsCard'
import FramerWrapper from './animation/FramerWrapper'
import { useTranslations } from 'next-intl'

const Projects = () => {
  const t = useTranslations('Projects')

  const projects = [
    {
      title: t('githubseek.title'),
      description: t('githubseek.description'),
      image: 'https://githubseek.xyz/og.png',
      tags: ['Nextjs', 'Tailwindcss', 'Shadcn Ui'],
      link: 'https://githubseek.xyz',
    },
    {
      title: t('asst-ai.title'),
      description: t('asst-ai.description'),
      image: 'https://asstai.app/opengraph-image.png',
      tags: ['Nextjs', 'Tailwindcss', 'Shadcn Ui'],
      link: 'https://asstai.app',
    },
    {
      title: t('image-generator.title'),
      description: t('image-generator.description'),
      image: 'https://image-generator.tool.vin/opengraph-image.png',
      tags: ['Nextjs', 'Tailwindcss', 'Shadcn Ui'],
      link: 'https://image-generator.tool.vin/',
    },
    {
      title: t('text2image.title'),
      description: t('text2image.description'),
      image: 'https://text-image.tool.vin/og.png',
      tags: ['Nextjs', 'Tailwindcss', 'Shadcn Ui'],
      link: 'https://text-image.tool.vin',
    },
    {
      title: t('tool-site.title'),
      description: t('tool-site.description'),
      image: '/tool-site-og-image.png',
      link: 'https://tool.directory.cab/',
    },
    {
      title: t('online-tool.title'),
      description: t('online-tool.description'),
      image: '/online-tool-og-image.png',
      link: 'https://online.tool.vin',
    },
    {
      title: t('spongebob-meme.title'),
      description: t('spongebob-meme.description'),
      image: 'https://spongebob.meme.vin/opengraph-image.png',
      tags: ['Nextjs', 'Tailwindcss', 'Canvas'],
      link: 'https://spongebob.meme.vin',
    },
  ]

  return (
    <section id='projects' className='w-full py-10 scroll-mt-28 mt-14'>
      <FramerWrapper y={50} x={0}>
        <Heading>{t('heading')}</Heading>
        <div className='w-full mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8'>
          {projects.map((project, index) => (
            <ProjectCards key={index} value={project} num={index} />
          ))}
        </div>
      </FramerWrapper>
    </section>
  )
}

export default Projects
