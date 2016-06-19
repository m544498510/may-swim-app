/**
 *  gulp的配置文件
 *  用于定义各个app所需模块，之后将各个app按需合并压缩。
 *  @author: Mei XinLin
 */

//根目录为webWorkSpace
var srcPath = './src2/';
var moduleSrcPath = srcPath + 'modules/';
var distPath = '../webapp/dist/';

module.exports = {
    apps: {
        appNames: ['managerAppRjs'],
        managerAppRjs: {
            js: [
                moduleSrcPath + 'managerApp/**/*.js',
                moduleSrcPath + 'common/**/*.js'
            ],
            styles: [
                moduleSrcPath + '/managerApp/**/*.scss',
                moduleSrcPath + 'common/**/*.scss'
            ],
            rjsConfig:{
                baseUrl: './src2/modules/',
                mainJs: 'managerApp/managerApp.main',
                exclude:['jquery','artTemplate','StateMan']
            }
        }
    },

    libConfig : {
        paths:{
            'jquery':'../lib/jquery/dist/jquery.min',
            'artTemplate':'../lib/artTemplate/dist/template',
            'StateMan':'../lib/stateman/stateman.min'
        },
        shim:{

        }
    },

    paths: {
        src:    srcPath,
        moduleSrcPath:moduleSrcPath,
        dist:   distPath,
        rev:    './src/revInfo/',

        libSrc: srcPath + 'lib/**/*.*',
        libDist: distPath + 'lib/',
        libTmp: srcPath+ 'libTmp/',

        scriptSrc: moduleSrcPath + '**/*.js',
        scriptDist: distPath + 'js/',

        styleSrc: srcPath + 'sass/**/*.scss',
        styleDist: distPath + 'css/',

        htmlSrc: [
            './src/modules/**/*.html',
            './src/modules/**/*.jsp',
            './src2/**/*.jsp'
        ],
        htmlDist: distPath + 'html',

        imageSrc: srcPath + '/img/**/*.*',
//        imageSrc:[
//            appPath + 'static/pages/img/**/*.*',
//            appPath + 'static/global/img/**/*.*'
//
//        ],
        imageDist: distPath + 'img/',

        nls: './src/nls/**/*.jsonData',
        nlsDist: distPath + 'nls/',

        oldSass: '../webapp/static/pages/css/'
    }

};
