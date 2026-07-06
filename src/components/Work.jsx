import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { viewportOnce } from '../lib/motion'

/* ─────────────────────────────────────────────────────────────
   REPLACE THESE WITH REAL PROJECTS.
   Drop images into public/assets/work/ (work-1.jpg … work-8.jpg),
   then update title/client per item. Aspect ratios:
   "tall" suits reels (9:16-ish), "wide" suits websites/decks.
   Until an image exists, the card shows a styled placeholder.
   ───────────────────────────────────────────────────────────── */
const projects = [
  { id: 1, title: 'Launch reel — D2C skincare', category: 'Reels', img: '/assets/work/work-1.jpg', size: 'tall' },
  { id: 2, title: 'Campaign creatives — fintech startup', category: 'Static Designs', img: '/assets/work/work-2.jpg', size: 'square' },
  { id: 3, title: 'Marketing site — SaaS platform', category: 'Website Designs', img: '/assets/work/work-3.jpg', size: 'wide' },
  { id: 4, title: 'Investor deck — seed round', category: 'Presentation Designs', img: '/assets/work/work-4.jpg', size: 'square' },
  { id: 5, title: 'Festive series — café brand', category: 'Static Designs', img: '/assets/work/work-5.jpg', size: 'tall' },
  { id: 6, title: 'Product explainer reel', category: 'Reels', img: '/assets/work/work-6.jpg', size: 'square' },
  { id: 7, title: 'Portfolio site — architect', category: 'Website Designs', img: '/assets/work/work-7.jpg', size: 'square' },
  { id: 8, title: 'Sales deck — consulting firm', category: 'Presentation Designs', img: '/assets/work/work-8.jpg', size: 'wide' },
]

const filters = ['All', 'Reels', 'Static Designs', 'Website Designs', 'Presentation Designs']

/* Each category gets its own quiet gradient so placeholder cards
   still read as a considered, art-directed grid. */
const placeholderTint = {
  'Reels': 'from-plum-600 to-plum-800',
  'Static Designs': 'from-plum-500 to-plum-700',
  'Website Designs': 'from-plum-700 to-plum-900',
  'Presentation Designs': 'from-plum-600 to-plum-900',
}

const sizeClass = {
  tall: 'row-span-2 aspect-[3/4] sm:aspect-auto',
  wide: 'sm:col-span-2 aspect-[16/10] sm:aspect-[21/10]',
  square: 'aspect-[4/3]',
}

function Card({ project, index }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      viewport={viewportOnce}
      transition={{ duration: 0.6, delay: (index % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-2xl border border-wisteria/15 bg-gradient-to-br ${placeholderTint[project.category]} ${sizeClass[project.size]}`}
    >
      <img
        src={project.img}
        alt={project.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        onError={(e) => (e.currentTarget.style.display = 'none')}
      />

      {/* Legibility scrim + card meta */}
      <div className="absolute inset-0 bg-gradient-to-t from-plum-950/85 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-eyebrow text-wisteria">
            {project.category}
          </p>
          <h3 className="mt-1.5 font-display text-base font-medium leading-snug text-parchment sm:text-lg">
            {project.title}
          </h3>
        </div>
        <span
          aria-hidden="true"
          className="mb-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-wisteria/30 text-lilac opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bg-lilac group-hover:text-plum-950"
        >
          ↗
        </span>
      </div>
    </motion.article>
  )
}

export default function Work() {
  const [active, setActive] = useState('All')
  const visible = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="work" className="mx-auto max-w-page px-5 py-20 sm:px-8 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10 flex flex-col gap-6 sm:mb-14"
      >
        <p className="eyebrow">Selected work</p>
        <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight tracking-headline sm:text-5xl">
          The work speaks in{' '}
          <em className="italic text-lilac">scrolls stopped</em> and decks that
          close.
        </h2>

        {/* Filters — 44px+ touch targets, scrollable on small screens */}
        <div
          role="tablist"
          aria-label="Filter work by type"
          className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={active === f}
              onClick={() => setActive(f)}
              className={`min-h-[44px] shrink-0 rounded-full border px-5 text-sm font-medium transition-colors ${
                active === f
                  ? 'border-lilac bg-lilac text-plum-950'
                  : 'border-wisteria/30 text-parchment-dim hover:border-wisteria hover:text-parchment'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <Card key={p.id} project={p} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
