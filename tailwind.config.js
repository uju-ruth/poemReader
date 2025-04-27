/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryBlue: "#0572E2",
        secBlue:"#021E7C",
      }
    },
  },
  plugins: [],
}

