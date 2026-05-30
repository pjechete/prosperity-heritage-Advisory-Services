import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Prosper Jechete | Prosperity Heritage Advisory',
  description:
    'Learn about Prosper Jechete, MBA, CRCR, Founder and Principal of Prosperity Heritage Advisory, and his operational, financial, revenue cycle, and controllership experience.',
  alternates: {
    canonical: 'https://phs-usa.com/about',
  },
  openGraph: {
    title: 'About Prosper Jechete | Prosperity Heritage Advisory',
    description:
      'Enterprise experience, independent focus, and practical operational and financial support for growing organizations.',
    url: 'https://phs-usa.com/about',
    siteName: 'Prosperity Heritage Advisory',
    type: 'website',
  },
}

const principles = [
  {
    title: 'Diagnosis Before Prescription',
    body: 'Every organization is different. We begin by understanding your environment before recommending solutions.',
  },
  {
    title: 'Practical Clarity Over Jargon',
    body: 'We focus on practical improvements that leaders and teams can understand, implement, and sustain.',
  },
  {
    title: 'Sustained Accountability',
    body: 'Improvements only matter if they continue after the project ends. We focus on helping teams build processes and habits that last.',
  },
  {
    title: 'Assess → Improve → Ongoing Support',
    body: 'We work alongside leadership teams to understand what is happening, improve what matters most, and provide support where needed.',
  },
]

const clientReasons = [
  'Clear communication',
  'Practical recommendations',
  'Hands-on support',
  'Flexible engagement',
  'An experienced partner they can call when challenges arise',
]

export default function AboutPage() {
  return (
    <main>
      <section className="phs-page-hero">
        <div className="phs-container phs-hero-copy">
          <p className="phs-eyebrow">About</p>
          <h1>Enterprise experience. Independent focus.</h1>

          <p className="phs-hero-lede">
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

      <section className="phs-section phs-section-soft">
        <div className="phs-container phs-profile-grid">
          <div className="phs-headshot-placeholder">Professional Headshot</div>

          <div>
            <p className="phs-section-label">Meet The Founder</p>
            <h2>Meet Prosper Jechete</h2>
            <p className="phs-profile-title">
              <strong>Prosper Jechete, MBA, CRCR</strong>
              <br />
              Founder & Principal
            </p>
            <p className="phs-credential-note">
              Master of Business Administration (MBA)
              <br />
              Certified Revenue Cycle Representative (CRCR) — revenue cycle,
              billing, collections, and cash-flow visibility.
            </p>
            <p className="phs-credential-strip">
              15+ years of financial & operational leadership · MBA · CRCR
            </p>

            <p>
              For more than 15 years, Prosper has worked across financial
              leadership, operational improvement, reporting, revenue
              performance, and process management.
            </p>

            <p>
              His experience includes financial leadership and operational
              improvement across complex healthcare and revenue environments,
              including Tenet Healthcare, Conifer Health Solutions, and Prime
              Healthcare, as well as fractional finance and controllership work
              with growing organizations.
            </p>

            <p>
              Throughout that experience, one pattern has remained consistent:
              the visible problem is rarely the root problem.
            </p>

            <p>
              Financial pressure is often the result of workflow breakdowns,
              communication gaps, reporting challenges, unclear ownership, and
              operational strain that have been building for months.
            </p>
          </div>
        </div>
      </section>

      <section className="phs-section">
        <div className="phs-container">
          <div className="phs-section-header">
            <p className="phs-section-label">Experience That Shapes Our Perspective</p>
            <h2>Practical experience in complex operating environments.</h2>
          </div>

          <div className="phs-grid phs-grid-2">
            <article className="phs-card">
              <h3>Complex Operating Environments</h3>
              <p>
                Working within large healthcare systems and other operationally
                complex organizations provided exposure to the challenges that
                emerge when people, processes, systems, and reporting must work
                together at scale.
              </p>
            </article>

            <article className="phs-card">
              <h3>Practical Problem Solving</h3>
              <p>
                While every organization is different, the underlying challenges
                are often familiar: delayed visibility, workflow breakdowns,
                reporting challenges, unclear ownership, cash flow pressure, and
                operational complexity.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="phs-section phs-section-soft">
        <div className="phs-container">
          <div className="phs-section-header">
            <p className="phs-section-label">How We Work</p>
            <h2>Practical support, clear communication, and accountability.</h2>
          </div>

          <div className="phs-grid phs-grid-2">
            {principles.map((item) => (
              <article className="phs-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="phs-section">
        <div className="phs-container phs-narrow">
          <p className="phs-section-label">Why Clients Work With PHS</p>
          <h2>Clients want more than advice. They want practical support.</h2>
          <p>
            Clients engage PHS because they want practical support from someone
            who understands both operational realities and financial consequences.
          </p>

          <ul className="phs-bullet-list phs-two-column-list">
            {clientReasons.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p>Above all, they want someone who helps them move forward.</p>
        </div>
      </section>

      <section className="phs-final-cta">
        <div className="phs-container phs-cta-grid">
          <div>
            <h2>Let&apos;s start with a conversation.</h2>
            <p>
              If you&apos;re experiencing operational or financial pressure and
              aren&apos;t sure where the problem starts, let&apos;s talk.
            </p>
          </div>
          <Link href="/contact" className="phs-btn phs-btn-gold">
            Schedule a Conversation
          </Link>
        </div>
      </section>
    </main>
  )
}
