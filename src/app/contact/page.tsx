import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Prosperity Heritage Advisory',
  description:
    'Contact Prosperity Heritage Advisory to start a practical conversation about operational friction, financial pressure, cash flow, reporting, workflows, or growth challenges.',
  alternates: {
    canonical: 'https://phs-usa.com/contact',
  },
  openGraph: {
    title: 'Contact | Prosperity Heritage Advisory',
    description:
      'Start with a practical conversation. Share what is creating operational or financial pressure in your organization.',
    url: 'https://phs-usa.com/contact',
    siteName: 'Prosperity Heritage Advisory',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <main>
      <section className="mock-hero mock-hero-simple">
        <div className="mock-container">
          <p className="mock-eyebrow">Contact</p>
          <h1>Let&apos;s start with a practical conversation.</h1>

          <p>
            Many organizations know they are experiencing operational friction or
            financial pressure, but they are not completely sure where the
            breakdown originates.
          </p>

          <p>
            You do not need to have all the answers before reaching out. Our work
            begins with a conversation, not a sales pitch.
          </p>
        </div>
      </section>

      <section className="mock-section mock-section-soft">
        <div className="mock-container">
          <div className="mock-grid-2 mock-contact-grid">
            <div>
              <p className="mock-eyebrow">Start the Conversation</p>
              <h2>Tell us what is creating pressure.</h2>

              <p>
                Many organizations know something is not working as it should,
                but they are not always sure where the breakdown starts.
              </p>

              <p>
                Whether the challenge involves workflows, reporting, cash flow,
                billing, team coordination, growth, or operational execution,
                the first step is understanding what is happening.
              </p>

              <article className="mock-card">
                <h3>What happens next?</h3>

                <ul className="mock-bullet-list">
                  <li>We review the information you provide.</li>
                  <li>We determine whether PHS may be able to help.</li>
                  <li>
                    We reach out to discuss next steps if there appears to be a
                    fit.
                  </li>
                </ul>

                <p>
                  The goal is simple: understand what is happening and determine
                  whether there is a practical path forward.
                </p>
              </article>
            </div>

            <div>
              <p className="mock-eyebrow">Send a Message</p>
              <h2>Share a few details.</h2>

              <p>
                Complete the form below or email us directly at{' '}
                <strong>info@phs-usa.com</strong>.
              </p>

              <article className="mock-card">
                <form
                  action="https://formspree.io/f/xzdjgopr"
                  method="POST"
                  className="mock-form"
                >
                  <input
                    type="hidden"
                    name="_subject"
                    value="New PHS Website Inquiry"
                  />

                  <div className="mock-form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" required />
                  </div>

                  <div className="mock-form-group">
                    <label htmlFor="role">Role / Title</label>
                    <input id="role" name="role" type="text" />
                  </div>

                  <div className="mock-form-group">
                    <label htmlFor="organization">Organization</label>
                    <input id="organization" name="organization" type="text" />
                  </div>

                  <div className="mock-form-group">
                    <label htmlFor="industry">Industry</label>
                    <select id="industry" name="industry">
                      <option>Healthcare & Medical Practices</option>
                      <option>Construction & Field Services</option>
                      <option>Logistics & Multi-Location Businesses</option>
                      <option>Professional Services</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="mock-form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required />
                  </div>

                  <div className="mock-form-group">
                    <label htmlFor="pressure">Primary Pressure Point</label>
                    <select id="pressure" name="pressure">
                      <option>Unpredictable Cash Flow</option>
                      <option>Billing or Invoicing Delays</option>
                      <option>Reporting or Reconciliation Issues</option>
                      <option>Workflow or Team Coordination Challenges</option>
                      <option>Growth or Change Support</option>
                      <option>Not Sure Yet</option>
                    </select>
                  </div>

                  <div className="mock-form-group">
                    <label htmlFor="message">
                      Briefly Describe What Is Happening
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us what feels stuck, what is creating pressure, or what you need help understanding."
                      required
                    />
                  </div>

                  <button className="mock-btn" type="submit">
                    Send Message
                  </button>
                </form>

                <p className="mock-note">
                  Every inquiry is reviewed by the PHS team and handled with
                  professional care and discretion.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="mock-section">
        <div className="mock-container mock-centered">
          <p className="mock-eyebrow">Contact Information</p>

          <p>📧 info@phs-usa.com</p>

          <p className="mock-eyebrow mock-top-space">Confidentiality</p>

          <h2>Professional care and discretion.</h2>

          <p>
            Your operational, financial, and organizational information is
            treated with professional care and discretion. Information submitted
            through this form is used solely to understand your situation and
            determine whether PHS may be able to help.
          </p>
        </div>
      </section>
    </main>
  )
}

