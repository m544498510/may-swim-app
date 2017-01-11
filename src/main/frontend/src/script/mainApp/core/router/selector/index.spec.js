/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

//用于检测selector初始化location hash的值
global.window.location.hash = '#test';

import * as selector from './index';

describe('router selector', () => {
  const state = {
    routing: {
      locationBeforeTransitions: {
        pathname: 'test',
        search: '',
        hash: '',
        action: '',
        key: null,
        query: {}
      }
    }
  };

  describe('init', () => {
    it('should return init pathname with window.location.hash', () => {
      const pathName = selector.getPathName({
        routing:{}
      });

      expect(pathName).to.be.equal('test');
    });
  });

  describe('function getRouterInfo', () => {
    it('should right router info', () => {
      const routerInfo = selector.getRouterInfo(state);
      expect(routerInfo).to.be.deep.equal(state.routing.locationBeforeTransitions);
    });
  });

  describe('function getPathName', () => {
    const pathname = selector.getPathName(state);
    expect(pathname).to.be.equal('test');
  });

});
