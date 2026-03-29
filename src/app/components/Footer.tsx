import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-about">
          <h3>Prosperity Heritage Advisory</h3>
          <p>
            Prosperity Heritage Advisory helps leadership teams strengthen billing
            discipline, collections performance, revenue integrity, financial
            visibility, and operational finance execution so revenue converts into
            more predictable cash outcomes.
          </p>
        </div>

        <div className="footer-services">
          <h4>Advisory Focus</h4>
          <ul>
            <li>Revenue Control &amp; Cash Stabilization</li>
            <li>Billing &amp; Collections Optimization</li>
            <li>Revenue Integrity &amp; Reconciliation</li>
            <li>Financial Controls &amp; Visibility</li>
            <li>M&amp;A Transition &amp; Operational Stabilization</li>
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

        <div className="footer-cta">
          <h4>Work With Us</h4>
          <p>
            If revenue growth is not translating into predictable cash performance,
            we can help identify and strengthen the systems behind it.
          </p>

          <Link href="/contact" className="btn-secondary">
            Schedule Consultation
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>
            © {new Date().getFullYear()} Prosperity Heritage Advisory. All rights reserved.
          </span>
          <span>Revenue Control &amp; Cash Stabilization Advisory</span>
        </div>
      </div>
    </footer>
  )
}
