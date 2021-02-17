module.exports = function (theme) {
  console.log(theme("fontSize.lg"));

  return {
    h6: {
      fontWeight: "bold",
    },
    h5: {
      fontSize: theme("fontSize.lg"),
    },
    h4: {
      fontSize: theme("fontSize.xl"),
    },
    h3: {
      fontSize: theme("fontSize.2xl"),
    },
    h2: {
      fontSize: theme("fontSize.3xl"),
    },
    h1: {
      fontSize: theme("fontSize.4xl"),
    },
  };
};
