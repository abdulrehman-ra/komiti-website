import type { Metadata } from 'next'
import { Rings } from '@/components/ui/Rings'
import { routes } from '@/config/routes'
import { ui } from '@/content/ui'
import { cn } from '@/lib/cn'

export const metadata: Metadata = {
  title: ui.notFound.title,
  robots: { index: false, follow: false },
}

const buttonClasses =
  'inline-flex h-control items-center rounded-full px-5 font-geist text-nav font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground'

export default function NotFound() {
  const { watermark, heading, descriptionLines, homeLabel, supportLabel } = ui.notFound

  return (
    <div className="relative isolate flex min-h-[calc(100svh-var(--spacing-header)-var(--spacing-header-inset))] items-center overflow-hidden px-gutter py-section">
      <Rings image={ui.rings.bottomRight} className="right-0 bottom-0 w-40 md:w-auto" />
      <div className="mx-auto flex w-full max-w-fit flex-col items-center text-center">
        <span
          aria-hidden="true"
          data-rise="0"
          className="pointer-events-none -z-10 -mb-[0.32em] text-watermark font-bold text-line select-none"
        >
          {watermark}
        </span>
        <h1 data-rise="1" className="text-display text-foreground">
          {heading}
        </h1>
        <p data-rise="2" className="mt-4 text-body text-muted">
          {descriptionLines.map((line) => (
            <span key={line} className="sm:block">
              {line}{' '}
            </span>
          ))}
        </p>
        <div data-rise="3" className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={routes.home}
            className={cn(buttonClasses, 'bg-brand text-brand-foreground hover:bg-brand-bright')}
          >
            {homeLabel}
          </a>
          <a
            href={routes.email}
            className={cn(
              buttonClasses,
              'border border-glass-line bg-surface text-foreground hover:bg-brand-soft',
            )}
          >
            {supportLabel}
          </a>
        </div>
      </div>
    </div>
  )
}
