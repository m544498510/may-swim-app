'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var stylish = require('jshint-stylish');

gulp.task("min:html",function(){
  gulp.src("../webapp/WEB-INF/newJsp/**/*.*")
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true,
      loose: true
    }))
    .pipe($.rename({suffix:'.min'}))
    .pipe(gulp.dest("../webapp/WEB-INF/newJsp/"))
});
