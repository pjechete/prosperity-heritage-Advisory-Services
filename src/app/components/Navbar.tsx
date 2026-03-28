'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          <span className="brand-main">Prosperity Heritage</span>
          <span className="brand-sub">Advisory</span>
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname?.startsWith(link.href)

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="header-cta">
          <Link href="/contact" className="btn btn-primary btn-sm">
            Book a Consultation
          </Link>
        </div>
      </div>
    </header>
  )
}
