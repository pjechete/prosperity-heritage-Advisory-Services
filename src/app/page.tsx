import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title:
    'Operational & Financial Support for Growing Businesses | Prosperity Heritage Advisory',
  description:
    'Prosperity Heritage Advisory helps growing organizations address operational friction, cash flow pressure, reporting gaps, workflow breakdowns, and financial process challenges.',
  alternates: {
    canonical: 'https://phs-usa.com/',
  },
  openGraph: {
    title:
      'Operational & Financial Support for Growing Businesses | Prosperity Heritage Advisory',
    description:
      'Practical operational and financial support for growing organizations facing workflow breakdowns, reporting challenges, cash flow pressure, and execution issues.',
    url: 'https://phs-usa.com/',
    siteName: 'Prosperity Heritage Advisory',
    type: 'website',
  },
}

const commonSigns = [
  'Cash feels unpredictable',
  'Billing or invoicing is delayed',
  'Accounts receivable keeps growing',
  'Reports are late or hard to trust',
  'Teams rely on workarounds',
]

const pressurePoints = [
  {
    title: 'Delayed Visibility',
    body: 'Reporting is delayed, information is fragmented, and decisions become reactive instead of proactive. Leadership lacks a clear picture of what is happening across the business.',
  },
  {
    title: 'Fragmented Coordination',
    body: 'Dropped handoffs and communication gaps between teams, systems, and workflows create inefficiencies, duplicate effort, and constant firefighting.',
  },
  {
    title: 'Financial Misalignment',
    body: 'Cash flow becomes less predictable. Billing slows, collections are missed, and financial processes struggle to keep pace with the demands of the business.',
  },
]

const helpAreas = [
  {
    title: 'Visibility',
    body: 'Understand where performance is breaking down and gain reliable information to support better decisions.',
  },
  {
    title: 'Coordination',
    body: 'Improve communication, ownership, and workflow handoffs across teams and systems.',
  },
  {
    title: 'Execution',
    body: 'Strengthen processes, controls, and accountability so improvements can be sustained over time.',
  },
]

const executiveIssues = [
  'Delayed billing',
  'Growing receivables',
  'Reporting delays',
  'Missed handoffs',
  'Unclear ownership',
]

const supportAreas = [
  {
    title: 'Billing, Collections & Cash Flow',
    body: 'Help improve billing, collections, cash visibility, and the processes that affect how revenue turns into cash.',
  },
  {
    title: 'Operations & Workflow Support',
    body: 'Help identify process gaps, improve communication, clarify ownership, and reduce operational bottlenecks.',
  },
  {
    title: 'Financial Reporting & Process Improvement',
    body: 'Help strengthen reporting, reconciliations, financial processes, and day-to-day oversight.',
  },
  {
    title: 'Growth, Change & Special Projects',
    body: 'Provide support during growth, system changes, team transitions, and other operational challenges.',
  },
]

const industries = [
  {
    title: 'Healthcare & Practices',
    body: 'Billing delays, intake gaps, collections pressure, reporting issues, and operational handoffs.',
  },
  {
    title: 'Construction & Field Services',
    body: 'Project billing, job cost visibility, cash timing, approvals, and fragmented workflows.',
  },
  {
    title: 'Logistics & Multi-Location Businesses',
    body: 'Invoicing gaps, system disconnects, operating visibility, margin leakage, and team accountability.',
  },
]

const engagementSteps = [
  {
    number: '1',
    title: 'Assess',
    body: 'Understand what is happening, where pressure exists, and what is contributing to the problem.',
  },
  {
    number: '2',
    title: 'Improve',
    body: 'Work alongside your team to address priority issues, strengthen processes, and improve performance.',
  },
  {
    number: '3',
    title: 'Ongoing Support',
    body: 'Provide flexible support as needed to sustain improvements, navigate change, and address new challenges.',
  },
]

export default function HomePage() {
  return (
    <main>
      <section className="phs-page-hero">
        <div className="phs-container phs-hero-grid">
          <div className="phs-hero-copy">
            <p className="phs-eyebrow">Practical Operational & Financial Support</p>
            <h1>Stop losing profit to operational friction and cash leaks.</h1>

            <p className="phs-hero-lede">
              Delayed billing, reporting gaps, weak controls, missed handoffs,
              and fragmented workflows create financial pressure long before it
              appears in the numbers.
            </p>

            <p>
              PHS helps growing, operationally complex organizations identify
              where performance is breaking down and implement practical
              solutions that improve visibility, execution, and cash flow.
            </p>

            <p className="phs-trust-note">
              Built on experience supporting complex operational and financial
              environments, including enterprise healthcare systems, growing
              businesses, and fractional leadership engagements.
            </p>

            <div className="phs-hero-actions">
              <Link href="/contact" className="phs-btn phs-btn-primary">
                Schedule a Diagnostic Conversation
              </Link>
              <Link href="/services" className="phs-btn phs-btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>

          <aside className="phs-card phs-hero-card">
            <h2>Common signs something isn&apos;t working</h2>
            <ul className="phs-clean-list">
              {commonSigns.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="phs-section">
        <div className="phs-container">
          <div className="phs-section-header">
            <p className="phs-section-label">Operational Pressure</p>
            <h2>Operational pressure is rarely just one isolated issue.</h2>
            <p>
              When a business grows, complexity often outpaces the systems,
              processes, and controls needed to support it. Performance
              challenges rarely happen in isolation.
            </p>
          </div>

          <div className="phs-grid phs-grid-3">
            {pressurePoints.map((item) => (
              <article className="phs-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="phs-section phs-section-soft">
        <div className="phs-container">
          <div className="phs-section-header">
            <p className="phs-section-label">How We Help</p>
            <h2>Better Visibility. Stronger Coordination. Consistent Execution.</h2>
            <p>
              Once the source of the pressure is understood, the focus shifts
              from symptoms to solutions.
            </p>
          </div>

          <div className="phs-grid phs-grid-3">
            {helpAreas.map((item) => (
              <article className="phs-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="phs-section phs-executive-band">
        <div className="phs-container">
          <div className="phs-section-header">
            <p className="phs-section-label">The Executive Reality</p>
            <h2>The visible problem is often only the symptom.</h2>
            <p>
              By the time financial pressure appears, the underlying operational
              issues may have been building for months.
            </p>
          </div>

          <div className="phs-issue-list">
            {executiveIssues.map((item) => (
              <div className="phs-issue" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="phs-section">
        <div className="phs-container">
          <div className="phs-section-header">
            <p className="phs-section-label">Common Areas We Support</p>
            <h2>
              Practical support for the operational and financial challenges
              that affect day-to-day performance.
            </h2>
            <p>
              We work alongside organizations to address problems, strengthen
              processes, and support better outcomes.
            </p>
          </div>

          <div className="phs-grid phs-grid-2">
            {supportAreas.map((item) => (
              <article className="phs-card phs-service-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="phs-section phs-section-dark">
        <div className="phs-container">
          <div className="phs-section-header">
            <p className="phs-section-label">Who We Work With</p>
            <h2>Built for growing, operationally complex businesses.</h2>
            <p>
              The language changes by industry, but the underlying problem is
              often the same: revenue, operations, reporting, and accountability
              are not moving together.
            </p>
          </div>

          <div className="phs-grid phs-grid-3">
            {industries.map((item) => (
              <article className="phs-card phs-card-dark" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="phs-section">
        <div className="phs-container">
          <div className="phs-section-header">
            <p className="phs-section-label">How We Engage</p>
            <h2>Assess. Improve. Ongoing Support.</h2>
            <p>
              We begin by understanding what is happening, help improve what
              matters most, and provide ongoing support when needed.
            </p>
          </div>

          <div className="phs-grid phs-grid-3">
            {engagementSteps.map((step) => (
              <article className="phs-card phs-step-card" key={step.title}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="phs-final-cta">
        <div className="phs-container phs-cta-grid">
          <div>
            <h2>Let&apos;s identify where performance is breaking down.</h2>
            <p>
              Start with a focused conversation about the operational or
              financial pressure your organization is facing.
            </p>
          </div>

          <Link href="/contact" className="phs-btn phs-btn-gold">
            Schedule a Diagnostic Conversation
          </Link>
        </div>
      </section>
    </main>
  )
}

