import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        {
          text: [
            'display',
            'h2',
            'h3',
            'body-lg',
            'body',
            'body-sm',
            'caption',
            'overline',
            'step-number',
            'body-md',
            'label',
            'nav',
            'badge',
            'eyebrow',
            'watermark',
            'prose',
            'heading',
          ],
        },
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
