import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#101010',
        dark: '#0E0E0E',
        accent: '#D87D4A',
        accentLight: '#fbaf85',
        gray: '#f1f1f1',
        muted: '#fafafa'
      },
      fontFamily: {
        manrope: ['var(--font-manrope)', 'sans-serif']
      },
      boxShadow: {
        soft: '0px 10px 40px rgba(0,0,0,0.25)',
        ring: '0 0 0 2px rgba(216, 125, 74, 0.35)'
      },
      maxWidth: {
        content: '1110px'
      },
      backgroundImage: {
        'pattern-circles': "url('/images/pattern-circles.svg')"
      }
    }
  },
  plugins: []
};

export default config;
