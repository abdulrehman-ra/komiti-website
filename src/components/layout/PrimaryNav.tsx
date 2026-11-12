'use client'

import { usePathname } from 'next/navigation'
import { homeNavId, primaryNav, trackedSectionIds } from '@/config/navigation'
import { routes } from '@/config/routes'
import { ui } from '@/content/ui'
import { useActiveSection } from '@/hooks/use-active-section'
import { useHashLanding } from '@/hooks/use-hash-landing'
import { cn } from '@/lib/cn'
import { isSamePageLink, scrollToSection } from '@/lib/section-scroll'

type PrimaryNavProps = {
  className?: string
}

export function PrimaryNav({ className }: PrimaryNavProps) {
  const activeId = useActiveSection(trackedSectionIds, homeNavId)
  const isHomePage = usePathname() === routes.home
  useHashLanding()

  return (
    <nav aria-label={ui.primaryNavLabel} className={className}>
      <ul className="flex items-center gap-1">
        {primaryNav.map((link) => {
          const isActive = isHomePage && link.id === activeId
          return (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={(event) => {
                  if (isSamePageLink(link.href)) {
                    event.preventDefault()
                    scrollToSection(link.href)
                  }
                }}
                aria-current={isActive ? 'location' : undefined}
                className={cn(
                  'flex h-control items-center rounded-full px-4 font-geist text-nav font-medium text-foreground transition-colors hover:bg-brand-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
                  isActive && 'bg-brand text-brand-foreground hover:bg-brand',
                )}
              >
                {link.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
