const tc = require("tinycolor2");

function getBestTextColor(theme) {
  const primaryColor = theme("colors.chiisai-primary");
  return tc.mostReadable(primaryColor, [tc("black"), tc("white")]);
}

function getHoverColor(theme) {
  const primaryColor = theme("colors.chiisai-primary");

  let hoverColor = tc(primaryColor).clone();
  return hoverColor.isDark() ? hoverColor.lighten(15) : hoverColor.darken();
}

function getComponentColors(theme) {
  return {
    primaryColor: tc(theme("colors.chiisai-primary")).toString(),
    hoverColor: getHoverColor(theme).toString(),
    textColor: getBestTextColor(theme).toString(),
  };
}

module.exports = {
  getBestTextColor,
  getHoverColor,
  getComponentColors,
};
