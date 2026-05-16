import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Diagnostic Conversation | PHS',
  description:
    'Start a diagnostic conversation with Prosperity Heritage Advisory to assess operational clarity, visibility, execution discipline, stability, and sustainable growth.',
}

export default function ContactPage() {
  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>

          <h1>
            Start with a diagnostic conversation.
          </h1>

          <p className="hero-subtext">
            If operational pressure, limited visibility, inconsistent execution,
            growth complexity, or financial strain is affecting performance,
            we can help identify what may be happening beneath the surface.
          </p>
        </div>
      </section>

      {/* WHEN TO REACH OUT */}
      <section className="section section-soft">
        <div className="container">
          <h2>When to reach out</h2>

          <div className="card-grid three-up">
            <div className="card">
              <h3>Pressure is increasing, but the root cause is unclear</h3>
              <p>
                Leadership sees symptoms, but the underlying operational issue is
                difficult to isolate.
              </p>
            </div>

            <div className="card">
              <h3>Processes exist, but outcomes vary</h3>
              <p>
                Teams, systems, and workflows are in place, but execution lacks
                consistency, visibility, or control.
              </p>
            </div>

            <div className="card">
              <h3>Growth is increasing complexity</h3>
              <p>
                Scaling, transformation, acquisitions, or new initiatives are
                creating pressure across workflows and decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="contact-form" className="section">
        <div className="container narrow">
          <h2>Start the conversation</h2>

          <p className="section-intro">
            Share a few details about your organization, the pressure you are
            seeing, or the environment you want to assess. We’ll follow up if
            there is a clear fit.
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
                value="New PHS Diagnostic Conversation Inquiry"
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
                <label htmlFor="area">Area of interest</label>
                <select id="area" name="area">
                  <option value="">Select one</option>
                  <option value="Operational Diagnostic">
                    Operational Diagnostic
                  </option>
                  <option value="Revenue Execution & Cash Stabilization">
                    Revenue Execution & Cash Stabilization
                  </option>
                  <option value="Workflow & Process Alignment">
                    Workflow & Process Alignment
                  </option>
                  <option value="Visibility, Reporting & Controls">
                    Visibility, Reporting & Controls
                  </option>
                  <option value="Healthcare Advisory">
                    Healthcare Advisory
                  </option>
                  <option value="Public Sector Readiness">
                    Public Sector Readiness
                  </option>
                  <option value="Strategic Partnership">
                    Strategic Partnership
                  </option>
                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              <div className="form-field full-width">
                <label htmlFor="message">What’s happening?</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Briefly describe the pressure, visibility gap, execution issue, or opportunity you want to assess."
                  required
                />
              </div>

              <div className="form-field full-width">
                <button type="submit" className="btn btn-primary">
                  Submit Inquiry
                </button>

                <p className="form-note">
                  We review every inquiry. We’ll follow up if there is a clear fit.
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
            <p className="eyebrow">Why act early</p>

            <h2>
              Strong organizations strengthen visibility before instability becomes visible.
            </h2>

            <p>
              Operational pressure often begins beneath the surface — through
              fragmented workflows, delayed visibility, inconsistent execution,
              weak coordination, or financial strain. The earlier these signals
              are understood, the easier they are to address.
            </p>

            <div className="cta-actions center-buttons">
              <a href="#contact-form" className="btn btn-primary">
                Start the Conversation
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
