import { Eyebrow } from '@/components/ui/Eyebrow'
import { legalEyebrow, legalSectionNumber } from '@/content/legal'
import type { LegalPageContent } from '@/types/content'
import { legalBlockKey } from '@/lib/plain-text'
import { LegalContentBlock } from './LegalContentBlock'

type LegalPageProps = {
  page: LegalPageContent
}

export function LegalPage({ page }: LegalPageProps) {
  return (
    <article aria-labelledby="legal-title" className="px-gutter py-section">
      <div className="mx-auto max-w-legal">
        <header>
          <Eyebrow rise="0">{legalEyebrow}</Eyebrow>
          <h1 id="legal-title" data-rise="1" className="mt-4 text-h2 text-foreground">
            {page.title}
          </h1>
          <dl data-rise="2" className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
            {page.meta.map((item) => (
              <div key={item.label} className="flex flex-col gap-1.5">
                <dt className="text-overline text-muted uppercase">{item.label}</dt>
                <dd className="text-body-sm font-bold text-foreground">{item.value}</dd>
              </div>
            ))}
          </dl>
          <div
            data-rise="3"
            className="mt-8 flex flex-col gap-4 text-body-lg text-pretty text-muted"
          >
            {page.intro.map((block) => (
              <LegalContentBlock key={legalBlockKey(block)} block={block} />
            ))}
          </div>
        </header>
        <div className="mt-10 rounded-card border border-line bg-surface px-6 py-8 shadow-card md:mt-12 md:px-12 md:py-12">
          {page.sections.map((section, index) => (
            <section
              key={section.id}
              aria-labelledby={section.id}
              className="border-t border-line py-8 first:border-t-0 first:pt-0 last:pb-0 md:py-10"
            >
              <h2 id={section.id} className="text-heading font-bold text-foreground">
                <span className="mr-2 text-accent">{legalSectionNumber(index + 1)}</span>
                {section.title}
              </h2>
              <div className="mt-4 flex flex-col gap-4 text-prose text-pretty text-muted">
                {section.blocks.map((block) => (
                  <LegalContentBlock key={legalBlockKey(block)} block={block} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  )
}
