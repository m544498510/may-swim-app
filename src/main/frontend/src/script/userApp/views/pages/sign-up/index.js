/**
 * @author May
 * @version 1.0.0
 */
'use strict';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import SignUpForm from '../../components/signUpForm';

export function SignUp() {
  return (
    <app className="main-frame">
      <div className="auth-block">
        <h1>注册 May's sit</h1>
        <SignUpForm />
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
SignUp.propType = {
  signUp: 1
};

export default connect(null,null)(SignUp);
