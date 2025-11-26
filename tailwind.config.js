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
          DEFAULT: '#A32442', // Red/Pink
          hover: '#8A1E37',
          light: '#C43A5A', // Lighter Pink
        },
        secondary: {
          DEFAULT: '#4A101E', // Dark Red/Brown
          hover: '#380C16',
        },
        accent: {
          DEFAULT: '#FF8FA3', // Bright Pink/White (kept for contrast)
          hover: '#A32442',
        },
        dark: {
          DEFAULT: '#000000', // Black
          surface: '#1A050A', // Dark with slight red tint
          border: '#330A12', // Dark border with red tint
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundSize: {
        '200': '200% 200%',
      },
      backgroundPosition: {
        '0': '0% 50%',
        '100': '100% 50%',
      },
    },
  },
  plugins: [],
}
