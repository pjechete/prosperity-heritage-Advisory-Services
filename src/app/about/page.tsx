import Link from 'next/link'

export default function AboutPage() {
  return (
    <main>
        <section className="page-hero">
        <div className="container narrow">
          <div className="eyebrow">About</div>
          <h1>About Prosperity Heritage Advisory</h1>

          <p>
            Prosperity Heritage Advisory helps leadership teams strengthen the
            operational and financial systems that convert revenue into more
            predictable cash performance.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <div className="content-stack">
            <div className="card-gray">
              <p>
                Many growing organizations generate strong revenue but still
                experience instability in cash performance. In most cases, the
                issue is not revenue alone. The breakdown usually happens
                somewhere between billing execution, collections follow-through,
                payment application, financial ownership, and reporting visibility.
              </p>
            </div>

            <div className="card-gray">
              <p>
                As companies grow, go through acquisitions, or operate through
                periods of transition, these gaps often become more visible.
                Sales teams move quickly, operations evolve, and finance teams
                work hard to keep pace. Without strong process discipline
                connecting these functions, revenue may look healthy while cash
                outcomes remain inconsistent and difficult to manage.
              </p>
            </div>

            <div className="card-gray">
              <p>
                Prosperity Heritage Advisory focuses on practical,
                leadership-level improvements that help organizations strengthen
                billing discipline, collections performance, revenue integrity,
                financial visibility, and operational finance execution.
              </p>
            </div>

            <div className="card-gray">
              <p>
                We support organizations that need more than routine accounting
                support and more than high-level strategy alone. Our work is
                designed to help leadership teams identify where revenue
                conversion is slowing down, correct underlying process gaps, and
                stabilize the systems behind financial performance.
              </p>
            </div>

            <div className="card-gray">
              <p>
                This may include support in areas such as revenue control, billing
                and collections optimization, reconciliation and payment
                application issues, financial controls, and hands-on operational
                stabilization during periods of growth, change, or post-acquisition
                transition.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container narrow">
          <h2 className="section-title">What our work is designed to strengthen</h2>

          <div className="content-stack">
            <div className="card">
              <h3>Billing Discipline</h3>
              <p>
                Improve invoice timing, accuracy, and process ownership so
                revenue is captured and billed more consistently.
              </p>
            </div>

            <div className="card">
              <h3>Collections Performance</h3>
              <p>
                Strengthen follow-up structure, accountability, and aging
                management to improve cash conversion.
              </p>
            </div>

            <div className="card">
              <h3>Revenue Integrity</h3>
              <p>
                Resolve issues affecting receivables visibility, including
                unapplied or misapplied payments and reconciliation gaps.
              </p>
            </div>

            <div className="card">
              <h3>Financial Visibility</h3>
              <p>
                Give leadership teams clearer insight into where revenue
                performance is slowing down and where action is needed.
              </p>
            </div>

            <div className="card">
              <h3>Operational Stabilization</h3>
              <p>
                Support businesses during growth, transition, or
                post-acquisition periods where finance operations need stronger
                execution and control.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container narrow">
          <h2>Let’s strengthen the systems behind cash performance</h2>
          <p>
            If your organization is dealing with delayed invoicing, collections
            inconsistency, reconciliation issues, weak visibility, or financial
            strain during a transition period, Prosperity Heritage Advisory can help.
          </p>

          <div className="button-row center-buttons">
            <Link href="/contact" className="btn-secondary">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
       </main>
  )
}
