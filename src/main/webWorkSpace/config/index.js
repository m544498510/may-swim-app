/**
 *  gulp的配置文件，组装当前项目的config
 *  @author: Mei XinLin
 */

var fs    = require('fs');
var path  = require('../config/path.js');

var config = {
  staticPort: 9090,
  paths: path,
  apps: {
    appNames: []
  }
};

//请求各个app webpackConfig，并组装到config对象里。
/*
var appConfigPath = process.cwd()  + '/webpackConfig/appConfig';
var files = fs.readdirSync(appConfigPath);
files.forEach(function (file) {
  var appConfig = require(appConfigPath + '/' + file);
  var moduleName = appConfig.moduleName;
  config.apps.appNames.push(moduleName);
  config.apps[moduleName] = appConfig;
});
*/

module.exports = config;
