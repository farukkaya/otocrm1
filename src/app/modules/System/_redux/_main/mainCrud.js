import axios from "axios";

export const MAIN_URL = "Main";

export function getAllCities() {
  return axios.get(`${MAIN_URL}/GetCities`);
}

export function getTownsByCity(cityId) {
  return axios.get(`${MAIN_URL}/GetTownsByCity?cityId=${cityId}`);
}

export function getNeighborhoodsByTown(townId){
  return axios.get(`${MAIN_URL}/GetNeighborhoodsByTown?townId=${townId}`);
}
