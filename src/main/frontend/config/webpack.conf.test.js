const path = require('path');
const webpack = require('webpack');

const basePath = path.resolve(process.cwd(), 'src/script');

//=========================================================
//  CONFIG
//---------------------------------------------------------
const config = {
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      }
    ]
  },
  externals: {
    'jsdom': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }


};
export default config;
module.exports = config;
