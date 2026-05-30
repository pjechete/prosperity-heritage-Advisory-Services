import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services | Operational & Financial Support | PHS',
  description:
    'Practical support for billing, collections, cash flow, workflow coordination, financial reporting, controls, growth, change, and special projects.',
  alternates: {
    canonical: 'https://phs-usa.com/services',
  },
  openGraph: {
    title: 'Services | Operational & Financial Support | PHS',
    description:
      'PHS works alongside organizations to assess pressure, improve what matters most, and provide ongoing support when needed.',
    url: 'https://phs-usa.com/services',
    siteName: 'Prosperity Heritage Advisory',
    type: 'website',
  },
}

const partnerWays = [
  {
    number: '1',
    title: 'Assess',
    lead: "When you know something isn't working but aren't sure where the problem starts.",
    body:
      'We review operational workflows, reporting processes, and financial activities to identify where pressure is occurring and what is contributing to it.',
  },
  {
    number: '2',
    title: 'Improve',
    lead: 'When processes, workflows, or financial activities need attention.',
    body:
      'We work alongside your team to address priority issues, strengthen execution, and reduce operational friction.',
  },
  {
    number: '3',
    title: 'Ongoing Support',
    lead: 'When you need experienced support without the cost and commitment of a full-time hire.',
    body: "Support is flexible and tailored to your organization's needs.",
  },
]

const supportAreas = [
  {
    title: 'Billing, Collections & Cash Flow',
    intro:
      'When invoicing slows, collections fall behind, or cash becomes difficult to predict, the problem is often larger than accounting alone.',
    body:
      'We help organizations identify where revenue is getting delayed, where cash is leaking, and what is preventing work from turning into cash efficiently.',
    bullets: [
      'Billing processes',
      'Collections follow-through',
      'Cash visibility',
      'Revenue tracking',
      'Process bottlenecks affecting cash flow',
    ],
  },
  {
    title: 'Operations & Workflow Support',
    intro:
      'Dropped handoffs, communication gaps, and inconsistent processes create redundant effort and constant firefighting.',
    body:
      'We help organizations improve how work moves across teams, systems, and departments so responsibilities are clear and execution becomes more consistent.',
    bullets: [
      'Team coordination',
      'Workflow consistency',
      'Process ownership',
      'Operational accountability',
      'Day-to-day execution',
    ],
  },
  {
    title: 'Financial Reporting & Process Improvement',
    intro:
      'When reporting becomes difficult to trust, leaders lose confidence in the numbers and decisions become harder to make.',
    body:
      'We help strengthen the processes behind the reporting so leadership has greater visibility into performance and financial results.',
    bullets: [
      'Financial reporting',
      'Reconciliations',
      'Month-end close',
      'Internal controls',
      'Financial visibility',
    ],
  },
  {
    title: 'Growth, Change & Special Projects',
    intro:
      'Growth, system changes, and team transitions can create operational strain that disrupts day-to-day performance.',
    body:
      'We provide practical support to help organizations navigate change while maintaining visibility, accountability, and operational continuity.',
    bullets: [
      'System implementations',
      'Team transitions',
      'Organizational changes',
      'Process redesign efforts',
      'Special operational projects',
    ],
  },
]

const industries = [
  {
    title: 'Healthcare & Medical Practices',
    body:
      'Supporting billing processes, operational workflows, reporting, and financial visibility.',
  },
  {
    title: 'Construction & Field Services',
    body:
      'Supporting project billing, job cost visibility, approvals, reporting, and operational coordination.',
  },
  {
    title: 'Logistics & Multi-Location Businesses',
    body:
      'Supporting invoicing processes, operational visibility, workflow management, and team accountability.',
  },
  {
    title: 'Professional & Service-Based Businesses',
    body:
      'Supporting financial visibility, reporting, process improvement, and operational effectiveness.',
  },
]

export default function ServicesPage() {
  return (
    <main>
      <section className="mock-hero mock-hero-simple">
        <div className="mock-container">
          <p className="mock-eyebrow">Services</p>
          <h1>Practical support for operational and financial challenges.</h1>

          <p>
            Organizations often experience pressure long before the root cause
            becomes visible. Delayed billing, reporting gaps, workflow
            breakdowns, unclear ownership, and inconsistent execution create
            hidden operational strains that slow growth and drain resources.
          </p>

          <p>
            PHS works alongside organizations to identify what is creating the
            pressure, improve what matters most, and provide support when needed.
          </p>
        </div>
      </section>

      <section className="mock-section mock-section-soft">
        <div className="mock-container">
          <div className="mock-section-header">
            <p className="mock-eyebrow">Three Ways We Partner</p>
            <p>
              Every organization is different. Some need clarity. Others need
              help solving a specific problem. Some need ongoing support.
            </p>
          </div>

          <div className="mock-steps">
            {partnerWays.map((item) => (
              <article className="mock-card" key={item.title}>
                <div className="mock-step-number">{item.number}</div>
                <h3>{item.title}</h3>
                <p>{item.lead}</p>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mock-section">
        <div className="mock-container">
          <div className="mock-section-header">
            <p className="mock-eyebrow">Common Areas We Support</p>
          </div>

          <div className="mock-grid-2">
            {supportAreas.map((item) => (
              <article className="mock-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.intro}</p>
                <p>{item.body}</p>
                <ul className="mock-bullet-list">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mock-section mock-section-soft">
        <div className="mock-container">
          <div className="mock-section-header">
            <p className="mock-eyebrow">Who We Typically Support</p>
          </div>

          <div className="mock-grid-2">
            {industries.map((item) => (
              <article className="mock-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mock-cta">
        <div className="mock-container">
          <h2>Not sure where the problem starts?</h2>
          <p>
            You don&apos;t need to have the answers before you call. If you feel
            the pressure but can&apos;t find the source, let&apos;s work through
            it together.
          </p>
          <Link href="/contact" className="mock-btn">
            Schedule a Conversation
          </Link>
        </div>
      </section>
    </main>
  )
}
