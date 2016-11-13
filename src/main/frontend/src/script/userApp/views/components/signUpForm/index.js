/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {Button, FormGroup, InputGroup, FormControl} from 'react-bootstrap';



export default class SignUpForm extends Component {
  static propTypes = {
    signUp: PropTypes.func.isRequired
  };

  constructor(props, content) {
    super(props, content);

    this.state = {
      userName: '',
      email: '',
      password: '',
      secondPsd: '',
      emailFormatErorr: false,
    };

    this.userNameChange = ::this.userNameChange;
    this.emailChange = ::this.emailChange;
    this.passwordChange = ::this.passwordChange;
    this.secondPsdChange = ::this.secondPsdChange;
    this.commit = ::this.commit;
  }

  userNameChange(evt) {
    this.setState({'userName': evt.target.val});
  }

  emailChange(evt) {
    this.setState({'email': evt.target.val});
  }

  passwordChange(evt) {
    this.setState({'password': evt.target.val});
  }

  secondPsdChange(evt) {
    this.setState({'secondPsd': evt.target.val});
  }

  commit(evt){
    evt.preventDefault();
    const userName = this.state.userName.trim();
    const email = this.state.email.trim();
    const password = this.state.password.trim();
  }

  render() {

    return (
      <form className="auth-form">
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon>
              <icon className="fa fa-user fa-lg"/>
            </InputGroup.Addon>
            <input
              type="text"
              className="form-input form-control warning"
              placeholder="请输入用户名"
            />
          </InputGroup>
          <div className="help-warning-info">
            <icon className="fa fa-info-circle fa-1"/>
            支持中文、字母、数字、“-”“_”的组合
          </div>
        </FormGroup>
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon>
              <icon className="fa fa-envelope-o fa-lg"/>
            </InputGroup.Addon>
            <input
              type="text"
              className="form-input user-input form-control"
              placeholder="请输入邮箱"/>
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon>
              <icon className="fa fa-unlock-alt fa-lg"/>
            </InputGroup.Addon>
            <input
              type="password"
              className="form-input psd-input form-control"
              placeholder="请输入密码"
            />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon>
              <icon className="fa fa-lock fa-lg"/>
            </InputGroup.Addon>
            <input
              type="password"
              className="form-input psd-input form-control"
              placeholder="请再次输入密码"/>
          </InputGroup>
        </FormGroup>
        <FormGroup className="form-row form-btn-row">
          <Button
            id="submit"
            className="btn primary-btn submit-btn"

          >注册</Button>
        </FormGroup>
      </form>
    );

  }
}
