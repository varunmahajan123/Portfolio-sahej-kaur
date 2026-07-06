import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

const variants = {
  /* Pink→magenta gradient pill from the brand banner */
  primary:
    'cta-gradient inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-7 py-3.5 font-sans text-[0.95rem] font-semibold',
  /* Quiet outline twin for secondary actions (Call, WhatsApp) */
  ghost:
    'inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-wisteria/50 px-7 py-3.5 font-sans text-[0.95rem] font-semibold text-lilac transition-colors duration-300 hover:border-lilac hover:text-parchment',
}

/* CTA with a soft magnetic pull on pointer devices; plain (but still
   premium) on touch and reduced-motion. `arrow` adds the → glyph. */
export default function MagneticButton({
  href,
  children,
  className = '',
  variant = 'primary',
  arrow = true,
  ...rest
}) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 18 })
  const sy = useSpring(y, { stiffness: 200, damping: 18 })

  const canHover =
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches

  function onMove(e) {
    if (!canHover || reduced) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * 0.25)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35)
  }

  function onLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={`${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
      {arrow && (
        <span aria-hidden="true" className="text-lg leading-none">→</span>
      )}
    </motion.a>
  )
}
