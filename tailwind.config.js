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
        'complement': '#ffb24f',
        'light': '#f0fbff',
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
