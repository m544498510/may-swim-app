/**
 * @author May
 * @version 1.0.0
 */
'use strict';

import browserSync from 'browser-sync';

export default ()=>{
  return browserSync.init({
    files: ['src/**/*.*','build/**/*.css'],
    proxy: {
      target: "http://localhost:9090",
      ws: true
    }
  });
};
