/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Anton" : ['Anton SC', 'sans-serif'],
        "Kalnia" : ['Kalnia Glaze', 'serif'],
        "Lato" : ['Lato', 'sans-serif']
        
      },
      backgroundImage: {
        'fondo': "url('/src/assets/img/fondeo.jpg')",
      },
      colors: {
        'azul': '#465EF4',
    },

    },

    
  },
  plugins: [],
}
