import Link from 'next/link'

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="section hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <p className="eyebrow">Prosperity Heritage Advisory</p>
              <h1 className="hero-title">Turn Revenue Into Predictable Cash</h1>
              <p className="hero-subtext">
                We help leadership teams strengthen billing discipline, collections
                performance, revenue integrity, and financial visibility so revenue
                consistently converts into cash.
              </p>

              <div className="hero-actions">
                <Link href="/contact" className="btn btn-primary">
                  Book a Consultation
                </Link>
                <Link href="/services" className="btn btn-secondary">
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="hero-card">
              <h3>Where cash performance often breaks down</h3>
              <ul className="check-list">
                <li>Delayed or inconsistent invoicing</li>
                <li>Weak collections structure and follow-through</li>
                <li>Revenue leakage across contracts, billing, and operations</li>
                <li>Limited visibility into where cash is getting delayed</li>
                <li>Operational strain after growth or acquisition</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="section section-light">
        <div className="container narrow">
          <p className="section-label">The problem</p>
          <h2>Revenue can look strong while cash still feels tight</h2>
          <p>
            Many growing businesses do not have a sales problem. They have an
            execution problem somewhere between contracts, billing, collections,
            reporting, and financial operations.
          </p>
          <p>
            Invoices go out late. Payment terms do not match operational reality.
            Collections lack structure. Leadership sees revenue, but not always a
            clear path to cash.
          </p>
          <p>
            Over time, these gaps create unnecessary pressure on working capital,
            decision-making, and growth.
          </p>
        </div>
      </section>

      {/* Core Offer */}
      <section className="section">
        <div className="container">
          <p className="section-label">What we do</p>
          <h2 className="section-title">Revenue Control & Cash Stabilization Advisory</h2>
          <p className="section-intro">
            We focus on the operational drivers that determine how revenue converts
            into cash. Our work is hands-on, practical, and designed to strengthen
            the financial engine behind growth.
          </p>

          <div className="card-grid three-up">
            <div className="info-card">
              <h3>Billing Discipline</h3>
              <p>
                Improve invoicing timeliness, consistency, and control so revenue
                is billed accurately and without avoidable delay.
              </p>
            </div>

            <div className="info-card">
              <h3>Collections Performance</h3>
              <p>
                Build structured follow-up, accountability, and escalation
                processes that improve cash realization.
              </p>
            </div>

            <div className="info-card">
              <h3>Revenue Integrity</h3>
              <p>
                Identify leakage, missed charges, underbilling, and process gaps
                that weaken revenue capture.
              </p>
            </div>

            <div className="info-card">
              <h3>Operational Alignment</h3>
              <p>
                Align contracts, billing workflows, and finance operations so the
                revenue process works as a connected system.
              </p>
            </div>

            <div className="info-card">
              <h3>Financial Visibility</h3>
              <p>
                Give leadership a clearer picture of where cash is being delayed,
                why it is happening, and what needs attention.
              </p>
            </div>

            <div className="info-card">
              <h3>Stabilization Support</h3>
              <p>
                Support transitions, growth phases, and post-acquisition
                environments where controls and reporting often start to break.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section section-light">
        <div className="container">
          <p className="section-label">How we work</p>
          <h2 className="section-title">A practical, leadership-focused approach</h2>

          <div className="steps-grid">
            <div className="step-card">
              <span className="step-number">01</span>
              <h3>Assess</h3>
              <p>
                We review how revenue actually moves through your organization and
                where cash performance starts to break down.
              </p>
            </div>

            <div className="step-card">
              <span className="step-number">02</span>
              <h3>Clarify</h3>
              <p>
                We identify the operational, billing, collections, and reporting
                issues that are delaying or weakening cash realization.
              </p>
            </div>

            <div className="step-card">
              <span className="step-number">03</span>
              <h3>Stabilize</h3>
              <p>
                We help leadership teams implement practical improvements that
                create stronger control, visibility, and consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="section">
        <div className="container">
          <p className="section-label">Who we work with</p>
          <h2 className="section-title">Built for organizations under pressure to perform</h2>

          <div className="card-grid three-up">
            <div className="info-card">
              <h3>Growing Companies</h3>
              <p>
                Businesses scaling faster than their financial processes can
                reliably support.
              </p>
            </div>

            <div className="info-card">
              <h3>Private Equity & Transition Environments</h3>
              <p>
                Companies navigating change, integration, or operational strain
                after acquisition.
              </p>
            </div>

            <div className="info-card">
              <h3>Leadership Teams Needing Clarity</h3>
              <p>
                Founders, CEOs, and finance leaders who need better control over
                how revenue becomes cash.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Engagements */}
      <section className="section section-light">
        <div className="container narrow">
          <p className="section-label">Selective strategic engagements</p>
          <h2>Additional work undertaken selectively</h2>
          <p>
            In select situations, we also engage in complex, high-value initiatives
            where financial discipline, structuring, and cross-border insight are
            critical.
          </p>
          <p>
            These engagements are secondary to our core advisory work and are
            undertaken on a selective, case-by-case basis.
          </p>

          <div className="strategic-links">
            <div className="info-card">
              <h3>Healthcare Development & Turnkey Projects</h3>
              <p>
                Partner-led engagements involving healthcare infrastructure and
                implementation support in emerging markets.
              </p>
            </div>

            <div className="info-card">
              <h3>Global Investment & Trade Opportunities</h3>
              <p>
                Structured, selective cross-border opportunities where alignment,
                assessment, and disciplined introductions matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container narrow cta-box">
          <p className="section-label">Start the conversation</p>
          <h2>Strong revenue should lead to stronger cash performance</h2>
          <p>
            If revenue is growing but cash still feels inconsistent, we can help
            identify where the process is breaking and what it will take to
            stabilize it.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary">
              Book a Consultation
            </Link>
            <Link href="/services" className="btn btn-secondary">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
