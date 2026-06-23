'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/solutions', label: 'Solutions' },
  { href: '/partnerships', label: 'Partnerships' },
  { href: '/industries', label: 'Industries' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          href="/"
          className="brand"
          aria-label="Prosperity Heritage Solutions homepage"
        >
          <Image
            src="/logo.png"
            alt="Prosperity Heritage Solutions"
            width={240}
            height={75}
            priority
            className="logo"
          />
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = pathname?.startsWith(link.href)

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
          <Link href="/contact" className="btn btn-sm secondary">
            Schedule a Diagnostic Conversation
          </Link>
        </div>
      </div>
    </header>
  )
}
