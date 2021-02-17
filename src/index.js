const forms = require("@tailwindcss/forms");
const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({
  addComponents,
  addUtilities,
  addBase,
  theme,
  postcss,
}) {
  addBase(require("./text")(theme));

  addComponents(require("./components/btn")(theme));
  addComponents(require("./components/card")(theme));
  addComponents(require("./components/container"));
  addComponents(require("./components/link")(theme));
  addComponents(require("./components/tag")(theme));

  addComponents(require("./components/forms/checkbox")(theme));
  addComponents(require("./components/forms/input")(theme));
  addComponents(require("./components/forms/radio")(theme));
  addComponents(require("./components/forms/select")(theme));
  addComponents(require("./components/forms/textarea")(theme));

  forms.handler({ addBase, theme });
});
