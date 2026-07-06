import { useLayoutEffect, useRef } from 'react'
import { gsap, prefersReducedMotion } from './gsap'

/* ── Shared reveal primitives ────────────────────────────────────
   One movement vocabulary for the whole site:
   - WordReveal: headings rise word-by-word from behind a mask
   - FadeUp:    blocks drift up and fade in
   - Rule:      a hairline draws itself across as a section opens
   All transform/opacity only (GPU), all fire once, all skip under
   prefers-reduced-motion (content stays fully visible).
   ──────────────────────────────────────────────────────────────── */

/* Wrap every word in a masked span, preserving inline markup (<em>) */
function splitWords(el) {
  if (el.dataset.split) return el.querySelectorAll('.swi')
  el.dataset.split = '1'
  const walk = (node) => {
    if (node.nodeType === 3) {
      const frag = document.createDocumentFragment()
      node.textContent.split(/(\s+)/).forEach((part) => {
        if (!part) return
        if (/^\s+$/.test(part)) return frag.append(part)
        const outer = document.createElement('span')
        outer.className = 'sw'
        const inner = document.createElement('span')
        inner.className = 'swi'
        inner.textContent = part
        outer.append(inner)
        frag.append(outer)
      })
      node.replaceWith(frag)
    } else if (node.nodeType === 1) {
      ;[...node.childNodes].forEach(walk)
    }
  }
  ;[...el.childNodes].forEach(walk)
  return el.querySelectorAll('.swi')
}

export function WordReveal({ as: Tag = 'h2', children, className = '', start = 'top 85%' }) {
  const ref = useRef(null)
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return
    const words = splitWords(ref.current)
    gsap.set(words, { yPercent: 120 })
    const tween = gsap.to(words, {
      yPercent: 0,
      duration: 0.9,
      ease: 'expo.out',
      stagger: 0.04,
      scrollTrigger: { trigger: ref.current, start, once: true },
    })
    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [])
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}

export function FadeUp({ as: Tag = 'div', children, className = '', delay = 0, y = 36 }) {
  const ref = useRef(null)
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return
    const tween = gsap.fromTo(
      ref.current,
      { autoAlpha: 0, y },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        delay,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 88%', once: true },
      },
    )
    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [])
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}

/* Gradient hairline that draws left→right when it enters the viewport */
export function Rule({ className = '' }) {
  const ref = useRef(null)
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return
    const tween = gsap.fromTo(
      ref.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.2,
        ease: 'expo.out',
        scrollTrigger: { trigger: ref.current, start: 'top 90%', once: true },
      },
    )
    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [])
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`h-px origin-left bg-gradient-to-r from-mauve-glow via-wisteria/60 to-transparent ${className}`}
    />
  )
}
