/**
 * 整个项目的基本路径配置
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

//原始资源路径
var srcPath = './src/';

var buildPath = './build/';
//预处理后资源保存路径
var distPath = '../webapp/dist/';

var path = {
  src: srcPath,
  dist: distPath,
  buildPath: buildPath,
  rev: './build/revInfo/',

  scriptSrc: srcPath + '**/*.js',

  styleSrc: srcPath + '**/*.scss',

  htmlSrc: [
    './src/modules/**/*.jsp'
  ],
  htmlBuild: buildPath + 'html/',

  imageSrc: srcPath + '/common/img/**/*.*',
  imageBuild: buildPath + 'img/',

  nls: './src/nls/**/*.jsonData',
  nlsBuild: buildPath + 'nls/'
};

module.exports = path;
