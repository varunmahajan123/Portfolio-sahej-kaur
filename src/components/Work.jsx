import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { WordReveal, FadeUp, Rule } from '../lib/anim'

/* ─────────────────────────────────────────────────────────────
   REPLACE THESE WITH REAL PROJECTS.

   1. Drop images into public/assets/work/ named work-1.jpg …
      work-8.jpg (JPG/WebP, ≤300 KB each). A card automatically
      shows the photo instead of its gradient tile.
   2. For a video/reel: export a poster frame as the card's
      work-N.jpg — every "Reels" card already renders a play
      affordance on top. To link out, set `href` to the reel URL.
   3. Retitle cards below; `size` controls the bento shape
      ("tall" = 3:4 reels, "wide" = spans 2 cols, "square").
   ───────────────────────────────────────────────────────────── */
const projects = [
  { id: 1, title: 'Launch reel — D2C skincare', category: 'Reels', img: '/assets/work/work-1.jpg', size: 'tall', href: null },
  { id: 2, title: 'Campaign creatives — fintech startup', category: 'Static Designs', img: '/assets/work/work-2.jpg', size: 'square', href: null },
  { id: 3, title: 'Marketing site — SaaS platform', category: 'Website Designs', img: '/assets/work/work-3.jpg', size: 'wide', href: null },
  { id: 4, title: 'Investor deck — seed round', category: 'Presentation Designs', img: '/assets/work/work-4.jpg', size: 'square', href: null },
  { id: 5, title: 'Festive series — café brand', category: 'Static Designs', img: '/assets/work/work-5.jpg', size: 'tall', href: null },
  { id: 6, title: 'Product explainer reel', category: 'Reels', img: '/assets/work/work-6.jpg', size: 'square', href: null },
  { id: 7, title: 'Portfolio site — architect', category: 'Website Designs', img: '/assets/work/work-7.jpg', size: 'square', href: null },
  { id: 8, title: 'Sales deck — consulting firm', category: 'Presentation Designs', img: '/assets/work/work-8.jpg', size: 'wide', href: null },
]

const filters = ['All', 'Reels', 'Static Designs', 'Website Designs', 'Presentation Designs']

/* Gradient-mesh tile per category: layered radial washes so empty
   cards read as art direction, never as missing content. */
const mesh = {
  'Reels':
    'radial-gradient(110% 90% at 12% 8%, rgba(244,114,182,0.5) 0%, transparent 55%), radial-gradient(100% 80% at 88% 18%, rgba(124,58,237,0.65) 0%, transparent 60%), radial-gradient(130% 110% at 70% 100%, rgba(46,16,101,0.95) 0%, transparent 75%), linear-gradient(160deg, #5B21B6 0%, #3B1690 100%)',
  'Static Designs':
    'radial-gradient(110% 90% at 85% 10%, rgba(249,168,212,0.4) 0%, transparent 55%), radial-gradient(120% 90% at 10% 85%, rgba(109,40,217,0.7) 0%, transparent 65%), linear-gradient(200deg, #6D28D9 0%, #3B1690 90%)',
  'Website Designs':
    'radial-gradient(120% 90% at 15% 15%, rgba(167,139,250,0.45) 0%, transparent 60%), radial-gradient(110% 90% at 90% 90%, rgba(244,114,182,0.3) 0%, transparent 55%), linear-gradient(150deg, #4C1D95 0%, #2E1065 100%)',
  'Presentation Designs':
    'radial-gradient(100% 80% at 80% 5%, rgba(196,181,253,0.4) 0%, transparent 55%), radial-gradient(130% 100% at 20% 100%, rgba(192,38,211,0.35) 0%, transparent 65%), linear-gradient(170deg, #5B21B6 0%, #312E81 100%)',
}

const watermark = {
  'Reels': 'Reel',
  'Static Designs': 'Social',
  'Website Designs': 'Web',
  'Presentation Designs': 'Deck',
}

const sizeClass = {
  tall: 'sm:row-span-2 aspect-[3/4]',
  wide: 'sm:col-span-2 aspect-[16/10]',
  square: 'aspect-[4/3]',
}

function Card({ project }) {
  const isReel = project.category === 'Reels'
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ type: 'spring', stiffness: 170, damping: 24 }}
      data-cursor={isReel ? 'Play' : 'View'}
      className={`tile-pattern group relative overflow-hidden rounded-2xl border border-wisteria/20 transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-wisteria/50 hover:shadow-[0_28px_70px_-18px_rgba(192,38,211,0.45)] ${sizeClass[project.size]}`}
      style={{ background: mesh[project.category] }}
    >
      {/* Oversized italic watermark keeps tiles alive pre-images */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-3 bottom-6 select-none font-display text-[5.5rem] italic leading-none text-white/[0.07] transition-transform duration-700 group-hover:-translate-x-2 sm:text-[7rem]"
      >
        {watermark[project.category]}
      </span>

      {/* Real project image replaces the mesh automatically */}
      <img
        src={project.img}
        alt={project.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        onError={(e) => (e.currentTarget.style.display = 'none')}
      />

      {isReel && (
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110"
        >
          <span className="ml-1 inline-block border-y-[7px] border-l-[11px] border-y-transparent border-l-white/90" />
        </span>
      )}

      {/* Legibility scrim + meta; title lifts on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-plum-950/85 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 transition-transform duration-500 group-hover:-translate-y-1 sm:p-5">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-eyebrow text-mauve">
            {project.category}
          </p>
          <h3 className="mt-1.5 font-display text-base font-medium leading-snug text-parchment sm:text-lg">
            {project.title}
          </h3>
        </div>
        <span
          aria-hidden="true"
          className="mb-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-wisteria/40 text-lilac opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bg-lilac group-hover:text-plum-950"
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
      {/* Desktop: the heading column pins while the gallery scrolls past —
          the section's cinematic beat. Mobile: natural vertical flow. */}
      <div className="items-start gap-12 lg:grid lg:grid-cols-[1fr_1.55fr]">
        <div className="mb-10 lg:sticky lg:top-24 lg:mb-0">
          <p className="eyebrow mb-5">Selected work</p>
          <WordReveal
            as="h2"
            className="max-w-2xl font-display text-3xl font-medium leading-tight tracking-headline sm:text-5xl"
          >
            The work speaks in <em className="italic text-lilac">scrolls stopped</em> and
            decks that close.
          </WordReveal>
          <Rule className="mt-7 w-3/4" />

          {/* Filters — 44px+ targets; grid re-flows with a spring, no hard cut */}
          <div
            role="tablist"
            aria-label="Filter work by type"
            className="-mx-5 mt-7 flex gap-2 overflow-x-auto px-5 pb-1 lg:mx-0 lg:flex-wrap lg:px-0"
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

          <FadeUp as="p" className="mt-8 hidden max-w-xs text-sm leading-relaxed text-parchment-faint lg:block">
            {visible.length} projects · reels, social campaigns, websites, and
            decks for startups and professionals.
          </FadeUp>
        </div>

        <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <Card key={p.id} project={p} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
