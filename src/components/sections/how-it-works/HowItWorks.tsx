import type { ReactNode } from 'react'
import { Rings } from '@/components/ui/Rings'
import { SectionIntro } from '@/components/ui/SectionIntro'
import { sectionIds } from '@/config/routes'
import { home } from '@/content/home'
import { ui } from '@/content/ui'
import type { StepId } from '@/types/content'
import { ContributePreview } from './ContributePreview'
import { CreatePreview } from './CreatePreview'
import { PayoutPreview } from './PayoutPreview'
import { StepBadge } from './StepBadge'

const previews = {
  create: <CreatePreview />,
  contribute: <ContributePreview />,
  payout: <PayoutPreview />,
} as const satisfies Record<StepId, ReactNode>

export function HowItWorks() {
  const { steps, labels } = home.howItWorks
  const lastIndex = steps.length - 1

  return (
    <section
      id={sectionIds.howItWorks}
      aria-labelledby="how-it-works-title"
      className="relative px-gutter py-section"
    >
      <Rings image={ui.rings.middleLeft} className="-bottom-[20.6875rem] left-0 w-40 md:w-auto" />
      <SectionIntro intro={home.howItWorks} titleId="how-it-works-title" />
      <ol
        data-reveal-stagger
        className="relative mx-auto mt-12 grid max-w-page md:mt-16 md:grid-cols-3 md:gap-x-6 lg:gap-x-8"
      >
        <span
          aria-hidden="true"
          data-reveal="line"
          className="absolute top-[calc(var(--spacing-badge)/2)] right-[16.67%] left-[16.67%] hidden h-px bg-line md:block"
        />
        {steps.map((step, index) => (
          <li
            key={step.id}
            data-reveal
            className="relative grid grid-cols-[auto_minmax(0,1fr)] content-start gap-x-4 pb-10 last:pb-0 md:row-span-4 md:grid-cols-1 md:grid-rows-subgrid md:items-start md:justify-items-center md:gap-x-0 md:pb-0 md:text-center"
          >
            {index < lastIndex && (
              <span
                aria-hidden="true"
                className="absolute top-badge-sm bottom-0 left-[calc(var(--spacing-badge-sm)/2)] w-px bg-line md:hidden"
              />
            )}
            <StepBadge
              number={step.number}
              label={labels.step}
              className="row-span-3 md:row-span-1"
            />
            <h3 className="col-start-2 mt-2 text-h3 font-bold text-foreground md:col-start-1 md:mt-6">
              {step.title}
            </h3>
            <p className="col-start-2 mt-2 max-w-step text-caption text-muted md:col-start-1">
              {step.description}
            </p>
            <div className="col-start-2 mt-4 w-full md:col-start-1 md:mt-6">
              {previews[step.id]}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
