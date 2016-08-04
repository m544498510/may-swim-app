/**
 * @author May
 * @version 1.0.0
 */
'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import util from 'gulp-load-plugins';
const $ = util();

gulp.task('hubServer',()=>{
  return gulp.src('./hub/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./build/hub'))
    .pipe($.size())

});
