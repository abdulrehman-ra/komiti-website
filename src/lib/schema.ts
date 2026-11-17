import type { BreadcrumbList, Organization, WebSite, WithContext } from 'schema-dts'
import { homeNavId, primaryNav } from '@/config/navigation'
import { routes } from '@/config/routes'
import { siteConfig } from '@/config/site'
import { home } from '@/content/home'
import { absoluteUrl } from './url'

const organizationId = absoluteUrl('/#organization')

export function organizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': organizationId,
    name: siteConfig.name,
    url: absoluteUrl(routes.home),
    logo: absoluteUrl(siteConfig.logoImage),
    description: home.seo.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    areaServed: { '@type': 'Country', name: siteConfig.country },
    knowsAbout: siteConfig.topics,
    parentOrganization: {
      '@type': 'Organization',
      name: siteConfig.company.name,
      url: siteConfig.company.url,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressCountry: siteConfig.address.country,
    },
  }
}

export function websiteSchema(): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: absoluteUrl(routes.home),
    inLanguage: siteConfig.language,
    publisher: { '@id': organizationId },
  }
}

export function breadcrumbSchema(title: string, path: string): WithContext<BreadcrumbList> {
  const homeLabel = primaryNav.find((link) => link.id === homeNavId)?.label ?? siteConfig.name

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: homeLabel, item: absoluteUrl(routes.home) },
      { '@type': 'ListItem', position: 2, name: title, item: absoluteUrl(path) },
    ],
  }
}
