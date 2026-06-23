import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | Prosperity Heritage Solutions',
  description:
    'Learn about Prosperity Heritage Solutions, an operational and financial execution partner helping organizations improve visibility, accountability, performance, and execution.',
  alternates: {
    canonical: 'https://phs-usa.com/about',
  },
  openGraph: {
    title: 'About | Prosperity Heritage Solutions',
    description:
      'Built from experience and focused on execution. PHS helps organizations identify root causes, implement practical improvements, and move critical initiatives forward.',
    url: 'https://phs-usa.com/about',
    siteName: 'Prosperity Heritage Solutions',
    type: 'website',
  },
}

const experienceAreas = [
  {
    title: 'Revenue Cycle Operations',
    body:
      'Compressing billing timelines and accelerating cash velocity.',
  },
  {
    title: 'Corporate Controllership',
    body:
      'Rebuilding internal controls and institutionalizing financial discipline.',
  },
  {
    title: 'Financial Process Improvement',
    body:
      'Eliminating systemic accounting and reporting inefficiencies.',
  },
  {
    title: 'Operational Performance Initiatives',
    body:
      'Redesigning broken workflows to unlock hidden efficiency.',
  },
  {
    title: 'Reporting & Visibility Improvement',
    body:
      'Building actionable, real-time KPI structures for leadership.',
  },
  {
    title: 'Project Execution & Change Management',
    body:
      'Keeping complex organizational initiatives on track.',
  },
  {
    title: 'Cross-Functional Team Leadership',
    body:
      'Unifying siloed departments around shared goals.',
  },
  {
    title: 'Interim Operational & Financial Support',
    body:
      'Injecting immediate leadership capacity during periods of transition.',
  },
]

const workPrinciples = [
  {
    title: 'We Start With the Root Cause',
    body:
      'Symptoms such as cash flow pressure, reporting delays, growing receivables, and stalled projects almost always originate from deeper workflow, visibility, accountability, or process gaps. We look beyond the symptoms to address the underlying issue.',
  },
  {
    title: 'We Focus on Practical Improvements',
    body:
      'Recommendations only create value when they can be implemented. Our work is grounded in practical solutions that organizations can realistically execute and sustain.',
  },
  {
    title: 'We Support Execution',
    body:
      'Most critical initiatives stall because internal teams are already operating at capacity. We provide the additional leadership, focus, and execution support required to keep important work moving forward.',
  },
]

const philosophy = [
  {
    title: 'Visibility Creates Clarity.',
    body:
      'Organizations perform better when leaders have timely, reliable information and clear insight into operational performance.',
  },
  {
    title: 'Accountability Drives Performance.',
    body:
      'Sustainable improvement requires ownership, discipline, and clear responsibility.',
  },
  {
    title: 'Execution Delivers Results.',
    body:
      'Ideas, recommendations, and plans only create value when they are successfully implemented.',
  },
]

export default function AboutPage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="mock-hero mock-hero-simple">
        <div className="mock-container">
          <p className="mock-eyebrow">About</p>
          <h1>Built From Experience. Focused on Execution.</h1>

          <p>
            PHS was founded on a simple observation: Most operational and
            financial problems are deeply interconnected.
          </p>

          <p>
            Cash flow, reporting accuracy, team accountability, workflow
            execution, revenue cycle performance, and organizational visibility
            rarely fail in isolation.
          </p>

          <p>
            When organizations experience systemic pressure, they usually know
            something is wrong. What they lack is the experienced, dedicated
            support required to identify the root causes, implement practical
            improvements, and move critical initiatives forward.
          </p>

          <p className="mock-credibility">
            That is where PHS creates immediate value.
          </p>

          <div className="mock-actions">
            <Link href="/contact" className="mock-btn">
              Schedule a Diagnostic Conversation
            </Link>
          </div>
        </div>
      </section>

      {/* OUR PERSPECTIVE */}
      <section className="mock-section">
        <div className="mock-container">
          <div className="mock-section-header">
            <p className="mock-eyebrow">Our Perspective</p>
            <h2>The Intersection of Strategy, Finance, and Operations</h2>
          </div>

          <article className="mock-card mock-wide-card">
            <p>
              Many professional firms specialize purely in high-level strategy.
            </p>

            <p>
              Others focus exclusively on isolated accounting functions or narrow
              operational tasks.
            </p>

            <p>
              PHS operates firmly at the intersection of all three.
            </p>

            <p>
              We understand exactly how day-to-day operational friction mutates
              into financial pressure, and how financial pressures often point to
              deeper, hidden operational issues.
            </p>

            <p>
              Our approach combines practical business experience, financial
              discipline, process improvement, and hands-on execution support.
            </p>

            <p>
              We do not simply hand over a list of problems.
            </p>

            <p>
              We step into your business to help solve them.
            </p>
          </article>
        </div>
      </section>

      {/* OUR EXPERIENCE */}
      <section className="mock-section mock-section-soft">
        <div className="mock-container">
          <div className="mock-section-header">
            <p className="mock-eyebrow">Our Experience</p>
            <h2>Battle-Tested Inside the Organization. Not From the Sidelines.</h2>
            <p>
              PHS brings deep, practical experience across demanding operational,
              financial, and project leadership environments.
            </p>
          </div>

          <div className="mock-grid-2">
            {experienceAreas.map((item) => (
              <article className="mock-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>

          <div className="mock-section-header">
            <p>
              This experience allows us to diagnose issues quickly, prioritize
              improvements effectively, and support implementation with a calm,
              practical, results-oriented approach.
            </p>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="mock-section">
        <div className="mock-container">
          <div className="mock-section-header">
            <p className="mock-eyebrow">How We Work</p>
            <h2>A Practical Approach to Lasting Performance</h2>
          </div>

          <div className="mock-grid-3">
            {workPrinciples.map((item) => (
              <article className="mock-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="mock-section mock-section-soft">
        <div className="mock-container">
          <div className="mock-section-header">
            <p className="mock-eyebrow">Who We Work With</p>
          </div>

          <article className="mock-card mock-wide-card">
            <p>
              We support mid-market organizations navigating operational
              complexity, financial pressure, growth, leadership transitions,
              reporting challenges, workflow inefficiencies, and execution
              bottlenecks.
            </p>

            <p>
              We also partner with advisory firms that require dependable
              implementation support for their clients, including Fractional CFOs,
              CPA firms, Operational Advisors, and Healthcare Consultants.
            </p>

            <p>
              Our role is simple:
            </p>

            <p>
              Help organizations move from identifying problems to achieving
              measurable, sustainable results.
            </p>
          </article>
        </div>
      </section>

      {/* OUR PHILOSOPHY */}
      <section className="mock-section">
        <div className="mock-container">
          <div className="mock-section-header">
            <p className="mock-eyebrow">Our Philosophy</p>
          </div>

          <div className="mock-grid-3">
            {philosophy.map((item) => (
              <article className="mock-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="mock-cta">
        <div className="mock-container">
          <h2>Let&apos;s Start With the Challenge.</h2>

          <p>
            Whether the issue involves cash flow, operational performance,
            reporting visibility, project execution, or organizational change,
            the first step is understanding where performance is being lost.
          </p>

          <p>
            Let&apos;s have a practical conversation about what is creating
            pressure inside your organization and how PHS can help.
          </p>

          <Link href="/contact" className="mock-btn">
            Schedule a Diagnostic Conversation
          </Link>
        </div>
      </section>
    </main>
  )
}
