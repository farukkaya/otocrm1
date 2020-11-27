import * as requestFromServer from "./galleriesCrud";
import {galleriesSlice, callTypes} from "./galleriesSlice";

const {actions} = galleriesSlice;
export function fetchAllGallery() {
  return function (dispatch) {
    dispatch(actions.startCall({ callType: callTypes.list }));
    return requestFromServer
      .getAllGalleries()
      .then((response) => {
        
        const { entities } = response.data;
        dispatch(actions.galleriesFetched({ entities }));
      })
      .catch((error) => {
        

        //error.clientMessage = error.response.data.split("\n")[0]
        dispatch(actions.catchError({ error, callType: callTypes.list }));
      });
  };
}
export const fetchGalleries = queryParams => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .findGalleries(queryParams)
    .then(response => {
      const { totalCount, entities } = response.data;
      dispatch(actions.galleriesFetched({ totalCount, entities }));
    })
    .catch(error => {
      error.clientMessage = "Can't find galleries";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchGallery = id => dispatch => {
  if (!id) {
    return dispatch(actions.galleryFetched({ galleryForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getGalleryById(id)
    .then(response => {
      
      const gallery = response.data;
      dispatch(actions.galleryFetched({ galleryForEdit: gallery }));
    })
    .catch(error => {
      error.clientMessage = "Can't find gallery";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteGallery = id => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteGallery(id)
    .then(response => {
      dispatch(actions.galleryDeleted({ id }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete gallery";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createGallery = galleryForCreation => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createGallery(galleryForCreation)
    .then(response => {
      const { gallery } = response.data;
      dispatch(actions.galleryCreated({ gallery }));
    })
    .catch(error => {
      error.clientMessage = "Can't create gallery";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateGallery = gallery => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateGallery(gallery)
    .then(() => {
      dispatch(actions.galleryUpdated({ gallery }));
    })
    .catch(error => {
      error.clientMessage = "Can't update gallery";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateGalleriesStatus = (ids, status) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateStatusForGalleries(ids, status)
    .then(() => {
      dispatch(actions.galleriesStatusUpdated({ ids, status }));
    })
    .catch(error => {
      error.clientMessage = "Can't update galleries status";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteGalleries = ids => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteGalleries(ids)
    .then(() => {
      dispatch(actions.galleriesDeleted({ ids }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete galleries";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
