module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      ringWidth: ["hover", "active"],
      scale: ["group-hover"],
      translate: ["group-hover"],
    },
  },
  plugins: [],
}
