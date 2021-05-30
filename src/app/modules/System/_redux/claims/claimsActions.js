import * as requestFromServer from "./claimsCrud";
import {claimsSlice, callTypes} from "./claimsSlice";

const {actions} = claimsSlice;
export const fetchAll = () => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .getAllClaims()
    .then(response => {
      const {entities} = response.data;
      dispatch(actions.allClaimsFetched({ entities}));
    })
    .catch(error => {
      error.clientMessage = "Can't find claims";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};
export const fetchClaimsForTransfer = userId => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .getAllClaimsForTransfer(userId)
    .then(response => {
      const {entities} = response.data;
      dispatch(actions.ownClaimsFetched({ entities}));
    })
    .catch(error => {
      error.clientMessage = "Can't find claims";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchClaims = queryParams => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .findClaims(queryParams)
    .then(response => {
      const { totalCount, entities } = response.data;
      dispatch(actions.claimsFetched({ totalCount, entities }));
    })
    .catch(error => {
      error.clientMessage = "Can't find claims";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchClaim = id => dispatch => {
  if (!id) {
    return dispatch(actions.claimFetched({ claimForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getClaimById(id)
    .then(response => {
      
      const claim = response.data;
      dispatch(actions.claimFetched({ claimForEdit: claim }));
      return claim;
    })
    .catch(error => {
      error.clientMessage = "Can't find claim";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteClaim = id => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteClaim(id)
    .then(response => {
      dispatch(actions.claimDeleted({ id }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete claim";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createClaim = claimForCreation => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createClaim(claimForCreation)
    .then(response => {
     
      if(response.data.success){
        const claim  = response.data.entities;
        dispatch(actions.claimCreated({ claim }));
      }
    })
    .catch(error => {
      error.clientMessage = "Can't create claim";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateClaim = claim => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateClaim(claim)
    .then(() => {
      dispatch(actions.claimUpdated({ claim }));
    })
    .catch(error => {
      error.clientMessage = "Can't update claim";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateClaimsStatus = (ids, status) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateStatusForClaims(ids, status)
    .then(() => {
      dispatch(actions.claimsStatusUpdated({ ids, status }));
    })
    .catch(error => {
      error.clientMessage = "Can't update claims status";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteClaims = ids => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteClaims(ids)
    .then(() => {
      dispatch(actions.claimsDeleted({ ids }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete claims";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};


/////////////////////////////////////////////////////////////

export const updateUserClaimsStatus = (ids,userId, claimType,status) => dispatch => {
  userId=+userId;
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateStatusForUserClaims(ids,userId,claimType,status)
    .then(() => {
      dispatch(actions.userClaimsStatusUpdated({ ids, status }));
    })
    .catch(error => {
      error.clientMessage = "Can't update claims status";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const fetchUserClaim = (claimId,userId,claimType) => dispatch => {
  if (!claimId) {
    return dispatch(actions.claimFetched({ userClaimForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getUserClaimById(claimId,userId,claimType)
    .then(response => {
      
      const claim = response.data;
      dispatch(actions.userClaimFetched({ userClaimForEdit: claim }));
      return claim;
    })
    .catch(error => {
      error.clientMessage = "Can't find claim";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};


export const deleteUserClaims = (ids,userId, claimType) => dispatch => {
  userId=+userId;
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteUserClaims(ids,userId,claimType)
    .then(() => {
      dispatch(actions.claimsDeleted({ ids }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete claims";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createUserClaim = userClaimDto => dispatch => {
  userClaimDto.userId=+userClaimDto.userId
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createUserClaim(userClaimDto)
    .then(response => {
     
      if(response.data.success){
        const claim  = response.data.entities;
        dispatch(actions.claimCreated({ claim }));
      }
    })
    .catch(error => {
      error.clientMessage = "Can't create claim";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};


