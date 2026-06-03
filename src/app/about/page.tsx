import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | Prosperity Heritage Advisory',
  description:
    'Learn about Prosperity Heritage Advisory, a practical operational and financial support firm helping growing organizations improve visibility, workflows, reporting, cash flow, and execution.',
  alternates: {
    canonical: 'https://phs-usa.com/about',
  },
  openGraph: {
    title: 'About | Prosperity Heritage Advisory',
    description:
      'Practical operational and financial support for organizations facing workflow breakdowns, reporting challenges, cash flow pressure, and execution issues.',
    url: 'https://phs-usa.com/about',
    siteName: 'Prosperity Heritage Advisory',
    type: 'website',
  },
}

const workPrinciples = [
  {
    title: 'Diagnosis Before Prescription',
    body:
      'Every organization is different. We begin by understanding the environment before recommending solutions.',
  },
  {
    title: 'Practical Clarity Over Jargon',
    body:
      'We focus on practical improvements that leaders and teams can understand, implement, and sustain.',
  },
  {
    title: 'Sustained Accountability',
    body:
      'Improvements only matter if they continue after the project ends. We focus on helping teams build processes and habits that last.',
  },
  {
    title: 'Assess → Improve → Ongoing Support',
    body:
      'We work alongside leadership teams to understand what is happening, improve what matters most, and provide support where needed.',
  },
]

const experienceAreas = [
  {
    title: 'Operational & Financial Experience',
    body:
      'PHS is led by professionals with more than 20 years of combined experience across financial operations, reporting, revenue performance, process improvement, and organizational support.',
  },
  {
    title: 'Complex Operating Environments',
    body:
      'Our perspective is shaped by experience in environments where people, processes, systems, reporting, and cash flow must work together under pressure.',
  },
]

export default function AboutPage() {
  return (
    <main>
      <section className="mock-hero mock-hero-simple">
        <div className="mock-container">
          <p className="mock-eyebrow">About</p>
          <h1>Enterprise experience. Independent focus.</h1>

          <p>
            At a certain stage of growth, every successful organization runs
            into a wall. The workflows, systems, and processes that helped the
            business reach its current level begin to strain under increasing
            complexity.
          </p>

          <p>
            Communication becomes harder. Visibility decreases. Reporting
            becomes less reliable. Cash flow becomes more difficult to predict.
          </p>

          <p>
            Prosperity Heritage Advisory was created to help organizations
            navigate those challenges with practical support grounded in
            real-world operational and financial experience.
          </p>
        </div>
      </section>

      <section className="mock-section mock-section-soft">
        <div className="mock-container">
          <div className="mock-section-header">
            <p className="mock-eyebrow">Who We Are</p>
            <h2>Practical support for growing organizations facing operational and financial pressure.</h2>
          </div>

          <article className="mock-card mock-wide-card">
            <p>
              Prosperity Heritage Advisory works with organizations that are
              experiencing pressure across workflows, reporting, cash flow,
              team coordination, financial processes, and day-to-day execution.
            </p>

            <p>
              Our work is grounded in practical experience across operational
              and financial environments where visibility, accountability, and
              execution directly affect performance.
            </p>

            <p>
              We help organizations understand what is happening, improve what
              matters most, and provide flexible support when additional
              capacity or experienced perspective is needed.
            </p>
          </article>
        </div>
      </section>

      <section className="mock-section">
        <div className="mock-container">
          <div className="mock-section-header">
            <p className="mock-eyebrow">Experience That Shapes Our Perspective</p>
          </div>

          <div className="mock-grid-2">
            {experienceAreas.map((item) => (
              <article className="mock-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mock-section mock-section-soft">
        <div className="mock-container">
          <div className="mock-section-header">
            <p className="mock-eyebrow">What We Believe</p>
            <h2>The visible problem is rarely the root problem.</h2>
          </div>

          <article className="mock-card mock-wide-card">
            <p>
              Financial pressure is often the result of workflow breakdowns,
              communication gaps, reporting challenges, unclear ownership, and
              operational strain that have been building for months.
            </p>

            <p>
              The challenge is not always effort. Many organizations have good
              people working hard inside processes that no longer support the
              demands of the business.
            </p>

            <p>
              Once the source of the pressure becomes visible, leaders can make
              better decisions, teams can execute with more consistency, and the
              organization can move forward with greater confidence.
            </p>
          </article>
        </div>
      </section>

      <section className="mock-section">
        <div className="mock-container">
          <div className="mock-section-header">
            <p className="mock-eyebrow">How We Work</p>
          </div>

          <div className="mock-grid-2">
            {workPrinciples.map((item) => (
              <article className="mock-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mock-section mock-section-soft">
        <div className="mock-container">
          <div className="mock-section-header">
            <p className="mock-eyebrow">Why Clients Work With PHS</p>
          </div>

          <article className="mock-card mock-wide-card">
            <p>
              Clients engage PHS because they want practical support from a team
              that understands both operational realities and financial
              consequences.
            </p>

            <ul className="mock-bullet-list">
              <li>Clear communication</li>
              <li>Practical recommendations</li>
              <li>Hands-on support</li>
              <li>Flexible engagement</li>
              <li>Support that meets the organization where it is</li>
            </ul>

            <p>Above all, they want practical help moving forward.</p>
          </article>
        </div>
      </section>

      <section className="mock-cta">
        <div className="mock-container">
          <h2>Let&apos;s start with a conversation.</h2>
          <p>
            If your organization is experiencing operational or financial
            pressure and you are not sure where the problem starts, let&apos;s
            talk.
          </p>
          <Link href="/contact" className="mock-btn">
            Schedule a Conversation
          </Link>
        </div>
      </section>
    </main>
  )
}
