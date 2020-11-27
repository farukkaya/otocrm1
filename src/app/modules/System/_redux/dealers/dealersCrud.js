import axios from "axios";

export const DEALERS_URL = "api/dealers";

// CREATE =>  POST: add a new dealer to the server
export function createDealer(dealer) {
  return axios.post(DEALERS_URL, { dealer });
}

// READ
export function getAllDealers() {
  return axios.get(DEALERS_URL);
}

export function getDealerById(dealerId) {
  return axios.get(`${DEALERS_URL}/${dealerId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export function findDealers(queryParams) {
  return axios.post(`${DEALERS_URL}/find`, { queryParams });
}


export function findUsersByDealer(id) {
  return axios.post(`${DEALERS_URL}/getusers`, { id });
}


// UPDATE => PUT: update the procuct on the server
export function updateDealer(dealer) {
  return axios.put(`${DEALERS_URL}/${dealer.id}`, { dealer });
}

// UPDATE Status
export function updateStatusForDealers(ids, status) {
  return axios.post(`${DEALERS_URL}/updateStatusForDealers`, {
    ids,
    status
  });
}

// DELETE => delete the dealer from the server
export function deleteDealer(dealerId) {
  return axios.delete(`${DEALERS_URL}/${dealerId}`);
}

// DELETE Dealers by ids
export function deleteDealers(ids) {
  return axios.post(`${DEALERS_URL}/deleteDealers`, { ids });
}
