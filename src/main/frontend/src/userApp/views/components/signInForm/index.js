/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';
import React,{Component,PropTypes} from 'react';
import { Button, FormGroup, InputGroup,FormControl } from 'react-bootstrap';

export default class SignInForm extends Component{
  static propTypes = {

  };

  constructor(props,content){
    super(props,content);

    this.state = {
      userName: '',
      password: '',
      isSavePsd: false
    }


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
              className="form-input user-input form-control"
              placeholder="邮箱/用户名"/>
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup >
            <InputGroup.Addon>
              <icon className="fa fa-lock fa-lg" />
            </InputGroup.Addon>
            <FormControl
              type="password"
              className="form-input psd-input form-control"
              placeholder="密码"/>
          </InputGroup>
        </FormGroup>
        <FormGroup >
          <div className="may-checkbox auto-checkbox">
            <icon className="fa fa-square-o" />
            <div>自动登录</div>
          </div>
        </FormGroup>
        <FormGroup className="form-row form-btn-row">
          <Button id="submit" className="btn primary-btn submit-btn">登录</Button>
        </FormGroup>
      </form>
    );
  }
}
