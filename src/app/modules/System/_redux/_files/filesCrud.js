import axios from "axios";

export const DOCUMENTS_URL = "Documents";

export function findFiles(queryParams) {
  return axios.get(`${DOCUMENTS_URL}/GetAll`);
}
export function uploadFile(formData,subDirectory="ForStocks") {
  return axios.post(`${DOCUMENTS_URL}/UploadFile?subDirectory=${subDirectory}`, formData).then(resp=>resp).catch(
    function (error) {
      console.log('Show error notification!')
      return Promise.reject(error)
    }
  );
}
