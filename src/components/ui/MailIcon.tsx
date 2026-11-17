import { Icon } from './Icon'

type MailIconProps = {
  className?: string
}

export function MailIcon({ className }: MailIconProps) {
  return (
    <Icon className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </Icon>
  )
}
