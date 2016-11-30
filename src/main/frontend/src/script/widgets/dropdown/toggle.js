/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';
import React, {Component,PropTypes} from "react";

export  default class Toggle extends Component {
  static props = {
    onClick: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);

    this.handleClick = ::this.handleClick;
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onClick(e);
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.props.children}
      </div>
    );
  }
}
