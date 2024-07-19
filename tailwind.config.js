/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background' : '#0E0B16',
        'background-secondary' : '1F1B28',
        'primary' : '#3B1963',
      }
    },
  },
  plugins: [],
}

