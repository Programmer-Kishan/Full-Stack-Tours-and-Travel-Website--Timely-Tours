/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Roboto: ['Roboto Condensed', 'sans-serif'],
      },
      backgroundImage: {
        'nature-pattern': "url(./src/assets/Images/Nature.jpg)"
      }
    },
  },
  plugins: [],
}

