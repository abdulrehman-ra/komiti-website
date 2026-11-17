import { useSyncExternalStore } from 'react'

const activationRatio = 0.4

function subscribe(onChange: () => void) {
  window.addEventListener('scroll', onChange, { passive: true })
  window.addEventListener('resize', onChange)
  return () => {
    window.removeEventListener('scroll', onChange)
    window.removeEventListener('resize', onChange)
  }
}

export function useActiveSection(sectionIds: readonly string[], fallbackId: string) {
  const getSnapshot = () => {
    const activationLine = window.innerHeight * activationRatio
    let activeId = fallbackId
    for (const id of sectionIds) {
      const section = document.getElementById(id)
      if (section && section.getBoundingClientRect().top <= activationLine) {
        activeId = id
      }
    }
    return activeId
  }

  return useSyncExternalStore(subscribe, getSnapshot, () => fallbackId)
}
