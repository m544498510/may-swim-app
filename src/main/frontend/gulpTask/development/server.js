/**
 * @author May
 * @version 1.0.0
 */
'use strict';

import gulp from 'gulp';

gulp.task('serve',()=>{
  require(process.cwd()+'/server/browserSyncServer.js');
});
