import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CONTACT_FORM_URL, PHONE_HREF } from '../lib/constants'

/* Mobile-only floating action bar: primary contact + one-tap call.
   Appears past the hero, hands off when the contact section arrives. */
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
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 sm:hidden"
        >
          <div className="flex w-full max-w-sm items-center gap-2 rounded-full border border-wisteria/25 bg-plum-950/80 p-1.5 shadow-[0_16px_40px_-8px_rgba(30,10,60,0.85)] backdrop-blur-md">
            <a
              href={CONTACT_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-gradient inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full px-5 font-sans text-[0.9rem] font-semibold"
            >
              Let&rsquo;s work together
            </a>
            <a
              href={PHONE_HREF}
              aria-label="Call Sahej Kaur"
              className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center rounded-full border border-wisteria/40 text-lilac"
            >
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
