import { motion } from 'framer-motion'
import { viewportOnce } from '../lib/motion'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-page px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow"
        >
          About
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-display text-2xl font-medium leading-snug tracking-headline text-parchment sm:text-3xl">
            Most designers make things look good. Most marketers know what
            converts. I do both — so every reel, post, page, and deck is built
            to <em className="italic text-lilac">perform</em>, not just to be
            pretty.
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-parchment-dim">
            Based in New Delhi, I work with startups, companies, and
            professionals who want their digital presence handled end to end —
            one point of contact, strategy through final file.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
