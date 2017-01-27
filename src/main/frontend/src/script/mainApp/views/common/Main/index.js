/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

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
            <ul className="breadcrumb">
              {renderBreadcrumb(this.props.breadcrumb)}
            </ul>
          </div>
          <div className="main-content">
            {this.props.children}
          </div>
        </div>
      </main>
    );
  }
}

function renderBreadcrumb(list) {
  const itemArr = [];
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    let linkTag;
    if (item.link) {
      linkTag = <Link className="link" to={item.link}>{item.name}</Link>;
    } else {
      linkTag = item.name;
    }
    itemArr.push(
      <li className="breadcrumb-item" key={i}>
        {linkTag}
      </li>
    );
  }
  return itemArr;
}
