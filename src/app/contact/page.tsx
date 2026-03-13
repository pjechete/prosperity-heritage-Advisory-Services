import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <section className="page-hero">
        <div className="container narrow">
          <div className="eyebrow">Contact</div>
          <h1>Book a Consultation</h1>

          <p>
            Let’s discuss how Prosperity Heritage Advisory can help strengthen
            your revenue control, billing discipline, and cash performance.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <div className="form-wrap">
            <form className="form-grid">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Your name" />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="you@example.com" />
              </div>

              <div className="form-field">
                <label htmlFor="company">Company</label>
                <input id="company" type="text" placeholder="Company name" />
              </div>

              <div className="form-field full-width">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Tell us about your billing, collections, or revenue challenges."
                />
              </div>

              <div className="full-width">
                <button type="submit" className="btn-primary">
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
