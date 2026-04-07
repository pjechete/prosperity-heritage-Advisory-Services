import Link from "next/link";

const coreAreas = [
  {
    title: "Billing Discipline",
    copy:
      "Improve invoicing timeliness, consistency, and control so revenue is billed accurately and without avoidable delay.",
  },
  {
    title: "Collections Performance",
    copy:
      "Build structured follow-up, accountability, and escalation processes that improve cash realization.",
  },
  {
    title: "Revenue Integrity",
    copy:
      "Identify leakage, missed charges, underbilling, and process gaps that weaken revenue capture.",
  },
  {
    title: "Operational Alignment",
    copy:
      "Align contracts, billing workflows, and finance operations so the revenue process works as a connected system.",
  },
  {
    title: "Financial Visibility",
    copy:
      "Give leadership a clearer view of where cash is being delayed, why it is happening, and what needs attention.",
  },
  {
    title: "Stabilization Support",
    copy:
      "Support transitions, growth phases, and post-acquisition environments where controls and reporting often begin to strain.",
  },
];

const approach = [
  {
    number: "01",
    title: "Assess",
    copy:
      "We review how revenue actually moves through the business and where cash performance begins to weaken.",
  },
  {
    number: "02",
    title: "Clarify",
    copy:
      "We isolate the operational, billing, collections, and reporting issues that are delaying cash realization.",
  },
  {
    number: "03",
    title: "Stabilize",
    copy:
      "We help leadership implement practical improvements that strengthen control, visibility, and consistency.",
  },
];

const audience = [
  {
    title: "Growing Companies",
    copy:
      "Businesses scaling faster than their financial processes can reliably support.",
  },
  {
    title: "Private Equity & Transition Environments",
    copy:
      "Companies navigating integration, change, or execution strain after acquisition.",
  },
  {
    title: "Leadership Teams Needing Clarity",
    copy:
      "Founders, CEOs, and finance leaders who need better control over how revenue becomes cash.",
  },
];

const selective = [
  {
    title: "Healthcare Development & Turnkey Projects",
    copy:
      "Partner-led engagements involving healthcare infrastructure and implementation support in emerging markets.",
  },
  {
    title: "Global Investment & Trade Opportunities",
    copy:
      "Structured, selective cross-border opportunities where alignment, assessment, and disciplined introductions matter.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-premium">
        <div className="container hero-premium-grid">
          <div className="hero-copy">
            <p className="eyebrow">Prosperity Heritage Advisory</p>

            <h1 className="hero-title">Turn Revenue Into Predictable Cash</h1>

            <p className="hero-intro">
              We work with founders, executives, and finance leaders to improve
              how revenue moves — from contract to billing to collections to
              reporting — so cash performance becomes more predictable and
              controlled.
            </p>

            <p className="hero-proof">
              Our work is grounded in real operating environments where revenue,
              complexity, and execution must align.
            </p>

            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">
                Book a Consultation
              </Link>
              <Link href="/services" className="btn btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-card">
              <p className="panel-label">Where cash performance often breaks down</p>
              <ul className="signal-list">
                <li>Delayed or inconsistent invoicing</li>
                <li>Weak collections structure and follow-through</li>
                <li>Revenue leakage across contracts, billing, and operations</li>
                <li>Limited visibility into where cash is getting delayed</li>
                <li>Operational strain after growth or acquisition</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-clean">
        <div className="container narrow">
          <p className="section-label">The problem</p>
          <h2 className="section-title">
            Revenue can look strong while cash still feels tight
          </h2>
          <p className="section-copy">
            Many growing businesses do not have a sales problem. They have an
            execution problem somewhere between contracts, billing,
            collections, reporting, and financial operations.
          </p>
          <p className="section-copy">
            Invoices go out late. Payment terms do not match operational
            reality. Collections lack structure. Leadership sees revenue, but
            not always a clear path to cash.
          </p>
          <p className="section-copy">
            Over time, those gaps create unnecessary pressure on working
            capital, decision-making, and growth.
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="section-label">What we do</p>
              <h2 className="section-title">
                Revenue Control & Cash Stabilization Advisory
              </h2>
            </div>
            <p className="section-copy section-head-copy">
              We focus on the operational drivers that determine how revenue
              converts into cash. Our work is practical, hands-on, and designed
              to strengthen the financial engine behind growth.
            </p>
          </div>

          <div className="card-grid three-up">
            {coreAreas.map((item) => (
              <article key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-clean">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="section-label">How we work</p>
              <h2 className="section-title">
                A practical, leadership-focused approach
              </h2>
            </div>
          </div>

          <div className="steps-grid">
            {approach.map((item) => (
              <article key={item.number} className="step-card">
                <span className="step-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="section-label">Who we work with</p>
              <h2 className="section-title">
                Built for organizations under pressure to perform
              </h2>
            </div>
          </div>

          <div className="card-grid three-up">
            {audience.map((item) => (
              <article key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-clean">
        <div className="container narrow">
          <p className="section-label">Selective strategic engagements</p>
          <h2 className="section-title">Engagements we take on selectively</h2>
          <p className="section-copy">
            In select situations, we also engage in complex, high-value
            initiatives where financial discipline, structuring, and
            cross-border insight are critical.
          </p>
          <p className="section-copy">
            These engagements are carefully selected and undertaken where there is
strong alignment and clear potential for impact.
          </p>

          <div className="card-grid two-up top-gap">
            {selective.map((item) => (
              <article key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-band-inner">
          <div>
            <p className="section-label">Start the conversation</p>
            <h2 className="section-title">
              Strong revenue should result in strong cash performance
            </h2>
            <p className="section-copy">
              If revenue is growing but cash still feels inconsistent, we can
              help identify where the process is breaking and what it will take
              to stabilize it.
            </p>
          </div>

          <div className="cta-actions">
            <Link href="/contact" className="btn btn-primary">
              Book a Consultation
            </Link>
            <Link href="/services" className="btn btn-secondary">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
