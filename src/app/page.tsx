import Link from 'next/link'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">
              Turn Revenue Growth Into Predictable Cash Performance
            </div>

            <h1>
              Revenue growth should lead to stronger cash performance — not more uncertainty.
            </h1>

            <p>
              Prosperity Heritage Advisory helps leadership teams strengthen
              billing discipline, collections performance, revenue control, and
              financial visibility so revenue consistently converts into more
              predictable cash.
            </p>

            <div className="button-row">
              <Link href="/contact" className="btn-primary">
                Book a Consultation
              </Link>

              <Link href="/services" className="btn-secondary">
                View Services
              </Link>
            </div>
          </div>

          <div className="hero-card">
            <h3>Common challenges we help address</h3>

            <div className="metric-list">
              <div className="metric">
                <strong>Delayed or inconsistent invoicing</strong>
                <span>Invoices go out late or without enough discipline.</span>
              </div>

              <div className="metric">
                <strong>Weak collections follow-through</strong>
                <span>Collections are reactive instead of structured and managed.</span>
              </div>

              <div className="metric">
                <strong>Revenue leakage across workflows</strong>
                <span>Breakdowns in handoffs quietly weaken cash conversion.</span>
              </div>

              <div className="metric">
                <strong>Limited visibility for leadership</strong>
                <span>Revenue looks healthy, but cash performance still feels unstable.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section <section className="credibility-strip">
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
</section> section-light">        
        <div className="container">
          <h2 className="section-title">Our advisory focus</h2>
          <p className="section-subtitle">
            We help organizations improve the disciplines that protect revenue
            quality and strengthen the consistency of cash outcomes.
          </p>

          <div className="grid-4">
            <div className="card-highlight">
              <h3>Billing Discipline</h3>
              <p>Improve invoice timing, structure, ownership, and operational triggers.</p>
            </div>

            <div className="card">
              <h3>Collections Performance</h3>
              <p>Build stronger follow-up, accountability, and aging visibility.</p>
            </div>

            <div className="card">
              <h3>Revenue Control</h3>
              <p>Strengthen the workflows that ensure revenue is properly protected.</p>
            </div>

            <div className="card">
              <h3>Financial Visibility</h3>
              <p>Give leadership clearer insight into where cash conversion slows down.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Why revenue still fails to convert into predictable cash</h2>
          <p className="section-subtitle">
            The problem is often not sales alone. It is what happens after the sale.
          </p>

          <div className="problem-list">
            <div className="problem-item">
              Invoices are delayed, inconsistent, or not triggered at the right time.
            </div>
            <div className="problem-item">
              Payment terms do not align with how the business actually operates.
            </div>
            <div className="problem-item">
              Collections are reactive instead of structured and monitored.
            </div>
            <div className="problem-item">
              Handoffs between sales, operations, and finance create leakage.
            </div>
            <div className="problem-item">
              Leadership lacks enough visibility into what is slowing cash conversion.
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Request a Revenue Control Assessment</h2>
          <p>
            See how Prosperity Heritage Advisory can help strengthen the systems
            behind your cash performance.
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
