module.exports = {
  purge: [
    './components/**/*.{vue,ts}',
    './partials/**/*.{vue,ts}',
    './layouts/**/*.{vue,ts}',
    './pages/**/*.{vue,ts}',
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
      },
      spacing: {
        '22': '5.5rem'
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
