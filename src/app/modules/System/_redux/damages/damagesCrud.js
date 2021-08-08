import axios from "axios";

export const DAMAGES_URL = "StockDamages";

export const createDamage=damage=> axios.post(`${DAMAGES_URL}/Insert`, damage).then(resp=>resp).catch(
  function (error) {
    console.log('Show error notification!')
    return Promise.reject(error)
  }
);
export const getDamageById=damageId =>axios.get(`${DAMAGES_URL}/GetById?id=${damageId}`);

export const getAllDamages=()  =>axios.get(`${DAMAGES_URL}/GetAll`);

export const findDamagesByStock=(queryParams, stockId) => axios.post(`${DAMAGES_URL}/Find?stockId=${stockId}`, queryParams);

export const updateDamage=damage=> axios.put(`${DAMAGES_URL}/Update`, damage);

export const updateStatusForDamages=(ids, status) =>{
  return axios.put(`${DAMAGES_URL}/UpdateStatus`, {
    ids,
    status
  });
}
export const deleteDamage=damageId => axios.delete(`${DAMAGES_URL}/Delete?id=${damageId}`);

export const deleteDamages=ids=> axios.post(`${DAMAGES_URL}/SelectedDelete`, ids);
