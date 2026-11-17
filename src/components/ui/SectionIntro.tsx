import type { SectionIntro as SectionIntroContent } from '@/types/content'
import { Eyebrow } from './Eyebrow'

type SectionIntroProps = {
  intro: SectionIntroContent
  titleId: string
}

export function SectionIntro({ intro, titleId }: SectionIntroProps) {
  return (
    <div data-reveal-stagger className="mx-auto flex flex-col items-center text-center">
      <Eyebrow reveal>{intro.eyebrow}</Eyebrow>
      <h2 id={titleId} data-reveal className="mt-4 text-h2 text-foreground">
        {intro.title}
      </h2>
      <p data-reveal className="mt-4 max-w-intro text-body text-muted">
        {intro.description}
      </p>
    </div>
  )
}
