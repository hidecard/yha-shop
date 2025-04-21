/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yha-orange': '#F97316',
        'yha-orange-light': '#FDBA74',
        'yha-gray': '#1F2937',
        'yha-gray-light': '#F3F4F6',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}