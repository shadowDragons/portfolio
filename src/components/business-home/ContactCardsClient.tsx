'use client'

import { useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import { CheckCircle2, Copy, ExternalLink, Globe, Mail, MessageSquare, Phone } from 'lucide-react'
import type { ContactIconKey, HomeContactCard } from '@/components/business-home/types'

const iconMap: Record<ContactIconKey, LucideIcon> = {
  messageSquare: MessageSquare,
  phone: Phone,
  mail: Mail,
  globe: Globe,
}

function CopyableContactCard({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(value).catch(() => {})
    } else {
      const textArea = document.createElement('textarea')
      textArea.value = value
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()

      try {
        document.execCommand('copy')
      } catch {
        // no-op
      }

      document.body.removeChild(textArea)
    }

    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type='button'
      onClick={handleCopy}
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
      <div className='text-muted-strong transition-colors group-hover:text-accent-accessible'>
        {copied ? <CheckCircle2 className='h-5 w-5 text-green-600' /> : <Copy className='h-5 w-5' />}
      </div>
    </button>
  )
}

function ContactLinkCard({ icon: Icon, label, value, href }: { icon: LucideIcon; label: string; value: string; href: string }) {
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
      <div className='text-muted-strong transition-colors group-hover:text-accent-accessible'>
        <ExternalLink className='h-5 w-5' />
      </div>
    </a>
  )
}

type ContactCardsProps = {
  cards: HomeContactCard[]
}

export default function ContactCards({ cards }: ContactCardsProps) {
  return (
    <>
      {cards.map(card => {
        const Icon = iconMap[card.icon]

        return card.type === 'copy' ? (
          <CopyableContactCard key={`${card.label}-${card.value}`} icon={Icon} label={card.label} value={card.value} />
        ) : (
          <ContactLinkCard key={`${card.label}-${card.value}`} icon={Icon} label={card.label} value={card.value} href={card.href} />
        )
      })}
    </>
  )
}
