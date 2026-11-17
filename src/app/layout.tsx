import type { Metadata, Viewport } from 'next'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { RevealObserver } from '@/components/layout/RevealObserver'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { SkipLink } from '@/components/layout/SkipLink'
import { JsonLd } from '@/components/seo/JsonLd'
import { Rings } from '@/components/ui/Rings'
import { mainContentId } from '@/config/routes'
import { siteConfig } from '@/config/site'
import { ui } from '@/content/ui'
import { geist, ppMori } from '@/lib/fonts'
import { cn } from '@/lib/cn'
import { organizationSchema } from '@/lib/schema'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: siteConfig.titleTemplate },
}

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={cn(ppMori.variable, geist.variable)}>
      <body>
        <div className="relative isolate flex min-h-dvh flex-col overflow-x-clip">
          <Rings image={ui.rings.topLeft} className="top-0 left-0 w-56 md:w-auto" />
          <SkipLink />
          <SiteHeader />
          <main id={mainContentId} tabIndex={-1} className="flex-1 focus:outline-none">
            {children}
          </main>
          <SiteFooter />
          <RevealObserver />
        </div>
        <JsonLd schema={organizationSchema()} />
      </body>
    </html>
  )
}
