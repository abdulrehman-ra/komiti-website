import { Badge } from '@/components/ui/Badge'
import { home, sampleCommittee } from '@/content/home'

export function ContributePreview() {
  const { labels } = home.howItWorks
  const { currentCycle, memberCount, paidCount } = sampleCommittee
  const totalCycles = memberCount
  const progress = (currentCycle / totalCycles) * 100

  return (
    <div
      role="img"
      aria-label={labels.contributePreview(currentCycle, totalCycles, paidCount)}
      className="w-full max-w-step md:mx-auto"
    >
      <div aria-hidden="true" className="flex h-avatar items-center justify-between">
        <span className="text-caption text-foreground">
          {labels.cycle(currentCycle, totalCycles)}
        </span>
        <Badge tone="success">{labels.paid(paidCount, memberCount)}</Badge>
      </div>
      <div aria-hidden="true" className="mt-2 h-2 overflow-hidden rounded-full bg-line">
        <div
          data-reveal-fill
          className="h-full rounded-full bg-brand"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
