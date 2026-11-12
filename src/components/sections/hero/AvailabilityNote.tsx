import { Fragment } from 'react'
import type { HeroAvailability } from '@/types/content'
import { DeviceIcon } from './DeviceIcon'
import { PlayIcon } from './PlayIcon'

type AvailabilityNoteProps = {
  availability: HeroAvailability
  rise: string
}

const platformIcons = {
  android: PlayIcon,
  ios: DeviceIcon,
} as const

export function AvailabilityNote({ availability, rise }: AvailabilityNoteProps) {
  return (
    <p
      data-rise={rise}
      className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-brand-soft px-4 py-2.5 text-body-sm leading-none whitespace-nowrap text-accent"
    >
      <span className="inline-flex items-center gap-2">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-brand" />
        <span className="translate-y-0.5">{availability.status}</span>
      </span>
      <span aria-hidden="true" className="h-3.5 w-px bg-accent/25" />
      <span className="sr-only">{availability.joiner}</span>
      {availability.platforms.map((platform, index) => {
        const PlatformIcon = platformIcons[platform.id]
        return (
          <Fragment key={platform.id}>
            {index > 0 && (
              <>
                <span aria-hidden="true" className="h-3.5 w-px bg-accent/25" />
                <span className="sr-only">{availability.conjunction}</span>
              </>
            )}
            <span className="inline-flex items-center gap-1.5">
              <PlatformIcon className="size-4" />
              <span className="translate-y-0.5">{platform.name}</span>
            </span>
          </Fragment>
        )
      })}
    </p>
  )
}
