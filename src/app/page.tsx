import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <section style={{
        padding:"120px 32px",
        maxWidth:"1100px",
        margin:"0 auto"
      }}>

        <h1 style={{
          fontSize:"48px",
          lineHeight:"1.1",
          marginBottom:"20px"
        }}>
          Revenue Growth Should Lead to Stronger Cash Performance
        </h1>

        <p style={{
          fontSize:"20px",
          maxWidth:"700px",
          color:"#475569"
        }}>
          Prosperity Heritage Advisory helps leadership teams strengthen
          billing discipline, collections performance, and revenue control
          so revenue consistently converts into predictable cash.
        </p>

        <div style={{marginTop:"40px"}}>
          <button style={{
            background:"#0ea5a4",
            color:"white",
            padding:"14px 22px",
            border:"none",
            borderRadius:"8px",
            fontWeight:"600",
            marginRight:"12px",
            cursor:"pointer"
          }}>
            Schedule Consultation
          </button>

          <button style={{
            padding:"14px 22px",
            border:"1px solid #cbd5e1",
            borderRadius:"8px",
            fontWeight:"600",
            background:"white",
            cursor:"pointer"
          }}>
            View Services
          </button>
        </div>

      </section>

      <Footer />
    </main>
  )
}
