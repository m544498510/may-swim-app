/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';
import 'isomorphic-fetch';
import {GET, POST, PATCH, PUT, DELETE, HEAD, OPTIONS} from "./fetch_types";

const defaultData = {
  method: GET,
  //dataType: 'json',   可选
  mode: 'cors',
  credentials: 'same-origin',
  headers: {
    Accept: 'application/json'
  }
};

export default function fetchWrapper(setting = {}) {
  const options = Object.assign({}, defaultData, setting);
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
  return fetchPromise(url, options);
}

function fetchPromise(url, options) {

  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(response => {
        if (!checkFetchSuccess(response, options)) {
          reject(response);
        }
        return response;
      })
      .then(response => {
        return formatResponseBody(response, options.dataType);
      })
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      })
  });
}

function checkFetchSuccess(response, options) {
  const method = options.method;
  const status = response.status;

  if (status == 202) {
    return true;
  } else if (status < 200 && status > 299) {
    return false;
  } else {
    switch (method) {
      case GET:
        return status == 200;
      case PUT:
      case POST:
      case PATCH:
        return status == 201;
      case DELETE:
        return status == 204;
      default:
        return false;
    }
  }
}

function formatResponseBody(response, contentType) {
  if(!contentType){
    contentType = response.headers.get('content-type') || 'text';
  }
  if (contentType.indexOf('json') > -1) {
    return response.json();
  } else if (contentType.indexOf('text') > -1) {
    return response.text();
  } else if (contentType.indexOf('image') > -1){
    return response.blob();
  }else{
    return response.text();
  }
}


function formatPostData(data = {}) {
  if ((typeof data == 'object')
    && (data instanceof HTMLElement)) {
    return new FormData(data);
  } else {
    return objToFormData(data);
  }
}

function objToFormData(obj = {}) {
  const formData = new FormData();
  for (var key in obj) {
    formData.append(key, obj[key]);
  }
  return formData;
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
