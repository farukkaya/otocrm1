import toast from 'react-hot-toast';
export const ApiErrorCode= {
  Unknown :"unknown",
  EntityNotFound : "entityNotFound",
  InvalidStatusChange :"invalidStatusChange",
  UnAuthorized :"unAuthorized"
}

export default function setupAxios(axios, store) {
  //axios.defaults.baseURL = 'http://api.otocrm.net/';
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  axios.interceptors.request.use(config => {
    config.headers["Content-Type"] = config.headers["Content-Type"] == "" ? "application/json;charset=utf-8" : config.headers["Content-Type"];
    const {
      auth: { authToken }
    } = store.getState();

    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken.token || authToken}`;
    }

    return config;
  },
    err => Promise.reject(err)
  );
  axios.interceptors.response.use((response) => {
    return response;
  }, (error) => {
    const problemDetails = error.response.data;
    switch (problemDetails.code) {
      case ApiErrorCode.InvalidStatusChange:
        toast.error(`Invalid Status Change! Allowed status: ${(problemDetails.additionalDetails.allowedStatus).join(', ')}`);
        break;
      case ApiErrorCode.EntityNotFound:
        toast.error("EntityNotFound!");
        break;
      case ApiErrorCode.UnAuthorized:
        toast.error("Yetkiniz Yok!");
        setTimeout(() => {
          window.location="/"
        }, 5000);
        break;
      default:
        toast.error("Hata oluştu...");
        break;
    }
    return Promise.reject(error);
  });

}

