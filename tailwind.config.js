module.exports = {
  theme: {
    container: {
      center: true,
      padding: "20px"
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      "green-100": "#43b582",
      "gray-100": "#202225",
      "gray-200": "#2f3136",
      "gray-300": "#36393f",
      "gray-400": "#72767d",
      "gray-500": "#b9bbbe",
      "gray-600": "#202225",
      "gray-700": "#292b2f",
      "gray-800": "#8e9297"
    }
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["components/**/*.vue", "layouts/**/*.vue", "pages/**/*.vue", "plugins/**/*.js", "nuxt.config.js"]
  }
};
