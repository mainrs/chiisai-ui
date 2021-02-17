const tc = require("tinycolor2");
const { getComponentColors } = require("../utils");

module.exports = (theme) => {
  const { primaryColor, hoverColor, textColor } = getComponentColors(theme);

  return {
    ".form-checkbox": {
      borderColor: "#e2e8f0",
      borderWidth: "1px",
      borderRadius: theme("borderRadius.DEFAULT"),
      color: primaryColor,

      "&:focus": {
        borderColor: tc(primaryColor).setAlpha(0.6).toString(),
        boxShadow: theme("boxShadow.lg"),
      },
    },
  };
};
