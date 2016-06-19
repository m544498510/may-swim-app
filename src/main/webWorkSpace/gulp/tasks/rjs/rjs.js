/**
 * Created by May on 2016/3/16.
 */
'use strict';

var gulp = require('gulp');
var gutils = require('gulp-load-utils')(['colors', 'env', 'log']);
var runSequence = require('run-sequence');

gulp.task('rjs', function () {
    /*
     * 用于获取输入的环境信息，并声明出来。（默认环境为development）
     * Run `gulp --production`
     */
    var type = gutils.env.production ? 'production' : 'development';

    if (type == "development") {
        runSequence('clean:html',['build:rjs','build:lib'],'build:html');
    } else if (type == "production") {
        runSequence('clean:html',['build:rjs--production','build:lib--production'],'build:html--production');
    }

});
