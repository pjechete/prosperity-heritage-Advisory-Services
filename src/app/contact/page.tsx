export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-copy">
          <p className="eyebrow">Contact</p>
          <h1 className="page-title">Let’s identify what’s holding back your cash performance</h1>

          <p className="section-copy section-copy-lg">
           If revenue is growing but cash performance still feels strained, the issue is often within billing, collections, reporting, or financial execution.
          </p>

          <p className="hero-proof">
            Use this form to share a bit about what you’re seeing, and we’ll help you identify where the breakdown may be.
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <p className="section-label">Typical reasons clients reach out</p>
          <h2 className="section-title">Where execution pressure usually shows up</h2>

          <div className="card-grid three-up">
            <div className="card card-feature">
              <h3>Billing Delays</h3>
              <p>
                Invoicing is inconsistent, ownership is unclear, or billing is
                not keeping pace with operational activity.
              </p>
            </div>

            <div className="card card-feature">
              <h3>Collections Pressure</h3>
              <p>
                Receivables are aging, follow-through is weak, and cash
                conversion is not as disciplined as it should be.
              </p>
            </div>

            <div className="card card-feature">
              <h3>Visibility Gaps</h3>
              <p>
                Leadership can see revenue, but not clearly enough where cash is
                slowing down or why performance is weakening.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container services-two-col">
          <div>
            <p className="section-label">What to expect</p>
            <h2 className="section-title left-align">
              A focused intake, not a generic inquiry
            </h2>

            <p className="section-copy">
              Use this form to share the revenue, billing, collections,
              reconciliation, or operational finance challenges you are facing.
            </p>

            <p className="section-copy">
              We review inquiries with a focus on fit, urgency, and where a
              structured diagnostic or advisory engagement may create the most
              value.
            </p>

            <div className="services-callout">
              <h3>Examples of what to share</h3>
              <ul>
                <li>Delayed or inconsistent invoicing</li>
                <li>Weak collections rhythm or aging pressure</li>
                <li>Revenue leakage or reconciliation issues</li>
                <li>Broken handoffs across operations and finance</li>
                <li>Cash strain during growth, change, or transition</li>
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

              <div className="full-width form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Briefly describe the revenue, billing, collections, reconciliation, or operational finance challenges you are facing."
                  rows={6}
                  required
                />
              </div>

              <div className="full-width">
                <button type="submit" className="btn btn-primary">
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="narrow">
          <div className="cta-box">
            <p className="section-label">Next step</p>
            <h2>Strong revenue should not be undermined by weak execution</h2>
            <p>
              If cash performance feels strained despite healthy revenue, it may
              be time to identify where the breakdown is happening.
            </p>

            <div className="hero-actions center-buttons">
              <a href="#top" className="btn btn-primary">
                Complete the Form
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
