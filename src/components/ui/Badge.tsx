import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

const toneClasses = {
  accent: 'bg-brand-soft text-accent',
  success: 'bg-positive-soft text-positive',
} as const

const sizeClasses = {
  sm: 'h-5.5 px-2 text-badge',
  md: 'px-2.5 py-1 text-eyebrow',
} as const

type BadgeTone = keyof typeof toneClasses
type BadgeSize = keyof typeof sizeClasses

type BadgeProps = {
  children: ReactNode
  tone: BadgeTone
  size?: BadgeSize
}

export function Badge({ children, tone, size = 'sm' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-xs whitespace-nowrap',
        sizeClasses[size],
        toneClasses[tone],
      )}
    >
      {children}
    </span>
  )
}
