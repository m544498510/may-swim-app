/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React from 'react';
import {shallow} from 'enzyme';

import Checkbox from './index';

describe('widgets checkbox', () => {
  describe('render', () => {
    const defaultWrapper = shallow(<Checkbox/>);

    it('should render a checkbox with text node', () => {
      const wrapper = shallow(<Checkbox>check</Checkbox>);
      const box = wrapper.find('.checkbox_box');
      expect(box.text()).to.equal('check');
    });

    it('should render a checkbox with child element', () => {
      const wrapper = shallow(
        <Checkbox>
          <div>test</div>
        </Checkbox>
      );
      const box = wrapper.find('.checkbox_box');
      expect(box.contains(<div>test</div>)).to.be.true;
    });

    it('should set default className',()=>{
      expect(defaultWrapper.hasClass('may-checkbox')).to.be.true;
    });

    it('should add provider props.className',()=>{
      const wrapper = shallow(<Checkbox classNames="test" />);
      expect(wrapper.hasClass('test')).to.be.true;
    });

    it('should render selected checkbox when props.selected is true', () => {
      const wrapper = shallow(<Checkbox selected={true} />);
      const icon = wrapper.find('icon');
      expect(icon.hasClass('fa-check-square-o')).to.be.true;
    });

    it('should render checkbox which contains a input when the prop inForm is true',()=>{
      const wrapper = shallow(<Checkbox inForm={true}/>);
      expect(wrapper.contains(<input type="checkbox" />)).to.be.true;
    });

  });

  describe('event', () => {
    it('should set onChange with provided props.onChange',()=>{
      const onChange = sinon.spy();
      const wrapper = shallow(<Checkbox onChange={onChange}/>);
      wrapper.simulate('click');
      expect(onChange.calledOnce).to.be.true;
    });
  });
});
