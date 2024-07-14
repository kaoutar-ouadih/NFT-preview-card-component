/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        softBlue: 'hsl(215, 51%, 70%)',
        cyan: 'hsl(178, 100%, 50%)',
        mainBlue: 'hsl(217, 54%, 11%)',
        cardBlue: 'hsl(216, 50%, 16%)',
        blueLine: 'hsl(215, 32%, 27%)'
      },
      fontFamily:{
        outfit: ['Outfit']
      }
    },
  },
  plugins: [],
}

