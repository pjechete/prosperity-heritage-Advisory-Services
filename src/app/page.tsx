import Link from 'next/link'

export default function HomePage() {
  return (
    <main>

      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">

          <div>
            <p className="eyebrow">Prosperity Heritage Advisory</p>

            <h1 className="hero-title">
              Turn Revenue Into Predictable Cash
            </h1>

            <p className="hero-subtext">
              Revenue is generated every day. But without control, it does not always convert into cash.
            </p>

            <p className="hero-subtext">
              We help leadership teams fix the breakdowns across billing, collections, and financial execution.
            </p>

            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">
                Schedule a Diagnostic
              </Link>
              <Link href="/services" className="btn btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>

          <div className="hero-card">
            <h3>Where it breaks down</h3>
            <ul>
              <li>Delayed invoicing</li>
              <li>Weak collections follow-through</li>
              <li>Revenue leakage</li>
              <li>Poor visibility into cash</li>
              <li>Disconnected handoffs</li>
            </ul>
          </div>

        </div>
      </section>

      {/* PROBLEM */}
      <section className="section section-soft">
        <div className="narrow">

          <p className="section-label">The reality</p>

          <h2 className="section-title">
            Revenue performance is visible. Conversion performance is not.
          </h2>

          <p className="section-copy">
            Many organizations generate strong revenue. But cash is slowed by gaps in execution across billing, collections, and operations.
          </p>

          <p className="section-copy">
            The issue is not always demand. It is how revenue moves — or fails to move — through the business.
          </p>

        </div>
      </section>

      {/* FRAMEWORK */}
      <section className="section">
        <div className="container">

          <p className="section-label">How we think</p>

          <h2 className="section-title">
            Revenue control comes down to three things
          </h2>

          <div className="card-grid three-up">

            <div className="card">
              <h3>People</h3>
              <p>
                Clear ownership. Strong accountability. Alignment between operations and finance.
              </p>
            </div>

            <div className="card">
              <h3>Process</h3>
              <p>
                Structured billing cycles. Defined collections discipline. Clean handoffs across the revenue flow.
              </p>
            </div>

            <div className="card">
              <h3>Technology</h3>
              <p>
                Systems that support execution. Visibility into delays. Reporting that reflects reality.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* APPROACH */}
      <section className="section section-light">
        <div className="container">

          <p className="section-label">Our approach</p>

          <h2 className="section-title">
            Diagnose. Align. Stabilize.
          </h2>

          <div className="steps-grid">

            <div className="step-card">
              <span className="step-number">01</span>
              <h3>Diagnose</h3>
              <p>
                Identify where revenue slows down across people, process, and systems.
              </p>
            </div>

            <div className="step-card">
              <span className="step-number">02</span>
              <h3>Align</h3>
              <p>
                Bring structure to billing, collections, and financial operations.
              </p>
            </div>

            <div className="step-card">
              <span className="step-number">03</span>
              <h3>Stabilize</h3>
              <p>
                Improve execution and restore predictable cash performance.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* WHO */}
      <section className="section">
        <div className="container">

          <p className="section-label">Who this is for</p>

          <h2 className="section-title">
            Built for organizations where revenue is not translating into cash
          </h2>

          <div className="card-grid three-up">

            <div className="card">
              <h3>Growth outpacing structure</h3>
              <p>
                Revenue is increasing, but processes are not keeping up.
              </p>
            </div>

            <div className="card">
              <h3>Operational disconnect</h3>
              <p>
                Billing, collections, and finance are not fully aligned.
              </p>
            </div>

            <div className="card">
              <h3>Limited visibility</h3>
              <p>
                Leadership cannot clearly see where cash is being delayed.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="narrow">

          <div className="cta-box">

            <h2>Strong revenue should lead to strong cash</h2>

            <p>
              If it does not, the issue is usually control.
            </p>

            <div className="hero-actions center-buttons">
              <Link href="/contact" className="btn btn-primary">
                Schedule a Diagnostic
              </Link>
            </div>

          </div>

        </div>
      </section>

    </main>
  )
}
