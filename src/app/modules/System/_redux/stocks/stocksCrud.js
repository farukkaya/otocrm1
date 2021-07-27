import axios from "axios";

export const STOCKS_URL = "Stocks";

//API=>OK
export function createStock(stockWizardDto) {
  return axios.post(`${STOCKS_URL}/Insert`, stockWizardDto).then(resp=>resp).catch(
    function (error) {
      console.log('Show error notification!')
      return Promise.reject(error)
    }
  );
}
//API=>OK
export function findStocks(queryParams) {
  return axios.post(`${STOCKS_URL}/Find`, queryParams);
}
export const getStockById=(stockId) =>axios.get(`${STOCKS_URL}/GetById?id=${stockId}`);



// READ
export function getAllStocks() {
  return axios.get(STOCKS_URL);
}


export function getStockInsuranceValue(year,brandCode,typeCode) {
  return axios.get(`${STOCKS_URL}/GetInsuranceValue?year=${year}&&brandCode=${brandCode}&&typeCode=${typeCode}`);
}


export function findStocksByDealer(queryParams, dealerId) {
  return axios.post(`${STOCKS_URL}/findByDealer/${dealerId}`, { queryParams });
}
export function findStocksByGallery(queryParams, galleryId) {
  return axios.post(`${STOCKS_URL}findByGallery/${galleryId}`, { queryParams });
}

// UPDATE => PUT: update the procuct on the server
export function updateStock(stock) {
  return axios.put(`${STOCKS_URL}/Update`, stock);
}

// UPDATE Status
export function updateStatusForStocks(ids, status) {
  return axios.put(`${STOCKS_URL}/UpdateStatus`, {
    ids,
    status
  });
}

// DELETE => delete the stock from the server
export function deleteStock(stockId) {
  return axios.delete(`${STOCKS_URL}/Delete?id=${stockId}`);
}

// DELETE Stocks by ids
export function deleteStocks(ids) {
  return axios.post(`${STOCKS_URL}/SelectedDelete`, ids);
}



export const getStockDetail=(stockId)=>axios.get(`${STOCKS_URL}/GetDetailById?id=${stockId}`);

export const getStockExpertise=(stockId)=>axios.get(`${STOCKS_URL}/GetExpertiseById?id=${stockId}`);