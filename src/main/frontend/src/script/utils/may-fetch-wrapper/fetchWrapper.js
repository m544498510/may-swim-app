/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import {GET, POST, PATCH, PUT, DELETE, HEAD, OPTIONS} from "./fetch_types";

const defaultData = {
  method: GET,
  dataType: 'json',
  mode: 'cors',
  credentials: 'same-origin',
  headers: {
    Accept: 'application/json'
  }
};

export default function fetchWrapper(setting = {}) {
  const options = Object.assign({},defaultData,setting);
  let url = setting.url || '';
  switch (options.method) {
    case GET:
    case DELETE:
    case HEAD:
      url += '?' + objToQueryString(setting.data);
      break;
    case POST:
    case PATCH:
    case PUT:
    case OPTIONS:
      options.body = formatPostData(setting.data);
      break;
  }

  if (!setting.data instanceof HTMLElement) {
    options.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
  }

  console.log(url,options);
  const promise = fetch(url, options);
  //handleResponseData(promise);

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
      promise.then(response => {
        return {
          response,
          data: response.text()
        };
      });
      break;
  }
}

function formatPostData(data = {}) {
  if ((typeof data == 'object')
    && (data instanceof HTMLElement)) {
    return new FormData(data);
  } else {
    return objToQueryString(data);
  }
}

function objToQueryString(obj = {}) {
  return Object.keys(obj).map(function (key) {
    var val = obj[key];
    if (Array.isArray(val)) {
      return arrayToQueryString(key, val);
    }
    return encodeURIComponent(key) + '=' + encodeURIComponent(val);
  }).join('&');
}

function arrayToQueryString(key, arr = []) {
  return arr.map(function (val) {
    return encodeURIComponent(key) + '=' + encodeURIComponent(val);
  }).join('&');

}
