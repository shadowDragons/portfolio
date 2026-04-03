export type WorkKey =
  | 'asset'
  | 'hr'
  | 'finance'
  | 'attendance'
  | 'oa'
  | 'orders'
  | 'workstation'
  | 'digitalHuman'
  | 'course'
  | 'recruiting'
  | 'idea'
  | 'foreignTradeA'
  | 'formart'

export type ShowcaseWork = {
  key: WorkKey
  title: string
  description: string
  images: string[]
  stack: string[]
  link?: string
  imageCountLabel: string
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
