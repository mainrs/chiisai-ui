const tc = require("tinycolor2");

module.exports = (theme) => ({
  ".card": {
    backgroundColor: "white",
    border: `1px solid ${theme("colors.gray.200")}`,
    borderRadius: theme("borderRadius.DEFAULT"),
    boxShadow: theme("boxShadow.lg"),
    padding: theme("padding.4"),
  },
});
