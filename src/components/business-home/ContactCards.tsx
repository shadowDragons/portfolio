import { ExternalLink, Globe, Mail, MessageSquare, Phone } from 'lucide-react'
import type { ReactNode } from 'react'
import type { ContactIconKey, HomeContactCard } from '@/components/business-home/types'
import DeferredContactCards from '@/components/business-home/DeferredContactCards'

const iconMap = {
  messageSquare: MessageSquare,
  phone: Phone,
  mail: Mail,
  globe: Globe,
} satisfies Record<ContactIconKey, typeof MessageSquare>

function StaticCardFrame({ children }: { children: ReactNode }) {
  return <div className='group flex w-full items-center justify-between gap-4 rounded-2xl border border-[#eee] bg-white p-4 text-left sm:p-5'>{children}</div>
}

function StaticValueCard({ icon: Icon, label, value }: { icon: typeof MessageSquare; label: string; value: string }) {
  return (
    <StaticCardFrame>
      <div className='flex items-center gap-4'>
        <div className='text-accent-accessible flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f5ede3]'>
          <Icon className='h-5 w-5' />
        </div>
        <div>
          <p className='text-muted-accessible text-xs'>{label}</p>
          <p className='font-rubik text-[17px] text-[#111]'>{value}</p>
        </div>
      </div>
    </StaticCardFrame>
  )
}

function StaticLinkCard({ icon: Icon, label, value, href }: { icon: typeof MessageSquare; label: string; value: string; href: string }) {
  const isExternal = href.startsWith('http')

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className='group flex w-full items-center justify-between gap-4 rounded-2xl border border-[#eee] bg-white p-4 text-left transition-all duration-300 hover:border-[#e8ddd0] hover:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.06)] sm:p-5'
    >
      <div className='flex items-center gap-4'>
        <div className='text-accent-accessible flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f5ede3] transition-colors group-hover:bg-[#f0e4d6]'>
          <Icon className='h-5 w-5' />
        </div>
        <div>
          <p className='text-muted-accessible text-xs'>{label}</p>
          <p className='font-rubik text-[17px] text-[#111] transition-colors group-hover:text-accent-accessible'>{value}</p>
        </div>
      </div>
      <ExternalLink className='text-muted-strong h-4 w-4' />
    </a>
  )
}

function ContactCardsStatic({ cards }: { cards: HomeContactCard[] }) {
  return (
    <>
      {cards.map(card => {
        const Icon = iconMap[card.icon]

        return card.type === 'copy' ? (
          <StaticValueCard key={`${card.label}-${card.value}`} icon={Icon} label={card.label} value={card.value} />
        ) : (
          <StaticLinkCard key={`${card.label}-${card.value}`} icon={Icon} label={card.label} value={card.value} href={card.href} />
        )
      })}
    </>
  )
}

type ContactCardsProps = {
  cards: HomeContactCard[]
}

export default function ContactCards({ cards }: ContactCardsProps) {
  return (
    <DeferredContactCards cards={cards} fallback={<ContactCardsStatic cards={cards} />} />
  )
}
