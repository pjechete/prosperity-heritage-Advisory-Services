import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Insights | Operations & Finance | PHS',
  description:
    'Practical perspectives on operations, finance, cash flow, controls, workflows, reporting, and performance for growing organizations.',
  alternates: {
    canonical: 'https://phs-usa.com/insights',
  },
  openGraph: {
    title: 'Insights | Operations & Finance | PHS',
    description:
      'Observations, lessons, and practical insights drawn from real-world operational and financial experience.',
    url: 'https://phs-usa.com/insights',
    siteName: 'Prosperity Heritage Advisory',
    type: 'website',
  },
}

const insights = [
  {
    title: "Why Your Billing Team Isn't the Problem (It's Your Intake Workflow)",
    body:
      'Financial pressure is often a symptom of operational issues that occurred weeks earlier. Before changing your accounting system or replacing your billing staff, examine what is happening upstream.',
  },
  {
    title: 'The Invisible Risk: Internal Controls in a Growing Business',
    body:
      'Growth creates complexity. Complexity creates risk. Learn how simple controls can help protect cash, improve accountability, and reduce avoidable mistakes.',
  },
  {
    title: 'Why Revenue Does Not Equal Cash',
    body:
      'Revenue may be recorded today, but cash depends on how effectively work moves through billing, collections, approvals, and follow-through.',
  },
  {
    title: 'The Hidden Cost of Operational Debt',
    body:
      'Small workarounds often become permanent habits. Over time, those habits create inefficiencies that affect performance, visibility, and accountability.',
  },
  {
    title: 'Are You Managing Steps or Designing Systems?',
    body:
      'Improving one process in isolation can create new problems elsewhere. Sustainable improvement requires understanding how the entire system works together.',
  },
]

export default function InsightsPage() {
  return (
    <main>
      <section className="mock-hero mock-hero-simple">
        <div className="mock-container">
          <p className="mock-eyebrow">Insights</p>
          <h1>Practical perspectives on operations &amp; finance.</h1>

          <p>
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

      <section className="mock-section mock-section-soft">
        <div className="mock-container">
          <div className="mock-section-header">
            <p className="mock-eyebrow">Featured Insights</p>
          </div>

          <div className="mock-grid-2">
            {insights.map((item) => (
              <article className="mock-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <Link href="/contact" className="mock-readmore">
                  Read Article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mock-cta">
        <div className="mock-container">
          <h2>Looking for a practical second opinion?</h2>
          <p>
            Every organization experiences pressure differently. If you
            recognize similar challenges in your own business, let&apos;s start
            a conversation.
          </p>
          <Link href="/contact" className="mock-btn">
            Schedule a Conversation
          </Link>
        </div>
      </section>
    </main>
  )
}
