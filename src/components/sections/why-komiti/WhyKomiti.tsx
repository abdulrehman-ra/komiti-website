import { Rings } from '@/components/ui/Rings'
import { SectionIntro } from '@/components/ui/SectionIntro'
import { sectionIds } from '@/config/routes'
import { home } from '@/content/home'
import { ui } from '@/content/ui'
import { FeatureCard } from './FeatureCard'
import { SlideDots } from './SlideDots'

const featureListId = 'why-komiti-features'

export function WhyKomiti() {
  const { features } = home.whyKomiti

  return (
    <section
      id={sectionIds.whyKomiti}
      aria-labelledby="why-komiti-title"
      className="relative px-gutter py-section"
    >
      <Rings image={ui.rings.bottomRight} className="right-0 -bottom-[20.6875rem] w-40 md:w-auto" />
      <SectionIntro intro={home.whyKomiti} titleId="why-komiti-title" />
      <ul
        id={featureListId}
        data-reveal-stagger
        data-slider
        aria-label={ui.featureSliderLabel}
        className="-mx-gutter mt-10 flex snap-x snap-mandatory scroll-px-gutter [scrollbar-width:none] gap-4 overflow-x-auto px-gutter py-2 md:mx-auto md:mt-12 md:max-w-cards md:snap-none md:flex-wrap md:justify-center md:gap-8 md:overflow-visible md:px-0 md:py-0"
      >
        {features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </ul>
      <SlideDots
        listId={featureListId}
        label={ui.featureDotsLabel}
        dots={features.map((feature) => ({ id: feature.id, label: ui.showFeature(feature.title) }))}
        className="mt-4 md:hidden"
      />
    </section>
  )
}
