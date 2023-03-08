const commonPaths = require("./common-paths");
const path = require("path");

const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: {
    window: [path.join(commonPaths.extensionPath, "window.js")],
    popup: [path, join(commonPaths.extensionPath, "popup.js")],
  },
  output: {
    path: path.join(commonPaths.buildOutputPath, "static"),
    filename: "[name].bundle.js",
    chunkFilename: "[id].chunk.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localsConvention: "camelCase",
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/[name].[hash].css",
    }),
  ],
};
