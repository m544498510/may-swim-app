/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';
import React, {Component, PropTypes} from "react";
import {Button, FormGroup, InputGroup, FormControl} from "react-bootstrap";
import MCheckbox from "widgets/checkbox";

export default class SignInForm extends Component {
  static propTypes = {
    signIn: PropTypes.func.isRequired,
    signInRejected: PropTypes.bool.isRequired
  };

  constructor(props, content) {
    super(props, content);

    this.state = {
      userName: '',
      password: '',
      autoSignIn: true
    };

    this.userNameChange = ::this.userNameChange;
    this.psdChange = ::this.psdChange;
    this.checkboxChange = ::this.checkboxChange;
    this.signInEvent = ::this.signInEvent;
  }

  userNameChange(event) {
    this.setState({'userName': event.target.value});
  }

  psdChange(event) {
    this.setState({'password': event.target.value});
  }

  checkboxChange(state) {
    this.setState({"autoSignIn": state});
  }

  signInEvent(event) {
    event.preventDefault();
    const userName = this.state.userName.trim();
    const password = this.state.password.trim();
    const autoSignIn = this.state.autoSignIn;
    if(userName == ''){
      this.refs.userNameInput.focus();
    }else if(password == ''){
      this.refs.psdInput.focus();
    }else{
      this.props.signIn(userName, password, autoSignIn);
    }
  }


  render() {
    let signInFailInfo = null;
    if (this.props.signInRejected) {
      signInFailInfo =
        (<span className="warning_info">
          <icon className="fa fa-exclamation-triangle" aria-hidden="true"></icon>
          你输入的密码和账户名不匹配
        </span>)
    }

    return (
      <form className="auth-form">
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon>
              <icon className="fa fa-user fa-lg"/>
            </InputGroup.Addon>
            <input
              type="text"
              className="user-input form-control"
              placeholder="邮箱/用户名"
              maxLength="64"
              autocomplete="off"
              ref="userNameInput"
              onChange={this.userNameChange}
            />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup >
            <InputGroup.Addon>
              <icon className="fa fa-lock fa-lg"/>
            </InputGroup.Addon>
            <input
              type="password"
              className="psd-input form-control"
              placeholder="密码"
              maxLength="64"
              autocomplete="off"
              ref="psdInput"
              onChange={this.psdChange}
            />
          </InputGroup>
        </FormGroup>
        <FormGroup >
          {signInFailInfo}
          <MCheckbox
            onChange={this.checkboxChange}
            labelTxt="自动登录"
            selected="true"
          />
        </FormGroup>
        <FormGroup className="form-row form-btn-row">
          <Button
            id="submit"
            className="submit-btn"
            onClick={this.signInEvent}
          >登录</Button>
        </FormGroup>
      </form>
    );
  }
}
