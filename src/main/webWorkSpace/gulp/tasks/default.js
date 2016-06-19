'use strict';

var gulp = require('gulp');
var gutils = require('gulp-load-utils')(['colors', 'env', 'log']);
var runSequence = require('run-sequence');

gulp.task('default', function () {
    /*
     * 用于获取输入的环境信息，并声明出来。（默认环境为development）
     * Run `gulp --production`
     */
    var type = gutils.env.production ? 'production' : 'development';

    if (type == "development") {
        runSequence(['hint:js', 'clean'], ['build:js', 'build:style', 'build:html', 'move:img','move:nls','move:lib'], 'complete');
    } else if (type == "production") {
        runSequence(['clean','unitTest'], ['build:js--production', 'build:style--production', 'min:img','move:nls','move:lib'], 'build:html--production', 'complete');
    } else {
        gutils.log(gutils.colors.green('////////////////////////////////////'));
        gutils.log(gutils.colors.green('///                              ///'));
        gutils.log(gutils.colors.green('///   unknown development type   ///'));
        gutils.log(gutils.colors.green('///                              ///'));
        gutils.log(gutils.colors.green('////////////////////////////////////'));
    }

});
