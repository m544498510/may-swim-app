/**
 * Created by Mei Xinlin on 2016/3/11.
 */
'use strict';

var gulp = require('gulp');
var config = require('./../../config.js');

/*
 * 转移第三方包
 */
gulp.task('move:lib', function () {
    return gulp.src(config.paths.libSrc)
        .pipe(gulp.dest(config.paths.libDist))
});
