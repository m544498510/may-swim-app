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
    url: '/resource',
    method: GET,
    data: {
      params: 'somethings'
    }
  };
  const _responseData = {
    fetch: true
  };
  const _resourceReg = /\/resource/i;
  const _reg = /\/test/i;

  before(()=> {
    fetchMock.mock(_resourceReg, {
      status: 200,
      body: _responseData
    });
  });
  afterEach(fetchMock.reset);

  describe('init ',()=>{
    it('should return a promise object,and fetch success', ()=> {
      const promise = fetchWrapper(_fetchOptions);
      expect(promise).to.be.a('promise');
      promise.then(data=>{
        console.log(data);
      })
        .catch(e=>{
          console.log(e);
        });
      const flag = fetchMock.called(_resourceReg);
      expect(flag).to.true;
    });
  });

  describe('GET request',()=>{
    before(()=>{
      fetchMock.get(_reg,{
        status: 200,
        body: _responseData
      });
      fetchMock.get(/\/getFailure/i,400);
    });

    it('should pass parameters',()=>{
/*
      const fetchOptions = Object.assign({},_fetchOptions);
      fetchOptions.url = '/getSuccess';
      const promise = fetchWrapper(fetchOptions);
      const params = fetchMock.lastOptions(/\/getSuccess/i).data;
*/
      //expect(params).to.deep.equal(fetchOptions.data);

    });

  });


  describe('POST request',()=>{
    before(()=>{
      fetchMock.post(/\/postSuccess/i,200);
      fetchMock.post(/\/postFailure/i,400);
    });
    it('should pass parameters',()=>{
      const fetchOptions = Object.assign({},_fetchOptions);
      fetchOptions.url = '/postSuccess';
      fetchOptions.method = POST;
      const promise = fetchWrapper(fetchOptions);
      const params = fetchMock.lastOptions(/\/postSuccess/i);
      //expect(params).to.deep.equal(fetchOptions.data);

    });

  });


  it('能用指定方式解析response body', ()=>{
    const options = Object.assign({},_fetchOptions);

    options.dataType = 'json';
    let promise = fetchWrapper(options);
    promise.then(result=>{
      expect(result).to.deep.equal(_responseData);
    });

    options.dataType = 'text';
    promise = fetchWrapper(options);
    const expectObj = JSON.stringify(_responseData);
    promise.then(result=>{
      expect(result).to.deep.equal(expectObj);
    });

  });


});



