import { routes } from '@/config/routes'
import { siteConfig } from '@/config/site'
import { footer } from '@/content/footer'
import type { LegalPageContent } from '@/types/content'

const websiteLink = { kind: 'link', text: 'www.komiti.co', href: routes.website } as const
const emailLink = { kind: 'link', text: siteConfig.email, href: routes.email } as const
const phoneLink = { kind: 'link', text: footer.phoneDisplay, href: routes.phone } as const

export const privacyPolicy = {
  seo: {
    title: 'Privacy Policy',
    description:
      'How Komiti handles your information on komiti.co. The website has no forms, tracking cookies or analytics, and we only use the details you share when you contact us.',
  },
  title: 'Privacy Policy',
  path: routes.privacyPolicy,
  meta: [{ label: 'Last updated', value: '12 November 2026' }],
  intro: [
    [
      'This Privacy Policy explains how Renegade Solutions Asia ("Komiti", "we", "us" or "our") collects, uses and protects personal information when you use our website at ',
      websiteLink,
    ],
    'This policy covers the Website only. When the Komiti mobile app launches, it will have its own privacy policy explaining how we handle identity verification, payments, group and chat information.',
  ],
  sections: [
    {
      id: 'who-we-are',
      title: 'Who we are',
      blocks: [
        'The Website is operated by Renegade Solutions Asia, registered at Central Mall Plaza, 4th floor, Opp DHA Gate 3, Main G.T. Road, Islamabad.',
        ['For any privacy question or request, contact us at ', emailLink, '.'],
      ],
    },
    {
      id: 'information-we-collect',
      title: 'Information we collect',
      blocks: [
        'The Website is for information only. It has no forms, accounts or sign-ups, and we do not ask you for any personal information on it.',
        { kind: 'subheading', text: 'Information collected automatically' },
        'Like any website, our hosting provider may automatically record basic technical information when you visit, such as your IP address, browser type and the pages requested. These server logs are used only to deliver the Website and keep it secure, and are kept only as long as needed for that.',
        { kind: 'subheading', text: 'What we do not collect on the Website' },
        'We do not ask for or collect your CNIC, bank or mobile wallet details, payment information, or identity documents on the Website. Never share these with anyone claiming to collect them for Komiti through the Website, email or social media.',
      ],
    },
    {
      id: 'cookies',
      title: 'Cookies',
      blocks: ['The Website does not use analytics, advertising or tracking cookies or scripts.'],
    },
    {
      id: 'if-you-contact-us',
      title: 'If you contact us',
      blocks: [
        'The Website shows our email address and phone number. If you email or call us, we receive the details you choose to share, such as your name, contact details and message. We use them only to reply to you. We do not sell them or share them, except when the law requires it.',
      ],
    },
    {
      id: 'your-choices-and-rights',
      title: 'Your choices and rights',
      blocks: [
        [
          'You can ask us what information we hold from your messages to us, and ask us to correct or delete it. To make a request, email ',
          emailLink,
          '.',
        ],
      ],
    },
    {
      id: 'children',
      title: 'Children',
      blocks: [
        'We do not knowingly collect personal information from anyone under 18. If you believe a child has given us their information, contact us and we will delete it.',
      ],
    },
    {
      id: 'changes-to-this-policy',
      title: 'Changes to this policy',
      blocks: [
        'We may update this Privacy Policy from time to time. When we do, we will change the "Last updated" date at the top of this page.',
      ],
    },
    {
      id: 'contact-us',
      title: 'Contact us',
      blocks: [
        'If you have questions about this Privacy Policy or how we handle your information, contact us at:',
        {
          kind: 'lines',
          lines: [
            [{ kind: 'strong', text: 'Renegade Solutions Asia' }],
            'Central Mall Plaza, 4th floor, Opp DHA Gate 3, Main G.T. Road, Islamabad',
            ['Email: ', emailLink],
            ['Phone: ', phoneLink],
          ],
        },
      ],
    },
  ],
} as const satisfies LegalPageContent

export const termsOfService = {
  seo: {
    title: 'Terms of Service',
    description:
      'The terms for using the Komiti website, an information-only site for Komiti, the digital savings committee service preparing to launch in Pakistan.',
  },
  title: 'Terms of Service',
  path: routes.termsOfService,
  meta: [{ label: 'Last updated', value: '12 November 2026' }],
  intro: [
    [
      'These Terms of Service ("Terms") apply to your use of the Komiti website at ',
      websiteLink,
      ' (the "Website"). By using the Website, you agree to these Terms. If you do not agree, please do not use the Website.',
    ],
  ],
  sections: [
    {
      id: 'who-we-are',
      title: 'Who we are',
      blocks: [
        'The Website is operated by Renegade Solutions Asia ("Komiti", "we", "us" or "our"), registered at Central Mall Plaza, 4th floor, Opp DHA Gate 3, Main G.T. Road, Islamabad.',
        ['You can contact us at ', emailLink, '.'],
      ],
    },
    {
      id: 'komiti-is-not-yet-live',
      title: 'Komiti is not yet live',
      blocks: [
        'Komiti is a digital committee (ROSCA) service that we are preparing to launch in Pakistan. While we prepare:',
        {
          kind: 'list',
          items: [
            'The Website is for information only.',
            'Nothing on the Website is an offer to provide financial services, an invitation to invest, or financial advice.',
            'Features, timelines and availability described on the Website may change before launch. Some may depend on regulatory approvals and agreements with payment partners.',
            'We do not accept payments, deposits or committee contributions through the Website.',
          ],
        },
        'When the Komiti mobile app launches, it will have its own terms of service and privacy policy. Those terms will apply to your use of the app.',
      ],
    },
    {
      id: 'who-can-use-the-website',
      title: 'Who can use the Website',
      blocks: ['You may browse the Website at any age.'],
    },
    {
      id: 'acceptable-use',
      title: 'Acceptable use',
      blocks: [
        'When using the Website, you agree not to:',
        {
          kind: 'list',
          items: [
            'break any law that applies to you;',
            'give false information or pretend to be someone else;',
            "try to gain unauthorised access to the Website, our systems or other people's data;",
            'interfere with the Website, for example by uploading malicious code or overloading it;',
            'copy, scrape or collect content or data from the Website by automated means without our written permission;',
            'use the Website to send spam or unsolicited messages.',
          ],
        },
        'We may block access to the Website for anyone who breaks these rules.',
      ],
    },
    {
      id: 'our-content-and-brand',
      title: 'Our content and brand',
      blocks: [
        'The Website and its content, including the Komiti name, logo, text, graphics and design, belong to us or our licensors. You may view and share pages for personal, non-commercial use. You may not copy, change or reuse our content or brand for any other purpose without our written permission.',
        'Other company and product names shown on the Website, including payment providers, belong to their owners. Mentioning them does not mean they endorse Komiti.',
      ],
    },
    {
      id: 'links-to-other-websites',
      title: 'Links to other websites',
      blocks: [
        'The Website may link to websites or services run by others. We do not control them and are not responsible for their content or practices. Please read their terms and privacy policies.',
      ],
    },
    {
      id: 'no-warranties',
      title: 'No warranties',
      blocks: [
        'We work to keep the Website accurate and available, but we provide it "as is" and "as available". To the extent the law allows, we make no promises that the Website will be uninterrupted, error-free or free of harmful components, or that its content is complete or current.',
      ],
    },
    {
      id: 'limitation-of-liability',
      title: 'Limitation of liability',
      blocks: [
        'To the extent the law allows, Komiti will not be liable for any indirect, incidental or consequential loss arising from your use of, or inability to use, the Website. This includes loss of data, profit or opportunity.',
        'Nothing in these Terms limits any liability that cannot be limited under applicable law.',
      ],
    },
    {
      id: 'changes-to-these-terms',
      title: 'Changes to these Terms',
      blocks: [
        'We may update these Terms from time to time. When we do, we will change the "Last updated" date at the top of this page. If you keep using the Website after an update, you accept the updated Terms.',
      ],
    },
    {
      id: 'governing-law',
      title: 'Governing law',
      blocks: [
        'These Terms are governed by the laws of Pakistan. The courts of Islamabad, Pakistan will have exclusive jurisdiction over any dispute arising from them.',
      ],
    },
    {
      id: 'general',
      title: 'General',
      blocks: [
        'If any part of these Terms is found to be invalid or unenforceable, the rest of these Terms will remain in full effect.',
        'These Terms are the entire agreement between you and us about your use of the Website.',
      ],
    },
    {
      id: 'contact-us',
      title: 'Contact us',
      blocks: [
        'If you have questions about these Terms, contact us at:',
        {
          kind: 'lines',
          lines: [
            [{ kind: 'strong', text: 'Renegade Solutions Asia' }],
            'Central Mall Plaza, 4th floor, Opp DHA Gate 3, Main G.T. Road, Islamabad',
            ['Email: ', emailLink],
            ['Phone: ', phoneLink],
          ],
        },
      ],
    },
  ],
} as const satisfies LegalPageContent

export const legalEyebrow = 'Legal'

export const legalSectionNumber = (position: number) => `${position}.`
