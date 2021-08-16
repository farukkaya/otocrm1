import axios from "axios";

export const CUSTOMERS_URL = "Customers";


export const createCustomer=customerWizardDto=>axios.post(`${CUSTOMERS_URL}/Insert`, customerWizardDto).then(resp=>resp).catch(
  function (error) {
    console.log('Show error notification!')
    return Promise.reject(error)
  }
);

export const getAllCustomers=()=>axios.get(CUSTOMERS_URL+"/GetAll");

export const getCustomerById=(customerId) =>axios.get(`${CUSTOMERS_URL}/GetById?id=${customerId}`);

export const findCustomers=queryParams=> axios.post(`${CUSTOMERS_URL}/Find`, queryParams);

export const updateCustomer=customer=>axios.put(`${CUSTOMERS_URL}/Update`, customer);

export const updateStatusForCustomers=(ids, status) =>axios.post(`${CUSTOMERS_URL}/updateStatusForCustomers`, {
  ids,
  status
});

export const deleteCustomer=customerId=> axios.delete(`${CUSTOMERS_URL}/Delete?id=${customerId}`);

export const deleteCustomers=ids=> axios.post(`${CUSTOMERS_URL}/SelectedDelete`, ids);
