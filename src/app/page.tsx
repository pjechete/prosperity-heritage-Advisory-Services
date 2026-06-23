import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Operational & Financial Execution Partner | Prosperity Heritage Solutions',
  description:
    'Prosperity Heritage Solutions helps organizations recover hidden profit, improve execution, strengthen financial visibility, and scale with confidence.',
  alternates: {
    canonical: 'https://phs-usa.com/',
  },
  openGraph: {
    title: 'Operational & Financial Execution Partner | Prosperity Heritage Solutions',
    description:
      'Recover hidden profit, improve execution, and scale with confidence through practical operational and financial execution support.',
    url: 'https://phs-usa.com/',
    siteName: 'Prosperity Heritage Solutions',
    type: 'website',
  },
}

const partnershipCards = [
  {
    icon: '◉',
    title: 'For Advisory Firms',
    body:
      'Extend your capabilities with an execution partner your clients can trust.',
  },
  {
    icon: '↗',
    title: 'For Investors',
    body:
      'Drive portfolio value through operational improvement and execution support.',
  },
  {
    icon: '▣',
    title: 'For Organizations',
    body:
      'Strengthen performance, improve cash flow, and scale with confidence.',
  },
]

const whyPHS = [
  {
    icon: '◎',
    title: 'Operator Mindset',
    body: 'We have led teams and solved these challenges firsthand.',
  },
  {
    icon: '◉',
    title: 'Practical Approach',
    body: 'Real-world solutions that drive measurable impact.',
  },
  {
    icon: '↗',
    title: 'Measurable Outcomes',
    body: 'Focused on results that improve profit and cash flow.',
  },
  {
    icon: '◇',
    title: 'Trusted Partner',
    body: 'We succeed when you succeed.',
  },
]

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="premium-hero">
        <div className="mock-container premium-hero-grid">
          <div className="premium-hero-copy">
            <p className="mock-eyebrow">Operational & Financial Execution Partner</p>

            <h1>Recover Hidden Profit. Improve Execution. Scale With Confidence.</h1>

            <p>
              We help organizations and advisory firms identify operational and
              financial leakage, implement practical improvements, and provide
              execution capacity when internal teams are stretched thin.
            </p>

            <div className="mock-actions">
              <Link href="/contact" className="mock-btn">
                Schedule a Diagnostic Conversation
              </Link>

              <Link href="/solutions" className="mock-btn mock-btn-secondary">
                Explore Our Solutions
              </Link>
            </div>
          </div>

          <div className="premium-hero-image-wrap">
            <Image
              src="/hero-execution.jpg"
              alt="Operational and financial execution leadership dashboard"
              width={1400}
              height={950}
              priority
              className="premium-hero-image"
            />
          </div>
        </div>
      </section>

      {/* STRATEGIC PARTNERSHIPS */}
      <section className="premium-dark-section">
        <div className="mock-container premium-partnership-grid">
          <div>
            <p className="mock-eyebrow">Strategic Partnerships</p>

            <h2>More Than Advice. We Execute With You.</h2>

            <p>
              We partner with advisory firms, private equity groups, and
              organizations that need more than a plan — they need execution
              capacity, operational rigor, and measurable results.
            </p>

            <div className="mock-actions">
              <Link href="/partnerships" className="mock-btn mock-btn-outline-light">
                Learn About Our Partnerships
              </Link>
            </div>
          </div>

          <div className="premium-card-row">
            {partnershipCards.map((item) => (
              <article className="premium-dark-card" key={item.title}>
                <div className="premium-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PHS */}
      <section className="premium-why">
        <div className="mock-container premium-why-grid">
          <div>
            <p className="mock-eyebrow">Why PHS</p>
            <h2>Built by Practitioners. Focused on Results.</h2>
          </div>

          <div className="premium-why-items">
            {whyPHS.map((item) => (
              <article className="premium-why-item" key={item.title}>
                <div className="premium-why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="premium-cta-band">
        <div className="mock-container premium-cta-grid">
          <div>
            <h2>Let&apos;s Start With the Challenge.</h2>

            <p>
              Whether the issue involves cash flow, reporting, workflow
              bottlenecks, project execution, leadership transitions, or
              operational performance, the first step is understanding where
              performance is being lost.
            </p>
          </div>

          <Link href="/contact" className="mock-btn premium-cta-button">
            Schedule a Diagnostic Conversation
          </Link>
        </div>
      </section>
    </main>
  )
}
