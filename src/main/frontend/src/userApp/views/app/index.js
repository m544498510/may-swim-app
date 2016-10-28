import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
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
