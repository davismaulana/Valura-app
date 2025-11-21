/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D90429', // Elegant Red
          hover: '#B90321',
          light: '#EF233C',
        },
        accent: {
          DEFAULT: '#F59E0B', // Gold (keeping for highlights/stars)
          hover: '#D97706',
        },
        dark: {
          DEFAULT: '#0a0a0a', // Pure Black
          surface: '#171717', // Dark Grey Surface
          border: '#262626', // Dark Grey Border
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
