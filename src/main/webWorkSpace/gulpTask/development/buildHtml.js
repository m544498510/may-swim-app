/**
 * @author :    Mei XinLin
 * @version :   1.0
 * @description :  预处理html
 */
'use strict';

import gulp from 'gulp';
import util from 'gulp-load-plugins';
const $ = util();

const config = require(process.cwd() + '/config');

gulp.task('build:html', ()=> {
  return gulp.src(config.paths.htmlSrc)
    .pipe($.include())
      .on('error',console.log)
    .pipe($.rename({
      dirname: "html"
    }))
    .pipe(gulp.dest(config.paths.buildPath))
});
