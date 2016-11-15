module.exports = config => {
  config.set({
    base: '../',

    frameworks: ['mocha','chai'],

    files: ['karma.entry.js'],

    preprocessors: {
      'karma.entry.js': ['webpack', 'sourcemap']
    },

    webpack: require('../config/webpack.config'),

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
      'karma-sourcemap-loader'
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
