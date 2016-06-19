'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./../../config.js');

gulp.task('build:style',function(){
  var result,appConfig,
    appNames = config.apps.appNames;

  for(var i = 0; i < appNames.length; i++){
    appConfig = config.apps[appNames[i]];
    result = gulp.src(appConfig.styles)
      .pipe($.sourcemaps.init({
        loadMaps:true
      }))
      .pipe($.sass({
        outputStyle: 'compressed',
        precision: 10
      }))
      .pipe($.sourcemaps.write())
      .pipe(gulp.dest(config.paths.styleDist+appConfig.name+'/'))
      .pipe($.size({showFiles:true}))
  }
  return result;
});
