/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import gulp from 'gulp';
import env from 'gulp-env';
import {Server} from 'karma';
import path from 'path';

/**
 * Run test once and exit
 */
gulp.task('unitTest', function (done) {
    env.set({NODE_ENV: 'test'});
    new Server({
        //__dirname: 当前文件的路径
        configFile: path.resolve(process.cwd(),'test/karma.conf.js'),
        singleRun: true
    }, done).start();
});
