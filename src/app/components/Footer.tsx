import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <h3>Prosperity Heritage Advisory</h3>

          <p>
            Practical operational and financial support for growing organizations
            facing workflow breakdowns, reporting challenges, cash flow pressure,
            and execution issues.
          </p>
        </div>

        <div>
          <h4>Common Areas We Support</h4>

          <ul>
            <li>Billing, collections & cash flow</li>
            <li>Operations & workflow support</li>
            <li>Financial reporting & process improvement</li>
            <li>Growth, change & special projects</li>
          </ul>
        </div>

        <div>
          <h4>Who We Work With</h4>

          <ul>
            <li>Healthcare & medical practices</li>
            <li>Construction & field services</li>
            <li>Logistics & multi-location businesses</li>
            <li>Professional service firms</li>
          </ul>
        </div>

        <div>
          <h4>Start the Conversation</h4>

          <p>
            You do not need to have all the answers before reaching out. We can
            start with a practical conversation about what is creating pressure.
          </p>

          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:info@phs-usa.com">info@phs-usa.com</a>
          </p>

          <Link href="/contact" className="footer-link">
            Schedule a Conversation →
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} Prosperity Heritage Advisory</span>

          <span>Assess • Improve • Ongoing Support</span>
        </div>
      </div>
    </footer>
  )
}
