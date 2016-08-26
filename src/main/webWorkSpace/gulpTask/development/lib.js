/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import gulp from 'gulp';
import util from 'gulp-load-plugins';
import rename from 'gulp-rename';

const $ = util();

const config = require(process.cwd()+'/config');
const lib = config.lib;

gulp.task('lib',()=>{
  for (var key in lib) {
    let libConfig = lib[key];
    console.log(libConfig.retainStruct);
    gulp.src(libConfig.path)
      .pipe($.if(
        !libConfig.retainStruct,
        rename({
          dirname: key
        })
      ))
      .pipe(gulp.dest(config.paths.buildPath+'lib/'))
  }
  return true;
});
