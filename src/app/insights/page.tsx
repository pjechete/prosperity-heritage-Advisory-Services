import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Insights | Operations & Finance Perspectives | PHS',
  description:
    'Practical perspectives on operations, finance, cash flow, workflow breakdowns, internal controls, operational debt, and performance visibility.',
  alternates: {
    canonical: 'https://phs-usa.com/insights',
  },
  openGraph: {
    title: 'Insights | Operations & Finance Perspectives | PHS',
    description:
      'Practical insights drawn from real-world experience supporting organizations through operational and financial challenges.',
    url: 'https://phs-usa.com/insights',
    siteName: 'Prosperity Heritage Advisory',
    type: 'website',
  },
}

const insights = [
  {
    title: "Why Your Billing Team Isn't the Problem (It's Your Intake Workflow)",
    body: 'Financial pressure is often a symptom of operational issues that occurred weeks earlier. Before changing your accounting system or replacing your billing staff, examine what is happening upstream.',
  },
  {
    title: 'The Invisible Risk: Internal Controls in a Growing Business',
    body: 'Growth creates complexity. Complexity creates risk. Learn how simple controls can help protect cash, improve accountability, and reduce avoidable mistakes.',
  },
  {
    title: 'Why Revenue Does Not Equal Cash',
    body: 'Revenue may be recorded today, but cash depends on how effectively work moves through billing, collections, approvals, and follow-through.',
    href: '/insights/revenue-not-converting-to-cash',
  },
  {
    title: 'The Hidden Cost of Operational Debt',
    body: 'Small workarounds often become permanent habits. Over time, those habits create inefficiencies that affect performance, visibility, and accountability.',
  },
  {
    title: 'Are You Managing Steps or Designing Systems?',
    body: 'Improving one process in isolation can create new problems elsewhere. Sustainable improvement requires understanding how the entire system works together.',
  },
]

export default function InsightsPage() {
  return (
    <main>
      <section className="phs-page-hero">
        <div className="phs-container phs-hero-copy">
          <p className="phs-eyebrow">Insights</p>
          <h1>Practical perspectives on operations & finance.</h1>

          <p className="phs-hero-lede">
            Observations, lessons, and practical insights drawn from real-world
            experience supporting organizations through operational and financial
            challenges.
          </p>

          <p>
            Most operational and financial problems do not appear overnight. They
            develop gradually through reporting gaps, workflow breakdowns,
            communication challenges, unclear ownership, and inconsistent
            execution.
          </p>

          <p>
            The articles below explore common issues that affect performance,
            visibility, and cash flow.
          </p>
        </div>
      </section>

      <section className="phs-section phs-section-soft">
        <div className="phs-container">
          <div className="phs-section-header">
            <p className="phs-section-label">Featured Insights</p>
            <h2>How we think about common operational and financial problems.</h2>
          </div>

          <div className="phs-grid phs-grid-2">
            {insights.map((item) => {
              const content = (
                <>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <span className="phs-read-link">Read Article →</span>
                </>
              )

              return item.href ? (
                <Link href={item.href} className="phs-card phs-insight-card" key={item.title}>
                  {content}
                </Link>
              ) : (
                <article className="phs-card phs-insight-card" key={item.title}>
                  {content}
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="phs-final-cta">
        <div className="phs-container phs-cta-grid">
          <div>
            <h2>Looking for a practical second opinion?</h2>
            <p>
              Every organization experiences pressure differently. If you
              recognize similar challenges in your own business, let&apos;s start a
              conversation.
            </p>
          </div>
          <Link href="/contact" className="phs-btn phs-btn-gold">
            Schedule a Conversation
          </Link>
        </div>
      </section>
    </main>
  )
}

