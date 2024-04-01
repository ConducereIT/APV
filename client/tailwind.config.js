/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1D1A3F',
        'custom-gray': '#656372',
      },
      fontFamily: {
        'source-code-pro': ['Source Code Pro', 'sans-serif'],
        'barlow': ['Barlow', 'sans-serif'],
        'barlow-condensed': ['"Barlow Condensed"', 'sans-serif'],
      },
      fontWeight: {
        'source-code-pro': {
          normal: '400',
          bold: '700',
        },
      },
      fontStyle: {
        'source-code-pro': {
          italic: 'italic',
        },
      },
    },
  },
  plugins: [],
}