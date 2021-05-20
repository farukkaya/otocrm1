import axios from "axios";

export const DEALERS_URL = "Dealers";
export const USERS_URL = "users";

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
//API=>OK
export function findDealers(queryParams) {
  return axios.post(`${DEALERS_URL}/find`, queryParams);
}
//API=>OK
export function getAllDealersForCombo() {
  return axios.get(`${DEALERS_URL}/GetAllForCombo`);
}

// CREATE =>  POST: add a new dealer to the server
//API=>OK
export function createDealer(dealerWizardDto) {
  return axios.post(`${DEALERS_URL}/Insert`, dealerWizardDto).then((e)=>{
    
  });
}
// DELETE => delete the dealer from the server
//API=>OK
export function deleteDealer(dealerId) {
  return axios.delete(`${DEALERS_URL}/Delete?id=${dealerId}`);
}

// DELETE Dealers by ids
//API=>OK
export function deleteDealers(ids) {
  return axios.post(`${DEALERS_URL}/SelectedDelete`, ids);
}
//API=>OK
export function getDealerById(dealerId) {
  return axios.get(`${DEALERS_URL}/GetById?id=${dealerId}`);
}

// UPDATE Status
//API=>OK
export function updateStatusForDealers(ids, status) {
  return axios.put(`${DEALERS_URL}/UpdateStatus`, {
    ids,
    status
  });
}

// UPDATE => PUT: update the procuct on the server
//API=>OK
export function updateDealer(dealer) {
  return axios.put(`${DEALERS_URL}/update`, dealer);
}








export function findGalleriesByParent(queryParams, dealerId) {
  return axios.post(`${DEALERS_URL}/GetAllByParent/${dealerId}`, { queryParams });
}


