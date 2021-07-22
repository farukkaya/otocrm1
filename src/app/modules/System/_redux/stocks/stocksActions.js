import * as requestFromServer from "./stocksCrud";
import {stocksSlice, callTypes} from "./stocksSlice";

const {actions} = stocksSlice;



export const fetchStocksByDealer = (queryParams, dealerId) => dispatch => {
  
  dispatch(actions.startCall({ callType: callTypes.list }));
  if (!dealerId) {
    return dispatch(actions.stocksFetched({ totalCount: 0, entities: [] }));
  }

  return requestFromServer
    .findStocksByDealer(queryParams, dealerId)
    .then(response => {
      const { totalCount, entities } = response.data;
      dispatch(actions.stocksFetched({ totalCount, entities }));
    })
    .catch(error => {
      error.clientMessage = "Can't find remarks";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchStocksByGallery = (queryParams, galleryId) => dispatch => {
  
  dispatch(actions.startCall({ callType: callTypes.list }));
  if (!galleryId) {
    return dispatch(actions.stocksFetched({ totalCount: 0, entities: [] }));
  }

  return requestFromServer
    .findStocksByGallery(queryParams, galleryId)
    .then(response => {
      const { totalCount, entities } = response.data;
      dispatch(actions.stocksFetched({ totalCount, entities }));
    })
    .catch(error => {
      error.clientMessage = "Can't find remarks";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchStocks = queryParams => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .findStocks(queryParams)
    .then(response => {
      const { totalCount, entities } = response.data;
      dispatch(actions.stocksFetched({ totalCount, entities }));
    })
    .catch(error => {
      error.clientMessage = "Can't find stocks";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchStock = id => dispatch => {
  if (!id) {
    return dispatch(actions.stockFetched({ stockForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getStockById(id)
    .then(response => {
      
      const stock = response.data;
      dispatch(actions.stockFetched({ stockForEdit: stock }));
      return stock;
    })
    .catch(error => {
      error.clientMessage = "Can't find stock";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteStock = id => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteStock(id)
    .then(response => {
      dispatch(actions.stockDeleted({ id }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete stock";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createStock =(stockForCreation) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createStock(stockForCreation)
    .then(response => {
      const { entities } = response.data||response;
      dispatch(actions.stockCreated({ entities }));
      return entities;
    })
    .catch(error => {
      error.clientMessage = "Can't create stock";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateStock = stock => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateStock(stock)
    .then(() => {
      dispatch(actions.stockUpdated({ stock }));
    })
    .catch(error => {
      error.clientMessage = "Can't update stock";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateStocksStatus = (ids, status) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateStatusForStocks(ids, status)
    .then(() => {
      dispatch(actions.stocksStatusUpdated({ ids, status }));
    })
    .catch(error => {
      error.clientMessage = "Can't update stocks status";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteStocks = ids => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteStocks(ids)
    .then(() => {
      dispatch(actions.stocksDeleted({ ids }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete stocks";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};



export const fetchInsuranceValue = (year,brandCode,typeCode) => dispatch => {
  if (!year ||!brandCode ||!typeCode) {
    return dispatch(actions.stockInsuranceValueFetched({ stockInsuranceValue: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getStockInsuranceValue(year,brandCode,typeCode)
    .then(response => {
      dispatch(actions.stockInsuranceValueFetched({ stockInsuranceValue: response.data }));
    })
    .catch(error => {
      error.clientMessage = "Can't find stock";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
