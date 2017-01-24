/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React, {Component, PropTypes} from 'react';

import {getBgImgInfo,getImgPromise} from './bgTool';

export default class Panel extends Component {
  static propTypes = {
    title: PropTypes.string
  };
  constructor(props,context){
    super(props,context);
    this.state = {
      bgInfo: {}
    };

    getImgPromise().then(bgInfo=>{
      this.setState({bgInfo});
    });
  }


  render() {
    let panelTitle;
    if (this.props.title) {
      panelTitle = (
        <div className="panel-heading">
          <h4 className="panel-title">{this.props.title}</h4>
        </div>
      );
    }
    return (
      <div className="panel panel-blur" style={calculateBgStyle()}>
        {panelTitle}
        <div className="panel-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

function calculateBgStyle(bgInfo) {
  let bgStyle = {};
  if(bgInfo){
    bgStyle['backgroundSize'] = Math.round(bgInfo.width) + 'px ' + Math.round(bgInfo.height) + 'px';
    bgStyle['backgroundPosition'] = Math.floor(bgInfo.positionX) + 'px ' + Math.floor(bgInfo.positionY) + 'px';
  }
  return bgStyle;
}
