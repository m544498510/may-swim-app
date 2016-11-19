const path = require('path');
const webpack = require('webpack');

const basePath = path.resolve(process.cwd(), 'src/script');

//=========================================================
//  CONFIG
//---------------------------------------------------------
const config = {
  devtool: 'inline-source-map',
  module: {
    noParse : [
      /\/sinon\.js/
    ],
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test   : /sinon(\\|\/)pkg(\\|\/)sinon\.js/,
        loader : 'imports?define=>false,require=>false'
      }
    ]
  },
  externals: {
    'jsdom': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  resolve:{
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules'],
    root: basePath,
    alias : {
      sinon : 'sinon/pkg/sinon-1.17.6.js'
    }
  }

};
module.exports = config;
