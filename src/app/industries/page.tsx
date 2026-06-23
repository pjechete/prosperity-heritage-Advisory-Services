import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Industries | Prosperity Heritage Solutions',
  description:
    'Industry-specific operational and financial execution support for healthcare, construction, professional services, logistics, multi-location organizations, and PE portfolio companies.',
  alternates: {
    canonical: 'https://phs-usa.com/industries',
  },
  openGraph: {
    title: 'Industries | Prosperity Heritage Solutions',
    description:
      'PHS applies proven operational and financial improvement frameworks across healthcare, construction, logistics, professional services, and multi-location organizations.',
    url: 'https://phs-usa.com/industries',
    siteName: 'Prosperity Heritage Solutions',
    type: 'website',
  },
}

const industries = [
  {
    title: 'Healthcare Organizations',
    challenges:
      'Chronic revenue cycle leakage, severe billing delays, fragmented clinical workflows, administrative bottlenecks, and blind spots in facility-level operational visibility.',
    support:
      'Front-to-back revenue cycle turnarounds, clinic workflow optimization, comprehensive operational assessments, real-time reporting visibility, and hands-on system implementation support.',
    outcomes:
      'Maximized revenue capture, accelerated cash flow performance, reduced administrative friction, and total visibility into multi-facility operations.',
  },
  {
    title: 'Construction & Contracting',
    challenges:
      'Delayed project billing cycles, loose change-order management, job costing visibility gaps, and highly disconnected communication loops between field crews and the back office.',
    support:
      'Field-to-office billing workflow compression, operational project reporting, standard operating documentation, cross-functional accountability structures, and project cash-flow visibility.',
    outcomes:
      'Drastically faster progress-billing cycles, enhanced project-margin visibility, tighter cost controls, and the elimination of field execution bottlenecks.',
  },
  {
    title: 'Professional Services',
    challenges:
      'Delayed client invoicing, hidden resource utilization leaks, administrative workflow inefficiencies, uncontrolled scope creep, and limited forward visibility into individual project profitability.',
    support:
      'Billing performance compression, resource utilization visibility, core workflow optimization, operational margin reporting, and dedicated project execution support.',
    outcomes:
      'Immediate lift in billable realization rates, accelerated collections cycles, stronger project-level visibility, and precise profitability management.',
  },
  {
    title: 'Logistics & Distribution',
    challenges:
      'Lengthy order-to-cash cycle delays, cross-departmental communication breakdowns, severe warehouse-to-office bottlenecks, inventory visibility gaps, and lagging operational reporting.',
    support:
      'Order-to-cash workflow mapping, custom KPI metric development, dynamic operational reporting, supply chain process optimization, and hands-on execution support.',
    outcomes:
      'Reduced processing cycle times, optimized data visibility across hubs, lower operational friction, and stronger overall performance management.',
  },
  {
    title: 'Multi-Location Operations & PE Portfolio Companies',
    challenges:
      'Highly inconsistent regional processes, fragmented or siloed software systems, highly uneven performance variations, delayed consolidated reporting, and limited visibility across corporate footprints.',
    support:
      'Enterprise-wide process standardization, consolidated reporting optimization, localized operational assessments, carve-out/integration implementation support, and rapid-response execution management.',
    outcomes:
      'Uniform operational consistency, rapid monthly visibility for financial stakeholders, stronger local accountability, and highly predictable, scalable growth.',
  },
]

const coreFocus = [
  {
    title: 'Improve Visibility',
    body: 'Replacing blind spots with timely, reliable data.',
  },
  {
    title: 'Strengthen Accountability',
    body: 'Locking in clear, uncompromised process ownership.',
  },
  {
    title: 'Remove Operational Bottlenecks',
    body: 'Eliminating the friction that slows your teams down.',
  },
  {
    title: 'Improve Cash Flow Performance',
    body: 'Accelerating the conversion of work into cash.',
  },
  {
    title: 'Support Execution',
    body: 'Injecting the heavy-lifting capacity your teams lack.',
  },
]

export default function IndustriesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="mock-hero mock-hero-simple">
        <div className="mock-container">
          <p className="mock-eyebrow">Industries</p>

          <h1>Industry Experience. Practical Application.</h1>

          <p>
            While every industry has its own technical and operational realities,
            the underlying causes of organizational performance pressure are
            remarkably similar.
          </p>

          <p>Fragmented workflows.</p>
          <p>Limited data visibility.</p>
          <p>Weak process ownership.</p>
          <p>Severe operational bottlenecks.</p>
          <p>Revenue and cash flow leakage.</p>

          <p>
            PHS applies proven, battle-tested operational and financial
            improvement principles, carefully adapting our execution frameworks
            to match the specific structural needs of your sector.
          </p>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="mock-section">
        <div className="mock-container">
          <div className="mock-section-header">
            <p className="mock-eyebrow">Sector Deep Dives</p>
            <h2>Common Challenges. Practical Solutions. Measurable Outcomes.</h2>
          </div>

          <div className="mock-grid-2">
            {industries.map((industry) => (
              <article className="mock-card" key={industry.title}>
                <h3>{industry.title}</h3>

                <h4>Common Challenges</h4>
                <p>{industry.challenges}</p>

                <h4>Areas We Support</h4>
                <p>{industry.support}</p>

                <h4>Typical Outcomes</h4>
                <p>{industry.outcomes}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CORE COROLLARY */}
      <section className="mock-section mock-section-soft">
        <div className="mock-container">
          <div className="mock-section-header">
            <p className="mock-eyebrow">The Core Corollary</p>
            <h2>Our Focus Remains Consistent.</h2>

            <p>
              Regardless of the industry, our foundational focus never changes.
            </p>

            <p>We step into your organization to:</p>
          </div>

          <div className="mock-grid-3">
            {coreFocus.map((item) => (
              <article className="mock-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>

          <div className="mock-section-header">
            <p>
              Because most financial problems start as operational problems.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mock-cta">
        <div className="mock-container">
          <h2>Let's Start With the Challenge.</h2>

          <p>
            Whether you are navigating multi-location operational complexity,
            delayed reporting, cash flow pressure, workflow inefficiencies, or
            stalled strategic initiatives, the first step is understanding
            exactly where your performance is being lost.
          </p>

          <p>
            Let's have a practical conversation about your goals and how PHS can
            deploy the muscle required to help you achieve them.
          </p>

          <Link href="/contact" className="mock-btn">
            Schedule a Diagnostic Conversation
          </Link>
        </div>
      </section>
    </main>
  )
}
