/**
 * 整个项目的基本路径配置
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

//原始资源路径
const srcPath = './src/';

const buildPath = './dist/';
//预处理后资源保存路径
const distPath = '../webapp/dist/';

const path = {
  src: srcPath,
  dist: distPath,
  buildPath: buildPath,
  assetPath:srcPath+'assets/',
  rev: './dist/revInfo/',

  scriptSrc: srcPath + '**/*.js',

  styleSrc: srcPath + '**/*.scss',

  assetsSrc: srcPath + 'assets/**/*.*',

  htmlSrc: srcPath + '**/*.html',

  imageSrc: srcPath + '/common/img/**/*.*',
  imageBuild: buildPath + 'img/',

  nls: './src/nls/**/*.jsonData',
  nlsBuild: buildPath + 'nls/'
};

export default path;
