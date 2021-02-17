const { getComponentColors } = require("./utils");

module.exports = (theme) => {
  const { primaryColor, hoverColor, textColor } = getComponentColors(theme);

  return {
    ".btn": {
      borderRadius: theme("borderRadius.DEFAULT"),
      cursor: "pointer",
      padding: `${theme("spacing.2")} ${theme("spacing.4")}`,
      transitionDuration: "200ms",
      transitionProperty: "background-color",

      "&-primary": {
        backgroundColor: primaryColor,
        color: textColor,

        "&:hover, &:focus": {
          backgroundColor: hoverColor,
        },
      },

      "&-outline": {
        border: `1px solid ${primaryColor}`,

        "&:hover, &:focus": {
          backgroundColor: primaryColor,
          color: textColor,
        },
      },
    },
  };
};
