import React from 'react'
import { useTranslations } from 'next-intl'

function TextRotator() {
  const t = useTranslations('TextRotator')

  return (
    <div className='py-4 rounded-md flex flex-col justify-center  max-lg:w-full'>
      <div className='text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-gray-700 bg-gradient-to-r from-slate-200/60 to-50% to-slate-200 '>
        {t('intro')} &{' '}
        <span className='text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden'>
          <ul className='block animate-text-slide-6 text-left leading-tight [&_li]:block'>
            {t.raw('rotatingTitles').map((title: string, index: number) => (
              <li key={index} className='text-[#2f7df4]'>
                {title}
              </li>
            ))}
            <li aria-hidden='true' className='text-[#2f7df4]'>
              {t.raw('rotatingTitles')[0]}
            </li>
          </ul>
        </span>
      </div>
    </div>
  )
}

export default TextRotator
