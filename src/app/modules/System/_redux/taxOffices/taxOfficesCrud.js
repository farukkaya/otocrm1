
import axios from "axios";

export const TAXOFFICES_URL = "api/taxOffices/getall";
export const TAXOFFICES_GETBYID_URL = "/TaxOffices/GetById";
export const TAXOFFICES_INSERT_URL = "/TaxOffices/insert";
export const TAXOFFICES_UPDATE_URL = "/TaxOffices/update";
export const TAXOFFICES_DELETE_URL = "/TaxOffices/delete";
export const TAXOFFICES_DELETE_TAXOFFICES_URL = "/TaxOffices/selectedDelete";
//export const TAXOFFICES_FIND_URL = "/OperationTaxOffices/Find";

// CREATE =>  POST: add a new taxOffice to the server
export const createTaxOffice=(taxOffice) =>axios.post(TAXOFFICES_INSERT_URL, taxOffice);

// READ
// Server should return filtered taxOffices by professionId
export const getAllByCity=(cityId)=> axios.get(`${TAXOFFICES_URL}ByCity?cityId=${cityId}`);

export const getTaxOffices=() =>axios.post(TAXOFFICES_URL)
export const getTaxOfficeById=(taxOfficeId) =>axios.get(`${TAXOFFICES_GETBYID_URL}?id=${taxOfficeId}`)

// Server should return sorted/filtered taxOffices and merge with items from state
// TODO: Change your URL to REAL API, right now URL is 'api/taxOfficesfind/{professionId}'. Should be 'api/taxOffices/find/{professionId}'!!!
//export const findTaxOffices=(queryParams:any, professionId:number)=>axios.post(`${TAXOFFICES_FIND_URL}?id=${professionId}`, queryParams)

// UPDATE => PUT: update the taxOffice
export const updateTaxOffice=(taxOffice) => axios.put(TAXOFFICES_UPDATE_URL,  taxOffice);
// DELETE => delete the taxOffice
export const deleteTaxOffice=(taxOfficeId) =>axios.delete(`${TAXOFFICES_DELETE_URL}?id=${taxOfficeId}`)

export const deleteTaxOffices=(ids) =>axios.post(TAXOFFICES_DELETE_TAXOFFICES_URL,  ids);