import Heading from './Heading'
import ProjectCards from './ProjectsCard'
import FramerWrapper from './animation/FramerWrapper'
import { useTranslations } from 'next-intl'

const Projects = () => {
  const t = useTranslations('Projects')

  const projects = [
    {
      title: t('oneshotai.title'),
      description: t('oneshotai.description'),
      image: 'https://oneshotai.tool.vin/og.png',
      tags: ['React Native', 'Expo', 'Tailwindcss'],
      link: 'https://oneshotai.tool.vin',
    },
    {
      title: t('rapidle.title'),
      description: t('rapidle.description'),
      image: '/rapidle.png',
      tags: ['Electron', 'Typescript'],
      link: 'https://github.com/shadowDragons/rapidle',
    },
    {
      title: t('nextIdea.title'),
      description: t('nextIdea.description'),
      image: 'https://idea.tool.vin/og.png',
      tags: ['React', 'Nextjs', 'Typescript', 'n8n'],
      link: 'https://idea.tool.vin',
    },
    {
      title: t('n8n-workflow-directory.title'),
      description: t('n8n-workflow-directory.description'),
      image: 'https://n8n.directory.cab/og.png',
      tags: ['React', 'Tailwindcss', 'Nextjs'],
      link: 'https://n8n.directory.cab',
    },
    {
      title: t('promptpal.title'),
      description: t('githubseek.description'),
      image: 'https://promptpal.tool.vin/og.png',
      tags: ['Plasmo', 'React', 'Tailwindcss', 'Nextjs'],
      link: 'https://promptpal.tool.vin',
    },
    {
      title: t('githubseek.title'),
      description: t('githubseek.description'),
      image: 'https://githubseek.xyz/og.png',
      tags: ['Nextjs', 'Tailwindcss', 'Shadcn Ui'],
      link: 'https://githubseek.xyz',
    }
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
