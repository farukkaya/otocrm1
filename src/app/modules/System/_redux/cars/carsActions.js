import * as requestFromServer from "./carsCrud";
import {carsSlice, callTypes} from "./carsSlice";

const {actions} = carsSlice;



export const fetchCarsByDealer = (queryParams, dealerId) => dispatch => {
  
  dispatch(actions.startCall({ callType: callTypes.list }));
  if (!dealerId) {
    return dispatch(actions.carsFetched({ totalCount: 0, entities: null }));
  }

  return requestFromServer
    .findCarsByDealer(queryParams, dealerId)
    .then(response => {
      const { totalCount, entities } = response.data;
      dispatch(actions.carsFetched({ totalCount, entities }));
    })
    .catch(error => {
      error.clientMessage = "Can't find remarks";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchCarsByGallery = (queryParams, galleryId) => dispatch => {
  
  dispatch(actions.startCall({ callType: callTypes.list }));
  if (!galleryId) {
    return dispatch(actions.carsFetched({ totalCount: 0, entities: null }));
  }

  return requestFromServer
    .findCarsByGallery(queryParams, galleryId)
    .then(response => {
      const { totalCount, entities } = response.data;
      dispatch(actions.carsFetched({ totalCount, entities }));
    })
    .catch(error => {
      error.clientMessage = "Can't find remarks";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchCars = () => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .getAllCars()
    .then(response => {

      const { totalCount, entities } = response.data;
      //console.log(entities);
      var duplicateCars=entities.map(function(elem) {
        return {
          id:elem.brandCode,
          name: elem.brandName,
        } 
      }).filter((value, index, self) => self.indexOf(value) === index)
      var duplicateModels=entities.map(function(elem) {
        return {
          id:elem.modelCode,
          brandId:elem.brandCode,
          name: elem.modelName,
        } 
      }).filter((value, index, self) => self.indexOf(value) === index);

      var uniqeCars=removeDuplicates(duplicateCars);
      var uniqeModels=removeDuplicates(duplicateModels);
      console.log(uniqeCars);
      console.log(uniqeModels);
      dispatch(actions.carsFetched({ totalCount, entities }));
    })
    .catch(error => {
      error.clientMessage = "Can't find cars";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};
const removeDuplicates=(duplicates)=>{
  const flag={};
  const uniqe=[];
  duplicates.forEach((element) => {
    if(!flag[element.id]){
      flag[element.id]=true;
      uniqe.push(element);
    }
  });
  return uniqe;
}
export const fetchCar = id => dispatch => {
  if (!id) {
    return dispatch(actions.carFetched({ carForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getCarById(id)
    .then(response => {
      
      const car = response.data;
      dispatch(actions.carFetched({ carForEdit: car }));
      return car;
    })
    .catch(error => {
      error.clientMessage = "Can't find car";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteCar = id => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteCar(id)
    .then(response => {
      dispatch(actions.carDeleted({ id }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete car";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createCar = carForCreation => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createCar(carForCreation)
    .then(response => {
      const { car } = response.data;
      dispatch(actions.carCreated({ car }));
      return car;
    })
    .catch(error => {
      error.clientMessage = "Can't create car";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateCar = car => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateCar(car)
    .then(() => {
      dispatch(actions.carUpdated({ car }));
    })
    .catch(error => {
      error.clientMessage = "Can't update car";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateCarsStatus = (ids, status) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateStatusForCars(ids, status)
    .then(() => {
      dispatch(actions.carsStatusUpdated({ ids, status }));
    })
    .catch(error => {
      error.clientMessage = "Can't update cars status";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteCars = ids => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteCars(ids)
    .then(() => {
      dispatch(actions.carsDeleted({ ids }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete cars";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
