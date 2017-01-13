/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import nock from 'nock';

import fetchWrapper from './fetchWrapper';
import {GET, POST, PATCH, PUT, DELETE, HEAD, OPTIONS} from "./fetch_types";


describe('may fetch wrapper', () => {

  before(()=>{
    nock('http://www.test.com').
    get('/resource').
    delayConnection(1000).
    reply(200, 'hey');
  });

  const _fetchOptions = {
    url: '/resource',
    method: GET,
    data: {
      params: 'somethings'
    }
  };

  describe('init ', () => {
    it('should return a promise object,and fetch success', () => {
      const promise = fetchWrapper(_fetchOptions);
      let result = null;
      expect(promise).to.be.a('promise');
      promise
        .then(data => {
          console.log(data);
          result = data;
        })
        .catch(e => {
          console.log(e);
        });

      expect(result).to.equal('hay');
    });
  });

});



