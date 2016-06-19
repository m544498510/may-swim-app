/**
 * 项目编辑页面配置
 * @author :    Mei XinLin
 * @version :   1.0
 */

var path = require('../path.js'),
    srcPath = path.src,
    moduleSrcPath = path.moduleSrcPath;

module.exports = {
    moduleName: 'editProApp',
    js: [
        moduleSrcPath + 'editProApp/**/*.js'
    ],
    styles: [],
    rjsConfig: {
        //mainJs路径相对于libConfing 里面的baseUrl
        mainJs: 'editProApp/app',
        exclude: ['jquery', 'uniform', 'bootbox', 'datetimepicker',
            'mCustomScrollbar', 'webUploader', 'jquery-ui', 'artTemplate',
            'bootstrap-hover-dropdown', 'bootstrap', 'toastr']
    }
};

