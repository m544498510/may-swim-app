/**
 * @author May
 * @version 1.0.0
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {Link} from 'react-router';

import SignUpForm from '../../components/signUpForm';
import {userActions, getEmailErrorInfo,getSecondPsdErrorInfo} from  'userApp/core/user';

class SignUp extends Component{
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
      <app className="main-frame">
        <div className="auth-block">
          <h1>注册 May's sit
          </h1>
          <SignUpForm
            userNameChange={this.props.userNameChange}
            userNameErrorInfo={this.props.userNameErrorInfo}
            emailChange={this.props.emailChange}
            emailErrorInfo={this.props.emailErrorInfo}
            passwordChange={this.props.passwordChange}
            secondPsdChange={this.props.secondPsdChange}
            secondPsdErrorInfo={this.props.secondPsdErrorInfo}
            signUp={this.props.signUp}
          />
          <div className="form-row form-link-box">
            <Link to="/" className="form-link register-link">已有帐号？登录帐户</Link>
          </div>
          <div className="auth-sep">
            <span>第三方账号登录</span>
          </div>
          <div className="al-share-auth">
            <ul className="al-share">
              <li><i className="logoIconFont icon-qq"></i></li>
              <li><i className="logoIconFont icon-weixin"></i></li>
              <li><i className="logoIconFont icon-sina"></i></li>
            </ul>
          </div>
        </div>
      </app>)
  }
}

const mapStateToProp = (state) => ({
  emailErrorInfo: getEmailErrorInfo(state),
  secondPsdErrorInfo: getSecondPsdErrorInfo(state)
});


export default connect(mapStateToProp, userActions)(SignUp);
