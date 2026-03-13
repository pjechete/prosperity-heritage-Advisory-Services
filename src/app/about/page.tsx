import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <section className="page-hero">
        <div className="container narrow">
          <div className="eyebrow">About</div>
          <h1>About Prosperity Heritage Advisory</h1>

          <p>
            Prosperity Heritage Advisory helps leadership teams strengthen the
            processes behind billing, collections, revenue control, and cash performance.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <div className="content-stack">
            <div className="card-gray">
              <p>
                As organizations grow, revenue processes often become more complex.
                Sales teams move quickly, operations evolve, and finance teams work hard
                to keep up with invoicing, collections, and reporting.
              </p>
            </div>

            <div className="card-gray">
              <p>
                Without strong process discipline connecting these functions, revenue may
                look healthy while cash performance becomes inconsistent and unpredictable.
              </p>
            </div>

            <div className="card-gray">
              <p>
                Our work focuses on practical, leadership-level improvements that help
                organizations reduce leakage, tighten billing execution, improve collections,
                and build better visibility around revenue-to-cash performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
