import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Diagnostic Conversation | PHS',
  description:
    'Start a diagnostic conversation with Prosperity Heritage Advisory to assess operational clarity, visibility, execution discipline, stability, and sustainable growth.',
}

const reachOutSignals = [
  {
    title: 'Pressure is increasing, but the root cause is unclear',
    body:
      'Leadership sees symptoms, but the underlying operational issue is difficult to isolate.',
  },
  {
    title: 'Processes exist, but outcomes vary',
    body:
      'Teams, systems, and workflows are in place, but execution lacks consistency, visibility, or control.',
  },
  {
    title: 'Growth is increasing complexity',
    body:
      'Scaling, transformation, acquisitions, or new initiatives are creating pressure across workflows and decision-making.',
  },
]

export default function ContactPage() {
  return (
    <main>
      <section className="phs-hero">
        <div className="phs-container phs-hero-grid">
          <div className="phs-hero-copy">
            <p className="phs-eyebrow">Contact</p>

            <h1>Start with a diagnostic conversation.</h1>

            <div className="phs-gold-rule" />

            <p className="phs-hero-lede">
              If operational pressure, limited visibility, inconsistent
              execution, growth complexity, or financial strain is affecting
              performance, PHS can help identify what may be happening beneath
              the surface.
            </p>

            <div className="phs-hero-actions">
              <a href="#contact-form" className="phs-btn phs-btn-primary">
                Start the Conversation
              </a>
            </div>
          </div>

          <aside className="phs-advisory-panel">
            <p>Diagnostic Lens</p>
            <div className="phs-panel-rule" />

            <div className="phs-panel-item">
              <span className="phs-panel-icon">◎</span>
              <div>
                <h3>Clarity</h3>
                <p>Understanding what is happening beneath visible symptoms.</p>
              </div>
            </div>

            <div className="phs-panel-item">
              <span className="phs-panel-icon">▥</span>
              <div>
                <h3>Fit</h3>
                <p>Determining whether PHS is the right advisory partner.</p>
              </div>
            </div>

            <div className="phs-panel-item">
              <span className="phs-panel-icon">↗</span>
              <div>
                <h3>Next steps</h3>
                <p>Identifying whether a diagnostic review is appropriate.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="phs-section phs-advisory-areas">
        <div className="phs-container">
          <div className="phs-centered-header">
            <p className="phs-section-label">When To Reach Out</p>
            <div className="phs-gold-rule centered" />
            <h2>
              Reach out when pressure is visible, but the root issue is not yet
              clear.
            </h2>
          </div>

          <div className="phs-contact-signal-grid">
            {reachOutSignals.map((item) => (
              <article className="phs-advisory-card" key={item.title}>
                <div className="phs-card-icon">▧</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <div className="phs-card-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="phs-section phs-contact-section">
        <div className="phs-container">
          <div className="phs-contact-layout">
            <div className="phs-advisory-heading">
              <p className="phs-section-label">Start The Conversation</p>
              <div className="phs-gold-rule" />
              <h2>Share what you are seeing.</h2>
              <p>
                Provide a few details about your organization, the pressure you
                are seeing, or the environment you want to assess. We review
                every inquiry and follow up when there is a clear fit.
              </p>
            </div>

            <div className="phs-form-panel">
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
                    <option value="Other">Other</option>
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
                  <button type="submit" className="phs-btn phs-btn-primary">
                    Submit Inquiry
                  </button>

                  <p className="form-note">
                    All inquiries are reviewed confidentially. We will follow up
                    if there is a clear fit.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="phs-final-cta">
        <div className="phs-container phs-cta-grid">
          <div>
            <h2>
              Strong organizations strengthen visibility before instability
              becomes visible.
            </h2>

            <p>
              Operational pressure often begins beneath the surface through
              fragmented workflows, delayed visibility, inconsistent execution,
              weak coordination, or financial strain.
            </p>
          </div>

          <a href="#contact-form" className="phs-btn phs-btn-gold">
            Start the Conversation
          </a>
        </div>
      </section>
    </main>
  )
}
