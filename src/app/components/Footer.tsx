import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">

        {/* BRAND */}
        <div>
          <h3>Prosperity Heritage Advisory</h3>
          <p>
            Practitioner-led advisory focused on revenue control, cash visibility,
            and execution discipline. We support leadership teams across healthcare,
            public sector, and complex operating environments where performance
            depends on execution.
          </p>
        </div>

        {/* CORE SERVICES */}
        <div>
          <h4>Core Advisory</h4>
          <ul>
            <li>Revenue Control & Cash Stabilization</li>
            <li>Revenue Process Alignment</li>
            <li>Billing & Collections Execution</li>
            <li>Financial Visibility & Reporting</li>
          </ul>
        </div>

        {/* STRATEGIC ENGAGEMENTS */}
        <div>
          <h4>Strategic Engagements</h4>
          <ul>
            <li>Public Sector Advisory</li>
            <li>Healthcare & Turnkey Projects</li>
            <li>Global Investment & Trade</li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h4>Start Here</h4>
          <p>
            If revenue is not translating into predictable cash, or execution
            complexity is limiting performance, we can help identify where
            improvement is needed.
          </p>

          <Link href="/contact" className="btn btn-secondary">
            Schedule a Diagnostic
          </Link>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} Prosperity Heritage Advisory</span>
          <span>Revenue Control • Cash Visibility • Execution Discipline</span>
        </div>
      </div>
    </footer>
  )
}
