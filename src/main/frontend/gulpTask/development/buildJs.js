/**
 * @author :    Mei XinLin
 * @version :   1.0
 * @description :  预处理js
 */
'use strict';

import gulp from 'gulp';
import webpack from 'webpack-stream';
import util from 'gulp-load-plugins';

const config = require(process.cwd() + '/config');

const $ = util();
const webpackDevConf = require(process.cwd()+'/config/webpack.config');


gulp.task('build:js',()=>{
  return gulp.src(webpackDevConf.entry.userApp)
    .pipe($.size({showFiles:true}))
    .pipe(webpack(webpackDevConf))
    .pipe(gulp.dest(config.paths.buildPath+'js'));
});
