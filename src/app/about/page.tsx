import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title:
    'About | Operational Stability & Execution Advisory | Prosperity Heritage Advisory',
  description:
    'Prosperity Heritage Advisory helps organizations strengthen operational clarity, visibility, execution discipline, stability, and sustainable growth across complex environments.',
}

const principles = [
  {
    title: 'Visibility',
    body:
      'Clear insight into operational conditions, workflow pressure, execution gaps, and performance risk.',
  },
  {
    title: 'Discipline',
    body:
      'Consistent operational execution, accountability, follow-through, and process reliability.',
  },
  {
    title: 'Coordination',
    body:
      'Stronger alignment across teams, systems, reporting structures, workflows, and leadership priorities.',
  },
]

const fitSignals = [
  'Performance and outcomes feel misaligned',
  'Processes exist, but execution varies',
  'Growth is increasing operational complexity',
  'Visibility across workflows feels limited',
  'Operational pressure is increasing beneath the surface',
  'Leadership needs clearer insight into execution conditions',
]

export default function AboutPage() {
  return (
    <main>
      <section className="phs-hero">
        <div className="phs-container phs-hero-grid">
          <div className="phs-hero-copy">
            <p className="phs-eyebrow">About Prosperity Heritage Advisory</p>

            <h1>
              Built on the belief that stability depends on how well organizations execute.
            </h1>

            <div className="phs-gold-rule" />

            <p className="phs-hero-lede">
              Prosperity Heritage Advisory was shaped through direct experience
              inside organizations where performance, visibility, workflows,
              execution, and financial outcomes were not fully aligned.
            </p>

            <p>
              In many environments, the issue was not effort alone. It was how
              operations, reporting, coordination, ownership, and execution
              functioned beneath the surface.
            </p>
          </div>

          <aside className="phs-advisory-panel">
            <p>Advisory Perspective</p>
            <div className="phs-panel-rule" />

            <div className="phs-panel-item">
              <span className="phs-panel-icon">◎</span>
              <div>
                <h3>Operational clarity</h3>
                <p>Understanding what is happening beneath surface-level symptoms.</p>
              </div>
            </div>

            <div className="phs-panel-item">
              <span className="phs-panel-icon">▥</span>
              <div>
                <h3>Execution discipline</h3>
                <p>Strengthening how work moves through the organization.</p>
              </div>
            </div>

            <div className="phs-panel-item">
              <span className="phs-panel-icon">↗</span>
              <div>
                <h3>Sustainable performance</h3>
                <p>Supporting stability, visibility, and long-term growth.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="phs-section phs-executive-reality">
        <div className="phs-container phs-reality-grid">
          <div className="phs-reality-heading">
            <p className="phs-section-label">What We Observed</p>
            <div className="phs-gold-rule" />
            <h2>
              The same operational patterns appear across industries and environments.
            </h2>
          </div>

          <div>
            <p>
              Organizations often experience pressure gradually through
              fragmented workflows, inconsistent execution, recurring
              workarounds, delayed visibility, weak coordination, and growing
              operational complexity.
            </p>

            <p>
              These issues frequently remain normalized until they begin
              affecting leadership confidence, financial performance,
              operational stability, or organizational growth.
            </p>

            <p>
              The challenge is rarely one isolated issue. It is how the
              environment functions as a whole.
            </p>
          </div>
        </div>
      </section>

      <section className="phs-section phs-approach">
        <div className="phs-container">
          <div className="phs-centered-header">
            <p className="phs-section-label">Our Perspective</p>
            <div className="phs-gold-rule centered" />
            <h2>
              Stability and growth depend on visibility, coordination, and
              disciplined execution.
            </h2>
          </div>

          <div className="phs-about-copy">
            <p>
              Organizational performance is often treated as an outcome to
              measure. In reality, it reflects how well operational environments
              are managed across workflows, reporting, ownership, decision-making,
              and execution.
            </p>

            <p>
              When operational discipline weakens, pressure compounds quietly.
              When visibility, coordination, and accountability strengthen,
              performance becomes more sustainable and more predictable.
            </p>
          </div>
        </div>
      </section>

      <section className="phs-section phs-advisory-areas">
        <div className="phs-container">
          <div className="phs-centered-header">
            <p className="phs-section-label">How We Think</p>
            <div className="phs-gold-rule centered" />
            <h2>
              Visibility, discipline, coordination, and control are operational
              realities.
            </h2>
          </div>

          <div className="phs-about-principles">
            {principles.map((item) => (
              <article className="phs-advisory-card" key={item.title}>
                <div className="phs-card-icon">▧</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <div className="phs-card-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="phs-section phs-executive-reality">
        <div className="phs-container phs-reality-grid">
          <div className="phs-reality-heading">
            <p className="phs-section-label">Approach</p>
            <div className="phs-gold-rule" />
            <h2>A practical approach shaped by real operating environments.</h2>
          </div>

          <div>
            <p>
              Our work is grounded in environments where operational complexity,
              financial pressure, transformation, execution risk, and
              organizational coordination intersect.
            </p>

            <p>
              Rather than focusing only on reporting or analysis, we work within
              the operational layer where visibility, execution, workflows, and
              organizational performance are shaped day-to-day.
            </p>

            <p>
              The objective is not theoretical improvement. It is practical,
              sustainable progress across the areas that affect organizational
              stability and performance.
            </p>
          </div>
        </div>
      </section>

      <section className="phs-section phs-advisory-areas">
        <div className="phs-container">
          <div className="phs-advisory-layout">
            <div className="phs-advisory-heading">
              <p className="phs-section-label">Where We Fit</p>
              <div className="phs-gold-rule" />
              <h2>
                We are often engaged when leadership senses pressure before the
                root issue is fully visible.
              </h2>
            </div>

            <div className="phs-fit-list">
              {fitSignals.map((item) => (
                <div className="phs-fit-item" key={item}>
                  <span>◎</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="phs-final-cta">
        <div className="phs-container phs-cta-grid">
          <div>
            <h2>
              Strong organizations strengthen visibility before instability
              becomes visible.
            </h2>

            <p>
              PHS works with leadership teams seeking stronger operational
              clarity, execution discipline, organizational coordination,
              stability, and sustainable performance across complex environments.
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
