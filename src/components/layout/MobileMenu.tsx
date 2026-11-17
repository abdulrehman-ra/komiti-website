'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { CloseIcon } from '@/components/ui/CloseIcon'
import { MenuIcon } from '@/components/ui/MenuIcon'
import { primaryNav } from '@/config/navigation'
import { ui } from '@/content/ui'
import { useScrollLock } from '@/hooks/use-scroll-lock'
import { isSamePageLink, scrollToSection } from '@/lib/section-scroll'

type MobileMenuProps = {
  className?: string
}

export function MobileMenu({ className }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelId = useId()

  useScrollLock(isOpen)

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const closeMenu = () => {
    setIsOpen(false)
    buttonRef.current?.focus()
  }

  return (
    <div className={className}>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={isOpen ? ui.closeMenuLabel : ui.openMenuLabel}
        onClick={() => setIsOpen((open) => !open)}
        className="grid size-control place-items-center rounded-full border border-line bg-surface text-foreground transition-colors hover:bg-brand-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        {isOpen ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
      </button>
      <nav
        id={panelId}
        aria-label={ui.mobileNavLabel}
        hidden={!isOpen}
        className="absolute inset-x-0 top-full mt-2 rounded-card border border-line bg-surface p-2 shadow-card"
      >
        <ul className="flex flex-col gap-1">
          {primaryNav.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={(event) => {
                  closeMenu()
                  if (isSamePageLink(link.href)) {
                    event.preventDefault()
                    requestAnimationFrame(() => scrollToSection(link.href))
                  }
                }}
                className="block rounded-full px-4 py-3 font-geist text-body font-medium text-foreground transition-colors hover:bg-brand-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
