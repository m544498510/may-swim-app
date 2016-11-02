/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import {GET, POST, PATCH, PUT, DELETE, HEAD, OPTIONS} from './fetch_types';

const defaultData = {
  method: GET,
  dataType: 'json',
};

export default function fetchWrapper(setting = {}) {
  let body,
    url = setting.url;
  const method = setting.method | GET;
  const headers = new Headers();

  switch (method) {
    case GET:
    case DELETE:
    case HEAD:
      url += formatUrlData(setting.data);
      break;
    case POST:
    case PATCH:
    case PUT:
    case OPTIONS:
      body = formatObjData(setting.data);
      break;
  }

  if (!setting.data instanceof HTMLElement) {
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
  }

  const options = {
    method,
    headers,
    body
  };

  if(setting.mode){
    options.mode = setting.mode;
  }
  if(setting.sendCookie){
    options.credentials = 'include';
  }


  const promise = fetch(url, options);
  handleResponseData(promise);

  return promise;
}

function handleResponseData(promise, dataType) {
  switch (dataType) {
    case 'json':
      promise.then(response => {
        return {
          response,
          data: response.json()
        };
      });
      break;
    case 'text':
      promise.then(response =>{
        return {
          response,
          data: response.text()
        };
      });
          break;
  }
}

function formatObjData(data = {}) {
  if ((typeof data == 'object')
    && (data instanceof HTMLElement)) {
    return new FormData(data);
  } else {
    return JSON.stringify(data);
  }
}

function formatUrlData(jsonObj = {}) {
  const arr = [];
  for (let key in jsonObj) {
    arr.push(key + '=' + jsonObj[key]);
  }
  return arr.join('&');
}
