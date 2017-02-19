const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './app/index.js',
    vendors: './vendors/index.js'
  },
  output: {
    filename: 'bundle.[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
   // plugin get template and inyect bundles definded in entry
   new HtmlWebpackPlugin({
     template: './index.html'
   }),
   new ExtractTextPlugin('[name].bundle.css'),
 ],
 module: {
   rules: [
     {
       test: /\.jsx?$/,
       exclude: /node_modules/,
       use: 'babel-loader',
     },
     {
       test: /\.css$/,
       loader: ExtractTextPlugin.extract({
         loader: 'css-loader?importLoaders=1!postcss-loader'
       }),
     },
   ],
 },
};
