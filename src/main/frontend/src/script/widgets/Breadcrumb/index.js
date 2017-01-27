/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class Breadcrumb extends Component {
  static propTypes = {
    /***
     * 面包屑的内容json e.x. -  [{
     *            name {string} - 名称 （必须）
     *            link {string} - 链接地址
     *        }]
     */
    list: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  render() {
    return (
      <ul className="breadcrumb">
        {renderBreadcrumb(this.props.list)}
      </ul>
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
