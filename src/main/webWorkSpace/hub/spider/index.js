/**
 * @author May
 * @version 1.0.0
 */
'use strict';

import request from 'request';
import cheerio from 'cheerio';

import config from '../config';

export const get =  (url,cb)=>{
  let targetUrl = 'http://' + config.targetUrl + url;
  request(targetUrl, function (err, response, data){
    respongHandle(err, response, data, cb);

  });
};

export const post = (url,parms,cb)=>{
  let targetUrl = 'http://' + config.targetUrl + url;
  request.post({
      url:'http://service.com/upload',
      form: parms
    },
    function(err,response,body){
      respongHandle(err, response, body, cb);
    });
};


function respongHandle(err, response, body, cb) {
  if (!err && response.statusCode == 200) {
    cb(bodyHandle(body));
  } else if(err){
    console.log('----------url:  ' + response.req.path);
    console.error(err);
  } else {
    console.log('----------url:  ' + response.req.path);
    console.log(response.statusCode);
  }
}

function bodyHandle(data){
  if(data && typeof data == 'string'){
    let $ = cheerio.load(data);
    let reg = new RegExp(config.replaceUrl,'g');

    if($('html').length > -1){
      data = data.replace(reg,'');
    }else{
      data = data.replace(reg,'http://localhost:'+config.port);
    }
  }
  return data;
}

