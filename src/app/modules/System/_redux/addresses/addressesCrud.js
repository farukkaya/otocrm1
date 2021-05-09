import axios from "axios";

export const USERS_URL = "addresses";

// CREATE =>  POST: add a new address to the server
export function createAddress(address) {
  return axios.post(USERS_URL, { address });
}

// READ
export function getAllAddresses() {
  return axios.get(USERS_URL);
}

export function getAddressById(addressId) {
  return axios.get(`${USERS_URL}/${addressId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export function findAddresses(queryParams) {
  return axios.post(`${USERS_URL}/find`, { queryParams });
}



// UPDATE => PUT: update the procuct on the server
export function updateAddress(address) {
  return axios.put(`${USERS_URL}/${address.id}`, { address });
}

// UPDATE Status
export function updateStatusForAddresses(ids, status) {
  return axios.post(`${USERS_URL}/updateStatusForAddresses`, {
    ids,
    status
  });
}

// DELETE => delete the address from the server
export function deleteAddress(addressId) {
  return axios.delete(`${USERS_URL}/${addressId}`);
}

// DELETE Addresses by ids
export function deleteAddresses(ids) {
  return axios.post(`${USERS_URL}/deleteAddresses`, { ids });
}
