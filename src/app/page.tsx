publicimport type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadpublicata = {
  title:
    'Operational Stability & Growth Advisory | Prosperity Heritage Advisory',
  description:
    'Prosperity Heritage Advisory helps organizations strengthen operational clarity, visibility, execution discipline, and sustainable growth across complex environments.',
}

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <p className="eyebrow">Prosperity Heritage Advisory</p>

              <h1 className="hero-title">
                Stability and growth depend on how well the organization
                executes.
              </h1>

              <p className="hero-subtext">
                Organizations often experience pressure long before the
                underlying problem becomes fully visible.
              </p>

              <p className="hero-subtext">
                PHS helps leadership teams strengthen operational clarity,
                improve execution discipline, and support more sustainable
                organizational performance across complex environments.
              </p>

              <div className="hero-actions">
                <Link href="/contact" className="btn btn-primary">
                  Schedule a Diagnostic Conversation
                </Link>
                <Link href="/services" className="btn btn-secondary">
                  Explore Areas of Focus
                </Link>
              </div>
            </div>

            <div className="hero-visual">
              <Image
                src="/stability-growth-ecosystem.png"
                alt="Stability and Sustainable Growth Ecosystem"
                width={900}
                height={700}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* SIGNALS */}
      <section className="section section-soft">
        <div className="container">
          <p className="section-label">Early signals</p>

          <h2 className="section-title">
            Common organizational signals before larger problems emerge.
          </h2>

          <p className="section-copy narrow-copy">
            Operational pressure often appears gradually through recurring
            inefficiencies, delayed visibility, inconsistent execution, and
            fragmented coordination across the organization.
          </p>

          <div className="section-visual wide-visual">
            <Image
              src="/organizational-signals-map.png"
              alt="Organizational signals map showing operational pressure, visibility gaps, and coordination risks"
              width={1100}
              height={700}
            />
          </div>
        </div>
      </section>

      {/* REALITY */}
      <section className="section section-dark">
        <div className="container problem-section">
          <div className="section-visual">
            <Image
              src="/pressure-beneath-surface.png"
              alt="Pressure beneath the surface showing visible symptoms and underlying operational causes"
              width={800}
              height={600}
            />
          </div>

          <div>
            <p className="section-label">The reality</p>

            <h2 className="section-title">
              The visible problem is often not the root problem.
            </h2>

            <p className="section-copy">
              Organizations rarely lose stability from one isolated issue.
            </p>

            <p className="section-copy">
              More often, pressure builds gradually through fragmented
              workflows, delayed visibility, inconsistent execution, weak
              coordination, process drift, and operational adaptation to
              unresolved issues.
            </p>

            <p className="section-copy">
              By the time symptoms become financially visible, the underlying
              breakdowns may already be deeply embedded across the organization.
            </p>
          </div>
        </div>
      </section>

      {/* EXECUTION FLOW */}
      <section className="section">
        <div className="container">
          <p className="section-label">Execution flow architecture</p>

          <h2 className="section-title">
            Organizational performance depends on how execution flows across the
            environment.
          </h2>

          <p className="section-copy narrow-copy">
            Stability and growth require more than activity. They depend on how
            strategy, operations, workflows, financial coordination, reporting,
            and leadership decisions connect across the organization.
          </p>

          <div className="section-visual wide-visual">
            <Image
              src="/execution-flow-architecture.png"
              alt="Execution flow architecture showing how organizational performance depends on connected execution"
              width={1100}
              height={700}
            />
          </div>
        </div>
      </section>

      {/* FRAMEWORK */}
      <section className="section section-soft">
        <div className="container">
          <p className="section-label">How we work</p>

          <h2 className="section-title">
            Our approach begins with understanding the environment before
            prescribing solutions.
          </h2>

          <p className="section-copy narrow-copy">
            PHS works with leadership teams to assess operational realities,
            diagnose underlying risks, design practical improvements, support
            implementation, strengthen control, and improve performance over
            time.
          </p>

          <div className="section-visual wide-visual">
            <Image
              src="/phs-diagnostic-framework.png"
              alt="PHS diagnostic framework: Assess, Diagnose, Design, Implement, Control, Optimize"
              width={1100}
              height={700}
            />
          </div>
        </div>
      </section>

      {/* ADVISORY FOCUS */}
      <section className="section">
        <div className="container">
          <p className="section-label">Areas of advisory focus</p>

          <h2 className="section-title">
            Advisory support for stability, visibility, execution, and
            sustainable growth.
          </h2>

          <div className="card-grid three-up">
            <div className="card">
              <h3>Operational Diagnostics & Organizational Assessment</h3>
              <p>
                Understanding where operational pressure, inefficiencies,
                coordination gaps, and execution risks are affecting
                performance.
              </p>
            </div>

            <div className="card">
              <h3>Revenue Execution & Cash Stabilization</h3>
              <p>
                Strengthening the operational and financial environments that
                influence revenue visibility, cash realization, and financial
                stability.
              </p>
            </div>

            <div className="card">
              <h3>Workflow & Process Alignment</h3>
              <p>
                Improving coordination across teams, systems, reporting
                structures, and operational workflows.
              </p>
            </div>

            <div className="card">
              <h3>Visibility, Reporting & Operational Controls</h3>
              <p>
                Supporting clearer operational visibility, stronger reporting
                structures, accountability, and execution oversight.
              </p>
            </div>

            <div className="card">
              <h3>Transition & Stabilization Advisory</h3>
              <p>
                Helping organizations navigate growth, operational strain,
                restructuring, integration, and transformation environments.
              </p>
            </div>

            <div className="card">
              <h3>Healthcare & Public Sector Operational Support</h3>
              <p>
                Supporting complex environments where operational discipline,
                visibility, accountability, and coordination are critical.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="section section-light">
        <div className="container">
          <p className="section-label">Insights</p>

          <h2 className="section-title">
            Perspectives on operational stability, growth, and execution.
          </h2>

          <div className="card-grid four-up">
            <div className="card">
              <h3>Why operational problems become visible too late</h3>
              <p>
                Many organizations respond to symptoms after underlying
                execution issues have already compounded.
              </p>
            </div>

            <div className="card">
              <h3>Growth without visibility creates pressure</h3>
              <p>
                Expansion can increase complexity faster than reporting,
                coordination, and operating discipline mature.
              </p>
            </div>

            <div className="card">
              <h3>Why systems alone do not solve execution problems</h3>
              <p>
                Technology can support performance, but weak ownership and
                process discipline still limit outcomes.
              </p>
            </div>

            <div className="card">
              <h3>The hidden cost of fragmented workflows</h3>
              <p>
                Disconnected teams and informal workarounds quietly reduce
                visibility, consistency, and control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-box">
            <p className="eyebrow">Diagnostic Conversation</p>

            <h2>
              Strong organizations strengthen visibility before instability
              becomes visible.
            </h2>

            <p>
              PHS works with leadership teams seeking stronger operational
              clarity, execution discipline, and sustainable organizational
              performance across complex environments.
            </p>

            <div className="hero-actions center-buttons">
              <Link href="/contact" className="btn btn-primary">
                Schedule a Diagnostic Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
