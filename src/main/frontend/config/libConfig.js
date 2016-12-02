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
      libFolder + 'bootstrap/dist/css/bootstrap.min.css'
    ]
  },

  'fontAwesome': {
    retainStruct: true,
    path: [
      libFolder + 'font-awesome/**/font-awesome.min.css',
      libFolder + 'font-awesome/**/fontawesome-webfont.eot',
      libFolder + 'font-awesome/**/fontawesome-webfont.svg',
      libFolder + 'font-awesome/**/fontawesome-webfont.ttf',
      libFolder + 'font-awesome/**/fontawesome-webfont.woff',
      libFolder + 'font-awesome/**/fontawesome-webfont.woff2',
      libFolder + 'font-awesome/**/FontAwesome.otf'

    ]
  }


}
