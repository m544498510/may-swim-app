/**
 * @author May
 * @version 1.0.0
 */
'use strict';

import React, { Component } from 'react'

export default class otherPage extends Component {
  render() {
    return (
      <div>
        <h2>other page frame</h2>
        {this.props.children}
      </div>
    )
  }
}
