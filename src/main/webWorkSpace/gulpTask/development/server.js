/**
 * @author May
 * @version 1.0.0
 */
'use strict';

import gulp from 'gulp';

import staticServerInit from '../../server/staticServer';


gulp.task('serve',()=>{
  staticServerInit();
});
