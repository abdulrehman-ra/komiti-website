'use client'

import { motion } from '@/config/motion'
import { useSlideIndex } from '@/hooks/use-slide-index'
import { cn } from '@/lib/cn'

type SlideDot = {
  id: string
  label: string
}

type SlideDotsProps = {
  listId: string
  label: string
  dots: readonly SlideDot[]
  className?: string
}

export function SlideDots({ listId, label, dots, className }: SlideDotsProps) {
  const activeIndex = useSlideIndex(listId, dots.length)

  const showSlide = (index: number) => {
    const slide = document.getElementById(listId)?.children[index]
    const reduceMotion = window.matchMedia(motion.reducedMotionQuery).matches
    slide?.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }

  return (
    <div role="group" aria-label={label} className={cn('flex justify-center gap-1', className)}>
      {dots.map((dot, index) => {
        const isActive = index === activeIndex
        return (
          <button
            key={dot.id}
            type="button"
            aria-label={dot.label}
            aria-current={isActive ? 'true' : undefined}
            aria-controls={listId}
            onClick={() => showSlide(index)}
            className="grid size-6 place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-accent"
          >
            <span
              className={cn(
                'block h-2 rounded-full transition-[width,background-color] duration-300 ease-reveal',
                isActive ? 'w-5 bg-accent' : 'w-2 bg-muted',
              )}
            />
          </button>
        )
      })}
    </div>
  )
}
