/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

export function getHtmlSize(){
  let size;
  try {
    size = {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }
  }catch (e){
    console.log(e);
  }
  return size;
}

/***
 * 获取body宽高
 * @returns {Object} - e.x. {width:100,height:100}
 */
export function getBodyClientSize(){
  let size;
  try {
    size = {
      width: document.body.clientWidth,
      height: document.body.clientHeight
    }
  }catch (e){
    console.log(e);
  }
  return size;
}

/***
 * 获取页面宽高（包括非可见区域）
 * @returns {Object} - e.x. {width: 100,height: 100}
 */
export function getOffsetSize() {
  let size;
  try {
    size = {
      width: document.body.offsetWidth,
      height: document.body.offsetHeight
    }
  }catch (e){
    console.log(e);
  }
  return size;
}
