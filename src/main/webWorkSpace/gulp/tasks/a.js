'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('doc', function () {
    return gulp.src('./src/doc/**/*.md')
            .pipe($.concat('a.md'))
            .pipe(gulp.dest('./'));
});
