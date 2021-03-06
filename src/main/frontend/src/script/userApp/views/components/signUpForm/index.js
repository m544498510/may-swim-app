/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputFormGroup from '../InputFormGroup';

export default class SignUpForm extends Component {
  static propTypes = {
    signUp: PropTypes.func.isRequired,
    userNameChange: PropTypes.func.isRequired,
    userNameErrorInfo: PropTypes.string,
    emailChange: PropTypes.func.isRequired,
    emailErrorInfo: PropTypes.string,
    passwordChange: PropTypes.func.isRequired,
    secondPsdChange: PropTypes.func.isRequired,
    secondPsdErrorInfo: PropTypes.string
  };

  render() {
    return (
      <form className="auth-form">
        <InputFormGroup
          onChangeHandle={this.props.userNameChange}
          isBlurChange={true}
          iconName="fa-user"
          placeholder="请输入用户名"
          info={this.props.userNameErrorInfo}
          status={this.props.userNameErrorInfo?'warning':''}
        />
        <InputFormGroup
          onChangeHandle={this.props.emailChange}
          isBlurChange={true}
          iconName="fa-envelope-o"
          placeholder="请输入邮箱"
          info={this.props.emailErrorInfo}
          status={this.props.emailErrorInfo?'warning':''}
        />
        <InputFormGroup
          onChangeHandle={this.props.passwordChange}
          isBlurChange={true}
          type="password"
          iconName="fa-unlock-alt"
          placeholder="请输入密码"
        />
        <InputFormGroup
          onChangeHandle={this.props.secondPsdChange}
          iconName="fa-lock"
          placeholder="请再次输入密码"
          type="password"
          info={this.props.secondPsdErrorInfo}
          status={this.props.secondPsdErrorInfo?'warning':''}
        />
        <div className="form-group form-row form-btn-row">
          <button
            id="submit"
            className="btn primary-btn submit-btn"
            onClick={this.props.signUp}
          >注册</button>
        </div>
      </form>
    );

  }
}
