import { Badge } from '@/components/ui/Badge'
import { home, sampleCommittee } from '@/content/home'
import { formatAmount } from '@/lib/format'
import { MemberAvatar } from './MemberAvatar'

export function CreatePreview() {
  const { labels } = home.howItWorks
  const { featuredMembers, memberCount, contribution } = sampleCommittee
  const amount = formatAmount(contribution)
  const extraCount = memberCount - featuredMembers.length

  return (
    <div
      role="img"
      aria-label={labels.createPreview(memberCount, amount)}
      className="flex flex-wrap items-center justify-start gap-x-3 gap-y-2 md:justify-center"
    >
      <span aria-hidden="true" className="flex -space-x-2">
        {featuredMembers.map((member) => (
          <MemberAvatar key={member.id} label={member.initials} tone={member.tone} />
        ))}
        <MemberAvatar label={labels.extraMembers(extraCount)} tone="surface" />
      </span>
      <span aria-hidden="true" className="text-caption text-muted">
        {labels.members(memberCount)}
      </span>
      <span aria-hidden="true" data-reveal-settle className="shrink-0">
        <Badge tone="success">{amount}</Badge>
      </span>
    </div>
  )
}
