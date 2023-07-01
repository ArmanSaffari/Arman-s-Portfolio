/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'myTeal': '#26B59B',
        'myOrange': '#F21D1D',
        'white': '#FFFFFF',
      },
      fontFamily: {
        'fahkwang': ['Fahkwang', 'sans-serif'],
        'tenor': ['Tenor Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

