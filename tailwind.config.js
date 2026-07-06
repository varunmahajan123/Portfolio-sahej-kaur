/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      /* ── Design tokens: dark pastel purple system ─────────────────
         plum-*   → backgrounds, deepest to most elevated
         wisteria → primary pastel accent (interactive)
         lilac    → light pastel accent (emphasis text)
         mauve    → rose-mauve highlight (glow, rare accents)
         parchment→ text tones (never pure white)                    */
      colors: {
        plum: {
          950: '#2E2440',
          900: '#332843',
          800: '#3B2E4D',
          700: '#463659',
          600: '#52416A',
          500: '#5B4B7A',
        },
        wisteria: {
          DEFAULT: '#B79FD4',
          deep: '#9B7FC0',
        },
        lilac: '#C9B6E4',
        mauve: {
          DEFAULT: '#E3C3D4',
          glow: '#D9A8C4',
        },
        parchment: {
          DEFAULT: '#F0EAF6',
          dim: '#C9C0D8',
          faint: '#9D92B4',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        headline: '-0.03em',
        eyebrow: '0.18em',
      },
      maxWidth: {
        page: '72rem',
      },
    },
  },
  plugins: [],
}
