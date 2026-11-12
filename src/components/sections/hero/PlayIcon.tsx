import { Icon } from '@/components/ui/Icon'

type PlayIconProps = {
  className?: string
}

export function PlayIcon({ className }: PlayIconProps) {
  return (
    <Icon className={className}>
      <path d="M7 4.5v15l12-7.5-12-7.5Z" />
    </Icon>
  )
}
