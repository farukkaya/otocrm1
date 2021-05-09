import axios from "axios";

export const PROFESSIONS_URL = "professions";

// CREATE =>  POST: add a new profession to the server
export function createProfession(profession) {
  return axios.post(PROFESSIONS_URL, { profession });
}

// READ
export function getAllProfessions() {
  
  return axios.post("professions/getall");
}

export function getProfessionById(professionId) {
  return axios.get(`${PROFESSIONS_URL}/${professionId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export function findProfessions(queryParams) {
  return axios.post(`${PROFESSIONS_URL}/find`, { queryParams });
}

// UPDATE => PUT: update the procuct on the server
export function updateProfession(profession) {
  return axios.put(`${PROFESSIONS_URL}/${profession.id}`, { profession });
}

// UPDATE Status
export function updateStatusForProfessions(ids, status) {
  return axios.post(`${PROFESSIONS_URL}/updateStatusForProfessions`, {
    ids,
    status
  });
}

// DELETE => delete the profession from the server
export function deleteProfession(professionId) {
  return axios.delete(`${PROFESSIONS_URL}/${professionId}`);
}

// DELETE Professions by ids
export function deleteProfessions(ids) {
  return axios.post(`${PROFESSIONS_URL}/deleteProfessions`, { ids });
}
