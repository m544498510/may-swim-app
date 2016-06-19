/**
 * Created by Mei Xinlin on 2016/2/18.
 */
'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./../../config.js');

gulp.task('cssSpriter', function() {
    return gulp.src(config.paths.src + 'sass/**/**.scss')
        .pipe($.size())
        .pipe($.cssSpriter({
            // The path and file name of where we will save the sprite sheet
            'spriteSheet': config.paths.src+'tmp/spriter/spritesheet.png',
            // Because we don't know where you will end up saving the CSS file at this point in the pipe,
            // we need a litle help identifying where it will be.
            'pathToSpriteSheetFromCSS': '../../img/spritesheet.png',
            'spritesmithOptions':{
                padding: 5
            }
        }))
        .pipe(gulp.dest(config.paths.src+'tmp/test/'))
        .pipe($.size());
});
