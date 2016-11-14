/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';
import React, {Component, PropTypes} from "react";
import {FormGroup, InputGroup, FormControl} from "react-bootstrap";


export class InputFormGroup extends Component {
  static propTypes = {
    onChangeHandle: PropTypes.func.isRequired,
    iconName: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    status: PropTypes.string,
    info: PropTypes.string,
    type: PropTypes.string
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      iconClassName: 'fa fa-lg' + props.iconName,
      type: props.type ? props.type : 'text'
    };
    this.onChange = ::this.onChange;
  }

  onChange(e){
    this.props.onChangeHandle(e.target.value);
  }

  render() {
    let helpInfo = '';
    if (this.props.info) {
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
            <icon className={this.state.iconClassName}/>
          </InputGroup.Addon>
          <FormControl
            type={this.props.type}
            placeholder={this.props.placeholder}
            onchange={this.onChange}
          />
          {helpInfo}
        </InputGroup>
      </FormGroup>
    );
  }


}
