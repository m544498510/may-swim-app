import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class App extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  render() {
    return (
      <app>
        <main className="main-frame">{this.props.children}</main>
      </app>
    );
  }
}
