/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import {getBodyClientSize} from '../../utils/htmlTool';

const bgImg = new Image();
let bgImgInfo;

const computedStyle = getComputedStyle(document.body, ':before');
bgImg.onerror = (e) => {console.log(e);};
bgImg.onload = () => {
  bgImgInfo = calculateBgInfo();
};
bgImg.src = computedStyle.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2');

export function getBgImgInfo() {
  return bgImgInfo;
}

function calculateBgInfo(){
  const clientSize = getBodyClientSize();
  const elemW = clientSize.width;
  const elemH = clientSize.height;
  if (elemW <= 640) return null;
  // original img ratio
  const imgRatio = (bgImg.height / bgImg.width);
  // container ratio
  const containerRatio = (elemH / elemW);

  let finalHeight, finalWidth;
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
}
