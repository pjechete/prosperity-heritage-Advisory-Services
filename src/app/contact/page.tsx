import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Revenue Control, Public Sector & Execution Advisory | PHS',
  description:
    'Start a conversation with Prosperity Heritage Advisory about revenue control, cash visibility, public sector readiness, healthcare initiatives, and execution challenges.',
}

export default function ContactPage() {
  return (
    <main>

      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>
            Let’s identify where performance, visibility, or execution is breaking down.
          </h1>
          <p className="hero-subtext">
            We work with leadership teams to clarify where revenue, operations, and financial workflows are not translating into predictable cash performance—and what needs to change.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container narrow">
          <p>
            Whether you are facing revenue-to-cash challenges, operational finance pressure, healthcare transformation needs, public sector complexity, or partner-led execution issues, the first step is understanding where structure and discipline are breaking down.
          </p>
          <p>
            We review all inquiries with a focus on fit, urgency, and whether a structured diagnostic or advisory engagement is appropriate.
          </p>
        </div>
      </section>

      {/* WHEN TO REACH OUT */}
      <section className="section alt">
        <div className="container">
          <h2>When to reach out</h2>
          <p className="section-intro">
            We support organizations where execution directly affects financial performance.
          </p>

          <div className="services-grid">

            <div className="service-card">
              <h3>Revenue & Cash Performance</h3>
              <p>
                Revenue is growing, but billing delays, collections gaps, leakage, or weak reporting are limiting cash predictability and visibility.
              </p>
            </div>

            <div className="service-card">
              <h3>Public Sector Readiness</h3>
              <p>
                Public, quasi-government, or partner-led initiatives require stronger financial controls, funding accountability, reporting discipline, and execution structure.
              </p>
            </div>

            <div className="service-card">
              <h3>Healthcare & Partner-Led Initiatives</h3>
              <p>
                Healthcare, revenue cycle, implementation, or strategic partnership initiatives require clearer workflow alignment, operational readiness, and financial visibility.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="section">
        <div className="container narrow">
          <h2>What to expect</h2>
          <p className="section-intro">
            A focused intake designed for serious advisory conversations.
          </p>

          <p>
            This is not a generic inquiry process. The information you provide helps us understand the operating context, the underlying issues, and whether PHS is the right fit to support your situation.
          </p>

          <p>
            We prioritize engagements where financial performance depends on improving execution across billing, collections, reporting, operations, stakeholder coordination, or partner delivery.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section id="contact-form" className="section alt">
        <div className="container narrow">

          <h2>Share your situation</h2>

          <div className="form-guidance">
            <p className="section-intro">Helpful context to include:</p>
            <ul>
              <li>What prompted the inquiry now</li>
              <li>Revenue, billing, collections, or cash visibility concerns</li>
              <li>Public sector, healthcare, or partner-led initiative context</li>
              <li>Any growth, transition, implementation, or funding pressure</li>
              <li>What outcome you are trying to improve</li>
            </ul>
          </div>

          {/* FORM FIELDS */}
          <form className="contact-form">

            <label>Name</label>
            <input type="text" placeholder="Your name" />

            <label>Email</label>
            <input type="email" placeholder="you@example.com" />

            <label>Organization</label>
            <input type="text" placeholder="Organization name" />

            <label>Role / Title</label>
            <input type="text" placeholder="Founder, CFO, Controller, Executive Director, Operations Leader, etc." />

            <label>Primary Area of Interest</label>
            <input type="text" placeholder="Revenue control, public sector readiness, healthcare initiative, strategic partnership, etc." />

            <label>Message</label>
            <textarea placeholder="Briefly describe the challenge, opportunity, or initiative you would like to discuss." />

            <button type="submit" className="btn btn-primary">
              Submit Inquiry
            </button>

            <p className="form-note">
              All inquiries are reviewed confidentially. We will follow up if there is a clear fit.
            </p>

          </form>

        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <h2>Strong outcomes depend on disciplined execution.</h2>
          <p>
            If performance is being limited by weak visibility, unclear ownership, delayed cash conversion, or complex stakeholder execution, the next step is identifying where the breakdown is occurring.
          </p>

          <div className="cta-actions">
            <a href="#contact-form" className="btn btn-primary">
              Complete the Form
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
