import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title:
    'About | Revenue Execution Control & Cash Stabilization | Prosperity Heritage Advisory',
  description:
    'Prosperity Heritage Advisory helps organizations restore control over how revenue becomes cash through execution discipline, alignment, and financial visibility.',
}

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">About</p>

          <h1>
            Built on the belief that strong businesses fail from lack of control,
            not lack of revenue.
          </h1>

          <p className="section-copy">
            Prosperity Heritage Advisory was founded from direct experience
            inside organizations where revenue performance and cash outcomes did
            not align.
          </p>

          <p className="section-copy">
            In many cases, the issue was not demand, strategy, or effort. It was
            execution—how revenue moved through the business, how it was managed,
            and how consistently it was converted into cash.
          </p>
        </div>
      </section>

      {/* ORIGIN / OBSERVATION */}
      <section className="section">
        <div className="container narrow">
          <p className="section-label">What we observed</p>

          <h2 className="section-title">
            The same pattern appears across industries and organizations.
          </h2>

          <p className="section-copy">
            Revenue is generated every day. But between that point and cash
            realization, it passes through multiple teams, systems, and
            workflows.
          </p>

          <p className="section-copy">
            Along that path, ownership becomes fragmented, processes become
            inconsistent, and visibility declines. Over time, these gaps
            compound—often remaining invisible until they begin to affect cash
            flow, growth, or decision-making.
          </p>

          <p className="section-copy">
            These are not isolated issues. They are structural.
          </p>
        </div>
      </section>

      {/* POINT OF VIEW */}
      <section className="section section-soft">
        <div className="container narrow">
          <p className="section-label">Our perspective</p>

          <h2 className="section-title">
            Execution is where revenue performance is ultimately determined.
          </h2>

          <p className="section-copy">
            Financial results are often treated as outcomes to be reported. In
            reality, they are the result of how well execution is managed across
            the organization.
          </p>

          <p className="section-copy">
            When execution lacks structure, discipline, and ownership, revenue
            slows, leaks, or becomes unpredictable. When those elements are
            strengthened, performance becomes more consistent and more reliable.
          </p>
        </div>
      </section>

      {/* HOW WE THINK */}
      <section className="section">
        <div className="container narrow">
          <p className="section-label">How we think</p>

          <h2 className="section-title">
            Control, discipline, and visibility are not abstract concepts. They
            are operational realities.
          </h2>

          <div className="card-grid three-up">
            <div className="card">
              <h3>Control</h3>
              <p>
                Clear ownership and accountability across the revenue-to-cash
                process.
              </p>
            </div>

            <div className="card">
              <h3>Discipline</h3>
              <p>
                Consistent execution across billing, collections, and financial
                workflows.
              </p>
            </div>

            <div className="card">
              <h3>Visibility</h3>
              <p>
                Clear insight into what is happening across the revenue process
                in real time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH WITHOUT DUPLICATION */}
      <section className="section section-light">
        <div className="container narrow">
          <p className="section-label">Approach</p>

          <h2 className="section-title">
            A practical, execution-focused approach shaped by real operating
            environments.
          </h2>

          <p className="section-copy">
            Our work is grounded in experience inside organizations where
            operational complexity, growth, and financial pressure intersect.
          </p>

          <p className="section-copy">
            Rather than focusing only on analysis or reporting, we work directly
            within the execution layer—where revenue is managed, transferred, and
            converted.
          </p>

          <p className="section-copy">
            The goal is not theoretical improvement. It is practical, measurable
            change in how the business performs.
          </p>
        </div>
      </section>

      {/* WHERE WE FIT */}
      <section className="section section-soft">
        <div className="container narrow">
          <p className="section-label">Where we fit</p>

          <h2 className="section-title">
            We are typically engaged when something does not feel aligned between
            performance and outcomes.
          </h2>

          <ul className="bullet-list">
            <li>Revenue is present, but cash feels inconsistent</li>
            <li>Processes exist, but outcomes vary</li>
            <li>Growth is increasing operational complexity</li>
            <li>Leadership lacks clear visibility into execution</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-box">
            <p className="eyebrow">Start the conversation</p>

            <h2>
              If performance and cash outcomes are not aligned, it is often a
              signal—not a coincidence.
            </h2>

            <p>
              We help leadership teams understand what is driving that gap and
              how to address it.
            </p>

            <div className="hero-actions center-buttons">
              <Link href="/contact" className="btn btn-primary">
                Schedule a Revenue Diagnostic
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
