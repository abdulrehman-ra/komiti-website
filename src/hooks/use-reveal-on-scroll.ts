import { useEffect } from 'react'
import { motion } from '@/config/motion'

const revealSelector = '[data-reveal]'
const revealedAttribute = 'data-revealed'
const motionClass = 'motion'

export function useRevealOnScroll(routeKey: string) {
  useEffect(() => {
    if (window.matchMedia(motion.reducedMotionQuery).matches) {
      return
    }

    const targets = Array.from(document.querySelectorAll(revealSelector))
    const pending = targets.filter((target) => {
      const isInView = target.getBoundingClientRect().top < window.innerHeight
      if (isInView) {
        target.setAttribute(revealedAttribute, '')
      }
      return !isInView
    })

    document.documentElement.classList.add(motionClass)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute(revealedAttribute, '')
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: motion.rootMargin },
    )

    for (const target of pending) {
      observer.observe(target)
    }

    return () => observer.disconnect()
  }, [routeKey])
}
