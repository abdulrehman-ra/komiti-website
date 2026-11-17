import { Eyebrow } from '@/components/ui/Eyebrow'
import type { FaqPageContent } from '@/types/content'
import { FaqQuestion } from './FaqQuestion'

type FaqPageProps = {
  page: FaqPageContent
}

export function FaqPage({ page }: FaqPageProps) {
  return (
    <article aria-labelledby="faq-title" className="px-gutter py-section">
      <header className="mx-auto flex flex-col items-center text-center">
        <Eyebrow rise="0">{page.eyebrow}</Eyebrow>
        <h1 id="faq-title" data-rise="1" className="mt-4 text-h2 text-foreground">
          {page.title}
        </h1>
        <p data-rise="2" className="mt-4 max-w-intro text-body text-muted">
          {page.description}
        </p>
      </header>
      <ul data-rise="3" className="mx-auto mt-10 flex max-w-faq flex-col gap-3 md:mt-12">
        {page.items.map((item) => (
          <FaqQuestion key={item.id} item={item} />
        ))}
      </ul>
    </article>
  )
}
