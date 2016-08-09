/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import gulp from 'gulp';
import rename from 'gulp-rename';
import size from 'gulp-size';

const config = require(process.cwd()+'/config');
const lib = config.lib;

gulp.task('lib',()=>{
  for (var key in lib) {
    gulp.src(lib[key])
      .pipe(rename({
        dirname: key
      }))
      .pipe(size())
      .pipe(gulp.dest(config.paths.buildPath+'lib/'))
  }
  return true;
});
