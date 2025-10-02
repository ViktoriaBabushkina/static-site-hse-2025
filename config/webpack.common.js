const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlPages = require('./webpack.pages.js')


module.exports = {
   
  entry: './src/javascripts/index.js',
  output: {
    path: path.resolve('.', 'docs'),
    filename: '[name].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", 'postcss-loader'],
      },

      
      
    ]
  },
  plugins: [new MiniCssExtractPlugin(), ...htmlPages],



};