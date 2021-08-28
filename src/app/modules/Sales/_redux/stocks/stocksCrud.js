import axios from "axios";

export const STOCKS_URL = "Stocks";

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
  
  return axios.post(`${STOCKS_URL}/Find`, { queryParams });
}
export const findStocksByDealer=(queryParams, dealerId) =>axios.post(`${STOCKS_URL}/FindByDealer?dealerId=${dealerId}`,  queryParams);

export const findInterestedStocks=(queryParams, customerId) =>axios.post(`${STOCKS_URL}/FindInterestedStocks?customerId=${customerId}`,  queryParams);

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
export const deleteInterestedStocks=(customerId, ids) =>axios.post(`${STOCKS_URL}/DeleteInterestedStocks?customerId=${customerId}`,  ids);
