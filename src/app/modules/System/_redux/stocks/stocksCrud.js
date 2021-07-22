import axios from "axios";

export const STOCKS_URL = "Stocks";

// CREATE =>  POST: add a new stock to the server
//API=>
export function createStock(stockWizardDto) {
  return axios.post(`${STOCKS_URL}/Insert`, stockWizardDto).then(resp=>resp).catch(
    function (error) {
      console.log('Show error notification!')
      return Promise.reject(error)
    }
  );
}

// READ
export function getAllStocks() {
  return axios.get(STOCKS_URL);
}

export function getStockById(stockId) {
  return axios.get(`${STOCKS_URL}/${stockId}`);
}
export function getStockInsuranceValue(year,brandCode,typeCode) {
  return axios.get(`${STOCKS_URL}/GetInsuranceValue?year=${year}&&brandCode=${brandCode}&&typeCode=${typeCode}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export function findStocks(queryParams) {
  return axios.post(`${STOCKS_URL}/Find`, queryParams);
}
export function findStocksByDealer(queryParams, dealerId) {
  return axios.post(`${STOCKS_URL}/findByDealer/${dealerId}`, { queryParams });
}
export function findStocksByGallery(queryParams, galleryId) {
  return axios.post(`${STOCKS_URL}findByGallery/${galleryId}`, { queryParams });
}

// UPDATE => PUT: update the procuct on the server
export function updateStock(stock) {
  return axios.put(`${STOCKS_URL}/${stock.id}`, { stock });
}

// UPDATE Status
export function updateStatusForStocks(ids, status) {
  return axios.post(`${STOCKS_URL}/updateStatusForStocks`, {
    ids,
    status
  });
}

// DELETE => delete the stock from the server
export function deleteStock(stockId) {
  return axios.delete(`${STOCKS_URL}/${stockId}`);
}

// DELETE Stocks by ids
export function deleteStocks(ids) {
  return axios.post(`${STOCKS_URL}/deleteStocks`, { ids });
}
