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
import * as actions from '../action';

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

    it('dispatch action set user', () => {
      const next = generator.next(_userData);
      expect(next.value).to.deep.equal(put(actions.setUserInfo(_userData)));
    });

    it('finish',()=>{
      const next = generator.next();
      expect(next.done).to.be.true;
    });
  });

  describe('loginOutWorker test', () => {
    const generator = loginOutWorker();

    it('fetch delete user', () => {
      const next = generator.next();
      expect(next.value).to.deep.equal(call(mFetch.del, {
        url: '/session'
      }));
    });

    it('dispatch action loginOut',()=>{
      const next = generator.next();
      expect(next.value).to.deep.equal(put(actions.loginOut(true)));
    });

    it('finish',()=>{
      const next = generator.next();
      expect(next.done).to.be.true;
    });
  })


});
