import { Fragment } from 'react'
import { cn } from '@/lib/cn'
import type { HeroAvailability } from '@/types/content'

type AvailabilityNoteProps = {
  availability: HeroAvailability
  rise: string
  className?: string
}

export function AvailabilityNote({ availability, rise, className }: AvailabilityNoteProps) {
  return (
    <p
      data-rise={rise}
      className={cn(
        'inline-flex items-center justify-center gap-3 rounded-full bg-brand-soft px-4 py-2.5 text-body-sm leading-none whitespace-nowrap text-accent',
        className,
      )}
    >
      <span className="inline-flex items-center gap-2">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-brand" />
        <span className="translate-y-0.5">{availability.status}</span>
      </span>
      <span aria-hidden="true" className="h-3.5 w-px bg-accent/25" />
      <span className="sr-only">{availability.joiner}</span>
      {availability.platforms.map((platform, index) => {
        return (
          <Fragment key={platform.id}>
            {index > 0 && (
              <>
                <span aria-hidden="true" className="h-3.5 w-px bg-accent/25" />
                <span className="sr-only">{availability.conjunction}</span>
              </>
            )}
            <span className="inline-flex items-center gap-1.5">
              <span className="translate-y-0.5">{platform.name}</span>
            </span>
          </Fragment>
        )
      })}
    </p>
  )
}
