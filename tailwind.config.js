/** @type {import('tailwindcss').Config} */


const { colors } = require('./src/config/style');



module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        'mobile': '16px',
      },
      colors
    }
  },
  plugins: [],
}
