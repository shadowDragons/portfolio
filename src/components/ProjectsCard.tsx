import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import FramerWrapper from './animation/FramerWrapper'
import { ArrowUpRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import Image from 'next/image'

interface projectcardprops {
  value: any
  num: number
}

const ProjectCards: React.FC<projectcardprops> = ({ value, num }) => {
  const t = useTranslations('Projects')

  const renderTags = () => {
    if (!value.tags || value.tags.length === 0) {
      return null
    }

    return (
      <div className='flex mt-2 justify-center gap-2'>
        {value.tags.map((itm: string, indx: number) => (
          <span
            className={`inline-flex items-center gap-x-1.5 py-1 px-2 rounded-full text-xs font-medium ${
              (itm === 'Nextjs' && 'bg-teal-100 text-teal-800') ||
              (itm === 'Freelancing' && 'bg-yellow-100 text-yellow-800') ||
              (itm === 'Shadcn Ui' && 'bg-blue-100 text-blue-800') ||
              (itm === 'Typescript' && 'bg-red-100 text-red-800') ||
              'bg-gray-100 text-gray-800'
            }`}
            key={indx}
          >
            {itm}
          </span>
        ))}
      </div>
    )
  }

  return (
    <FramerWrapper className='w-full max-w-[500px] mx-auto' y={0} scale={0.8} delay={num / 4} duration={0.15}>
      <Card className='w-full h-full'>
        <CardHeader>
          <CardTitle className='text-lg sm:text-xl'>{value.title}</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <Image src={value.image} alt={value.title} layout='responsive' width={300} height={200} className='rounded-md' />
          <p className='text-sm sm:text-base font-poppins'>{value.description}</p>
          {renderTags()}
        </CardContent>
        <CardFooter className='flex justify-center'>
          <Link href={value.link} target='blank' className={cn(buttonVariants({ variant: 'default', size: 'sm' }), 'flex items-center')}>
            {t('visit')} <ArrowUpRight className='h-5 w-5 ml-1' />
          </Link>
        </CardFooter>
      </Card>
    </FramerWrapper>
  )
}

export default ProjectCards
