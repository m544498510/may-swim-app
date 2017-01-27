/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React from 'react';
import {shallow} from 'enzyme';

import IconBtn from './index';

describe('widget IconBtn', () => {
  let _wrapper,_handleClick;
  before(()=>{
    _handleClick = sinon.spy();
    _wrapper = shallow(
      <IconBtn
        className="test"
        iconClassName="test"
        onClick={_handleClick}
      />
    )
  });
  describe('(render)', () => {
    it('should render a IconBtn and add provided #props.className', () => {
      expect(_wrapper).to.lengthOf(1);
      expect(_wrapper.hasClass('test')).to.be.true;
    });

    it('should have a Icon and this icon should add provided #props.iconClassName', () => {
      const icon = _wrapper.find('icon');
      expect(icon).to.lengthOf(1);
      expect(icon.hasClass('test')).to.be.true;
    });
  });

  describe('(event)', () => {
    it('should set onClick with provided #props.onclick', () => {
      _wrapper.simulate('click');
      expect(_handleClick.calledOnce).to.be.true;
    });
  });
});
