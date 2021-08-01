const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'production',
  //context: path.resolve(__dirname, 'src'),
  entry: ['./src/main.js'],
  devtool: "source-map",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'app')
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['css-loader'],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ]
  }
}