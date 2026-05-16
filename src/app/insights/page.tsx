import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Operational Stability, Execution & Growth Insights | PHS Advisory',
  description:
    'Executive insights on operational clarity, visibility, workflow coordination, execution discipline, organizational stability, and sustainable growth.',
}

const featuredInsights = [
  {
    title: 'Why Revenue Does Not Always Convert Into Cash',
    body:
      'A practical perspective on how revenue visibility, execution discipline, and operational coordination influence financial stability.',
    href: '/insights/revenue-not-converting-to-cash',
  },
  {
    title: 'Why Organizations Normalize Dysfunction',
    body:
      'Temporary fixes, manual workarounds, and informal processes can quietly become permanent operating habits.',
  },
]

const coreThemes = [
  {
    title: 'Operational Visibility',
    body:
      'Perspectives on reporting clarity, leadership awareness, organizational blind spots, and visibility gaps.',
  },
  {
    title: 'Execution Discipline',
    body:
      'Thinking on ownership, coordination, workflow consistency, accountability, and operational follow-through.',
  },
  {
    title: 'Organizational Stability',
    body:
      'Insights on operational pressure, structural weakness, transformation strain, and sustainable performance.',
  },
]

const insightLibrary = [
  {
    title: 'Why Organizations Normalize Workarounds',
    body:
      'Manual fixes may keep work moving temporarily, but they often become embedded operating habits that hide deeper issues.',
  },
  {
    title: 'Growth Without Visibility Creates Pressure',
    body:
      'Expansion can increase complexity faster than reporting, coordination, and operating discipline mature.',
  },
  {
    title: 'Why Systems Alone Do Not Solve Execution Problems',
    body:
      'Technology can support performance, but weak ownership, unclear handoffs, and inconsistent discipline still limit outcomes.',
  },
  {
    title: 'The Hidden Cost of Fragmented Workflows',
    body:
      'Disconnected teams and informal processes quietly reduce visibility, consistency, accountability, and control.',
  },
  {
    title: 'Operational Pressure Often Appears Quietly',
    body:
      'The earliest signs of instability often appear as delays, reporting gaps, recurring escalations, or coordination strain.',
  },
  {
    title: 'What Strong Leadership Teams See Earlier',
    body:
      'Stronger leadership visibility helps organizations identify signals before operational pressure becomes financial pressure.',
  },
]

const complexEnvironments = [
  {
    title: 'Healthcare Operations',
    body:
      'Perspectives on workflow alignment, revenue visibility, implementation readiness, and operational finance structure.',
  },
  {
    title: 'Public Sector Readiness',
    body:
      'Thinking on controls, reporting discipline, execution structure, and accountability in public and quasi-government environments.',
  },
  {
    title: 'Partner-Led Execution',
    body:
      'Practical insight on how advisory support, stakeholder alignment, financial controls, and operational execution come together.',
  },
]

export default function InsightsPage() {
  return (
    <main>
      <section className="phs-hero">
        <div className="phs-container phs-hero-grid">
          <div className="phs-hero-copy">
            <p className="phs-eyebrow">Insights</p>

            <h1>
              Perspectives on operational clarity, execution, stability, and
              sustainable growth.
            </h1>

            <div className="phs-gold-rule" />

            <p className="phs-hero-lede">
              Executive perspectives on operational pressure, organizational
              visibility, workflow coordination, execution discipline, and the
              underlying conditions that influence stability and performance
              across complex environments.
            </p>

            <p>
              Written for leadership teams seeking to identify operational
              risks, execution gaps, visibility issues, and organizational
              pressure earlier — before instability becomes fully visible.
            </p>

            <div className="phs-hero-actions">
              <a href="#featured-insights" className="phs-btn phs-btn-primary">
                View Insights
              </a>

              <Link href="/contact" className="phs-btn phs-btn-secondary">
                Schedule a Conversation
              </Link>
            </div>
          </div>

          <aside className="phs-advisory-panel">
            <p>Insight Lens</p>
            <div className="phs-panel-rule" />

            <div className="phs-panel-item">
              <span className="phs-panel-icon">◎</span>
              <div>
                <h3>Signals</h3>
                <p>Recognizing early indicators of operational pressure.</p>
              </div>
            </div>

            <div className="phs-panel-item">
              <span className="phs-panel-icon">▥</span>
              <div>
                <h3>Patterns</h3>
                <p>Understanding recurring issues beneath visible symptoms.</p>
              </div>
            </div>

            <div className="phs-panel-item">
              <span className="phs-panel-icon">↗</span>
              <div>
                <h3>Discipline</h3>
                <p>Strengthening the conditions that support sustainable performance.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section
        id="featured-insights"
        className="phs-section phs-executive-reality"
      >
        <div className="phs-container phs-reality-grid">
          <div className="phs-reality-heading">
            <p className="phs-section-label">Featured Perspective</p>
            <div className="phs-gold-rule" />
            <h2>
              Strong organizations recognize pressure before instability becomes
              visible.
            </h2>
          </div>

          <div>
            <p>
              Operational pressure often appears gradually. It may show up
              through recurring workarounds, delayed visibility, fragmented
              reporting, inconsistent execution, or growing coordination strain
              across the organization.
            </p>

            <div className="phs-featured-insights">
              {featuredInsights.map((item) =>
                item.href ? (
                  <Link
                    href={item.href}
                    className="phs-insight-card phs-insight-card-featured"
                    key={item.title}
                  >
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <span>Read perspective</span>
                  </Link>
                ) : (
                  <article className="phs-insight-card" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="phs-section phs-advisory-areas">
        <div className="phs-container">
          <div className="phs-centered-header">
            <p className="phs-section-label">Core Themes</p>
            <div className="phs-gold-rule centered" />
            <h2>
              The operational conditions that influence organizational
              performance.
            </h2>
          </div>

          <div className="phs-insight-theme-grid">
            {coreThemes.map((item) => (
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

      <section className="phs-section phs-approach">
        <div className="phs-container">
          <div className="phs-centered-header">
            <p className="phs-section-label">Insight Library</p>
            <div className="phs-gold-rule centered" />
            <h2>Operational signals leadership teams should not ignore.</h2>
          </div>

          <p className="phs-section-intro">
            These topics reflect common patterns that appear when organizations
            are growing, changing, stabilizing, or operating with limited
            visibility across critical workflows.
          </p>

          <div className="phs-insight-library-grid">
            {insightLibrary.map((item) => (
              <article className="phs-insight-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="phs-section phs-executive-reality">
        <div className="phs-container phs-advisory-layout">
          <div className="phs-advisory-heading">
            <p className="phs-section-label">Complex Environments</p>
            <div className="phs-gold-rule" />
            <h2>
              Complex environments require stronger visibility and execution
              discipline.
            </h2>
            <p>
              In healthcare, public sector, transformation, and partner-led
              initiatives, performance issues often appear through implementation
              gaps, stakeholder misalignment, unclear ownership, weak reporting,
              and accountability pressure.
            </p>
          </div>

          <div className="phs-environment-grid">
            {complexEnvironments.map((item) => (
              <article className="phs-advisory-card" key={item.title}>
                <div className="phs-card-icon">◎</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <div className="phs-card-line" />
              </article>
            ))}
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
              clarity, execution discipline, organizational coordination, and
              sustainable performance across complex environments.
            </p>
          </div>

          <div className="phs-cta-actions">
            <Link href="/contact" className="phs-btn phs-btn-gold">
              Schedule a Diagnostic Conversation
            </Link>

            <Link href="/services" className="phs-btn phs-btn-secondary">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
