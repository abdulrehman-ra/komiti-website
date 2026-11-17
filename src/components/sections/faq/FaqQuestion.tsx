import type { FaqItem } from '@/types/content'
import { ChevronIcon } from './ChevronIcon'

type FaqQuestionProps = {
  item: FaqItem
}

export function FaqQuestion({ item }: FaqQuestionProps) {
  return (
    <li>
      <details className="group rounded-card border border-line bg-surface shadow-card transition-colors open:border-brand">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-card px-5 py-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:px-6 md:py-5 [&::-webkit-details-marker]:hidden">
          <h3 className="text-body font-bold text-foreground">{item.question}</h3>
          <span
            aria-hidden="true"
            className="grid size-control shrink-0 place-items-center rounded-full bg-brand-soft text-accent transition-transform duration-300 ease-reveal group-open:rotate-180"
          >
            <ChevronIcon className="size-5" />
          </span>
        </summary>
        <p className="px-5 pb-5 text-prose text-pretty text-muted md:px-6 md:pb-6">{item.answer}</p>
      </details>
    </li>
  )
}
