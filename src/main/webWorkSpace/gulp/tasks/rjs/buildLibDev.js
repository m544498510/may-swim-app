/**
 * Created by Mei Xinlin on 2016/3/25.
 */
'use strict';

var gulp = require("gulp");
var config = require('./../../config2.js');

gulp.task('build:lib',['rjsLib'],function(){
    console.log(config.paths.libDist);
    return gulp.src( config.paths.libTmp + '**/*.js')
        .pipe(gulp.dest(config.paths.libDist));
});
