module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './components/**/*.{vue,ts}',
      './partials/**/*.{vue,ts}',
      './layouts/**/*.{vue,ts}',
      './pages/**/*.{vue,ts}',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    darkSelector: '.dark-mode',
    extend: {
      colors: {
        'primary': '#4998d0',
        'dark': '#096aae',
        'light': '#9ecdee',
        'shade': '#2481c0'
      },
      spacing: {
        '22': '5.5rem'
      },
      zIndex: {
        '0': 0,
        '1': 1
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: [
        'dark',
        'dark-hover',
        'dark-group-hover',
        'dark-even',
        'dark-odd',
        'hover',
        'responsive'
      ],
      borderColor: [
        'dark',
        'dark-focus',
        'dark-focus-within',
        'hover',
        'responsive'
      ],
      textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive']
    }
  },
  plugins: [require('tailwindcss-dark-mode')()]
}
