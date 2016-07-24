/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import gulp         from 'gulp';
import babel        from 'gulp-babel';
import runSequence  from 'run-sequence';
import config       from '../config/config';

gulp.task('default',()=>{
  runSequence('buildJs');
});
