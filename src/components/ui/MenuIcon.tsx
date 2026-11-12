import { Icon } from './Icon'

type MenuIconProps = {
  className?: string
}

export function MenuIcon({ className }: MenuIconProps) {
  return (
    <Icon className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Icon>
  )
}
