import * as types from './actionTypes';
import apiHelperService from '../../services/ApiHelper';

export function fetchCatalog() {
  return async (dispatch, getState) => {
    try {
      const cityList = await apiHelperService.getCityList();
      dispatch({ type: types.CATALOG_FETCHED, cityList });
    } catch (error) {
      console.error(error);
    }
  };
}