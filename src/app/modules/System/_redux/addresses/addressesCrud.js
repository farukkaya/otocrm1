import axios from "axios";

export const ADDRESSES_URL = "Addresses";

// CREATE =>  POST: add a new address to the server
export function createAddress(address) {
  return axios.post(`${ADDRESSES_URL}/Insert`,address);
}

// READ
export function getAllAddresses() {
  return axios.get(`${ADDRESSES_URL}/GetAll`);
}

export function getAddressById(addressId) {
  return axios.get(`${ADDRESSES_URL}/GetById?id=${addressId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export function findAddresses(queryParams) {
  return axios.post(`${ADDRESSES_URL}/Find`, queryParams);
}



// UPDATE => PUT: update the procuct on the server
export function updateAddress(address) {
  return axios.put(`${ADDRESSES_URL}/Update`, address);
}

// UPDATE Status
export function updateStatusForAddresses(ids, status) {
  return axios.post(`${ADDRESSES_URL}/UpdateStatus`, {
    ids,
    status
  });
}

// DELETE => delete the address from the server
export function deleteAddress(addressId) {
  return axios.delete(`${ADDRESSES_URL}/Delete?id=${addressId}`);
}

// DELETE Addresses by ids
export function deleteAddresses(ids) {
  return axios.post(`${ADDRESSES_URL}/SelectedDelete`, ids);
}
