/**
 *  gulp的配置文件，组装当前项目的config
 *  @author: Mei XinLin
 */

import fs from 'fs';

import path from './path';
import lib from './libConfig'

const config = {
  staticPort: 9090,
  paths: path,
  lib: lib,
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
export default config;
