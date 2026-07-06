import { useEffect } from 'react'
import Lenis from 'lenis'

/* Buttery smooth scrolling. Skipped entirely when the visitor
   prefers reduced motion — native scroll takes over. */
export function useLenis() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({ lerp: 0.12, wheelMultiplier: 1 })

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])
}
