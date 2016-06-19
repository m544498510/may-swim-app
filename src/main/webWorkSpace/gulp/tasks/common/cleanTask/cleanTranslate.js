/**
 * Created by Mei Xinlin on 2016/3/10.
 */
'use strict';

var gulp = require('gulp');
var rimraf = require('rimraf');
var config = require('../../../config.js');

gulp.task('clean:translate',function(callback){
    rimraf(config.paths.nlsDist, callback);
});


