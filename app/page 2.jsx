import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Nav />

      <div className="flex-1">
        <Hero />
        <Features />
      </div>

      <Footer />
    </main>
  )
}
