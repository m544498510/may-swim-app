/**
 * @author May
 * @version 1.0.0
 */
'use strict';

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {createSelector} from 'reselect';
import SignInForm from '../../components/signInForm';
import {authActions,isSignInRejected,isSignInFulfilled} from '../../../core/auth';

export function SignIn({signIn,signInRejected,signInFulfilled}) {
  if(signInFulfilled){
    window.location.href = '/';
  }

  return (
    <div className="auth-block">
      <h1>登录 May's sit</h1>
      <SignInForm
        signIn={signIn}
        signInRejected={signInRejected}
      />
      <div className="form-link-box">
        <a className="form-link getPsd-link">忘记密码?</a>
        <span className="form-separator">·</span>
        <Link to="/sign-up" className="form-link register-link">注册帐户</Link>
      </div>
      <div className="auth-sep">
    <span>
      <span>第三方账号登录</span>
    </span>
      </div>
      <div className="al-share-auth">
        <ul className="al-share">
          <li><i className="logoIconFont icon-qq"></i></li>
          <li><i className="logoIconFont icon-weixin"></i></li>
          <li><i className="logoIconFont icon-sina"></i></li>
        </ul>
      </div>
    </div>)
}

SignIn.propTypes = {
  signIn: PropTypes.func.isRequired
};

const mapStateToProps = createSelector(
  isSignInRejected,
  isSignInFulfilled,
  (signInRejected,signInFulfilled )=> ({
    signInRejected,
    signInFulfilled
  })
);
const mapDispatchToProps = {
  signIn: authActions.signIn
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

