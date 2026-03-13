import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <section style={{ padding: '80px 32px' }}>
        <h1>Turn Revenue Into Predictable Cash</h1>

        <p>
          Prosperity Heritage Advisory helps companies strengthen billing,
          collections, and revenue control so revenue converts into more
          predictable cash performance.
        </p>
      </section>

      <Footer />
    </main>
  )
}
