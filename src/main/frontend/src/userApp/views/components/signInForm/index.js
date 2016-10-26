/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';
import React,{Component,PropTypes} from 'react';
import { Button, FormGroup, InputGroup,FormControl } from 'react-bootstrap';

import Checkbox from '../../../../widgets/checkbox';

class SignInForm extends Component{
  static propTypes = {
    //signIn: PropTypes.func.isRequired
  };


  constructor(props,content){
    super(props,content);

    this.state = {
      userName: '',
      password: '',
      isSavePsd: false
    };

    this.userNameChange = ::this.userNameChange;
    this.psdChange = ::this.psdChange;
    this.checkboxChange = ::this.checkboxChange;
    this.signInEvent = ::this.signInEvent;
  }

  userNameChange(event){
    this.setState({'userName':event.target.value});
  }

  psdChange(event){
    this.setState({'password':event.target.value});
  }

  checkboxChange(state){
    this.setState({'isSavePsd':state});
  }

  signInEvent(event){
    event.preventDefault();
    const userName = this.state.userName.trim();
    const password = this.state.password.trim();
    const isSavePsd = this.state.isSavePsd;
    console.log(this.state);
    //this.props.signIn(userName,password,isSavePsd);
  }
  

  render() {
    return (
      <form className="auth-form">
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon>
              <icon className="fa fa-user fa-lg" />
            </InputGroup.Addon>
            <FormControl
              type="text"
              className="user-input"
              placeholder="邮箱/用户名"
              maxLength="64"
              onChange={this.userNameChange}
            />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup >
            <InputGroup.Addon>
              <icon className="fa fa-lock fa-lg" />
            </InputGroup.Addon>
            <FormControl
              type="password"
              className="psd-input"
              placeholder="密码"
              maxLength="64"
              onChange={this.psdChange}
            />
          </InputGroup>
        </FormGroup>
        <FormGroup >
          <Checkbox
            onChange={this.checkboxChange}
            inForm="true"
            labelTxt="自动登录"
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

export default SignInForm;
