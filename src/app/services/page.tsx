import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      <section className="page-hero services-hero">
        <div className="container">
          <div className="services-hero-grid">
            <div>
              <div className="eyebrow">Advisory Services</div>

              <h1>Revenue Control &amp; Cash Stabilization Advisory</h1>

              <p>
                Strengthen billing, collections, and financial controls so
                revenue converts into more predictable cash performance.
              </p>

              <div className="button-row">
                <Link href="/contact" className="btn-primary">
                  Book a Consultation
                </Link>

                <a href="#overview" className="btn-secondary">
                  View Overview
                </a>
              </div>
            </div>

            <div className="services-hero-panel">
              <h3>Built for organizations facing issues such as:</h3>
              <ul className="services-checklist">
                <li>Delayed invoicing</li>
                <li>Unclear payment terms</li>
                <li>Weak collections discipline</li>
                <li>Broken handoffs across teams</li>
                <li>Limited visibility into cash conversion</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="services-jumpbar">
        <div className="container">
          <div className="services-jump-links">
            <a href="#overview">Overview</a>
            <a href="#challenges">Common Challenges</a>
            <a href="#approach">Our Approach</a>
            <a href="#focus-areas">Areas of Focus</a>
            <a href="#contact-cta">Contact</a>
          </div>
        </div>
      </section>

      <section id="overview" className="section">
        <div className="container services-two-col">
          <div>
            <h2 className="section-title left-align">
              Strengthen the systems behind revenue performance
            </h2>

            <p className="section-copy">
              Many businesses do not struggle because revenue is absent. They
              struggle because the systems that should convert revenue into cash
              are not operating with enough discipline, consistency, or visibility.
            </p>

            <p className="section-copy">
              Prosperity Heritage Advisory works with leadership teams to identify
              where billing, collections, ownership, handoffs, and financial
              visibility begin to weaken cash performance.
            </p>
          </div>

          <div className="services-callout">
            <h3>Targets for improvement</h3>
            <ul>
              <li>Faster invoicing cycles</li>
              <li>Reduced receivable aging</li>
              <li>Better collections accountability</li>
              <li>Cleaner handoffs across teams</li>
              <li>Stronger revenue visibility</li>
              <li>More consistent cash conversion</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="challenges" className="section section-light">
        <div className="container">
          <h2 className="section-title">
            Why revenue growth still fails to convert into predictable cash
          </h2>

          <p className="section-subtitle">
            The issue is often not revenue alone. The issue is what happens after the sale.
          </p>

          <div className="problem-list">
            <div className="problem-item">
              Invoices are delayed, inconsistent, or not triggered at the right time.
            </div>
            <div className="problem-item">
              Payment terms do not align with operational reality.
            </div>
            <div className="problem-item">
              Collections are reactive instead of structured and managed.
            </div>
            <div className="problem-item">
              Revenue leakage builds through weak ownership and poor handoffs.
            </div>
            <div className="problem-item">
              Finance ends up dealing with issues created upstream in the process.
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="section">
        <div className="container">
          <h2 className="section-title">We help leadership teams improve</h2>

          <div className="grid-4">
            <div className="card-highlight">
              <h3>Improve billing discipline</h3>
              <p>Strengthen invoice timing, process ownership, and execution.</p>
            </div>

            <div className="card">
              <h3>Reduce collection delays</h3>
              <p>Build stronger follow-up rhythms and clearer accountability.</p>
            </div>

            <div className="card">
              <h3>Strengthen revenue controls</h3>
              <p>Protect revenue quality through better workflows and checkpoints.</p>
            </div>

            <div className="card">
              <h3>Increase leadership visibility</h3>
              <p>Provide clearer insight into where revenue conversion slows down.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="focus-areas" className="section section-light">
        <div className="container services-two-col">
          <div>
            <h2 className="section-title left-align">
              Start with a Revenue Control Assessment
            </h2>

            <p className="section-copy">
              We assess the current process from contract execution through
              invoicing, collections, and reporting to identify where revenue
              discipline is breaking down.
            </p>

            <p className="section-copy">
              This gives leadership a clearer view of priority gaps, improvement
              opportunities, and the steps needed to create more consistent cash outcomes.
            </p>
          </div>

          <div className="services-assessment-card">
            <h3>Assessment focus typically includes:</h3>
            <ul>
              <li>Contract-to-invoice workflow review</li>
              <li>Billing timing and ownership analysis</li>
              <li>Collections structure and accountability</li>
              <li>Operational handoff review</li>
              <li>Reporting and visibility gaps</li>
            </ul>

            <div className="button-row">
              <Link href="/contact" className="btn-primary">
                Request an Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Related advisory services</h2>

          <div className="grid-4">
            <div className="card">
              <h3>Billing Process Optimization</h3>
              <p>Improve invoicing structure, timing, and operational readiness.</p>
            </div>

            <div className="card">
              <h3>Collections Performance Improvement</h3>
              <p>Strengthen follow-up discipline, aging visibility, and accountability.</p>
            </div>

            <div className="card">
              <h3>Revenue Operations Alignment</h3>
              <p>Reduce breakdowns between sales, operations, and finance.</p>
            </div>

            <div className="card">
              <h3>Financial Controls & Visibility</h3>
              <p>Improve reporting clarity and leadership decision support.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-cta" className="cta-band">
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
