import { routes } from '@/config/routes'
import { ui } from '@/content/ui'

export function SkipLink() {
  return (
    <a
      href={routes.mainContent}
      className="sr-only rounded-full bg-brand px-4 py-2 font-geist text-nav font-medium text-brand-foreground focus:not-sr-only focus:fixed focus:top-header-inset focus:left-gutter focus:z-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
    >
      {ui.skipLink}
    </a>
  )
}
