import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <h3>Prosperity Heritage Advisory</h3>
          <p>
            Helping leadership teams strengthen billing, collections, revenue
            control, and financial visibility so revenue converts into more
            predictable cash performance.
          </p>
        </div>

        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  )
}
