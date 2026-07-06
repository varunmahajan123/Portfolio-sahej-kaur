import { motion } from 'framer-motion'
import { WordReveal, Rule } from '../lib/anim'
import { viewportOnce } from '../lib/motion'

const services = [
  {
    title: 'Reels & video content',
    body: 'Short-form video built to hold attention — concept, edit, captions, and a hook that earns the first three seconds.',
  },
  {
    title: 'Static social creatives',
    body: 'Feed posts, carousels, and campaign graphics that keep a brand consistent and worth following.',
  },
  {
    title: 'Website design',
    body: 'Landing pages and full sites designed around one job: turning a visit into an enquiry.',
  },
  {
    title: 'Presentation design',
    body: 'Pitch decks, sales decks, and reports that make the room lean in — clear story, clean slides.',
  },
]

export default function Services() {
  return (
    <section id="services" className="border-y border-wisteria/10 bg-plum-900/40">
      <div className="mx-auto max-w-page px-5 py-20 sm:px-8 sm:py-28">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-5">Services</p>
          <WordReveal
            as="h2"
            className="font-display text-3xl font-medium leading-tight tracking-headline sm:text-5xl"
          >
            Anything your business needs designed —{' '}
            <em className="italic text-lilac">made by one person</em> who gets the
            whole picture.
          </WordReveal>
          <Rule className="mt-7 w-1/2" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 34, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-wisteria/15 bg-plum-800/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-wisteria/45 hover:shadow-[0_24px_60px_-20px_rgba(192,38,211,0.4)] sm:p-8"
            >
              <h3 className="font-display text-xl font-medium text-parchment sm:text-2xl">
                {s.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-parchment-dim">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
