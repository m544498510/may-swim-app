/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import React from 'react';
import {shallow} from 'enzyme';
import {Link} from 'react-router';

import Header from './index';

describe('component header',()=>{
  let _wrapper,_handleLoginOut,_handleSidebarClick;
  before(()=>{
    _handleLoginOut = sinon.spy();
    _handleSidebarClick = sinon.spy();
    _wrapper = shallow(
      <Header
        userPic="test"
        loginOut={_handleLoginOut}
        reverseSidebarState={_handleSidebarClick}
      />
    );
  });

  describe('(render)',()=>{
    it('should render a header and contains IconBtn', () => {
      expect(_wrapper).to.lengthOf(1);
      expect(_wrapper.find('IconBtn')).to.lengthOf(1);
    });

    it('should set img with provided #props.userPic',()=>{
      const img = _wrapper.find('.user_profile_pic');
      expect(img.prop('src')).to.equal('test');
    });
  });

  describe('(event)',()=>{
    it('should set onClick to the login out button with provided #props.loginOut',()=>{
      _wrapper.find('.sign_out').simulate('click');
      expect(_handleLoginOut.calledOnce).to.be.true;
    });

    it('should set onClick to the sidebar button with provided #props.reverseSidebarState',()=>{
      _wrapper.find('IconBtn').simulate('click');
      expect(_handleSidebarClick.calledOnce).to.be.true;
    });
  });
});
