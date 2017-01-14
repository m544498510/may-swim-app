/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import fetchMock from 'fetch-mock';
import {fork, call, put} from 'redux-saga/effects';
import mFetch from 'utils/may-fetch-wrapper';

import {getUserWorker, loginOutWorker} from './index';

describe('user saga', () => {
  const _userData = {
    id: 'test',
    userName: 'test',
    pic: 'test'

  };
  before(() => {
    fetchMock.get(/\/session/, {
      status: 200,
      body: _userData,
      header: {
        'content-type': 'json'
      }
    });
    fetchMock.delete(/\/session/, {
      status: 204,
      body: 'test'
    });

  });

  describe('getUserWorker test', () => {
    const generator = getUserWorker();

    it('fetch user', () => {
      const next = generator.next();
      expect(next.value).to.deep.equal(call(mFetch.get, {
        url: '/session'
      }));
    });

    it('action set user', () => {
      const result = generator.next(_userData);

    });


  });


});
