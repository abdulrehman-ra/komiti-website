import { routes } from '@/config/routes'
import type { FaqPageContent } from '@/types/content'

export const faqPage = {
  seo: {
    title: 'Committee, Kameti and BC FAQs',
    description:
      'Answers about digital committees in Pakistan: what a committee, kameti or BC is, how Komiti works, interest-free saving, payments and launch on Android and iOS.',
  },
  path: routes.faq,
  eyebrow: 'FAQs',
  title: 'Your committee questions, answered',
  description:
    'Everything you need to know about running a digital committee, kameti or BC online in Pakistan with Komiti.',
  items: [
    {
      id: 'what-is-a-committee',
      question: 'What is a committee, kameti or BC?',
      answer:
        'A committee, also called a kameti or BC, is a savings group run by people who trust each other. Every member pays a fixed amount each month, and each month one member receives the full pot, until everyone has had their turn. It is also known as a rotating savings group, or ROSCA.',
    },
    {
      id: 'how-does-komiti-work',
      question: 'How does Komiti work?',
      answer:
        'Create your own komiti and invite people you trust, or join a group that fits your monthly budget. Everyone pays their share each cycle, and when your turn comes, you receive the full payout. Komiti keeps track of every contribution and the payout order for you.',
    },
    {
      id: 'online-committee-with-family',
      question: 'Can I run an online committee with my family and friends?',
      answer:
        'Yes. Komiti is built for trusted groups like family, friends and colleagues. Start a komiti, invite the people you know, and everyone can see who has paid and whose turn is next.',
    },
    {
      id: 'interest-free',
      question: 'Is Komiti interest-free?',
      answer: 'Yes. Komiti is 100% interest free, with no hidden charges.',
    },
    {
      id: 'payment-reminders',
      question: 'How will I know who has paid and whose turn is next?',
      answer:
        'Komiti shows every contribution and the full payout order at a glance, and sends timely reminders before each due date, so nobody has to chase payments.',
    },
    {
      id: 'personal-komiti',
      question: 'Can I save on my own?',
      answer:
        'Yes. Start a personal komiti just for yourself, save on your own terms and watch your savings grow.',
    },
    {
      id: 'payments',
      question: 'How are contributions and payouts made?',
      answer:
        'Contributions and payouts go through trusted payment gateways, and your payout is sent to your linked bank account.',
    },
    {
      id: 'launch',
      question: 'When can I download Komiti?',
      answer:
        'Komiti is coming soon to Android and iOS in Pakistan. We are preparing to launch and will share the app as soon as it is ready.',
    },
  ],
} as const satisfies FaqPageContent
