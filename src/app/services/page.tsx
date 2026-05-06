import type { Metadata } from 'next'
import Link from 'next/link'
import RevenueCashDiagram from '../components/RevenueCashDiagram'

export const metadata: Metadata = {
  title:
    'Revenue Execution Control & Cash Stabilization Advisory | PHS Services',
  description:
    'Prosperity Heritage Advisory helps leadership teams restore control over how revenue becomes cash by fixing execution breakdowns across operations, billing, collections, and financial workflows.',
}

export default function ServicesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="services-hero-grid">
            <div>
              <p className="eyebrow">Services</p>

              <h1>Restoring Control Over How Revenue Becomes Cash.</h1>

              <p className="section-copy">
                Prosperity Heritage Advisory helps leadership teams identify and
                fix the breakdowns between revenue generation, billing,
                collections, and cash realization—so revenue turns into
                predictable cash.
              </p>

              <p className="section-copy">
                Our work focuses on the execution layer—where revenue slows,
                leaks, or fails to convert—across operations, billing,
                collections, and financial workflows.
              </p>

              <div className="button-row">
                <Link href="/contact" className="btn btn-primary">
                  Schedule a Revenue Diagnostic
                </Link>
                <a href="#service-areas" className="btn btn-secondary">
                  View Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE STRENGTHEN */}
      <section className="section">
        <div className="container">
          <p className="section-label">What We Strengthen</p>

          <h2 className="section-title">
            The execution points that determine whether revenue becomes cash.
          </h2>

          <div className="card-grid three-up">
            <div className="card">
              <h3>Revenue Flow Alignment</h3>
              <p>
                Aligning contracts, operations, billing, collections, and finance
                to eliminate breakdowns between teams.
              </p>
            </div>

            <div className="card">
              <h3>Billing Discipline</h3>
              <p>
                Establishing consistent invoicing workflows, ownership, and
                timing to reduce preventable delays.
              </p>
            </div>

            <div className="card">
              <h3>Collections Execution</h3>
              <p>
                Strengthening follow-up cadence, escalation, and accountability
                across receivables.
              </p>
            </div>

            <div className="card">
              <h3>Revenue Leakage Control</h3>
              <p>
                Identifying missed charges, underbilling, and execution gaps
                that reduce realized revenue.
              </p>
            </div>

            <div className="card">
              <h3>Cash Visibility</h3>
              <p>
                Providing clarity into what is owed, what is delayed, and what
                requires action.
              </p>
            </div>

            <div className="card">
              <h3>Execution Discipline</h3>
              <p>
                Creating structure, cadence, and accountability across the
                revenue-to-cash process.
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
            <a href="#revenue-model">Revenue-to-Cash Model</a>
            <a href="#service-areas">Service Areas</a>
            <a href="#how-we-engage">How We Engage</a>
            <a href="#selective-engagements">Strategic Engagements</a>
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
              Revenue Execution Control &amp; Cash Stabilization
            </h2>

            <p className="section-copy">
              Revenue performance is not driven by demand alone. It is
              determined by how well revenue is executed, controlled, billed,
              collected, and converted into cash.
            </p>

            <p className="section-copy">
              In many organizations, revenue is recorded consistently—but cash
              is delayed by weak handoffs, inconsistent billing discipline, slow
              collections execution, and limited visibility across the
              revenue-to-cash process.
            </p>

            <p className="section-copy">
              We help leadership teams restore control across these execution
              points, strengthen accountability, and implement the discipline
              required to improve cash performance with consistency and
              confidence.
            </p>
          </div>

          <div>
            <p className="section-label">Outcomes</p>

            <div className="outcomes-list">
              <div>Shorter invoicing cycles</div>
              <div>Reduced receivable aging</div>
              <div>Stronger collections discipline</div>
              <div>Improved revenue capture</div>
              <div>Clearer visibility into bottlenecks</div>
              <div>More predictable cash performance</div>
            </div>
          </div>
        </div>
      </section>

      {/* REVENUE TO CASH MODEL */}
      <section id="revenue-model" className="section section-light">
        <div className="container">
          <p className="section-label">Revenue-to-Cash Model</p>

          <h2 className="section-title">
            Where revenue slows before it becomes cash.
          </h2>

          <p className="section-copy narrow-copy">
            Most cash flow issues do not originate in accounting. They occur
            across execution points between operations, billing, collections,
            and financial workflows.
          </p>

          <RevenueCashDiagram compact />
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section id="service-areas" className="section">
        <div className="container">
          <p className="section-label">Service Areas</p>

          <h2 className="section-title">Core Advisory Areas</h2>

          <p className="section-intro">
            Our advisory work focuses on the execution layer where revenue is
            converted into cash—across ownership, process discipline, billing,
            collections, and financial visibility.
          </p>

          <div className="card-grid two-up">
            <div className="card">
              <h3>Revenue Flow Alignment</h3>
              <p>
                Improving how revenue moves across teams, systems, and workflows
                from creation to collection.
              </p>
            </div>

            <div className="card">
              <h3>Billing &amp; Invoicing Discipline</h3>
              <p>
                Designing consistent billing processes to reduce delays and
                improve timing of cash inflows.
              </p>
            </div>

            <div className="card">
              <h3>Collections Strategy &amp; Execution</h3>
              <p>
                Establishing structured follow-up, escalation paths, and
                ownership across receivables.
              </p>
            </div>

            <div className="card">
              <h3>Revenue Leakage Review</h3>
              <p>
                Identifying where revenue is lost between work performed and
                cash received.
              </p>
            </div>

            <div className="card">
              <h3>Cash Visibility &amp; Reporting</h3>
              <p>
                Providing decision-ready insight into cash performance and
                bottlenecks.
              </p>
            </div>

            <div className="card">
              <h3>Operational Finance Support</h3>
              <p>
                Supporting execution across revenue-linked operations with
                structure, discipline, and visibility.
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
            A Structured Approach to Restoring Revenue Execution Control.
          </h2>

          <p>
            We do not approach revenue performance as a generic accounting
            issue. We treat it as an execution and control challenge across the
            organization.
          </p>

          <p>
            Our work is hands-on and leadership-focused. We assess how revenue
            moves, identify where execution breaks down, and implement practical
            improvements to restore control and predictability.
          </p>
        </div>
      </section>

      {/* STRATEGIC ENGAGEMENTS */}
      <section id="selective-engagements" className="section section-soft">
        <div className="container">
          <p className="section-label">Selective Strategic Engagements</p>

          <h2>
            Advisory Support for Complex Public Sector, Healthcare, and
            Partner-Led Initiatives.
          </h2>

          <p className="section-intro">
            In addition to our core advisory work, we selectively support
            initiatives requiring financial structure, execution discipline, and
            stakeholder alignment.
          </p>

          <div className="card-grid two-up">
            <div className="card">
              <h3>Healthcare Transformation</h3>
              <p>
                Supporting revenue cycle alignment, implementation readiness,
                and operational finance structure.
              </p>
            </div>

            <div className="card">
              <h3>Public Sector Readiness</h3>
              <p>
                Structuring complex initiatives with clarity across execution,
                accountability, and financial workflows.
              </p>
            </div>

            <div className="card">
              <h3>Partner-Led Execution</h3>
              <p>
                Supporting strategic partners where execution, market
                development, and financial discipline intersect.
              </p>
            </div>

            <div className="card">
              <h3>Cross-Border Initiatives</h3>
              <p>
                Supporting initiatives requiring coordination across regions,
                partners, and financial structures.
              </p>
            </div>
          </div>

          <p className="section-copy top-gap">
            All non-core engagements are undertaken selectively and in
            collaboration with trusted partners.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact-cta" className="cta-band">
        <div className="container">
          <div className="cta-box">
            <p className="eyebrow">Revenue Diagnostic</p>

            <h2>
              If revenue is strong but cash is inconsistent, the issue is not
              sales. It is execution.
            </h2>

            <p>
              We help leadership teams identify where revenue is slowing,
              leaking, or failing to convert into predictable cash—and what
              needs to change.
            </p>

            <div className="hero-actions center-buttons">
              <Link href="/contact" className="btn btn-primary">
                Schedule a Revenue Diagnostic
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
