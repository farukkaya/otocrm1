import axios from "axios";

export const CARS_URL = "cars";

// CREATE =>  POST: add a new car to the server
export function createCar(car) {
  return axios.post(CARS_URL, { car });
}

// READ
export function getAllCars() {
  return axios.post(CARS_URL+"/getall");
}

export function getCarById(carId) {
  return axios.get(`${CARS_URL}/${carId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export function findCars(queryParams) {
  return axios.post(`${CARS_URL}/find`, { queryParams });
}
export function findCarsByDealer(queryParams, dealerId) {
  return axios.post(`${CARS_URL}findByDealer/${dealerId}`, { queryParams });
}


// UPDATE => PUT: update the procuct on the server
export function updateCar(car) {
  return axios.put(`${CARS_URL}/${car.id}`, { car });
}

// UPDATE Status
export function updateStatusForCars(ids, status) {
  return axios.post(`${CARS_URL}/updateStatusForCars`, {
    ids,
    status
  });
}

// DELETE => delete the car from the server
export function deleteCar(carId) {
  return axios.delete(`${CARS_URL}/${carId}`);
}

// DELETE Cars by ids
export function deleteCars(ids) {
  return axios.post(`${CARS_URL}/deleteCars`, { ids });
}
