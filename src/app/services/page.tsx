import Link from 'next/link'
export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero services-hero">
        <div className="container">
          <div className="services-hero-grid">
            <div>
              <div className="eyebrow">Services</div>

              <h1>Focused advisory. Selective strategic engagements.</h1>

              <p>
                Prosperity Heritage Advisory is built around one core focus:
                helping leadership teams strengthen the connection between
                revenue and cash.
              </p>

              <p>
                Our core work centers on revenue control, billing discipline,
                collections performance, revenue integrity, and operational
                finance execution. In select situations, we also support
                strategic initiatives through trusted partnerships.
              </p>

              <div className="button-row">
                <Link href="/contact" className="btn-primary">
                  Book a Consultation
                </Link>

                <a href="#core-advisory" className="btn-secondary">
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
            <h2 className="section-title left-align">
              Revenue Control & Cash Stabilization
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
          <h2 className="section-title">Core advisory areas</h2>

          <p className="section-subtitle">
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
              <h3>Billing & Invoicing Discipline</h3>
              <p>
                Reduce delays, inconsistencies, and manual breakdowns that slow
                invoicing and weaken the speed of cash conversion.
              </p>
            </div>

            <div className="card">
              <h3>Collections Strategy & Execution</h3>
              <p>
                Establish structured collections processes, follow-up cadence,
                accountability, and escalation paths that improve realization.
              </p>
            </div>

            <div className="card">
              <h3>Revenue Integrity & Leakage Identification</h3>
              <p>
                Identify missed charges, underbilling, process inefficiencies,
                and control gaps that affect revenue capture.
              </p>
            </div>
          </div>

          <div className="grid-4" style={{ marginTop: '2rem' }}>
            <div className="card">
              <h3>Financial Visibility & Reporting</h3>
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
        <div className="container">
          <h2 className="section-title">How we engage</h2>

          <p className="section-subtitle">
            Hands-on, practical, and leadership-focused.
          </p>

          <div className="services-two-col" style={{ marginTop: '2rem' }}>
            <div>
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
        </div>
      </section>

      <section id="selective-engagements" className="section section-light">
        <div className="container">
          <h2 className="section-title">Selective engagements</h2>

          <p className="section-subtitle">
            In addition to our core advisory work, Prosperity Heritage Advisory
            selectively supports high-impact initiatives through strategic
            partnerships. These engagements typically involve complex,
            capital-intensive projects requiring strong operational and
            financial coordination.
          </p>

          <div
            style={{
              marginTop: '2.5rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '24px',
            }}
          >
            <div className="card">
              <h3>Healthcare Development & Turnkey Projects</h3>
              <p>
                Through trusted partnerships, we support the development of
                healthcare facilities including hospitals, medical centers, and
                specialized treatment units.
              </p>
              <p style={{ marginTop: '1rem' }}>
                These engagements may include feasibility, planning,
                operational setup, project coordination, and end-to-end
                execution in collaboration with specialized partners.
              </p>
            </div>

            <div className="card">
              <h3>Global Investment & Trade Opportunities</h3>
              <p>
                We selectively engage in cross-border investment and trade
                opportunities where there is a need for disciplined assessment,
                realistic assumptions, and clear alignment between capital and
                opportunity.
              </p>
              <p style={{ marginTop: '1rem' }}>
                These engagements are structured, limited, and evaluated on a
                case-by-case basis rather than offered as a broad marketplace.
              </p>
            </div>
          </div>

          <p className="section-subtitle" style={{ marginTop: '2.5rem' }}>
            All such engagements are undertaken selectively and in collaboration
            with specialized partners.
          </p>
        </div>
      </section>

      <section id="contact-cta" className="cta-band">
        <div className="container">
          <h2>Strong financial performance is not just about revenue</h2>
          <p>
            It is about how revenue is structured, managed, and realized. That
            is where our core advisory work is focused.
          </p>

          <div className="button-row center-buttons">
            <Link href="/contact" className="btn-secondary">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
   </main>
  )
}
