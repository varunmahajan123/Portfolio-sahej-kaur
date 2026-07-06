import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'
import { CONTACT_FORM_URL } from '../lib/constants'
import { maskReveal, fadeUp } from '../lib/motion'

/* Headline lines animate in as masked reveals, one after another.
   The italic Fraunces phrase is the page's voice — everything else
   around it stays quiet. */
const lines = [
  <>Design that makes</>,
  <>
    brands worth a{' '}
    <em className="font-display font-medium italic text-lilac">second look.</em>
  </>,
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Single light source: soft rose-mauve glow, top-left of the headline */}
      <div
        aria-hidden="true"
        className="glow absolute -left-40 -top-24 h-[34rem] w-[34rem] rounded-full sm:-left-24"
      />

      <div className="relative mx-auto grid max-w-page grid-cols-1 items-end gap-12 px-5 pb-16 pt-28 sm:px-8 sm:pt-36 lg:grid-cols-[1.6fr_1fr] lg:pb-24">
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="eyebrow mb-6"
          >
            Digital Marketer · Graphic Design · Content Creation
          </motion.p>

          <h1 className="font-display text-[2.6rem] font-medium leading-[1.06] tracking-headline text-parchment sm:text-6xl lg:text-7xl">
            {lines.map((line, i) => (
              <span key={i} className="block overflow-hidden pb-1">
                <motion.span
                  className="block"
                  variants={maskReveal}
                  initial="hidden"
                  animate="visible"
                  custom={i + 1}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="mt-7 max-w-md text-base leading-relaxed text-parchment-dim sm:text-lg"
          >
            I create reels, social creatives, websites, and presentations for
            startups, companies, and professionals — strategy first, designed to
            convert.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
            className="mt-9 flex flex-wrap items-center gap-5"
          >
            <MagneticButton href={CONTACT_FORM_URL}>
              Let&rsquo;s work together
            </MagneticButton>
            <a
              href="#work"
              className="inline-flex min-h-[48px] items-center text-sm font-medium text-lilac underline decoration-wisteria/40 underline-offset-8 transition-colors hover:text-parchment"
            >
              See the work
            </a>
          </motion.div>
        </div>

        {/* Portrait: small, tilted, secondary — trust, not spectacle.
            DROP THE REAL PHOTO AT public/assets/sahej.jpg */}
        <motion.figure
          initial={{ opacity: 0, y: 24, rotate: 4 }}
          animate={{ opacity: 1, y: 0, rotate: 2 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="justify-self-start lg:justify-self-end"
        >
          <div className="relative aspect-[4/5] w-44 overflow-hidden rounded-[1.4rem] border border-wisteria/25 bg-gradient-to-br from-plum-600 to-plum-800 shadow-[0_24px_60px_-20px_rgba(20,12,32,0.7)] sm:w-52">
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
        </motion.figure>
      </div>
    </section>
  )
}
