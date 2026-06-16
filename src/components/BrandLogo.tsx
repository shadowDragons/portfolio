import { cn } from '@/lib/utils'

type BrandLogoProps = {
  label: string
  className?: string
}

export default function BrandLogo({ label, className }: BrandLogoProps) {
  return (
    <div className={cn('flex items-center gap-3', className)} aria-label={label}>
      <div className='flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#1f1f1f,#494949)] text-sm font-semibold tracking-[0.14em] text-white shadow-[0_12px_24px_-16px_rgba(0,0,0,0.55)] dark:bg-[linear-gradient(135deg,#f3f3f3,#cfcfcf)] dark:text-[#111]'>
        JZ
      </div>
      <div className='leading-none'>
        <div className='font-rubik text-[15px] text-[#111] dark:text-white'>钟俊滨</div>
        <div className='mt-1 text-[11px] uppercase tracking-[0.26em] text-[#726554] dark:text-white/58'>Full-Stack Developer</div>
      </div>
    </div>
  )
}
