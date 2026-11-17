import { FaqPage } from '@/components/sections/faq/FaqPage'
import { JsonLd } from '@/components/seo/JsonLd'
import { faqPage } from '@/content/faq'
import { breadcrumbSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  seo: faqPage.seo,
  path: faqPage.path,
})

export default function FaqRoute() {
  return (
    <>
      <FaqPage page={faqPage} />
      <JsonLd schema={breadcrumbSchema(faqPage.seo.title, faqPage.path)} />
    </>
  )
}
