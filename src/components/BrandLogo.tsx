import Image from 'next/image'
import { cn } from '@/lib/utils'

type BrandLogoProps = {
  label: string
  className?: string
  priority?: boolean
}

export default function BrandLogo({ label, className, priority = false }: BrandLogoProps) {
  return (
    <Image
      src='/logo.png'
      alt={label}
      width={2693}
      height={1557}
      priority={priority}
      sizes='(max-width: 640px) 92px, (max-width: 1024px) 104px, 112px'
      className={cn('h-[42px] w-auto sm:h-[48px] lg:h-[52px]', className)}
    />
  )
}
