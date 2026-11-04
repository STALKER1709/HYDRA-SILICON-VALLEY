import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        hsv: {
          emerald: '#0B3D2E',
          amber: '#F5A623',
          terracotta: '#C75B39',
          sand: '#F7F3EA',
          charcoal: '#1A1A1A',
          mint: '#A8D5BA',
        },
      },
      fontFamily: {
        display: ['var(--font-sora)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
      boxShadow: {
        soft: '0 18px 55px rgba(11, 61, 46, 0.12)',
        card: '0 24px 70px rgba(7, 31, 24, 0.18)',
      },
      borderRadius: { '4xl': '2rem', '5xl': '2.5rem' },
      backgroundImage: {
        'kente-grid': 'linear-gradient(135deg, transparent 46%, rgba(245,166,35,.12) 47%, rgba(245,166,35,.12) 50%, transparent 51%), linear-gradient(45deg, transparent 46%, rgba(168,213,186,.1) 47%, rgba(168,213,186,.1) 50%, transparent 51%)',
      },
    },
  },
  plugins: [],
};
export default config;
