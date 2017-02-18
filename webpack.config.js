const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
     template: `./index.html`
   }),
 ],
 module: {
   rules: [
     {
       test: /\.jsx?$/,
       exclude: /node_modules/,
       use: 'babel-loader',
     },
   ],
 },
};
