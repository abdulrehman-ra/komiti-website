import { LegalPage } from '@/components/sections/legal/LegalPage'
import { JsonLd } from '@/components/seo/JsonLd'
import { termsOfService } from '@/content/legal'
import { breadcrumbSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  seo: termsOfService.seo,
  path: termsOfService.path,
})

export default function TermsOfServicePage() {
  return (
    <>
      <LegalPage page={termsOfService} />
      <JsonLd schema={breadcrumbSchema(termsOfService.title, termsOfService.path)} />
    </>
  )
}
