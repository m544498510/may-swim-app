'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./../../config.js');

/*
 * 删除图片无关信息
 */
gulp.task('move:img', function () {
    return gulp.src(config.paths.imageSrc)
        .pipe(gulp.dest(config.paths.imageDist))
});
