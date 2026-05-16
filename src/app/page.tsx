import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title:
    'Operational Stability & Growth Advisory | Prosperity Heritage Advisory',
  description:
    'Prosperity Heritage Advisory helps organizations strengthen operational clarity, visibility, execution discipline, and sustainable growth across complex environments.',
}

const executiveSignals = [
  {
    title: 'Pressure builds gradually',
    body: 'Early signals are often easy to overlook but important to address.',
  },
  {
    title: 'Underlying issues compound',
    body: 'Fragmented workflows, delayed visibility, and inconsistent execution create hidden drag.',
  },
  {
    title: 'Symptoms appear financially',
    body: 'By the time results are visible, root causes may already be embedded.',
  },
  {
    title: 'Stability is jeopardized',
    body: 'Operational risk increases and strategic options begin to narrow.',
  },
  {
    title: 'Performance plateaus',
    body: 'Growth becomes harder to achieve, sustain, and control.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Assess',
    body: 'Understand the environment, challenges, and operational realities.',
  },
  {
    number: '02',
    title: 'Diagnose',
    body: 'Identify root causes, risks, and gaps affecting stability and performance.',
  },
  {
    number: '03',
    title: 'Design',
    body: 'Develop practical solutions and an actionable path forward.',
  },
  {
    number: '04',
    title: 'Implement',
    body: 'Guide execution with alignment, discipline, and accountability.',
  },
  {
    number: '05',
    title: 'Control',
    body: 'Strengthen controls, workflows, and visibility to sustain improvement.',
  },
  {
    number: '06',
    title: 'Optimize',
    body: 'Continuously improve to support resilience and long-term growth.',
  },
]

const advisoryAreas = [
  {
    title: 'Operational Diagnostics & Organizational Assessment',
    body: 'Identify pressure points, inefficiencies, risks, and coordination gaps across people, process, and systems.',
  },
  {
    title: 'Revenue Execution & Cash Stabilization',
    body: 'Strengthen revenue-to-cash workflows, reduce leakage, and improve predictability.',
  },
  {
    title: 'Process & Workflow Design',
    body: 'Simplify, standardize, and align workflows to improve efficiency, quality, and execution consistency.',
  },
  {
    title: 'Operational Visibility & Performance Management',
    body: 'Build reporting, dashboards, and metrics to support informed decisions and accountability.',
  },
  {
    title: 'Leadership Alignment & Organizational Effectiveness',
    body: 'Strengthen coordination, ownership, and execution across teams and the organization.',
  },
]

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="phs-hero">
        <div className="phs-container phs-hero-grid">
          <div className="phs-hero-copy">
            <p className="phs-eyebrow">
              Operational stability. Execution discipline. Sustainable growth.
            </p>

            <h1>
              Stability and growth depend on how well the organization executes.
            </h1>

            <div className="phs-gold-rule" />

            <p className="phs-hero-lede">
              Organizations experience pressure long before the underlying
              problem becomes fully visible.
            </p>

            <p>
              PHS helps leadership teams strengthen operational clarity, improve
              execution discipline, and support more sustainable performance
              across complex environments.
            </p>

            <div className="phs-hero-actions">
              <Link href="/contact" className="phs-btn phs-btn-primary">
                Schedule a Diagnostic Conversation
              </Link>
              <Link href="/services" className="phs-btn phs-btn-secondary">
                Explore Areas of Focus
              </Link>
            </div>
          </div>

          <aside className="phs-advisory-panel" aria-label="PHS advisory lens">
            <p>Our Advisory Lens</p>
            <div className="phs-panel-rule" />

            <div className="phs-panel-item">
              <span className="phs-panel-icon">◎</span>
              <div>
                <h3>Operational clarity</h3>
                <p>We bring clarity to complexity and uncertainty.</p>
              </div>
            </div>

            <div className="phs-panel-item">
              <span className="phs-panel-icon">▥</span>
              <div>
                <h3>Execution discipline</h3>
                <p>We strengthen how work gets done across the organization.</p>
              </div>
            </div>

            <div className="phs-panel-item">
              <span className="phs-panel-icon">↗</span>
              <div>
                <h3>Sustainable performance</h3>
                <p>
                  We help build the foundation for long-term stability and
                  measurable growth.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* EXECUTIVE REALITY */}
      <section className="phs-section phs-executive-reality">
        <div className="phs-container phs-reality-grid">
          <div className="phs-reality-heading">
            <p className="phs-section-label">The Executive Reality</p>
            <div className="phs-gold-rule" />
            <h2>The visible problem is often not the root problem.</h2>
          </div>

          <div className="phs-signal-grid">
            {executiveSignals.map((signal) => (
              <article className="phs-signal-card" key={signal.title}>
                <div className="phs-signal-icon">○</div>
                <h3>{signal.title}</h3>
                <p>{signal.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="phs-section phs-approach">
        <div className="phs-container">
          <div className="phs-centered-header">
            <p className="phs-section-label">Our Approach</p>
            <div className="phs-gold-rule centered" />
            <h2>
              A structured approach that creates clarity, strengthens execution,
              and drives results.
            </h2>
          </div>

          <div className="phs-process-grid">
            {processSteps.map((step) => (
              <article className="phs-process-step" key={step.number}>
                <span>{step.number}</span>
                <div className="phs-process-icon">◎</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ADVISORY AREAS */}
      <section className="phs-section phs-advisory-areas">
        <div className="phs-container phs-advisory-layout">
          <div className="phs-advisory-heading">
            <p className="phs-section-label">Strategic Advisory Areas</p>
            <div className="phs-gold-rule" />
            <h2>
              Focused advisory.
              <br />
              Measurable impact.
            </h2>
          </div>

          <div className="phs-advisory-card-grid">
            {advisoryAreas.map((area) => (
              <article className="phs-advisory-card" key={area.title}>
                <div className="phs-card-icon">▧</div>
                <h3>{area.title}</h3>
                <p>{area.body}</p>
                <div className="phs-card-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="phs-final-cta">
        <div className="phs-container phs-cta-grid">
          <div>
            <h2>
              Strong organizations strengthen visibility before instability
              becomes visible.
            </h2>
            <p>
              Let’s start a conversation about your organization’s opportunities
              and how we can help.
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
