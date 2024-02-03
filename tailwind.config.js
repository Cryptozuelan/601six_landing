module.exports = {
  purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'transparent-gray': 'rgba(241,241,241,.45)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
