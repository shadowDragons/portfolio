import SocialLinks from '@/components/SocialLinks'
import HeroTexts from '@/components/HeroTexts'
import HeroImage from '@/components/HeroImage'
import FramerWrapper from '@/components/animation/FramerWrapper'
import Projects from '@/components/Projects'
import { ArrowDown } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <section className='min-h-[80vh] w-full flex justify-between items-center relative max-lg:flex-col max-lg:gap-8 max-lg:justify-center'>
        {/* LEFT SIDE */}
        <FramerWrapper className='h-full w-full lg:w-1/2 flex flex-col justify-start gap-4 max-lg:items-center max-lg:justify-center' y={0} x={-100}>
          <HeroTexts />
          <div className='h-fit w-full p-4 flex gap-3 justify-center lg:justify-start max-lg:p-2'>
            <SocialLinks />
          </div>
        </FramerWrapper>

        {/* RIGHT SIDE image */}
        <FramerWrapper className='h-full w-full lg:w-1/2 relative max-lg:hidden' y={0} x={100}>
          <HeroImage />
        </FramerWrapper>

        {/* Scroll Down Button */}
        <Link
          href='#projects'
          className={cn(
            buttonVariants({ variant: 'ghost', size: 'icon' }),
            'absolute bottom-4 animate-bounce max-lg:bottom-4',
            '-translate-x-1/2 lg:left-1/2 lg:-translate-x-1/2'
          )}
          aria-label='Scroll to projects'
        >
          <ArrowDown className='h-6 w-6' />
        </Link>
      </section>

      <Projects />
    </>
  )
}
