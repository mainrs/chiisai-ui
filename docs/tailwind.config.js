module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        "chiisai-primary": "#1e1e1e",
      },
    },
  },
  variants: {},
  plugins: [require("../src/index")],
};
