/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

var path = require('path');
var webpack = require('webpack');
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname,'../src/mainApp/index')
  ],
  output: {
    path: path.join(__dirname, '/../dist'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.json$/,
        loaders: [ 'json' ],
        exclude: /node_modules/
      }
    ]
  }
};
