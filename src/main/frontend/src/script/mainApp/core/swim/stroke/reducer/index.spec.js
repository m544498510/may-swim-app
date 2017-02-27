/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import reducer from './index';
import actionTypes from '../action/types';

describe('swim stroke reducer', () => {
  it('should init with default state',()=>{
    const state = reducer(undefined,{});
    expect(state).to.deep.equals([])
  });
  it('set stroke list', () => {
    const list = [{name: 1}];
    const action = {
      type: actionTypes.SET_STROKE_LIST,
      payload: list
    };
    const state = reducer(null,action);

    expect(state).to.deep.equals(list);
  });
});
