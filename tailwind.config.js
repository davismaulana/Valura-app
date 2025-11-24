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
          DEFAULT: '#8B5A6F', // Mauve/Dusty Rose
          hover: '#6D4558',
          light: '#A67B8F', // Light Mauve
        },
        secondary: {
          DEFAULT: '#6D4558', // Deep Mauve
          hover: '#5A3847',
        },
        accent: {
          DEFAULT: '#C4A4B0', // Soft Rose
          hover: '#A67B8F',
        },
        dark: {
          DEFAULT: '#0A0608', // Almost Black with slight warmth
          surface: '#1A1215', // Dark with mauve tint
          border: '#2D2228', // Dark border with warmth
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
