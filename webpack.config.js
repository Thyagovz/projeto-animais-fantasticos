const path = require("path");

module.exports = {
  watch: true,
  mode: "production",
  entry: "./js/script.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: "javascript/auto",
      },
    ],
  },
};
