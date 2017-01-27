/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React from 'react';
import Breadcrumb from './index';
import {Link} from 'react-router';

describe('widget Breadcrumb', () => {
  let _wrapper, _list, _linkChild,_normalChild;
  before(() => {
    _list = [
      {name: 'level1', link: '/level1'},
      {name: 'level2', link: '/level2'},
      {name: 'level3'}
    ];
    _wrapper = shallow(
      <Breadcrumb
        list={_list}
      />
    );
    _linkChild = _wrapper.childAt(0);
    _normalChild = _wrapper.childAt(2);
  });
  it('should render a ul which has class "breadcrumb" ', () => {
    expect(_wrapper.type()).to.equals('ul');
    expect(_wrapper.hasClass('breadcrumb')).to.be.true;
  });

  it('should render li children with #props.list', () => {
    const children = _wrapper.children();
    expect(children).to.have.lengthOf(_list.length);
    expect(children.every('li')).to.be.true;
  });

  it('should render child with text node', () => {
    expect(_normalChild.text()).to.equals('level3');
  });

  it('should render child with text node when child has not prop link ', () => {
    const child = _normalChild.childAt(0);
    expect(child).to.be.not.null;
    expect(child.type()).to.be.undefined;
  });

  it('should render child with Link when child has prop "link"', () => {
    const child = _wrapper.childAt(2);
    expect(_linkChild.childAt(0).type()).to.equals(Link);
  })
});
