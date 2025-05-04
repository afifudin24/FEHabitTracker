/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // untuk App Router
    './components/**/*.{js,ts,jsx,tsx}', // opsional kalau kamu pakai components/
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: 'var(--color-primary-blue)',
          green: 'var(--color-primary-green)',
          hover: 'var(--color-primary-hover)',
        },
        secondary: {
          blue: 'var(--color-secondary-blue)',
          gray: 'var(--color-secondary-gray)',
        },
        text: {
          dark: 'var(--color-text-dark)',
          muted: 'var(--color-text-muted)',
          light: 'var(--color-text-light)',
        },
        bg: {
          light: 'var(--color-bg-light)',
          soft: 'var(--color-bg-soft)',
          card: 'var(--color-bg-card)',
        },
        tag: {
          habit1: 'var(--color-tag-habit-1)',
          habit2: 'var(--color-tag-habit-2)',
          habit3: 'var(--color-tag-habit-3)',
          habit4: 'var(--color-tag-habit-4)',
        },
        border: 'var(--color-border)',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
      },
      fontFamily: {
        primary: ['var(--font-primary)'],
        secondary: ['var(--font-secondary)'],
        default: ['var(--font-default)'],
      },
    },
  },
  plugins: [],
};
