/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Datetime from 'react-datetime';

export default class BaseInfoContainer extends Component {

  constructor(props, content) {
    super(props, content);

    this.state = {
      poolLengthError: '',
    };
    this.validateFunc = ::this.validateFunc;
  }

  validateFunc() {
    const errorMsg = this._validateInfo();

    if (errorMsg) {
      this.setState({
        poolLengthError: errorMsg,
      });
      return false;
    } else {
      return true;
    }
  }

  _validateInfo() {
    const baseInfo = this._getBaseInfo();
    let errorMsg;
    if (!baseInfo.poolLength) {
      errorMsg = '请填写泳池长度';
    } else if (baseInfo.poolLength < 0) {
      errorMsg = '请填写正确的泳池长度';
    }
    return errorMsg;
  }

  _getBaseInfo() {
    return {
      date: this.refs.swimDatePicker.state.inputValue,
      poolLength: parseInt(this.refs.swimPoolLength.value, 10),
      remark: this.refs.swimRemark.value,
    };
  }

  render() {
    let poolLengthErrorMsg;
    const errorMsg = this.state.poolLengthError;
    if (errorMsg) {
      poolLengthErrorMsg = (
        <div className="help-info">
          <icon className="fa fa-info-circle fa-1"/>
          {errorMsg}
        </div>
      );
    }
    return (
      <div className="swim-step swim-main-step">
        <div className="form-group row">
          <label htmlFor="swimDatePicker"
                 className="col-sm-2 col-form-label col-form-label-lg">日期：</label>
          <div className="col-sm-10">
            <div className="input-group">
              <Datetime
                id="swimDatePicker"
                ref="swimDatePicker"
                defaultValue="2017-03-07 04:09 am"
                inputProps={{id: 'swimDatePicker'}}
                onBlur={(moment) => {console.log(moment);}}
              />
              <span className="input-group-addon addon-right">
                <icon className="fa fa-calendar"/>
              </span>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="swimPoolLength"
                 className="col-sm-2 col-form-label col-form-label-lg">泳池长度：</label>
          <div className="col-sm-10">
            <input id="swimPoolLength" ref="swimPoolLength"
                   defaultValue={50}
                   type="number" className="form-control" placeholder=""/>
            {poolLengthErrorMsg}
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="swimRemark"
                 className="col-sm-2 col-form-label col-form-label-lg">备注：</label>
          <div className="col-sm-10">
            <textarea id="swimRemark" ref="swimRemark"
                      className="form-control swim-remark">
            </textarea>
          </div>
        </div>
      </div>

    );
  }

}
