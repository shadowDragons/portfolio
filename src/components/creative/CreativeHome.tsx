'use client'

import Image from 'next/image'
import { ArrowRight, BookOpen, Database, Github, Linkedin, Menu, MessageCircle, Moon, ServerCog, SunMedium, Twitter, Workflow } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from '@/i18n/routing'
import { blogPosts, getSelectedProjects, portfolioProfile, skillCards } from '@/lib/portfolio-content'

function SectionHeading({ eyebrow, title, description, centered = false }: { eyebrow?: string; title: string; description?: string; centered?: boolean }) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? <p className='mb-4 text-xs font-black uppercase tracking-[0.24em] text-orange-400'>{eyebrow}</p> : null}
      <h2 className='text-4xl font-black tracking-tight md:text-5xl'>{title}</h2>
      {description ? <p className='mt-4 text-base leading-8 opacity-60'>{description}</p> : null}
      <div className={centered ? 'mx-auto mt-6 h-1 w-20 bg-gradient-to-r from-orange-500 to-pink-500' : 'mt-6 h-1 w-20 bg-gradient-to-r from-orange-500 to-pink-500'} />
    </div>
  )
}

function SkillIcon({ icon }: { icon: string }) {
  return (
    <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 text-2xl font-black text-white shadow-[0_0_34px_rgba(249,115,22,0.35)]'>
      {icon}
    </div>
  )
}

type ThemeMode = 'light' | 'dark'

function applyTheme(nextTheme: ThemeMode) {
  document.documentElement.classList.toggle('dark', nextTheme === 'dark')
  document.documentElement.style.colorScheme = nextTheme
  window.localStorage.setItem('theme', nextTheme)
}

function HomeThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>('dark')

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme')
    const nextTheme: ThemeMode = savedTheme === 'light' ? 'light' : 'dark'
    setTheme(nextTheme)
    applyTheme(nextTheme)
  }, [])

  const toggle = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    applyTheme(nextTheme)
  }

  return (
    <button type='button' onClick={toggle} className='p-2 rounded-full glass hover:scale-110 transition-transform' id='theme-toggle' aria-label='切换明暗主题'>
      {theme === 'dark' ? <SunMedium className='h-5 w-5' /> : <Moon className='h-5 w-5' />}
    </button>
  )
}

function HomeNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobileMenu = () => setOpen(false)

  return (
    <>
      <div id='mobile-overlay' className={open ? 'open' : ''} onClick={closeMobileMenu} />
      <div className={`glass ${open ? 'open' : ''}`} id='mobile-menu'>
        <a className='text-2xl font-bold mb-10 text-orange-400' href='#hero' onClick={closeMobileMenu}>
          JUNBIN.DEV
        </a>
        <a className='text-lg font-medium py-3 border-b border-white/10 hover:text-orange-400 transition-colors' href='#hero' onClick={closeMobileMenu}>
          首页
        </a>
        <a className='text-lg font-medium py-3 border-b border-white/10 hover:text-orange-400 transition-colors' href='#about' onClick={closeMobileMenu}>
          关于
        </a>
        <a className='text-lg font-medium py-3 border-b border-white/10 hover:text-orange-400 transition-colors' href='#skills' onClick={closeMobileMenu}>
          技能
        </a>
        <a className='text-lg font-medium py-3 border-b border-white/10 hover:text-orange-400 transition-colors' href='#projects' onClick={closeMobileMenu}>
          作品
        </a>
        <Link className='text-lg font-medium py-3 border-b border-white/10 hover:text-orange-400 transition-colors' href='/blog' onClick={closeMobileMenu}>
          博客
        </Link>
        <a className='text-lg font-medium py-3 border-b border-white/10 hover:text-orange-400 transition-colors' href='#contact' onClick={closeMobileMenu}>
          联系
        </a>
      </div>

      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-10 ${scrolled ? 'glass py-4' : 'py-6'}`} id='navbar'>
        <div className='max-w-7xl mx-auto flex justify-between items-center'>
          <div className='text-2xl font-black tracking-tighter'>
            <a href='#hero'>
              <span className='text-gradient'>JUNBIN.DEV</span>
            </a>
          </div>
          <div className='hidden md:flex space-x-10 items-center'>
            <a className='nav-link font-medium' href='#hero'>
              首页
            </a>
            <a className='nav-link font-medium' href='#about'>
              关于
            </a>
            <a className='nav-link font-medium' href='#skills'>
              技能
            </a>
            <a className='nav-link font-medium' href='#projects'>
              作品
            </a>
            <Link className='nav-link font-medium' href='/blog'>
              博客
            </Link>
            <a className='nav-link font-medium' href='#contact'>
              联系
            </a>
            <HomeThemeToggle />
          </div>
          <button className='md:hidden glass p-2 rounded-lg' id='mobile-menu-btn' type='button' onClick={() => setOpen(value => !value)} aria-label='打开菜单'>
            <Menu className='h-6 w-6' />
          </button>
        </div>
      </nav>
    </>
  )
}

function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const ctx = canvas.getContext('2d')
    if (!ctx) {
      return
    }

    const mouse = { x: -9999, y: -9999 }
    const colors = ['#f97316', '#fb923c', '#ec4899', '#d946ef', '#a855f7']
    const particleCount = 100
    const particles = Array.from({ length: particleCount }, () => ({
      x: 0,
      y: 0,
      size: 1,
      speedX: 0,
      speedY: 0,
      color: colors[0],
      init() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 1
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5
        this.color = colors[Math.floor(Math.random() * colors.length)]
      },
    }))

    let animationFrame = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles.forEach(particle => particle.init())
    }

    const onMouseMove = (event: MouseEvent) => {
      mouse.x = event.x
      mouse.y = event.y
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i]
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x > canvas.width) particle.x = 0
        else if (particle.x < 0) particle.x = canvas.width
        if (particle.y > canvas.height) particle.y = 0
        else if (particle.y < 0) particle.y = canvas.height

        const mouseDx = mouse.x - particle.x
        const mouseDy = mouse.y - particle.y
        const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy)
        if (mouseDistance < 150) {
          particle.x -= mouseDx * 0.02
          particle.y -= mouseDy * 0.02
        }

        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        for (let j = i; j < particles.length; j += 1) {
          const dx = particle.x - particles[j].x
          const dy = particle.y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 100) {
            const alpha = 1 - distance / 100
            ctx.strokeStyle = `rgba(249, 115, 22, ${alpha * 0.5})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      animationFrame = requestAnimationFrame(animateParticles)
    }

    particles.forEach(particle => particle.init())
    resizeCanvas()
    animateParticles()
    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', onMouseMove)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} className='absolute inset-0 z-0' id='particle-canvas' />
}

export default function CreativeHome() {
  const selectedProjects = getSelectedProjects()

  return (
    <>
      <HomeNav />
      <section className='relative min-h-screen flex items-center pt-20 overflow-hidden' id='hero'>
        <HeroParticles />
        <div className='relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10' id='about'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[70vh]'>
            <div className='reveal-on-scroll'>
              <div className='inline-block px-4 py-2 rounded-full glass text-xs md:text-sm font-bold tracking-[0.2em] text-orange-400 mb-6 border border-orange-500/20'>✦ 个人全栈开发者</div>
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tighter mb-4'>
                <span className='block text-white'>你好，我是 阿滨</span>
                <span className='text-gradient-warm block mt-2'>
                  用代码编织
                  <br className='md:hidden' />
                  数字系统
                </span>
              </h1>
              <p className='text-sm md:text-base opacity-60 leading-relaxed mb-8 max-w-xl'>
                13 年企业数字化系统研发经验，长期负责 OA、招聘、考勤、ERP、财务对账、知识库 RAG、智能问数等系统从 0 到 1 建设与持续迭代。
              </p>
              <div className='mb-8 max-w-xl'>
                <h2 className='text-2xl md:text-3xl font-black leading-tight mb-3'>
                  复杂业务驱动
                  <span className='text-orange-400'> 全栈开发</span>
                </h2>
                <p className='text-sm md:text-base opacity-60 leading-relaxed'>
                  我现在以个人开发者身份展示自己的项目和能力，不再使用工作室包装。核心价值是把复杂业务规则、企业流程和 AI 工程能力做成可维护、可交付的系统。
                </p>
              </div>
              <div className='grid grid-cols-3 gap-6 md:gap-8 mb-8 max-w-xl'>
                <div>
                  <div className='text-3xl md:text-4xl font-black text-orange-400 mb-2'>13</div>
                  <div className='text-xs md:text-sm uppercase tracking-widest opacity-50'>年开发经验</div>
                </div>
                <div>
                  <div className='text-3xl md:text-4xl font-black text-pink-500 mb-2'>12+</div>
                  <div className='text-xs md:text-sm uppercase tracking-widest opacity-50'>项目系统</div>
                </div>
                <div>
                  <div className='text-3xl md:text-4xl font-black text-orange-400 mb-2'>AI</div>
                  <div className='text-xs md:text-sm uppercase tracking-widest opacity-50'>Agent 落地</div>
                </div>
              </div>
              <div className='flex flex-col sm:flex-row gap-4 mb-8'>
                <a className='px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-bold hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all transform hover:-translate-y-1 text-center' href='#projects'>
                  查看作品
                </a>
                <a className='px-8 py-4 glass rounded-full font-bold hover:bg-white/10 transition-all border border-white/20 text-center' href='#contact'>
                  联系我
                </a>
              </div>
              <div className='flex gap-4'>
                <a className='w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-orange-500/20 hover:border-orange-500/40 transition-all border border-white/10' href={portfolioProfile.contact.github} target='_blank' rel='noreferrer' title='GitHub'>
                  <Github className='h-5 w-5' />
                </a>
                <a className='w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-orange-500/20 hover:border-orange-500/40 transition-all border border-white/10' href={portfolioProfile.contact.x} target='_blank' rel='noreferrer' title='X'>
                  <Twitter className='h-5 w-5' />
                </a>
                <a className='w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-orange-500/20 hover:border-orange-500/40 transition-all border border-white/10' href={`mailto:${portfolioProfile.contact.email}`} title='Email'>
                  <Linkedin className='h-5 w-5' />
                </a>
                <a className='w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-orange-500/20 hover:border-orange-500/40 transition-all border border-white/10' href='#contact' title='Contact'>
                  <MessageCircle className='h-5 w-5' />
                </a>
              </div>
            </div>

            <div className='flex justify-center items-center relative h-full'>
              <div className='relative'>
                <div className='avatar-ring w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 flex items-center justify-center'>
                  <Image src={portfolioProfile.portraitPrimary} alt='钟俊滨头像' width={640} height={640} priority className='h-full w-full rounded-full object-cover' />
                </div>
                <div className='code-float absolute -top-6 -right-6 text-3xl md:text-4xl font-mono font-bold text-orange-400/30 select-none'>{'{ }'}</div>
                <div className='code-float-2 absolute -bottom-4 -left-8 text-2xl md:text-3xl font-mono font-bold text-pink-400/30 select-none'>&lt;/&gt;</div>
                <div className='absolute top-1/3 -left-12 text-lg md:text-xl font-mono text-fuchsia-400/20 select-none code-float' style={{ animationDelay: '2s' }}>
                  ()
                </div>
                <div className='absolute bottom-1/4 -right-10 text-lg md:text-xl font-mono text-orange-400/20 select-none code-float-2' style={{ animationDelay: '0.5s' }}>
                  [ ]
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-[150px] opacity-15 animate-pulse' />
        <div className='absolute bottom-1/3 left-1/4 w-80 h-80 bg-pink-500 rounded-full blur-[150px] opacity-10 animate-pulse' />
      </section>

      <section id='skills' className='relative z-10 bg-black/5 px-6 py-24 dark:bg-white/5 md:px-10 md:py-32'>
        <div className='mx-auto max-w-7xl'>
          <SectionHeading title='技术栈' description='不是罗列关键词，而是围绕企业系统、AI 工作流、数据检索和前后端交付形成的实战栈。' centered />
          <div className='mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-10'>
            {skillCards.map((skill, index) => (
              <div key={skill.title} className={`flip-card reveal-on-scroll h-64 ${index === 1 ? 'delay-100' : index === 2 ? 'delay-200' : index > 2 ? 'delay-300' : ''}`}>
                <div className='flip-card-inner'>
                  <div className='flip-card-front glass shadow-xl'>
                    <SkillIcon icon={skill.icon} />
                    <h3 className='px-4 text-xl font-black'>{skill.title}</h3>
                  </div>
                  <div className='flip-card-back bg-gradient-to-br from-orange-600 to-pink-500 p-6 text-white'>
                    <svg className='mb-4 h-24 w-24' viewBox='0 0 100 100'>
                      <circle cx='50' cy='50' r='45' fill='none' stroke='rgba(255,255,255,0.2)' strokeWidth='8' />
                      <circle cx='50' cy='50' r='45' fill='none' stroke='white' strokeDasharray='283' strokeDashoffset={283 - (283 * skill.score) / 100} strokeWidth='8' />
                    </svg>
                    <div className='text-2xl font-black'>{skill.score}%</div>
                    <p className='mt-2 text-sm leading-6 opacity-85'>{skill.summary}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id='projects' className='relative z-10 px-6 py-24 md:px-10 md:py-32'>
        <div className='mx-auto max-w-7xl'>
          <SectionHeading title='精选案例' description='首页只展示最能代表当前能力边界的项目，项目页展示全部。' centered />
          <div className='mt-16 grid grid-cols-1 gap-x-12 gap-y-24 md:grid-cols-2 md:gap-y-32 lg:gap-x-20'>
            {selectedProjects.map((project, index) => (
              <div key={project.key} className={`project-card reveal-on-scroll group ${index % 2 === 1 ? 'md:translate-y-24 delay-200' : ''}`}>
                <div className='glass relative overflow-hidden rounded-3xl p-4 transition duration-500 group-hover:shadow-[0_30px_60px_rgba(249,115,22,0.25)]'>
                  <div className='relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-orange-600 to-pink-500'>
                    <div className='project-number text-orange-100/30'>{String(index + 1).padStart(2, '0')}</div>
                    <Image src={project.images[0]} alt={project.imageAlt} width={900} height={520} className='h-full w-full object-cover opacity-60 mix-blend-overlay transition duration-500 group-hover:scale-105' />
                    <div className='absolute inset-0 flex items-center justify-center'>
                      {index % 3 === 0 ? <Workflow className='h-20 w-20 text-white' /> : index % 3 === 1 ? <Database className='h-20 w-20 text-white' /> : <ServerCog className='h-20 w-20 text-white' />}
                    </div>
                  </div>
                  <div className='mt-8 px-4'>
                    <div className='mb-4 flex flex-wrap gap-2'>
                      {project.stack.slice(0, 3).map(item => (
                        <span key={item} className='tech-tag'>
                          {item}
                        </span>
                      ))}
                    </div>
                    <h3 className='mb-2 text-xl font-black md:text-2xl'>{project.title}</h3>
                    <p className='mb-6 text-sm leading-7 opacity-60 md:text-base'>{project.description}</p>
                    <Link href={`/projects/${project.slug ?? project.key}`} className='inline-flex items-center gap-2 font-black text-orange-400 transition-all group-hover:gap-4'>
                      探索详情 <ArrowRight className='h-4 w-4' />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='mt-20 text-center'>
            <Link href='/projects' className='inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-8 py-4 font-black text-white transition hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]'>
              查看全部项目
              <ArrowRight className='h-4 w-4' />
            </Link>
          </div>
        </div>
      </section>

      <section id='blog' className='relative z-10 bg-black/5 px-6 py-24 dark:bg-white/5 md:px-10 md:py-32'>
        <div className='mx-auto max-w-7xl'>
          <SectionHeading title='最新博客' description='博客保留，但从宣传型内容切换为技术教程、系统拆解和工程实践。' centered />
          <div className='mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8'>
            {blogPosts.map((post, index) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className={`blog-card glass group rounded-2xl p-6 hover:shadow-[0_0_40px_rgba(249,115,22,0.15)] md:p-8 reveal-on-scroll ${index === 1 ? 'delay-100' : index === 2 ? 'delay-200' : ''}`}>
                <div className='mb-5 flex flex-wrap items-center gap-3'>
                  <span className='tech-tag'>{post.tag}</span>
                  <span className='text-xs opacity-40'>{post.date}</span>
                </div>
                <h3 className='mb-4 text-lg font-black transition group-hover:text-orange-400 md:text-xl'>{post.title}</h3>
                <p className='text-sm leading-7 opacity-60'>{post.excerpt}</p>
                <div className='mt-6 flex items-center gap-2 font-black text-orange-400 opacity-0 transition duration-300 group-hover:opacity-100'>
                  <span className='text-sm'>阅读更多</span>
                  <ArrowRight className='h-4 w-4' />
                </div>
              </Link>
            ))}
          </div>
          <div className='mt-12 text-center'>
            <Link href='/blog' className='inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-8 py-4 font-black text-white transition hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]'>
              查看全部文章
              <BookOpen className='h-4 w-4' />
            </Link>
          </div>
        </div>
      </section>

      <section className='py-24 md:py-32 px-6 md:px-10' id='contact'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-4xl font-bold mb-16 text-center'>联系我</h2>
          <div className='terminal glass rounded-2xl overflow-hidden shadow-2xl border border-white/10'>
            <div className='bg-black/20 dark:bg-white/10 px-6 py-3 flex items-center justify-between'>
              <div className='flex gap-2'>
                <div className='w-3 h-3 bg-[#ff5f56] rounded-full' />
                <div className='w-3 h-3 bg-[#ffbd2e] rounded-full' />
                <div className='w-3 h-3 bg-[#27c93f] rounded-full' />
              </div>
              <div className='text-xs font-mono opacity-50'>junbin — zsh — 80x24</div>
            </div>
            <div className='p-6 md:p-8 font-mono text-sm md:text-base min-h-[350px] md:min-h-[400px]'>
              <div className='mb-4'>
                <span className='text-[#27c93f]'>➜</span> <span className='text-orange-400'>~</span> <span className='text-white'>whoami</span>
                <div className='mt-1 text-gray-400'>钟俊滨 - 全栈开发工程师 / 个人开发者</div>
              </div>
              <div className='mb-4'>
                <span className='text-[#27c93f]'>➜</span> <span className='text-orange-400'>~</span> <span className='text-white'>contact --details</span>
                <div className='mt-2 space-y-2'>
                  <div className='flex gap-4'>
                    <span className='text-orange-400 w-20'>Email:</span>
                    <a className='hover:underline' href={`mailto:${portfolioProfile.contact.email}`}>
                      {portfolioProfile.contact.email}
                    </a>
                  </div>
                  <div className='flex gap-4'>
                    <span className='text-orange-400 w-20'>Github:</span>
                    <a className='hover:underline' href={portfolioProfile.contact.github} target='_blank' rel='noreferrer'>
                      github.com/shadowDragons
                    </a>
                  </div>
                  <div className='flex gap-4'>
                    <span className='text-orange-400 w-20'>X:</span>
                    <a className='hover:underline' href={portfolioProfile.contact.x} target='_blank' rel='noreferrer'>
                      @Junexus_indie
                    </a>
                  </div>
                  <div className='flex gap-4'>
                    <span className='text-orange-400 w-20'>WeChat:</span>
                    <span>{portfolioProfile.contact.wechat}</span>
                  </div>
                </div>
              </div>
              <div className='mb-4'>
                <span className='text-[#27c93f]'>➜</span> <span className='text-orange-400'>~</span> <span className='text-white'>cat focus.txt</span>
                <div className='mt-2 text-gray-400 leading-8'>企业系统、AI Agent、RAG、Text2SQL、复杂后台、全栈交付。</div>
              </div>
              <div className='flex items-center'>
                <span className='text-[#27c93f]'>➜</span> <span className='text-orange-400'>~</span> <span className='animate-pulse ml-2 w-2 h-5 bg-white' />
              </div>
            </div>
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
