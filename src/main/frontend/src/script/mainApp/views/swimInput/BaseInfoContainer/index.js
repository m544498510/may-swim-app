/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React, {Component, PropTypes} from 'react';
import Datetime from 'react-datetime';

export default class BaseInfoContainer extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="swim-step swim-main-step">
        <div className="form-group row">
          <label htmlFor="SwimDatePicker" className="col-sm-2 col-form-label col-form-label-lg">日期：</label>
          <div className="col-sm-10 input-group">
            <Datetime
              id="SwimDatePicker"
              defaultValue={new Date()}
              dateFormat="YYYY-MM-DD"
              inputProps={{id:"SwimDatePicker"}}
            />
            <span className="input-group-addon addon-right">
              <icon className="fa fa-calendar"/>
            </span>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="swimPoolLength" className="col-sm-2 col-form-label col-form-label-lg">泳池长度：</label>
          <div className="col-sm-10 input-group">
            <input type="number" className="form-control" id="swimPoolLength" placeholder=""/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="swimRemark" className="col-sm-2 col-form-label col-form-label-lg">备注：</label>
          <div className="col-sm-10 input-group">
            <textarea className="form-control swim-remark" id="swimRemark">
            </textarea>
          </div>
        </div>
      </div>

    );
  }


}
