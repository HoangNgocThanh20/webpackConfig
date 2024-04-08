const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    // Define multiple entry points, each corresponding to a different HTML file
    page1: "./src/index.js",
    page2: "./src/hello.js",
    // Add more entry points if needed
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({ filename: "index.html", chunks: ["page1"] }),
    new HtmlWebpackPlugin({ filename: "hello.html", chunks: ["page2"] }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
