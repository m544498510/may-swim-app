const path = require('path');
const webpack = require('webpack');


const basePath = process.cwd();
//=========================================================
//  ENVIRONMENT VARS
//---------------------------------------------------------
let NODE_ENV = process.env.NODE_ENV;

let ENV_DEVELOPMENT = NODE_ENV === 'development';
const ENV_PRODUCTION = NODE_ENV === 'production';
const ENV_TEST = NODE_ENV === 'test';


if (!ENV_TEST && !ENV_PRODUCTION) {
  NODE_ENV = 'development';
  ENV_DEVELOPMENT = true;
}

//=========================================================
//  LOADERS
//---------------------------------------------------------
const loaders = {
  js: {
    test: /\.js?$/,
    exclude: /node_modules/,
    loaders: ['babel'],
  }
};


//=========================================================
//  CONFIG
//---------------------------------------------------------
const config = {};
export default config;
module.exports = config;


config.resolve = {
  extensions: ['', '.js'],
  modulesDirectories: ['node_modules'],
  root: basePath
};

config.plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.NoErrorsPlugin()

];
config.module = {
  loaders: [
    loaders.js
  ]
};


//=====================================
//  DEVELOPMENT or PRODUCTION
//-------------------------------------
if (ENV_DEVELOPMENT || ENV_PRODUCTION) {
  config.entry = {
    mainApp: [basePath + '/src/script/mainApp/index.js'],
    userApp: [basePath + '/src/script/userApp/index.js'],
    vendor: [basePath +'/src/script/vendor.js']
  };

  config.output = {
    filename: '[name]_bundle.js',
    path: basePath + '/build/js/',
    publicPath: '/dist/js/'
  };
  config.plugins.push(
    new webpack.optimize.CommonsChunkPlugin('userAppVendor.js',  ['userApp','vendor'])
  );
}

//=====================================
//  DEVELOPMENT
//-------------------------------------
if (ENV_DEVELOPMENT) {
  config.debug = true;
  config.devtool = 'source-map';

  for (let key in config.entry) {
    config.entry[key].unshift(
      'react-hot-loader/patch',
     // 'webpack/hot/dev-server',
      'webpack-hot-middleware/client'
    )
  }

  config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );
}


//=====================================
//  PRODUCTION
//-------------------------------------
if (ENV_PRODUCTION) {
  //config.devtool = 'source-map';

  //config.entry.vendor = './src/vendor.js';

  config.plugins.push(
    /*
     new webpack.optimize.CommonsChunkPlugin({
     name: 'vendor',
     minChunks: Infinity
     }),
     */
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        dead_code: true, // eslint-disable-line camelcase
        screw_ie8: true, // eslint-disable-line camelcase
        unused: true,
        warnings: false
      }
    })
  );
}


//=====================================
//  TEST
//-------------------------------------
if (ENV_TEST) {
  config.devtool = 'inline-source-map';
}
