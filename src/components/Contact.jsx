import MagneticButton from './MagneticButton'
import { CONTACT_FORM_URL, EMAIL, PHONE, PHONE_HREF, WHATSAPP_URL } from '../lib/constants'
import { WordReveal, FadeUp, Rule } from '../lib/anim'

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-wisteria/10">
      {/* Closing glow mirrors the hero — the page ends where it began */}
      <div
        aria-hidden="true"
        className="glow absolute -bottom-40 left-1/2 h-[30rem] w-[42rem] -translate-x-1/2 rounded-full"
      />

      <div className="relative mx-auto max-w-page px-5 py-24 sm:px-8 sm:py-36">
        <div className="max-w-3xl">
          <p className="eyebrow mb-6">Contact</p>
          <WordReveal
            as="h2"
            className="font-display text-4xl font-medium leading-[1.08] tracking-headline sm:text-6xl"
          >
            Have a project in mind? <em className="italic text-lilac">Tell me about it.</em>
          </WordReveal>
          <FadeUp
            as="p"
            className="mt-6 max-w-md text-base leading-relaxed text-parchment-dim sm:text-lg"
          >
            Share a few details in the form, or skip the typing and call — I
            answer both within a day.
          </FadeUp>

          <FadeUp className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton href={CONTACT_FORM_URL} data-cursor="Go" className="px-9 py-4 text-base">
              Let&rsquo;s work together
            </MagneticButton>
            <MagneticButton href={PHONE_HREF} variant="ghost" arrow={false} data-cursor="Call">
              <PhoneIcon /> Call me
            </MagneticButton>
            <MagneticButton href={WHATSAPP_URL} variant="ghost" arrow={false} data-cursor="Chat">
              <WhatsAppIcon /> WhatsApp
            </MagneticButton>
          </FadeUp>

          <Rule className="mt-14 w-2/3" />
          <div className="mt-6 flex flex-col gap-2 text-sm text-parchment-faint sm:flex-row sm:gap-8">
            <a href={`mailto:${EMAIL}`} className="min-h-[44px] py-2 transition-colors hover:text-lilac">
              {EMAIL}
            </a>
            <a href={PHONE_HREF} className="min-h-[44px] py-2 transition-colors hover:text-lilac">
              {PHONE}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.42.25-.7.25-1.29.18-1.42-.08-.12-.28-.2-.57-.35zM12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 0 1 7 2.9 9.83 9.83 0 0 1 2.89 7c0 5.45-4.44 9.87-9.9 9.87zm8.42-18.29A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.33.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.16-3.47-8.41z" />
    </svg>
  )
}
