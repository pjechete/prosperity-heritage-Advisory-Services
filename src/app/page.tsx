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

const leakageSigns = [
  {
    title: 'Cash Flow Feels Unpredictable',
    body:
      'Revenue is being generated, but cash is not moving through the organization efficiently.',
  },
  {
    title: 'Receivables Continue to Grow',
    body:
      'Billing delays, collection gaps, and workflow breakdowns slow the conversion of revenue into cash.',
  },
  {
    title: 'Reporting Arrives Too Late',
    body:
      'Leadership lacks the timely, reliable information needed to make confident decisions.',
  },
  {
    title: 'Teams Are Constantly Reacting',
    body:
      'Critical work gets delayed as employees spend more time solving recurring problems than executing priorities.',
  },
  {
    title: 'Important Projects Continue to Stall',
    body:
      'The organization knows what needs to happen but lacks the capacity, ownership, or coordination to move initiatives forward.',
  },
]

const solutions = [
  {
    title: 'Profit Recovery Assessment',
    body:
      'Identify operational bottlenecks, reporting gaps, revenue leakage, and control weaknesses that are impacting performance.',
  },
  {
    title: 'Revenue & Cash Flow Performance',
    body:
      'Improve billing workflows, strengthen collections processes, and accelerate cash flow visibility.',
  },
  {
    title: 'Operational Performance Improvement',
    body:
      'Remove workflow bottlenecks, strengthen accountability, and improve cross-functional execution.',
  },
  {
    title: 'Financial Visibility & Accountability',
    body:
      'Improve reporting reliability, eliminate backlogs, and strengthen decision-making visibility.',
  },
  {
    title: 'Interim Leadership & Project Execution',
    body:
      'Provide experienced leadership and execution capacity during periods of growth, transition, or organizational change.',
  },
]

const partnerTypes = [
  'Fractional CFO Firms',
  'CPA & Accounting Firms',
  'Healthcare Advisory Firms',
  'Fractional COO Practices',
  'Independent Advisory Firms',
]

const partnerSupport = [
  'Operational Assessments',
  'Accounting & Reporting Cleanups',
  'Revenue Cycle Improvement',
  'Workflow Optimization',
  'Project Execution Support',
  'Process Documentation & SOP Development',
]

export default function HomePage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="mock-hero">
        <div className="mock-container mock-hero-grid">
          <div>
            <p className="mock-eyebrow">Operational & Financial Execution Partner</p>

            <h1>Recover Hidden Profit. Improve Execution. Scale With Confidence.</h1>

            <p>
              Operational friction, delayed billing, reporting gaps, weak controls, and
              fragmented workflows quietly erode performance long before they appear in
              financial results.
            </p>

            <p>
              PHS helps organizations identify operational and financial leakage, implement
              practical improvements, and provide experienced execution support when internal
              teams lack the time, capacity, or specialized expertise to move critical
              initiatives forward.
            </p>

            <p className="mock-credibility">
              Built by Practitioners. Focused on Measurable Outcomes.
            </p>

            <div className="mock-actions">
              <Link href="/contact" className="mock-btn">
                Schedule a Diagnostic Conversation
              </Link>

              <Link href="/solutions" className="mock-btn mock-btn-secondary">
                Explore Solutions
              </Link>
            </div>
          </div>

          <aside className="mock-hero-card">
            <h3>Common Signs of Operational & Financial Leakage</h3>
            <ul className="mock-checklist">
              <li>Cash flow feels unpredictable</li>
              <li>Receivables continue to grow</li>
              <li>Reporting arrives too late</li>
              <li>Teams are constantly reacting</li>
              <li>Important projects continue to stall</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* REALITY SECTION */}
      <section className="mock-section">
        <div className="mock-container">
          <div className="mock-section-header">
            <p className="mock-eyebrow">The Reality</p>
            <h2>Most Financial Problems Start as Operational Problems.</h2>
            <p>
              By the time leadership notices cash flow pressure, reporting delays, margin
              erosion, or stalled initiatives, the underlying issues have often been building
              for months.
            </p>
          </div>

          <div className="mock-issue-list">
            {[
              'Processes become fragmented.',
              'Ownership becomes unclear.',
              'Workflows slow down.',
              'Visibility decreases.',
            ].map((item) => (
              <div className="mock-issue" key={item}>
                {item}
              </div>
            ))}
          </div>

          <div className="mock-section-header">
            <p>
              Over time, these small breakdowns compound into larger operational and
              financial challenges. PHS helps organizations identify where performance is
              being lost and implement practical solutions that improve visibility,
              accountability, and execution.
            </p>
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="mock-section mock-section-soft">
        <div className="mock-container">
          <div className="mock-section-header">
            <p className="mock-eyebrow">The Symptoms</p>
            <h2>Common Signs of Operational & Financial Leakage</h2>
          </div>

          <div className="mock-grid-2">
            {leakageSigns.map((item) => (
              <article className="mock-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECT SOLUTIONS OVERVIEW */}
      <section className="mock-section">
        <div className="mock-container">
          <div className="mock-section-header">
            <p className="mock-eyebrow">Direct Solutions Overview</p>
            <h2>How We Help</h2>
          </div>

          <div className="mock-grid-2">
            {solutions.map((item) => (
              <article className="mock-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>

          <div className="mock-actions mock-actions-center">
            <Link href="/solutions" className="mock-btn">
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP CHANNEL */}
      <section className="mock-section mock-dark">
        <div className="mock-container">
          <div className="mock-section-header">
            <p className="mock-eyebrow">Partnership Channel</p>
            <h2>The Execution Arm for Advisory Firms</h2>
            <p>
              Many advisory firms identify exactly what their clients need to do. The
              challenge begins when the client lacks the internal capacity, project
              leadership, or operational resources required to execute the strategy.
            </p>
            <p>
              PHS serves as an extension of your delivery team, helping clients move from
              high-level recommendations to measurable results.
            </p>
          </div>

          <div className="mock-grid-2">
            <article className="mock-card mock-dark-card">
              <h3>Who We Support</h3>
              <ul className="mock-checklist">
                {partnerTypes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="mock-card mock-dark-card">
              <h3>How We Help Partners</h3>
              <ul className="mock-checklist">
                {partnerSupport.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mock-section-header">
            <p>
              We do not replace your advisory relationship. We help strengthen it.
            </p>
          </div>

          <div className="mock-actions mock-actions-center">
            <Link href="/partnerships" className="mock-btn">
              Explore Partnerships
            </Link>
          </div>
        </div>
      </section>

      {/* CORE DIFFERENTIATOR */}
      <section className="mock-section">
        <div className="mock-container">
          <div className="mock-section-header">
            <p className="mock-eyebrow">The Core Differentiator</p>
            <h2>Why PHS</h2>
            <p>
              Many firms stop after delivering recommendations. PHS was built to help
              organizations execute.
            </p>
            <p>
              Our experience spans revenue cycle operations, corporate controllership,
              financial process improvement, operational performance initiatives, project
              execution, and organizational change.
            </p>
            <p>
              We understand how operational friction becomes financial pressure because we
              have managed both sides of the equation. More importantly, we understand what
              it takes to fix it.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mock-cta">
        <div className="mock-container">
          <h2>Let&apos;s Start With the Challenge.</h2>
          <p>
            Whether the issue involves cash flow, reporting, workflow bottlenecks, project
            execution, leadership transitions, or operational performance, the first step is
            understanding where value is being lost.
          </p>
          <p>
            Let&apos;s have a practical conversation about what is creating pressure inside
            your organization and what can be done to address it.
          </p>
          <Link href="/contact" className="mock-btn">
            Schedule a Diagnostic Conversation
          </Link>
        </div>
      </section>
    </main>
  )
}
