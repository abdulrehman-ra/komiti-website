import { Badge } from '@/components/ui/Badge'
import { motion } from '@/config/motion'
import { home, sampleCommittee } from '@/content/home'
import { formatAmount } from '@/lib/format'
import { CountUp } from './CountUp'

export function PayoutPreview() {
  const { labels } = home.howItWorks
  const payout = sampleCommittee.contribution * sampleCommittee.memberCount

  return (
    <div
      role="img"
      data-pop-scope
      aria-label={labels.payoutPreview(formatAmount(payout))}
      className="flex min-h-avatar flex-wrap items-center justify-start gap-x-3 gap-y-2 md:justify-center"
    >
      <span aria-hidden="true" className="text-caption text-foreground">
        <span className="relative inline-block">
          {motion.confettiPieces.map((piece) => (
            <span key={piece} data-confetti={piece} />
          ))}
          <span data-reveal-pop className="inline-block">
            {labels.cashOutEmoji}
          </span>
        </span>{' '}
        {labels.cashOut}
      </span>
      <span aria-hidden="true">
        <Badge tone="success">
          <CountUp value={payout} prefix={labels.payoutPrefix} delay={motion.payoutDelay} />
        </Badge>
      </span>
    </div>
  )
}
