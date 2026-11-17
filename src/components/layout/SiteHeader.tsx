import { Logo } from '@/components/brand/Logo'
import { PhoneIcon } from '@/components/ui/PhoneIcon'
import { routes } from '@/config/routes'
import { footer } from '@/content/footer'
import { ui } from '@/content/ui'
import { MobileMenu } from './MobileMenu'
import { PrimaryNav } from './PrimaryNav'

export function SiteHeader() {
  return (
    <header className="sticky top-header-inset z-50 mt-header-inset px-gutter">
      <div className="relative mx-auto grid h-header max-w-page grid-cols-[1fr_auto_1fr] items-center rounded-full border border-glass-line bg-glass px-4 backdrop-blur-glass md:px-6">
        <Logo className="justify-self-start" />
        <PrimaryNav className="hidden md:block" />
        <div className="col-start-3 flex items-center gap-2 justify-self-end">
          <a
            href={routes.phone}
            aria-label={ui.callLabel}
            className="group relative grid size-control place-items-center rounded-full bg-brand text-brand-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 hidden translate-x-2 items-center rounded-full bg-brand pr-control pl-5 font-geist text-nav font-medium whitespace-nowrap opacity-0 transition-[opacity,translate] duration-300 ease-reveal group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 md:flex"
            >
              {footer.phoneDisplay}
            </span>
            <PhoneIcon className="relative size-phone-icon" />
          </a>
          <MobileMenu className="md:hidden" />
        </div>
      </div>
    </header>
  )
}
