import * as types from './actionTypes';
import Immutable from 'seamless-immutable';


const initialState = Immutable({
  cityList: []
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.CATALOG_FETCHED:
      return state.merge({
        cityList: action.cityList
      });
    default:
      return state;
  }
}

// Selectors

export function getCityData(state) {
  return state.catalog.cityList;
}