/**
 * 第三方引用包配置
 * @author :    Mei XinLin
 * @version :   1.0
 */

var path = require('./path.js'),
    srcPath = path.src;

module.exports = {
    requireJsPath: srcPath + 'lib/bower/requirejs/require.js',
    baseUrl: './src/modules/',

    //path 是相对于baseUrl。
    paths: {
        'jquery': '../lib/bower/jquery/dist/jquery.min',
        'bootstrap': '../lib/bower/bootstrap/dist/js/bootstrap.min',
        'artTemplate': '../lib/bower/artTemplate/dist/template',
        'StateMan': '../lib/bower/stateman/stateman.min',
        'toastr': '../lib/bower/toastr/toastr',
        'bootbox': '../lib/plugins/bootbox/bootbox',
        'uniform': '../lib/plugins/jquery.uniform/jquery.uniform',
        'mCustomScrollbar': '../lib/bower/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar',
        'webUploader': '../lib/plugins/webuploader/dist/webuploader.min',
        'jquery-ui': '../lib/plugins/jquery-ui/jquery-ui-1.10.3.custom.min',
        'bootstrap-hover-dropdown': '../lib/bower/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min',
        //     'select2': '../lib/bower/select2/dist/js/select2.min',
        //      'select2zh-CN': '../lib/bower/select2/dist/js/i18n/zh-CN',

        'datetimepicker': '../lib/plugins/jquery-datetimepicker/jquery.datetimepicker',
        'jquery-mousewheel': '../lib/plugins/jquery-datetimepicker/bower_components/jquery-mousewheel/jquery.mousewheel',

        'rangy': '../lib/bower/rangy/rangy-core',
        'layout': '../lib/plugins/catlayout',
        'svg-pan-zoom': '../lib/bower/svg-pan-zoom/dist/svg-pan-zoom',
        'hotkeys': '../lib/plugins/hotkeys/jquery.hotkeys'

    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'bootstrap'
        },
        'hotkeys': {
            deps: ['jquery']
        }
    },

    //第三方依赖的其他资源（css,font等）
    pluginResource: {
        'bootstrap': [
            srcPath + 'lib/bootstrap/dist/css/bootstrap.min.css'
        ],
        'toastr': [
            srcPath + 'lib/toastr/toastr.min.css'
        ]
    }
};
