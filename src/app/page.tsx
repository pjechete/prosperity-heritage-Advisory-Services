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
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <p className="eyebrow">Prosperity Heritage Advisory</p>

          <h1>
            Helping organizations turn revenue into predictable cash—especially
            in complex operational and funding environments.
          </h1>

          <p className="hero-sub">
            We advise leadership teams on strengthening revenue-to-cash
            performance across billing, collections, financial workflows, and
            operational execution.
          </p>

          <div className="hero-actions">
            <a href="/contact" className="btn-primary">
              Start a Conversation
            </a>
            <a href="/services" className="btn-secondary">
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section">
        <div className="container">
          <p className="section-kicker">The Problem</p>

          <h2>Revenue is not the issue. Control is.</h2>

          <p className="section-lead">
            Many organizations generate revenue but struggle to convert it into
            predictable cash. The issue often sits between contracts, billing,
            collections, reporting, and financial operations.
          </p>

          <div className="three-grid">
            <div className="info-card">
              <h3>Delayed Billing</h3>
              <p>
                Revenue is earned, but invoicing delays and unclear ownership
                slow down cash conversion.
              </p>
            </div>

            <div className="info-card">
              <h3>Collections Gaps</h3>
              <p>
                Follow-up cadence, escalation paths, and accountability are not
                always clearly defined.
              </p>
            </div>

            <div className="info-card">
              <h3>Limited Visibility</h3>
              <p>
                Leadership lacks timely, decision-ready reporting on where cash
                is delayed or leaking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section section-soft">
        <div className="container">
          <p className="section-kicker">Our Approach</p>

          <h2>We focus on the last mile of financial performance.</h2>

          <p className="section-lead">
            We help organizations strengthen the handoffs between operations,
            billing, collections, and finance so revenue moves through the
            business with fewer delays, fewer disconnects, and stronger
            accountability.
          </p>

          <div className="three-grid">
            <div className="info-card">
              <span className="step-number">01</span>
              <h3>Diagnose</h3>
              <p>
                Review current workflows, reporting, ownership, and control
                gaps.
              </p>
            </div>

            <div className="info-card">
              <span className="step-number">02</span>
              <h3>Align</h3>
              <p>
                Clarify process handoffs across contracts, billing, collections,
                and finance.
              </p>
            </div>

            <div className="info-card">
              <span className="step-number">03</span>
              <h3>Stabilize</h3>
              <p>
                Implement practical improvements that support predictable cash
                performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC ENGAGEMENTS */}
      <section className="strategic-section">
        <div className="container">
          <p className="section-kicker">Selective Strategic Engagements</p>

          <h2>High-impact advisory for complex environments.</h2>

          <p className="section-lead">
            In addition to our core advisory work, we selectively engage in
            opportunities where financial operations, execution discipline, and
            strategic coordination are critical.
          </p>

          <div className="strategic-grid">
            <div className="strategic-card">
              <div className="strategic-label">Public Sector</div>
              <h3>Public & Government Advisory</h3>
              <p>
                Supporting public and quasi-government organizations in
                strengthening financial controls, revenue integrity, funding
                accountability, and operational visibility.
              </p>
            </div>

            <div className="strategic-card">
              <div className="strategic-label">Global Markets</div>
              <h3>Global Investment & Trade Opportunities</h3>
              <p>
                Supporting select cross-border investment and trade
                opportunities through disciplined sourcing, validation,
                structuring, and stakeholder alignment.
              </p>
            </div>

            <div className="strategic-card">
              <div className="strategic-label">Healthcare</div>
              <h3>Healthcare Development & Turnkey Projects</h3>
              <p>
                Supporting partner-led healthcare initiatives involving
                feasibility, setup, execution coordination, and operational
                readiness in complex markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-box">
          <p className="section-kicker">Start With Control</p>

          <h2>Stronger cash performance starts with better execution.</h2>

          <p>
            If revenue is being generated but cash flow remains unpredictable,
            the issue may be sitting inside the handoffs between operations,
            billing, collections, and finance.
          </p>

          <a href="/contact" className="btn-primary">
            Schedule a Conversation
          </a>
        </div>
      </section>
    </>
  );
}
