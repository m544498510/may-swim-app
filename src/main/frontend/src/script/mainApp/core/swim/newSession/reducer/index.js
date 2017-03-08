/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import {List} from "immutable";

import SwimSet from "../model/Set";
import SwimSession from "../model/Session";
import actionTypes from "../action/types";
export const defaultState = {
  session: new SwimSession(),
  sets: List([
    new SwimSet({
      setIndex: 1
    }),
    new SwimSet({
      setIndex: 2
    }),
    new SwimSet({
      setIndex: 3
    }),
    new SwimSet({
      setIndex: 4
    }),
    new SwimSet({
      setIndex: 5
    })
  ])
};

export default function (state = defaultState, {type, payload}) {
  switch (type) {
    case actionTypes.UPDATE_SWIM_SESSION:
      state.session = state.session.merge({
        sessionDate: payload.date,
        sessionDes: payload.des,
        poolLength: payload.poolLength
      });
      break;
    case actionTypes.CREATE_SWIM_SET:
      const size = state.sets.size;
      state.sets = state.sets.push(new SwimSet({
        setIndex: size+1
      }));
      break;
    case actionTypes.UPDATE_SWIM_SET:
      payload.attrs['setIndex'] = payload.index;
      state.sets = state.sets.mergeIn([payload.index],payload.attrs);
      break;
    case actionTypes.DELETE_SWIM_SET:
      const sets = state.sets.delete(payload);
      state.sets = formatSetIndex(sets);
      break;
  }

  return state;
}

function formatSetIndex(sets){
  for (let i = 0; i < sets.size; i++) {
    sets = sets.mergeIn([i],{
      setIndex: i+1
    });
  }
  return sets;
}


