/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

let bgImg;
bgImg = new Image();
const computedStyle = getComputedStyle(document.body, ':before');
bgImg.src = computedStyle.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2');

export function getBgImgInfo(htmlSize) {
  return calculateBgInfo(bgImg,htmlSize);
}

function calculateBgInfo(bgImg,clientSize){
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
