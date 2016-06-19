'use strict';

var gulp = require('gulp');
var rimraf = require('rimraf');
var config = require('../../../config.js');

gulp.task('clean:html',function(callback){
    rimraf(config.paths.htmlDist, callback);
});


