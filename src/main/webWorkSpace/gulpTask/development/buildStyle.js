/**
 * @author :    Mei XinLin
 * @version :   1.0
 * @description :  预处理js
 */
'use strict';

import gulp from 'gulp';
import util from 'gulp-load-plugins';
const $ = util();

const config = require(process.cwd() + '/config');

gulp.task('buildStyle', ()=> {
  return gulp.src(config.paths.styleSrc)
    .pipe($.sourcemaps.init({
      loadMaps: true
    }))
    .pipe($.sass({
      outputStyle: 'compressed',
      precision: 10
    }))
    .pipe($.autoprefixer({
      browsers: ['>5%']
    }))
    .pipe($.rename({
      dirname: "style"
    }))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(config.paths.buildPath))
    .pipe($.size({showFiles: true}))
});
