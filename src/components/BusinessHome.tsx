import Image from 'next/image'
import { ArrowRight, Briefcase, Cpu, FileText, Mail, MapPin, MessageCircle, Phone, Workflow } from 'lucide-react'
import { Link } from '@/i18n/routing'
import ProjectsShowcase from '@/components/business-home/ProjectsShowcase'
import { getSelectedProjects, portfolioProfile } from '@/lib/portfolio-content'

type BusinessHomeProps = {
  locale: string
}

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className='max-w-3xl space-y-4'>
      <p className='text-xs font-semibold uppercase tracking-[0.24em] text-[#9a6236] dark:text-[#f1a15b]'>{eyebrow}</p>
      <h2 className='font-rubik text-[32px] leading-[1.06] text-[#111] sm:text-[48px] dark:text-white'>{title}</h2>
      <p className='text-[15px] leading-8 text-[#665a4e] dark:text-white/64'>{description}</p>
    </div>
  )
}

export default function BusinessHome({ locale }: BusinessHomeProps) {
  const portraitAlt = locale === 'zh' ? '钟俊滨头像' : 'Junbin Zhong portrait'
  const selectedProjects = getSelectedProjects()
  const { stats, focusAreas, capabilities, contact, blogTopics } = portfolioProfile

  return (
    <div className='mx-auto flex w-full max-w-[1260px] flex-col gap-24 pb-16 pt-4 lg:gap-28'>
      <section className='relative overflow-hidden rounded-[40px] border border-black/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(247,234,219,0.94)_46%,rgba(255,255,255,0.9))] px-6 py-10 shadow-[0_30px_100px_-70px_rgba(0,0,0,0.5)] dark:border-white/8 dark:bg-[linear-gradient(135deg,rgba(19,19,19,0.96),rgba(31,23,18,0.96)_48%,rgba(12,12,12,0.96))] sm:px-8 sm:py-12 lg:px-12 lg:py-14'>
        <div className='absolute left-0 top-0 h-52 w-52 rounded-full bg-[#f0a05a]/22 blur-[100px] dark:bg-[#f0a05a]/24' />
        <div className='absolute bottom-0 right-0 h-64 w-64 rounded-full bg-black/10 blur-[120px] dark:bg-white/8' />

        <div className='relative grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center'>
          <div className='space-y-7'>
            <div className='inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/72 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#7f5435] shadow-[0_10px_30px_-20px_rgba(0,0,0,0.4)] dark:border-white/10 dark:bg-white/6 dark:text-[#f1a15b]'>
              <Workflow className='h-3.5 w-3.5' />
              Personal Full-Stack Portfolio
            </div>

            <div className='space-y-4'>
              <p className='text-sm uppercase tracking-[0.3em] text-[#7b6858] dark:text-white/48'>{portfolioProfile.title}</p>
              <h1 className='font-rubik text-[42px] leading-[0.96] text-[#111] sm:text-[64px] lg:text-[76px] dark:text-white'>{portfolioProfile.name}</h1>
              <h2 className='max-w-4xl font-rubik text-[28px] leading-[1.08] text-[#a25d27] sm:text-[40px] dark:text-[#f3a35d]'>{portfolioProfile.heroTitle}</h2>
              <p className='max-w-3xl text-[16px] leading-8 text-[#5f554b] dark:text-white/66'>{portfolioProfile.heroDescription}</p>
            </div>

            <div className='flex flex-wrap gap-3'>
              <Link href='/projects' className='inline-flex items-center gap-2 rounded-full bg-[#111] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#262626] dark:bg-[#f1a15b] dark:text-[#111] dark:hover:bg-[#f4b06f]'>
                查看全部项目
                <ArrowRight className='h-4 w-4' />
              </Link>
              <Link href='/blog' className='inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/76 px-6 py-3 text-sm font-semibold text-[#382c22] transition hover:border-[#d49b6b] hover:bg-white dark:border-white/10 dark:bg-white/6 dark:text-white dark:hover:border-[#f0a15a] dark:hover:bg-white/8'>
                技术博客
                <FileText className='h-4 w-4' />
              </Link>
            </div>

            <div className='grid gap-3 sm:grid-cols-2 xl:grid-cols-4'>
              {stats.map(item => (
                <div key={item.label} className='rounded-[24px] border border-black/8 bg-white/74 p-4 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.35)] dark:border-white/8 dark:bg-white/6 dark:shadow-none'>
                  <p className='font-rubik text-[24px] text-[#111] dark:text-white'>{item.value}</p>
                  <p className='mt-2 text-sm leading-6 text-[#665a4e] dark:text-white/58'>{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='relative mx-auto w-full max-w-[520px]'>
            <div className='absolute -left-4 top-8 hidden rounded-3xl border border-black/8 bg-white/88 px-4 py-3 text-sm font-medium text-[#4f3d2f] shadow-[0_24px_40px_-30px_rgba(0,0,0,0.35)] dark:border-white/10 dark:bg-white/6 dark:text-white/72 lg:block'>
              Java / PHP / Python
            </div>
            <div className='absolute -right-2 top-24 hidden rounded-3xl border border-black/8 bg-white/88 px-4 py-3 text-sm font-medium text-[#4f3d2f] shadow-[0_24px_40px_-30px_rgba(0,0,0,0.35)] dark:border-white/10 dark:bg-white/6 dark:text-white/72 lg:block'>
              ERP / OA / RAG / Agent
            </div>
            <div className='absolute bottom-10 left-0 hidden rounded-3xl border border-black/8 bg-white/88 px-4 py-3 text-sm font-medium text-[#4f3d2f] shadow-[0_24px_40px_-30px_rgba(0,0,0,0.35)] dark:border-white/10 dark:bg-white/6 dark:text-white/72 lg:block'>
              React / Vue / Next.js
            </div>

            <div className='relative overflow-hidden rounded-[36px] border border-black/8 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.82),rgba(233,214,195,0.94))] p-4 shadow-[0_32px_80px_-40px_rgba(0,0,0,0.45)] dark:border-white/10 dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),rgba(31,24,20,0.94))]'>
              <div className='absolute inset-x-10 bottom-6 h-12 rounded-full bg-black/16 blur-2xl dark:bg-black/40' />
              <div className='relative rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0.74),rgba(255,255,255,0.24))] p-4 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]'>
                <div className='absolute inset-x-8 top-4 h-24 rounded-full bg-[#f0a05a]/16 blur-3xl dark:bg-[#f0a05a]/18' />
                <Image src={portfolioProfile.portraitPrimary} alt={portraitAlt} width={900} height={1350} priority className='relative mx-auto h-auto w-full max-w-[420px] object-contain' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='grid gap-6 lg:grid-cols-[0.95fr_1.05fr]'>
        <div className='rounded-[32px] border border-black/8 bg-white/76 p-7 shadow-[0_28px_70px_-50px_rgba(0,0,0,0.35)] dark:border-white/8 dark:bg-white/[0.04] dark:shadow-none sm:p-8'>
          <SectionTitle eyebrow='About' title='个人开发，不是缩小版工作室。' description='我不再用“工作室能力清单”讲自己，而是把重心放在真实可交付的经验上：复杂业务系统、AI 工程落地、前后端一体交付。' />
          <div className='mt-8 space-y-4'>
            {focusAreas.map(item => (
              <div key={item.title} className='rounded-[24px] border border-black/8 bg-[#f9f2eb] p-5 dark:border-white/8 dark:bg-white/5'>
                <p className='font-rubik text-[21px] text-[#111] dark:text-white'>{item.title}</p>
                <p className='mt-2 text-sm leading-7 text-[#665a4e] dark:text-white/62'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='grid gap-4'>
          {capabilities.map((item, index) => {
            const Icon = index === 0 ? Briefcase : index === 1 ? Cpu : Workflow

            return (
              <div key={item.title} className='rounded-[30px] border border-black/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.86),rgba(247,234,219,0.86))] p-6 shadow-[0_28px_70px_-54px_rgba(0,0,0,0.34)] dark:border-white/8 dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] dark:shadow-none sm:p-7'>
                <div className='flex items-start gap-4'>
                  <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#111] text-white dark:bg-[#f1a15b] dark:text-[#111]'>
                    <Icon className='h-5 w-5' />
                  </div>
                  <div>
                    <h3 className='font-rubik text-[24px] text-[#111] dark:text-white'>{item.title}</h3>
                    <p className='mt-3 text-sm leading-7 text-[#665a4e] dark:text-white/62'>{item.body}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section id='projects' className='space-y-8'>
        <div className='flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between'>
          <SectionTitle eyebrow='Selected Work' title='首页只放精选项目。' description='这里先展示最能代表我当前能力边界的一组项目。完整归档放到项目页，避免首页变成截图仓库。' />
          <Link href='/projects' className='inline-flex items-center gap-2 text-sm font-semibold text-[#8e5d36] transition hover:text-[#b96d2b] dark:text-[#f1a15b] dark:hover:text-[#f5b576]'>
            打开完整项目归档
            <ArrowRight className='h-4 w-4' />
          </Link>
        </div>

        <ProjectsShowcase
          works={selectedProjects}
          layout='marquee'
          labels={{
            viewImages: '查看截图',
            openLink: '打开链接',
            stackLabel: '技术栈',
            highlightsLabel: '关键亮点',
            lightboxHint: 'Esc 关闭，方向键切换图片',
            loadingImage: '图片加载中...',
          }}
        />
      </section>

      <section className='grid gap-6 lg:grid-cols-[1.05fr_0.95fr]'>
        <div className='rounded-[34px] border border-black/8 bg-[#111] p-7 text-white shadow-[0_30px_80px_-58px_rgba(0,0,0,0.65)] dark:border-white/8 sm:p-8'>
          <p className='text-xs font-semibold uppercase tracking-[0.24em] text-white/46'>Blog</p>
          <h2 className='mt-4 font-rubik text-[32px] leading-[1.06] sm:text-[46px]'>博客保留，但只写技术文章。</h2>
          <p className='mt-4 max-w-3xl text-[15px] leading-8 text-white/68'>
            旧站那些偏宣传、偏获客的内容已经不再适合这个站点定位。博客会保留，用来沉淀真正有价值的技术文章、系统拆解和工程实践。
          </p>
          <div className='mt-8 grid gap-3 sm:grid-cols-3'>
            {blogTopics.map(topic => (
              <div key={topic} className='rounded-[22px] border border-white/10 bg-white/6 p-4 text-sm leading-6 text-white/78'>
                {topic}
              </div>
            ))}
          </div>
          <Link href='/blog' className='mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#111] transition hover:bg-[#f1f1f1]'>
            进入博客页
            <ArrowRight className='h-4 w-4' />
          </Link>
        </div>

        <div id='contact' className='rounded-[34px] border border-black/8 bg-white/76 p-7 shadow-[0_28px_70px_-50px_rgba(0,0,0,0.35)] dark:border-white/8 dark:bg-white/[0.04] dark:shadow-none sm:p-8'>
          <p className='text-xs font-semibold uppercase tracking-[0.24em] text-[#9a6236] dark:text-[#f1a15b]'>Contact</p>
          <h2 className='mt-4 font-rubik text-[32px] leading-[1.06] text-[#111] sm:text-[44px] dark:text-white'>联系方式</h2>
          <p className='mt-4 text-[15px] leading-8 text-[#665a4e] dark:text-white/64'>
            如果你要聊的是企业系统、AI 应用或复杂后台项目，直接发我微信或邮件会更高效。这个站现在服务于个人开发者定位，所以沟通路径也尽量直接。
          </p>

          <div className='mt-8 grid gap-3'>
            <a href={`mailto:${contact.email}`} className='flex items-center justify-between rounded-[22px] border border-black/8 bg-[#f9f2eb] px-5 py-4 text-sm text-[#3e3227] transition hover:border-[#d49b6b] dark:border-white/8 dark:bg-white/5 dark:text-white/76'>
              <span className='inline-flex items-center gap-3'>
                <Mail className='h-4 w-4' />
                邮箱
              </span>
              <span>{contact.email}</span>
            </a>
            <div className='flex items-center justify-between rounded-[22px] border border-black/8 bg-[#f9f2eb] px-5 py-4 text-sm text-[#3e3227] dark:border-white/8 dark:bg-white/5 dark:text-white/76'>
              <span className='inline-flex items-center gap-3'>
                <MessageCircle className='h-4 w-4' />
                微信
              </span>
              <span>{contact.wechat}</span>
            </div>
            <div className='flex items-center justify-between rounded-[22px] border border-black/8 bg-[#f9f2eb] px-5 py-4 text-sm text-[#3e3227] dark:border-white/8 dark:bg-white/5 dark:text-white/76'>
              <span className='inline-flex items-center gap-3'>
                <Phone className='h-4 w-4' />
                手机
              </span>
              <span>{contact.phone}</span>
            </div>
            <div className='flex items-center justify-between rounded-[22px] border border-black/8 bg-[#f9f2eb] px-5 py-4 text-sm text-[#3e3227] dark:border-white/8 dark:bg-white/5 dark:text-white/76'>
              <span className='inline-flex items-center gap-3'>
                <MapPin className='h-4 w-4' />
                所在地
              </span>
              <span>{portfolioProfile.location}</span>
            </div>
          </div>

          <div className='mt-6 flex flex-wrap gap-3 text-sm font-medium'>
            <a href={contact.github} target='_blank' rel='noreferrer' className='rounded-full border border-black/8 px-4 py-2 text-[#3e3227] transition hover:border-[#d49b6b] dark:border-white/8 dark:text-white/76 dark:hover:border-[#f0a15a]'>
              GitHub
            </a>
            <a href={contact.x} target='_blank' rel='noreferrer' className='rounded-full border border-black/8 px-4 py-2 text-[#3e3227] transition hover:border-[#d49b6b] dark:border-white/8 dark:text-white/76 dark:hover:border-[#f0a15a]'>
              X / Twitter
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
