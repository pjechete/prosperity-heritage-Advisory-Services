import Link from 'next/link'

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="services-hero-grid">
            <div>
              <p className="eyebrow">Services</p>
              <h1>Revenue control, cash stabilization, and selective strategic support.</h1>

              <p className="section-copy">
                Prosperity Heritage Advisory helps leadership teams improve how
                revenue converts into cash by strengthening the operational
                discipline behind billing, collections, revenue integrity, and
                financial visibility.
              </p>

              <p className="section-copy">
                Our work is practical, hands-on, and focused on the areas where
                execution breakdowns quietly delay cash, weaken control, and
                limit leadership confidence.
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
                <li>Faster, more disciplined billing cycles</li>
                <li>Stronger collections execution and follow-through</li>
                <li>Reduced revenue leakage and missed capture</li>
                <li>Clearer reporting and cash visibility</li>
                <li>Better operating discipline across handoffs</li>
                <li>Stronger support during transition or growth</li>
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
              Many organizations do not have a revenue problem. They have a
              conversion problem.
            </p>

            <p className="section-copy">
              Revenue may be booked, but cash is slowed by weak handoffs,
              inconsistent billing discipline, delayed collections, poor
              visibility, or operational gaps between commercial activity and
              finance execution.
            </p>

            <p className="section-copy">
              We help leadership teams identify those breakdowns, improve
              accountability, and strengthen the operating rhythm required to
              convert revenue into more predictable cash performance.
            </p>
          </div>

          <div className="services-callout">
            <h3>Outcomes this work supports</h3>
            <ul>
              <li>Shorter invoicing cycles</li>
              <li>Reduced receivable aging</li>
              <li>Stronger collections discipline</li>
              <li>Improved revenue capture</li>
              <li>Better visibility into bottlenecks and delays</li>
              <li>More confidence in cash performance</li>
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
            most directly influence cash realization.
          </p>

          <div className="grid-4">
            <div className="card-highlight">
              <h3>Revenue Process Alignment</h3>
              <p>
                Improve alignment across contracts, billing, collections, and
                finance so revenue moves through the business with fewer delays,
                fewer disconnects, and stronger accountability.
              </p>
            </div>

            <div className="card">
              <h3>Billing &amp; Invoicing Discipline</h3>
              <p>
                Strengthen invoicing workflows, timing, ownership, and process
                consistency to reduce preventable billing delays and improve
                speed to cash.
              </p>
            </div>

            <div className="card">
              <h3>Collections Strategy &amp; Execution</h3>
              <p>
                Establish clearer follow-up cadence, escalation paths,
                ownership, and reporting discipline to improve collections
                performance and receivables management.
              </p>
            </div>

            <div className="card">
              <h3>Revenue Integrity &amp; Leakage Review</h3>
              <p>
                Identify missed charges, underbilling, breakdowns in execution,
                and control gaps that reduce revenue realization and weaken
                financial performance.
              </p>
            </div>

            <div className="card">
              <h3>Financial Visibility &amp; Reporting</h3>
              <p>
                Improve leadership reporting so decision-makers can clearly see
                where cash is being delayed, what is driving performance, and
                where intervention is needed.
              </p>
            </div>

            <div className="card">
              <h3>Post-Acquisition or Transition Stabilization</h3>
              <p>
                Support organizations during periods of integration, change, or
                accelerated growth when billing, reporting, and financial
                control often come under strain.
              </p>
            </div>

            <div className="card">
              <h3>Operational Finance Support</h3>
              <p>
                Provide practical support where teams need stronger execution,
                tighter process discipline, or more leadership visibility across
                the financial operations behind revenue.
              </p>
            </div>

            <div className="card">
              <h3>Assessment-Led Improvement</h3>
              <p>
                Begin with a focused review to identify the highest-impact gaps,
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
              Hands-on, practical, and leadership-focused
            </h2>

            <p className="section-copy">
              We work directly with leadership teams and key operational
              stakeholders to understand how revenue moves through the
              organization, where execution weakens, and what improvements will
              create stronger control and more dependable cash outcomes.
            </p>

            <p className="section-copy">
              Our work is not generic accounting clean-up. It is structured
              advisory centered on operating discipline, financial visibility,
              and the practical realities that determine whether revenue turns
              into cash efficiently.
            </p>
          </div>

          <div className="services-assessment-card">
            <h3>Our approach typically includes</h3>
            <ul>
              <li>Review of billing, collections, and reporting workflows</li>
              <li>Identification of execution gaps and ownership issues</li>
              <li>Prioritization of practical improvement opportunities</li>
              <li>Leadership-level visibility into risks and bottlenecks</li>
              <li>Support through change, transition, or stabilization periods</li>
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
