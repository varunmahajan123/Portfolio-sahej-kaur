import { useEffect, useRef, useState } from 'react'
import { gsap, prefersReducedMotion, isFinePointer } from '../lib/gsap'

/* Smooth-following cursor dot (desktop pointers only). Grows and
   shows a verb when hovering anything tagged data-cursor="View" /
   "Play" / "Go". Never rendered on touch or reduced-motion. */
export default function Cursor() {
  const ref = useRef(null)
  const [label, setLabel] = useState('')
  const [moved, setMoved] = useState(false)
  const [enabled] = useState(() => isFinePointer() && !prefersReducedMotion())

  useEffect(() => {
    if (!enabled) return
    const el = ref.current
    gsap.set(el, { xPercent: -50, yPercent: -50 })
    const xTo = gsap.quickTo(el, 'x', { duration: 0.35, ease: 'power3' })
    const yTo = gsap.quickTo(el, 'y', { duration: 0.35, ease: 'power3' })

    const onMove = (e) => {
      setMoved(true)
      xTo(e.clientX)
      yTo(e.clientY)
    }
    const onOver = (e) => {
      const t = e.target.closest('[data-cursor]')
      setLabel(t ? t.dataset.cursor : '')
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [enabled])

  if (!enabled) return null
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-[65] flex items-center justify-center rounded-full transition-[width,height,background-color,opacity] duration-300 ease-out ${moved ? 'opacity-100' : 'opacity-0'} ${
        label
          ? 'h-[4.5rem] w-[4.5rem] bg-lilac/95 text-plum-950'
          : 'h-2.5 w-2.5 bg-lilac/80'
      }`}
    >
      {label && <span className="text-xs font-semibold uppercase tracking-widest">{label}</span>}
    </div>
  )
}
