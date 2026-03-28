import Link from 'next/link'

export default function ServicesPage() {
  return (
    <main>
      {/* Header */}
      <section className="section hero hero-sm">
        <div className="container narrow">
          <p className="eyebrow">Services</p>
          <h1 className="hero-title">Focused advisory. Selective strategic engagements.</h1>
          <p className="hero-subtext">
            Prosperity Heritage Advisory is built around one core focus:
            helping leadership teams strengthen the connection between revenue
            and cash.
          </p>
        </div>
      </section>

      {/* Core Advisory Intro */}
      <section className="section">
        <div className="container">
          <p className="section-label">Core advisory</p>
          <h2 className="section-title">Revenue Control & Cash Stabilization</h2>
          <p className="section-intro">
            Most growing companies do not have a revenue problem. They have a
            conversion problem.
          </p>
          <p className="section-intro">
            Revenue is generated, but somewhere between contracts, billing,
            collections, reporting, and financial operations, cash becomes
            delayed, inconsistent, or difficult to forecast with confidence.
          </p>
          <p className="section-intro">
            We help leadership teams identify and correct the operational
            breakdowns behind that problem.
          </p>
        </div>
      </section>

      {/* Core Service Blocks */}
      <section className="section section-light">
        <div className="container">
          <div className="service-stack">
            <div className="service-item">
              <h3>Revenue Process Alignment</h3>
              <p>
                Align contracts, billing workflows, and finance operations so the
                revenue process works as a connected system rather than a series
                of disconnected handoffs.
              </p>
            </div>

            <div className="service-item">
              <h3>Billing & Invoicing Discipline</h3>
              <p>
                Reduce delays, inconsistencies, and manual breakdowns that slow
                invoicing and weaken the speed of cash conversion.
              </p>
            </div>

            <div className="service-item">
              <h3>Collections Strategy & Execution</h3>
              <p>
                Establish structured collections processes, follow-up cadence,
                accountability, and escalation paths that improve realization.
              </p>
            </div>

            <div className="service-item">
              <h3>Revenue Integrity & Leakage Identification</h3>
              <p>
                Identify missed charges, underbilling, process inefficiencies,
                and control gaps that affect revenue capture.
              </p>
            </div>

            <div className="service-item">
              <h3>Financial Visibility & Reporting</h3>
              <p>
                Improve leadership visibility into where cash is being delayed,
                what is driving the delay, and where operational attention is
                needed most.
              </p>
            </div>

            <div className="service-item">
              <h3>Post-Acquisition Stabilization</h3>
              <p>
                Support organizations through transition periods where billing,
                reporting, control, and financial execution often become strained.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Engage */}
      <section className="section">
        <div className="container narrow">
          <p className="section-label">How we engage</p>
          <h2>Hands-on, practical, and leadership-focused</h2>
          <p>
            We work directly with leadership teams and operational stakeholders to
            understand how revenue actually flows through the organization,
            where breakdowns occur, and what practical improvements will create
            stronger control and more predictable cash outcomes.
          </p>
          <p>
            This is not accounting clean-up for its own sake. It is structured
            advisory focused on the operational drivers of cash performance.
          </p>
        </div>
      </section>

      {/* Strategic Engagements */}
      <section className="section section-light">
        <div className="container">
          <p className="section-label">Strategic engagements</p>
          <h2 className="section-title">Selective and opportunity-driven</h2>
          <p className="section-intro">
            In select situations, we also engage in complex initiatives where
            financial structure, disciplined assessment, and cross-border insight
            are important.
          </p>
          <p className="section-intro">
            These engagements are secondary to our core advisory work and are
            undertaken selectively.
          </p>

          <div className="card-grid two-up">
            <div className="info-card">
              <h3>Healthcare Development & Turnkey Projects</h3>
              <p>
                We collaborate with experienced partners involved in healthcare
                infrastructure and implementation projects, particularly in
                emerging markets.
              </p>
              <p>
                Our role is centered on financial structure, project evaluation,
                coordination support, and oversight where multiple stakeholders
                are involved.
              </p>
            </div>

            <div className="info-card">
              <h3>Global Investment & Trade Opportunities</h3>
              <p>
                We selectively engage in cross-border investment and trade
                opportunities where there is a need for disciplined assessment,
                realistic assumptions, and clear alignment between capital and
                opportunity.
              </p>
              <p>
                We do not operate as a broad marketplace. These engagements are
                structured, limited, and evaluated case by case.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="section">
        <div className="container narrow">
          <p className="section-label">Closing perspective</p>
          <h2>Strong financial performance is not just about revenue</h2>
          <p>
            It is about how revenue is structured, managed, and realized.
          </p>
          <p>
            That is where our core advisory work is focused.
          </p>

          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary">
              Book a Consultation
            </Link>
            <Link href="/" className="btn btn-secondary">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
