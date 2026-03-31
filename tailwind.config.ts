import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-space)', 'sans-serif'],
        body:    ['var(--font-inter)',  'sans-serif'],
        mono:    ['var(--font-jetbrains)', 'monospace'],
      },
      colors: {
        canvas:  '#FAFAF9',
        carbon:  '#111111',
        muted:   '#6B7280',
        subtle:  '#9CA3AF',
        indigo:  '#6366F1',
        edge:    '#E4E4E7',
        success: '#10B981',
        warning: '#F59E0B',
        danger:  '#EF4444',
        // legacy aliases
        coral:   '#6366F1',
      },
      animation: {
        'fade-up':    'fadeUp 0.55s ease forwards',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'marquee':    'marquee 35s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4' },
          '50%':      { opacity: '0.8' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
