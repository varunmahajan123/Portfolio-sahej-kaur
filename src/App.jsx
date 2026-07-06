import { useLenis } from './lib/useLenis'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Work from './components/Work'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import StickyCTA from './components/StickyCTA'

export default function App() {
  useLenis()

  return (
    <div className="grain relative">
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Work />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  )
}
