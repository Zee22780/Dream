/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      teal: "#1F7A8C",
      blue: "#0D63BF",
      fuschia: "#f04290"
    },
    fontFamily: {
      roboto: ['"Roboto"',...defaultTheme.fontFamily.sans]
    }
  },
  plugins: [],
}

