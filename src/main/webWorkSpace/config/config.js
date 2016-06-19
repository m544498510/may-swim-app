/**
 *  gulp的配置文件，组装当前项目的config
 *  @author: Mei XinLin
 */

var fs = require('fs');
var path = require('../config/path.js'),
    libConfig = require('../config/lib.js');

var config = {
    paths: path,
    libConfig: libConfig,
    apps: {
        appNames: []
    }
};

//请求各个app config，并组装到config对象里。
var appConfigPath = process.cwd()  + '/config/appConfig';
var files = fs.readdirSync(appConfigPath);
files.forEach(function (file) {
    var appConfig = require(appConfigPath + '/' + file);
    var moduleName = appConfig.moduleName;
    config.apps.appNames.push(moduleName);
    config.apps[moduleName] = appConfig;
});

module.exports = config;
