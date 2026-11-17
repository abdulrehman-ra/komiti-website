import { Icon } from '@/components/ui/Icon'

type ChevronIconProps = {
  className?: string
}

export function ChevronIcon({ className }: ChevronIconProps) {
  return (
    <Icon className={className}>
      <path d="m6 9 6 6 6-6" />
    </Icon>
  )
}
