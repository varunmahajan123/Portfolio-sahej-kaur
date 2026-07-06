import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'
import { CONTACT_FORM_URL, EMAIL, PHONE, PHONE_HREF } from '../lib/constants'
import { viewportOnce } from '../lib/motion'

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-wisteria/10">
      {/* Closing glow mirrors the hero — the page ends where it began */}
      <div
        aria-hidden="true"
        className="glow absolute -bottom-40 left-1/2 h-[30rem] w-[42rem] -translate-x-1/2 rounded-full"
      />

      <div className="relative mx-auto max-w-page px-5 py-24 sm:px-8 sm:py-36">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="eyebrow mb-6">Contact</p>
          <h2 className="font-display text-4xl font-medium leading-[1.08] tracking-headline sm:text-6xl">
            Have a project in mind?{' '}
            <em className="italic text-lilac">Tell me about it.</em>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-parchment-dim sm:text-lg">
            Share a few details in the form and I&rsquo;ll get back to you within a
            day.
          </p>

          <div className="mt-10">
            <MagneticButton href={CONTACT_FORM_URL} className="px-9 py-4 text-base">
              Let&rsquo;s work together
            </MagneticButton>
          </div>

          <div className="mt-12 flex flex-col gap-2 text-sm text-parchment-faint sm:flex-row sm:gap-8">
            <a href={`mailto:${EMAIL}`} className="min-h-[44px] py-2 transition-colors hover:text-lilac">
              {EMAIL}
            </a>
            <a href={PHONE_HREF} className="min-h-[44px] py-2 transition-colors hover:text-lilac">
              {PHONE}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
