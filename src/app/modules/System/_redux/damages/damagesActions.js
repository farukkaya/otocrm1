import * as requestFromServer from "./damagesCrud";
import {damagesSlice, callTypes} from "./damagesSlice";

const {actions} = damagesSlice;

export const fetchDamagesByStock = (queryParams, stockId) => dispatch => {
  
  dispatch(actions.startCall({ callType: callTypes.list }));
  if (!stockId) {
    return dispatch(actions.damagesFetched({ totalCount: 0, entities: [] }));
  }

  return requestFromServer
    .findDamagesByStock(queryParams, stockId)
    .then(response => {
      const { totalCount, entities } = response.data;
      dispatch(actions.damagesFetched({ totalCount, entities }));
    })
    .catch(error => {
      error.clientMessage = "Can't find remarks";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchDamage = id => dispatch => {
  if (!id) {
    return dispatch(actions.damageFetched({ damageForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getDamageById(id)
    .then(response => {
      
      const damage = response.data;
      dispatch(actions.damageFetched({ damageForEdit: damage }));
      return damage;
    })
    .catch(error => {
      error.clientMessage = "Can't find damage";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteDamage = id => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteDamage(id)
    .then(response => {
      dispatch(actions.damageDeleted({ id }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete damage";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createDamage =(damageForCreation) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createDamage(damageForCreation)
    .then(response => {
      const { entities } = response.data||response;
      dispatch(actions.damageCreated({ entities }));
      return entities;
    })
    .catch(error => {
      error.clientMessage = "Can't create damage";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateDamage = damage => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateDamage(damage)
    .then(() => {
      dispatch(actions.damageUpdated({ damage }));
    })
    .catch(error => {
      error.clientMessage = "Can't update damage";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateDamagesStatus = (ids, status) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateStatusForDamages(ids, status)
    .then(() => {
      dispatch(actions.damagesStatusUpdated({ ids, status }));
    })
    .catch(error => {
      error.clientMessage = "Can't update damages status";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteDamages = ids => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteDamages(ids)
    .then(() => {
      dispatch(actions.damagesDeleted({ ids }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete damages";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};