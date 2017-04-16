/**
 * 重写reactstrap Dropdown类
 * @author :    Mei XinLin
 * @version :   1.0
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactDOM from 'react-dom';
import classNames from 'classnames';
import DropdownMenu from './DropdownMenu';
import DropdownToggle from './DropdownToggle';

const propTypes = {
  disabled: PropTypes.bool,     //下拉菜单是否可用
  dropup: PropTypes.bool,
  isOpen: PropTypes.bool,
  tag: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

const defaultProps = {
  disabled: false,
  isOpen: false,
  tag: 'div'
};

const childContextTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.isOpen
    };

    this.handleProps = ::this.handleProps;
    this.addEvents = ::this.addEvents;
    this.removeEvents = ::this.removeEvents;
    this.toggle = ::this.toggle;
    this.handleDocumentClick = ::this.handleDocumentClick;
    this.renderChildren = :: this.renderChildren;
  }

  componentDidMount() {
    this.handleProps();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isOpen !== prevState.isOpen) {
      this.handleProps();
    }
  }

  componentWillUnmount() {
    this.removeEvents();
  }

  getChildContext() {
    return {
      toggle: this.toggle,
      isOpen: this.state.isOpen
    };
  }


  addEvents() {
    document.addEventListener('click', this.handleDocumentClick, true);
  }

  removeEvents() {
    document.removeEventListener('click', this.handleDocumentClick, true);
  }

  /***
   * 当点击到页面其他位置时，收起下拉菜单
   * @param {event} e
   */
  handleDocumentClick(e) {
    const container = ReactDOM.findDOMNode(this);

    if (container.contains(e.target) && container !== e.target) {
      return;
    }

    this.setState({isOpen: false});
  }

  /***
   * 根据当前下拉菜单是否显示状态，绑定或解绑dom事件
   */
  handleProps() {
    if (this.state.isOpen) {
      this.addEvents();
    } else {
      this.removeEvents();
    }
  }

  /***
   * 用于dropdown_menu
   * @param {event} e
   */
  toggle(e) {
    if (this.props.disabled) {
      e && e.preventDefault();
    }
    this.setState({isOpen: !this.state.isOpen});
  }

  renderChildren() {
    const {children} = this.props;

    return React.Children.map(children, child => {
      if (child.type === DropdownToggle) {
        return child;
      } else if (child.type === DropdownMenu) {
        return child;
      } else {
        return child;
      }
    });
  }

  render() {
    const {
      className,
      dropup,
      tag: Tag
    } = this.props;
    const {isOpen}= this.state;

    const classes = classNames(
      className, 'dropdown',
      {
        //bootstrap change the key word
        open: isOpen,
        dropup: dropup
      }
    );

    return (
      <Tag
        className={classes}
      >
        {this.renderChildren()}
      </Tag>
    );
  }
}

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;
Dropdown.childContextTypes = childContextTypes;

export default Dropdown;
