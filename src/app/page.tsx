import Link from 'next/link'

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero services-page-hero">
        <div className="container">
          <div className="services-hero-grid">
            <div>
              <p className="eyebrow">Services</p>
              <h1 className="page-title">
                Revenue Control &amp; Cash Stabilization Advisory
              </h1>

              <p className="section-copy section-copy-lg">
                Revenue is not lost only when demand weakens. It is also lost,
                delayed, or weakened when execution breaks down across billing,
                collections, reporting, and financial operations.
              </p>

              <p className="section-copy">
                Prosperity Heritage Advisory helps leadership teams identify
                where revenue is slowing down and restore the control needed to
                convert it into more predictable cash performance.
              </p>

              <div className="button-row">
                <Link href="/contact" className="btn btn-primary">
                  Schedule a Diagnostic
                </Link>
                <a href="#service-framework" className="btn btn-secondary">
                  View Our Approach
                </a>
              </div>
            </div>

            <div className="services-hero-panel">
              <h3>What this work helps correct</h3>
              <ul className="services-checklist">
                <li>Delayed or inconsistent invoicing</li>
                <li>Weak collections structure and follow-through</li>
                <li>Revenue leakage across billing and operations</li>
                <li>Limited visibility into cash performance</li>
                <li>Disconnected handoffs across the revenue flow</li>
                <li>Execution strain during growth or transition</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="services-jumpbar">
        <div className="container">
          <div className="services-jump-links">
            <a href="#service-problem">The Problem</a>
            <a href="#service-framework">Framework</a>
            <a href="#service-approach">Approach</a>
            <a href="#service-areas">Focus Areas</a>
            <a href="#service-fit">Who It’s For</a>
            <a href="#service-selective">Selective Engagements</a>
          </div>
        </div>
      </section>

      <section id="service-problem" className="section section-soft">
        <div className="narrow">
          <p className="section-label">Why this matters</p>
          <h2 className="section-title">
            Revenue performance can look healthy while cash remains unstable
          </h2>

          <p className="section-copy">
            In many organizations, the real issue is not whether revenue exists.
            It is whether that revenue is billed accurately, collected
            consistently, reconciled cleanly, and translated into usable cash
            without unnecessary delay.
          </p>

          <p className="section-copy">
            As complexity grows, breakdowns often emerge between commercial
            activity and financial execution. Billing slows down. Collections
            lose rhythm. Ownership becomes blurred. Reporting becomes less
            useful. Cash performance becomes harder to trust.
          </p>

          <p className="section-copy">
            That is where our work is focused.
          </p>
        </div>
      </section>

      <section id="service-framework" className="section">
        <div className="container services-two-col services-framework-grid">
          <div>
            <p className="section-label">Service framework</p>
            <h2 className="section-title left-align">
              Revenue control depends on People, Process, and Technology
            </h2>

            <p className="section-copy">
              Sustainable cash performance does not come from effort alone. It
              comes from disciplined execution across the teams, workflows, and
              systems that move revenue through the organization.
            </p>
          </div>

          <div className="services-callout">
            <h3>Where control is built</h3>
            <ul>
              <li>
                <strong>People:</strong> Clear ownership, accountability, and
                alignment across operations and finance
              </li>
              <li>
                <strong>Process:</strong> Structured billing, defined
                collections discipline, and cleaner handoffs
              </li>
              <li>
                <strong>Technology:</strong> Systems and reporting that support
                execution and visibility
              </li>
            </ul>
          </div>
        </div>

        <div className="container">
          <div className="card-grid three-up services-pillars-grid">
            <div className="card card-feature">
              <h3>People</h3>
              <p>
                Clarify ownership across billing, collections, and finance so
                execution is driven with stronger accountability.
              </p>
            </div>

            <div className="card card-feature">
              <h3>Process</h3>
              <p>
                Improve the operational flow from contract to invoice to cash so
                revenue moves with fewer delays and disconnects.
              </p>
            </div>

            <div className="card card-feature">
              <h3>Technology</h3>
              <p>
                Strengthen visibility through systems, reporting, and process
                support that reflect what is happening operationally.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="service-approach" className="section section-light">
        <div className="container">
          <p className="section-label">How we work</p>
          <h2 className="section-title">Diagnose. Align. Stabilize.</h2>
          <p className="section-intro">
            Our work is designed to help leadership teams move from uncertainty
            to control through a practical, structured advisory process.
          </p>

          <div className="steps-grid services-steps-grid">
            <div className="step-card">
              <span className="step-number">01</span>
              <h3>Diagnose</h3>
              <p>
                Review how revenue moves through billing, collections,
                reconciliation, reporting, and financial operations to identify
                where breakdowns occur.
              </p>
            </div>

            <div className="step-card">
              <span className="step-number">02</span>
              <h3>Align</h3>
              <p>
                Clarify priorities, ownership, and improvement opportunities so
                teams are working from a more disciplined operating structure.
              </p>
            </div>

            <div className="step-card">
              <span className="step-number">03</span>
              <h3>Stabilize</h3>
              <p>
                Support targeted changes that improve execution, strengthen
                visibility, and create more dependable cash outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="service-areas" className="section">
        <div className="container">
          <p className="section-label">Focus areas</p>
          <h2 className="section-title">Where we create value</h2>
          <p className="section-intro">
            Our work centers on the operational and financial pressure points
            that most directly affect cash realization.
          </p>

          <div className="card-grid services-focus-grid">
            <div className="card card-highlight">
              <h3>Revenue Process Alignment</h3>
              <p>
                Improve coordination across contracts, billing, collections, and
                finance so revenue moves through the business with stronger
                continuity and fewer breakdowns.
              </p>
            </div>

            <div className="card">
              <h3>Billing &amp; Invoicing Discipline</h3>
              <p>
                Strengthen invoice timing, workflow discipline, ownership, and
                execution consistency to reduce preventable billing delays.
              </p>
            </div>

            <div className="card">
              <h3>Collections Performance</h3>
              <p>
                Improve collections cadence, escalation paths, ownership, and
                reporting rhythm to support healthier receivables management.
              </p>
            </div>

            <div className="card">
              <h3>Revenue Integrity &amp; Leakage Review</h3>
              <p>
                Identify underbilling, missed charges, reconciliation issues,
                and execution gaps that weaken revenue realization.
              </p>
            </div>

            <div className="card">
              <h3>Financial Visibility &amp; Reporting</h3>
              <p>
                Give leadership teams clearer visibility into where cash is
                slowing down, why performance is weakening, and where action is
                needed.
              </p>
            </div>

            <div className="card">
              <h3>Transition &amp; Stabilization Support</h3>
              <p>
                Support organizations through growth, operational change, or
                post-acquisition periods where control and execution come under
                pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="service-fit" className="section section-soft">
        <div className="container">
          <p className="section-label">Who this is for</p>
          <h2 className="section-title">
            Built for leadership teams facing execution pressure behind revenue
          </h2>

          <div className="card-grid three-up">
            <div className="card">
              <h3>Growth Outpacing Structure</h3>
              <p>
                Revenue is increasing, but billing, collections, and finance
                processes are not keeping pace.
              </p>
            </div>

            <div className="card">
              <h3>Cross-Functional Disconnect</h3>
              <p>
                Operations and finance are working hard, but ownership and
                handoffs are not fully aligned.
              </p>
            </div>

            <div className="card">
              <h3>Limited Cash Visibility</h3>
              <p>
                Leadership can see revenue, but not clearly enough where cash is
                being delayed or weakened.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="service-selective" className="section section-clean">
        <div className="container">
          <p className="section-label">Selective strategic engagements</p>
          <h2 className="section-title">
            Secondary, partnership-led strategic work
          </h2>
          <p className="section-intro">
            In addition to our core advisory work, we selectively support
            complex opportunities that require disciplined coordination,
            financial structure, and experienced execution.
          </p>

          <div className="card-grid two-up">
            <div className="card">
              <h3>Healthcare Development &amp; Turnkey Projects</h3>
              <p>
                Partner-led initiatives involving healthcare development,
                planning, operational setup, and coordinated implementation in
                carefully selected contexts.
              </p>
            </div>

            <div className="card">
              <h3>Global Investment &amp; Trade Opportunities</h3>
              <p>
                Selective cross-border engagements where structured opportunity
                review, realistic execution, and aligned counterparties are
                essential.
              </p>
            </div>
          </div>

          <p className="section-copy services-selective-note">
            All non-core engagements are undertaken selectively and in
            collaboration with trusted partners.
          </p>
        </div>
      </section>

      <section className="cta-section">
        <div className="narrow">
          <div className="cta-box">
            <p className="section-label">Next step</p>
            <h2>Start with a structured diagnostic</h2>
            <p>
              If revenue is growing but cash performance still feels strained,
              the issue is often sitting inside the operating system behind it.
            </p>

            <div className="hero-actions center-buttons">
              <Link href="/contact" className="btn btn-primary">
                Schedule a Diagnostic
              </Link>
              <Link href="/about" className="btn btn-secondary">
                Learn More About PHS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
