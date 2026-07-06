import { WordReveal, FadeUp } from '../lib/anim'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-page px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <p className="eyebrow">About</p>

        <div>
          <WordReveal
            as="p"
            className="font-display text-2xl font-medium leading-snug tracking-headline text-parchment sm:text-3xl"
          >
            Most designers make things look good. Most marketers know what
            converts. I do both — so every reel, post, page, and deck is built
            to <em className="italic text-lilac">perform</em>, not just to be
            pretty.
          </WordReveal>
          <FadeUp
            as="p"
            className="mt-6 max-w-xl text-base leading-relaxed text-parchment-dim"
          >
            Based in New Delhi, I work with startups, companies, and
            professionals who want their digital presence handled end to end —
            one point of contact, strategy through final file.
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
