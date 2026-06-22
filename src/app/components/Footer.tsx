import Link from 'next/link'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/partnerships', label: 'Partnerships' },
  { href: '/industries', label: 'Industries' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <h3>Prosperity Heritage Solutions</h3>

          <p className="footer-tagline">
            Operational & Financial Execution Partner
          </p>

          <p className="footer-positioning">
            The Execution Arm for Advisory Firms
          </p>

          <p>
            Helping organizations recover hidden profit, improve execution,
            strengthen financial visibility, and scale with confidence.
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
          <span>
            © {new Date().getFullYear()} Prosperity Heritage Solutions
          </span>
        </div>
      </div>
    </footer>
  )
}
