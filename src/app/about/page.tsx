import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title:
    'About | Operational Stability & Execution Advisory | Prosperity Heritage Advisory',
  description:
    'Prosperity Heritage Advisory helps organizations strengthen operational clarity, visibility, execution discipline, stability, and sustainable growth across complex environments.',
}

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">About</p>

          <h1>
            Built on the belief that operational stability depends on how well organizations execute.
          </h1>

          <p className="section-copy">
            Prosperity Heritage Advisory was shaped through direct experience
            inside organizations where performance, visibility, workflows,
            execution, and financial outcomes were not fully aligned.
          </p>

          <p className="section-copy">
            In many environments, the issue was not effort alone. It was how
            operations, reporting, coordination, ownership, and execution
            functioned beneath the surface.
          </p>
        </div>
      </section>

      {/* OBSERVATION */}
      <section className="section">
        <div className="container narrow">
          <p className="section-label">What we observed</p>

          <h2 className="section-title">
            The same operational patterns appear across industries and environments.
          </h2>

          <p className="section-copy">
            Organizations often experience pressure gradually through fragmented
            workflows, inconsistent execution, recurring workarounds, delayed
            visibility, weak coordination, and growing operational complexity.
          </p>

          <p className="section-copy">
            These issues frequently remain normalized until they begin affecting
            leadership confidence, financial performance, operational stability,
            or organizational growth.
          </p>

          <p className="section-copy">
            The challenge is rarely one isolated issue. It is how the environment
            functions as a whole.
          </p>
        </div>
      </section>

      {/* PERSPECTIVE */}
      <section className="section section-soft">
        <div className="container narrow">
          <p className="section-label">Our perspective</p>

          <h2 className="section-title">
            Stability and growth depend on visibility, coordination, and disciplined execution.
          </h2>

          <p className="section-copy">
            Organizational performance is often treated as an outcome to measure.
            In reality, it reflects how well operational environments are managed
            across workflows, reporting, ownership, decision-making, and execution.
          </p>

          <p className="section-copy">
            When operational discipline weakens, pressure compounds quietly.
            When visibility, coordination, and accountability strengthen,
            performance becomes more sustainable and more predictable.
          </p>
        </div>
      </section>

      {/* HOW WE THINK */}
      <section className="section">
        <div className="container narrow">
          <p className="section-label">How we think</p>

          <h2 className="section-title">
            Visibility, discipline, coordination, and control are operational realities.
          </h2>

          <div className="card-grid three-up">
            <div className="card">
              <h3>Visibility</h3>
              <p>
                Clear insight into operational conditions, workflow pressure,
                execution gaps, and performance risk.
              </p>
            </div>

            <div className="card">
              <h3>Discipline</h3>
              <p>
                Consistent operational execution, accountability, follow-through,
                and process reliability.
              </p>
            </div>

            <div className="card">
              <h3>Coordination</h3>
              <p>
                Stronger alignment across teams, systems, reporting structures,
                workflows, and leadership priorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section section-light">
        <div className="container narrow">
          <p className="section-label">Approach</p>

          <h2 className="section-title">
            A practical approach shaped by real operating environments.
          </h2>

          <p className="section-copy">
            Our work is grounded in environments where operational complexity,
            financial pressure, transformation, execution risk, and organizational
            coordination intersect.
          </p>

          <p className="section-copy">
            Rather than focusing only on reporting or analysis, we work within
            the operational layer where visibility, execution, workflows, and
            organizational performance are shaped day-to-day.
          </p>

          <p className="section-copy">
            The objective is not theoretical improvement. It is practical,
            sustainable progress across the areas that affect organizational
            stability and performance.
          </p>
        </div>
      </section>

      {/* WHERE WE FIT */}
      <section className="section section-soft">
        <div className="container narrow">
          <p className="section-label">Where we fit</p>

          <h2 className="section-title">
            We are often engaged when leadership senses pressure before the root issue is fully visible.
          </h2>

          <ul className="bullet-list">
            <li>Performance and outcomes feel misaligned</li>
            <li>Processes exist, but execution varies</li>
            <li>Growth is increasing operational complexity</li>
            <li>Visibility across workflows feels limited</li>
            <li>Operational pressure is increasing beneath the surface</li>
            <li>Leadership needs clearer insight into execution conditions</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-box">
            <p className="eyebrow">Start the conversation</p>

            <h2>
              Strong organizations strengthen visibility before instability becomes visible.
            </h2>

            <p>
              PHS works with leadership teams seeking stronger operational
              clarity, execution discipline, organizational coordination,
              stability, and sustainable performance across complex environments.
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
