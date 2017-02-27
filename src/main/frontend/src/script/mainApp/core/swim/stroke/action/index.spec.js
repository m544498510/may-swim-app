/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
import configureStore from "redux-mock-store";
import {List} from "immutable";
import thunk from "redux-thunk";
import * as actions from "./index";
import types from "./types";

const mockStore = configureStore([thunk]);

describe('swim stroke action', () => {
  let _store;
  before(() => {
    _store = mockStore({
      stroke: List([])
    });
  });

  afterEach(() => {
    _store.clearActions();
  });

  it('setStroke', () => {
    const list = [{name: '1'}];

    _store.dispatch(actions.setStroke(list));
    const action = _store.getActions()[0];
    expect(action).to.deep.equals({
      type: types.SET_STROKE_LIST,
      payload: list
    });
  });

  it('fetchStroke', () => {
    _store.dispatch(actions.fetchStrokeList());
    const action = _store.getActions()[0];
    expect(action).to.deep.equals({
      type: types.FETCH_STROKE_LIST
    });
  });
});
