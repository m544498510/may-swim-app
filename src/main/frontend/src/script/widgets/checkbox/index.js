/**
 * @author May
 * @version 1.0.0
 */
'use strict';

import React, {Component, PropTypes} from 'react';

class Checkbox extends Component {
  static props = {
    onChange: PropTypes.func.isRequired,
    selected: PropTypes.bool,
    inForm: PropTypes.bool,
    classNames: PropTypes.string,
    labelTxt: PropTypes.string
  };

  constructor(props, content) {
    super(props, content);
    const mainClassNames = 'may-checkbox ' + (props.classNames || '');
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
        <div>{this.props.labelTxt}</div>
        {formInput}
      </div>
    );
  }
}

export default Checkbox;
