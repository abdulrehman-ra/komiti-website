import type { LegalBlock } from '@/types/content'
import { plainText } from '@/lib/plain-text'
import { LegalTable } from './LegalTable'
import { RichText } from './RichText'

type LegalContentBlockProps = {
  block: LegalBlock
}

export function LegalContentBlock({ block }: LegalContentBlockProps) {
  if (typeof block === 'string' || !('kind' in block)) {
    return (
      <p>
        <RichText text={block} />
      </p>
    )
  }

  switch (block.kind) {
    case 'subheading':
      return <h3 className="mt-3 text-prose font-bold text-foreground">{block.text}</h3>
    case 'list':
      return (
        <ul className="flex list-disc flex-col gap-2 pl-5 marker:text-accent">
          {block.items.map((item) => (
            <li key={plainText(item)} className="pl-1">
              <RichText text={item} />
            </li>
          ))}
        </ul>
      )
    case 'table':
      return <LegalTable columns={block.columns} rows={block.rows} />
    case 'lines':
      return (
        <p>
          {block.lines.map((line) => (
            <span key={plainText(line)} className="block">
              <RichText text={line} />
            </span>
          ))}
        </p>
      )
  }
}
