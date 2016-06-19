'use strict';

var gulp = require('gulp');
var pngquant = require('imagemin-pngquant');
var $ = require('gulp-load-plugins')();
var config = require('./../../config.js');

/*
 * 删除图片无关信息
 */
gulp.task('min:img', function () {
    return gulp.src(config.paths.imageSrc)
        .pipe($.size())
        .pipe($.imagemin({
            progressive: true,
            interlaced: true,
            multipass: true

        }))
        .pipe(gulp.dest(config.paths.imageDist))
        .pipe($.size())
});
