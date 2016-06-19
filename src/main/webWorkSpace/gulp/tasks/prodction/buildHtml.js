'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./../../config.js');

gulp.task("build:html--production",function(){
    var paths = config.paths.htmlSrc;
    if( typeof paths != 'string'){
        paths.push(config.paths.rev + "**/*.json");
    }else {
        paths = [
            config.paths.rev + "**/*.json",
            config.paths.htmlSrc
        ]
    }
    return gulp.src(paths)
        .pipe($.include())
            .on('error',console.log)
        .pipe($.revCollector())
        .pipe($.size())
        .pipe(gulp.dest(config.paths.htmlDist));
});
