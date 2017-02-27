/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import * as selectors from './index';

describe('swim stroke selector', () => {
  const _list = [{name:1}];
  const _state = {
    stroke: _list
  };

  it('getStrokeList',()=>{
    const list = selectors.getStrokeList(_state);
    expect(list).to.deep.equals(_list);
  })
});

