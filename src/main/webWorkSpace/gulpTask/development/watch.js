/**
 * @author :    Mei XinLin
 * @version :   1.0
 * @description :
 */
'use strict';

import gulp from 'gulp';
import $ from 'gulp-load-plugins';

const config = require(process.cwd() + '/config');

gulp.task('watch', ()=> {

  gulp.watch(config.paths.styleSrc,['buildStyle']);

});
