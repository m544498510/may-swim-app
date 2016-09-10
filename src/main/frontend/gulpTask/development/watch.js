/**
 * @author :    Mei XinLin
 * @version :   1.0
 * @description :
 */
'use strict';

import gulp from 'gulp';
import $ from 'gulp-load-plugins';

const config = require(process.cwd() + '/config');

gulp.task('watch',['build:style','build:html','assets'], ()=> {
  gulp.watch(config.paths.styleSrc,['build:style']);
  gulp.watch(config.paths.htmlSrc,['build:html']);
  gulp.watch(config.paths.assetPath,['assetPath']);

});
