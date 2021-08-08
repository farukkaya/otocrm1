import * as requestFromServer from "./documentsCrud";
import {documentsSlice, callTypes} from "./documentsSlice";

const {actions} = documentsSlice;

export const fetchDocumentsByStock = (queryParams, stockId) => dispatch => {
  
  dispatch(actions.startCall({ callType: callTypes.list }));
  if (!stockId) {
    return dispatch(actions.documentsFetched({ totalCount: 0, entities: [] }));
  }

  return requestFromServer
    .findDocumentsByStock(queryParams, stockId)
    .then(response => {
      const { totalCount, entities } = response.data;
      dispatch(actions.documentsFetched({ totalCount, entities }));
    })
    .catch(error => {
      error.clientMessage = "Can't find remarks";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};
export const fetchImages= (stockId) => dispatch => {
  
  dispatch(actions.startCall({ callType: callTypes.list }));
  if (!stockId) {
    return dispatch(actions.imagesFetched({ stockImages: [] }));
  }

  return requestFromServer
    .getImages(stockId)
    .then(response => {
      const stockImages =response.data.entities ;
      dispatch(actions.imagesFetched({ stockImages }));
    })
    .catch(error => {
      error.clientMessage = "Can't find remarks";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};
export const fetchDocument = id => dispatch => {
  if (!id) {
    return dispatch(actions.documentFetched({ stockImages: [] }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getDocumentById(id)
    .then(response => {
      
      const document = response.data;
      dispatch(actions.documentFetched({ documentForEdit: document }));
      return document;
    })
    .catch(error => {
      error.clientMessage = "Can't find document";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteDocument = id => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteDocument(id)
    .then(response => {
      dispatch(actions.documentDeleted({ id }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete document";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createDocument =(documentForCreation) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createDocument(documentForCreation)
    .then(response => {
      const { entities } = response.data||response;
      dispatch(actions.documentCreated({ entities }));
      return entities;
    })
    .catch(error => {
      error.clientMessage = "Can't create document";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateDocument = document => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateDocument(document)
    .then(() => {
      dispatch(actions.documentUpdated({ document }));
    })
    .catch(error => {
      error.clientMessage = "Can't update document";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateDocumentsStatus = (ids, status) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateStatusForDocuments(ids, status)
    .then(() => {
      dispatch(actions.documentsStatusUpdated({ ids, status }));
    })
    .catch(error => {
      error.clientMessage = "Can't update documents status";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteDocuments = ids => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteDocuments(ids)
    .then(() => {
      dispatch(actions.documentsDeleted({ ids }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete documents";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export  const  createFile =( formData,subDirectory) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .uploadFile(formData,subDirectory)
    .then(response => {
      
      //const { guid } = response.data;
      //dispatch(actions.fileCreated({ file }));
      return response.data;
    })
    .catch(error => {
      error.clientMessage = "Can't create file";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
