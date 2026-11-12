import { Wordmark } from '@/components/brand/Wordmark'
import { MailIcon } from '@/components/ui/MailIcon'
import { PhoneIcon } from '@/components/ui/PhoneIcon'
import { footerNav } from '@/config/navigation'
import { routes } from '@/config/routes'
import { siteConfig } from '@/config/site'
import { footer } from '@/content/footer'
import { ui } from '@/content/ui'
import { cn } from '@/lib/cn'

const footerLinkClasses =
  'rounded-sm text-body-md text-footer-foreground underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-footer-heading'

const contactLinkClasses = 'inline-flex items-center gap-2 py-1.5 md:inline md:py-0'

export function SiteFooter() {
  return (
    <footer className="overflow-hidden bg-footer text-footer-foreground">
      <div className="mx-auto max-w-page px-gutter pt-footer-top">
        <div className="flex flex-col gap-9 md:gap-10 lg:flex-row lg:justify-between lg:gap-16">
          <address className="text-center text-body-md not-italic md:text-left">
            {footer.addressLines.map((line) => (
              <span key={line} className="block whitespace-pre">
                {line}
              </span>
            ))}
            <span className="mt-4 flex flex-col items-center md:block">
              <span className="hidden md:inline">{footer.contactPrefix} </span>
              <a
                href={routes.email}
                className={cn(footerLinkClasses, contactLinkClasses, 'underline')}
              >
                <MailIcon className="size-4 shrink-0 md:hidden" />
                {siteConfig.email}
              </a>
              <span className="hidden md:inline"> {footer.contactJoiner} </span>
              <a href={routes.phone} className={cn(footerLinkClasses, contactLinkClasses)}>
                <PhoneIcon className="size-4 shrink-0 md:hidden" />
                {footer.phoneDisplay}
              </a>
            </span>
          </address>
          <nav
            aria-label={ui.footerNavLabel}
            className="order-first grid grid-cols-[repeat(3,auto)] justify-center gap-x-8 text-center md:order-none md:grid-cols-3 md:justify-start md:gap-x-16 md:text-left lg:gap-x-[clamp(3rem,6vw,7rem)]"
          >
            {footerNav.map((column) => (
              <div key={column.id}>
                <p className="text-overline text-footer-heading uppercase">{column.heading}</p>
                <ul className="mt-3 flex flex-col gap-2">
                  {column.links.map((link) => (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        className={footerLinkClasses}
                        {...('external' in link && {
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        })}
                      >
                        {link.label}
                        {'external' in link && <span className="sr-only"> {ui.newTabLabel}</span>}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <hr className="mt-footer-gap border-footer-line" />
        <Wordmark className="relative left-1/2 mt-footer-gap w-full max-w-none -translate-x-1/2 text-footer-mark" />
      </div>
    </footer>
  )
}
