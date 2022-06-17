const path = require("path");
var webpack = require("webpack");
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        // exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.mp3$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
    new HtmlWebpackPlugin({
      title: "Scaffold Public",
      // favicon: "./public/Favicon.ico",
      template: "./public/index.html",
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new webpack.ProvidePlugin({
         "React": "react",
      }),
  ],
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      process: "process/browser",
    },
  },
};

// const path = require("path");
// var webpack = require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: ["babel-loader"],
//       },
//       {
//         test: /\.(sa|sc|c)ss$/,
//         // exclude: /node_modules/,
//         use: ["style-loader", "css-loader", "sass-loader"],
//       },
//       {
//         test: /\.mp3$/,
//         use: ["file-loader"],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: "Communication Scaffold: Quality Video Collaboration Solution",
//       favicon: "./public/favicon.ico",
//       template: "./public/index.html",
//     }),
//     new webpack.ProvidePlugin({
//       process: "process/browser",
//     }),
//     new webpack.IgnorePlugin({ resourceRegExp:/vertx/, contextRegExp:/ajv/ }),
//     new NodePolyfillPlugin({
// 			excludeAliases: ["console"]
// 		})
//   ],
//   resolve: {
//     extensions: ["*", ".js", ".jsx"],
//     alias: {
//       process: "process/browser",
//     },
//   },
// };
