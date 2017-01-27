/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React from 'react';
import {shallow} from 'enzyme';

import Header from './index';

describe('component header',()=>{
  let _wrapper,_handleLoginOut;
  before(()=>{
    _handleLoginOut = sinon.spy();
    _wrapper = shallow(
      <Header
        userPic="/test"
        loginOut={_handleLoginOut}
      />
    );
  });

  describe('(render)',()=>{
    it('should render a div with default className', () => {
      expect(_wrapper).to.lengthOf(1);
      expect(_wrapper.hasClass('header_userProfile_box')).to.true;
    });

    it('should set img with provided #props.userPic',()=>{
      const img = _wrapper.find('.user_profile_pic');
      expect(img.prop('src')).to.equal('/test');
    });
  });

  describe('(event)',()=>{
    it('should set onClick to the login out button with provided #props.loginOut',()=>{
      _wrapper.find('.sign_out').simulate('click');
      expect(_handleLoginOut).to.have.calledOnce
    });
  });
});
