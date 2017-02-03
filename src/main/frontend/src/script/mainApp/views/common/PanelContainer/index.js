/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React, {Component, PropTypes} from 'react';
import {createSelector} from 'reselect';
import {connect} from 'react-redux';

import * as frame from 'mainApp/core/frame';
import {getBgImgInfo} from './bgTool';

export class PanelContainer extends Component {
  static propTypes = {
    title: PropTypes.string,
    htmlSize: PropTypes.object.isRequired
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
    return (
      <div className="panel panel-blur" style={calculateBgStyle(this.props.htmlSize)}>
        {panelTitle}
        <div className="panel-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

function calculateBgStyle(htmlSize) {
  const bgInfo = getBgImgInfo(htmlSize);
  let bgStyle = {};

  if (bgInfo) {
    bgStyle['backgroundSize'] = Math.round(bgInfo.width) + 'px ' + Math.round(bgInfo.height) + 'px';
    bgStyle['backgroundPosition'] = Math.floor(bgInfo.positionX) + 'px ' + Math.floor(bgInfo.positionY) + 'px';
  }
  return bgStyle;
}

const mapStateToProps = createSelector(
  frame.selectors.getHtmlSize,
  htmlSize => ({
    htmlSize
  })
);

export default connect(mapStateToProps, null)(PanelContainer);

