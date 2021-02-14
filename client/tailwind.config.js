const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkGray: {
          50: '#f8f8f8',
          100: '#dbe1e8',
          200: '#b2becd',
          300: '#6c7983',
          400: '#454e56',
          500: '#2a2a35',
          600: '#12181b',
        }
      }
    },
  },
  variants: {
    extend: {
      pointerEvents: ['hover'],
      opacity: ['disabled']
    },
  },
  plugins: [],
}
