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
        'custom-green': '#006470',
        'customBackground': 'rgb(247, 253, 253)',
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
      padding: {
        '35': '35px', 
        '33': '33px',
        '20': '20px',
        '15': '15px',
        '8': '8px',
      },
      fontSize: {
        '14': '14px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '52': '52px',
        '40': '40px',
        '36': '36px',
        '28': '28px',
      },
    },
  },
  plugins: [],
}