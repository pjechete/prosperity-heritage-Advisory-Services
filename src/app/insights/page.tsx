import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Revenue Execution Control Insights | PHS Advisory',
  description:
    'Executive insights on revenue execution control, cash stabilization, billing discipline, collections execution, revenue leakage, and financial visibility.',
}

export default function InsightsPage() {
  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container page-hero-copy">
          <p className="eyebrow">Insights</p>

          <h1 className="page-title">
            Perspectives on why revenue does not always become cash.
          </h1>

          <p className="section-copy section-copy-lg">
            Executive thinking on the execution gaps, process breakdowns, and
            visibility issues that affect how revenue converts into predictable
            cash.
          </p>

          <p className="hero-proof">
            Written for leadership teams that want to see cash performance
            issues earlier — before delays, leakage, and uncertainty become
            larger business problems.
          </p>
        </div>
      </section>

      {/* FEATURED INSIGHT */}
      <section className="section section-soft">
        <div className="container">
          <p className="section-label">Featured perspective</p>

          <h2 className="section-title">
            Revenue is not the issue. Conversion is.
          </h2>

          <p className="section-intro">
            Many organizations generate revenue consistently, yet still struggle
            with cash predictability. The issue often sits between revenue
            generation and cash realization — across handoffs, billing,
            collections, and reporting visibility.
          </p>

          <div className="card-grid two-up">
            <Link
              href="/insights/revenue-not-converting-to-cash"
              className="card card-highlight"
            >
              <h3>Why Revenue Does Not Always Convert Into Cash</h3>
              <p>
                A practical explanation of where revenue slows, leaks, or fails
                to convert — and why leadership teams need to look beyond
                financial reporting alone.
              </p>
            </Link>

            <div className="card">
              <h3>The Revenue-to-Cash Execution Gap</h3>
              <p>
                Strong revenue can hide weak execution. The most important
                breakdowns often happen between operations, billing, collections,
                and finance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE THEMES */}
      <section className="section">
        <div className="container">
          <p className="section-label">Core themes</p>

          <h2 className="section-title">
            The operating issues that shape cash performance.
          </h2>

          <div className="card-grid three-up">
            <div className="card card-feature">
              <h3>Revenue Execution Control</h3>
              <p>
                Perspectives on ownership, handoffs, workflow discipline, and
                the execution points that determine whether revenue becomes
                cash.
              </p>
            </div>

            <div className="card card-feature">
              <h3>Billing & Collections Discipline</h3>
              <p>
                Insights on invoicing delays, receivables pressure, escalation
                routines, and the habits that improve cash conversion.
              </p>
            </div>

            <div className="card card-feature">
              <h3>Cash Visibility</h3>
              <p>
                Thinking on the reports, signals, and operating rhythms leaders
                need to see where cash is delayed or at risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHT LIBRARY */}
      <section className="section section-light">
        <div className="container">
          <p className="section-label">Insight library</p>

          <h2 className="section-title">
            Signals leadership teams should not ignore.
          </h2>

          <p className="section-intro">
            These topics reflect common patterns we see when revenue performance
            and cash outcomes are not fully aligned.
          </p>

          <div className="card-grid three-up">
            <div className="card">
              <h3>The Hidden Cost of Delayed Invoicing</h3>
              <p>
                Billing delays rarely stay isolated. They affect aging,
                collections, visibility, and leadership confidence.
              </p>
            </div>

            <div className="card">
              <h3>Why Unapplied Cash Is Usually a Process Problem</h3>
              <p>
                Unapplied or misapplied payments often point to deeper issues in
                execution, ownership, and reconciliation discipline.
              </p>
            </div>

            <div className="card">
              <h3>When Growth Outpaces Control</h3>
              <p>
                As organizations scale, revenue may grow faster than the systems
                and routines needed to bill, collect, and report it effectively.
              </p>
            </div>

            <div className="card">
              <h3>What Breaks After an Acquisition</h3>
              <p>
                Transition periods often expose weak handoffs, reporting gaps,
                and execution strain across billing and financial operations.
              </p>
            </div>

            <div className="card">
              <h3>Leadership Visibility and the Cash Conversation</h3>
              <p>
                Strong decisions depend on seeing where revenue is slowing down,
                what is at risk, and why cash performance is weakening.
              </p>
            </div>

            <div className="card">
              <h3>Why More Revenue Does Not Always Reduce Pressure</h3>
              <p>
                Growth can increase stress when revenue volume rises faster than
                execution discipline, controls, and cash visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXECUTION ENVIRONMENTS */}
      <section className="section section-soft">
        <div className="container">
          <p className="section-label">Complex environments</p>

          <h2 className="section-title">
            Where complexity increases the need for execution visibility.
          </h2>

          <p className="section-intro">
            In healthcare, public sector, and partner-led initiatives,
            performance issues often appear through implementation gaps,
            stakeholder misalignment, unclear ownership, weak reporting, and
            funding accountability pressure.
          </p>

          <div className="card-grid three-up">
            <div className="card">
              <h3>Healthcare Transformation</h3>
              <p>
                Perspectives on revenue cycle, operational workflows,
                implementation readiness, and financial visibility across
                healthcare initiatives.
              </p>
            </div>

            <div className="card">
              <h3>Public Sector Readiness</h3>
              <p>
                Thinking on financial controls, reporting discipline, execution
                structure, and accountability in public and quasi-government
                environments.
              </p>
            </div>

            <div className="card">
              <h3>Partner-Led Execution</h3>
              <p>
                Practical insight on how advisory support, market development,
                financial controls, and operational execution come together in
                strategic partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="narrow">
          <div className="cta-box">
            <p className="eyebrow">Next step</p>

            <h2>
              If these patterns feel familiar, the issue may already be visible
              in your revenue-to-cash process.
            </h2>

            <p>
              We help leadership teams identify where revenue is slowing,
              leaking, or failing to convert into predictable cash — and what
              needs to change.
            </p>

            <div className="hero-actions center-buttons">
              <Link href="/contact" className="btn btn-primary">
                Schedule a Revenue Diagnostic
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
