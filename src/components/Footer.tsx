import { Link } from '@/i18n/routing'
import { portfolioProfile } from '@/lib/portfolio-content'

export default function Footer() {
  const { contact } = portfolioProfile

  return (
    <footer className='border-t border-black/8 bg-[rgba(248,244,239,0.9)] dark:border-white/8 dark:bg-[rgba(10,10,10,0.88)]'>
      <div className='mx-auto grid w-full max-w-[1260px] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.9fr] lg:px-10'>
        <div className='space-y-4'>
          <p className='font-rubik text-2xl text-[#111] dark:text-white'>钟俊滨</p>
          <p className='max-w-xl text-sm leading-7 text-[#665a4e] dark:text-white/64'>
            聚焦企业系统开发、AI Agent 工程化、知识库 RAG 与全栈交付。现在的网站不再承载工作室营销文案，只展示个人能力、项目归档和技术写作。
          </p>
        </div>

        <div className='space-y-4'>
          <p className='text-xs font-semibold uppercase tracking-[0.24em] text-[#8e5d36] dark:text-[#f1a15b]'>站点</p>
          <div className='grid gap-2 text-sm text-[#3f352c] dark:text-white/76'>
            <Link href='/'>首页</Link>
            <Link href='/projects'>项目归档</Link>
            <Link href='/blog'>技术博客</Link>
          </div>
        </div>

        <div className='space-y-4'>
          <p className='text-xs font-semibold uppercase tracking-[0.24em] text-[#8e5d36] dark:text-[#f1a15b]'>联系</p>
          <div className='grid gap-2 text-sm text-[#3f352c] dark:text-white/76'>
            <a href={`mailto:${contact.email}`}>邮箱：{contact.email}</a>
            <a href={contact.github} target='_blank' rel='noreferrer'>
              GitHub：shadowDragons
            </a>
            <a href={contact.x} target='_blank' rel='noreferrer'>
              X：@Junexus_indie
            </a>
            <p>微信：{contact.wechat}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
