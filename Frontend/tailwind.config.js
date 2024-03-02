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
        'Roboto-Mono': ["Roboto Mono", 'monospace']
      },
      backgroundImage: {
        'nature-pattern': "url(./src/assets/Images/Nature.jpg)"
      },
      screens: {
        'tablet': "835px"
      },
      keyframes: {
        down: {
          '0%': {top: '-100%'},
          '100%': {top: '0'},
        }
      },
      animation: {
        'go-down': 'down 3s ease-in-out',
      }
    },
  },
  plugins: [],
}

