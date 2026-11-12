import { Icon } from '@/components/ui/Icon'

type DeviceIconProps = {
  className?: string
}

export function DeviceIcon({ className }: DeviceIconProps) {
  return (
    <Icon className={className}>
      <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
      <path d="M11 18h2" />
    </Icon>
  )
}
