/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          200: '#69574A',
          300: '#50433A',
          400: '#4E4239',
        }
      }
    },
  },
  plugins: [],
}
