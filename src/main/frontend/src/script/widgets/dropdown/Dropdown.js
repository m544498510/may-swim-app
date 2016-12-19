/**
 * 重写reactstrap Dropdown类
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import {DropdownMenu, DropdownToggle} from "reactstrap";

const propTypes = {
  disabled: PropTypes.bool,
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
  componentDidUpdate(prevProps,prevState) {
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

  handleDocumentClick(e) {
    const container = ReactDOM.findDOMNode(this);

    if (container.contains(e.target) && container !== e.target) {
      return;
    }

    this.setState({isOpen:false});
  }

  handleProps() {
    if (this.state.isOpen) {
      this.addEvents();
    } else {
      this.removeEvents();
    }
  }

  toggle(e) {
    if (this.props.disabled) {
      return e && e.preventDefault();
    }
    this.setState({isOpen: !this.state.isOpen});
  }

  renderChildren() {
    const {children, ...attrs} = this.props;

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
      className,'dropdown',
      {
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
