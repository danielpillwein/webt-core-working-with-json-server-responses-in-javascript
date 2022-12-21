/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./website/**/*.{html,js}"],
  theme: {
    screens:{
      'x':{'min':'1200px'},
      'd':{'min':'701px','max':'1200px'},
      'm':{'max':'700px'},
    },
    extend: {},
  },
  plugins: [],
}