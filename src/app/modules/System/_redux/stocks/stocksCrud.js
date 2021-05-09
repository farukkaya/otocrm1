import axios from "axios";

export const STOCKS_URL = "stocks";

// CREATE =>  POST: add a new stock to the server
export function createStock(stock) {
  return axios.post(STOCKS_URL, { stock });
}

// READ
export function getAllStocks() {
  return axios.get(STOCKS_URL);
}

export function getStockById(stockId) {
  return axios.get(`${STOCKS_URL}/${stockId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export function findStocks(queryParams) {
  
  return axios.post(`${STOCKS_URL}/find`, { queryParams });
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
