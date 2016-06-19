/**
 * Created by May on 2016/4/16.
 */

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var reload      = browserSync.reload;

// 静态服务器 + 监听 scss/html 文件
gulp.task('sync', function() {
    browserSync.init({
        proxy: "localhost:8080"
    });
    gulp.watch("../webapp/dist/taskList.css")
        .on("change",function(data){
            console.log("change");
            setTimeout(function(data){
                reload(data);
            },12500);
        });
});
