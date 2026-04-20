import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">

        <div>
          <h3>Prosperity Heritage Advisory</h3>
          <p>
            We help leadership teams identify where revenue breaks down and
            strengthen the systems that convert revenue into predictable cash.
          </p>
        </div>

        <div>
          <h4>Focus Areas</h4>
          <ul>
            <li>Revenue Control</li>
            <li>Cash Stabilization</li>
            <li>Billing & Collections</li>
            <li>Financial Visibility</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div>
          <h4>Start Here</h4>
          <p>
            If revenue is not translating into predictable cash,
            we can help identify where the breakdown is occurring.
          </p>

          <Link href="/contact" className="btn btn-secondary">
            Schedule Diagnostic
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} Prosperity Heritage Advisory</span>
          <span>Revenue Control & Cash Stabilization</span>
        </div>
      </div>
    </footer>
  )
}
