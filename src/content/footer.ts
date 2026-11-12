import type { FooterContent } from '@/types/content'

export const footer = {
  addressLines: ['Central Mall Plaza, 4th floor, Opp DHA', 'Gate 3, Main G.T. Road, Islamabad'],
  contactPrefix: 'Contact Us:',
  contactJoiner: 'or',
  phoneDisplay: '(+92) 51 6107800',
} as const satisfies FooterContent
