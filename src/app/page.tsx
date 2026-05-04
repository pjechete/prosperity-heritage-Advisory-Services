import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Revenue Control & Cash Stabilization Advisory | Prosperity Heritage Advisory',
  description:
    'We help companies improve cash flow by fixing breakdowns across billing, collections, and financial operations. Turn revenue into predictable cash.',
}

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <p className="eyebrow">Prosperity Heritage Advisory</p>

              <h1 className="hero-title">
                Improving Cash Flow Through Stronger Revenue-to-Cash Performance.
              </h1>

              <p className="hero-subtext">
                We help leadership teams reduce delays, improve collections
                consistency, and strengthen visibility across billing,
                collections, and financial workflows.
              </p>

              <p className="hero-subtext">
                Cash flow is not just a financial outcome—it reflects how
                revenue is executed.
              </p>
                  <p className="hero-subtext emphasis">
    Revenue is recorded every day. Cash depends on how well it is executed.
  </p>

  <div className="hero-actions">
    <Link href="/contact" className="btn btn-primary">
      Schedule a Revenue Diagnostic
    </Link>
    <Link href="/services" className="btn btn-secondary">
      Explore Services
    </Link>
  </div>
</div>
            <div className="hero-actions">
                <Link href="/contact" className="btn btn-primary">
                  Schedule a Revenue Diagnostic
                </Link>
                <Link href="/services" className="btn btn-secondary">
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="hero-visual">
              <Image
                src="/images/hero-visual.png"
                alt="Revenue optimization and cash visibility advisory visual"
                width={900}
                height={700}
                priority
              />

              <div className="hero-overlay-card">
                <h3>Where revenue performance is affected</h3>
                <ul>
                  <li>Delayed invoicing</li>
                  <li>Inconsistent collections follow-through</li>
                  <li>Revenue leakage</li>
                  <li>Limited cash visibility</li>
                  <li>Disconnected handoffs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section section-soft">
        <div className="container problem-section">
          <div>
            <p className="section-label">The reality</p>

            <h2 className="section-title">
              Revenue activity does not always create cash visibility.
            </h2>

            <p className="section-copy">
              Many organizations generate revenue, but leadership still lacks a
              clear view of when that revenue will convert into cash, where
              delays are occurring, and which process gaps are limiting
              performance.
            </p>

            <p className="section-copy">
              The issue is often not demand alone. It is how billing,
              collections, reporting, and financial workflows operate together
              after revenue is created.
            </p>
          </div>

          <div className="section-visual">
            <Image
              src="/images/problem-visual.png"
              alt="Revenue process and cash visibility alignment visual"
              width={800}
              height={500}
            />
          </div>
        </div>
      </section>

      {/* FRAMEWORK */}
      <section className="section">
        <div className="container framework-section">
          <div>
            <p className="section-label">How we think</p>

            <h2 className="section-title">
              Revenue performance is driven by control, discipline, and
              visibility.
            </h2>

            <div className="framework-list">
              <div>
                <h3>Control</h3>
                <p>Clear ownership and accountability across the revenue process.</p>
              </div>

              <div>
                <h3>Discipline</h3>
                <p>
                  Consistent billing cycles, collections cadence, escalation
                  paths, and reporting routines.
                </p>
              </div>

              <div>
                <h3>Visibility</h3>
                <p>Clear insight into cash performance, delays, and drivers.</p>
              </div>
            </div>
          </div>

          <div className="framework-visual">
            <Image
              src="/images/framework-visual.png"
              alt="Revenue control discipline and visibility framework visual"
              width={900}
              height={520}
            />
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section section-light">
        <div className="container approach-section">
          <div className="approach-copy">
            <p className="section-label">Our approach</p>

            <h2 className="section-title">
              A structured approach to improving revenue performance and cash
              visibility.
            </h2>

            <p className="section-copy">
              We use a disciplined process to assess current performance,
              identify gaps, design improvements, implement controls, and
              optimize revenue-to-cash outcomes.
            </p>
          </div>

          <div className="approach-steps six-step">
            <div className="approach-step">
              <span>01</span>
              <h3>Assess</h3>
              <p>
                Establish a clear view of revenue flow, control points, and cash
                visibility.
              </p>
            </div>

            <div className="approach-step">
              <span>02</span>
              <h3>Diagnose</h3>
              <p>Identify the root causes of delays, leakage, and performance gaps.</p>
            </div>

            <div className="approach-step">
              <span>03</span>
              <h3>Design</h3>
              <p>
                Define practical improvements across ownership, process, and
                reporting.
              </p>
            </div>

            <div className="approach-step">
              <span>04</span>
              <h3>Implement</h3>
              <p>
                Support execution with clear structure, cadence, and
                accountability.
              </p>
            </div>

            <div className="approach-step">
              <span>05</span>
              <h3>Control</h3>
              <p>
                Strengthen monitoring and discipline to sustain performance over
                time.
              </p>
            </div>

            <div className="approach-step">
              <span>06</span>
              <h3>Optimize</h3>
              <p>
                Continuously refine execution to improve cash predictability and
                efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="section">
        <div className="container">
          <p className="section-label">Who this is for</p>

          <h2 className="section-title">
            Designed for leadership teams where revenue performance and cash
            visibility are not fully aligned.
          </h2>

          <div className="card-grid three-up">
            <div className="card">
              <h3>Revenue is growing, but cash is inconsistent</h3>
              <p>
                Revenue activity is strong, but cash flow lacks predictability
                due to delays, leakage, or execution gaps.
              </p>
            </div>

            <div className="card">
              <h3>Processes exist, but outcomes vary</h3>
              <p>
                Billing, collections, and reporting are in place, but performance
                is inconsistent and difficult to manage.
              </p>
            </div>

            <div className="card">
              <h3>Limited visibility into cash performance</h3>
              <p>
                Leadership lacks a clear, reliable view of where cash is delayed
                and what is driving those delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PUBLIC SECTOR */}
      <section className="section section-soft">
        <div className="container">
          <p className="section-label">Public sector and partner-led support</p>

          <h2 className="section-title">
            Supporting complex healthcare, public sector, and partner-led
            initiatives.
          </h2>

          <p className="section-copy narrow-copy">
            In addition to our core revenue performance advisory work,
            Prosperity Heritage Advisory selectively supports initiatives where
            financial operations, implementation discipline, stakeholder
            alignment, and execution structure are critical to success.
          </p>

          <div className="card-grid three-up">
            <div className="card">
              <h3>Healthcare transformation support</h3>
              <p>
                We support healthcare organizations and solution partners with
                workflow alignment, revenue cycle visibility, implementation
                readiness, and operational finance structure.
              </p>
            </div>

            <div className="card">
              <h3>Public sector readiness</h3>
              <p>
                We help frame complex initiatives for agencies, partners, and
                stakeholders by bringing structure to scope, execution
                requirements, financial workflows, and accountability.
              </p>
            </div>

            <div className="card">
              <h3>Partner-led execution</h3>
              <p>
                We work with selected partners where advisory support, market
                development, financial controls, and operational execution need
                to come together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-box">
            <p className="eyebrow">Revenue Diagnostic</p>

            <h2>Identify where revenue is not converting into cash.</h2>

            <p>
              We help leadership teams understand where delays, gaps, and
              execution issues are affecting cash flow—and what can be improved.
            </p>

            <div className="hero-actions center-buttons">
              <Link href="/contact" className="btn btn-primary">
                Schedule a Revenue Diagnostic
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
