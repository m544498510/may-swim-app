/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import fetchMock from 'fetch-mock';
import {call,put} from 'redux-saga/effects';
import mFetch from 'utils/may-fetch-wrapper';

import {getStrokeWorker} from './index';
import * as actions from '../action';

describe('swim stroke saga', () => {
  const _strokeData = [
    {name:1},
    {name:2}
  ];
  before(() => {
    fetchMock.get(/\/stroke/, {
      status: 200,
      body: _strokeData,
      header: {
        'content-type': 'json'
      }
    });
  });

  describe('getStrokeWorker', () => {
    const generator = getStrokeWorker();
    it('fetch data', () => {
      const next = generator.next();
      expect(next.value).to.deep.equals(call(mFetch.get,{
        url: '/stroke'
      }));
    });

    it('dispatch action when stroke list is not null',()=>{
      const next = generator.next(_strokeData);
      expect(next.value).to.deep.equals(put(actions.setStroke(_strokeData)));
    });

    it('finish', () => {
      const next = generator.next();
      expect(next.done).to.be.true;
    });

    it('do not dispatch action when stroke list is null',()=>{
      const generator = getStrokeWorker();
      generator.next();
      const next = generator.next(null);
      expect(next.done).to.be.true;
    })

  });

});
