import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Prosperity Heritage Advisory',
  description:
    'Contact Prosperity Heritage Advisory to start a practical conversation about operational friction, cash flow pressure, reporting issues, workflows, and financial process challenges.',
  alternates: {
    canonical: 'https://phs-usa.com/contact',
  },
  openGraph: {
    title: 'Contact | Prosperity Heritage Advisory',
    description:
      'Start a practical conversation with PHS about operational or financial pressure affecting your organization.',
    url: 'https://phs-usa.com/contact',
    siteName: 'Prosperity Heritage Advisory',
    type: 'website',
  },
}

const expectations = [
  'A practical discussion about what is creating pressure',
  'A few questions about your workflows, reporting, or financial processes',
  'An honest perspective on whether PHS may be able to help',
]

export default function ContactPage() {
  return (
    <main>
      <section className="phs-page-hero">
        <div className="phs-container phs-hero-copy">
          <p className="phs-eyebrow">Contact</p>
          <h1>Let&apos;s start with a practical conversation.</h1>

          <p className="phs-hero-lede">
            Many organizations know they are experiencing operational friction
            or financial pressure, but they are not completely sure where the
            breakdown originates.
          </p>

          <p>
            You do not need to have all the answers before reaching out. Our
            work begins with a conversation, not a sales pitch.
          </p>
        </div>
      </section>

      <section className="phs-section phs-section-soft" id="contact-form">
        <div className="phs-container phs-contact-layout">
          <div>
            <p className="phs-section-label">Option 1</p>
            <h2>Schedule a Conversation</h2>
            <p>Skip the back-and-forth and schedule a brief introductory call.</p>

            <div className="phs-card phs-contact-card">
              <h3>What to expect</h3>
              <ul className="phs-bullet-list">
                {expectations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                The goal is simple: understand what is happening and determine
                whether there is a fit.
              </p>
              <a href="#contact-form" className="phs-btn phs-btn-primary">
                Schedule a Conversation
              </a>
            </div>
          </div>

          <div>
            <p className="phs-section-label">Option 2</p>
            <h2>Send a Message</h2>
            <p>
              Prefer to share a few details first? Complete the form below or
              email us directly at <strong>info@phs-usa.com</strong>.
            </p>

            <div className="phs-form-panel">
              <form
                action="https://formspree.io/f/xzdjgopr"
                method="POST"
                className="form-grid"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="New PHS Contact Inquiry"
                />

                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" required />
                </div>

                <div className="form-field">
                  <label htmlFor="role">Role / Title</label>
                  <input id="role" name="role" type="text" />
                </div>

                <div className="form-field">
                  <label htmlFor="organization">Organization</label>
                  <input id="organization" name="organization" type="text" />
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required />
                </div>

                <div className="form-field full-width">
                  <label htmlFor="industry">Industry</label>
                  <select id="industry" name="industry">
                    <option value="">Select one</option>
                    <option value="Healthcare & Medical Practices">
                      Healthcare & Medical Practices
                    </option>
                    <option value="Construction & Field Services">
                      Construction & Field Services
                    </option>
                    <option value="Logistics & Multi-Location Businesses">
                      Logistics & Multi-Location Businesses
                    </option>
                    <option value="Professional Services">Professional Services</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-field full-width">
                  <label htmlFor="pressure">Primary Pressure Point</label>
                  <select id="pressure" name="pressure">
                    <option value="">Select one</option>
                    <option value="Unpredictable Cash Flow">
                      Unpredictable Cash Flow
                    </option>
                    <option value="Billing or Invoicing Delays">
                      Billing or Invoicing Delays
                    </option>
                    <option value="Reporting or Reconciliation Issues">
                      Reporting or Reconciliation Issues
                    </option>
                    <option value="Workflow or Team Coordination Challenges">
                      Workflow or Team Coordination Challenges
                    </option>
                    <option value="Growth or Change Support">
                      Growth or Change Support
                    </option>
                    <option value="Not Sure Yet">Not Sure Yet</option>
                  </select>
                </div>

                <div className="form-field full-width">
                  <label htmlFor="message">Briefly Describe What Is Happening</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us what feels stuck, what is creating pressure, or what you need help understanding."
                    required
                  />
                </div>

                <div className="form-field full-width">
                  <button type="submit" className="phs-btn phs-btn-primary">
                    Send Message
                  </button>
                  <p className="form-note">
                    Every inquiry is reviewed personally by Prosper Jechete,
                    MBA, CRCR, Founder & Principal.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="phs-section">
        <div className="phs-container phs-narrow phs-centered">
          <p className="phs-section-label">Contact Information</p>
          <p className="phs-contact-info">info@phs-usa.com</p>

          <p className="phs-section-label phs-spaced-label">Confidentiality</p>
          <h2>Professional care and discretion.</h2>
          <p>
            Your operational and financial information is treated with
            professional care and discretion. We use the information you provide
            only to understand your situation and determine whether PHS may be
            able to help.
          </p>
        </div>
      </section>
    </main>
  )
}
