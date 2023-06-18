/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sandeep:
        {
          50: '#eeeefe',
          100: '#cecee7',
          200: '#aeadd2',
          300: '#8e8cbe',
          400: '#6e6bab',
          500: '#555292',
          600: '#414072',
          700: '#2B3148',
          800: '#1c1b33',
          900: '#080816',
        }
      }
    },
  },
  plugins: [],
}

