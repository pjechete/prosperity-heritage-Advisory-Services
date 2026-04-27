import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Revenue Performance & Cash Visibility Advisory | PHS Services',
  description:
    'Advisory services focused on revenue performance, billing discipline, collections execution, revenue integrity, and cash visibility.',
}

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="services-hero-grid">
            <div>
              <p className="eyebrow">Services</p>

              <h1>
                Revenue performance, cash visibility, and execution discipline.
              </h1>

              <p className="section-copy">
                Prosperity Heritage Advisory helps leadership teams improve how
                revenue converts into cash by strengthening control, discipline,
                and visibility across billing, collections, revenue integrity,
                and financial workflows.
              </p>

              <p className="section-copy">
                Our work is practical, hands-on, and focused on the areas where
                execution gaps delay cash, weaken control, and limit leadership
                confidence.
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
              Revenue performance is not only driven by demand — it is shaped by
              execution.
            </p>

            <p className="section-copy">
              Revenue may be recorded, but cash is often delayed by weak
              handoffs, inconsistent billing discipline, delayed collections,
              limited visibility, or operational gaps between commercial
              activity and finance execution.
            </p>

            <p className="section-copy">
              We help leadership teams identify these breakdowns, strengthen
              accountability, and improve the operating rhythm required to
              convert revenue into more predictable cash.
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
            Our services focus on the operational and financial processes that
            most directly influence revenue performance and cash visibility.
          </p>

          <div className="grid-4">
            <div className="card-highlight">
              <h3>Revenue Process Alignment</h3>
              <p>
                Improve alignment across contracts, billing, collections, and
                finance so revenue moves with fewer delays, clearer ownership,
                and stronger accountability.
              </p>
            </div>

            <div className="card">
              <h3>Billing &amp; Invoicing Discipline</h3>
              <p>
                Strengthen invoicing workflows, timing, and ownership to reduce
                preventable delays and improve speed to cash.
              </p>
            </div>

            <div className="card">
              <h3>Collections Strategy &amp; Execution</h3>
              <p>
                Establish clearer follow-up cadence, escalation paths, ownership,
                and reporting discipline to improve collections performance.
              </p>
            </div>

            <div className="card">
              <h3>Revenue Integrity &amp; Leakage Review</h3>
              <p>
                Identify missed charges, underbilling, execution gaps, and
                control issues that reduce revenue realization.
              </p>
            </div>

            <div className="card">
              <h3>Financial Visibility &amp; Reporting</h3>
              <p>
                Improve leadership reporting so decision-makers can see where
                cash is delayed, what is driving performance, and where action is
                needed.
              </p>
            </div>

            <div className="card">
              <h3>Post-Acquisition or Transition Stabilization</h3>
              <p>
                Support organizations during integration, change, or accelerated
                growth when billing, reporting, and financial control come under
                strain.
              </p>
            </div>

            <div className="card">
              <h3>Operational Finance Support</h3>
              <p>
                Provide practical support where teams need stronger execution,
                tighter process discipline, or clearer leadership visibility.
              </p>
            </div>

            <div className="card">
              <h3>Assessment-Led Improvement</h3>
              <p>
                Begin with a focused review to identify high-impact gaps,
                operating risks, and practical priorities for improvement.
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
              A structured approach to improving revenue performance and cash
              visibility.
            </h2>

            <p className="section-copy">
              We work directly with leadership teams and key stakeholders to
              understand how revenue moves through the organization, where
              execution weakens, and what improvements will strengthen control
              and cash performance.
            </p>

            <p className="section-copy">
              Our work is not generic accounting clean-up. It is structured
              advisory focused on operating discipline, financial visibility, and
              the execution required to convert revenue into cash.
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

      <section id="contact-cta" className="cta-band">
        <div className="narrow">
          <div className="cta-box">
            <p className="eyebrow">Revenue Performance Review</p>

            <h2>
              A clearer view of how revenue is performing across your business.
            </h2>

            <p>
              If revenue is not consistently converting into cash, we help
              identify where performance, control, and visibility can be
              improved.
            </p>

            <div className="button-row center-buttons">
              <Link href="/contact" className="btn btn-secondary">
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="selective-engagements" className="section section-soft">
        <div className="container">
          <p className="section-label">Selective engagements</p>
          <h2 className="section-title">
            Selective, partnership-led strategic engagements
          </h2>
          <p className="section-intro">
            In addition to our core advisory work, we selectively support
            strategic initiatives that require disciplined coordination,
            financial structure, and trusted execution through experienced
            partners.
          </p>

          <div className="card-grid two-up">
            <div className="card">
              <h3>Healthcare Development &amp; Turnkey Projects</h3>
              <p>
                Through trusted partnerships, we support the development of
                healthcare facilities including hospitals, medical centers, and
                specialized treatment units.
              </p>
              <p>
                Engagements may include feasibility support, planning,
                operational setup, project coordination, and end-to-end
                execution in collaboration with specialized delivery partners.
              </p>
            </div>

            <div className="card">
              <h3>Global Investment &amp; Trade Opportunities</h3>
              <p>
                We selectively engage in cross-border investment and trade
                opportunities where disciplined structure, realistic
                assumptions, and strong alignment between capital and execution
                are essential.
              </p>
              <p>
                These opportunities are reviewed selectively and pursued where
                there is credible alignment, practical viability, and the
                potential for meaningful outcomes.
              </p>

              <p
                className="section-copy"
                style={{ marginTop: '1.5rem', fontWeight: 600 }}
              >
                Private Opportunity &amp; Investor Intake
              </p>
              <p className="section-copy">
                We review opportunities and investor interest on a selective
                basis where there is clear fit, seriousness, and alignment.
              </p>

              <div className="button-row" style={{ marginTop: '1rem' }}>
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
          </div>

          <p className="section-copy" style={{ marginTop: '1.5rem' }}>
            All non-core engagements are undertaken selectively and in
            collaboration with trusted partners.
          </p>
        </div>
      </section>

      <section id="contact-cta" className="cta-band">
        <div className="narrow">
          <div className="cta-box">
            <h2>Strong financial performance is not just about revenue</h2>
            <p>
              It also depends on how revenue is billed, managed, collected, and
              translated into cash. That is where our core advisory work is
              focused.
            </p>

            <div className="button-row center-buttons">
              <Link href="/contact" className="btn btn-secondary">
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
