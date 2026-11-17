import { LegalPage } from '@/components/sections/legal/LegalPage'
import { JsonLd } from '@/components/seo/JsonLd'
import { privacyPolicy } from '@/content/legal'
import { breadcrumbSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  seo: privacyPolicy.seo,
  path: privacyPolicy.path,
})

export default function PrivacyPolicyPage() {
  return (
    <>
      <LegalPage page={privacyPolicy} />
      <JsonLd schema={breadcrumbSchema(privacyPolicy.title, privacyPolicy.path)} />
    </>
  )
}
