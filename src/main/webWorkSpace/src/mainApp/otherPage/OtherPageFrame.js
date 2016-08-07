/**
 * @author May
 * @version 1.0.0
 */
'use strict';

import React, { Component } from 'react';
import { Link,IndexLink  } from 'react-router';

export default class OtherPageFrame extends Component {
  render() {
    return (
      <div>
        <h2>other page frame</h2>
        <ul role="nav">
          <li><Link to="/login234" >About
          </Link></li>
          <li><Link to="/register" >Repos</Link></li>
          <li><Link to="/" onlyActiveOnIndex={false}>home</Link ></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
