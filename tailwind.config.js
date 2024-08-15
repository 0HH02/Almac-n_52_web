/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './**/*.{html,js}'],
  theme: {
    screens:{
      'large': {'max': '1600px'},
      'middle': {'max': '1040px'},
      'small': {'max': '768px'},
    },
    fontFamily: {
      inter: ['Inter', "sans-serif"],
      dm: ['DM Sans', "sans-serif"],
      oswald: ['Oswald', "sans-serif"],
      kaushan: ['Kaushan Script', "cursive"],
    },
    extend: {
      colors: {
        "main-color": "var(--main-color)",
      },
    },
  },
}