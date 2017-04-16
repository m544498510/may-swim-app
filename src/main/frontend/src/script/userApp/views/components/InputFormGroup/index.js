/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
import React, { Component } from "react";
import PropTypes from 'prop-types';

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
    if(value !== this.state.lastValue){
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
      <div className={`form-group ${this.props.status}`}>
        <div className="input-group">
          <div className="input-group-addon">
            <icon className={this.state.iconClassName}/>
          </div>
          <input
            className="form-input user-input form-control"
            type={this.state.type}
            placeholder={this.props.placeholder}
            onChange={this.props.isBlurChange?null:this.onChange}
            onBlur={this.props.isBlurChange?this.onBlur:null}
          />
        </div>
        {helpInfo}
      </div>
    );
  }


}
