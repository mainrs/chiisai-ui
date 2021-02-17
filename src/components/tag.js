const tc = require("tinycolor2");

module.exports = (theme) => {
  const primaryColor = theme("colors.chiisai-primary");

  let hoverColor = tc(primaryColor).clone();
  hoverColor.getBrightness() < 10
    ? hoverColor.lighten(20)
    : hoverColor.darken();
  hoverColor = hoverColor.toString();

  return {
    ".tag": {
      display: "inline-block",
      borderRadius: theme("borderRadius.full"),
      borderWidth: "1px",
      padding: `0px ${theme("padding.2")}`,
      textAlign: "center",

      "&-blue": {
        borderColor: theme("colors.blue.500"),
        backgroundColor: theme("colors.blue.200"),
      },
      "&-green": {
        borderColor: theme("colors.green.500"),
        backgroundColor: theme("colors.green.200"),
      },
      "&-red": {
        borderColor: theme("colors.red.500"),
        backgroundColor: theme("colors.red.200"),
      },
      "&-yellow": {
        borderColor: theme("colors.yellow.500"),
        backgroundColor: theme("colors.yellow.200"),
      },
      "&-indigo": {
        borderColor: theme("colors.indigo.500"),
        backgroundColor: theme("colors.indigo.200"),
      },
      "&-purple": {
        borderColor: theme("colors.purple.500"),
        backgroundColor: theme("colors.purple.200"),
      },
      "&-pink": {
        borderColor: theme("colors.pink.500"),
        backgroundColor: theme("colors.pink.200"),
      },
    },
  };
};
