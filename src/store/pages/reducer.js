import * as types from './actionTypes';
import Immutable from 'seamless-immutable';


const initialState = Immutable({
  pageList: null,
  createdPage: null,
  createErrors: null,
  selectedPage: undefined,
  pageEditErrors: null
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.PAGES_FETCHED:
      return state.merge({
        pageList: action.pageList
      });
    case types.PAGE_FETCHED:
      return state.merge({
        selectedPage: action.pageData
      });
    case types.PAGE_CREATED:
      return state.merge({
        createdPage: action.data
      });
    case types.PAGE_CREATE_FAILED:
      return state.merge({
        createErrors: action.data
      });
    case types.CLEAR_CREATE_STATE:
      return state.merge({
        createErrors: null,
        createdPage: null
      });
    case types.PAGE_EDIT_FAILED:
      return state.merge({
        pageEditErrors: action.data
      });
    default:
      return state;
  }
}

// Selectors

export function getPagesData(state) {
  return state.pages.pageList;
}

export function getPageData(state) {
  return state.pages.selectedPage;
}

export function getCreatedPage(state) {
  return state.pages.createdPage;
}

export function getCreateErrors(state) {
  return state.pages.createErrors;
}

export function getPageEditErrors(state) {
  return state.pages.pageEditErrors;
}
