import axios from "axios";

export const DOCUMENTS_URL = "Documents";

export const createDocument=document=> axios.post(`${DOCUMENTS_URL}/Insert`, document).then(resp=>resp).catch(
  function (error) {
    console.log('Show error notification!')
    return Promise.reject(error)
  }
);
export const getDocumentById=documentId =>axios.get(`${DOCUMENTS_URL}/GetById?id=${documentId}`);

export const getAllDocuments=()  =>axios.get(`${DOCUMENTS_URL}/GetAll`);

export const findDocumentsByStock=(queryParams, stockId) => axios.post(`${DOCUMENTS_URL}/Find?stockId=${stockId}`, queryParams);

export const updateDocument=document=> axios.put(`${DOCUMENTS_URL}/Update`, document);

export const updateStatusForDocuments=(ids, status) =>{
  return axios.put(`${DOCUMENTS_URL}/UpdateStatus`, {
    ids,
    status
  });
}
export const deleteDocument=documentId => axios.delete(`${DOCUMENTS_URL}/Delete?id=${documentId}`);

export const deleteDocuments=ids=> axios.post(`${DOCUMENTS_URL}/SelectedDelete`, ids);

export function uploadFile(formData,subDirectory="ForStocks") {
  return axios.post(`${DOCUMENTS_URL}/UploadFile?subDirectory=${subDirectory}`, formData).then(resp=>resp).catch(
    function (error) {
      console.log('Show error notification!')
      return Promise.reject(error)
    }
  );
}

export const getImages=(stockGuid)  =>axios.get(`${DOCUMENTS_URL}/GetImages?stockGuid=${stockGuid}`);

