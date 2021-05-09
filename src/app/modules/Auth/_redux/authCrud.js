import axios from "axios";

export const LOGIN_URL = "Authorizations/Login";
export const REGISTER_URL = "auth/register";
export const REQUEST_PASSWORD_URL = "auth/forgot-password";

export const ME_URL = "Authorizations/GetUserByToken";

export function login(email, password) {
    let data ={
      "email": email,
      "password": password,
      "keepSession": true,
      "maxSessionLimit": 10
    }
  return axios.post(LOGIN_URL, data);
}

export function register(email, fullname, username, password) {
  return axios.post(REGISTER_URL, { email, fullname, username, password });
}

export function requestPassword(email) {
  return axios.post(REQUEST_PASSWORD_URL, { email });
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  return axios.get(ME_URL);
}
