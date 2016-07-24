/**
 * @author May
 * @version 1.0.0
 */
'use strict';

var path = require('../path.js');

var srcPath = path.src;
var moduleSrcPath = path.moduleSrcPath;

var moduleConfig = {
  moduleName: 'mainApp',
  js: [
    moduleSrcPath + 'common/**/*.js',
    moduleSrcPath + 'main/**/*.js'
  ],
  styles: []
};

module.exports = moduleConfig;

