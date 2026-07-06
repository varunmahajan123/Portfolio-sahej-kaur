import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger, prefersReducedMotion } from './gsap'

/* Inertia scroll (Lenis) driven by GSAP's ticker and kept in sync
   with ScrollTrigger — the backbone of the motion system.
   Skipped entirely under prefers-reduced-motion: native scroll wins. */
export function useLenis() {
  useEffect(() => {
    if (prefersReducedMotion()) return

    const lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 1 })
    lenis.on('scroll', ScrollTrigger.update)

    const tick = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    // Anchor links scroll through Lenis so momentum stays consistent
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const target = document.querySelector(a.getAttribute('href'))
      if (!target) return
      e.preventDefault()
      lenis.scrollTo(target, { offset: -8, duration: 1.4 })
    }
    document.addEventListener('click', onClick)

    // Re-measure triggers once fonts/images have settled
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)

    return () => {
      document.removeEventListener('click', onClick)
      window.removeEventListener('load', refresh)
      gsap.ticker.remove(tick)
      lenis.destroy()
    }
  }, [])
}
