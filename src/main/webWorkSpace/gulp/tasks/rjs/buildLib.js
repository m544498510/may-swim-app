/**
 * Created by Mei Xinlin on 2016/3/25.
 */
'use strict';

var gulp = require("gulp");
var $ = require('gulp-load-plugins')();
var config = require('./../../config2.js');

gulp.task('build:lib--production',['rjsLib'],function(){
    return gulp.src( config.paths.libTmp + '**/*.js')
        .pipe($.rev())
        .pipe(gulp.dest(config.paths.libDist))
        .pipe($.rev.manifest({
            path:config.paths.rev+"rev-manifest.json",
            merge: true
        }))
        .pipe(gulp.dest("./"));

});
