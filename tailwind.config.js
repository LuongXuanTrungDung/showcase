module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#4997d0',
        'shade': '#007ba7',
        'dark': '#002366',
'light': '		#F0F8FF'
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
