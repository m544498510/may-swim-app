'use strict';

var gulp = require('gulp');
var rimraf = require('rimraf');
var config = require('../../../config.js');

gulp.task('clean:revInfo',function(callback){
    rimraf(config.paths.rev, callback);
});


