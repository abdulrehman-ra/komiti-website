'use client'

import { useRef } from 'react'
import { useCountUp } from '@/hooks/use-count-up'
import { formatAmount } from '@/lib/format'

type CountUpProps = {
  value: number
  delay: number
  prefix?: string
}

export function CountUp({ value, delay, prefix = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  useCountUp(ref, value, prefix, delay)
  const finalText = `${prefix}${formatAmount(value)}`

  return (
    <span className="inline-grid">
      <span className="invisible col-start-1 row-start-1">{finalText}</span>
      <span ref={ref} className="col-start-1 row-start-1">
        {finalText}
      </span>
    </span>
  )
}
