import { cn } from '@/lib/cn'

type StepBadgeProps = {
  number: string
  label: string
  className?: string
}

export function StepBadge({ number, label, className }: StepBadgeProps) {
  return (
    <div
      className={cn(
        'relative flex size-badge-sm flex-col items-center justify-center rounded-badge border border-glass-line bg-glass shadow-card backdrop-blur-glass md:mx-auto md:size-badge',
        className,
      )}
    >
      <span className="text-step-number font-bold text-accent">{number}</span>
      <span className="text-label text-foreground uppercase">{label}</span>
    </div>
  )
}
