/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['components/**/*.vue',
  'layouts/**/*.vue',
  'pages/**/*.vue',
  'plugins/**/*.js',
  'nuxt.config.js',],
  theme: {
    extend: {},
    screens:{
      'sm': '360px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  plugins: [],
}

