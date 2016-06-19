'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./../../config.js');

gulp.task('build:style--production',function(){
  var result,appConfig,
    appNames = config.apps.appNames;

  for(var i = 0; i < appNames.length; i++){
    appConfig = config.apps[appNames[i]];
    result = gulp.src(appConfig.styles)
        .pipe($.sass({
            outputStyle: 'compressed',
            precision: 10
        }))
        .pipe($.rev())
        .pipe(gulp.dest(config.paths.styleDist+appConfig.name+'/'))
        .pipe($.rev.manifest({
            path:config.paths.rev+"rev-manifest.json",
            merge: true
        }))
        .pipe(gulp.dest("./"))

  }
  return result;
});
