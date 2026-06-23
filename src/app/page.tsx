import type { Metadata } from 'next'
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

const executionCards = [
  {
    title: 'For Advisory Firms',
    body:
      'Extend your capabilities with an execution partner your clients can trust.',
  },
  {
    title: 'For Organizations',
    body:
      'Strengthen performance, improve cash flow, and scale with confidence.',
  },
  {
    title: 'For Growth & Change',
    body:
      'Add the leadership capacity required to move critical initiatives forward.',
  },
]

const whyPHS = [
  {
    title: 'Operator Mindset',
    body: 'We have led teams and solved these challenges firsthand.',
  },
  {
    title: 'Practical Approach',
    body: 'Real-world solutions that can be implemented and sustained.',
  },
  {
    title: 'Measurable Outcomes',
    body: 'Focused on results that improve visibility, execution, and cash flow.',
  },
  {
    title: 'Trusted Partner',
    body: 'We help strengthen the relationships our partners already own.',
  },
]

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="mock-hero">
        <div className="mock-container mock-hero-grid">
          <div>
            <p className="mock-eyebrow">Operational & Financial Execution Partner</p>

            <h1>Recover Hidden Profit. Improve Execution. Scale With Confidence.</h1>

            <p>
              PHS helps organizations and advisory firms identify operational and
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

          <aside className="mock-hero-card">
            <h3>Where hidden profit is often lost</h3>

            <ul className="mock-checklist">
              <li>Delayed billing and collections</li>
              <li>Growing receivables</li>
              <li>Reporting gaps and backlogs</li>
              <li>Fragmented workflows</li>
              <li>Stalled internal initiatives</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* STRATEGIC PARTNERSHIPS */}
      <section className="mock-section partnership-highlight">
        <div className="mock-container mock-grid-2">
          <div>
            <p className="mock-eyebrow">Strategic Partnerships</p>

            <h2>More Than Advice. We Execute With You.</h2>

            <p>
              We partner with advisory firms and organizations that need more than
              a plan. They need execution capacity, operational discipline, and
              measurable results.
            </p>

            <div className="mock-actions">
              <Link href="/partnerships" className="mock-btn">
                Learn About Our Partnerships
              </Link>
            </div>
          </div>

          <div className="mock-grid-3">
            {executionCards.map((item) => (
              <article className="mock-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PHS */}
      <section className="mock-section">
        <div className="mock-container">
          <div className="mock-grid-2">
            <div>
              <p className="mock-eyebrow">Why PHS</p>
              <h2>Built by Practitioners. Focused on Results.</h2>
            </div>

            <div className="mock-grid-2">
              {whyPHS.map((item) => (
                <article className="mock-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mock-cta">
        <div className="mock-container">
          <h2>Let&apos;s Start With the Challenge.</h2>

          <p>
            Whether the issue involves cash flow, reporting, workflow bottlenecks,
            project execution, leadership transitions, or operational performance,
            the first step is understanding where performance is being lost.
          </p>

          <Link href="/contact" className="mock-btn">
            Schedule a Diagnostic Conversation
          </Link>
        </div>
      </section>
    </main>
  )
}
