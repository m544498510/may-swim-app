/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import gulp from 'gulp';
import size from 'gulp-size';

const basePath = process.cwd();

gulp.task('dist',function(){
  return gulp.src(basePath+'/build/**/*.*')
    .pipe(size())
    .pipe(gulp.dest(basePath+'/../webapp/dist'))
});
