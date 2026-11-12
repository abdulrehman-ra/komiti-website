import { useSyncExternalStore } from 'react'

export function useSlideIndex(listId: string, count: number) {
  const subscribe = (onChange: () => void) => {
    const list = document.getElementById(listId)
    list?.addEventListener('scroll', onChange, { passive: true })
    window.addEventListener('resize', onChange)
    return () => {
      list?.removeEventListener('scroll', onChange)
      window.removeEventListener('resize', onChange)
    }
  }

  const getSnapshot = () => {
    const list = document.getElementById(listId)
    if (!list) {
      return 0
    }
    const maxScroll = list.scrollWidth - list.clientWidth
    if (maxScroll <= 0) {
      return 0
    }
    return Math.round((list.scrollLeft / maxScroll) * (count - 1))
  }

  return useSyncExternalStore(subscribe, getSnapshot, () => 0)
}
