/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React, {Component, PropTypes} from 'react';

export default class IconBtn extends Component {
  static propTypes = {
    className: PropTypes.string.isRequired,
    iconClassName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  render() {
    return (
      <a className={this.props.className} onClick={this.props.onClick}>
        <icon className={`fa ${this.props.iconClassName}`}/>
      </a>
    );
  }
}
