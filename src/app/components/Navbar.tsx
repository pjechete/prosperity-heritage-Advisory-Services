import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link href="/" className="brand brand-logo">
          <Image
            src="/logo.png"
            alt="Prosperity Heritage Advisory"
            width={220}
            height={72}
            priority
          />
        </Link>

        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link href="/contact" className="btn-primary nav-cta">
          Book a Consultation
        </Link>
      </div>
    </header>
  )
}
