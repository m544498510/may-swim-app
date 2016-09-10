/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import gulp from 'gulp';

const config = require(process.cwd() + '/config');

gulp.task('assets',()=>{
  return gulp.src(config.paths.assetsSrc)
    .pipe(gulp.dest(config.paths.buildPath + 'assets/'))
});
