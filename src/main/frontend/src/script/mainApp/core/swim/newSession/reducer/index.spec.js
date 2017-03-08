/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
import {List} from "immutable";

import SwimSet from "../model/Set";
import SwimSession from "../model/Session";

import reduces, {defaultState} from "./index";
import actionTypes from "../action/types";

describe('swim newSession reducer', () => {
  let _defaultState;
  beforeEach(()=>{
    _defaultState = {
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

  });
  describe('init', () => {
    it('should return default state', () => {
      const state = reduces(undefined, {});
      expect(state).to.deep.equals(defaultState);
    });
  });

  describe('type UPDATE_SWIM_SESSION', () => {
    it('should update session with special data', () => {
      const payload = {
        date: '2014-09-08T08:02:17-05:00',
        poolLength: 50,
        des: 'test des'
      };
      const state = reduces(_defaultState, {
        type: actionTypes.UPDATE_SWIM_SESSION,
        payload: payload
      });
      expect(state.session.toJS()).to.deep.equals({
        sessionDate: payload.date,
        poolLength: payload.poolLength,
        sessionDes: payload.des
      });
    });
  });

  describe('type CREATE_SWIM_SET', () => {
    it('should push a new set into sets', () => {
      const size = _defaultState.sets.size;
      const state = reduces(_defaultState, {
        type: actionTypes.CREATE_SWIM_SET
      });
      expect(state.sets.size).to.equals(size + 1);
    });
  });

  describe('type UPDATE_SWIM_SET', () => {
    it('should update set attrs with special data', () => {
      const newSetAttrs = {
        setCalorie: 200
      };
      const state = reduces(_defaultState, {
        type: actionTypes.UPDATE_SWIM_SET,
        payload: {
          index: 0,
          attrs: newSetAttrs
        }
      });
      expect(state.sets.getIn([0, 'setCalorie'])).to.equals(newSetAttrs.setCalorie);
    });
  });

  describe('type DELETE_SWIM_SET', () => {
    it('should delete special set', () => {
      const initState = {
        sets: _defaultState.sets.mergeIn([1],{setCalorie: 200})
      };
      expect(initState.sets.getIn([0,'setCalorie'])).to.not.equals(200);
      const state = reduces(initState,{
        type: actionTypes.DELETE_SWIM_SET,
        payload: 0
      });
      expect(state.sets.size).to.equals(4);
      expect(state.sets.getIn([0,'setCalorie'])).to.equals(200);
    });

    it('should reset other set index when delete a set',()=>{
      const state = reduces(_defaultState,{
        type: actionTypes.DELETE_SWIM_SET,
        payload: 1
      });
      for (let i = 0; i < state.sets.size; i++) {
        expect(state.sets.getIn([i,'setIndex'])).to.equals(i+1);
      }
    })
  });

});
