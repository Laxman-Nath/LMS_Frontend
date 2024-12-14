/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        primary:'rgb(5, 7, 28)',
        secondary:'rgb(104, 105, 107)',
        login:'rgb(224, 220, 220)'
      }
    },
  },
  plugins: [],
}

