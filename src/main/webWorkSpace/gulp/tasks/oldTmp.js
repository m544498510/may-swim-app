'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var rimraf = require('rimraf');
var config = require('./../config.js');


//   style task
gulp.task('bulidOldStyle',function(){
  return gulp.src(config.paths.oldSass+'*.scss')
    .pipe($.sourcemaps.init,{
      loadMaps:true
    })
    .pipe($.sass,{
      outputStyle: 'compressed',
      precision: 10
    })
    .pipe($.sourcemaps.write,"./")
    .pipe(gulp.dest(config.paths.oldSass))
});


gulp.task('oldStyle1',function(){
    return gulp.src('../webapp/static/pages/css/create_project.scss')
        .pipe($.sourcemaps.init({
            loadMaps:true
        }))
        .pipe($.sass({
          precision: 10
        }))
        .pipe($.sourcemaps.write("./"))
        .pipe(gulp.dest(config.paths.oldSass))
        .pipe($.size({showFiles:true}))
});
