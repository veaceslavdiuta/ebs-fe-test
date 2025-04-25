/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif']
      },
      keyframes: {
        fadeIn: {
          '0%': { bottom: '0', opacity: '0' },
          '100%': { bottom: '30px', opacity: '1' },
        },
        fadeOut: {
          '0%': { bottom: '30px', opacity: '1' },
          '100%': { bottom: '0', opacity: '0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s forwards',
        fadeOut: 'fadeOut 0.5s forwards',
      },
    },
  },
  plugins: [],
}

