import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Revenue Control & Cash Stabilization Advisory | Prosperity Heritage Advisory',
  description:
    'We help companies improve cash flow by fixing breakdowns across billing, collections, and financial operations. Turn revenue into predictable cash.',
}
    import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
<main>
  <section className="hero">
    <div className="container">
      <div className="hero-grid">
        <div>
          <p className="eyebrow">Prosperity Heritage Advisory</p>

          <h1 className="hero-title">
            Optimizing Revenue Performance and Cash Visibility.
          </h1>

          <p className="hero-subtext">
            We help leadership teams strengthen billing, collections, and
            financial workflows so revenue moves through the business with
            greater control, fewer delays, and clearer visibility into cash.
          </p>

          <p className="hero-subtext">
            The result is a more reliable path from revenue activity to
            predictable cash.
          </p>

          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary">
              Schedule a Revenue Review
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

  <section className="section section-soft">
    <div className="container problem-section">
      <div>
        <p className="section-label">The reality</p>

        <h2 className="section-title">
          Revenue activity does not always create cash visibility.
        </h2>

        <p className="section-copy">
          Many organizations generate revenue, but leadership still lacks a
          clear view of when that revenue will convert into cash, where delays
          are occurring, and which process gaps are limiting performance.
        </p>

        <p className="section-copy">
          The issue is often not demand alone. It is how billing, collections,
          reporting, and financial workflows operate together after revenue is
          created.
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

  <section className="section">
    <div className="container framework-section">
      <div>
        <p className="section-label">How we think</p>

        <h2 className="section-title">
          Revenue optimization requires control, discipline, and visibility.
        </h2>

        <div className="framework-list">
          <div>
            <h3>Control</h3>
            <p>
              Clear ownership across billing, collections, finance, and
              operational handoffs.
            </p>
          </div>

          <div>
            <h3>Discipline</h3>
            <p>
              Consistent billing cycles, collections cadence, escalation paths,
              and reporting routines.
            </p>
          </div>

          <div>
            <h3>Visibility</h3>
            <p>
              Decision-ready reporting that helps leadership see where cash is
              delayed, why it is delayed, and what needs attention.
            </p>
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

  <section className="section section-light">
    <div className="container approach-section">
      <div className="approach-copy">
        <p className="section-label">Our approach</p>
        <h2 className="section-title">Diagnose. Align. Improve.</h2>
        <p className="section-copy">
          A focused advisory approach designed to identify revenue process gaps,
          improve alignment, and strengthen visibility from revenue activity to
          cash performance.
        </p>
      </div>

      <div className="approach-visual">
        <Image
          src="/images/approach-flow.png"
          alt="Diagnose align improve revenue process visual"
          width={1000}
          height={420}
        />
      </div>
    </div>
  </section>

  <section className="section">
    <div className="container">
      <p className="section-label">Who this is for</p>

      <h2 className="section-title">
        Built for organizations that need stronger revenue performance and
        clearer cash visibility.
      </h2>

      <div className="card-grid three-up">
        <div className="card">
          <h3>Revenue growth with limited cash clarity</h3>
          <p>
            Revenue activity is increasing, but leadership does not have a clear
            view of when it will convert into cash.
          </p>
        </div>

        <div className="card">
          <h3>Billing and collections friction</h3>
          <p>
            Invoicing delays, collections gaps, and unclear ownership are
            slowing the revenue-to-cash cycle.
          </p>
        </div>

        <div className="card">
          <h3>Reporting that lacks visibility</h3>
          <p>
            Financial reporting exists, but it does not clearly show where cash
            is delayed or what operational issues require action.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section className="cta-section">
    <div className="narrow">
      <div className="cta-box">
        <p className="eyebrow">Revenue Performance Review</p>

        <h2>
          Improve revenue performance with clearer cash visibility.
        </h2>

        <p>
          If revenue is not consistently converting into cash, we help identify
          where billing, collections, reporting, and process handoffs are
          limiting performance — and where stronger control can improve
          outcomes.
        </p>

        <div className="hero-actions center-buttons">
          <Link href="/contact" className="btn btn-primary">
            Schedule a Revenue Review
          </Link>
        </div>
      </div>
    </div>
  </section>
</main>
