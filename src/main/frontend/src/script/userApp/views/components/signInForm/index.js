/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
import React, {Component, PropTypes} from "react";
import MCheckbox from "widgets/Checkbox";

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
    if(userName === ''){
      this.refs.userNameInput.focus();
    }else if(password === ''){
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
          <icon className="fa fa-exclamation-triangle" aria-hidden="true" />
          你输入的密码和账户名不匹配
        </span>)
    }

    return (
      <div className="form auth-form">
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-addon">
              <icon className="fa fa-user fa-lg"/>
            </div>
            <input
              type="text"
              className="user-input form-control"
              placeholder="邮箱/用户名"
              maxLength="64"
              autoComplete="off"
              ref="userNameInput"
              onChange={this.userNameChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group" >
            <div className="input-group-addon">
              <icon className="fa fa-lock fa-lg"/>
            </div>
            <input
              type="password"
              className="psd-input form-control"
              placeholder="密码"
              maxLength="64"
              autoComplete="off"
              ref="psdInput"
              onChange={this.psdChange}
            />
          </div>
        </div>
        <div className="form-group" >
          {signInFailInfo}
          <MCheckbox
            onChange={this.checkboxChange}
            selected="true"
          >自动登录</MCheckbox>
        </div>
        <dic className="form-group form-row form-btn-row">
          <button
            id="submit"
            className="btn submit-btn"
            onClick={this.signInEvent}
          >登录</button>
        </dic>
      </div>
    );
  }
}
