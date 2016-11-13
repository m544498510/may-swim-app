/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';
import React, {Component, PropTypes} from 'react';
import {FormGroup,InputGroup} from 'react-bootstrap';


export class InputFormGroup extends Component{
  static propTypes = {
    iconName: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    status: PropTypes.string,
    info: PropTypes.string,

  };

  constructor(props, context){
    super(props, context);

    this.state = {
      iconClassName: 'fa fa-lg' + props.iconName
    }

  }


  render(){
    let helpInfo = '';
    if(this.props.info){
      helpInfo = (
        <div className="help-info">
          <icon className="fa fa-info-circle fa-1"/>
          {this.props.info}
        </div>
      )
    }

    return (
      <FormGroup className={this.props.status}>
        <InputGroup>
          <InputGroup.Addon>
            <icon className={this.state.iconClassName} />
          </InputGroup.Addon>
          <input
            type="text"
            className="form-input form-control"
            placeholder={this.props.placeholder}
          />
          {helpInfo}
        </InputGroup>
      </FormGroup>
    );
  }



}
