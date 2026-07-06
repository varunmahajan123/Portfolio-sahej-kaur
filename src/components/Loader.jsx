import { useLayoutEffect, useRef } from 'react'
import { gsap, prefersReducedMotion } from '../lib/gsap'

/* Branded intro: "Sahej Kaur" mask-reveals, a thin line fills,
   then the whole veil wipes up while the hero staggers in.
   Total ≈ 1.7s. Skipped instantly under prefers-reduced-motion. */
export default function Loader({ onReady }) {
  const ref = useRef(null)
  const done = useRef(false)
  const fire = () => {
    if (!done.current) {
      done.current = true
      onReady()
    }
  }

  useLayoutEffect(() => {
    if (prefersReducedMotion()) {
      gsap.set(ref.current, { display: 'none' })
      fire()
      return
    }
    const ctx = gsap.context(() => {
      gsap.set('[data-loader-word]', { yPercent: 120 })
      const tl = gsap.timeline()
      tl.to('[data-loader-word]', {
        yPercent: 0,
        duration: 0.7,
        ease: 'expo.out',
        stagger: 0.08,
        delay: 0.1,
      })
        .to('[data-loader-line]', { scaleX: 1, duration: 0.75, ease: 'power2.inOut' }, 0.25)
        .add(fire, 1.05) /* hero starts as the veil begins to lift */
        .to(ref.current, { yPercent: -100, duration: 0.8, ease: 'expo.inOut' }, 1.1)
        .set(ref.current, { display: 'none' })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed inset-0 z-[70] flex flex-col items-center justify-center gap-5 bg-gradient-to-br from-plum-900 via-plum-950 to-[#241263]"
    >
      <p className="overflow-hidden font-display text-3xl font-medium tracking-tight text-parchment sm:text-4xl">
        <span data-loader-word className="inline-block">
          Sahej
        </span>{' '}
        <span data-loader-word className="inline-block italic text-lilac">
          Kaur
        </span>
      </p>
      <div className="h-px w-40 overflow-hidden bg-white/10">
        <div
          data-loader-line
          className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-mauve-glow to-wisteria"
        />
      </div>
    </div>
  )
}
