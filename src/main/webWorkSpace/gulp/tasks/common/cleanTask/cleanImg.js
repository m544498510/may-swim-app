'use strict';

var gulp = require('gulp');
var rimraf = require('rimraf');
var config = require('../../../config.js');

gulp.task('clean:img',function(callback){
  rimraf(config.paths.imageDist, callback);
});


