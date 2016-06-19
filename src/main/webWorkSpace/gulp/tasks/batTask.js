'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

/**
 * 仅用于bat文件
 */
gulp.task('batDefault',['default','pauseBat'],function(){
  console.log("任务结束，请ctrl+c");
});

//用于暂停bat程序
gulp.task('pauseBat',function(){
  $.watch("./*.*",function(){

  });
});

