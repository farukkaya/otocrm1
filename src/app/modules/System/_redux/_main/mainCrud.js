import axios from "axios";

export const MAIN_URL = "Main";
//#region ABOUT ADDRESS 
export function getAllCities() {
  return axios.get(`${MAIN_URL}/GetCities`);
}

export function getTownsByCity(cityId) {
  return axios.get(`${MAIN_URL}/GetTownsByCity?cityId=${cityId}`);
}

export function getNeighborhoodsByTown(townId){
  return axios.get(`${MAIN_URL}/GetNeighborhoodsByTown?townId=${townId}`);
}
//#endregion

//#region ABOUT STOCK
export function getVehicleCategories() {
  return axios.get(`${MAIN_URL}/GetCategories`);
}
export function getVehicleBrands() {
  return axios.get(`${MAIN_URL}/GetBrands`);
}
export function getVehicleModels(categoryId,brandId){
  return axios.get(`${MAIN_URL}/GetModels?categoryId=${categoryId}&&brandId=${brandId}`);
}

export function getVehicleModelTypes(modelId){
  return axios.get(`${MAIN_URL}/GetModelTypes?modelId=${modelId}`);
}
//#endregion