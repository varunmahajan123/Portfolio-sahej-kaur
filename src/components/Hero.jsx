import { useLayoutEffect, useRef } from 'react'
import MagneticButton from './MagneticButton'
import { CONTACT_FORM_URL } from '../lib/constants'
import { gsap, prefersReducedMotion, isFinePointer } from '../lib/gsap'

/* Hero choreography: once the loader lifts, headline lines rise from
   behind masks, then eyebrow → subtext → CTAs → portrait stagger in.
   On desktop the glow orb and portrait drift gently with the mouse. */
export default function Hero({ ready }) {
  const root = useRef(null)
  const orbRef = useRef(null)
  const cardRef = useRef(null)

  /* Hide choreographed elements immediately on mount (no flash),
     but leave everything visible under reduced motion. */
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      gsap.set('[data-hero-line]', { yPercent: 115 })
      gsap.set('[data-hero-fade]', { autoAlpha: 0, y: 26 })
      gsap.set(cardRef.current, { autoAlpha: 0, y: 30, rotate: 6 })
    }, root)
    return () => ctx.revert()
  }, [])

  useLayoutEffect(() => {
    if (!ready || prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })
      tl.to('[data-hero-line]', { yPercent: 0, duration: 1.1, stagger: 0.14 }, 0.05)
        .to('[data-hero-fade]', { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.1 }, 0.5)
        .to(cardRef.current, { autoAlpha: 1, y: 0, rotate: 2, duration: 1.1 }, 0.65)
    }, root)
    return () => ctx.revert()
  }, [ready])

  /* Mouse parallax — fine pointers only, transforms only */
  useLayoutEffect(() => {
    if (!isFinePointer() || prefersReducedMotion()) return
    const orbX = gsap.quickTo(orbRef.current, 'x', { duration: 0.9, ease: 'power3' })
    const orbY = gsap.quickTo(orbRef.current, 'y', { duration: 0.9, ease: 'power3' })
    const cardX = gsap.quickTo(cardRef.current, 'x', { duration: 1.1, ease: 'power3' })
    const cardY = gsap.quickTo(cardRef.current, 'y', { duration: 1.1, ease: 'power3' })
    const onMove = (e) => {
      const nx = e.clientX / window.innerWidth - 0.5
      const ny = e.clientY / window.innerHeight - 0.5
      orbX(nx * 46)
      orbY(ny * 34)
      cardX(nx * -16)
      cardY(ny * -10)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section ref={root} id="top" className="relative overflow-hidden">
      {/* Single light source: pink-magenta glow that follows the mouse */}
      <div
        ref={orbRef}
        aria-hidden="true"
        className="glow absolute -left-40 -top-24 h-[34rem] w-[34rem] rounded-full will-change-transform sm:-left-24"
      />

      <div className="relative mx-auto grid max-w-page grid-cols-1 items-end gap-12 px-5 pb-16 pt-28 sm:px-8 sm:pt-36 lg:grid-cols-[1.6fr_1fr] lg:pb-24">
        <div>
          <p data-hero-fade className="eyebrow mb-6">
            Digital Marketer · Graphic Design · Content Creation
          </p>

          <h1 className="font-display text-[2.6rem] font-medium leading-[1.06] tracking-headline text-parchment sm:text-6xl lg:text-7xl">
            <span className="block overflow-hidden pb-1">
              <span data-hero-line className="block will-change-transform">
                Design that makes
              </span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span data-hero-line className="block will-change-transform">
                brands worth a{' '}
                <em className="font-display font-medium italic text-lilac">second look.</em>
              </span>
            </span>
          </h1>

          <p
            data-hero-fade
            className="mt-7 max-w-md text-base leading-relaxed text-parchment-dim sm:text-lg"
          >
            I create reels, social creatives, websites, and presentations for
            startups, companies, and professionals — strategy first, designed to
            convert.
          </p>

          <div data-hero-fade className="mt-9 flex flex-wrap items-center gap-5">
            <MagneticButton href={CONTACT_FORM_URL} data-cursor="Go">
              Let&rsquo;s work together
            </MagneticButton>
            <a
              href="#work"
              className="inline-flex min-h-[48px] items-center text-sm font-medium text-lilac underline decoration-wisteria/40 underline-offset-8 transition-colors hover:text-parchment"
            >
              See the work
            </a>
          </div>
        </div>

        {/* Portrait: small, tilted, secondary — trust, not spectacle.
            DROP THE REAL PHOTO AT public/assets/sahej.jpg */}
        <figure ref={cardRef} className="justify-self-start will-change-transform lg:justify-self-end">
          <div className="relative aspect-[4/5] w-44 overflow-hidden rounded-[1.4rem] border border-wisteria/25 bg-gradient-to-br from-plum-600 to-plum-800 shadow-[0_24px_60px_-20px_rgba(30,10,60,0.7)] sm:w-52">
            {/* Monogram shows only until the real photo is dropped in */}
            <div
              aria-hidden="true"
              className="absolute inset-0 grid place-items-center font-display text-5xl italic text-wisteria/40"
            >
              SK
            </div>
            <img
              src="/assets/sahej.jpg"
              alt="Sahej Kaur, digital marketer and designer, smiling in a black blazer"
              width="416"
              height="520"
              loading="eager"
              fetchpriority="high"
              className="absolute inset-0 h-full w-full object-cover object-top"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
          </div>
          <figcaption className="mt-3 pl-1 text-xs text-parchment-faint">
            Sahej Kaur — New Delhi
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
