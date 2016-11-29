/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';
import React, {PropTypes} from 'react';

import {Link} from 'react-router';


const Header = ()=>{

  return (
    <header>
      <Link className="header_logo" to="/">
        <span>May</span>'s sit
      </Link>
      <a className="header_menuCollapse_btn" >
        <icon className="fa fa-bars" />
      </a>
      <div className="header_userProfile_box">
        <img className="userInfo_pic"
          src="http://beijing678.oss-cn-beijing.aliyuncs.com/jeemaa/documents/user/19251/face/1b06449747124c069887320865f4d480.jpg" alt=""/>
      </div>

    </header>
  );


};

Header.propTypes = {

};

export default Header;
