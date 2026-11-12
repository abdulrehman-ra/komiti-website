import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import { ui } from '@/content/ui'
import type { SeoContent } from '@/types/content'

type BuildMetadataOptions = {
  seo: SeoContent
  path: string
  absoluteTitle?: boolean
  noIndex?: boolean
}

export function buildMetadata({
  seo,
  path,
  absoluteTitle = false,
  noIndex = false,
}: BuildMetadataOptions): Metadata {
  const socialTitle = absoluteTitle ? seo.title : siteConfig.titleTemplate.replace('%s', seo.title)
  const image = {
    url: siteConfig.ogImage.path,
    width: siteConfig.ogImage.width,
    height: siteConfig.ogImage.height,
    alt: ui.ogImageAlt,
  }

  return {
    title: absoluteTitle ? { absolute: seo.title } : seo.title,
    description: seo.description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      url: path,
      title: socialTitle,
      description: seo.description,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description: seo.description,
      images: [image],
    },
    robots: siteConfig.allowIndexing && !noIndex ? undefined : { index: false, follow: false },
  }
}
