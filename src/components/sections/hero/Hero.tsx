import Image from 'next/image'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Rings } from '@/components/ui/Rings'
import { home } from '@/content/home'
import { AvailabilityNote } from './AvailabilityNote'
import { ui } from '@/content/ui'

export function Hero() {
  const { eyebrow, titleLines, description, availability, image } = home.hero

  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex px-gutter lg:min-h-[calc(100svh-var(--spacing-header)-var(--spacing-header-inset))]"
    >
      <Rings
        image={ui.rings.hero}
        className="right-0 -bottom-[18rem] w-72 md:-bottom-[26rem] md:w-[32.875rem]"
      />
      <div className="mx-auto grid w-full max-w-page items-center gap-10 py-hero-y lg:grid-cols-2 lg:gap-12">
        <div>
          <Eyebrow rise="0">{eyebrow}</Eyebrow>
          <h1 id="hero-title" className="mt-5 text-display text-foreground">
            {titleLines.map((line, index) => (
              <span key={line} data-rise={String(index + 1)} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p
            data-rise={String(titleLines.length + 1)}
            className="mt-6 max-w-hero-copy text-body-lg text-pretty text-muted"
          >
            {description}
          </p>
          <AvailabilityNote availability={availability} rise={String(titleLines.length + 2)} />
        </div>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="eager"
          fetchPriority="high"
          unoptimized
          className="mx-auto h-auto w-full max-w-md sm:max-w-lg lg:mr-0 lg:max-h-[calc(100svh-var(--spacing-header)-var(--spacing-hero-y)*2-2rem)] lg:w-auto"
        />
      </div>
    </section>
  )
}
