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

              <h1>Revenue performance, cash visibility, and execution discipline.</h1>

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
                  Book a Consultation
                </Link>
                <a href="#core-advisory" className="btn btn-secondary">
                  View Services
                </a>
              </div>
            </div>

            <div className="services-hero-panel">
              <h3>What we help improve</h3>
              <ul className="services-checklist">
                <li>More disciplined billing cycles</li>
                <li>Stronger collections execution</li>
                <li>Reduced revenue leakage</li>
                <li>Clearer cash visibility</li>
                <li>Better control across process handoffs</li>
                <li>More consistent revenue-to-cash performance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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
              Revenue performance is not only driven by demand — it is shaped by execution.
            </p>

            <p className="section-copy">
              Revenue may be recorded, but cash is often delayed by weak handoffs,
              inconsistent billing discipline, delayed collections, limited visibility, or
              operational gaps between commercial activity and finance execution.
            </p>

            <p className="section-copy">
              We help leadership teams identify these breakdowns, strengthen accountability,
              and improve the operating rhythm required to convert revenue into more predictable
              cash.
            </p>
          </div>

          <div className="services-callout">
            <h3>Outcomes this work supports</h3>
            <ul>
              <li>Shorter invoicing cycles</li>
              <li>Reduced receivable aging</li>
              <li>Stronger collections discipline</li>
              <li>Improved revenue capture</li>
              <li>Clearer visibility into delays and bottlenecks</li>
              <li>Greater confidence in cash performance</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="service-areas" className="section section-light">
        <div className="container">
          <p className="section-label">Service areas</p>

          <h2 className="section-title">Core advisory areas</h2>

          <p className="section-intro">
            Our services focus on the operational and financial processes that most directly
            influence revenue performance and cash visibility.
          </p>

          <div className="grid-4">
            <div className="card-highlight">
              <h3>Revenue Process Alignment</h3>
              <p>
                Improve alignment across contracts, billing, collections, and finance so revenue
                moves with fewer delays, clearer ownership, and stronger accountability.
              </p>
            </div>

            <div className="card">
              <h3>Billing &amp; Invoicing Discipline</h3>
              <p>
                Strengthen invoicing workflows, timing, and ownership to reduce preventable
                delays and improve speed to cash.
              </p>
            </div>

            <div className="card">
              <h3>Collections Strategy &amp; Execution</h3>
              <p>
                Establish clearer follow-up cadence, escalation paths, ownership, and reporting
                discipline to improve collections performance.
              </p>
            </div>

            <div className="card">
              <h3>Revenue Integrity &amp; Leakage Review</h3>
              <p>
                Identify missed charges, underbilling, execution gaps, and control issues that
                reduce revenue realization.
              </p>
            </div>

            <div className="card">
              <h3>Financial Visibility &amp; Reporting</h3>
              <p>
                Improve leadership reporting so decision-makers can see where cash is delayed,
                what is driving performance, and where action is needed.
              </p>
            </div>

            <div className="card">
              <h3>Post-Acquisition or Transition Stabilization</h3>
              <p>
                Support organizations during integration, change, or accelerated growth when
                billing, reporting, and financial control come under strain.
              </p>
            </div>

            <div className="card">
              <h3>Operational Finance Support</h3>
              <p>
                Provide practical support where teams need stronger execution, tighter process
                discipline, or clearer leadership visibility.
              </p>
            </div>

            <div className="card">
              <h3>Assessment-Led Improvement</h3>
              <p>
                Begin with a focused review to identify high-impact gaps, operating risks, and
                practical priorities for improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-we-engage" className="section">
        <div className="container services-two-col">
          <div>
            <p className="section-label">How we engage</p>

            <h2 className="section-title left-align">
              A structured approach to improving revenue performance and cash visibility.
            </h2>

            <p className="section-copy">
              We work directly with leadership teams and key stakeholders to understand how
              revenue moves through the organization, where execution weakens, and what
              improvements will strengthen control and cash performance.
            </p>

            <p className="section-copy">
              Our work is not generic accounting clean-up. It is structured advisory focused on
              operating discipline, financial visibility, and the execution required to convert
              revenue into cash.
            </p>
          </div>

          <div className="services-assessment-card">
            <h3>Our approach typically includes</h3>
            <ul>
              <li>Assessment of revenue flow, controls, and cash visibility</li>
              <li>Diagnosis of execution gaps, leakage, and delays</li>
              <li>Design of practical improvements across process and reporting</li>
              <li>Implementation support with cadence and accountability</li>
              <li>Control routines to sustain performance over time</li>
              <li>Optimization of revenue-to-cash outcomes</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="selective-engagements" className="section section-soft">
        <div className="container">
          <p className="section-label">Selective strategic engagements</p>

          <h2 className="section-title">
            Advisory support for complex public sector, healthcare, and partner-led initiatives.
          </h2>

          <p className="section-intro">
            In addition to our core advisory work, we selectively support strategic initiatives
            that require disciplined coordination, financial structure, stakeholder alignment, and
            trusted execution through experienced partners.
          </p>

          <div className="card-grid three-up">
            <div className="card">
              <h3>Public Sector Advisory</h3>
              <p>
                We support public, quasi-government, and partner-led initiatives where financial
                controls, funding accountability, operational visibility, and execution discipline
                are critical to success.
              </p>
            </div>

            <div className="card">
              <h3>Healthcare Development &amp; Turnkey Projects</h3>
              <p>
                Through trusted partnerships, we support healthcare initiatives involving
                feasibility, planning, operational setup, project coordination, implementation
                readiness, and execution support.
              </p>
            </div>

            <div className="card">
              <h3>Global Investment &amp; Trade Opportunities</h3>
              <p>
                We selectively engage in cross-border investment and trade opportunities where
                disciplined sourcing, validation, structuring, and alignment between capital and
                execution are essential.
              </p>
            </div>
          </div>

          <div className="services-callout top-gap">
            <h3>Private Opportunity &amp; Investor Intake</h3>
            <p>
              We review opportunities and investor interest on a selective basis where there is
              clear fit, seriousness, practical viability, and alignment.
            </p>

            <div className="button-row">
              <a
                href="https://forms.gle/3WEnZBT97VqnDbeW6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Submit Opportunity
              </a>

              <a
                href="https://forms.gle/QcrA5NqmiBaxdedD8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Investor Registration
              </a>
            </div>
          </div>

          <p className="section-copy top-gap">
            All non-core engagements are undertaken selectively and in collaboration with trusted
            partners.
          </p>
        </div>
      </section>

      <section id="contact-cta" className="cta-band">
        <div className="narrow">
          <div className="cta-box">
            <p className="eyebrow">Revenue Performance Review</p>

            <h2>Strong financial performance is not just about revenue.</h2>

            <p>
              It also depends on how revenue is billed, managed, collected, and translated into
              cash. That is where our core advisory work is focused.
            </p>

            <div className="button-row center-buttons">
              <Link href="/contact" className="btn btn-primary">
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
