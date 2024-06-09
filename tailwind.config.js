/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '728px',
        lg: '850px',
      },
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
