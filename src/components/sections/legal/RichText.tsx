import type { LegalRichText } from '@/types/content'

type RichTextProps = {
  text: LegalRichText
}

export function RichText({ text }: RichTextProps) {
  if (typeof text === 'string') {
    return text
  }

  return text.map((part) => {
    if (typeof part === 'string') {
      return part
    }
    if (part.kind === 'strong') {
      return (
        <strong key={part.text} className="font-bold text-foreground">
          {part.text}
        </strong>
      )
    }
    return (
      <a
        key={part.text}
        href={part.href}
        className="text-foreground underline decoration-line decoration-2 underline-offset-4 transition-colors hover:decoration-accent focus-visible:rounded-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        {part.text}
      </a>
    )
  })
}
