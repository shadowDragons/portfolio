import { Link } from '@/i18n/routing'

export default function NotFound() {
  return (
    <section className='flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center'>
      <h1 className='text-6xl font-black'>404</h1>
      <Link href='/' className='font-bold text-purple-400'>
        返回首页
      </Link>
    </section>
  )
}
