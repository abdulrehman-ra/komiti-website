import Image from 'next/image'
import type { ImageContent } from '@/types/content'
import { cn } from '@/lib/cn'

type RingsProps = {
  image: ImageContent
  className?: string
}

export function Rings({ image, className }: RingsProps) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      unoptimized
      aria-hidden="true"
      className={cn('pointer-events-none absolute -z-10 max-w-none select-none', className)}
    />
  )
}
