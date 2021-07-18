import * as requestFromServer from "./filesCrud";
import {filesSlice, callTypes} from "./filesSlice";

const {actions} = filesSlice;




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
