'use strict';

var gulp = require('gulp');
var Server = require('karma').Server;

/**
 * Run test once and exit
 */
gulp.task('unitTest', function (done) {
    new Server({
        //__dirname: 当前文件的路径
        configFile: __dirname + '/../../../test/karma.conf.js',
        singleRun: true
    }, done).start();
});
