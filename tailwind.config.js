/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Manrope"', ...defaultTheme.fontFamily.sans],
        'cbyf':['"Covered By Your Grace"', 'cursive'],
        'Sil':['"Abyssinica SIL"', 'serif']
      },
      colors:{
        'green':"#2DA950",
        'gray':'#727272'
      }
    },
  },
  plugins: [],
}