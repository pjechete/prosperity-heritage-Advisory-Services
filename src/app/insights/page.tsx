import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function InsightsPage() {
  return (
    <main>
      <Navbar />

      <section className="page-hero">
        <div className="container narrow">
          <div className="eyebrow">Insights</div>
          <h1>Perspectives on Revenue Stability</h1>

          <p>
            Practical perspectives on revenue operations, billing discipline,
            collections performance, financial visibility, and operational
            finance execution.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Upcoming Articles</h2>

          <p className="section-subtitle">
            We regularly share insights drawn from real operational challenges
            organizations face as revenue grows and financial processes become
            more complex.
          </p>

          <div className="grid-4">
            <div className="card">
              <h3>Why Revenue Does Not Always Convert Into Cash</h3>
              <p>
                Many organizations generate strong revenue yet still struggle
                with inconsistent cash performance. We explore where the
                breakdown often occurs between billing, collections, and
                financial visibility.
              </p>
            </div>

            <div className="card">
              <h3>The Hidden Cost of Delayed Invoicing</h3>
              <p>
                Delayed billing cycles quietly weaken cash flow, distort aging,
                and reduce leadership visibility into operational performance.
              </p>
            </div>

            <div className="card">
              <h3>Why Unapplied Cash Is Often a Process Problem</h3>
              <p>
                Unapplied or misapplied payments are rarely just accounting
                cleanup issues. They often reveal deeper breakdowns in process,
                ownership, and reconciliation discipline.
              </p>
            </div>

            <div className="card">
              <h3>What Breaks After an Acquisition</h3>
              <p>
                Acquisitions often expose operational gaps across billing,
                collections, reporting, and financial controls that require
                stabilization quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container narrow">
          <h2>Need help stabilizing revenue performance?</h2>

          <p>
            If your organization is dealing with delayed invoicing,
            reconciliation issues, aging receivables, or operational finance
            strain, Prosperity Heritage Advisory can help.
          </p>

          <div className="button-row center-buttons">
            <Link href="/contact" className="btn-secondary">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
