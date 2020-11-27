import * as requestFromServer from "./townsCrud";
import {townsSlice, callTypes} from "./townsSlice";

const {actions} = townsSlice;

export const fetchTownsByCity = cityId => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .getAllByCity(cityId)
    .then(response => {
      const { totalCount, entities } = response.data;
      dispatch(actions.townsFetched({ totalCount, entities }));
    })
    .catch(error => {
      error.clientMessage = "Can't find towns";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchTowns = queryParams => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .findTowns(queryParams)
    .then(response => {
      const { totalCount, entities } = response.data;
      dispatch(actions.townsFetched({ totalCount, entities }));
    })
    .catch(error => {
      error.clientMessage = "Can't find towns";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchTown = id => dispatch => {
  if (!id) {
    return dispatch(actions.townFetched({ townForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getTownById(id)
    .then(response => {
      
      const town = response.data;
      dispatch(actions.townFetched({ townForEdit: town }));
    })
    .catch(error => {
      error.clientMessage = "Can't find town";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteTown = id => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteTown(id)
    .then(response => {
      dispatch(actions.townDeleted({ id }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete town";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createTown = townForCreation => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createTown(townForCreation)
    .then(response => {
      const { town } = response.data;
      dispatch(actions.townCreated({ town }));
    })
    .catch(error => {
      error.clientMessage = "Can't create town";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateTown = town => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateTown(town)
    .then(() => {
      dispatch(actions.townUpdated({ town }));
    })
    .catch(error => {
      error.clientMessage = "Can't update town";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateTownsStatus = (ids, status) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateStatusForTowns(ids, status)
    .then(() => {
      dispatch(actions.townsStatusUpdated({ ids, status }));
    })
    .catch(error => {
      error.clientMessage = "Can't update towns status";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteTowns = ids => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteTowns(ids)
    .then(() => {
      dispatch(actions.townsDeleted({ ids }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete towns";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
