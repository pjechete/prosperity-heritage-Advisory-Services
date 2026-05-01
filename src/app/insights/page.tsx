import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Revenue Control & Cash Flow Insights | PHS Advisory',
  description:
    'Insights on revenue control, billing, collections, financial visibility, public sector readiness, and the operational issues that affect cash performance.',
}

export default function InsightsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-copy">
          <p className="eyebrow">Insights</p>

          <h1 className="page-title">
            Perspectives on revenue control, cash performance, and execution discipline.
          </h1>

          <p className="section-copy section-copy-lg">
            Practical insight on the operational, financial, and execution issues that affect how
            revenue converts into cash.
          </p>

          <p className="hero-proof">
            Focused on the patterns leadership teams need to see earlier — before delays,
            leakage, and visibility issues become bigger problems.
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <p className="section-label">What we cover</p>

          <h2 className="section-title">Themes that shape cash performance and execution.</h2>

          <div className="card-grid three-up">
            <div className="card card-feature">
              <h3>Revenue Control</h3>
              <p>
                Insights on billing discipline, revenue integrity, accountability, and the
                operational breakdowns that weaken cash realization.
              </p>
            </div>

            <div className="card card-feature">
              <h3>Cash Stabilization</h3>
              <p>
                Perspectives on receivables pressure, collections performance, cash flow strain,
                and how organizations build stronger control.
              </p>
            </div>

            <div className="card card-feature">
              <h3>Operational Finance</h3>
              <p>
                Practical thinking on reporting visibility, execution discipline, cross-functional
                handoffs, and financial operating rhythm.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section-label">Featured insights</p>

          <h2 className="section-title">Current and upcoming perspectives</h2>

          <p className="section-intro">
            A selection of the themes and issues we continue to explore across revenue operations,
            billing, collections, financial execution, and complex operating environments.
          </p>

          <div className="card-grid">
            <Link href="/insights/revenue-not-converting-to-cash" className="card card-highlight">
              <h3>Why Revenue Does Not Always Convert Into Cash</h3>
              <p>
                Revenue can appear strong while cash remains strained. This piece explains where
                the breakdown usually happens.
              </p>
            </Link>

            <div className="card">
              <h3>The Hidden Cost of Delayed Invoicing</h3>
              <p>
                Billing delays rarely stay isolated. They affect aging, collections, visibility,
                and leadership confidence.
              </p>
            </div>

            <div className="card">
              <h3>Why Unapplied Cash Is Usually a Process Problem</h3>
              <p>
                Unapplied or misapplied payments often point to deeper issues in execution,
                ownership, and reconciliation discipline.
              </p>
            </div>

            <div className="card">
              <h3>When Growth Outpaces Financial Control</h3>
              <p>
                As organizations scale, revenue may grow faster than the systems needed to bill,
                collect, and report it effectively.
              </p>
            </div>

            <div className="card">
              <h3>What Breaks After an Acquisition</h3>
              <p>
                Transition periods often expose weak handoffs, reporting gaps, and execution strain
                across billing and financial operations.
              </p>
            </div>

            <div className="card">
              <h3>Leadership Visibility and the Cash Conversation</h3>
              <p>
                Strong decision-making depends on being able to see where revenue is slowing down
                and why cash performance is weakening.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <p className="section-label">Complex environments</p>

          <h2 className="section-title">
            Public sector, healthcare, and partner-led initiatives require stronger execution visibility.
          </h2>

          <p className="section-intro">
            In public sector, healthcare, and partner-led initiatives, performance issues often
            appear through funding accountability, implementation gaps, stakeholder misalignment,
            weak reporting, and unclear ownership.
          </p>

          <div className="card-grid three-up">
            <div className="card">
              <h3>Public sector readiness</h3>
              <p>
                Thinking on financial controls, funding accountability, reporting discipline, and
                execution structure in public and quasi-government environments.
              </p>
            </div>

            <div className="card">
              <h3>Healthcare transformation</h3>
              <p>
                Perspectives on revenue cycle, operational workflows, implementation readiness, and
                financial visibility across healthcare initiatives.
              </p>
            </div>

            <div className="card">
              <h3>Partner-led execution</h3>
              <p>
                Practical insight on how advisory, market development, financial controls, and
                operational execution come together in strategic partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="narrow">
          <div className="cta-box">
            <p className="eyebrow">Next step</p>

            <h2>Seeing similar patterns in your organization?</h2>

            <p>
              If the issues explored here feel familiar, the next step may be understanding where
              your own revenue process, reporting visibility, or execution structure is slowing
              down.
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
