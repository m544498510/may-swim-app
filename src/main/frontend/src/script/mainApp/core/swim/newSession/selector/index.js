/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import {createSelector} from 'reselect';
import * as stroke from '../../stroke';

export function getNewSession(state) {
  return state.newSession;
}

export function getSwimSession(state) {
  return getNewSession(state).session;
}

function _getSwimSets(state) {
  return getNewSession(state).sets;
}

export const getSwimSets = createSelector(
  _getSwimSets,
  stroke.selectors.getStrokeList,
  (swimSets,strokeList)=>{
    for (let i = 0; i < swimSets.size; i++) {
      const set = swimSets.get(i);
      const strokeId = set.get('strokeId');
      const strokes = strokeList.filter((stroke)=>{
        return stroke.strokeId === strokeId;
      });
      set.setStrokeDes(strokes[0].strokeDes);
    }
    return swimSets;
  }
);



