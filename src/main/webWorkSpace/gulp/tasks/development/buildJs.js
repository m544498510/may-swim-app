'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./../../config.js');

gulp.task('build:js', function () {
    var result, appConfig,
        appNames = config.apps.appNames;

    for (var i = 0; i < appNames.length; i++) {
        appConfig = config.apps[appNames[i]];
        result = gulp.src(appConfig.js)
            .pipe($.sourcemaps.init({
                loadMaps:true
            }))
            .pipe($.angularFilesort())
            .pipe($.ngAnnotate())
            .pipe($.concat(appNames[i] + '.js'))
            .pipe($.uglify())
            .pipe($.size({showFiles: true}))
            .pipe($.sourcemaps.write())
            .pipe(gulp.dest(config.paths.scriptDist))

    }
    return result;
});
