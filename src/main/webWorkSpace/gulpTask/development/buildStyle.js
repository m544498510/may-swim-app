/**
 * @author :    Mei XinLin
 * @version :   1.0
 * @description :  预处理js
 */
'use strict';

import gulp from 'gulp';
import util from 'gulp-load-plugins';
const autoPreFixer = require('autoprefixer');
const mqPacker = require('css-mqpacker');
const cssNano = require('cssnano');

const $ = util();

const config = require(process.cwd() + '/config');

gulp.task('build:style', ()=> {
  let postcssOption = [
    autoPreFixer({
      browsers: ['>5%','last 2 versions'],
      cascade: false
    }),
/*
    mqPacker({
      sort: true
    }),
    cssNano()
*/
  ];

  return gulp.src(config.paths.styleSrc)
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      //outputStyle: 'compact',
      precision: 10
    }))
    .pipe($.postcss(postcssOption))
    .pipe($.rename({
      dirname: "style"
    }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(config.paths.buildPath))
});
