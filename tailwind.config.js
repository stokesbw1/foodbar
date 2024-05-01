/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand : {
          default: "#dc5212",
          secondary: "#252020",
        }
      }
    },
  },
  plugins: [],
}

