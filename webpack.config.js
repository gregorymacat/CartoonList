const path = require('path');

module.exports = {
  entry: path.join(__dirname, "client", "index.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "client", "public")
  },
  module: {
    rules: [{
      test: /\.(jsx|js)?$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  },
  mode: "development"
}