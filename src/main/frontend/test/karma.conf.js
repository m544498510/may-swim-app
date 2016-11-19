module.exports = config => {
  const webpackConfig = require('../config/webpack.config')('test');

  config.set({
    base: '../',

    frameworks: ['mocha','chai'],

    files: [
      '../node_modules/sinon/pkg/sinon.js',
      'karma.entry.js',
      {
        pattern: `./test-bundle.js`,
        watched: false,
        served: true,
        included: true
      }
    ],

    preprocessors: {
      './test-bundle.js':['webpack'],
      'karma.entry.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackServer: {
      noInfo: true
    },

    reporters: ['dots'],

    logLevel: config.LOG_INFO,
    colors: true,
    autoWatch: true,

    singleRun: true,

    browsers: ['Chrome'],
    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-chrome-launcher'
    ]
    // karma coverage
/*
    coverageReporter: {
      type : 'html',
      dir : 'test/log'
    }
*/
  });
};
