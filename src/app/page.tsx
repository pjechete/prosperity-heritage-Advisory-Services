import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <main>
      <Navbar/>

      <section style={{padding:"80px"}}>
        <h1>Turn Revenue Into Predictable Cash</h1>

        <p>
          Prosperity Heritage Advisory helps companies strengthen
          billing discipline, collections performance, and revenue
          control so revenue consistently converts into reliable cash.
        </p>
      </section>

      <Footer/>
    </main>
  )
}
