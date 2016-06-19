/**
 * Created by Mei Xinlin on 2016/3/11.
 */
'use strict';

var gulp = require('gulp');
var rimraf = require('rimraf');
var config = require('../../../config.js');

gulp.task('clean:lib',function(callback){
    rimraf(config.paths.libDist, callback);
});


