const { override, fixBabelImports, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  //config for babel import for ant design
  fixBabelImports("antd", {
    libraryDirectory: "es",
    style: "css",
  }),

  //Adding path aliases
  addWebpackAlias({
    ["@components"]: path.resolve(__dirname, "./src/components"),
  })
);
