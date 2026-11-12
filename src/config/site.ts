export const siteConfig = {
  name: 'Komiti',
  url: 'https://komiti.co',
  titleTemplate: '%s | Komiti',
  locale: 'en_PK',
  language: 'en',
  phone: '+92516107800',
  email: 'info@renegadesolutions.asia',
  linkedin: 'https://www.linkedin.com/',
  themeColor: '#f9f9f9',
  allowIndexing: process.env.NEXT_PUBLIC_ALLOW_INDEXING !== 'false',
  ogImage: { path: '/og/default.png', width: 1200, height: 630 },
  logoImage: '/apple-icon.png',
  address: {
    street: 'Central Mall Plaza, 4th floor, Opp DHA Gate 3, Main G.T. Road',
    locality: 'Islamabad',
    country: 'PK',
  },
} as const
