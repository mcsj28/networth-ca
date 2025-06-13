/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0c7ff2',
        text: '#0d141c',
        border: '#e7edf4',
        input: '#cedbe8',
        placeholder: '#49739c',
      },
    },
  },
  plugins: [],
} 