/**
 * @author May
 * @version 1.0.0
 */
'use strict';


/**
 * Require Browsersync along with webpack and middleware for it
 */

import browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import path from 'path';

/**
 * Require ./webpack.config.js and make a bundler from it
 */
import webpackConfig from '../config/webpack.config';

const bundler = webpack(webpackConfig);


export default function createBrowserSync(isProxy){
  let config = {
    port: 3000,
    files: [
      path.resolve(__dirname,'../dist/style/*.css'),
      path.resolve(__dirname,'../dist/html/*.html')
    ],
    middleware: [
      webpackDevMiddleware(bundler, {
        // IMPORTANT: dev middleware can't access config, so we should
        // provide publicPath by ourselves
        publicPath: webpackConfig.output.publicPath,
        noInfo: true,
        // pretty colored output
        stats: { colors: true }
      }),

      // bundler should be the same as above
      webpackHotMiddleware(bundler)
    ]

  };


  if (isProxy){
    config.proxy = {
      target: 'http://localhost:9090',
      ws: true
    };
    config.serveStatic =  [
      {
        route: '/dist/style',
        dir:  path.resolve(__dirname,'../dist/style'),
      },
      {
        route: '/dist/html',
        dir: path.resolve(__dirname,'../dist/html')
      }
    ];
  }else{
    config.server = {
      baseDir: path.resolve(__dirname,'../'),
      index: 'dist/html/userApp.html',
      routes: {
        "/dist": path.resolve(__dirname,'../dist'),
      }
    }
  }


  return browserSync(config);
}

