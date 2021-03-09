import * as requestFromServer from "./neighborhoodsCrud";
import {neighborhoodsSlice, callTypes} from "./neighborhoodsSlice";

const {actions} = neighborhoodsSlice;

export const fetchNeighborhoodsByTown = townId => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .getAllByTown(townId)
    .then(response => {
      
      const { totalCount, entities } = response.data;
      dispatch(actions.neighborhoodsFetched({ totalCount, entities }));
    })
    .catch(error => {
      error.clientMessage = "Can't find users";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchNeighborhoods = queryParams => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .findNeighborhoods(queryParams)
    .then(response => {
      const { totalCount, entities } = response.data;
      dispatch(actions.neighborhoodsFetched({ totalCount, entities }));
    })
    .catch(error => {
      error.clientMessage = "Can't find neighborhoods";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchNeighborhood = id => dispatch => {
  if (!id) {
    return dispatch(actions.neighborhoodFetched({ neighborhoodForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getNeighborhoodById(id)
    .then(response => {
      
      const neighborhood = response.data;
      dispatch(actions.neighborhoodFetched({ neighborhoodForEdit: neighborhood }));
    })
    .catch(error => {
      error.clientMessage = "Can't find neighborhood";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteNeighborhood = id => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteNeighborhood(id)
    .then(response => {
      dispatch(actions.neighborhoodDeleted({ id }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete neighborhood";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createNeighborhood = neighborhoodForCreation => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createNeighborhood(neighborhoodForCreation)
    .then(response => {
      const { neighborhood } = response.data;
      dispatch(actions.neighborhoodCreated({ neighborhood }));
    })
    .catch(error => {
      error.clientMessage = "Can't create neighborhood";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateNeighborhood = neighborhood => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateNeighborhood(neighborhood)
    .then(() => {
      dispatch(actions.neighborhoodUpdated({ neighborhood }));
    })
    .catch(error => {
      error.clientMessage = "Can't update neighborhood";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateNeighborhoodsStatus = (ids, status) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateStatusForNeighborhoods(ids, status)
    .then(() => {
      dispatch(actions.neighborhoodsStatusUpdated({ ids, status }));
    })
    .catch(error => {
      error.clientMessage = "Can't update neighborhoods status";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteNeighborhoods = ids => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteNeighborhoods(ids)
    .then(() => {
      dispatch(actions.neighborhoodsDeleted({ ids }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete neighborhoods";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
