/**
 * 整个项目的基本路径配置
 * @author :    Mei XinLin
 * @version :   1.0
 */

//原始资源路径
var srcPath = './src/';
//模块路径
var moduleSrcPath = srcPath + 'modules/';
//预处理后资源保存路径
var distPath = '../webapp/dist/';

module.exports = {
    src: srcPath,
    moduleSrcPath: moduleSrcPath,
    dist: distPath,
    rev: './tmp/revInfo/',

    libDist: distPath + 'lib/',
    libTmp: './tmp/libTmp/',

    scriptSrc: moduleSrcPath + '**/*.js',
    scriptDist: distPath + 'js/',

    styleSrc: srcPath + 'sass/**/*.scss',
    styleDist: distPath + 'css/',

    htmlSrc: [
        './src/modules/**/*.jsp'
    ],
    htmlDist: distPath + 'html',

    imageSrc: srcPath + '/img/**/*.*',
    imageDist: distPath + 'img/',

    nls: './src/nls/**/*.jsonData',
    nlsDist: distPath + 'nls/',

    oldSass: '../webapp/static/pages/css/'

};
