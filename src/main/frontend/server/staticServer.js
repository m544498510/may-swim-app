/**
 * @author May
 * @version 1.0.0
 */
'use strict';

import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import path from 'path';

import browserSyncInit from './browserSync';
import webpackConfig from '../config/webpack.config';
import config from '../config/index';

export default ()=>{

  const app = new express();
  const port = config.staticPort;

  var compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));

  app.use('/build',express.static(__dirname + '/../build'));

  app.get("/", function(req, res) {
    res.sendFile(path.resolve(__dirname+'/../build/html/userApp.html'));

  });
  app.get("/user", function(req, res) {
    res.sendFile(path.resolve(__dirname+'/../build/html/userApp.html'));
  });

  app.listen(port, function(error) {
    if (error) {
      console.error(error);
    } else {
      browserSyncInit();
      console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
    }
  });
};





