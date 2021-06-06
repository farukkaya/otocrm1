import axios from "axios";

export const USERS_URL = "Users";

// READ
export function getAllUsers() {
  return axios.get(`${USERS_URL}/GetAll`);
}

//API=>OK
export function getUserById(userId) {
  return axios.get(`${USERS_URL}/GetById?id=${userId}`);
}
//API=>OK
export function createUser(user) {
  return axios.post(`${USERS_URL}/Insert`, user);
}
//API=>OK
export function updateUser(user) {
  return axios.put(`${USERS_URL}/Update`,  user);
}

// DELETE => delete the user from the server
export function deleteUser(userId) {
  return axios.delete(`${USERS_URL}/Delete?id=${userId}`);
}


//API=>OK
export function findUsers(queryParams) {
  return axios.post(`${USERS_URL}/Find`, queryParams);
}

// UPDATE Status
export function updateStatusForUsers(ids, status) {
  return axios.put(`${USERS_URL}/UpdateStatus`, {
    ids,
    status
  });
}
// DELETE Users by ids
export function deleteUsers(ids) {
  return axios.post(`${USERS_URL}/SelectedDelete`, ids);
}



export function getUserDetail(userId) {
  return axios.get(`${USERS_URL}/GetDetailById?id=${userId}`);
}
