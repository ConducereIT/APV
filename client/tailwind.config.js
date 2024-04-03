/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'source-code-pro': ['Source Code Pro', 'sans-serif'],
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