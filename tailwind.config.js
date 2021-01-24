module.exports = {
  purge: ["./pages/*.js", "./pages/**/*.js", "./components/**/*.js"],
  darkMode: false,
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
