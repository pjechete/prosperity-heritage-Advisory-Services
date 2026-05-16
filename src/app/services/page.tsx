import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title:
    'Operational Stability, Execution & Growth Advisory | PHS Services',
  description:
    'Prosperity Heritage Advisory helps organizations strengthen operational clarity, visibility, execution discipline, coordination, stability, and sustainable growth across complex environments.',
}

export default function ServicesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container services-hero-grid">
          <div>
            <p className="eyebrow">Services</p>

            <h1>
              Advisory support for operational clarity, stability, and sustainable growth.
            </h1>

            <p className="section-copy">
              Organizations often experience operational pressure through fragmented
              execution, limited visibility, workflow inefficiencies, inconsistent
              coordination, and growing complexity across the environment.
            </p>

            <p className="section-copy">
              PHS works with leadership teams to strengthen operational clarity,
              improve execution discipline, support coordination, and create more
              sustainable performance across complex environments.
            </p>

            <div className="button-row">
              <Link href="/contact" className="btn btn-primary">
                Schedule a Diagnostic Conversation
              </Link>

              <a href="#service-areas" className="btn btn-secondary">
                View Advisory Focus
              </a>
            </div>
          </div>

          <div className="section-visual">
            <Image
              src="/execution-flow-architecture.png"
              alt="Execution flow architecture showing how performance depends on connected execution"
              width={900}
              height={650}
              priority
            />
          </div>
        </div>
      </section>

      {/* WHAT WE STRENGTHEN */}
      <section className="section">
        <div className="container">
          <p className="section-label">What We Strengthen</p>

          <h2 className="section-title">
            The operational environments that influence visibility, execution, and performance.
          </h2>

          <div className="card-grid three-up">
            <div className="card">
              <h3>Operational Visibility</h3>
              <p>
                Creating clearer insight into operational conditions, workflow risks,
                delays, and performance constraints.
              </p>
            </div>

            <div className="card">
              <h3>Workflow Coordination</h3>
              <p>
                Improving alignment across teams, systems, reporting structures, and
                operational handoffs.
              </p>
            </div>

            <div className="card">
              <h3>Execution Discipline</h3>
              <p>
                Strengthening accountability, ownership, process consistency, and
                operational follow-through.
              </p>
            </div>

            <div className="card">
              <h3>Organizational Controls</h3>
              <p>
                Supporting structures that improve oversight, governance, visibility,
                and operational reliability.
              </p>
            </div>

            <div className="card">
              <h3>Financial & Operational Alignment</h3>
              <p>
                Helping operational activity, reporting, and financial realities stay
                connected across the environment.
              </p>
            </div>

            <div className="card">
              <h3>Stability & Performance Support</h3>
              <p>
                Strengthening the foundations required for sustainable organizational
                performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JUMP BAR */}
      <section className="services-jumpbar">
        <div className="container">
          <div className="services-jump-links">
            <a href="#core-advisory">Core Advisory</a>
            <a href="#execution-architecture">Execution Architecture</a>
            <a href="#service-areas">Advisory Focus</a>
            <a href="#how-we-engage">How We Engage</a>
            <a href="#strategic-environments">Strategic Environments</a>
            <a href="#contact-cta">Contact</a>
          </div>
        </div>
      </section>

      {/* CORE ADVISORY */}
      <section id="core-advisory" className="section section-soft">
        <div className="container services-two-col">
          <div>
            <p className="section-label">Core Advisory</p>

            <h2 className="section-title">
              Operational Stability & Execution Advisory
            </h2>

            <p className="section-copy">
              Stability and growth depend on more than strategy or demand. They
              depend on how well the organization executes across workflows, teams,
              systems, reporting, and decision-making environments.
            </p>

            <p className="section-copy">
              PHS helps leadership teams identify where execution is breaking down,
              where visibility is limited, and where coordination gaps are affecting
              performance.
            </p>
          </div>

          <div>
            <p className="section-label">Outcomes</p>

            <div className="outcomes-list">
              <div>Clearer operational visibility</div>
              <div>Stronger execution discipline</div>
              <div>Improved workflow coordination</div>
              <div>Better reporting confidence</div>
              <div>Reduced operational friction</div>
              <div>More stable performance</div>
            </div>
          </div>
        </div>
      </section>

      {/* EXECUTION ARCHITECTURE */}
      <section id="execution-architecture" className="section section-light">
        <div className="container">
          <p className="section-label">Execution Architecture</p>

          <h2 className="section-title">
            Performance depends on how execution flows across the organization.
          </h2>

          <p className="section-copy narrow-copy">
            Operational pressure rarely originates from one isolated issue.
            Performance depends on how workflows, execution, reporting, financial
            coordination, and leadership visibility connect across the organization.
          </p>

          <div className="section-visual wide-visual">
            <Image
              src="/execution-flow-architecture.png"
              alt="Execution flow architecture"
              width={1100}
              height={700}
            />
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section id="service-areas" className="section">
        <div className="container">
          <p className="section-label">Areas of Advisory Focus</p>

          <h2 className="section-title">
            Advisory domains that support stability, visibility, and sustainable growth.
          </h2>

          <p className="section-intro">
            Our advisory work focuses on environments where visibility, execution
            discipline, workflow coordination, and organizational clarity directly
            affect performance and stability.
          </p>

          <div className="card-grid two-up">
            <div className="card">
              <h3>Operational Diagnostics & Organizational Assessment</h3>
              <p>
                Identifying operational pressure, inefficiencies, coordination gaps,
                and execution risks affecting performance.
              </p>
            </div>

            <div className="card">
              <h3>Revenue Execution & Cash Stabilization</h3>
              <p>
                Strengthening the operational and financial environments that
                influence revenue visibility, cash realization, and stability.
              </p>
            </div>

            <div className="card">
              <h3>Workflow & Process Alignment</h3>
              <p>
                Improving coordination across teams, systems, reporting structures,
                and operational workflows.
              </p>
            </div>

            <div className="card">
              <h3>Visibility, Reporting & Operational Controls</h3>
              <p>
                Supporting clearer visibility, stronger reporting structures,
                accountability, and execution oversight.
              </p>
            </div>

            <div className="card">
              <h3>Transition & Stabilization Advisory</h3>
              <p>
                Helping organizations navigate growth, restructuring, integration,
                operational strain, and transformation environments.
              </p>
            </div>

            <div className="card">
              <h3>Healthcare & Public Sector Operational Support</h3>
              <p>
                Supporting complex environments where discipline, visibility,
                accountability, and coordination are critical.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE ENGAGE */}
      <section id="how-we-engage" className="section section-light">
        <div className="container narrow">
          <p className="section-label">How We Engage</p>

          <h2>
            A structured approach to operational diagnostics and organizational improvement.
          </h2>

          <p>
            We begin by understanding the environment before prescribing solutions.
            Our work focuses on assessing conditions, identifying root causes, and
            supporting practical improvements that strengthen execution and visibility.
          </p>

          <p>
            The goal is not complexity. The goal is clarity, discipline, and
            practical progress across the areas that affect stability and performance.
          </p>
        </div>
      </section>

      {/* STRATEGIC ENVIRONMENTS */}
      <section id="strategic-environments" className="section section-soft">
        <div className="container">
          <p className="section-label">Strategic Environments</p>

          <h2>
            Support for complex operating environments where execution matters.
          </h2>

          <p className="section-intro">
            PHS selectively supports organizations and partners where operational
            structure, stakeholder coordination, financial visibility, and execution
            discipline are important to success.
          </p>

          <div className="card-grid two-up">
            <div className="card">
              <h3>Healthcare Operations</h3>
              <p>
                Supporting workflow alignment, implementation readiness, revenue
                visibility, and operational finance structure.
              </p>
            </div>

            <div className="card">
              <h3>Public Sector & Complex Systems</h3>
              <p>
                Bringing structure to scope, accountability, financial workflows,
                stakeholder coordination, and execution requirements.
              </p>
            </div>

            <div className="card">
              <h3>Transformation & Stabilization</h3>
              <p>
                Supporting environments facing growth, transition, process strain,
                integration, or operating model change.
              </p>
            </div>

            <div className="card">
              <h3>Global Advisory Initiatives</h3>
              <p>
                Supporting selected cross-border initiatives requiring coordination,
                financial structure, partner alignment, and execution discipline.
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
              Strong organizational performance depends on visibility,
              coordination, and disciplined execution.
            </h2>

            <p>
              PHS works with leadership teams seeking stronger operational clarity,
              execution discipline, organizational stability, and more sustainable
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
