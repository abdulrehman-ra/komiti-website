import type { MetadataRoute } from 'next'
import { routes } from '@/config/routes'
import { siteConfig } from '@/config/site'
import { home } from '@/content/home'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: home.seo.title,
    short_name: siteConfig.name,
    description: home.seo.description,
    start_url: routes.home,
    display: 'browser',
    background_color: siteConfig.themeColor,
    theme_color: siteConfig.themeColor,
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: siteConfig.logoImage, sizes: '180x180', type: 'image/png' },
    ],
  }
}
