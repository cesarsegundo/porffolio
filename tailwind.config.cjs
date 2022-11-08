/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'roboto': 'Roboto'
      },
      zIndex: {
        '1': '-1',
      },
      colors : {
        'nav': '#1f1f1f',
        'col1': '#31955d',
        'col2': '#248667'
      }
    },
  },
  plugins: [],
}