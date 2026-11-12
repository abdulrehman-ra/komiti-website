import { Icon } from './Icon'

type CloseIconProps = {
  className?: string
}

export function CloseIcon({ className }: CloseIconProps) {
  return (
    <Icon className={className}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Icon>
  )
}
