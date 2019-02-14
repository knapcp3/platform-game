const path = require("path");

const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const dirJs = path.resolve(__dirname, "src/js");
const dirHtml = path.resolve(__dirname, "src/html");
const dirBuild = path.resolve(__dirname, "build");

module.exports = {
  entry: path.resolve(dirJs, "index.js"),
  output: {
    path: dirBuild,
    filename: "bundle.js"
  },
  devServer: {
    contentBase: dirBuild
  },
  module: {
    rules: [
      {
        test: dirJs,
        use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            }
          }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: dirHtml } // to: output.path
    ])
  ],
  stats: {
    colors: true
  },
  mode: "development",
  // Sourcemaps for the bundle
  devtool: "source-map"
};
