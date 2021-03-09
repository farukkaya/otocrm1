import http from "axios";

const upload = (file, onUploadProgress) => {
  
  let formData = new FormData();

  formData.append("file", file);

  return http.post("api/files/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

const getFiles = () => {
  return http.post("api/files/find");
};

export default {
  upload,
  getFiles,
};
