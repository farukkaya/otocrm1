import * as requestFromServer from "./usersCrud";
import {usersSlice, callTypes} from "./filesSlice";

const {actions} = usersSlice;




export const fetchFiles = queryParams => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .findFiles(queryParams)
    .then(response => {
      const { totalCount, entities } = response.data;
      dispatch(actions.filesFetched({ totalCount, entities }));
    })
    .catch(error => {
      error.clientMessage = "Can't find files";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};


export const createFile = fileForCreation => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .uploadFile(fileForCreation)
    .then(response => {
      const { file } = response.data;
      dispatch(actions.fileCreated({ file }));
      return file;
    })
    .catch(error => {
      error.clientMessage = "Can't create file";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
