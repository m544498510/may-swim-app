/**
 * cat页面
 * @author :    Mei XinLin
 * @version :   1.0
 */

var path = require('../path.js'),
    srcPath = path.src,
    moduleSrcPath = path.moduleSrcPath;

module.exports = {
    moduleName: 'catApp',
    js: [
        moduleSrcPath + 'catApp/**/*.js'
    ],
    styles: [],
    rjsConfig: {
        mainJs: 'catApp/app',
        exclude: [
            'jquery', 'bootbox', 'rangy', 'hotkeys',
            'mCustomScrollbar', 'jquery-ui', 'layout',
            'svg-pan-zoom', 'bootstrap']
    }

};

