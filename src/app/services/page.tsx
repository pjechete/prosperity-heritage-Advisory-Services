import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Strategic Advisory Areas | PHS Services',
  description:
    'Prosperity Heritage Advisory supports organizations through operational visibility, workflow alignment, financial process review, transition stabilization, healthcare and public sector advisory, and leadership diagnostics.',
}

export default function ServicesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Services</p>

          <h1>
            Strategic advisory support for organizations navigating pressure,
            complexity, and execution risk.
          </h1>

          <p className="section-copy">
            PHS helps leadership teams assess where operational visibility,
            workflow coordination, financial discipline, and execution conditions
            may be limiting stability and sustainable growth.
          </p>

          <div className="button-row">
            <Link href="/contact" className="btn btn-primary">
              Schedule a Diagnostic Conversation
            </Link>

            <a href="#strategic-advisory-areas" className="btn btn-secondary">
              View Advisory Areas
            </a>
          </div>
        </div>
      </section>

      {/* EXECUTION ARCHITECTURE */}
      <section className="section section-light">
        <div className="container narrow">
          <p className="section-label">Execution Architecture</p>

          <h2 className="section-title">
            Operational pressure rarely develops from one isolated issue.
          </h2>

          <p className="section-copy">
            In many organizations, performance challenges emerge through fragmented
            workflows, delayed visibility, inconsistent execution, unclear
            ownership, financial misalignment, and growing coordination pressure
            across teams and operating environments.
          </p>

          <p className="section-copy">
            PHS focuses on helping leadership teams identify where these
            conditions are developing, how they are affecting performance,
            and what practical improvements can strengthen stability,
            visibility, and execution consistency.
          </p>
        </div>
      </section>

      {/* STRATEGIC ADVISORY AREAS */}
      <section id="strategic-advisory-areas" className="section">
        <div className="container">
          <p className="section-label">Strategic Advisory Areas</p>

          <h2 className="section-title">
            Areas of operational focus where PHS helps organizations create clarity.
          </h2>

          <div className="card-grid two-up">
            <div className="card">
              <h3>Revenue Execution & Cash Stabilization</h3>

              <p>
                <strong>What we assess:</strong> revenue flow, billing timing,
                collections follow-through, operational handoffs, leakage risk,
                and cash visibility.
              </p>

              <p>
                <strong>What it affects:</strong> cash predictability,
                accountability, reporting confidence, and financial stability.
              </p>
            </div>

            <div className="card">
              <h3>Operational Visibility & Workflow Alignment</h3>

              <p>
                <strong>What we assess:</strong> workflow movement, coordination
                gaps, reporting delays, ownership clarity, and operational
                friction across teams and processes.
              </p>

              <p>
                <strong>What it affects:</strong> execution consistency,
                responsiveness, leadership visibility, and organizational
                alignment.
              </p>
            </div>

            <div className="card">
              <h3>Financial Process & Control Review</h3>

              <p>
                <strong>What we assess:</strong> financial workflows, reporting
                routines, control structures, approval paths, reconciliation
                pressure, and process reliability.
              </p>

              <p>
                <strong>What it affects:</strong> visibility, oversight,
                accountability, financial coordination, and leadership confidence.
              </p>
            </div>

            <div className="card">
              <h3>Transition & Transformation Stabilization</h3>

              <p>
                <strong>What we assess:</strong> growth pressure, implementation
                strain, integration risks, process disruption, and operational
                readiness during change.
              </p>

              <p>
                <strong>What it affects:</strong> stability during transition,
                execution continuity, organizational coordination, and operational
                resilience.
              </p>
            </div>

            <div className="card">
              <h3>Healthcare & Public Sector Advisory</h3>

              <p>
                <strong>What we assess:</strong> stakeholder coordination,
                workflow readiness, accountability structures, reporting
                expectations, and execution requirements.
              </p>

              <p>
                <strong>What it affects:</strong> implementation readiness,
                operational discipline, public accountability, and program
                performance.
              </p>
            </div>

            <div className="card">
              <h3>Leadership Diagnostic Support</h3>

              <p>
                <strong>What we assess:</strong> operational symptoms, pressure
                points, visibility limitations, decision constraints, recurring
                workarounds, and root-cause patterns.
              </p>

              <p>
                <strong>What it affects:</strong> leadership clarity, corrective
                action, operational confidence, and organizational direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE ENGAGE */}
      <section className="section section-soft">
        <div className="container narrow">
          <p className="section-label">How We Engage</p>

          <h2>
            We begin by understanding the operating environment before prescribing solutions.
          </h2>

          <p>
            Our work starts with diagnostic review. We assess workflow realities,
            reporting visibility, operational coordination, financial alignment,
            and execution patterns to identify where pressure is building and
            what needs attention.
          </p>

          <p>
            The objective is practical clarity: understanding what is happening,
            why it matters, where stability is being affected, and what actions
            can strengthen organizational performance.
          </p>
        </div>
      </section>

      {/* STRATEGIC ENVIRONMENTS */}
      <section className="section">
        <div className="container">
          <p className="section-label">Where This Applies</p>

          <h2 className="section-title">
            Support for environments where visibility, coordination, and disciplined execution matter.
          </h2>

          <div className="card-grid two-up">
            <div className="card">
              <h3>Growing Organizations</h3>

              <p>
                When operational complexity increases faster than workflows,
                reporting structures, and execution discipline can mature.
              </p>
            </div>

            <div className="card">
              <h3>Operationally Complex Businesses</h3>

              <p>
                When performance depends on multiple teams, systems, approvals,
                reporting routines, and operational handoffs working together.
              </p>
            </div>

            <div className="card">
              <h3>Healthcare & Service Environments</h3>

              <p>
                When operational workflows, implementation readiness, financial
                visibility, and service coordination intersect.
              </p>
            </div>

            <div className="card">
              <h3>Public Sector & Partner-Led Initiatives</h3>

              <p>
                When accountability, stakeholder alignment, reporting discipline,
                and execution structure are critical to success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact-cta" className="cta-band">
        <div className="container">
          <div className="cta-box">
            <p className="eyebrow">Diagnostic Conversation</p>

            <h2>
              Strong performance begins with understanding what is happening beneath the surface.
            </h2>

            <p>
              PHS works with leadership teams seeking clearer visibility,
              stronger execution discipline, and more sustainable organizational
              performance.
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
