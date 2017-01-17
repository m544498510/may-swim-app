/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import fetchMock from 'fetch-mock';

import fetchWrapper from './fetchWrapper';
import {GET, POST} from "./fetch_types";


describe('may fetch wrapper', () => {
  afterEach(fetchMock.reset);

  describe('init ', () => {
    it('should return a promise object and get success response', () => {
      fetchMock.mock(/\/resource/i, {
        status: 200,
        body: 'fetch success'
      });

      const promise = fetchWrapper({
        url: '/resource'
      });
      expect(promise).to.be.a('promise');

      return promise.then(data => {
        expect(data).to.equal('fetch success');
      });
    });
  });

  describe('GET request', () => {
    const _getSuccessReg = /\/getSuccess/i;
    const _getFailureReg = /\/getFailure/i;
    before(() => {
      fetchMock.get(_getSuccessReg, {
        status: 200,
        headers: {
          'content-type': 'json'
        },
        body: {
          fetch: true
        }
      });
      fetchMock.get(_getFailureReg, 400);
    });

    it('should set the Request Method to GET ', () => {
      fetchWrapper({
        url: '/getSuccess',
        method: GET
      });
      const isCalled = fetchMock.called(_getSuccessReg);
      expect(isCalled).to.be.true;
    });

    it('should pass parameters', () => {
      fetchWrapper({
        url: '/getSuccess',
        method: GET,
        data: {
          param: 'param'
        }
      });
      const url = fetchMock.lastUrl(_getSuccessReg);
      expect(url).to.include('param=param');
    });

    it('should judge failure get request', () => {
      const promise = fetchWrapper({
        url: '/getFailure'
      });
      return promise
        .then(() => {
          expect(true).to.be.false;
        })
        .catch(() => {
          expect(true).to.be.true;
        })
    });

  });


  describe('POST request', () => {
    const _postSuccess = /\/postSuccess/i;
    before(() => {
      fetchMock.post(_postSuccess, 201);
    });
    it('should pass parameters', () => {
      fetchWrapper({
        url: '/postSuccess',
        data: {
          param: 'param'
        },
        method: POST
      });
      const params = fetchMock.lastOptions(_postSuccess).data;
      expect(params).to.deep.equal({
        param: 'param'
      });
    });

  });

  describe('response', () => {
    before(() => {
      fetchMock.mock(/\/jsonData/i, {
        status: 200,
        headers: {
          'content-type': 'json'
        },
        body: {
          fetch: true
        }
      });
      fetchMock.mock(/\/textData/i, {
        status: 200,
        headers: {
          'content-type': 'text'
        },
        body: {
          fetch: true
        }
      });
    });

    it('should parse body to json when content-type is json', () => {
      return fetchWrapper({
        url: '/jsonData'
      })
        .then(data => {
          expect(data).to.deep.equal({
            fetch: true
          })
        })
    });

    it('should parse body to text when content-type is text', () => {
      return fetchWrapper({
        url: '/textData'
      })
        .then(data => {
          expect(data).to.equal('{"fetch":true}');
        });
    });

    it('should parse body to json when specify the parse method', () => {
      return fetchWrapper({
        url: '/textData',
        dataType: 'json'
      })
        .then(data => {
          expect(data).to.deep.equal({fetch: true});
        });

    });
  });


});



