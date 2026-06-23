import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Prosperity Heritage Solutions',
  description:
    'Contact Prosperity Heritage Solutions to discuss operational pressure, cash flow challenges, reporting gaps, workflow bottlenecks, project execution, or partnership opportunities.',
  alternates: {
    canonical: 'https://phs-usa.com/contact',
  },
  openGraph: {
    title: 'Contact | Prosperity Heritage Solutions',
    description:
      'Start a practical conversation with PHS about operational and financial execution support.',
    url: 'https://phs-usa.com/contact',
    siteName: 'Prosperity Heritage Solutions',
    type: 'website',
  },
}

const partnerChannels = [
  'Fractional CFO Firms',
  'CPA & Accounting Firms',
  'Healthcare Advisory Firms',
  'Fractional COO Practices',
  'Independent Advisory & Consulting Firms',
]

const solutionAreas = [
  'Profit Recovery Assessments',
  'Revenue & Cash Flow Performance',
  'Operational Performance Improvement',
  'Financial Visibility & Accountability',
  'Interim Leadership & Project Execution',
]

export default function ContactPage() {
  return (
    <main>
      <section className="mock-hero mock-hero-simple">
        <div className="mock-container">
          <p className="mock-eyebrow">Contact</p>

          <h1>Let&apos;s Start With the Challenge.</h1>

          <p>
            Every organization experiences periods of intense operational pressure.
            Cash flow becomes less predictable. Financial reporting begins to lag.
            Critical initiatives lose momentum. Workflows become fragmented, and
            internal teams find themselves working harder while achieving less.
          </p>

          <p>
            The first step is understanding exactly where performance is being lost
            and identifying the practical, immediate improvements that will move
            the organization forward.
          </p>

          <p>
            PHS works alongside businesses and advisory firms to eliminate
            operational bottlenecks, sharpen financial visibility, strengthen
            execution capacity, and support meaningful change.
          </p>

          <p>
            Whether you are exploring a specific internal challenge, evaluating a
            looming project, or seeking a dependable execution partner, we welcome
            the opportunity to learn more about your goals.
          </p>
        </div>
      </section>

      <section className="mock-section mock-section-soft">
        <div className="mock-container">
          <div className="mock-section-header">
            <p className="mock-eyebrow">How To Reach Us</p>
            <h2>General Inquiries</h2>
            <p>
              Email:{' '}
              <a href="mailto:info@phs-usa.com" className="contact-email">
                info@phs-usa.com
              </a>
            </p>
            <p>Response Time: We review all inquiries within one business day.</p>
          </div>

          <div className="mock-grid-2">
            <article className="mock-card">
              <h3>Partnership Channels</h3>
              <p>
                We actively welcome collaborative alignment conversations with:
              </p>
              <ul className="mock-bullet-list">
                {partnerChannels.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="mock-card">
              <h3>Core Solutions Map</h3>
              <p>
                Please reference your specific operational or financial pressure
                point when reaching out:
              </p>
              <ul className="mock-bullet-list">
                {solutionAreas.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="mock-section">
        <div className="mock-container">
          <div className="mock-section-header">
            <p className="mock-eyebrow">Send Us a Message</p>
            <h2>Tell us what you are trying to solve.</h2>
            <p>
              Tell us a little about your organization, the core challenges you are
              currently facing, or the type of execution support you are exploring.
            </p>
            <p>
              A member of our practitioner team will review your inquiry and reach
              out promptly.
            </p>
          </div>

          <article className="mock-card mock-wide-card">
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
                <label htmlFor="name">Your Name</label>
                <input id="name" name="name" type="text" required />
              </div>

              <div className="mock-form-group">
                <label htmlFor="email">Work Email</label>
                <input id="email" name="email" type="email" required />
              </div>

              <div className="mock-form-group">
                <label htmlFor="company">Company Name</label>
                <input id="company" name="company" type="text" />
              </div>

              <div className="mock-form-group">
                <label htmlFor="inquiryType">I am reaching out as a:</label>
                <select id="inquiryType" name="inquiryType" defaultValue="">
                  <option value="" disabled>
                    Select one
                  </option>
                  <option value="Direct Organization / Business Leader">
                    Direct Organization / Business Leader
                  </option>
                  <option value="Advisory Firm / Potential Partner">
                    Advisory Firm / Potential Partner
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mock-form-group">
                <label htmlFor="concern">Primary Area of Concern:</label>
                <select id="concern" name="concern" defaultValue="">
                  <option value="" disabled>
                    Select one
                  </option>
                  <option value="Cash Flow & Revenue Performance">
                    Cash Flow & Revenue Performance
                  </option>
                  <option value="Accounting, Cleanup, & Reporting Visibility">
                    Accounting, Cleanup, & Reporting Visibility
                  </option>
                  <option value="Operational Bottlenecks & Workflow Friction">
                    Operational Bottlenecks & Workflow Friction
                  </option>
                  <option value="Project Execution & Interim Capacity">
                    Project Execution & Interim Capacity
                  </option>
                  <option value="Exploring a Partnership Opportunity">
                    Exploring a Partnership Opportunity
                  </option>
                </select>
              </div>

              <div className="mock-form-group">
                <label htmlFor="message">
                  Briefly describe the challenge or initiative you want to discuss:
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Share a brief summary of the challenge, project, or opportunity."
                  required
                />
              </div>

              <button className="mock-btn" type="submit">
                Submit Inquiry
              </button>
            </form>

            <p className="mock-note">
              Every inquiry is reviewed by the PHS team and handled with
              professional care and discretion.
            </p>
          </article>
        </div>
      </section>

      <section className="mock-section mock-section-soft">
        <div className="mock-container">
          <div className="mock-section-header">
            <p className="mock-eyebrow">Our Engagement Approach</p>
            <h2>No High-Pressure Sales. No Generic Handouts.</h2>

            <p>
              We do not believe in aggressive sales cycles or recycling boilerplate
              advice.
            </p>

            <p>
              When you connect with PHS, you enter into a straightforward,
              practical dialogue with experienced operators.
            </p>

            <p>
              Our entire focus is on understanding your unique organizational
              goals, mapping your true operational opportunities, and determining
              honestly whether PHS is the right fit for your needs.
            </p>

            <p>Let&apos;s start the conversation.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
