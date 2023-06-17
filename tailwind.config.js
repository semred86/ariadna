/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        'lg': '1024px'
      }
    },
    extend: {},
  },
  plugins: [
  ],
}

// npx tailwindcss -i ./style.css -o ./output.css --watch
