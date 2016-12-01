/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';
import React, {Component, PropTypes} from "react";
import {FormGroup, InputGroup, InputGroupAddon, Input} from "reactstrap";


export default class InputFormGroup extends Component {
  static propTypes = {
    onChangeHandle: PropTypes.func.isRequired,
    isBlurChange: PropTypes.bool,
    iconName: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    status: PropTypes.string,
    info: PropTypes.string,
    type: PropTypes.string
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      iconClassName: 'fa fa-lg ' + props.iconName,
      type: props.type ? props.type : 'text',
      lastValue: ''
    };
    this.onChange = ::this.onChange;
    this.onBlur = ::this.onBlur;
  }

  onChange(e) {
    this.props.onChangeHandle( e.target.value);
  }
  onBlur(e){
    const value = e.target.value;
    if(value != this.state.lastValue){
      this.props.onChangeHandle(value);
    }
    this.setState({'lastValue': value});

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
          <InputGroupAddon>
            <icon className={this.state.iconClassName}/>
          </InputGroupAddon>
          <Input
            className="form-input"
            type={this.state.type}
            placeholder={this.props.placeholder}
            onChange={this.props.isBlurChange?null:this.onChange}
            onBlur={this.props.isBlurChange?this.onBlur:null}
          />
        </InputGroup>
        {helpInfo}
      </FormGroup>
    );
  }


}
