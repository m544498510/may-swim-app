/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';
import React,{Component,PropTypes} from 'react';

export class SignInForm extends Component{
  static propTypes = {

  };

  render() {
    return (
      <div className="auth-form">
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-addon">
              <icon className="fa fa-user fa-lg"></icon>
            </div>
            <input type="text" className="form-input user-input form-control" placeholder="邮箱/用户名"/>
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-addon">
              <icon className="fa fa-lock fa-lg"></icon>
            </div>
            <input type="password" className="form-input psd-input form-control" placeholder="密码"/>
          </div>
        </div>
        <div className="form-group">
          <div className="may-checkbox auto-checkbox">
            <icon className="fa fa-square-o"></icon>
            <div>自动登录</div>
          </div>
        </div>
        <div className="form-row form-btn-row">
          <button id="submit" className="btn primary-btn submit-btn">登录</button>
        </div>
      </div>
    );
  }
}
