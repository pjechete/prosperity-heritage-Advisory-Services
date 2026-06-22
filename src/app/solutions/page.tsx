import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Solutions | Prosperity Heritage Solutions',
  description:
    'Practical execution for complex operational and financial challenges, including profit recovery, revenue and cash flow performance, operational improvement, financial visibility, and project execution.',
  alternates: {
    canonical: 'https://phs-usa.com/solutions',
  },
  openGraph: {
    title: 'Solutions | Prosperity Heritage Solutions',
    description:
      'PHS helps organizations improve operational performance, strengthen financial visibility, and execute initiatives that drive measurable results.',
    url: 'https://phs-usa.com/solutions',
    siteName: 'Prosperity Heritage Solutions',
    type: 'website',
  },
}

const coreSolutions = [
  {
    title: 'Profit Recovery Assessment',
    challenge: [
      'Performance issues rarely begin with a single, massive failure.',
      'More often, value leaks quietly through fragmented workflows, delayed billing, reporting gaps, weak controls, and unclear ownership.',
      'Leadership knows something is not working, but lacks clear visibility into exactly where the breakdown is occurring.',
    ],
    whatWeDo:
      'We conduct a focused, intensive assessment of your operational and financial workflows to pinpoint the specific bottlenecks, revenue leaks, reporting gaps, and process weaknesses impacting your performance.',
    focus: [
      'Operational Workflow Assessment',
      'Revenue Leakage Identification',
      'Reporting Gap Analysis',
      'Process Bottleneck Evaluation',
      'Internal Control Review',
    ],
    outcomes: [
      'Improved operational visibility',
      'Clear identification of performance barriers',
      'Prioritized improvement opportunities',
      'A practical, step-by-step execution roadmap',
    ],
  },
  {
    title: 'Revenue & Cash Flow Performance',
    challenge: [
      'Revenue may be growing, yet cash remains under tight pressure.',
      'Delayed billing, aging receivables, inconsistent collections practices, and inefficient workflows reduce cash velocity and severely limit financial flexibility.',
    ],
    whatWeDo:
      'We help organizations optimize the entire flow of revenue from initial service delivery to final cash collection by tightening billing processes, streamlining collections workflows, and locking in operational accountability.',
    focus: [
      'Billing Cycle Compression',
      'Collections Process Optimization',
      'Revenue Cycle Performance Mapping',
      'Accounts Receivable Visibility',
      'Cash Flow Reporting Support',
    ],
    outcomes: [
      'Faster billing cycles',
      'Improved collections performance',
      'Drastically reduced aging receivables',
      'Stronger, real-time cash visibility',
    ],
  },
  {
    title: 'Operational Performance Improvement',
    challenge: [
      'Internal teams are working harder than ever, but work is not moving efficiently.',
      'Departments operate in isolated silos, handoffs are missed, process ownership is unclear, and critical initiatives lose momentum before reaching completion.',
    ],
    whatWeDo:
      'We help organizations streamline daily workflows, eliminate deep operational bottlenecks, strengthen baseline accountability, and dramatically improve coordination across teams.',
    focus: [
      'Process Mapping & Visualization',
      'Workflow Optimization Loops',
      'Operational Bottleneck Elimination',
      'Accountability Framework Design',
      'Standard Operating Procedures (SOPs)',
    ],
    outcomes: [
      'Improved execution velocity',
      'Reduced operational friction and noise',
      'Stronger, culture-wide accountability',
      'Better cross-functional alignment',
    ],
  },
  {
    title: 'Financial Visibility & Accountability',
    challenge: [
      'Leadership struggles to make confident, strategic decisions when monthly reporting is delayed, reconciliations remain incomplete, and baseline financial information cannot be trusted.',
    ],
    whatWeDo:
      'We help organizations accelerate reporting processes, rapidly resolve accounting backlogs, strengthen internal controls, and establish reliable financial routines.',
    focus: [
      'Month-End Close Improvement',
      'Reconciliation Backlog Cleanup',
      'Reporting Process Optimization',
      'Financial Controls Management',
      'Reporting Visibility Frameworks',
    ],
    outcomes: [
      'Faster, more predictable reporting cycles',
      'Improved data and financial reliability',
      'Better decision-making visibility',
      'Increased organizational accountability',
    ],
  },
  {
    title: 'Interim Leadership & Project Execution',
    challenge: [
      'Growth, organizational change, system implementations, acquisitions, restructurings, and sudden leadership transitions place immense pressure on internal teams.',
      'Critical projects remain unfinished simply because nobody has the free capacity to own them.',
    ],
    whatWeDo:
      'We provide experienced operational and financial leadership to guide your key initiatives, coordinate stakeholders, and maintain execution momentum.',
    focus: [
      'Interim Operational Leadership',
      'Interim Financial Leadership',
      'Hands-On Project Execution Support',
      'Systems Implementation Oversight',
      'Organizational Transition Support',
    ],
    outcomes: [
      'Accelerated project completion',
      'Reduced execution and structural risk',
      'Improved organizational alignment',
      'Greater operational stability',
    ],
  },
]

export default function SolutionsPage() {
  return (
    <main>
      <section className="mock-hero mock-hero-simple">
        <div className="mock-container">
          <p className="mock-eyebrow">Solutions</p>
          <h1>Practical Execution for Complex Operational and Financial Challenges.</h1>

          <p>
            Most organizations do not need another report explaining what is wrong.
          </p>

          <p>
            They need experienced practitioners who can identify root causes,
            implement practical improvements, and provide additional execution
            capacity when internal teams are stretched thin.
          </p>

          <p>
            PHS helps organizations improve operational performance, strengthen
            financial visibility, and execute the exact initiatives that drive
            measurable results.
          </p>

          <div className="mock-actions">
            <Link href="/contact" className="mock-btn">
              Schedule a Solution Briefing
            </Link>
          </div>
        </div>
      </section>

      <section className="mock-section">
        <div className="mock-container">
          <div className="mock-section-header">
            <p className="mock-eyebrow">Core Solutions</p>
            <h2>Focused support for the issues that slow performance.</h2>
          </div>

          <div className="mock-grid-2">
            {coreSolutions.map((solution, index) => (
              <article className="mock-card" key={solution.title}>
                <h3>
                  {index + 1}. {solution.title}
                </h3>

                <h4>The Challenge</h4>
                {solution.challenge.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                <h4>What We Do</h4>
                <p>{solution.whatWeDo}</p>

                <h4>Key Areas of Focus</h4>
                <ul className="mock-bullet-list">
                  {solution.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h4>Typical Outcomes</h4>
                <ul className="mock-bullet-list">
                  {solution.outcomes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mock-cta">
        <div className="mock-container">
          <h2>Let&apos;s Start With the Challenge.</h2>

          <p>
            Whether the issue involves cash flow, reporting, workflow bottlenecks,
            project execution, leadership transitions, or operational performance,
            the first step is understanding where performance is being lost.
          </p>

          <p>
            Let&apos;s have a practical conversation about your goals and the
            challenges standing in the way of achieving them.
          </p>

          <Link href="/contact" className="mock-btn">
            Schedule a Diagnostic Conversation
          </Link>
        </div>
      </section>
    </main>
  )
}
