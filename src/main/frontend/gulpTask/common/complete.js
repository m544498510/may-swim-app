/**
 * @author May
 * @version 1.0.0
 */
'use strict';
import gulp from 'gulp';
const gutils = require('gulp-load-utils')(['colors', 'env', 'log']);

gulp.task('complete',function(){
  var type = gutils.env.production ? 'production ' : 'development';
  gutils.log(gutils.colors.green('///////////////////////////////////////////'));
  gutils.log(gutils.colors.green('///                                     ///'));
  gutils.log(gutils.colors.green('///   Finish building for '+ type + '   ///'));
  gutils.log(gutils.colors.green('///                                     ///'));
  gutils.log(gutils.colors.green('///////////////////////////////////////////'));
});

