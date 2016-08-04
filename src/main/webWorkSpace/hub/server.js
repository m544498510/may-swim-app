/**
 * @author May
 * @version 1.0.0
 */
'use strict';

import express from 'express';
import multer from 'multer';
import bodyParser from 'body-parser';

import * as spider from './spider';

import config from './config';

const app = express();
const upload = multer();
const port = config.port;

app.use('/static',express.static(config.staticPath));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/jeemaa/*", (req, res) => {
  let url = req.originalUrl;
  spider.get(url,function(body){
    res.send(body);
  });

});

app.post('/jeemaa/*',upload.array(), (req,res)=>{
  let url = req.originalUrl;
  let param = req.body;
  spider.post(url,req.body,function(body){
    res.send(body);
  })

});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});


