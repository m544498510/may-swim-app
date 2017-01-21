/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React, {Component, PropTypes} from 'react';

import {getBodyClientSize} from '../../utils/htmlTool';

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
    return (
      <div className="panel panel-blur">
        {panelTitle}
        <div className="panel-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

function calculateBgPosition() {

}

function getBgImgSize() {
  let bgImgSize;
  const bgImg = new Image();

  const computedStyle = getComputedStyle(document.body, ':before');
  bgImg.src = computedStyle.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2');
  bgImg.onerror = (e) => {
    console.log(e);
  };
  bgImg.onload = () => {
    resolve();
  }
}

function a() {
  var computedStyle = getComputedStyle(document.body, ':before');
  var image = new Image();
  image.src = computedStyle.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2');
  image.onerror = function () {
    res.reject();
  };
  image.onload = function () {
    res.resolve();
  };

  this.bodyBgLoad = function () {
    return res.promise;
  };

  this.getBodyBgImageSizes = function () {
    var elemW = document.documentElement.clientWidth;
    var elemH = document.documentElement.clientHeight;
    if (elemW <= 640) return;
    var imgRatio = (image.height / image.width);       // original img ratio
    var containerRatio = (elemH / elemW);     // container ratio

    var finalHeight, finalWidth;
    if (containerRatio > imgRatio) {
      finalHeight = elemH;
      finalWidth = (elemH / imgRatio);
    } else {
      finalWidth = elemW;
      finalHeight = (elemW * imgRatio);
    }
    return {
      width: finalWidth,
      height: finalHeight,
      positionX: (elemW - finalWidth) / 2,
      positionY: (elemH - finalHeight) / 2
    };
  };

}
