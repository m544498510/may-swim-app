/**
 * Created by Mei Xinlin on 2016/3/10.
 */
'use strict';

var gulp = require('gulp');
var config = require('./../../config.js');

/*
 * 转移国际化文件
 */
gulp.task('move:nls', function () {
    return gulp.src(config.paths.nls)
        .pipe(gulp.dest(config.paths.nlsDist))
});
