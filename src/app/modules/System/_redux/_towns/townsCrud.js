import axios from "axios";

export const TOWNS_URL = "towns";

// CREATE =>  POST: add a new town to the server
export function createTown(town) {
  return axios.post(TOWNS_URL, { town });
}

// READ
export function getAllTowns() {
  return axios.get(TOWNS_URL);
}

export function getTownById(townId) {
  return axios.get(`${TOWNS_URL}/${townId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export function findTowns(queryParams) {
  return axios.post(`${TOWNS_URL}/find`, { queryParams });
}


export function getAllByCity(cityId) {
  return axios.post(`${TOWNS_URL}/getAllByCity`, { cityId });
}


// UPDATE => PUT: update the procuct on the server
export function updateTown(town) {
  return axios.put(`${TOWNS_URL}/${town.id}`, { town });
}

// UPDATE Status
export function updateStatusForTowns(ids, status) {
  return axios.post(`${TOWNS_URL}/updateStatusForTowns`, {
    ids,
    status
  });
}

// DELETE => delete the town from the server
export function deleteTown(townId) {
  return axios.delete(`${TOWNS_URL}/${townId}`);
}

// DELETE Towns by ids
export function deleteTowns(ids) {
  return axios.post(`${TOWNS_URL}/deleteTowns`, { ids });
}
