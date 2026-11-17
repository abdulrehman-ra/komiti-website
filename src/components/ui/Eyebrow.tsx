import { Badge } from './Badge'

type EyebrowProps = {
  children: string
  rise?: string
  reveal?: boolean
}

export function Eyebrow({ children, rise, reveal = false }: EyebrowProps) {
  return (
    <p data-rise={rise} data-reveal={reveal ? '' : undefined}>
      <Badge tone="accent" size="md">
        {children}
      </Badge>
    </p>
  )
}
