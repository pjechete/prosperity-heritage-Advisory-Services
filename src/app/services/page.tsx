import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      <section className="page-hero services-hero">
        <div className="container">
          <div className="services-hero-grid">
            <div>
              <div className="eyebrow">Advisory Services</div>

              <h1>Revenue Stability & Operational Finance Advisory</h1>

              <p>
                Prosperity Heritage Advisory helps organizations strengthen the
                systems that connect revenue activity to billing execution,
                collections performance, reconciliation accuracy, financial
                visibility, and operational stability.
              </p>

              <p>
                Our work focuses on practical improvements that help leadership
                teams convert revenue into more predictable cash outcomes,
                especially during periods of growth, transition, or operational
                strain.
              </p>

              <div className="button-row">
                <Link href="/contact" className="btn-primary">
                  Book a Consultation
                </Link>

                <a href="#overview" className="btn-secondary">
                  View Overview
                </a>
              </div>
            </div>

            <div className="services-hero-panel">
              <h3>Built for organizations facing issues such as:</h3>
              <ul className="services-checklist">
                <li>Delayed or inconsistent invoicing</li>
                <li>Weak collections follow-through</li>
                <li>Unapplied or misapplied payments</li>
                <li>Broken handoffs across teams</li>
                <li>Limited visibility into revenue conversion</li>
                <li>Post-acquisition operational disruption</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="services-jumpbar">
        <div className="container">
          <div className="services-jump-links">
            <a href="#overview">Overview</a>
            <a href="#challenges">Common Challenges</a>
            <a href="#services">Service Areas</a>
            <a href="#approach">Our Approach</a>
            <a href="#assessment">Assessment</a>
            <a href="#contact-cta">Contact</a>
          </div>
        </div>
      </section>

      <section id="overview" className="section">
        <div className="container services-two-col">
          <div>
            <h2 className="section-title left-align">
              Strengthen the systems behind revenue performance
            </h2>

            <p className="section-copy">
              Many businesses do not struggle because revenue is absent. They
              struggle because the systems that should convert revenue into cash
              are not operating with enough discipline, consistency, or visibility.
            </p>

            <p className="section-copy">
              Prosperity Heritage Advisory works with leadership teams to identify
              where billing, collections, payment application, financial ownership,
              operational handoffs, and reporting visibility begin to weaken
              performance.
            </p>

            <p className="section-copy">
              We help organizations stabilize these areas through practical,
              operational finance support that strengthens execution and improves
              leadership visibility.
            </p>
          </div>

          <div className="services-callout">
            <h3>Targets for improvement</h3>
            <ul>
              <li>Faster invoicing cycles</li>
              <li>Reduced receivable aging</li>
              <li>Better collections accountability</li>
              <li>Cleaner payment application and reconciliation</li>
              <li>Stronger revenue visibility</li>
              <li>More consistent cash conversion</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="challenges" className="section section-light">
        <div className="container">
          <h2 className="section-title">
            Why revenue growth still fails to convert into predictable cash
          </h2>

          <p className="section-subtitle">
            The issue is often not revenue alone. The issue is what happens after the sale.
          </p>

          <div className="problem-list">
            <div className="problem-item">
              Invoices are delayed, inconsistent, or not triggered at the right time.
            </div>
            <div className="problem-item">
              Payment terms do not align with operational reality.
            </div>
            <div className="problem-item">
              Collections are reactive instead of structured and managed.
            </div>
            <div className="problem-item">
              Unapplied or misapplied cash distorts receivables visibility and aging.
            </div>
            <div className="problem-item">
              Revenue leakage builds through weak ownership and poor handoffs.
            </div>
            <div className="problem-item">
              Finance ends up dealing with issues created upstream in the process.
            </div>
            <div className="problem-item">
              Acquisitions and business transitions expose process gaps that were previously hidden.
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <h2 className="section-title">Core service areas</h2>

          <div className="grid-4">
            <div className="card-highlight">
              <h3>Revenue Control & Cash Stabilization</h3>
              <p>
                Strengthen the processes that help revenue convert into dependable
                cash outcomes through better discipline, ownership, and execution.
              </p>
            </div>

            <div className="card">
              <h3>Billing & Collections Optimization</h3>
              <p>
                Improve invoice timing, collections structure, follow-up rhythm,
                and accountability across finance and operations.
              </p>
            </div>

            <div className="card">
              <h3>Revenue Integrity & Reconciliation Support</h3>
              <p>
                Resolve unapplied or misapplied payments, improve reconciliation
                discipline, and restore more reliable receivables visibility.
              </p>
            </div>

            <div className="card">
              <h3>Financial Controls & Revenue Visibility</h3>
              <p>
                Strengthen reporting clarity and control points so leadership teams
                can see where revenue conversion is slowing down.
              </p>
            </div>
          </div>

          <div className="grid-4" style={{ marginTop: '2rem' }}>
            <div className="card">
              <h3>M&A Transition & Operational Stabilization</h3>
              <p>
                Provide hands-on support during acquisitions, ownership changes,
                and transition periods where billing, reporting, and finance
                operations need to stabilize quickly.
              </p>
            </div>

            <div className="card">
              <h3>Revenue Operations Alignment</h3>
              <p>
                Reduce breakdowns between sales, operations, and finance so
                revenue activity flows more cleanly into invoicing and collections.
              </p>
            </div>

            <div className="card">
              <h3>Collections Performance Improvement</h3>
              <p>
                Build stronger collection workflows, escalation paths, aging
                visibility, and team accountability.
              </p>
            </div>

            <div className="card">
              <h3>Operational Finance Support</h3>
              <p>
                Support leadership teams that need practical, boots-on-the-ground
                help to improve execution during high-pressure periods.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="section section-light">
        <div className="container">
          <h2 className="section-title">How we help leadership teams improve</h2>

          <div className="grid-4">
            <div className="card-highlight">
              <h3>Assess the current process</h3>
              <p>
                Review the existing workflow across billing, collections,
                reconciliation, and reporting.
              </p>
            </div>

            <div className="card">
              <h3>Identify operational gaps</h3>
              <p>
                Pinpoint where ownership, timing, handoffs, and financial controls
                are breaking down.
              </p>
            </div>

            <div className="card">
              <h3>Implement practical improvements</h3>
              <p>
                Strengthen invoicing discipline, collections execution, payment
                application processes, and reporting clarity.
              </p>
            </div>

            <div className="card">
              <h3>Stabilize financial operations</h3>
              <p>
                Help leadership teams establish more reliable systems for revenue
                conversion and operational visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="assessment" className="section">
        <div className="container services-two-col">
          <div>
            <h2 className="section-title left-align">
              Start with a Revenue Stability Assessment
            </h2>

            <p className="section-copy">
              We assess the current process from contract execution through
              invoicing, collections, payment application, reconciliation, and
              reporting to identify where revenue discipline is breaking down.
            </p>

            <p className="section-copy">
              This gives leadership a clearer view of priority gaps, improvement
              opportunities, and the steps needed to create more consistent cash
              outcomes.
            </p>

            <p className="section-copy">
              For organizations going through acquisitions or periods of change,
              the assessment can also highlight transition risks and operational
              stabilization priorities.
            </p>
          </div>

          <div className="services-assessment-card">
            <h3>Assessment focus typically includes:</h3>
            <ul>
              <li>Contract-to-invoice workflow alignment</li>
              <li>Billing timing and ownership analysis</li>
              <li>Collections structure and accountability</li>
              <li>Unapplied / misapplied payment review</li>
              <li>Revenue leakage identification</li>
              <li>Reporting and visibility gaps</li>
              <li>Transition and stabilization priorities</li>
            </ul>

            <div className="button-row">
              <Link href="/contact" className="btn-primary">
                Request an Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">What this support is designed to improve</h2>

          <div className="grid-4">
            <div className="card">
              <h3>Billing execution</h3>
              <p>Improve timing, consistency, and process discipline around invoicing.</p>
            </div>

            <div className="card">
              <h3>Collections discipline</h3>
              <p>Increase follow-through, accountability, and aging performance.</p>
            </div>

            <div className="card">
              <h3>Receivables accuracy</h3>
              <p>Strengthen payment application and revenue reconciliation reliability.</p>
            </div>

            <div className="card">
              <h3>Leadership visibility</h3>
              <p>Provide clearer insight into risks, bottlenecks, and financial priorities.</p>
            </div>
          </div>
        </div>
      </section>
<section className="section section-light">
  <div className="container">
    <h2 className="section-title">Selective Engagements</h2>

    <p className="section-subtitle">
      In addition to our core advisory work, Prosperity Heritage Advisory
      selectively supports high-impact initiatives through strategic partnerships.
      These engagements typically involve complex, capital-intensive projects
      requiring strong operational and financial coordination.
    </p>

    <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center' }}>
      <div className="card" style={{ maxWidth: '520px' }}>
        <h3>Healthcare Development & Turnkey Projects</h3>
        <p>
          Through trusted partnerships, we support the development of healthcare
          facilities including hospitals, medical centers, and specialized
          treatment units. These engagements may include feasibility, planning,
          operational setup, and end-to-end project execution.
        </p>
      </div>
    </div>

    <p className="section-subtitle" style={{ marginTop: '2.5rem' }}>
      All such engagements are undertaken selectively and in collaboration
      with specialized partners.
    </p>
  </div>
</section>
      <section id="contact-cta" className="cta-band">
        <div className="container">
          <h2>Schedule a Revenue Stability Assessment</h2>
          <p>
            If revenue is growing but cash performance remains inconsistent, the
            issue may be sitting somewhere between billing execution, collections
            discipline, reconciliation accuracy, or operational ownership.
          </p>
          <p>
            Prosperity Heritage Advisory helps leadership teams identify and fix
            those gaps.
          </p>

          <div className="button-row center-buttons">
            <Link href="/contact" className="btn-secondary">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
