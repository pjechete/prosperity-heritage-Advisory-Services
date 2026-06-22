import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Partnerships | Prosperity Heritage Solutions',
  description:
    'Prosperity Heritage Solutions serves as the execution arm for advisory firms, helping clients move from recommendations to measurable results.',
  alternates: {
    canonical: 'https://phs-usa.com/partnerships',
  },
  openGraph: {
    title: 'Partnerships | Prosperity Heritage Solutions',
    description:
      'The execution arm for advisory firms. PHS provides practitioner-led implementation support for Fractional CFOs, CPA firms, healthcare advisors, and operational advisors.',
    url: 'https://phs-usa.com/partnerships',
    siteName: 'Prosperity Heritage Solutions',
    type: 'website',
  },
}

const valueProps = [
  {
    title: 'Zero Relationship Competition',
    body:
      'We protect and respect your position as the primary trusted advisor.',
  },
  {
    title: 'Heavy-Lifting Capacity',
    body:
      'We inject experienced operational and financial horsepower directly into client workflows.',
  },
  {
    title: 'Broad Execution Scope',
    body:
      'Whether the bottleneck involves cleanup initiatives, workflow redesign, reporting visibility, or organizational change, we help turn plans into measurable action.',
  },
]

const partnerGroups = [
  {
    title: 'Fractional CFO Firms',
    situation: [
      'You have uncovered reporting issues, cash flow constraints, or structural operational risks.',
      'The client agrees with your financial strategy but has an internal accounting team already stretched by day-to-day responsibilities.',
    ],
    support:
      'We act as your execution partner, implementing the cleanups, visibility frameworks, reporting structures, and cash-tracking routines necessary to support your financial strategy.',
    areas: [
      'Accounting & Reporting Cleanup',
      'Dynamic Cash Flow Visibility',
      'KPI & Dashboard Development',
      'Operational Workflow Improvement',
      'Foundational Process Documentation',
      'Cross-Functional Project Execution',
    ],
  },
  {
    title: 'CPA & Accounting Firms',
    situation: [
      'Your core team is heavily utilized with tax, audit, accounting, and recurring compliance work.',
      'Meanwhile, valuable clients continue to request complex operational cleanup initiatives and special projects that require dedicated execution capacity.',
    ],
    support:
      'We provide an on-demand delivery engine for intensive client cleanups, process mapping, workflow improvement, and operational restructuring without pulling your team away from core billable services.',
    areas: [
      'Reconciliation Backlog Cleanup',
      'Financial Reporting Remediation',
      'SOP Development & Documentation',
      'Financial Workflow Mapping',
      'Internal Process Improvements',
      'Complex Mid-Market Special Projects',
    ],
  },
  {
    title: 'Healthcare Advisory Firms',
    situation: [
      'Your assessments identify revenue cycle weaknesses, workflow bottlenecks, operational inefficiencies, or technology implementation needs.',
      'The client wants to move forward but lacks the internal resources required to manage implementation.',
    ],
    support:
      'We help execute revenue cycle improvements, clinic workflow redesigns, operational assessments, and implementation initiatives that improve performance and protect your strategic project scope.',
    areas: [
      'Front-to-Back Revenue Cycle Improvement',
      'Clinic Workflow Optimization',
      'Operational & Practice Assessments',
      'Billing Process Improvement',
      'Technology Enablement Support',
      'Clinical Administration Project Execution',
    ],
  },
  {
    title: 'Fractional COO & Operational Advisors',
    situation: [
      'You have developed the roadmap, organizational redesign, or operational improvement plan.',
      'However, the client needs ongoing project leadership and accountability to keep initiatives moving and prevent teams from reverting to old habits.',
    ],
    support:
      'We serve as your tactical execution layer, helping manage milestones, remove bottlenecks, reinforce accountability, and maintain implementation momentum.',
    areas: [
      'Dedicated Project Leadership',
      'Hands-On Implementation Support',
      'Accountability Framework Implementation',
      'Lean Process Improvement',
      'Cross-Functional Team Coordination',
      'Change Management Support',
    ],
  },
]

const frameworks = [
  {
    title: 'White-Label Partner',
    body:
      'PHS operates under your firm’s brand. We support your clients as a seamless extension of your team, strengthening your delivery capacity and expanding your ability to serve clients.',
  },
  {
    title: 'Co-Branded Partner',
    body:
      'You introduce PHS as your trusted execution partner. We manage day-to-day implementation while keeping your advisory team informed, aligned, and strategically involved.',
  },
]

export default function PartnershipsPage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="mock-hero">
        <div className="mock-container mock-hero-grid">
          <div>
            <p className="mock-eyebrow">Partnerships</p>

            <h1>The Execution Arm for Advisory Firms.</h1>

            <p>
              Many advisory firms identify exactly what their clients need to do.
            </p>

            <p>
              The challenge begins when the client lacks the internal capacity,
              project leadership, or operational resources required to execute the
              strategy.
            </p>

            <p>
              Recommendations are made. Projects are approved. Priorities are
              established.
            </p>

            <p>
              Yet implementation stalls because the client lacks the bandwidth,
              expertise, or dedicated ownership needed to move the work forward.
            </p>

            <p>
              PHS bridges that gap. We serve as a natural extension of your
              delivery team, providing the practical, practitioner-led execution
              support required to turn your strategic recommendations into
              measurable results.
            </p>

            <div className="mock-actions">
              <Link href="/contact" className="mock-btn">
                Explore Partnership Opportunities
              </Link>
            </div>
          </div>

          <aside className="mock-hero-card">
            <h3>Built for advisory partners</h3>
            <ul className="mock-checklist">
              <li>Fractional CFO Firms</li>
              <li>CPA & Accounting Firms</li>
              <li>Healthcare Advisory Firms</li>
              <li>Fractional COO Practices</li>
              <li>Independent Advisory Firms</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="mock-section">
        <div className="mock-container">
          <div className="mock-section-header">
            <p className="mock-eyebrow">The Value Proposition</p>
            <h2>Why Advisory Firms Partner With PHS</h2>
            <p>
              Your clients trust you to identify systemic problems and architect
              high-level solutions.
            </p>
            <p>
              Our role is to help ensure those solutions get successfully
              implemented.
            </p>
          </div>

          <div className="mock-grid-3">
            {valueProps.map((item) => (
              <article className="mock-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE PARTNER WITH */}
      <section className="mock-section mock-section-soft">
        <div className="mock-container">
          <div className="mock-section-header">
            <p className="mock-eyebrow">Who We Partner With</p>
            <h2>Built to Support Your Client Delivery Capacity.</h2>
          </div>

          <div className="mock-grid-2">
            {partnerGroups.map((group) => (
              <article className="mock-card" key={group.title}>
                <h3>{group.title}</h3>

                <h4>The Situation</h4>
                {group.situation.map((item) => (
                  <p key={item}>{item}</p>
                ))}

                <h4>How PHS Supports You</h4>
                <p>{group.support}</p>

                <h4>Key Areas of Support</h4>
                <ul className="mock-checklist">
                  {group.areas.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="mock-section">
        <div className="mock-container">
          <div className="mock-section-header">
            <p className="mock-eyebrow">Engagement Models</p>
            <h2>Flexible Partnership Frameworks</h2>
          </div>

          <div className="mock-grid-2">
            {frameworks.map((item) => (
              <article className="mock-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATOR */}
      <section className="mock-section mock-dark">
        <div className="mock-container">
          <div className="mock-section-header">
            <p className="mock-eyebrow">The Differentiator</p>
            <h2>What Makes PHS Different</h2>

            <p>
              Traditional implementation resources often operate like staffing
              agencies.
            </p>

            <p>
              Traditional consultants frequently disengage after delivering
              recommendations.
            </p>

            <p>
              PHS combines operational experience, financial expertise, and
              hands-on execution capability.
            </p>

            <p>
              We understand the operational and financial realities behind your
              strategic recommendations because we have managed those functions
              from inside growing organizations.
            </p>

            <p>
              Our mission is straightforward: Help your clients achieve the
              results you designed while reinforcing your position as their
              trusted advisor.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="mock-cta">
        <div className="mock-container">
          <h2>Let&apos;s Explore a Partnership Conversation.</h2>

          <p>
            Whether you need immediate execution capacity for an active client
            engagement or are looking to establish a long-term implementation
            partner, we would welcome the opportunity to connect.
          </p>

          <p>
            Let&apos;s have a practical conversation about your delivery goals and
            how PHS can strengthen your ability to help clients achieve results.
          </p>

          <Link href="/contact" className="mock-btn">
            Schedule a Partner Collaboration Call
          </Link>
        </div>
      </section>
    </main>
  )
}
