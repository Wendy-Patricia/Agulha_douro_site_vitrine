/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        gold: '#C9A84C',
        'gold-light': '#F5E6C3',
        ivory: '#FDFCF8',
        ink: '#1A1410',
        cocoa: '#6B5B3E'
      },
      boxShadow: {
        soft: '0 20px 60px rgba(26, 20, 16, 0.12)'
      },
      backgroundImage: {
        'gold-glow': 'radial-gradient(circle at center, rgba(201,168,76,.22), transparent 58%)'
      },
      letterSpacing: {
        luxe: '.28em'
      }
    }
  },
  plugins: []
};
