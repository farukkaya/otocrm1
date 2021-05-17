import * as requestFromServer from "./mainCrud";
import {mainSlice, callTypes} from "./mainSlice";

const {actions} = mainSlice;

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