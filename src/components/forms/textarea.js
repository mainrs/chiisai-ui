const tc = require("tinycolor2");
const { getComponentColors } = require("../utils");

module.exports = (theme) => {
  const { primaryColor, hoverColor, textColor } = getComponentColors(theme);

  return {
    ".form-textarea": {
      borderColor: "#e2e8f0",
      borderWidth: "1px",
      borderRadius: theme("borderRadius.DEFAULT"),
      color: primaryColor,
      transitionDuration: "200ms",
      transitionProperty: "box-shadow",

      "&:focus": {
        borderColor: tc(primaryColor).setAlpha(0.8).toString(),
        boxShadow: theme("boxShadow.md"),
      },
    },
  };
};
