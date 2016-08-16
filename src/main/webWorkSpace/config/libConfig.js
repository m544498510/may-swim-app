/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

const libFolder = process.cwd() + '/node_modules/';
export default {
  'jquery': libFolder + 'jquery/dist/jquery.min.js',
  'bootstrap': [
    libFolder + 'bootstrap/dist/css/bootstrap.min.css',
    libFolder + 'bootstrap/dist/css/bootstrap-theme.min.css',
    libFolder + 'bootstrap/dist/js/bootstrap.min.js'
  ]


}
