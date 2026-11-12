import type { Feature } from '@/types/content'
import { FeatureIcon } from './FeatureIcon'

type FeatureCardProps = {
  feature: Feature
}

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <li
      data-reveal
      className="flex w-[85%] shrink-0 snap-center md:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-4rem)/3)]"
    >
      <div className="group flex w-full flex-col items-center rounded-card border border-glass-line bg-glass px-6 py-8 text-center shadow-card backdrop-blur-glass transition-[translate,box-shadow,border-color] duration-300 ease-reveal hover:border-brand hover:shadow-card-hover motion-safe:hover:-translate-y-1">
        <span
          aria-hidden="true"
          className="flex h-16 items-center justify-center transition-transform duration-300 ease-reveal motion-safe:group-hover:scale-105"
        >
          <FeatureIcon name={feature.icon} className="text-accent" />
        </span>
        <h3 className="mt-5 text-h3 font-bold text-foreground">{feature.title}</h3>
        <p className="mt-2 text-body-sm text-muted">{feature.description}</p>
      </div>
    </li>
  )
}
