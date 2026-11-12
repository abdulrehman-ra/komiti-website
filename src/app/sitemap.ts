import type { MetadataRoute } from 'next'
import { routes } from '@/config/routes'
import { absoluteUrl } from '@/lib/url'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl(routes.home),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: absoluteUrl(routes.privacyPolicy),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: absoluteUrl(routes.termsOfService),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
