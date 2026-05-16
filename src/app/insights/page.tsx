import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Operational Stability, Execution & Growth Insights | PHS Advisory',
  description:
    'Executive insights on operational clarity, visibility, workflow coordination, execution discipline, organizational stability, and sustainable growth.',
}

export default function InsightsPage() {
  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container page-hero-copy">
          <p className="eyebrow">Insights</p>

          <h1 className="page-title">
            Perspectives on operational clarity, execution, stability, and sustainable growth.
          </h1>

          <p className="section-copy section-copy-lg">
            Executive perspectives on operational pressure, organizational visibility,
            workflow coordination, execution discipline, and the underlying conditions
            that influence stability and performance across complex environments.
          </p>

          <p className="hero-proof">
            Written for leadership teams seeking to identify operational risks,
            execution gaps, visibility issues, and organizational pressure earlier —
            before instability becomes fully visible.
          </p>
        </div>
      </section>

      {/* FEATURED INSIGHT */}
      <section className="section section-soft">
        <div className="container">
          <p className="section-label">Featured perspective</p>

          <h2 className="section-title">
            Strong organizations recognize pressure before instability becomes visible.
          </h2>

          <p className="section-intro">
            Operational pressure often appears gradually. It may show up through
            recurring workarounds, delayed visibility, fragmented reporting,
            inconsistent execution, or growing coordination strain across the
            organization.
          </p>

          <div className="card-grid two-up">
            <Link
              href="/insights/revenue-not-converting-to-cash"
              className="card card-highlight"
            >
              <h3>Why Revenue Does Not Always Convert Into Cash</h3>
              <p>
                A practical perspective on how revenue visibility, execution
                discipline, and operational coordination influence financial
                stability.
              </p>
            </Link>

            <div className="card">
              <h3>Why Organizations Normalize Dysfunction</h3>
              <p>
                Temporary fixes, manual workarounds, and informal processes can
                quietly become permanent operating habits.
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
            The operational conditions that influence organizational performance.
          </h2>

          <div className="card-grid three-up">
            <div className="card card-feature">
              <h3>Operational Visibility</h3>
              <p>
                Perspectives on reporting clarity, leadership awareness,
                organizational blind spots, and visibility gaps.
              </p>
            </div>

            <div className="card card-feature">
              <h3>Execution Discipline</h3>
              <p>
                Thinking on ownership, coordination, workflow consistency,
                accountability, and operational follow-through.
              </p>
            </div>

            <div className="card card-feature">
              <h3>Organizational Stability</h3>
              <p>
                Insights on operational pressure, structural weakness,
                transformation strain, and sustainable performance.
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
            Operational signals leadership teams should not ignore.
          </h2>

          <p className="section-intro">
            These topics reflect common patterns that appear when organizations
            are growing, changing, stabilizing, or operating with limited visibility
            across critical workflows.
          </p>

          <div className="card-grid three-up">
            <div className="card">
              <h3>Why Organizations Normalize Workarounds</h3>
              <p>
                Manual fixes may keep work moving temporarily, but they often
                become embedded operating habits that hide deeper issues.
              </p>
            </div>

            <div className="card">
              <h3>Growth Without Visibility Creates Pressure</h3>
              <p>
                Expansion can increase complexity faster than reporting,
                coordination, and operating discipline mature.
              </p>
            </div>

            <div className="card">
              <h3>Why Systems Alone Do Not Solve Execution Problems</h3>
              <p>
                Technology can support performance, but weak ownership, unclear
                handoffs, and inconsistent discipline still limit outcomes.
              </p>
            </div>

            <div className="card">
              <h3>The Hidden Cost of Fragmented Workflows</h3>
              <p>
                Disconnected teams and informal processes quietly reduce
                visibility, consistency, accountability, and control.
              </p>
            </div>

            <div className="card">
              <h3>Operational Pressure Often Appears Quietly</h3>
              <p>
                The earliest signs of instability often appear as delays,
                reporting gaps, recurring escalations, or coordination strain.
              </p>
            </div>

            <div className="card">
              <h3>What Strong Leadership Teams See Earlier</h3>
              <p>
                Stronger leadership visibility helps organizations identify
                signals before operational pressure becomes financial pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLEX ENVIRONMENTS */}
      <section className="section section-soft">
        <div className="container">
          <p className="section-label">Complex environments</p>

          <h2 className="section-title">
            Complex environments require stronger visibility and execution discipline.
          </h2>

          <p className="section-intro">
            In healthcare, public sector, transformation, and partner-led
            initiatives, performance issues often appear through implementation
            gaps, stakeholder misalignment, unclear ownership, weak reporting,
            and accountability pressure.
          </p>

          <div className="card-grid three-up">
            <div className="card">
              <h3>Healthcare Operations</h3>
              <p>
                Perspectives on workflow alignment, revenue visibility,
                implementation readiness, and operational finance structure.
              </p>
            </div>

            <div className="card">
              <h3>Public Sector Readiness</h3>
              <p>
                Thinking on controls, reporting discipline, execution structure,
                and accountability in public and quasi-government environments.
              </p>
            </div>

            <div className="card">
              <h3>Partner-Led Execution</h3>
              <p>
                Practical insight on how advisory support, stakeholder alignment,
                financial controls, and operational execution come together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="narrow">
          <div className="cta-box">
            <p className="eyebrow">Diagnostic Conversation</p>

            <h2>
              Strong organizations strengthen visibility before instability becomes visible.
            </h2>

            <p>
              PHS works with leadership teams seeking stronger operational clarity,
              execution discipline, organizational coordination, and sustainable
              performance across complex environments.
            </p>

            <div className="hero-actions center-buttons">
              <Link href="/contact" className="btn btn-primary">
                Schedule a Diagnostic Conversation
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
