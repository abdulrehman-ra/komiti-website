import { motion } from '@/config/motion'

type ScrollToSectionOptions = {
  instant?: boolean
  updateHistory?: boolean
}

export function isSamePageLink(href: string) {
  return new URL(href, window.location.href).pathname === window.location.pathname
}

export function scrollToSection(
  href: string,
  { instant = false, updateHistory = true }: ScrollToSectionOptions = {},
) {
  const url = new URL(href, window.location.href)
  const reduceMotion = window.matchMedia(motion.reducedMotionQuery).matches
  const behavior = instant || reduceMotion ? 'instant' : 'smooth'
  const section = url.hash ? document.getElementById(url.hash.slice(1)) : null

  if (!section) {
    window.scrollTo({ top: 0, behavior })
    if (updateHistory) {
      window.history.pushState(null, '', url.pathname)
    }
    return
  }

  const headerBottom = document.querySelector('header')?.getBoundingClientRect().bottom ?? 0
  const styles = window.getComputedStyle(section)
  const paddingTop = Number.parseFloat(styles.paddingTop)
  const paddingBottom = Number.parseFloat(styles.paddingBottom)
  const rect = section.getBoundingClientRect()
  const contentTop = rect.top + window.scrollY + paddingTop
  const contentHeight = rect.height - paddingTop - paddingBottom
  const available = window.innerHeight - headerBottom
  const gap = contentHeight < available ? (available - contentHeight) / 2 : motion.sectionLandingGap

  window.scrollTo({ top: contentTop - headerBottom - gap, behavior })
  if (updateHistory) {
    window.history.pushState(null, '', url.hash)
  }
}
