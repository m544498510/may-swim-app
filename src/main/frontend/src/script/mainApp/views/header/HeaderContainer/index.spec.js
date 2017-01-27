/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React from 'react';
import {shallow} from 'enzyme';
import {Map} from 'immutable';
import {Link} from 'react-router';

import IconBtn from 'widgets/IconBtn';
import UserProfile from '../UserProfile';

import {HeaderContainer} from './index';

describe('component HeaderContainer', () => {

  let _wrapper, _handleLoginOut, _handleSidebarClick;
  before(() => {
    _handleLoginOut = sinon.spy();
    _handleSidebarClick = sinon.spy();
    _wrapper = shallow(
      <HeaderContainer
        user={Map({pic:'test'})}
        loginOut={_handleLoginOut}
        loginOutState={false}
        reverseSidebarState={_handleSidebarClick}
      />
    );
  });

  describe('(render)', () => {
    it('should render a header ', () => {
      expect(_wrapper.type()).to.equals('header');
    });

    it('should has three children which is a Link , a IconBtn and a Header', () => {
      const children = _wrapper.children();
      expect(children.at(0).type()).to.equals(Link);
      expect(children.at(1).type()).to.equals(IconBtn);
      expect(children.at(2).type()).to.equals(UserProfile);
    });
  });

  describe('(event)', () => {
    it('should set onClick to the sidebar button with provided #props.reverseSidebarState', () => {
      _wrapper.find('IconBtn').simulate('click');
      expect(_handleSidebarClick.calledOnce).to.be.true;
    });
  });
});
