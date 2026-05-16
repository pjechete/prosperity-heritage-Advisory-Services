import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Strategic Advisory Areas | PHS Services',
  description:
    'Prosperity Heritage Advisory supports organizations through operational visibility, workflow alignment, financial process review, transition stabilization, healthcare and public sector advisory, and leadership diagnostics.',
}

const advisoryAreas = [
  {
    title: 'Revenue Execution & Cash Stabilization',
    assess:
      'Revenue flow, billing timing, collections follow-through, operational handoffs, leakage risk, and cash visibility.',
    affects:
      'Cash predictability, accountability, reporting confidence, and financial stability.',
  },
  {
    title: 'Operational Visibility & Workflow Alignment',
    assess:
      'Workflow movement, coordination gaps, reporting delays, ownership clarity, and operational friction across teams and processes.',
    affects:
      'Execution consistency, responsiveness, leadership visibility, and organizational alignment.',
  },
  {
    title: 'Financial Process & Control Review',
    assess:
      'Financial workflows, reporting routines, control structures, approval paths, reconciliation pressure, and process reliability.',
    affects:
      'Visibility, oversight, accountability, financial coordination, and leadership confidence.',
  },
  {
    title: 'Transition & Transformation Stabilization',
    assess:
      'Growth pressure, implementation strain, integration risks, process disruption, and operational readiness during change.',
    affects:
      'Stability during transition, execution continuity, organizational coordination, and operational resilience.',
  },
  {
    title: 'Healthcare & Public Sector Advisory',
    assess:
      'Stakeholder coordination, workflow readiness, accountability structures, reporting expectations, and execution requirements.',
    affects:
      'Implementation readiness, operational discipline, public accountability, and program performance.',
  },
  {
    title: 'Leadership Diagnostic Support',
    assess:
      'Operational symptoms, pressure points, visibility limitations, decision constraints, recurring workarounds, and root-cause patterns.',
    affects:
      'Leadership clarity, corrective action, operational confidence, and organizational direction.',
  },
]

const environments = [
  {
    title: 'Growing Organizations',
    body:
      'When operational complexity increases faster than workflows, reporting structures, and execution discipline can mature.',
  },
  {
    title: 'Operationally Complex Businesses',
    body:
      'When performance depends on multiple teams, systems, approvals, reporting routines, and operational handoffs working together.',
  },
  {
    title: 'Healthcare & Service Environments',
    body:
      'When operational workflows, implementation readiness, financial visibility, and service coordination intersect.',
  },
  {
    title: 'Public Sector & Partner-Led Initiatives',
    body:
      'When accountability, stakeholder alignment, reporting discipline, and execution structure are critical to success.',
  },
]

export default function ServicesPage() {
  return (
    <main>
      <section className="phs-hero">
        <div className="phs-container phs-hero-grid">
          <div className="phs-hero-copy">
            <p className="phs-eyebrow">Strategic Advisory Areas</p>

            <h1>
              Advisory support for organizations navigating pressure,
              complexity, and execution risk.
            </h1>

            <div className="phs-gold-rule" />

            <p className="phs-hero-lede">
              PHS helps leadership teams assess where operational visibility,
              workflow coordination, financial discipline, and execution
              conditions may be limiting stability and sustainable growth.
            </p>

            <div className="phs-hero-actions">
              <Link href="/contact" className="phs-btn phs-btn-primary">
                Schedule a Diagnostic Conversation
              </Link>

              <a
                href="#strategic-advisory-areas"
                className="phs-btn phs-btn-secondary"
              >
                View Advisory Areas
              </a>
            </div>
          </div>

          <aside className="phs-advisory-panel">
            <p>Service Lens</p>
            <div className="phs-panel-rule" />

            <div className="phs-panel-item">
              <span className="phs-panel-icon">◎</span>
              <div>
                <h3>Visibility</h3>
                <p>Clarifying where leadership lacks timely operating insight.</p>
              </div>
            </div>

            <div className="phs-panel-item">
              <span className="phs-panel-icon">▥</span>
              <div>
                <h3>Coordination</h3>
                <p>Improving how teams, systems, workflows, and handoffs connect.</p>
              </div>
            </div>

            <div className="phs-panel-item">
              <span className="phs-panel-icon">↗</span>
              <div>
                <h3>Execution</h3>
                <p>Strengthening the discipline required to sustain performance.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="phs-section phs-executive-reality">
        <div className="phs-container phs-reality-grid">
          <div className="phs-reality-heading">
            <p className="phs-section-label">Execution Architecture</p>
            <div className="phs-gold-rule" />
            <h2>Operational pressure rarely develops from one isolated issue.</h2>
          </div>

          <div>
            <p>
              In many organizations, performance challenges emerge through
              fragmented workflows, delayed visibility, inconsistent execution,
              unclear ownership, financial misalignment, and growing coordination
              pressure across teams and operating environments.
            </p>

            <p>
              PHS helps leadership teams identify where these conditions are
              developing, how they are affecting performance, and what practical
              improvements can strengthen stability, visibility, and execution
              consistency.
            </p>
          </div>
        </div>
      </section>

      <section id="strategic-advisory-areas" className="phs-section phs-advisory-areas">
        <div className="phs-container">
          <div className="phs-centered-header">
            <p className="phs-section-label">Strategic Advisory Areas</p>
            <div className="phs-gold-rule centered" />
            <h2>
              Areas of operational focus where PHS helps organizations create clarity.
            </h2>
          </div>

          <div className="phs-service-grid">
            {advisoryAreas.map((area) => (
              <article className="phs-service-card" key={area.title}>
                <div className="phs-card-icon">▧</div>
                <h3>{area.title}</h3>

                <p>
                  <strong>What we assess:</strong> {area.assess}
                </p>

                <p>
                  <strong>What it affects:</strong> {area.affects}
                </p>

                <div className="phs-card-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="phs-section">
        <div className="phs-container phs-reality-grid">
          <div className="phs-reality-heading">
            <p className="phs-section-label">How We Engage</p>
            <div className="phs-gold-rule" />
            <h2>
              We begin by understanding the operating environment before
              prescribing solutions.
            </h2>
          </div>

          <div>
            <p>
              Our work starts with diagnostic review. We assess workflow
              realities, reporting visibility, operational coordination,
              financial alignment, and execution patterns to identify where
              pressure is building and what needs attention.
            </p>

            <p>
              The objective is practical clarity: understanding what is
              happening, why it matters, where stability is being affected, and
              what actions can strengthen organizational performance.
            </p>
          </div>
        </div>
      </section>

      <section className="phs-section phs-advisory-areas">
        <div className="phs-container">
          <div className="phs-advisory-layout">
            <div className="phs-advisory-heading">
              <p className="phs-section-label">Where This Applies</p>
              <div className="phs-gold-rule" />
              <h2>
                Environments where visibility, coordination, and disciplined
                execution matter.
              </h2>
            </div>

            <div className="phs-environment-grid">
              {environments.map((item) => (
                <article className="phs-advisory-card" key={item.title}>
                  <div className="phs-card-icon">◎</div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <div className="phs-card-line" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="phs-final-cta">
        <div className="phs-container phs-cta-grid">
          <div>
            <h2>
              Strong performance begins with understanding what is happening
              beneath the surface.
            </h2>
            <p>
              PHS works with leadership teams seeking clearer visibility,
              stronger execution discipline, and more sustainable organizational
              performance.
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
