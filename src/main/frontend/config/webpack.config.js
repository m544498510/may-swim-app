const path = require('path');
const webpack = require('webpack');


const basePath = path.resolve(process.cwd(), 'src/script');

function getConfig(NODE_ENV) {

//=========================================================
//  ENVIRONMENT VARS
//---------------------------------------------------------
  const ENV_DEVELOPMENT = NODE_ENV === 'development';
  const ENV_PRODUCTION = NODE_ENV === 'production';
  const ENV_TEST = NODE_ENV === 'test';

//=========================================================
//  LOADERS
//---------------------------------------------------------
  const loaders = {
    js: {
      test: /\.js?$/,
      exclude: /node_modules/,
      loaders: ['babel'],
    },
    json: {
      test: /\.json$/,
      loader: 'json',
    }
  };


//=========================================================
//  CONFIG
//---------------------------------------------------------
  const config = {};


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
      mainApp: [basePath + '/mainApp/index.js'],
      userApp: [basePath + '/userApp/index.js'],
      vendor: [basePath + '/vendor.js']
    };

    config.output = {
      filename: '[name]_bundle.js',
      path: path.resolve(process.cwd(), '/dist/js/'),
      publicPath: '/dist/js/'
    };
    config.plugins.push(
      new webpack.optimize.CommonsChunkPlugin('userAppVendor.js', ['userApp', 'vendor'])
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
        'webpack-hot-middleware/client?reload=true'
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

    config.externals = {
      'jsdom': 'window',
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true
    };

    config.module.loaders.push(loaders.json);
  }


  return config;
}

module.exports = getConfig;
