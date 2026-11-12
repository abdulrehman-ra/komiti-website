import type { ReactNode } from 'react'

type IconProps = {
  children: ReactNode
  className?: string
  viewBox?: string
  strokeWidth?: number
  width?: number
  height?: number
}

export function Icon({
  children,
  className,
  viewBox = '0 0 24 24',
  strokeWidth = 1.75,
  width,
  height,
}: IconProps) {
  return (
    <svg
      viewBox={viewBox}
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  )
}
