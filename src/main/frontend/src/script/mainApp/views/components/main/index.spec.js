/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React from 'react';
import {shallow} from 'enzyme';

import Main from './index';

describe('components Main', () => {
  it('(render)', () => {
    let _wrapper;
    before(()=>{
      _wrapper = shallow(
        <Main
          title="test_title"
          breadcrumb={[{name:'test1'}]}
        />
      );
    });
    it('should render title with #props.title ', () => {
      expect(_wrapper.find('h2').text()).to.equals('test_title');
    });
  });
});
