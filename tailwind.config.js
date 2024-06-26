/** @type {import('tailwindcss').Config} */
export default {
   content: [
      './app/**/*.{js,ts,jsx,tsx}',
   ],
   theme: {
      extend: {
         width: {
            '128': '32rem',
            '160': '40rem',
         },
         height: {
            '128': '32rem',
            '160': '40rem',
         },
         colors: {
            'black-light': '#0f0f0f',
         },
         size: {
            'double': '200%',
         },
         blur: {
            'super-sm': '2px',
         },
      },
   },
   plugins: [],
}
