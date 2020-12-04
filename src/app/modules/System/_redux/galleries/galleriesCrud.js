import axios from "axios";

export const GALLERIES_URL = "api/galleries";

// CREATE =>  POST: add a new gallery to the server
export function createGallery(gallery) {
  return axios.post(GALLERIES_URL, { gallery });
}

// READ
export function getAllGalleries() {
  return axios.get(GALLERIES_URL+"/getall");
}

export function getGalleryById(galleryId) {
  return axios.get(`${GALLERIES_URL}/${galleryId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export function findGalleries(queryParams) {
  return axios.post(`${GALLERIES_URL}/find`, { queryParams });
}

export function findGalleriesByDealer(queryParams, dealerId) {
  return axios.post(`${GALLERIES_URL}find/${dealerId}`, { queryParams });
}
// UPDATE => PUT: update the procuct on the server
export function updateGallery(gallery) {
  return axios.put(`${GALLERIES_URL}/${gallery.id}`, { gallery });
}

// UPDATE Status
export function updateStatusForGalleries(ids, status) {
  
  return axios.post(`${GALLERIES_URL}/updateStatusForGalleries`, {
    ids,
    status
  });
}

// DELETE => delete the gallery from the server
export function deleteGallery(galleryId) {
  return axios.delete(`${GALLERIES_URL}/${galleryId}`);
}

// DELETE Galleries by ids
export function deleteGalleries(ids) {
  return axios.post(`${GALLERIES_URL}/deleteGalleries`, { ids });
}
