/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import Breadcrump from 'widgets/Breadcrumb';

export default class Main extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    breadcrumb: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    return (
      <main>
        <div className="main-frame">
          <div className="main-header clearfix">
            <h2>{this.props.title}</h2>
            <Breadcrumb
              list={this.props.breadcrumb}
            />
          </div>
          <div className="main-content">
            {this.props.children}
          </div>
        </div>
      </main>
    );
  }
}

