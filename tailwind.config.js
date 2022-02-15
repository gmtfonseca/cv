module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    extend: {
      gridTemplateColumns: {
        profile: '170px auto',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
