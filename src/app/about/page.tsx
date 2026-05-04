import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Prosperity Heritage Advisory | Revenue Control & Execution Advisory',
  description:
    'Prosperity Heritage Advisory is a practitioner-led advisory platform helping leadership teams strengthen revenue control, cash visibility, operational finance, and execution discipline.',
}

export default function AboutPage() {
  return (
    <main>

      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">About</p>
          <h1>
            Practitioner-led advisory focused on revenue control, cash visibility, and execution discipline.
          </h1>
          <p className="hero-subtext">
            Prosperity Heritage Advisory helps leadership teams strengthen how revenue is executed—so it consistently converts into predictable, visible cash outcomes.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container narrow">
          <p>
            We operate at the intersection of finance, operations, and revenue execution—where billing, collections, reporting, and ownership either function with discipline or quietly break down.
          </p>
          <p>
            Our work is grounded in real operating environments across healthcare, financial operations, revenue cycle, and complex growth situations where execution—not strategy alone—determines performance.
          </p>
        </div>
      </section>

      {/* WHAT WE SEE */}
      <section className="section alt">
        <div className="container">
          <h2>What we see</h2>
          <p className="section-intro">
            Revenue performance does not always translate into cash performance.
          </p>

          <div className="content-grid">
            <p>
              Many organizations generate strong revenue yet continue to experience pressure in cash flow, forecasting, and financial stability. The issue is rarely demand alone.
            </p>
            <p>
              Breakdowns typically occur across billing execution, collections discipline, payment application, reporting visibility, and ownership clarity—often between functions rather than within them.
            </p>
            <p>
              As organizations grow, scale operations, pursue acquisitions, or enter more complex funding environments, these gaps become more visible. Sales accelerates. Operations evolves. Finance works to keep pace.
            </p>
            <p>
              Without strong process discipline connecting these functions, revenue may appear healthy while cash outcomes remain inconsistent, delayed, and difficult to manage.
            </p>
          </div>

          <p className="emphasis">
            Revenue is recorded. Cash is executed.
          </p>
        </div>
      </section>

      {/* HOW WE HELP */}
      <section className="section">
        <div className="container">
          <h2>How we help</h2>
          <p className="section-intro">
            Targeted, leadership-level intervention where execution determines outcomes.
          </p>

          <div className="services-grid">

            <div className="service-card">
              <h3>Revenue Control</h3>
              <p>
                Establish clear ownership, process discipline, and accountability across how revenue is captured, billed, collected, and reported.
              </p>
            </div>

            <div className="service-card">
              <h3>Cash Visibility</h3>
              <p>
                Provide leadership with clear, decision-ready insight into where cash is delayed, what is driving performance, and where intervention is required.
              </p>
            </div>

            <div className="service-card">
              <h3>Operational Finance</h3>
              <p>
                Strengthen the operating layer between finance, billing, collections, and leadership decision-making to improve execution consistency.
              </p>
            </div>

            <div className="service-card">
              <h3>Healthcare & Revenue Cycle</h3>
              <p>
                Apply practical experience across healthcare revenue cycle, workflow alignment, implementation readiness, and financial operations.
              </p>
            </div>

            <div className="service-card">
              <h3>Public Sector Readiness</h3>
              <p>
                Support initiatives requiring funding accountability, stakeholder alignment, structured reporting, and disciplined execution.
              </p>
            </div>

            <div className="service-card">
              <h3>Strategic Partnerships</h3>
              <p>
                Work with selected partners where advisory, market development, financial controls, and operational execution must align.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY PHS */}
      <section className="section alt">
        <div className="container">
          <h2>Why PHS</h2>
          <p className="section-intro">
            Built for organizations where execution—not strategy alone—determines performance.
          </p>

          <div className="content-grid">
            <p>
              We are not a traditional accounting firm, a strategy-only consulting group, or a software provider. We operate in the execution layer where revenue conversion, cash visibility, and operational discipline either hold—or break.
            </p>
            <p>
              Our focus is not on replacing systems, but on strengthening how they are used—ensuring processes, ownership, and reporting routines function with consistency and control.
            </p>
            <p>
              Our work is designed to operate within your existing systems and governance structure. We do not rely on disruptive integrations or large-scale system changes to deliver impact.
            </p>
            <p>
              Engagements are structured with clear access boundaries, disciplined data handling, and alignment to your internal controls—ensuring operational continuity and stakeholder confidence throughout.
            </p>
            <p>
              In many cases, the highest-impact improvements come not from new systems, but from how existing processes, ownership, and reporting are aligned and executed.
            </p>
          </div>

          <div className="principles">
            <ul>
              <li>Practitioner-led advisory grounded in real operating environments</li>
              <li>Hands-on experience across finance, operations, and revenue execution</li>
              <li>Structured around control, visibility, accountability, and implementation discipline</li>
              <li>Selective partner network across healthcare, public sector, and strategic initiatives</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHERE WE FIT */}
      <section className="section">
        <div className="container">
          <h2>Where we fit</h2>
          <p className="section-intro">
            Designed for environments where performance depends on execution across functions.
          </p>

          <div className="content-grid">
            <p>
              PHS supports leadership teams that need more than observation. We bring structure to the issues that sit between strategy and results—across handoffs, controls, reporting routines, and accountability systems.
            </p>
            <p>
              We are most effective in environments where growth, complexity, or transition has exposed gaps in how revenue moves through the organization.
            </p>
          </div>

          <div className="situations">
            <ul>
              <li>Revenue is growing, but cash conversion is unpredictable</li>
              <li>Billing and collections processes exist, but outcomes lack consistency</li>
              <li>Leadership lacks clear visibility into cash performance</li>
              <li>Growth, acquisition, or transition has exposed control gaps</li>
              <li>Complex initiatives require stronger financial and execution structure</li>
            </ul>
          </div>

          <p className="note">
            We are not designed for stable environments with fully optimized systems. We focus where execution gaps are limiting performance.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <h2>Let’s strengthen the systems behind cash performance.</h2>
          <p>
            If cash performance is not keeping pace with revenue, the issue is already affecting visibility, decision-making, and growth.
          </p>

          <div className="cta-actions">
            <a href="/contact" className="btn btn-primary">
              Schedule a Diagnostic
            </a>
            <a href="/services" className="btn btn-secondary">
              Explore Services
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
