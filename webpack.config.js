const path = require('path');
const config = require('config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './app/src/index.js',
    vendors: './app/vendors/index.js'
  },
  output: {
    filename: 'bundle.[name].[hash].js',
    path: path.resolve(__dirname, 'dist'), //config.get('web-pack.public-path'),
  },
  plugins: [
   // plugin get template and inyect bundles definded in entry
   new HtmlWebpackPlugin({
     template: './app/src/index.html'
   }),
   new ExtractTextPlugin('bundle.[name].[hash].css'),
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
         fallback: 'style-loader',
         use: [
           {
             loader: 'css-loader',
             options: {
               minimize: config.get('web-pack.minimize-css'),
               sourceMap: false,
             },
           },
           {
             loader: 'postcss-loader',
           },
         ],
       }),
     },
   ],
 },
};
