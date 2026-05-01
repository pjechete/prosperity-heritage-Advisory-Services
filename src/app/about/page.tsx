import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Prosperity Heritage Advisory | Revenue Control & Execution Advisory',
  description:
    'Prosperity Heritage Advisory is a practitioner-led advisory platform helping leadership teams strengthen revenue control, cash visibility, operational finance, and execution discipline.',
}

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">About</p>

          <h1 className="page-title">
            An advisory platform built around revenue control, cash visibility, and execution discipline.
          </h1>

          <p className="section-copy section-copy-lg">
            Prosperity Heritage Advisory brings together experienced practitioners and advisors who
            help leadership teams strengthen the operating systems behind revenue performance,
            financial visibility, and predictable cash outcomes.
          </p>

          <p className="hero-proof">
            Our work is grounded in practical experience across finance, revenue cycle, operational
            execution, healthcare, strategic partnerships, and complex growth environments.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section-label">What we see</p>

          <h2 className="section-title">
            Revenue can look healthy while cash performance remains under pressure.
          </h2>

          <p className="section-copy">
            Many organizations generate strong revenue but still experience instability in cash
            performance. In most cases, the issue is not revenue alone. The breakdown happens
            somewhere between billing, collections, payment application, financial ownership, and
            reporting visibility.
          </p>

          <p className="section-copy">
            As businesses grow, go through acquisitions, pursue new partnerships, or operate in more
            complex funding environments, these gaps become more visible. Sales moves quickly.
            Operations evolves. Finance works hard to keep pace. But without strong process
            discipline connecting those functions, revenue may appear healthy while cash outcomes
            remain inconsistent and difficult to manage.
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <p className="section-label">How we help</p>

          <h2 className="section-title">
            Practical, leadership-level improvement where execution matters most.
          </h2>

          <div className="card-grid three-up">
            <div className="card card-feature">
              <h3>Revenue Control</h3>
              <p>
                Strengthen the processes, ownership, and accountability that determine whether
                revenue is captured, billed, collected, and reported with discipline.
              </p>
            </div>

            <div className="card card-feature">
              <h3>Cash Visibility</h3>
              <p>
                Improve leadership insight into where cash is delayed, what is driving performance,
                and which issues require action.
              </p>
            </div>

            <div className="card card-feature">
              <h3>Operational Finance</h3>
              <p>
                Support the operating layer between finance, billing, collections, operations, and
                leadership decision-making.
              </p>
            </div>

            <div className="card">
              <h3>Healthcare &amp; Revenue Cycle</h3>
              <p>
                Bring practical experience across healthcare revenue cycle, workflow alignment,
                implementation readiness, and financial operations.
              </p>
            </div>

            <div className="card">
              <h3>Public Sector Readiness</h3>
              <p>
                Support complex initiatives where funding accountability, stakeholder alignment,
                reporting discipline, and execution structure are critical.
              </p>
            </div>

            <div className="card">
              <h3>Strategic Partnerships</h3>
              <p>
                Work with selected partners where advisory support, market development, financial
                controls, and operational execution need to come together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container services-two-col">
          <div>
            <p className="section-label">Why PHS</p>

            <h2 className="section-title left-align">
              Practitioner-led advisory for organizations that need structure, visibility, and execution.
            </h2>

            <p className="section-copy">
              Prosperity Heritage Advisory is built as a practitioner-led advisory platform, not a
              traditional accounting firm or a generic consulting shop. We focus on the operating
              layer where revenue conversion, cash visibility, stakeholder alignment, and execution
              discipline often break down.
            </p>

            <p className="section-copy">
              Through experienced advisors, practitioners, and selected partners, we support
              organizations facing growth, transition, public sector complexity, healthcare
              transformation, and partner-led initiatives where practical execution matters as much
              as strategy.
            </p>
          </div>

          <div className="services-callout">
            <h3>What defines our approach</h3>
            <ul>
              <li>Practitioner-led advisory grounded in real operating environments</li>
              <li>Experienced support across finance, operations, revenue cycle, and execution</li>
              <li>Structured around control, visibility, accountability, and implementation discipline</li>
              <li>Selective partner network for healthcare, public sector, and strategic initiatives</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container services-two-col">
          <div>
            <p className="section-label">Where we fit</p>

            <h2 className="section-title left-align">
              Built for environments where performance depends on execution across functions.
            </h2>

            <p className="section-copy">
              PHS is designed for leadership teams that need more than observations. We help bring
              structure to the issues that sit between strategy and results — the handoffs, controls,
              reporting routines, and accountability systems that determine whether performance is
              actually delivered.
            </p>
          </div>

          <div className="services-callout">
            <h3>Common situations we support</h3>
            <ul>
              <li>Revenue is growing, but cash remains inconsistent</li>
              <li>Billing and collections processes exist, but outcomes vary</li>
              <li>Leadership lacks clear visibility into cash performance</li>
              <li>Growth, acquisition, or transition has exposed control gaps</li>
              <li>Complex initiatives need stronger financial and execution structure</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <p className="eyebrow">Next step</p>

            <h2>Let’s strengthen the systems behind cash performance.</h2>

            <p>
              If delayed invoicing, collections inconsistency, weak visibility, transition-related
              strain, or complex execution needs are affecting performance, we can help.
            </p>

            <div className="hero-actions center-buttons">
              <Link href="/contact" className="btn btn-primary">
                Schedule a Diagnostic
              </Link>

              <Link href="/services" className="btn btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
