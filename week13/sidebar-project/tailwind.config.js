/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors : {
        blue : {
          300 : '#36c6c0',
          500 : '#19406a',
          900 : '#002b5b'
        }
      }
    },
  },
  plugins: [],
}

