import Link from 'next/link'

const solutionLinks = [
  { href: '/solutions', label: 'Profit Recovery Assessment' },
  { href: '/solutions', label: 'Revenue & Cash Flow Performance' },
  { href: '/solutions', label: 'Operational Performance Improvement' },
  { href: '/solutions', label: 'Financial Visibility & Accountability' },
  { href: '/solutions', label: 'Interim Leadership & Project Execution' },
]

const quickLinks = [
  { href: '/partnerships', label: 'Partnerships' },
  { href: '/industries', label: 'Industries' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/insights', label: 'Insights' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner footer-grid">
        <div className="footer-brand">
          <h3>Prosperity Heritage Solutions</h3>

          <p className="footer-tagline">
            Operational & Financial Execution Partner
          </p>

          <p className="footer-positioning">
            Recover Hidden Profit. Improve Execution. Scale With Confidence.
          </p>

          <p>
            PHS helps organizations and advisory firms identify operational and
            financial leakage, implement practical improvements, and provide
            execution capacity when internal teams are stretched thin.
          </p>

          <a href="mailto:info@phs-usa.com" className="footer-email">
            info@phs-usa.com
          </a>
        </div>

        <div className="footer-column">
          <h4>Solutions</h4>

          <nav className="footer-list" aria-label="Footer solutions navigation">
            {solutionLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>

          <nav className="footer-list" aria-label="Footer navigation">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>Built by Practitioners. Focused on Measurable Outcomes.</span>
          <span>© {new Date().getFullYear()} Prosperity Heritage Solutions</span>
        </div>
      </div>
    </footer>
  )
}
