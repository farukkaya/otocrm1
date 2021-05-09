import axios from "axios";

export const USERS_URL = "files";

export function getAllFiles() {
  return axios.get(USERS_URL);
}
export function uploadFile(file) {
  return axios.post(`${USERS_URL}/upload`, { file });
}
