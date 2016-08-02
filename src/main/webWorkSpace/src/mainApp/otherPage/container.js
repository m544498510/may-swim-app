/**
 * @author May
 * @version 1.0.0
 */
'use strict';

import React, { Component } from 'react';
import { Link,IndexLink  } from 'react-router';

export default class OtherFrame extends Component {
  render() {
    return (
      <div>
        <h2>other page frame</h2>
        <ul role="nav">
          <li><Link to="/login" activeStyle={{ color: 'red' }}>About</Link></li>
          <li><Link to="/register" activeStyle={{ color: 'blue' }}>Repos</Link></li>
          <li><IndexLink  to="/" onlyActiveOnIndex={false}>home</IndexLink ></li>

        </ul>
        {this.props.children}
      </div>
    )
  }
}
