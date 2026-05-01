import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Revenue Control, Public Sector & Execution Advisory | PHS',
  description:
    'Start a conversation with Prosperity Heritage Advisory about revenue control, cash visibility, public sector readiness, healthcare initiatives, and execution challenges.',
}

export default function ContactPage() {
  return (
    <main id="top">
      <section className="page-hero">
        <div className="container page-hero-copy">
          <p className="eyebrow">Contact</p>

          <h1 className="page-title">
            Let’s identify where performance, visibility, or execution is breaking down.
          </h1>

          <p className="section-copy section-copy-lg">
            Whether you are facing revenue-to-cash challenges, operational finance pressure,
            public sector complexity, healthcare transformation needs, or partner-led execution
            challenges, we help clarify where structure and discipline are needed.
          </p>

          <p className="hero-proof">
            Use the form below to share what you are seeing. We review inquiries with a focus on
            fit, urgency, and whether a structured diagnostic or advisory engagement would be
            appropriate.
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <p className="section-label">When to reach out</p>

          <h2 className="section-title">
            We support organizations where execution affects financial performance.
          </h2>

          <div className="card-grid three-up">
            <div className="card card-feature">
              <h3>Revenue &amp; Cash Performance</h3>
              <p>
                Revenue is growing, but billing delays, collections gaps, leakage, or weak
                reporting are limiting cash predictability.
              </p>
            </div>

            <div className="card card-feature">
              <h3>Public Sector Readiness</h3>
              <p>
                Public, quasi-government, or partner-led initiatives need stronger financial
                controls, funding accountability, reporting discipline, or execution structure.
              </p>
            </div>

            <div className="card card-feature">
              <h3>Healthcare &amp; Partner-Led Initiatives</h3>
              <p>
                Healthcare, revenue cycle, implementation, or strategic partnership initiatives
                require clearer workflow alignment, operational readiness, and financial visibility.
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
              A focused intake for serious advisory conversations.
            </h2>

            <p className="section-copy">
              This is not a generic inquiry process. We use the initial information you share to
              understand the situation, the operating context, and whether PHS is the right fit to
              help.
            </p>

            <p className="section-copy">
              We are especially interested in situations where financial performance depends on
              better execution across billing, collections, reporting, operations, stakeholders,
              or partner delivery.
            </p>

            <div className="services-callout">
              <h3>Helpful details to include</h3>
              <ul>
                <li>What prompted the inquiry now</li>
                <li>Revenue, billing, collections, or cash visibility concerns</li>
                <li>Public sector, healthcare, or partner-led initiative context</li>
                <li>Any growth, transition, implementation, or funding pressure</li>
                <li>What outcome you are trying to improve</li>
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
                <input id="name" name="name" type="text" placeholder="Your name" required />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" required />
              </div>

              <div className="form-field">
                <label htmlFor="company">Organization</label>
                <input id="company" name="company" type="text" placeholder="Organization name" />
              </div>

              <div className="form-field">
                <label htmlFor="role">Role / Title</label>
                <input
                  id="role"
                  name="role"
                  type="text"
                  placeholder="Founder, CFO, Controller, Executive Director, Operations Leader, etc."
                />
              </div>

              <div className="full-width form-field">
                <label htmlFor="interest">Primary Area of Interest</label>
                <input
                  id="interest"
                  name="interest"
                  type="text"
                  placeholder="Revenue control, public sector readiness, healthcare initiative, strategic partnership, etc."
                />
              </div>

              <div className="full-width form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Briefly describe the challenge, opportunity, or initiative you would like to discuss."
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
            <p className="eyebrow">Next step</p>

            <h2>Strong outcomes depend on disciplined execution.</h2>

            <p>
              If performance is being limited by weak visibility, unclear ownership, delayed cash
              conversion, or complex stakeholder execution, the next step is understanding where the
              breakdown is occurring.
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
