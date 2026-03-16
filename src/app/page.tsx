import Link from 'next/link'
import Image from 'next/image'
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
              Revenue Control & Cash Stabilization Advisory
            </div>

            <h1>
              Turn Revenue Growth Into Predictable Cash Performance
            </h1>

            <p>
              Prosperity Heritage Advisory helps leadership teams strengthen billing, collections, revenue integrity, and financial controls so revenue consistently converts into predictable cash outcomes.
              We work with growing organizations that need stronger financial operations, clearer revenue visibility, and practical support during periods of growth or transition.
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
                <span>Invoices go out late or inconsistently.</span>
              </div>

              <div className="metric">
                <strong>Weak collections discipline</strong>
                <span>Follow-up processes lack structure.</span>
              </div>

              <div className="metric">
                <strong>Revenue leakage</strong>
                <span>Breakdowns across teams reduce cash conversion.</span>
              </div>

              <div className="metric">
                <strong>Limited visibility</strong>
                <span>Leadership lacks clear insight into cash performance.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVENUE TO CASH DIAGRAM */}
      <section className="diagram-section">
        <div className="container">
          <div className="diagram-wrap">
            <div className="diagram-header">
              <div className="eyebrow">Revenue to Cash</div>
              <h2 className="section-title left-align">
                A clearer path from revenue activity to cash performance
              </h2>
              <p className="section-copy">
                We help organizations improve the disciplines that connect
                revenue generation to billing execution, collections follow-through,
                control strength, and cash consistency.
              </p>
            </div>

            <div className="diagram-image-card">
              <Image
                src="/revenue-cash-diagram.png"
                alt="Revenue to Cash Process Diagram"
                width={1400}
                height={500}
                className="diagram-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY STRIP */}
      <section className="credibility-strip">
        <div className="container credibility-inner">
          <div className="credibility-text">
            Supporting leadership teams navigating revenue complexity
          </div>

          <div className="credibility-items">
            <span>Revenue Control</span>
            <span>Billing Discipline</span>
            <span>Collections Performance</span>
            <span>Financial Visibility</span>
            <span>Cash Stabilization</span>
          </div>
        </div>
      </section>

      {/* ADVISORY FOCUS */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Our Advisory Focus</h2>

          <p className="section-subtitle">
            We help organizations improve the disciplines that protect revenue
            quality and strengthen consistent cash outcomes.
          </p>

          <div className="grid-4">
            <div className="card-highlight">
              <h3>Billing Discipline</h3>
              <p>
                Improve invoice timing, ownership, and operational triggers.
              </p>
            </div>

            <div className="card">
              <h3>Collections Performance</h3>
              <p>
                Build stronger follow-up, accountability, and aging visibility.
              </p>
            </div>

            <div className="card">
              <h3>Revenue Control</h3>
              <p>
                Strengthen workflows that protect revenue integrity.
              </p>
            </div>

            <div className="card">
              <h3>Financial Visibility</h3>
              <p>
                Give leadership clearer insight into cash conversion.
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
            Our advisory services support organizations experiencing growth,
            operational complexity, and increasing financial discipline needs.
          </p>

          <div className="grid-4">
            <div className="card">
              <h3>Growth-Stage Companies</h3>
              <p>
                Organizations scaling revenue that need stronger billing and
                collections discipline.
              </p>
            </div>

            <div className="card">
              <h3>Professional Services Firms</h3>
              <p>
                Firms where invoicing, collections, and revenue timing directly
                affect cash performance.
              </p>
            </div>

            <div className="card">
              <h3>Healthcare Organizations</h3>
              <p>
                Practices and service providers navigating billing complexity
                and reimbursement cycles.
              </p>
            </div>

            <div className="card">
              <h3>Multi-Location Businesses</h3>
              <p>
                Organizations where operational handoffs and billing ownership
                create revenue leakage.
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
            The problem is often not sales — it is what happens after the sale.
          </p>

          <div className="problem-list">
            <div className="problem-item">
              Invoices are delayed or inconsistent.
            </div>

            <div className="problem-item">
              Payment terms do not match operational reality.
            </div>

            <div className="problem-item">
              Collections processes lack ownership and discipline.
            </div>

            <div className="problem-item">
              Sales, operations, and finance handoffs break down.
            </div>

            <div className="problem-item">
              Leadership lacks visibility into revenue conversion.
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-band">
        <div className="container">
          <h2>Request a Revenue Control Assessment</h2>

          <p>
            See how Prosperity Heritage Advisory can strengthen
            the systems behind your cash performance.
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
