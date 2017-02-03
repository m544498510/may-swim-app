/**
 * widget Wizard step container(用于规定wizard step的props)
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React, {Component, PropTypes} from 'react';

export default class WizardStep extends Component{
  static propTypes = {
    isActive: PropTypes.bool,
    title: PropTypes.string.isRequired,
    validateFunc: PropTypes.func.isRequired
  };

  render(){
    const activeClassName = this.props.isActive ? 'active' : '';
    return (
      <div className={`wizard-step ${activeClassName}`} >
        {this.props.children}
      </div>
    );
  }
}
