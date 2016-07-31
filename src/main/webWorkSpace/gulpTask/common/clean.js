/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';
import gulp   from 'gulp';
import rimraf from 'rimraf';

const config = require(process.cwd() + '/config');

/***
 *  clean task
 */
gulp.task('clean',(callback)=>{
  rimraf(config.paths.buildPath,callback);
  rimraf(config.paths.dist, callback);
});

