import type { FooterColumn, NavLink } from '@/types/content'
import { routes, sectionIds } from './routes'

export const homeNavId = 'home'

export const trackedSectionIds = [sectionIds.howItWorks, sectionIds.whyKomiti] as const

export const primaryNav = [
  { id: homeNavId, label: 'Home', href: routes.home },
  { id: sectionIds.howItWorks, label: 'How It Works', href: routes.howItWorks },
  { id: sectionIds.whyKomiti, label: 'Why Komiti', href: routes.whyKomiti },
] as const satisfies readonly NavLink[]

export const footerNav = [
  {
    id: 'explore',
    heading: 'Explore',
    links: [
      { id: 'how-it-works', label: 'How It Works', href: routes.howItWorks },
      { id: 'why-komiti', label: 'Why Komiti', href: routes.whyKomiti },
    ],
  },
  {
    id: 'company',
    heading: 'Company',
    links: [
      { id: 'contact', label: 'Contact', href: routes.email },
      { id: 'linkedin', label: 'LinkedIn', href: routes.linkedin, external: true },
    ],
  },
  {
    id: 'legal',
    heading: 'Legal',
    links: [
      { id: 'privacy-policy', label: 'Privacy Policy', href: routes.privacyPolicy },
      { id: 'terms-of-service', label: 'Terms of Service', href: routes.termsOfService },
    ],
  },
] as const satisfies readonly FooterColumn[]
