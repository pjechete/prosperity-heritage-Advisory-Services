import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        {/* BRAND */}
        <div className="footer-brand">
          <h3>Prosperity Heritage Advisory</h3>

          <p>
            Advisory support focused on operational visibility, execution
            discipline, organizational stability, and sustainable growth.
          </p>
        </div>

        {/* AREAS OF FOCUS */}
        <div>
          <h4>Areas of Focus</h4>

          <ul>
            <li>Operational Diagnostics</li>
            <li>Revenue Execution & Cash Stabilization</li>
            <li>Workflow Alignment & Visibility</li>
            <li>Leadership & Organizational Coordination</li>
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
          <h4>Begin the Conversation</h4>

          <p>
            Organizations often experience pressure before the root issue becomes
            fully visible. We help leadership teams assess where visibility,
            coordination, and execution may be affecting performance.
          </p>

          <Link href="/contact" className="footer-link">
            Contact Advisory Team →
          </Link>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} Prosperity Heritage Advisory</span>

          <span>Stability • Visibility • Execution • Sustainable Growth</span>
        </div>
      </div>
    </footer>
  )
}
