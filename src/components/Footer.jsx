import { EMAIL, PHONE, PHONE_HREF, LOCATION } from '../lib/constants'

/* Update these hrefs with real profiles when ready */
const socials = [
  { label: 'Instagram', href: 'https://instagram.com/' },
  { label: 'LinkedIn', href: 'https://linkedin.com/' },
  { label: 'Behance', href: 'https://behance.net/' },
]

export default function Footer() {
  return (
    <footer className="border-t border-wisteria/10 bg-plum-950/60">
      <div className="mx-auto flex max-w-page flex-col gap-6 px-5 py-10 text-sm text-parchment-faint sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-base text-parchment">Sahej Kaur</p>
          <p className="mt-1">{LOCATION}</p>
        </div>

        <div className="flex flex-col gap-1 sm:text-right">
          <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-lilac">
            {EMAIL}
          </a>
          <a href={PHONE_HREF} className="transition-colors hover:text-lilac">
            {PHONE}
          </a>
        </div>

        <nav aria-label="Social links" className="flex gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] py-2 transition-colors hover:text-lilac"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
