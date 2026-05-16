'use client'

import Link from 'next/link'
import Image from 'next/image'
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
        <Link href="/" className="brand" aria-label="Prosperity Heritage Advisory homepage">
          <Image
            src="/logo.png"
            alt="Prosperity Heritage Advisory"
            width={250}
            height={78}
            priority
            className="logo"
          />
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
            Schedule a Conversation
          </Link>
        </div>
      </div>
    </header>
  )
}
