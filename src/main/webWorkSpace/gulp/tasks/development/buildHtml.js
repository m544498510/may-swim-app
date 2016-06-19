/**
 * Created by Mei Xinlin on 2016/2/17.
 */
'use strict';

var gulp = require('gulp');
var config = require('./../../config.js');
var $ = require('gulp-load-plugins')();

gulp.task("build:html",function(){
    return gulp.src(config.paths.htmlSrc)
        .pipe($.include())
            .on('error',console.log)
        .pipe(gulp.dest(config.paths.htmlDist));
});
