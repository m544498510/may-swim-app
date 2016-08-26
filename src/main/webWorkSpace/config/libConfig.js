/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

const libFolder = process.cwd() + '/node_modules/';
export default {
  'jquery': {
    retainStruct: false,
    path: libFolder + 'jquery/dist/jquery.min.js'
  },
  'bootstrap': {
    retainStruct: false,
    path: [
      libFolder + 'bootstrap/dist/css/bootstrap.min.css',
      libFolder + 'bootstrap/dist/css/bootstrap-theme.min.css',
      libFolder + 'bootstrap/dist/js/bootstrap.min.js'
    ]
  },

  'fontAwesome': {
    retainStruct: true,
    path: [
      libFolder + 'font-awesome/css/font-awesome.min.css',
      libFolder + 'font-awesome/fonts/*.*'
    ]
  }


}
