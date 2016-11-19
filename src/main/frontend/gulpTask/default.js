/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import gulp from 'gulp';
import runSequence from 'run-sequence';
import gutilsModule from 'gulp-load-utils';

const config = require(process.cwd() + '/config');

const gutils = gutilsModule(['colors', 'env', 'log']);


gulp.task('default', ()=> {
  /*
   * 用于获取输入的环境信息，并声明出来。（默认环境为development）
   * Run `gulp --production`
   */
  var type = gutils.env.production ? 'production' : 'development';
  global.NODE_ENV = type;
  if (type == 'development') {

    runSequence('clean', ['build:style', 'build:html', 'assets', 'lib', 'build:js'], 'dist', 'complete');
  } else if (type == 'production') {
    runSequence(['clean', 'unitTest'], ['build:js--production', 'build:style--production', 'min:img', 'move:nls', 'move:lib'], 'build:html--production', 'dist', 'complete');
  } else {
    gutils.log(gutils.colors.green('////////////////////////////////////'));
    gutils.log(gutils.colors.green('///                              ///'));
    gutils.log(gutils.colors.green('///   unknown development type   ///'));
    gutils.log(gutils.colors.green('///                              ///'));
    gutils.log(gutils.colors.green('////////////////////////////////////'));
  }
});
