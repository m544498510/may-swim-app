/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';
import gulp   from 'gulp';
import rimraf from 'rimraf';

import {config} from '../../config/config.js';

/***
 *  clean task
 */
gulp.task('clean',(callback)=>{
  rimraf(config.paths.dist, callback);
});

