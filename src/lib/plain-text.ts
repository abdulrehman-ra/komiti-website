import type { LegalBlock, LegalRichText } from '@/types/content'

export function plainText(text: LegalRichText) {
  if (typeof text === 'string') {
    return text
  }
  return text.map((part) => (typeof part === 'string' ? part : part.text)).join('')
}

export function legalBlockKey(block: LegalBlock) {
  if (typeof block === 'string' || !('kind' in block)) {
    return plainText(block)
  }
  switch (block.kind) {
    case 'subheading':
      return block.text
    case 'list':
      return block.items.map(plainText).join()
    case 'table':
      return block.columns.join()
    case 'lines':
      return block.lines.map(plainText).join()
  }
}
