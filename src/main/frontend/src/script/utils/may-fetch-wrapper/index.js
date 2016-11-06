/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import {GET, POST, PUT, PATCH, DELETE} from "./fetch_types";
import fetchWrapper from "./fetchWrapper";


export function get(data) {
  return fetchWrapper({
    ...data,
    method: GET
  });
}

export function post(data) {
  return fetchWrapper({
    ...data,
    method: POST
  });
}

export function put(data) {
  return fetchWrapper({
    ...data,
    method: PUT
  });
}

export function patch(data) {
  return fetchWrapper({
    ...data,
    method: PATCH
  });
}

export function del(data) {
  return fetchWrapper({
    ...data,
    method: DELETE
  });
}

export default {
  get,
  post,
  put,
  patch,
  del,
  mFetch: fetchWrapper
};
