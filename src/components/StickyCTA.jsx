import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CONTACT_FORM_URL } from '../lib/constants'

/* Mobile-only floating CTA. Appears once the visitor scrolls past
   the hero, disappears when the contact section is on screen
   (its own big CTA takes over). */
export default function StickyCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const contact = document.getElementById('contact')
    let pastHero = false
    let contactVisible = false

    const update = () => setShow(pastHero && !contactVisible)

    const onScroll = () => {
      pastHero = window.scrollY > window.innerHeight * 0.7
      update()
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    const io = new IntersectionObserver(
      ([entry]) => {
        contactVisible = entry.isIntersecting
        update()
      },
      { threshold: 0.15 },
    )
    if (contact) io.observe(contact)

    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-5 z-50 flex justify-center px-5 sm:hidden"
        >
          <a
            href={CONTACT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[52px] w-full max-w-sm items-center justify-center gap-2 rounded-full bg-lilac px-8 font-sans text-[0.95rem] font-semibold text-plum-950 shadow-[0_16px_40px_-8px_rgba(20,12,32,0.8)]"
          >
            Let&rsquo;s work together
            <span aria-hidden="true" className="text-lg leading-none">→</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
