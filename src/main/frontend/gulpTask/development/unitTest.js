/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import gulp from 'gulp';
import {Server} from 'karma';
import path from 'path';
import gutilsModule from 'gulp-load-utils';


const gutils = gutilsModule(['env']);

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  const flag = !gutils.env.watch;

  new Server({
    configFile: path.resolve(process.cwd(), 'test/karma.conf.js'),
    singleRun: flag
  }).start();
  done();
});
