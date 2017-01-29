/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import * as selector from './index';
import {Map} from 'immutable';

describe('frame selector', () => {
  const state = {
    frame: Map({
      sidebarState: false,
      htmlWidth: 1,
      htmlHeight: 1
    })
  };

  describe('function getFrame', () => {
    it('should return frame state', () => {
      const frameState = selector.getFrame(state);
      expect(frameState).to.deep.equal(state.frame);
    });
  });

  describe('function getSidebarState', () => {
    it('should return sidebarState', () => {
      const sidebarState = selector.getSidebarState(state);
      expect(sidebarState).to.be.false;
    });
  });

  describe('function getHtmlSize', () => {
    it('should return html size', () => {
      const size = selector.getHtmlSize(state);
      expect(size.width).to.equals(state.frame.get('htmlWidth'));
      expect(size.height).to.equals(state.frame.get('htmlHeight'));
    })
  })
});
