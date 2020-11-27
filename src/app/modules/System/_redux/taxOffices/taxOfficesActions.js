import * as requestFromServer from "./taxOfficesCrud";
import {taxOfficesSlice, callTypes} from "./taxOfficesSlice";

const {actions} = taxOfficesSlice;

export function fetchAllTaxOffice() {
  return function (dispatch) {
    dispatch(actions.startCall({ callType: callTypes.list }));
    return requestFromServer
      .getTaxOffices()
      .then((response) => {
        const { entities } = response.data;
        dispatch(actions.taxOfficesFetched({ entities }));
      })
      .catch((error) => {
        //error.clientMessage = error.response.data.split("\n")[0]
        dispatch(actions.catchError({ error, callType: callTypes.list }));
      });
  };
}
// export const fetchTaxOffices = (queryParams:any, professionId:number) => (dispatch:any) => {
//   dispatch(actions.startCall({ callType: callTypes.list }));
//   if (!professionId) {
//     return dispatch(actions.taxOfficesFetched({ totalCount: 0, entities: null }));
//   }

//   return requestFromServer
//     .findTaxOffices(queryParams,professionId)
//     .then(response => {
//       const { totalCount, entities } = response.data;
//       dispatch(actions.taxOfficesFetched({ totalCount, entities }));
//     })
//     .catch(error => {
//       error.clientMessage = "Can't find taxOffices";
//       dispatch(actions.catchError({ error, callType: callTypes.list }));
//     });
// };

export const fetchTaxOffice = (id) =>(dispatch) => {
  if (!id) {
    return dispatch(actions.taxOfficeFetched({ entityForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getTaxOfficeById(id)
    .then(response => {
      const taxOffice = response.data;
      dispatch(actions.taxOfficeFetched({ entityForEdit: taxOffice }));
    })
    .catch(error => {
      error.clientMessage = "Can't find taxOffice";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteTaxOffice =(id) =>(dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteTaxOffice(id)
    .then(response => {
      dispatch(actions.taxOfficeDeleted({ id }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete taxOffice";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createTaxOffice = (taxOfficeForCreation) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createTaxOffice(taxOfficeForCreation)
    .then(response => {
      const { taxOffice } = response.data;
      dispatch(actions.taxOfficeCreated({ taxOffice }));
    })
    .catch(error => {
      error.clientMessage = "Can't create taxOffice";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateTaxOffice = (taxOffice) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateTaxOffice(taxOffice)
    .then(() => {
      dispatch(actions.taxOfficeUpdated({ taxOffice }));
    })
    .catch(error => {
      error.clientMessage = "Can't update taxOffice";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteTaxOffices = (ids) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteTaxOffices(ids)
    .then(() => {
      console.log("delete return");
      dispatch(actions.taxOfficesDeleted({ ids }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete taxOffices";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
