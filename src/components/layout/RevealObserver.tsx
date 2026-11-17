'use client'

import { usePathname } from 'next/navigation'
import { useRevealOnScroll } from '@/hooks/use-reveal-on-scroll'

export function RevealObserver() {
  useRevealOnScroll(usePathname())
  return null
}
