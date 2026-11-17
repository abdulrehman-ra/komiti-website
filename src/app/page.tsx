import { Hero } from '@/components/sections/hero/Hero'
import { HowItWorks } from '@/components/sections/how-it-works/HowItWorks'
import { WhyKomiti } from '@/components/sections/why-komiti/WhyKomiti'
import { JsonLd } from '@/components/seo/JsonLd'
import { routes } from '@/config/routes'
import { home } from '@/content/home'
import { websiteSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({ seo: home.seo, path: routes.home, absoluteTitle: true })

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <WhyKomiti />
      <JsonLd schema={websiteSchema()} />
    </>
  )
}
