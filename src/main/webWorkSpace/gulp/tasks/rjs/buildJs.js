/**
 * Created by May on 2016/3/16.
 */
'use strict';

var gulp = require("gulp");
var amdOptimize = require("amd-optimize");
var $ = require('gulp-load-plugins')();
var config = require('./../../config2.js');

gulp.task("build:rjs--production", function () {

    var result, appConfig,rjsConfig,
        appNames = config.apps.appNames;

    for (var i = 0; i < appNames.length; i++) {
        appConfig = config.apps[appNames[i]];
        //requirejs config
        rjsConfig = appConfig.rjsConfig;
        rjsConfig['paths'] = config.libConfig.paths;
        rjsConfig['shim'] = config.libConfig.shim;
        result = gulp.src(appConfig.js)
            .pipe(amdOptimize(rjsConfig.mainJs,rjsConfig))
            .pipe($.concat(appNames[i] + '.js'))
            .pipe($.uglify())
            .pipe($.rev())
            .pipe(gulp.dest(config.paths.scriptDist))
            .pipe($.size({showFiles:true}))
            .pipe($.rev.manifest({
                path:config.paths.rev+"rev-manifest.json",
                merge: true
            }))
            .pipe(gulp.dest("./"))
    }
    return result;


});
