/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';
import React, {PropTypes} from 'react';
import {Dropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';

import {Link} from 'react-router';


const Header = ()=>{

  return (
    <header>
      <Link className="header_logo" to="/">
        <span>May</span>'s sit
      </Link>
      <a className="header_menuCollapse_btn" href="javascript:;" >
        <icon className="fa fa-bars" />
      </a>
      <div className="header_userProfile_box">
        <Dropdown id="userProfileDropdown" pullRight={true}>
          <DropdownToggle>
            <img className="user_profile_pic"
                 src="http://beijing678.oss-cn-beijing.aliyuncs.com/jeemaa/documents/user/19251/face/1b06449747124c069887320865f4d480.jpg" alt=""/>
          </DropdownToggle>
          <DropdownMenu className="user_profile_dropdown_menu">
            <DropdownItem>
              <Link to="/user/profile" >
                <icon className="fa fa-user" />
                我的信息
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/user/profile" >
                <icon className="fa fa-cog" />
                设置
              </Link>
            </DropdownItem>
            <DropdownItem>
              <icon className="fa fa-power-off" />
              退出
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>


      </div>

    </header>
  );


};

Header.propTypes = {

};

export default Header;
