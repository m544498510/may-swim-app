/**
 * @author May
 * @version 1.0.0
 */
import React from "react";
import PropTypes from 'prop-types';

import {connect} from "react-redux";
import {Link} from "react-router";
import SignInForm from "../../components/signInForm";
import {authActions, isSignInRejected, isSignInFulfilled} from "userApp/core/auth";

export function SignIn({signIn, signInRejected, signInFulfilled}) {
  if (signInFulfilled) {
    window.location.href = '/';
  }

  return (
    <div className="auth-block">
      <h1>登录 May's sit
      </h1>
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
        <span>第三方账号登录</span>
      </div>
      <div className="al-share-auth">
        <ul className="al-share">
          <li><i className="logoIconFont icon-qq"/></li>
          <li><i className="logoIconFont icon-weixin"/></li>
          <li><i className="logoIconFont icon-sina"/></li>
        </ul>
      </div>
    </div>)
}

SignIn.propTypes = {
  signIn: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  signInRejected: isSignInRejected(state),
  signInFulfilled: isSignInFulfilled(state)
});

const mapDispatchToProps = {
  signIn: authActions.signIn
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

