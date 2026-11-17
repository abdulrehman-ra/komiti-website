import { useEffect, type RefObject } from 'react'
import { motion } from '@/config/motion'
import { formatAmount } from '@/lib/format'

export function useCountUp(
  ref: RefObject<HTMLElement | null>,
  value: number,
  prefix: string,
  delay: number,
) {
  useEffect(() => {
    const element = ref.current
    if (!element || window.matchMedia(motion.reducedMotionQuery).matches) {
      return
    }
    if (element.getBoundingClientRect().top < window.innerHeight) {
      return
    }

    const render = (amount: number) => {
      element.textContent = `${prefix}${formatAmount(amount)}`
    }

    let frame = 0
    let timer = 0
    render(0)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }
        observer.disconnect()
        timer = window.setTimeout(() => {
          const start = performance.now()
          const tick = (now: number) => {
            const progress = Math.min((now - start) / motion.countDuration, 1)
            const eased = 1 - (1 - progress) ** 3
            render(Math.round((value * eased) / motion.countStep) * motion.countStep)
            if (progress < 1) {
              frame = requestAnimationFrame(tick)
            } else {
              element.setAttribute('data-counted', '')
            }
          }
          frame = requestAnimationFrame(tick)
        }, delay)
      },
      { rootMargin: motion.rootMargin },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      window.clearTimeout(timer)
      cancelAnimationFrame(frame)
      render(value)
    }
  }, [ref, value, prefix, delay])
}
