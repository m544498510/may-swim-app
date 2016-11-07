/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import gulp from 'gulp';
import size from 'gulp-size';

const basePath = process.cwd();
const config = require(process.cwd() + '/config');

gulp.task('dist',function(){
  return gulp.src(config.paths.buildPath+'**/*.*')
    .pipe(size())
    .pipe(gulp.dest(config.paths.dist))
});
