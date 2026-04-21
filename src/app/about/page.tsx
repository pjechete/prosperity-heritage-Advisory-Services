import Link from 'next/link'

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">About</p>
          <h1 className="page-title">A focused advisory partner for revenue control and cash stabilization</h1>

          <p className="section-copy section-copy-lg">
            Prosperity Heritage Advisory helps leadership teams strengthen the
            operational and financial systems that determine how revenue
            converts into cash.
          </p>

          <p className="hero-proof">
            Led by 20+ years of experience across global finance, operational
            transformation, and revenue cycle improvement.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section-label">What we see</p>
          <h2 className="section-title">
            Revenue can look healthy while cash performance remains under pressure
          </h2>

          <p className="section-copy">
            Many organizations generate strong revenue but still experience
            instability in cash performance. In most cases, the issue is not
            revenue alone. The breakdown happens somewhere between billing,
            collections, payment application, financial ownership, and
            reporting visibility.
          </p>

          <p className="section-copy">
            As businesses grow, go through acquisitions, or operate through
            periods of transition, these gaps become more visible. Sales moves
            quickly. Operations evolves. Finance works hard to keep pace. But
            without strong process discipline connecting those functions,
            revenue may appear healthy while cash outcomes remain inconsistent
            and difficult to manage.
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <p className="section-label">How we help</p>
          <h2 className="section-title">
            Practical, leadership-level improvement where execution matters most
          </h2>

          <div className="card-grid three-up">
            <div className="card card-feature">
              <h3>Billing Discipline</h3>
              <p>
                Improve invoice timing, accuracy, and ownership so revenue is
                captured and billed with greater consistency.
              </p>
            </div>

            <div className="card card-feature">
              <h3>Collections Performance</h3>
              <p>
                Strengthen follow-up structure, accountability, and aging
                management to support stronger cash conversion.
              </p>
            </div>

            <div className="card card-feature">
              <h3>Revenue Integrity</h3>
              <p>
                Address gaps affecting receivables visibility, including
                unapplied or misapplied cash and reconciliation issues.
              </p>
            </div>

            <div className="card">
              <h3>Financial Visibility</h3>
              <p>
                Give leadership teams clearer insight into where revenue
                performance is slowing down and where action is needed.
              </p>
            </div>

            <div className="card">
              <h3>Operational Stabilization</h3>
              <p>
                Support organizations during growth, transition, or
                post-acquisition periods where execution and control come under
                strain.
              </p>
            </div>

            <div className="card">
              <h3>Cash Performance Focus</h3>
              <p>
                Improve the discipline behind how revenue is managed,
                translated, and preserved as usable cash.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container services-two-col">
          <div>
            <p className="section-label">Why PHS</p>
            <h2 className="section-title left-align">
              More than routine accounting. More than high-level strategy.
            </h2>

            <p className="section-copy">
              Prosperity Heritage Advisory focuses on the operating layer where
              revenue conversion is often weakened. Our work is designed for
              leadership teams that need clearer control, stronger execution,
              and more dependable cash outcomes.
            </p>

            <p className="section-copy">
              We support organizations that need to identify where revenue
              conversion is slowing down, correct underlying process gaps, and
              stabilize the systems behind financial performance.
            </p>
          </div>

          <div className="services-callout">
            <h3>What defines our approach</h3>
            <ul>
              <li>Focused on execution, not just analysis</li>
              <li>Grounded in operational and financial realities</li>
              <li>Structured around control, visibility, and accountability</li>
              <li>Designed for leadership teams managing growth or complexity</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <p className="section-label">Next step</p>
            <h2>Let’s strengthen the systems behind cash performance</h2>
            <p>
              If delayed invoicing, collections inconsistency, reconciliation
              issues, weak visibility, or transition-related strain are
              affecting performance, we can help.
            </p>

            <div className="hero-actions center-buttons">
              <Link href="/contact" className="btn btn-primary">
                Schedule a Diagnostic
              </Link>
              <Link href="/services" className="btn btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
