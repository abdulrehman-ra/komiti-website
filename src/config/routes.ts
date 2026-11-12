import { siteConfig } from './site'

export const sectionIds = {
  howItWorks: 'how-it-works',
  whyKomiti: 'why-komiti',
} as const

export const mainContentId = 'main-content'

export const routes = {
  mainContent: `#${mainContentId}`,
  home: '/',
  howItWorks: `/#${sectionIds.howItWorks}`,
  whyKomiti: `/#${sectionIds.whyKomiti}`,
  privacyPolicy: '/privacy/',
  termsOfService: '/terms/',
  website: siteConfig.url,
  email: `mailto:${siteConfig.email}`,
  phone: `tel:${siteConfig.phone}`,
  linkedin: siteConfig.linkedin,
} as const
