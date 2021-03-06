/**
 * @author May
 * @version 1.0.0
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

class Checkbox extends Component {
  static props = {
    onChange: PropTypes.func.isRequired,
    selected: PropTypes.bool,
    inForm: PropTypes.bool,
    classNames: PropTypes.string,
    children: PropTypes.node
  };

  constructor(props, content) {
    super(props, content);
    const mainClassNames =  classNames('may-checkbox ',props.classNames);
    this.state = {
      'selected': !!props.selected,
      'mainClassNames': mainClassNames
    };
    this.onChange = ::this.onChange;
  }

  onChange() {
  	const state = !this.state.selected;
    this.setState({'selected': state});
    this.props.onChange(state);
  }

  render() {
    let formInput = '',
        iconClass = 'fa fa-square-o';
    if (this.props.inForm) {
      formInput = <input type="checkbox"/>;
    }
    if (this.state.selected) {
      iconClass = 'fa fa-check-square-o';
    }
    return (
      <div
        className={this.state.mainClassNames}
        onClick={this.onChange}
      >
        <icon className={iconClass} />
        <div className="checkbox_box">{this.props.children}</div>
        {formInput}
      </div>
    );
  }
}

export default Checkbox;
