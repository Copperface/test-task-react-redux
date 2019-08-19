import * as types from './actionTypes';
import apiHelperService from '../../services/ApiHelper';

export function fetchPages(searchParams) {
  return async (dispatch, getState) => {
    try {
      const pageList = await apiHelperService.getPageList(searchParams);
      dispatch({ type: types.PAGES_FETCHED, pageList });
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchPage(id) {
  return async (dispatch, getState) => {
    try {
      const pageData = await apiHelperService.getPage(id);
      dispatch({ type: types.PAGE_FETCHED, pageData });
    } catch (error) {
      console.error(error);
    }
  };
}

export function createPage(pageData) {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: types.CLEAR_CREATE_STATE });

      const { success, data } = await apiHelperService.createPage(pageData);
      const type = success ? types.PAGE_CREATED : types.PAGE_CREATE_FAILED;
      dispatch({ type, data });
    } catch (error) {
      console.error(error);
    }
  };
}

export function editPage(id, pageData) {
  return async (dispatch, getState) => {
    try {
      const { success, data } = await apiHelperService.editPage(id, pageData);
      success ? dispatch(fetchPage(id)) : dispatch({ type: types.PAGE_EDIT_FAILED, data });
    } catch (error) {
      console.error(error);
    }
  };
}

