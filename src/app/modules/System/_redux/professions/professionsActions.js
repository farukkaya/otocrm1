import * as requestFromServer from "./professionsCrud";
import {professionsSlice, callTypes} from "./professionsSlice";

const {actions} = professionsSlice;

export function fetchAllProfession() {
  return function (dispatch) {
    dispatch(actions.startCall({ callType: callTypes.list }));
    return requestFromServer
      .getAllProfessions()
      .then((response) => {
        const { entities } = response.data;
        dispatch(actions.professionsFetched({ entities }));
      })
      .catch((error) => {
        //error.clientMessage = error.response.data.split("\n")[0]
        dispatch(actions.catchError({ error, callType: callTypes.list }));
      });
  };
}
export const fetchProfessions = queryParams => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .findProfessions(queryParams)
    .then(response => {
      const { totalCount, entities } = response.data;
      dispatch(actions.professionsFetched({ totalCount, entities }));
    })
    .catch(error => {
      error.clientMessage = "Can't find professions";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchProfession = id => dispatch => {
  if (!id) {
    return dispatch(actions.professionFetched({ professionForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getProfessionById(id)
    .then(response => {
      
      const profession = response.data;
      dispatch(actions.professionFetched({ professionForEdit: profession }));
    })
    .catch(error => {
      error.clientMessage = "Can't find profession";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteProfession = id => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteProfession(id)
    .then(response => {
      dispatch(actions.professionDeleted({ id }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete profession";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createProfession = professionForCreation => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createProfession(professionForCreation)
    .then(response => {
      const { profession } = response.data;
      dispatch(actions.professionCreated({ profession }));
    })
    .catch(error => {
      error.clientMessage = "Can't create profession";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateProfession = profession => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateProfession(profession)
    .then(() => {
      dispatch(actions.professionUpdated({ profession }));
    })
    .catch(error => {
      error.clientMessage = "Can't update profession";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateProfessionsStatus = (ids, status) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateStatusForProfessions(ids, status)
    .then(() => {
      dispatch(actions.professionsStatusUpdated({ ids, status }));
    })
    .catch(error => {
      error.clientMessage = "Can't update professions status";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteProfessions = ids => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteProfessions(ids)
    .then(() => {
      dispatch(actions.professionsDeleted({ ids }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete professions";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
