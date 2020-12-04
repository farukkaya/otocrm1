import * as requestFromServer from "./dealersCrud";
import {dealersSlice, callTypes} from "./dealersSlice";

const {actions} = dealersSlice;

export const fetchUsersByDealer = id => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .findUsersByDealer(id)
    .then(response => {
      const { totalCount, entities } = response.data;
      dispatch(actions.usersFetched({ totalCount, entities }));
    })
    .catch(error => {
      error.clientMessage = "Can't find users";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchDealers = queryParams => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .findDealers(queryParams)
    .then(response => {
      const { totalCount, entities } = response.data;
      dispatch(actions.dealersFetched({ totalCount, entities }));
    })
    .catch(error => {
      error.clientMessage = "Can't find dealers";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchDealer = id => dispatch => {
  if (!id) {
    return dispatch(actions.dealerFetched({ dealerForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getDealerById(id)
    .then(response => {
      
      const dealer = response.data;
      dispatch(actions.dealerFetched({ dealerForEdit: dealer }));
      return dealer;
    })
    .catch(error => {
      error.clientMessage = "Can't find dealer";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteDealer = id => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteDealer(id)
    .then(response => {
      dispatch(actions.dealerDeleted({ id }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete dealer";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createDealer = dealerForCreation => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createDealer(dealerForCreation)
    .then(response => {
      const { dealer } = response.data;
      dispatch(actions.dealerCreated({ dealer }));
    })
    .catch(error => {
      error.clientMessage = "Can't create dealer";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateDealer = dealer => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateDealer(dealer)
    .then(() => {
      dispatch(actions.dealerUpdated({ dealer }));
    })
    .catch(error => {
      error.clientMessage = "Can't update dealer";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateDealersStatus = (ids, status) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateStatusForDealers(ids, status)
    .then(() => {
      dispatch(actions.dealersStatusUpdated({ ids, status }));
    })
    .catch(error => {
      error.clientMessage = "Can't update dealers status";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteDealers = ids => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteDealers(ids)
    .then(() => {
      dispatch(actions.dealersDeleted({ ids }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete dealers";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
