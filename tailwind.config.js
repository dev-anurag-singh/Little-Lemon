/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '100%',
        lg: '850px',
      },
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        sans: ['Karla', 'sans-serif'],
        display: ['Markazi Text', 'Karla', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
