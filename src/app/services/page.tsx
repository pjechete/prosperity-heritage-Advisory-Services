import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Revenue Performance & Cash Visibility Advisory | PHS Services',
  description:
    'Advisory services focused on revenue performance, billing discipline, collections execution, revenue integrity, cash visibility, public sector readiness, and selective strategic engagements.',
}

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="services-hero-grid">
            <div>
              <p className="eyebrow">Services</p>

              <h1>Strengthening Revenue Performance, Cash Visibility, and Execution Discipline.</h1>

              <p className="section-copy">
                Prosperity Heritage Advisory helps leadership teams improve how revenue converts
                into cash by strengthening control, discipline, and visibility across billing,
                collections, revenue integrity, and financial workflows.
              </p>

              <p className="section-copy">
                Our work is practical, hands-on, and focused on the areas where execution gaps
                delay cash, weaken control, and limit leadership confidence.
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
            </section>
             {/* WHAT WE HELP IMPROVE */}
                 <section className="section">
        <div className="container">
          <p className="section-label">What We Help Improve</p>

          <div className="card-grid three">
            <div className="card">
              <h3>Billing Discipline</h3>
              <p>
                More consistent invoicing workflows, clearer ownership, and
                fewer preventable delays.
              </p>
            </div>

            <div className="card">
              <h3>Collections Execution</h3>
              <p>
                Stronger follow-up cadence, escalation discipline, and
                accountability across receivables.
              </p>
            </div>

            <div className="card">
              <h3>Revenue Integrity</h3>
              <p>
                Reduced leakage from missed charges, underbilling, weak
                controls, or execution gaps.
              </p>
            </div>

            <div className="card">
              <h3>Cash Visibility</h3>
              <p>
                Clearer reporting into where cash is delayed, what is driving
                performance, and where action is needed.
              </p>
            </div>

            <div className="card">
              <h3>Process Handoffs</h3>
              <p>
                Better alignment between contracts, operations, billing,
                collections, and finance.
              </p>
            </div>

            <div className="card">
              <h3>Revenue-to-Cash Performance</h3>
              <p>
                A stronger operating rhythm for converting earned revenue into
                more predictable cash.
              </p>
            </div>
          </div>
        </div>
      </section>>

      <section className="services-jumpbar">
        <div className="container">
          <div className="services-jump-links">
            <a href="#core-advisory">Core Advisory</a>
            <a href="#service-areas">Service Areas</a>
            <a href="#how-we-engage">How We Engage</a>
            <a href="#selective-engagements">Strategic Engagements</a>
            <a href="#contact-cta">Contact</a>
          </div>
        </div>
      </section>

      <section id="core-advisory" className="section">
        <div className="container services-two-col">
          <div>
            <p className="section-label">Core advisory</p>

            <h2 className="section-title left-align">
              Revenue Control &amp; Cash Visibility
            </h2>

            <p className="section-copy">
              Revenue performance is not only driven by demand alone. It is shaped by
            how well revenue is executed, controlled, billed, collected, and
            reported.
            </p>

            <p className="section-copy">
            In many organizations, revenue is recorded every day, but cash is
            delayed by weak handoffs, inconsistent billing discipline, slow
            collections follow-through, limited reporting visibility, or
            operational gaps between commercial activity and finance execution.
            </p>

            <p className="section-copy">
              We help leadership teams identify these breakdowns, strengthen accountability,
              and implement the operating discipline required to
            improve cash performance with greater consistency and confidence.
            </p>
          </div>

          {/* OUTCOMES */}
           <section className="section">
        <div className="container">
          <p className="section-label">Outcomes This Work Supports</p>

          <div className="outcome-grid">
            <div className="outcome-card">Shorter invoicing cycles</div>
            <div className="outcome-card">Reduced receivable aging</div>
            <div className="outcome-card">Stronger collections discipline</div>
            <div className="outcome-card">Improved revenue capture</div>
            <div className="outcome-card">
              Clearer visibility into bottlenecks
            </div>
            <div className="outcome-card">
              Greater confidence in cash performance
            </div>
          </div>
        </div>
      </section>
              {/* SERVICE AREAS */}
           <section id="service-areas" className="section section-alt">
        <div className="container">
          <p className="section-label">Service Areas</p>

          <h2>Core Advisory Areas</h2>

          <p className="section-intro">
            Our services focus on the operational and financial processes that
            most directly influence revenue performance, cash visibility, and
            execution control.
          </p>

          <div className="card-grid two">
            <div className="card">
              <h3>Revenue Process Alignment</h3>
              <p>
                Misalignment across contracts, billing, collections, and finance
                is one of the most common sources of delayed cash. We establish
                clearer ownership, stronger coordination, and structured
                workflows so revenue moves through the organization with fewer
                delays and stronger accountability.
              </p>
            </div>

            <div className="card">
              <h3>Billing & Invoicing Discipline</h3>
              <p>
                Delayed or inconsistent invoicing is one of the most preventable
                drivers of cash lag. We strengthen billing workflows, timing,
                documentation, and accountability to reduce avoidable delays and
                improve speed to cash.
              </p>
            </div>

            <div className="card">
              <h3>Collections Strategy & Execution</h3>
              <p>
                Collections performance is driven by discipline, not intent. We
                help establish follow-up cadence, escalation paths, ownership,
                and reporting routines that improve receivables execution.
              </p>
            </div>

            <div className="card">
              <h3>Revenue Integrity & Leakage Review</h3>
              <p>
                Revenue leakage often hides inside process gaps, missed charges,
                underbilling, weak controls, or unclear handoffs. We identify
                where value is being lost and recommend practical actions to
                strengthen revenue realization.
              </p>
            </div>

            <div className="card">
              <h3>Financial Visibility & Reporting</h3>
              <p>
                Leadership cannot manage what it cannot clearly see. We improve
                reporting so decision-makers understand where cash is delayed,
                what is driving performance, and where intervention is needed.
              </p>
            </div>

            <div className="card">
              <h3>Post-Acquisition or Transition Stabilization</h3>
              <p>
                During growth, acquisition, integration, or operational change,
                billing, reporting, and control often come under strain. We help
                stabilize financial workflows and restore operating discipline
                during periods of transition.
              </p>
            </div>

            <div className="card">
              <h3>Operational Finance Support</h3>
              <p>
                We provide practical advisory support where teams need stronger
                execution, tighter process discipline, better operating cadence,
                or clearer leadership visibility across revenue-linked
                functions.
              </p>
            </div>

            <div className="card">
              <h3>Assessment-Led Improvement</h3>
              <p>
                We begin with a focused review to identify high-impact gaps,
                operating risks, control weaknesses, and practical priorities
                before broader improvement work begins.
              </p>
            </div>
          </div>
        </div>
      </section>
           {/* HOW WE ENGAGE */}
      <section className="section">
        <div className="container narrow">
          <p className="section-label">How We Engage</p>

          <h2>
            A Structured Approach to Improving Revenue Performance and Cash
            Visibility.
          </h2>

          <p>
            We do not approach revenue performance as a generic accounting
            clean-up exercise. We view it as an execution, control, and
            visibility issue.
          </p>

          <p>
            Our work is hands-on and leadership-focused. We work directly with
            key stakeholders to understand how revenue moves through the
            organization, where execution weakens, and what improvements will
            strengthen cash performance.
          </p>

          <div className="process-list">
            <div>
              <span>01</span>
              <h3>Assess</h3>
              <p>
                Review revenue flow, billing discipline, controls, reporting,
                and cash visibility.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Diagnose</h3>
              <p>
                Identify execution gaps, leakage points, delays, handoff issues,
                and control weaknesses.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Design</h3>
              <p>
                Develop practical improvements across workflow, ownership,
                reporting, and operating cadence.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Implement</h3>
              <p>
                Support execution with clear accountability, stakeholder
                alignment, and measurable priorities.
              </p>
            </div>

            <div>
              <span>05</span>
              <h3>Control</h3>
              <p>
                Establish routines that sustain discipline, visibility, and
                leadership confidence over time.
              </p>
            </div>

            <div>
              <span>06</span>
              <h3>Optimize</h3>
              <p>
                Continue refining performance so revenue-to-cash outcomes become
                more consistent and reliable.
              </p>
            </div>
          </div>
        </div>
      </section>
{/* STRATEGIC ENGAGEMENTS */}
      <section className="section section-alt">
        <div className="container">
          <p className="section-label">Selective Strategic Engagements</p>

          <h2>
            Advisory Support for Complex Public Sector, Healthcare, and
            Partner-Led Initiatives.
          </h2>

          <p className="section-intro">
            In addition to our core advisory work, we selectively support
            initiatives that require disciplined coordination, financial
            structure, stakeholder alignment, and trusted execution through
            experienced partners.
          </p>

          <div className="card-grid two">
            <div className="card">
              <h3>Public Sector Advisory</h3>
              <p>
                We support public, quasi-government, and partner-led initiatives
                where financial controls, funding accountability, operational
                visibility, and execution discipline are critical to success.
              </p>
            </div>

            <div className="card">
              <h3>Healthcare Development & Turnkey Projects</h3>
              <p>
                Through trusted partnerships, we support healthcare initiatives
                involving feasibility, planning, operational setup, project
                coordination, implementation readiness, and execution support.
              </p>
            </div>

            <div className="card">
              <h3>Global Investment & Trade Opportunities</h3>
              <p>
                We selectively engage in cross-border investment and trade
                opportunities where disciplined sourcing, validation,
                structuring, and alignment between capital and execution are
                essential.
              </p>
            </div>

            <div className="card">
              <h3>Private Opportunity & Investor Intake</h3>
              <p>
                We review opportunities and investor interest on a selective
                basis where there is clear fit, seriousness, practical viability,
                and alignment with our network and capabilities.
              </p>

              <div className="card-actions">
                <Link href="/contact" className="text-link">
                  Submit Opportunity
                </Link>
                <Link href="/contact" className="text-link">
                  Investor Registration
                </Link>
              </div>
            </div>
          </div>

          <p className="section-note">
            All non-core engagements are undertaken selectively and in
            collaboration with trusted partners.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-band">
        <div className="container">
          <p className="section-label">Revenue Performance Review</p>

          <h2>Strong financial performance is not just about revenue.</h2>

          <p>
            It depends on how revenue is billed, managed, collected, reported,
            and translated into cash. That is where our core advisory work is
            focused.
          </p>

          <Link href="/contact" className="btn btn-primary">
            Book a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
