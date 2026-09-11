/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--text)',
        muted: 'var(--muted)',
        surface: 'var(--surface)',
        card: 'var(--card)',
        accent: 'var(--accent)',
        sage: 'var(--sage)',
        line: 'var(--line)'
      },
      borderRadius: { ios: '24px' }
    }
  },
  plugins: []
}