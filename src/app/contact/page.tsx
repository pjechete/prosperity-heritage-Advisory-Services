
export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <div className="eyebrow">Contact</div>
          <h1>Book a Consultation</h1>
          <p>
            Let’s discuss where revenue performance may be slowing down in your
            organization and how Prosperity Heritage Advisory can help strengthen
            billing discipline, collections execution, reconciliation accuracy,
            financial visibility, and operational stability.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <div className="content-stack" style={{ marginBottom: '2rem' }}>
            <div className="card-gray">
              <h3>Typical reasons clients reach out</h3>
              <ul>
                <li>Delayed or inconsistent invoicing</li>
                <li>Aging receivables and weak collections follow-through</li>
                <li>Unapplied or misapplied payments</li>
                <li>Revenue leakage or reporting visibility gaps</li>
                <li>Broken handoffs between operations and finance</li>
                <li>Post-acquisition or transition-related stabilization needs</li>
              </ul>
            </div>
          </div>

          <div className="form-wrap">
            <form
              action="https://formspree.io/f/xzdjgopr"
              method="POST"
              className="form-grid"
            >
              <input
                type="hidden"
                name="_subject"
                value="New PHS Website Inquiry"
              />

              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company name"
                />
              </div>

              <div className="form-field">
                <label htmlFor="role">Role / Title</label>
                <input
                  id="role"
                  name="role"
                  type="text"
                  placeholder="Founder, CFO, Controller, Operations Leader, etc."
                />
              </div>

              <div className="form-field full-width">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about the revenue, billing, collections, reconciliation, or operational finance challenges you are facing."
                  rows={6}
                  required
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

      <section className="cta-band">
        <div className="container narrow">
          <h2>Revenue should convert into cash more consistently</h2>
          <p>
            If cash performance feels strained despite healthy revenue, the
            issue may be sitting somewhere between invoicing, collections,
            reconciliation, reporting, or operational ownership.
          </p>
        </div>
      </section>
       </main>
  )
}
