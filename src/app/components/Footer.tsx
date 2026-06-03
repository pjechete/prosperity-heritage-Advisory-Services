import Link from 'next/link'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <h3>Prosperity Heritage Advisory</h3>

          <p>
            Practical operational and financial support for organizations
            navigating workflow, reporting, cash flow, growth, and change.
          </p>

          <a href="mailto:info@phs-usa.com" className="footer-email">
            info@phs-usa.com
          </a>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} Prosperity Heritage Advisory</span>
        </div>
      </div>
    </footer>
  )
}
