import axios from "axios";

export const NEIGHBORHOODS_URL = "neighborhoods";

// CREATE =>  POST: add a new neighborhood to the server
export function createNeighborhood(neighborhood) {
  return axios.post(NEIGHBORHOODS_URL, { neighborhood });
}

// READ
export function getAllNeighborhoods() {
  return axios.get(NEIGHBORHOODS_URL);
}

export function getNeighborhoodById(neighborhoodId) {
  return axios.get(`${NEIGHBORHOODS_URL}/${neighborhoodId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export function findNeighborhoods(queryParams) {
  return axios.post(`${NEIGHBORHOODS_URL}/find`, { queryParams });
}


export function getAllByTown(townId) {
  return axios.post(`${NEIGHBORHOODS_URL}/getAllByTown`, { townId });
}


// UPDATE => PUT: update the procuct on the server
export function updateNeighborhood(neighborhood) {
  return axios.put(`${NEIGHBORHOODS_URL}/${neighborhood.id}`, { neighborhood });
}

// UPDATE Status
export function updateStatusForNeighborhoods(ids, status) {
  return axios.post(`${NEIGHBORHOODS_URL}/updateStatusForNeighborhoods`, {
    ids,
    status
  });
}

// DELETE => delete the neighborhood from the server
export function deleteNeighborhood(neighborhoodId) {
  return axios.delete(`${NEIGHBORHOODS_URL}/${neighborhoodId}`);
}

// DELETE Neighborhoods by ids
export function deleteNeighborhoods(ids) {
  return axios.post(`${NEIGHBORHOODS_URL}/deleteNeighborhoods`, { ids });
}
