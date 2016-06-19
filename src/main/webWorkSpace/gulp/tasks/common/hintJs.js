'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./../../config.js');

// 通过jshint检测js语法
gulp.task('hint:js', function () {
  return gulp.src(config.paths.scriptSrc)
    .pipe($.jshint(".jshintrc"))
    .pipe($.jshint.reporter('jshint-stylish'))
});
