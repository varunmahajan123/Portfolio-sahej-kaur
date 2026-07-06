/* Shared Framer Motion variants — one vocabulary of movement
   across the whole site so nothing feels bolted on. */

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

export const maskReveal = {
  hidden: { opacity: 0, y: '40%' },
  visible: (i = 0) => ({
    opacity: 1,
    y: '0%',
    transition: { duration: 0.8, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
}

export const viewportOnce = { once: true, margin: '-80px' }
