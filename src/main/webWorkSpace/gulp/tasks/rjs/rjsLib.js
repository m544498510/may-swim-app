/**
 * Created by Mei Xinlin on 2016/3/25.
 */
'use strict';

var gulp = require("gulp");
var rjs = require("requirejs");
var $ = require('gulp-load-plugins')();
var config = require('./../../config2.js');

gulp.task("rjsLib", function (cb) {
    var appConfig,rjsConfig,module,name,
        modules = [],
        appNames = config.apps.appNames;

    for (var i = 0; i < appNames.length; i++) {
        name = appNames[i];
        appConfig = config.apps[name];
        module = {
            name: name + 'Lib',
            create:true,
            include:appConfig.rjsConfig.exclude
        };
        modules.push(module);
    }
    rjsConfig = {
        baseUrl: config.paths.src + "v/",
        paths: config.libConfig.paths,
        shim:config.libConfig.shim,
        dir: config.paths.libTmp,
        removeCombined:true,
        preserveLicenseComments: true,
        modules:modules
    };

    return rjs.optimize(rjsConfig,function(rs){
        cb();
    }, cb);

});
