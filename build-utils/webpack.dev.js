const commonPaths = require("./common-paths");
const path = require("path");
const webpack = require("webpack");
const port = process.env.PORT || 8000;

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    window: [path.join(commonPaths.extensionPath, "window.js")],
    popup: [path.join(commonPaths.extensionPath, "popup.js")],
  },
  output: {
    path: path.join(commonPaths.devOutputPath, "static"),
    filename: "[name].bundle.js",
    chunkFilename: "[id].chunk.js",
  },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
    extensions: ["js", "ts", "tsx"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localsConvention: "camelCase",
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devServer: {
    host: "localhost",
    port: port,
    publicPath: "/static/",
    contentBase: "./dev",
    historyApiFallback: true,
    hot: true,
    open: true,
  },
};
