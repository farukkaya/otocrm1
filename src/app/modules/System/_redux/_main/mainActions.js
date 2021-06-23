import * as requestFromServer from "./mainCrud";
import {mainSlice, callTypes} from "./mainSlice";

const {actions} = mainSlice;
//#region ABOUT ADDRESS 
export const fetchAllCity = () => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .getAllCities()
    .then(response => {
      const { totalCount, entities } = response.data;
      dispatch(actions.citiesFetched({ totalCount, entities }));
    })
    .catch(error => {
      error.clientMessage = "Can't find users";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};


export const fetchTownsByCity = cityId => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .getTownsByCity(cityId)
    .then(response => {
      const { totalCount, entities } = response.data;
      dispatch(actions.townsFetched({ totalCount, entities }));
    })
    .catch(error => {
      error.clientMessage = "Can't find towns";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchNeighborhoodsByTown = townId => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .getNeighborhoodsByTown(townId)
    .then(response => {
      
      const { totalCount, entities } = response.data;
      dispatch(actions.neighborhoodsFetched({ totalCount, entities }));
    })
    .catch(error => {
      error.clientMessage = "Can't find users";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};
//#endregion

//#region ABOUT STOCK

export const fetchAllVehicleCategory = () => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .getVehicleCategories()
    .then(response => {
      const { totalCount, entities } = response.data;
      dispatch(actions.vehicleCategoriesFetched({ totalCount, entities }));
    })
    .catch(error => {
      error.clientMessage = "Can't find users";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};


export const fetchAllVehicleBrand = () => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .getVehicleBrands()
    .then(response => {
      const { totalCount, entities } = response.data;
      dispatch(actions.vehicleBrandsFetched({ totalCount, entities }));
    })
    .catch(error => {
      error.clientMessage = "Can't find users";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchAllVehicleModel = (categoryId,brandId) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .getVehicleModels(categoryId,brandId)
    .then(response => {
      
      const { totalCount, entities } = response.data;
      dispatch(actions.vehicleModelsFetched({ totalCount, entities }));
    })
    .catch(error => {
      error.clientMessage = "Can't find users";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchAllVehicleModelType = (modelId) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .getVehicleModelTypes(modelId)
    .then(response => {
      
      const { totalCount, entities } = response.data;
      dispatch(actions.vehicleModelTypesFetched({ totalCount, entities }));
    })
    .catch(error => {
      error.clientMessage = "Can't find users";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

//#endregion
