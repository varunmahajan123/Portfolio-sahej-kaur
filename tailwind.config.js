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
          950: '#2E1065',
          900: '#3B1690',
          800: '#4C1D95',
          700: '#5B21B6',
          600: '#6D28D9',
          500: '#7C3AED',
        },
        wisteria: {
          DEFAULT: '#C4B5FD',
          deep: '#A78BFA',
        },
        lilac: '#E9D5FF',
        mauve: {
          DEFAULT: '#F9A8D4',
          glow: '#F472B6',
        },
        parchment: {
          DEFAULT: '#FAF7FF',
          dim: '#DDD3F8',
          faint: '#BCA9EE',
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
