/**
 * @author :    Mei XinLin
 * @version :   1.0
 * @description :
 */
'use strict';

import gulp from 'gulp';

gulp.task('watchHubServer', ()=> {
  gulp.watch('./hub/**/*.js',['hubServer']);
});
