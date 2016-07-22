/**
 * @author :    Mei XinLin
 * @version :   1.0
 * @description :  预处理js
 */
'use strict';

import gulp from 'gulp';
import webpack from 'webpack-stream';

import {webpackDevConf} from '../webpack.config';

gulp.task('buildJs',()=>{
  return gulp.src(['src/app/script/mangekyou.js', 'src/app/script/worker/worker.js'])
    .pipe(webpack(webpackDevConf))
    .pipe(gulp.dest('./build'));
});
