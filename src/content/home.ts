import type { HomeContent, SampleCommittee } from '@/types/content'

export const sampleCommittee = {
  contribution: 10000,
  memberCount: 10,
  featuredMembers: [
    { id: 'ak', initials: 'AK', tone: 'brand' },
    { id: 'sr', initials: 'SR', tone: 'dark' },
    { id: 'me', initials: 'ME', tone: 'neutral' },
  ],
  currentCycle: 3,
  paidCount: 10,
} as const satisfies SampleCommittee

export const home = {
  seo: {
    title: 'Komiti | Digital Savings Committees in Pakistan',
    description:
      'Run your savings committee online with trusted groups in Pakistan. Komiti keeps every contribution and payout clear, so everyone saves with confidence.',
  },
  hero: {
    eyebrow: 'Digital savings committees',
    titleLines: ['Save Together.', 'Grow Together.'],
    description:
      'Create, join and manage your komitis digitally. Track every contribution, know whose turn is next, and pay securely, all in one app.',
    availability: {
      status: 'Coming soon',
      joiner: 'on',
      conjunction: 'and',
      platforms: [
        { id: 'android', name: 'Android' },
        { id: 'ios', name: 'iOS' },
      ],
    },
    image: {
      src: '/images/hero-image.png',
      alt: 'Two phones showing the Komiti app: committee progress on the home screen and open saving circles on the explore screen',
      width: 527,
      height: 567,
    },
  },
  howItWorks: {
    eyebrow: 'How it works',
    title: 'Start saving in three simple steps',
    description:
      'A transparent, community-powered rotating savings plan to hit your financial milestones without debt or predatory fees.',
    steps: [
      {
        id: 'create',
        number: '01',
        title: 'Create or Join',
        description:
          'Start your own komiti and invite trusted peers, or enter a verified private circle that fits your monthly budget.',
      },
      {
        id: 'contribute',
        number: '02',
        title: 'Contribute',
        description:
          'Pay your share securely at the end of each cycle. Full ledger transparency keeps everyone accountable in real time.',
      },
      {
        id: 'payout',
        number: '03',
        title: 'Receive Your Payout',
        description:
          'When your turn comes, the entire pooled sum is instantly deposited directly to your linked bank account.',
      },
    ],
    labels: {
      step: 'Step',
      members: (count) => `${count} members`,
      extraMembers: (count) => `+${count}`,
      cycle: (current, total) => `Cycle ${current} of ${total}`,
      paid: (paid, total) => `${paid}/ ${total} Paid`,
      cashOutEmoji: '🎉',
      cashOut: 'Your turn to cash out',
      payoutPrefix: '+ ',
      createPreview: (members, amount) => `${members} members contributing ${amount} each`,
      contributePreview: (current, total, paid) =>
        `Cycle ${current} of ${total}, ${paid} of ${total} members paid`,
      payoutPreview: (amount) => `Your turn to cash out, ${amount}`,
    },
  },
  whyKomiti: {
    eyebrow: 'Why Komiti',
    title: 'The committee you know, without the hassle',
    description:
      'Everything that makes a traditional committee work, with none of the chasing, arguing or cash changing hands.',
    features: [
      {
        id: 'smart-reminders',
        icon: 'bell',
        title: 'Smart Reminders',
        description: 'Never miss a due date with timely payment reminders.',
      },
      {
        id: 'personal-komitis',
        icon: 'user',
        title: 'Personal Komitis',
        description:
          'Start a komiti just for yourself. Save on your own terms and watch your savings grow.',
      },
      {
        id: 'secure-payments',
        icon: 'lock',
        title: 'Secure Payments',
        description: 'Contributions and payouts through trusted payment gateways.',
      },
      {
        id: 'track-everything',
        icon: 'trending-up',
        title: 'Track Everything',
        description: 'See every contribution and the full payout order at a glance.',
      },
      {
        id: 'interest-free',
        icon: 'percent',
        title: '100% Interest Free',
        description: 'No interest, no hidden charges. Every rupee you put in comes back to you.',
      },
    ],
  },
} as const satisfies HomeContent
