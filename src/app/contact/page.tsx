import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Revenue Diagnostic | PHS',
  description:
    'Start a Revenue Diagnostic with Prosperity Heritage Advisory to identify where revenue is not converting into predictable cash.',
}

export default function ContactPage() {
  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>

          <h1>
            If revenue is not converting into predictable cash, let’s identify why.
          </h1>

          <p className="hero-subtext">
            A focused conversation to understand where execution is slowing,
            leaking, or breaking down across your revenue process.
          </p>
        </div>
      </section>

      {/* WHEN TO REACH OUT */}
      <section className="section section-soft">
        <div className="container">
          <h2>When to reach out</h2>

          <div className="card-grid three-up">
            <div className="card">
              <h3>Revenue is strong, cash is inconsistent</h3>
              <p>
                Billing delays, collections gaps, or weak visibility are affecting
                cash flow.
              </p>
            </div>

            <div className="card">
              <h3>Processes exist, but outcomes vary</h3>
              <p>
                Teams and systems are in place, but execution lacks consistency
                or control.
              </p>
            </div>

            <div className="card">
              <h3>Growth is increasing complexity</h3>
              <p>
                Scaling, acquisitions, or new initiatives are creating breakdowns
                across workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="contact-form" className="section">
        <div className="container narrow">
          <h2>Start the diagnostic</h2>

          <p className="section-intro">
            Share a few details about your situation. We’ll follow up if there’s a
            strong fit.
          </p>

          <div className="form-wrap">
            <form
              action="https://formspree.io/f/xzdjgopr"
              method="POST"
              className="form-grid"
            >
              <input
                type="hidden"
                name="_subject"
                value="New PHS Revenue Diagnostic Inquiry"
              />

              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required />
              </div>

              <div className="form-field">
                <label htmlFor="company">Organization</label>
                <input id="company" name="company" type="text" />
              </div>

              <div className="form-field">
                <label htmlFor="role">Role / Title</label>
                <input id="role" name="role" type="text" />
              </div>

              <div className="form-field full-width">
                <label htmlFor="message">What’s happening?</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Briefly describe where revenue or cash performance feels off."
                  required
                />
              </div>

              <div className="form-field full-width">
                <button type="submit" className="btn btn-primary">
                  Submit Inquiry
                </button>

                <p className="form-note">
                  We review every inquiry. We’ll follow up if there’s a clear fit.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* STRONG CTA */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-box">
            <p className="eyebrow">Why act now</p>

            <h2>Cash pressure rarely starts as a cash problem.</h2>

            <p>
              It usually begins earlier — in delayed handoffs, inconsistent
              billing, weak follow-through, or limited visibility. The sooner
              those signals are addressed, the easier they are to control.
            </p>

            <div className="cta-actions">
              <a href="#contact-form" className="btn btn-primary">
                Start the Diagnostic
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
