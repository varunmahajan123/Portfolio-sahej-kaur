import { useReducedMotion } from 'framer-motion'

const crafts = ['Reels', 'Static design', 'Websites', 'Presentations', 'Brand content']

/* Signature bridge between hero and work: a slim, slow marquee of
   what she makes, set in Fraunces italic. Static when motion is reduced. */
export default function Ticker() {
  const reduced = useReducedMotion()
  const row = crafts.map((c, i) => (
    <span key={i} className="mx-6 inline-flex items-center gap-6 whitespace-nowrap sm:mx-8 sm:gap-8">
      <span className="font-display text-xl italic text-lilac/90 sm:text-2xl">{c}</span>
      <span aria-hidden="true" className="h-1 w-1 rounded-full bg-wisteria/50" />
    </span>
  ))

  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-wisteria/15 bg-plum-900/50 py-4"
    >
      <div
        className={reduced ? 'flex justify-center' : 'flex w-max animate-ticker'}
      >
        <div className="flex shrink-0">{row}</div>
        {!reduced && <div className="flex shrink-0">{row}</div>}
      </div>
      <style>{`
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-ticker { animation: ticker 28s linear infinite; }
      `}</style>
    </div>
  )
}
