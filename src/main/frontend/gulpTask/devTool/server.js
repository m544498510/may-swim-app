/**
 * @author May
 * @version 1.0.0
 */
'use strict';

import gulp from 'gulp';
import createBrowserSync from '../../server/browserSyncServer';

gulp.task('serve',()=>{
  createBrowserSync(false);
});
