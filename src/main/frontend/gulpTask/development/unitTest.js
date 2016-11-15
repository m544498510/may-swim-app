/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import gulp from 'gulp';
import {Server} from 'karma';
import path from 'path';

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    new Server({
        configFile: path.resolve(process.cwd(),'test/karma.conf.js'),
        singleRun: true
    }, done).start();
});
