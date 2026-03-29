import Link from 'next/link'

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="services-hero-grid">
            <div>
              <p className="eyebrow">Services</p>
              <h1>Focused advisory. Selective strategic engagements.</h1>

              <p className="section-copy">
                Prosperity Heritage Advisory is built around one core focus:
                helping leadership teams strengthen the connection between
                revenue and cash.
              </p>

              <p className="section-copy">
                Our core work centers on revenue control, billing discipline,
                collections performance, revenue integrity, and operational
                finance execution. In select situations, we also support
                strategic initiatives through trusted partnerships.
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
              <h3>Core areas we help improve</h3>
              <ul className="services-checklist">
                <li>Revenue process alignment</li>
                <li>Billing and invoicing discipline</li>
                <li>Collections execution and accountability</li>
                <li>Revenue integrity and leakage review</li>
                <li>Financial visibility and reporting</li>
                <li>Post-acquisition stabilization</li>
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
            <a href="#selective-engagements">Selective Engagements</a>
            <a href="#contact-cta">Contact</a>
          </div>
        </div>
      </section>

      <section id="core-advisory" className="section">
        <div className="container services-two-col">
          <div>
            <p className="section-label">Core advisory</p>
            <h2 className="section-title left-align">
              Revenue Control &amp; Cash Stabilization
            </h2>

            <p className="section-copy">
              Most growing companies do not have a revenue problem. They have a
              conversion problem.
            </p>

            <p className="section-copy">
              Revenue is generated, but somewhere between contracts, billing,
              collections, reporting, and financial operations, cash becomes
              delayed, inconsistent, or difficult to manage with confidence.
            </p>

            <p className="section-copy">
              We help leadership teams identify and correct the operational
              breakdowns behind that problem.
            </p>
          </div>

          <div className="services-callout">
            <h3>What stronger execution can improve</h3>
            <ul>
              <li>Faster invoicing cycles</li>
              <li>Reduced receivable aging</li>
              <li>Stronger collections accountability</li>
              <li>Better revenue capture discipline</li>
              <li>Clearer visibility into delays and bottlenecks</li>
              <li>More consistent cash performance</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="service-areas" className="section section-light">
        <div className="container">
          <p className="section-label">Service areas</p>
          <h2 className="section-title">Core advisory areas</h2>
          <p className="section-intro">
            Our work is centered on the operational drivers of cash performance.
          </p>

          <div className="grid-4">
            <div className="card-highlight">
              <h3>Revenue Process Alignment</h3>
              <p>
                Align contracts, billing workflows, and finance operations so
                the revenue process works as a connected system rather than a
                series of disconnected handoffs.
              </p>
            </div>

            <div className="card">
              <h3>Billing &amp; Invoicing Discipline</h3>
              <p>
                Reduce delays, inconsistencies, and manual breakdowns that slow
                invoicing and weaken the speed of cash conversion.
              </p>
            </div>

            <div className="card">
              <h3>Collections Strategy &amp; Execution</h3>
              <p>
                Establish structured collections processes, follow-up cadence,
                accountability, and escalation paths that improve realization.
              </p>
            </div>

            <div className="card">
              <h3>Revenue Integrity &amp; Leakage Identification</h3>
              <p>
                Identify missed charges, underbilling, process inefficiencies,
                and control gaps that affect revenue capture.
              </p>
            </div>

            <div className="card">
              <h3>Financial Visibility &amp; Reporting</h3>
              <p>
                Improve leadership visibility into where cash is being delayed,
                what is driving the delay, and where operational attention is
                needed most.
              </p>
            </div>

            <div className="card">
              <h3>Post-Acquisition Stabilization</h3>
              <p>
                Support organizations through transition periods where billing,
                reporting, control, and financial execution often become strained.
              </p>
            </div>

            <div className="card">
              <h3>Operational Finance Support</h3>
              <p>
                Provide practical, hands-on support when leadership teams need
                stronger execution in the financial operations behind revenue.
              </p>
            </div>

            <div className="card">
              <h3>Assessment-Led Improvement</h3>
              <p>
                Start with a focused review to identify the highest-impact gaps,
                control weaknesses, and operational priorities.
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
              Hands-on, practical, and leadership-focused
            </h2>

            <p className="section-copy">
              We work directly with leadership teams and operational
              stakeholders to understand how revenue actually flows through
              the organization, where breakdowns occur, and what practical
              improvements will create stronger control and more predictable
              cash outcomes.
            </p>

            <p className="section-copy">
              This is not accounting clean-up for its own sake. It is
              structured advisory focused on the operational drivers of cash
              performance.
            </p>
          </div>

          <div className="services-assessment-card">
            <h3>Our approach typically includes</h3>
            <ul>
              <li>Process review across billing, collections, and reporting</li>
              <li>Identification of execution gaps and ownership issues</li>
              <li>Practical improvement recommendations</li>
              <li>Leadership-level visibility into priorities and risks</li>
              <li>Support during periods of change or transition</li>
            </ul>
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
            Beyond our core advisory work, we selectively engage in high-impact,
            partnership-led initiatives in complex, capital-intensive environments
            where strong operational and financial coordination is critical.
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
                These engagements may include feasibility, planning, operational
                setup, project coordination, and end-to-end execution in
                collaboration with specialized partners.
              </p>
            </div>

            <div className="card">
              <h3>Global Investment &amp; Trade Opportunities</h3>
              <p>
                We selectively engage in cross-border investment and trade
                opportunities, particularly in emerging markets where disciplined
                structuring and clear alignment between capital and execution are
                critical.
              </p>
              <p>
                These engagements are carefully selected and structured to ensure
                strong alignment, realistic assumptions, and meaningful outcomes.
              </p>

              <p
                className="section-copy"
                style={{ marginTop: '1.5rem', fontWeight: 600 }}
              >
                Private Opportunity &amp; Investor Intake
              </p>
              <p className="section-copy">
                We selectively review opportunities and engage with investors where
                there is strong alignment and clear potential for meaningful outcomes.
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
            All engagements are undertaken selectively and in collaboration with
            trusted partners.
          </p>
        </div>
      </section>

      <section id="contact-cta" className="cta-band">
        <div className="narrow">
          <div className="cta-box">
            <h2>Strong financial performance is not just about revenue</h2>
            <p>
              It is about how revenue is structured, managed, and realized. That
              is where our core advisory work is focused.
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
