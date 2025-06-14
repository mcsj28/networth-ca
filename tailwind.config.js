/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0c7ff2',
        text: '#0d141c',
        border: '#cedbe8',
        background: '#e7edf4',
        placeholder: '#49739c',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 