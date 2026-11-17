import type { UiContent } from '@/types/content'

export const ui = {
  skipLink: 'Skip to content',
  newTabLabel: '(opens in a new tab)',
  logoLabel: 'Komiti home',
  primaryNavLabel: 'Primary',
  mobileNavLabel: 'Mobile',
  footerNavLabel: 'Footer',
  openMenuLabel: 'Open menu',
  closeMenuLabel: 'Close menu',
  callLabel: 'Call Komiti',
  featureSliderLabel: 'Komiti features',
  featureDotsLabel: 'Choose a feature',
  showFeature: (title) => `Show ${title}`,
  ogImageAlt:
    'Komiti: Save Together. Grow Together. Digital Savings Committees in Pakistan, with two phones showing the Komiti app',
  notFound: {
    title: 'Page Not Found',
    watermark: '404',
    heading: 'Oops! Page Not Found',
    descriptionLines: [
      "The page you're looking for doesn't exist.",
      'You can return to the homepage or contact support if you need help.',
    ],
    homeLabel: 'Back to Home',
    supportLabel: 'Contact Support',
  },
  rings: {
    topLeft: { src: '/images/Circles.svg', alt: '', width: 331, height: 331 },
    hero: { src: '/images/Circles-1.svg', alt: '', width: 526, height: 893 },
    middleLeft: { src: '/images/Circles-2.svg', alt: '', width: 331, height: 662 },
    bottomRight: { src: '/images/Circles-3.svg', alt: '', width: 331, height: 662 },
  },
} as const satisfies UiContent
