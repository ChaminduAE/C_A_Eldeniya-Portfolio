/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fonta: ['Zain', 'sans-serif'],
        fontb:['Josefin Sans','sans-serif'],
        fontc:['Playwrite+Cuba','sans-serif'],
        fontd:['Lora',defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

