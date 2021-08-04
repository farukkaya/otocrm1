import * as requestFromServer from "./stockExpertisesCrud";
import {stockExpertisesSlice, callTypes} from "./stockExpertisesSlice";

const {actions} = stockExpertisesSlice;

export const fetchStockExpertises = () => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .getAll()
    .then(response => {
      const { totalCount, entities } = response.data;
      dispatch(actions.stockExpertisesFetched({ totalCount, entities }));
    })
    .catch(error => {
      error.clientMessage = "Can't find stockExpertises";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};
export const fetchStockExpertiseByStock = stockId => dispatch => {
  if (!stockId) {
    return dispatch(actions.stockExpertiseFetched({ stockExpertiseForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getStockExpertiseByStock(stockId)
    .then(response => {
      
      const stockExpertise = response.data;
      dispatch(actions.stockExpertiseFetched({ stockExpertiseForEdit: stockExpertise }));
      return stockExpertise;
    })
    .catch(error => {
      error.clientMessage = "Can't find stockExpertise";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
export const fetchStockExpertise = id => dispatch => {
  if (!id) {
    return dispatch(actions.stockExpertiseFetched({ stockExpertiseForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getStockExpertiseById(id)
    .then(response => {
      
      const stockExpertise = response.data;
      dispatch(actions.stockExpertiseFetched({ stockExpertiseForEdit: stockExpertise }));
      return stockExpertise;
    })
    .catch(error => {
      error.clientMessage = "Can't find stockExpertise";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteStockExpertise = id => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteStockExpertise(id)
    .then(response => {
      dispatch(actions.stockExpertiseDeleted({ id }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete stockExpertise";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createStockExpertise =(stockExpertiseForCreation) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createStockExpertise(stockExpertiseForCreation)
    .then(response => {
      const { entities } = response.data||response;
      dispatch(actions.stockExpertiseCreated({ entities }));
      return entities;
    })
    .catch(error => {
      error.clientMessage = "Can't create stockExpertise";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateStockExpertise = stockExpertise => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateStockExpertise(stockExpertise)
    .then(() => {
      dispatch(actions.stockExpertiseUpdated({ stockExpertise }));
    })
    .catch(error => {
      error.clientMessage = "Can't update stockExpertise";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};