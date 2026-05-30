import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Prosper Jechete | Prosperity Heritage Advisory',
  description:
    'Learn about Prosper Jechete, MBA, CRCR, Founder & Principal of Prosperity Heritage Advisory, and PHS’s practical operational and financial support approach.',
  alternates: {
    canonical: 'https://phs-usa.com/about',
  },
  openGraph: {
    title: 'About Prosper Jechete | Prosperity Heritage Advisory',
    description:
      'Enterprise experience, independent focus, and practical support for organizations facing operational and financial pressure.',
    url: 'https://phs-usa.com/about',
    siteName: 'Prosperity Heritage Advisory',
    type: 'website',
  },
}

const workPrinciples = [
  {
    title: 'Diagnosis Before Prescription',
    body:
      'Every organization is different. We begin by understanding your environment before recommending solutions.',
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
          <div className="mock-profile">
            <div className="mock-avatar">Professional Headshot</div>

            <div>
              <h2>Meet Prosper Jechete</h2>

              <p>
                <strong>Prosper Jechete, MBA, CRCR</strong>
                <br />
                <span>Founder & Principal</span>
              </p>

              <p className="mock-credential-line">
                Master of Business Administration (MBA)
                <br />
                Certified Revenue Cycle Representative (CRCR) — revenue cycle,
                billing, collections, and cash-flow visibility.
              </p>

              <p className="mock-credibility">
                15+ years of financial &amp; operational leadership · MBA · CRCR
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

              <p>Throughout that experience, one pattern has remained consistent:</p>

              <p>
                <strong>The visible problem is rarely the root problem.</strong>
              </p>

              <p>
                Financial pressure is often the result of workflow breakdowns,
                communication gaps, reporting challenges, unclear ownership, and
                operational strain that have been building for months.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mock-section">
        <div className="mock-container">
          <div className="mock-section-header">
            <p className="mock-eyebrow">Experience That Shapes Our Perspective</p>
          </div>

          <div className="mock-grid-2">
            <article className="mock-card">
              <h3>Complex Operating Environments</h3>
              <p>
                Working within large healthcare systems and other operationally
                complex organizations provided exposure to the challenges that
                emerge when people, processes, systems, and reporting must work
                together at scale.
              </p>
            </article>

            <article className="mock-card">
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

      <section className="mock-section mock-section-soft">
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

      <section className="mock-section">
        <div className="mock-container">
          <div className="mock-section-header">
            <p className="mock-eyebrow">Why Clients Work With PHS</p>
          </div>

          <article className="mock-card mock-wide-card">
            <p>
              Clients engage PHS because they want practical support from someone
              who understands both operational realities and financial
              consequences.
            </p>

            <ul className="mock-bullet-list">
              <li>Clear communication</li>
              <li>Practical recommendations</li>
              <li>Hands-on support</li>
              <li>Flexible engagement</li>
              <li>An experienced partner they can call when challenges arise</li>
            </ul>

            <p>Above all, they want someone who helps them move forward.</p>
          </article>
        </div>
      </section>

      <section className="mock-cta">
        <div className="mock-container">
          <h2>Let&apos;s start with a conversation.</h2>
          <p>
            If you&apos;re experiencing operational or financial pressure and
            aren&apos;t sure where the problem starts, let&apos;s talk.
          </p>
          <Link href="/contact" className="mock-btn">
            Schedule a Conversation
          </Link>
        </div>
      </section>
    </main>
  )
}

