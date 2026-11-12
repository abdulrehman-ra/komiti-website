export type NavLink = {
  readonly id: string
  readonly label: string
  readonly href: string
}

export type FooterLink = NavLink & {
  readonly external?: boolean
}

export type FooterColumn = {
  readonly id: string
  readonly heading: string
  readonly links: readonly FooterLink[]
}

export type ImageContent = {
  readonly src: string
  readonly alt: string
  readonly width: number
  readonly height: number
}

export type SeoContent = {
  readonly title: string
  readonly description: string
}

export type SectionIntro = {
  readonly eyebrow: string
  readonly title: string
  readonly description: string
}

export type StorePlatform = {
  readonly id: 'android' | 'ios'
  readonly name: string
}

export type HeroAvailability = {
  readonly status: string
  readonly joiner: string
  readonly conjunction: string
  readonly platforms: readonly StorePlatform[]
}

export type HeroContent = {
  readonly eyebrow: string
  readonly titleLines: readonly string[]
  readonly description: string
  readonly availability: HeroAvailability
  readonly image: ImageContent
}

export type MemberTone = 'brand' | 'dark' | 'neutral' | 'surface'

export type CommitteeMember = {
  readonly id: string
  readonly initials: string
  readonly tone: MemberTone
}

export type SampleCommittee = {
  readonly contribution: number
  readonly memberCount: number
  readonly featuredMembers: readonly CommitteeMember[]
  readonly currentCycle: number
  readonly paidCount: number
}

export type StepId = 'create' | 'contribute' | 'payout'

export type Step = {
  readonly id: StepId
  readonly number: string
  readonly title: string
  readonly description: string
}

export type StepLabels = {
  readonly step: string
  readonly members: (count: number) => string
  readonly extraMembers: (count: number) => string
  readonly cycle: (current: number, total: number) => string
  readonly paid: (paid: number, total: number) => string
  readonly cashOutEmoji: string
  readonly cashOut: string
  readonly payoutPrefix: string
  readonly createPreview: (members: number, amount: string) => string
  readonly contributePreview: (current: number, total: number, paid: number) => string
  readonly payoutPreview: (amount: string) => string
}

export type StepsContent = SectionIntro & {
  readonly steps: readonly Step[]
  readonly labels: StepLabels
}

export type FeatureIconName = 'bell' | 'user' | 'lock' | 'trending-up' | 'percent'

export type Feature = {
  readonly id: string
  readonly icon: FeatureIconName
  readonly title: string
  readonly description: string
}

export type FeaturesContent = SectionIntro & {
  readonly features: readonly Feature[]
}

export type HomeContent = {
  readonly seo: SeoContent
  readonly hero: HeroContent
  readonly howItWorks: StepsContent
  readonly whyKomiti: FeaturesContent
}

export type FooterContent = {
  readonly addressLines: readonly string[]
  readonly contactPrefix: string
  readonly contactJoiner: string
  readonly phoneDisplay: string
}

export type LegalInline =
  | string
  | { readonly kind: 'strong'; readonly text: string }
  | { readonly kind: 'link'; readonly text: string; readonly href: string }

export type LegalRichText = string | readonly LegalInline[]

export type LegalTableRow = readonly [LegalRichText, LegalRichText]

export type LegalBlock =
  | LegalRichText
  | { readonly kind: 'subheading'; readonly text: string }
  | { readonly kind: 'list'; readonly items: readonly LegalRichText[] }
  | {
      readonly kind: 'table'
      readonly columns: readonly [string, string]
      readonly rows: readonly LegalTableRow[]
    }
  | { readonly kind: 'lines'; readonly lines: readonly LegalRichText[] }

export type LegalSection = {
  readonly id: string
  readonly title: string
  readonly blocks: readonly LegalBlock[]
}

export type LegalMetaItem = {
  readonly label: string
  readonly value: string
}

export type LegalPageContent = {
  readonly seo: SeoContent
  readonly title: string
  readonly path: string
  readonly meta: readonly LegalMetaItem[]
  readonly intro: readonly LegalBlock[]
  readonly sections: readonly LegalSection[]
}

export type RingImages = {
  readonly topLeft: ImageContent
  readonly hero: ImageContent
  readonly middleLeft: ImageContent
  readonly bottomRight: ImageContent
}

export type NotFoundContent = {
  readonly title: string
  readonly watermark: string
  readonly heading: string
  readonly descriptionLines: readonly string[]
  readonly homeLabel: string
  readonly supportLabel: string
}

export type UiContent = {
  readonly skipLink: string
  readonly newTabLabel: string
  readonly logoLabel: string
  readonly primaryNavLabel: string
  readonly mobileNavLabel: string
  readonly footerNavLabel: string
  readonly openMenuLabel: string
  readonly closeMenuLabel: string
  readonly callLabel: string
  readonly featureSliderLabel: string
  readonly featureDotsLabel: string
  readonly showFeature: (title: string) => string
  readonly ogImageAlt: string
  readonly notFound: NotFoundContent
  readonly rings: RingImages
}
