module.exports = config => {
  config.set({
    base: '../',

    frameworks: ['mocha','chai'],

    files: ['karma.entry.js'],

    preprocessors: {
      'karma.entry.js': ['webpack', 'sourcemap']
    },

    webpack: require('../config/webpack.conf.test'),

    webpackServer: {
      noInfo: true
    },

    reporters: ['dots'],

    logLevel: config.LOG_INFO,
    colors: true,
    autoWatch: true,

    singleRun: false,

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
