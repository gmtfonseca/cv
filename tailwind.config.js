module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        profile: '150px auto',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
