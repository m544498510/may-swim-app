/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React, {Component, PropTypes} from 'react';

import {getBgImgInfo} from './bgTool';
export default class Panel extends Component {
  static propTypes = {
    title: PropTypes.string
  };

  render() {
    let panelTitle;
    if (this.props.title) {
      panelTitle = (
        <div className="panel-heading">
          <h4 className="panel-title">{this.props.title}</h4>
        </div>
      );
    }
    const bgStyle = calculateBgStyle();

    return (
      <div className="panel panel-blur" style={bgStyle}>
        {panelTitle}b
        <div className="panel-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

function calculateBgStyle() {
  const bgInfo = getBgImgInfo();
  let bgStyle = '';
  if(bgInfo){
    bgStyle += 'background-size:'+ Math.round(bgInfo.width) + 'px ' + Math.round(bgInfo.height) + 'px';
    bgStyle += 'background-position:'+ Math.floor(bgInfo.positionX) + 'px ' + Math.floor(bgInfo.positionY) + 'px'
  }
  return bgStyle;
}
