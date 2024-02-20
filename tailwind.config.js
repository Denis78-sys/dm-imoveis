/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['components/**/*.vue',
  'layouts/**/*.vue',
  'pages/**/*.vue',
  'plugins/**/*.js',
  'nuxt.config.js',],
  theme: {
    extend: {
      colors: {
        cinzaEscuro: '#373c40',
        marron: '#87765f',
        marromHover: '#5a4f3f',
        cinza: '#bfbfbf',
        fundoFooter: '#373C40',
        textoFooter: '#BFBFBF'
      },
    },
    screens:{
      'sm': '360px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  plugins: [],
}

