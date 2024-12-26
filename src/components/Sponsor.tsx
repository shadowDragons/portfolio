import Heading from './Heading'
import FramerWrapper from './animation/FramerWrapper'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

const Sponsor = () => {
  const t = useTranslations('Sponsor')

  const sponsorLinks = [
    {
      name: 'PayPal',
      image: '/sponsors/paypal.png',
      link: 'https://paypal.me/Junexus007',
    },
  ]

  return (
    <section id='sponsor' className='w-full py-10 scroll-mt-28 mt-14'>
      <FramerWrapper y={50} x={0}>
        <Heading>{t('heading')}</Heading>

        <div className='mt-10 space-y-8'>
          <p className='text-lg text-gray-600 dark:text-gray-300'>{t('description')}</p>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {sponsorLinks.map(sponsor => (
              <Link
                key={sponsor.name}
                href={sponsor.link}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors'
              >
                <Image src={sponsor.image} alt={sponsor.name} width={200} height={60} className='h-12 object-contain' />
              </Link>
            ))}
          </div>

          <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6'>
            <div className='p-6 rounded-lg border border-gray-200 dark:border-gray-700'>
              <h3 className='text-lg font-medium mb-4'>支付宝</h3>
              <Image src='/sponsors/alipay-qr.png' alt='Alipay QR Code' width={200} height={200} className='mx-auto' />
            </div>
            <div className='p-6 rounded-lg border border-gray-200 dark:border-gray-700'>
              <h3 className='text-lg font-medium mb-4'>微信支付</h3>
              <Image src='/sponsors/wechat-qr.png' alt='WeChat Pay QR Code' width={200} height={200} className='mx-auto' />
            </div>
          </div>
        </div>
      </FramerWrapper>
    </section>
  )
}

export default Sponsor
