export type WorkKey =
  | 'asset'
  | 'hr'
  | 'finance'
  | 'erpQueryAgent'
  | 'rag'
  | 'search'
  | 'attendance'
  | 'oa'
  | 'orders'
  | 'workstation'
  | 'digitalHuman'
  | 'recruiting'

export type ShowcaseWork = {
  key: WorkKey
  slug?: string
  category: string
  title: string
  description: string
  details: string
  highlights: string[]
  images: string[]
  stack: string[]
  link?: string
  imageCountLabel: string
  imageAlt: string
}

export type ContactIconKey = 'messageSquare' | 'phone' | 'mail' | 'globe'

export type HomeContactCard =
  | {
      type: 'copy'
      icon: ContactIconKey
      label: string
      value: string
    }
  | {
      type: 'link'
      icon: ContactIconKey
      label: string
      value: string
      href: string
    }
