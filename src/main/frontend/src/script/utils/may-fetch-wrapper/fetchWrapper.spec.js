/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import fetchMock from 'fetch-mock';

import fetchWrapper from './fetchWrapper';
import {GET, POST, PATCH, PUT, DELETE, HEAD, OPTIONS} from "./fetch_types";


describe('may fetch wrapper', ()=> {
  const _fetchOptions = {
    url: 'http://www.test.com/resource',
    method: GET,
    data: {
      params: 'somethings'
    }
  };
  const _responseData = {
    fetch: true
  };

  before(()=> {
    fetchMock.get('*', {
      status: 200,
      body: _responseData
    });
  });
  afterEach(fetchMock.reset);

  it('能返回一个promise对象', ()=> {
    const promise = fetchWrapper(_fetchOptions);
    expect(promise).to.be.a('promise');
  });

  it('能用指定方式解析response body', ()=>{
    const options = Object.assign({},_fetchOptions);

    options.dataType = 'json';
    let promise = fetchWrapper(options);
    promise.then(result=>{
      expect(result).to.equal(_responseData);
    });

    options.dataType = 'text';
    promise = fetchWrapper(options);
    promise.then(result=>{
      expect(result).to.equal(_responseData.toString());
    });

  });


});



