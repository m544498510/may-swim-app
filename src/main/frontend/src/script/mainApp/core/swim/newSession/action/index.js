/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
import types from "./types";

/***
 *  更新新建一套游泳训练信息
 * @param {string} date - 日期ISO 8601（2014-09-08T08:02:17-05:00）
 * @param {number|int} poolLength - 泳池长度
 * @param {string} des - 描述
 */
export function updateSwimSession(date, poolLength, des) {
  return {
    types: types.UPDATE_SWIM_SESSION,
    payload: {
      date, poolLength, des
    }
  };
}

/***
 * 新建一组游泳信息
 */
export function createSwimSet() {
  return {
    types: types.CREATE_SWIM_SET
  };
}

/***
 * 更新指定某组游泳信息
 * tips: 不能修改set index
 * @param {number|int} index - set index
 * @param {object} attrs - 更新内容
 */
export function updateSwimSet(index, attrs) {
  return {
    types: types.UPDATE_SWIM_SET,
    payload: {
      index, attrs
    }
  };
}

/***
 * 删除指定某组游泳信息
 * @param {number|int} index - set index
 */
export function deleteSwimSet(index){
  return {
    types: types.DELETE_SWIM_SET,
    payload: index
  }
}


