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
        display: ['var(--font-jetbrains)', 'monospace'],
        body:    ['var(--font-inter)',     'sans-serif'],
        mono:    ['var(--font-jetbrains)', 'monospace'],
      },
      colors: {
        canvas:  '#F5F5F3',
        carbon:  '#121212',
        muted:   '#666666',
        subtle:  '#999999',
        coral:   '#D34D2A',
        edge:    '#E5E5E5',
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease forwards',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-mid':  'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4' },
          '50%':      { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
