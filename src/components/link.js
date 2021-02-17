const tc = require("tinycolor2");

module.exports = (theme) => {
  const primaryColor = theme("colors.chiisai-primary");

  let hoverColor = tc(primaryColor).clone();
  hoverColor.getBrightness() < 10
    ? hoverColor.lighten(20)
    : hoverColor.darken();
  hoverColor = hoverColor.toString();

  return {
    ".link": {
      borderBottom: `2px solid ${primaryColor}`,
      cursor: "pointer",
      transitionDuration: "200ms",
      transitionProperty: "color",

      "&:hover": {
        color: hoverColor,
      },
    },
  };
};
