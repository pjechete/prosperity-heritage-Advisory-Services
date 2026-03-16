import Link from 'next/link'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero hero-watermark">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">
              Revenue Stability & Operational Finance Advisory
            </div>

            <h1>Turn Revenue Into Predictable Cash Performance</h1>

            <p>
              Prosperity Heritage Advisory helps leadership teams strengthen
              billing, collections, revenue integrity, financial visibility,
              and operational finance execution so revenue converts into more
              predictable cash outcomes.
            </p>

            <p>
              We work with growing organizations that need stronger financial
              operations, clearer revenue visibility, and practical support
              during periods of growth, transition, or operational strain.
            </p>

            <div className="button-row">
              <Link href="/contact" className="btn-primary">
                Schedule Consultation
              </Link>

              <Link href="/services" className="btn-secondary">
                View Services
              </Link>
            </div>
          </div>

          <div className="hero-card">
            <h3>Common executive concerns we help address</h3>

            <div className="metric-list">
              <div className="metric">
                <strong>Delayed invoicing</strong>
                <span>Invoices go out late, inconsistently, or without enough process discipline.</span>
              </div>

              <div className="metric">
                <strong>Weak collections follow-through</strong>
                <span>Teams lack structure, accountability, or a consistent rhythm for collections.</span>
              </div>

              <div className="metric">
                <strong>Revenue integrity issues</strong>
                <span>Unapplied or misapplied payments distort receivables and aging visibility.</span>
              </div>

              <div className="metric">
                <strong>Limited financial visibility</strong>
                <span>Leadership lacks clear insight into where revenue conversion is slowing down.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY STRIP */}
      <section className="credibility-strip">
        <div className="container credibility-inner">
          <div className="credibility-text">
            Supporting leadership teams navigating revenue complexity and operational transition
          </div>

          <div className="credibility-items">
            <span>Revenue Control</span>
            <span>Billing Discipline</span>
            <span>Collections Performance</span>
            <span>Revenue Integrity</span>
            <span>Operational Stabilization</span>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">
            Strengthen the systems behind revenue performance
          </h2>

          <p className="section-subtitle">
            Many businesses do not struggle because revenue is absent. They
            struggle because the systems that should convert revenue into cash
            are not operating with enough discipline, consistency, or visibility.
          </p>

          <div className="services-two-col" style={{ marginTop: '2rem' }}>
            <div>
              <p className="section-copy">
                The issue is often not sales alone. It is what happens after the
                sale through invoicing, collections, payment application,
                financial ownership, and reporting.
              </p>

              <p className="section-copy">
                Prosperity Heritage Advisory helps leadership teams identify
                where those systems are weakening performance and implement
                practical improvements that support more stable cash outcomes.
              </p>
            </div>

            <div className="services-callout">
              <h3>What stronger execution can improve</h3>
              <ul>
                <li>Faster invoicing cycles</li>
                <li>Reduced receivable aging</li>
                <li>Better collections accountability</li>
                <li>Cleaner reconciliation and payment application</li>
                <li>Stronger leadership visibility</li>
                <li>More consistent cash conversion</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ADVISORY FOCUS */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Our Advisory Focus</h2>

          <p className="section-subtitle">
            We help organizations strengthen the disciplines that protect
            revenue quality, improve financial visibility, and support more
            consistent cash performance.
          </p>

          <div className="grid-4">
            <div className="card-highlight">
              <h3>Revenue Control & Cash Stabilization</h3>
              <p>
                Strengthen the workflows, ownership, and controls that help
                revenue convert into dependable cash outcomes.
              </p>
            </div>

            <div className="card">
              <h3>Billing & Collections Optimization</h3>
              <p>
                Improve invoice timing, collections structure, follow-up
                discipline, and accountability across teams.
              </p>
            </div>

            <div className="card">
              <h3>Revenue Integrity & Reconciliation Support</h3>
              <p>
                Resolve unapplied or misapplied payments and improve the
                accuracy of receivables and revenue-related reporting.
              </p>
            </div>

            <div className="card">
              <h3>Financial Controls & Revenue Visibility</h3>
              <p>
                Give leadership clearer insight into where revenue conversion
                slows down and where process risk is building.
              </p>
            </div>
          </div>

          <div className="grid-4" style={{ marginTop: '2rem' }}>
            <div className="card">
              <h3>M&A Transition & Operational Stabilization</h3>
              <p>
                Support acquired or transitioning organizations with hands-on
                financial operations stabilization during high-pressure periods.
              </p>
            </div>

            <div className="card">
              <h3>Revenue Operations Alignment</h3>
              <p>
                Reduce breakdowns between sales, operations, and finance so
                revenue activity flows more cleanly into cash performance.
              </p>
            </div>

            <div className="card">
              <h3>Operational Finance Support</h3>
              <p>
                Provide practical execution support when leadership teams need
                more than high-level advice alone.
              </p>
            </div>

            <div className="card">
              <h3>Assessment-Led Improvement</h3>
              <p>
                Start with a focused review to identify priority gaps,
                transition risks, and the highest-impact improvement areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Who We Work With</h2>

          <p className="section-subtitle">
            Our advisory services support organizations dealing with growth,
            operational complexity, and increasing financial discipline needs.
          </p>

          <div className="grid-4">
            <div className="card">
              <h3>Growth-Stage Companies</h3>
              <p>
                Organizations scaling revenue that need stronger billing,
                collections, and financial process discipline.
              </p>
            </div>

            <div className="card">
              <h3>Professional Services Firms</h3>
              <p>
                Businesses where invoicing, collections, and timing directly
                affect liquidity and operational stability.
              </p>
            </div>

            <div className="card">
              <h3>Healthcare Organizations</h3>
              <p>
                Practices and service providers navigating billing complexity,
                reimbursement pressure, and revenue visibility challenges.
              </p>
            </div>

            <div className="card">
              <h3>Multi-Location & Transitioning Businesses</h3>
              <p>
                Organizations where handoffs, ownership gaps, acquisitions, or
                scaling pressure create operational finance strain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">
            Why revenue growth still fails to convert into predictable cash
          </h2>

          <p className="section-subtitle">
            The problem is often not sales. It is what happens after the sale.
          </p>

          <div className="problem-list">
            <div className="problem-item">
              Invoices are delayed, inconsistent, or not triggered at the right time.
            </div>

            <div className="problem-item">
              Payment terms do not align with operational reality.
            </div>

            <div className="problem-item">
              Collections processes lack ownership and discipline.
            </div>

            <div className="problem-item">
              Unapplied or misapplied payments distort receivables accuracy.
            </div>

            <div className="problem-item">
              Sales, operations, and finance handoffs break down.
            </div>

            <div className="problem-item">
              Leadership lacks visibility into where revenue conversion is slowing down.
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH SECTION */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">How We Work</h2>

          <p className="section-subtitle">
            Our work is designed to help leadership teams move from reactive
            financial strain to stronger operational control.
          </p>

          <div className="grid-4">
            <div className="card-highlight">
              <h3>Assess</h3>
              <p>
                Review billing, collections, reconciliation, reporting, and
                ownership across the revenue-to-cash process.
              </p>
            </div>

            <div className="card">
              <h3>Identify Gaps</h3>
              <p>
                Pinpoint where execution, controls, and handoffs are weakening
                financial performance.
              </p>
            </div>

            <div className="card">
              <h3>Implement Improvements</h3>
              <p>
                Strengthen process discipline, accountability, and reporting
                clarity in the areas that matter most.
              </p>
            </div>

            <div className="card">
              <h3>Stabilize Operations</h3>
              <p>
                Help leadership teams build more reliable systems during growth,
                transition, or post-acquisition periods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-band">
        <div className="container">
          <h2>Schedule a Revenue Stability Assessment</h2>

          <p>
            If revenue is growing but cash performance remains inconsistent,
            the issue may be sitting somewhere between billing execution,
            collections discipline, reconciliation accuracy, or operational ownership.
          </p>

          <div className="button-row center-buttons">
            <Link href="/contact" className="btn-secondary">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
