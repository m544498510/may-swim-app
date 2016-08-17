/**
 * @author :    Mei XinLin
 * @version :   1.0
 * @description :
 */
'use strict';

import gulp from 'gulp';
import $ from 'gulp-load-plugins';

const config = require(process.cwd() + '/config');

gulp.task('watch',['buildStyle','buildHtml','assets'], ()=> {
  gulp.watch(config.paths.styleSrc,['buildStyle']);
  gulp.watch(config.paths.htmlSrc,['buildHtml']);
  gulp.watch(config.paths.assetPath,['assetPath']);

});
