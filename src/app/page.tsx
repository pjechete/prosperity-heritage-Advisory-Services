import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import RevenueCashDiagram from './components/RevenueCashDiagram'

export const metadata: Metadata = {
  title:
    'Revenue Execution Control & Cash Stabilization Advisory | Prosperity Heritage Advisory',
  description:
    'Prosperity Heritage Advisory helps leadership teams restore control over how revenue becomes cash by fixing breakdowns across operations, billing, collections, and financial workflows.',
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
                Restoring Control Over How Revenue Becomes Cash.
              </h1>

              <p className="hero-subtext">
                We help leadership teams identify and fix the execution
                breakdowns between revenue generation, billing, collections, and
                cash realization—so revenue turns into predictable cash.
              </p>

              <p className="hero-subtext">
                Cash flow is not just a financial outcome. It reflects how well
                revenue is executed across the business.
              </p>

              <p className="hero-subtext emphasis">
                Revenue is recorded every day. Cash depends on how well it is
                governed.
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

            <div className="hero-visual">
              <Image
                src="/images/hero-visual.png"
                alt="Revenue execution control and cash visibility advisory visual"
                width={900}
                height={700}
                priority
              />

              <div className="hero-overlay-card">
                <h3>Where revenue-to-cash performance breaks down</h3>
                <ul>
                  <li>Disconnected operational handoffs</li>
                  <li>Delayed billing and invoicing</li>
                  <li>Inconsistent collections follow-through</li>
                  <li>Revenue leakage</li>
                  <li>Limited cash visibility</li>
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
            <p className="section-label">The real problem</p>

            <h2 className="section-title">
              Revenue does not automatically become cash.
            </h2>

            <p className="section-copy">
              Many organizations generate revenue, but leadership still lacks a
              clear view of when that revenue will convert into cash, where
              delays are occurring, and which execution gaps are limiting
              performance.
            </p>

            <p className="section-copy">
              The issue is not demand alone. It is how operations, billing,
              collections, reporting, and financial workflows work together
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

      {/* PAIN AMPLIFICATION */}
      <section className="section">
        <div className="container">
          <p className="section-label">When revenue does not convert into cash</p>

          <h2 className="section-title">
            The business may look healthy on paper while pressure builds
            underneath.
          </h2>

          <div className="card-grid four-up">
            <div className="card">
              <h3>Strong sales, tightening cash</h3>
              <p>
                Revenue activity is present, but cash availability remains
                inconsistent or delayed.
              </p>
            </div>

            <div className="card">
              <h3>Growth, but more pressure</h3>
              <p>
                Expansion increases volume, complexity, and handoff risk across
                the revenue process.
              </p>
            </div>

            <div className="card">
              <h3>Revenue reported, cash uncertain</h3>
              <p>
                Leadership sees revenue performance but lacks confidence in when
                cash will actually arrive.
              </p>
            </div>

            <div className="card">
              <h3>Decisions without visibility</h3>
              <p>
                Hiring, investment, and operating decisions are made without a
                clear view of cash timing and risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY REFRAME */}
      <section className="section section-light">
        <div className="container services-two-col">
          <div>
            <p className="section-label">Category reframe</p>

            <h2 className="section-title">
              This is not only an accounting issue. It is a revenue execution
              control issue.
            </h2>

            <p className="section-copy">
              Traditional accounting tracks outcomes after transactions occur.
              Prosperity Heritage Advisory focuses on the execution layer where
              revenue is created, billed, collected, monitored, and converted
              into cash.
            </p>
          </div>

          <div className="card card-highlight">
            <h3>Where PHS steps in</h3>
            <p>
              The gap often lives between teams, workflows, and execution
              points—not only inside accounting systems. We focus on where
              revenue slows, breaks, leaks, or fails to convert into predictable
              cash.
            </p>
          </div>
        </div>
      </section>

      {/* REVENUE TO CASH VISUAL */}
      <section className="section section-soft">
        <div className="container">
          <p className="section-label">Revenue-to-cash reality model</p>

          <h2 className="section-title">
            Breakdowns occur before cash reaches the bank.
          </h2>

          <p className="section-copy narrow-copy">
            Revenue-to-cash performance depends on how well each step is owned,
            executed, monitored, and controlled.
          </p>

          <RevenueCashDiagram />

          <p className="diagram-note">
            Breakdowns do not always happen in accounting systems. They often
            happen between teams, workflows, and execution points.
          </p>
        </div>
      </section>

      {/* FRAMEWORK */}
      <section className="section">
        <div className="container">
          <p className="section-label">How we think</p>

          <h2 className="section-title">
            Revenue performance is strengthened through control, discipline,
            and visibility.
          </h2>

          <div className="card-grid three-up">
            <div className="card">
              <h3>Control</h3>
              <p>
                Clear ownership, defined handoffs, and accountability across the
                revenue-to-cash process.
              </p>
            </div>

            <div className="card">
              <h3>Discipline</h3>
              <p>
                Consistent billing cycles, collections cadence, escalation
                paths, and performance routines.
              </p>
            </div>

            <div className="card">
              <h3>Visibility</h3>
              <p>
                Clear insight into what is owed, what is delayed, what is at
                risk, and what requires action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section section-light">
        <div className="container approach-section">
          <div className="approach-copy">
            <p className="section-label">Our approach</p>

            <h2 className="section-title">
              A structured approach to restoring revenue execution control.
            </h2>

            <p className="section-copy">
              We assess how revenue moves through the business, diagnose where
              delays and leakage occur, design practical improvements, support
              implementation, and strengthen ongoing control.
            </p>
          </div>

          <div className="approach-steps six-step">
            <div className="approach-step">
              <span>01</span>
              <h3>Assess</h3>
              <p>
                Establish a clear view of revenue flow, ownership, control
                points, and cash visibility.
              </p>
            </div>

            <div className="approach-step">
              <span>02</span>
              <h3>Diagnose</h3>
              <p>
                Identify the root causes of delays, leakage, handoff breakdowns,
                and performance gaps.
              </p>
            </div>

            <div className="approach-step">
              <span>03</span>
              <h3>Design</h3>
              <p>
                Define practical improvements across process, ownership,
                reporting, and accountability.
              </p>
            </div>

            <div className="approach-step">
              <span>04</span>
              <h3>Implement</h3>
              <p>
                Support execution with clear structure, cadence, communication,
                and operating discipline.
              </p>
            </div>

            <div className="approach-step">
              <span>05</span>
              <h3>Control</h3>
              <p>
                Strengthen monitoring, escalation, and management routines to
                sustain performance.
              </p>
            </div>

            <div className="approach-step">
              <span>06</span>
              <h3>Optimize</h3>
              <p>
                Continuously refine execution to improve cash predictability,
                visibility, and efficiency.
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
            Designed for leadership teams where revenue is strong, but cash
            performance is not fully reliable.
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
                Billing, collections, and reporting are in place, but
                performance is inconsistent and difficult to manage.
              </p>
            </div>

            <div className="card">
              <h3>Visibility is limited across the revenue process</h3>
              <p>
                Leadership lacks a clear, reliable view of where revenue is
                delayed, what is at risk, and what action is required.
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
            In addition to our core revenue execution and cash stabilization
            advisory work, Prosperity Heritage Advisory selectively supports
            initiatives where financial operations, implementation discipline,
            stakeholder alignment, and execution structure are critical to
            success.
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

            <h2>
              If revenue is strong but cash is inconsistent, the issue may not
              be sales. It may be execution.
            </h2>

            <p>
              We help leadership teams identify where revenue is slowing,
              leaking, or failing to convert into predictable cash—and what
              needs to change.
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
