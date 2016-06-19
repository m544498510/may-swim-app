'use strict';

var gulp = require('gulp');
var gutils = require('gulp-load-utils')(['colors', 'env', 'log']);

gulp.task('complete',function(){
  var type = gutils.env.production ? 'production ' : 'development';
  gutils.log(gutils.colors.green('///////////////////////////////////////////'));
  gutils.log(gutils.colors.green('///                                     ///'));
  gutils.log(gutils.colors.green('///   Finish building for '+ type + '   ///'));
  gutils.log(gutils.colors.green('///                                     ///'));
  gutils.log(gutils.colors.green('///////////////////////////////////////////'));
});




