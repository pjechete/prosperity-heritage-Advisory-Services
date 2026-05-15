import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">

        {/* BRAND */}
        <div>
          <h3>Prosperity Heritage Advisory</h3>

          <p>
            Operational advisory support for organizations seeking stronger
            visibility, execution discipline, organizational coordination,
            stability, and sustainable growth across complex environments.
          </p>
        </div>

        {/* ADVISORY FOCUS */}
        <div>
          <h4>Advisory Focus</h4>

          <ul>
            <li>Operational Diagnostics & Assessment</li>
            <li>Execution & Workflow Alignment</li>
            <li>Visibility & Operational Controls</li>
            <li>Revenue Execution & Cash Stabilization</li>
          </ul>
        </div>

        {/* STRATEGIC ENVIRONMENTS */}
        <div>
          <h4>Strategic Environments</h4>

          <ul>
            <li>Healthcare Operations</li>
            <li>Public Sector & Complex Systems</li>
            <li>Transformation & Stabilization</li>
            <li>Global Advisory Initiatives</li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h4>Start Here</h4>

          <p>
            Organizations often experience pressure long before the underlying
            issue becomes fully visible. We help leadership teams assess where
            operational clarity, coordination, visibility, or execution may be
            limiting performance.
          </p>

          <Link href="/contact" className="btn btn-secondary">
            Schedule a Diagnostic Conversation
          </Link>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>
            © {new Date().getFullYear()} Prosperity Heritage Advisory
          </span>

          <span>
            Stability • Visibility • Execution • Sustainable Growth
          </span>
        </div>
      </div>
    </footer>
  )
}
