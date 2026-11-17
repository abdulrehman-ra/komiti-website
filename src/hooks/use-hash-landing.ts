import { useEffect } from 'react'
import { scrollToSection } from '@/lib/section-scroll'

export function useHashLanding() {
  useEffect(() => {
    let isActive = true

    if (window.location.hash) {
      window.history.scrollRestoration = 'manual'
      document.fonts.ready.then(() => {
        if (isActive) {
          scrollToSection(window.location.href, { instant: true, updateHistory: false })
        }
      })
    }

    const handleHashChange = () => {
      scrollToSection(window.location.href, { updateHistory: false })
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => {
      isActive = false
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])
}
