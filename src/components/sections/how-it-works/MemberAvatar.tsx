import type { MemberTone } from '@/types/content'
import { cn } from '@/lib/cn'

const toneClasses = {
  brand: 'bg-brand-bright text-foreground',
  dark: 'bg-footer text-footer-foreground',
  neutral: 'bg-neutral-soft text-foreground',
  surface: 'bg-surface text-foreground',
} as const satisfies Record<MemberTone, string>

type MemberAvatarProps = {
  label: string
  tone: MemberTone
}

export function MemberAvatar({ label, tone }: MemberAvatarProps) {
  return (
    <span
      data-reveal-avatar
      className={cn(
        'grid size-avatar place-items-center rounded-full border-2 border-surface font-geist text-caption font-medium',
        toneClasses[tone],
      )}
    >
      {label}
    </span>
  )
}
