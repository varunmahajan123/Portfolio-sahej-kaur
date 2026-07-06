import { motion } from 'framer-motion'
import { CONTACT_FORM_URL } from '../lib/constants'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
]

export default function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="absolute inset-x-0 top-0 z-40"
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-page items-center justify-between px-5 py-5 sm:px-8"
      >
        <a href="#top" className="font-display text-lg font-medium tracking-tight">
          Sahej Kaur
        </a>

        <div className="hidden items-center gap-8 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-parchment-dim transition-colors hover:text-parchment"
            >
              {l.label}
            </a>
          ))}
          <a
            href={CONTACT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-wisteria/40 px-5 py-2 text-sm font-medium text-lilac transition-colors hover:border-lilac hover:text-parchment"
          >
            Let&rsquo;s work together
          </a>
        </div>

        {/* Mobile: nav stays minimal — the sticky CTA handles conversion */}
        <a
          href="#work"
          className="rounded-full border border-wisteria/40 px-4 py-2 text-sm font-medium text-lilac sm:hidden"
        >
          See work
        </a>
      </nav>
    </motion.header>
  )
}
