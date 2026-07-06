import { useEffect, useState } from 'react'
import { useLenis } from './lib/useLenis'
import Loader from './components/Loader'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
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
  /* `ready` flips when the intro loader lifts; the hero waits for it */
  const [ready, setReady] = useState(false)

  useEffect(() => {
    document.body.style.overflow = ready ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [ready])

  return (
    <div className="grain relative">
      <Loader onReady={() => setReady(true)} />
      <ScrollProgress />
      <Cursor />
      <Nav />
      <main>
        <Hero ready={ready} />
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
